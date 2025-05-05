import asyncio
from playwright.async_api import async_playwright
import csv
from typing import List, Dict
import time

async def scrape_google_maps_reviews_async(url: str, max_reviews: int = 20) -> List[Dict]:
    """
    Scrape reviews from a Google Maps location URL.
    
    Args:
        url (str): The Google Maps URL of the location
        max_reviews (int): Maximum number of reviews to scrape
        
    Returns:
        List[Dict]: List of review dictionaries containing reviewer, rating, text, and date
    """
    results = []
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        
        try:
            # Navigate to the page and wait for it to load
            await page.goto(url)
            await page.wait_for_load_state('networkidle')
            await page.wait_for_timeout(5000)  # Give more time for initial load
            
            # First, try to find and click the reviews button
            try:
                # Try different selectors for the reviews button
                review_button_selectors = [
                    'button[aria-label*="Reviews"]',
                    'button[aria-label*="reviews"]',
                    'button[jsaction*="pane.reviewChart"]',
                    'button[data-tab-index="1"]'
                ]
                
                for selector in review_button_selectors:
                    try:
                        reviews_button = await page.wait_for_selector(selector, timeout=3000)
                        if reviews_button:
                            await reviews_button.click()
                            await page.wait_for_timeout(3000)
                            break
                    except:
                        continue
            except Exception as e:
                print("⚠️ Could not click reviews button - might already be on reviews tab")
            
            # Wait for the reviews panel to load
            await page.wait_for_timeout(5000)
            
            # Try to find the reviews panel with multiple selectors
            review_panel_selectors = [
                'div[aria-label*="Reviews"]',
                'div[class*="m6QErb"]',
                'div[class*="dS8AEf"]',
                'div[class*="review-dialog-list"]',
                'div[class*="review-panel"]',
                'div[class*="review-list"]',
                'div[class*="reviews"]'
            ]
            
            review_panel = None
            for selector in review_panel_selectors:
                try:
                    review_panel = await page.wait_for_selector(selector, timeout=3000)
                    if review_panel:
                        print(f"✅ Found review panel with selector: {selector}")
                        break
                except:
                    continue
            
            if not review_panel:
                print("❌ Could not find review panel")
                # Take a screenshot for debugging
                await page.screenshot(path="debug_screenshot.png")
                return results
            
            # Scroll to load more reviews
            last_height = 0
            scroll_attempts = 0
            max_scroll_attempts = 20
            
            while scroll_attempts < max_scroll_attempts:
                # Scroll within the review panel
                await review_panel.evaluate('el => el.scrollBy(0, el.scrollHeight)')
                await page.wait_for_timeout(2000)
                
                # Check if we've reached the bottom
                new_height = await review_panel.evaluate('el => el.scrollHeight')
                if new_height == last_height:
                    scroll_attempts += 1
                else:
                    scroll_attempts = 0
                last_height = new_height
                
                # Check if we have enough reviews
                review_elements = await page.query_selector_all('div[class*="jftiEf"]')
                if len(review_elements) >= max_reviews:
                    break
            
            # Extract reviews
            review_elements = await page.query_selector_all('div[class*="jftiEf"]')
            print(f"🔍 Found {len(review_elements)} review elements")
            
            for review in review_elements[:max_reviews]:
                try:
                    # Expand review text if there's a "More" button
                    more_button = await review.query_selector('button[class*="w8nwRe"]')
                    if more_button:
                        await more_button.click()
                        await page.wait_for_timeout(1000)
                    
                    # Extract review data with multiple selector attempts
                    name = await review.query_selector('div[class*="d4r55"]')
                    rating = await review.query_selector('span[class*="kvMYJc"]')
                    text = await review.query_selector('span[jsname="bN97Pc"]')
                    date = await review.query_selector('span[class*="rsqaWe"]')
                    
                    if all([name, rating, text, date]):
                        review_data = {
                            "reviewer": await name.inner_text(),
                            "rating": await rating.get_attribute('aria-label'),
                            "text": await text.inner_text(),
                            "date": await date.inner_text()
                        }
                        results.append(review_data)
                except Exception as e:
                    print(f"⚠️ Error extracting review: {str(e)}")
                    continue
            
        except Exception as e:
            print(f"❌ Error during scraping: {str(e)}")
        finally:
            await browser.close()
    
    # Save results to CSV
    if results:
        timestamp = time.strftime("%Y%m%d_%H%M%S")
        filename = f'google_reviews_{timestamp}.csv'
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=["reviewer", "rating", "text", "date"])
            writer.writeheader()
            writer.writerows(results)
        print(f"✅ Saved {len(results)} reviews to '{filename}'")
    else:
        print("⚠️ No reviews found to save.")
    
    return results

async def main():
    # Example usage
    url = "https://www.google.com/maps/place/Starbucks+Coffee+-+Shibuya+Tsutaya+1F/@35.6598742,139.6977439,17z/data=!3m1!4b1!4m6!3m5!1s0x60188dff9153f0dd:0x231e1baa5a961254!8m2!3d35.6598699!4d139.7003242!16s%2Fg%2F11vz3knlxc?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
    await scrape_google_maps_reviews_async(url, max_reviews=30)

if __name__ == "__main__":
    asyncio.run(main()) 