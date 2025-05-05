// Sample cafe data - replace with your actual data
const cafes = [
    {
      "name": "Connel Coffee",
      "area": "Akasaka",
      "address": "2F, Sogetsu Kaikan, 7-2-21 Akasaka, Minato City, Tokyo 107-0052",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "A stylish hideaway in Akasaka with beautiful architecture and sleek minimal design. Great for quiet work sessions and afternoon meetings.",
      "googleMaps": "https://www.google.com/maps/search/Connel+Coffee+Tokyo"
    },
    {
      "name": "Berth Coffee",
      "area": "Nihonbashi",
      "address": "15-2 Nihonbashi-Odenmacho, Chuo City, Tokyo 103-0011",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "Located inside Citan hostel, Berth is a favorite among travelers and locals alike for its excellent brews and international vibe.",
      "googleMaps": "https://www.google.com/maps/search/Berth+Coffee+Tokyo"
    },
    {
      "name": "abno",
      "area": "Nihonbashi",
      "address": "2F, DDD Hotel, 2-2-1 Nihonbashibakurocho, Chuo City, Tokyo 103-0002",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "A modern art-inspired café with a curated coffee experience inside the DDD hotel. Trendy, photogenic, and cozy.",
      "googleMaps": "https://www.google.com/maps/search/abno+Tokyo"
    },
    {
      "name": "Kopikalyan",
      "area": "Harajuku",
      "address": "1F, Garden Square Harajuku, 6-15-14 Jingumae, Shibuya City, Tokyo 150-0001",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "A Jakarta-born specialty coffee shop with a sleek and relaxed space near Harajuku. Offers rare single-origin beans.",
      "googleMaps": "https://www.google.com/maps/search/Kopikalyan+Tokyo"
    },
    {
      "name": "GOOD COFFEE FARMS Café & Bar",
      "area": "Nihonbashi",
      "address": "1F, 3-1-3 Nihonbashi, Chuo City, Tokyo 103-0027",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "An ethical coffee concept bar sourcing beans from Guatemalan farmers. Sip consciously in this stylish Nihonbashi spot.",
      "googleMaps": "https://www.google.com/maps/search/GOOD+COFFEE+FARMS+Café+&+Bar+Tokyo"
    },
    {
      "name": "Byron Bay Coffee Ningyocho",
      "area": "Ningyocho",
      "address": NaN,
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "A popular Australian-style café offering smooth coffee blends and a cozy, sunlit space in Ningyocho. Friendly staff and mellow music.",
      "googleMaps": "https://www.google.com/maps/search/Byron+Bay+Coffee+Ningyocho+Tokyo"
    },
    {
      "name": "Roju nakameguro",
      "area": "Nakameguro",
      "address": "1-9-3 Nakameguro, Meguro City, Tokyo 153-0061",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Tucked away in Nakameguro, this café blends Japanese aesthetics with great coffee and occasional art shows. Calm and cultured vibe.",
      "googleMaps": "https://www.google.com/maps/search/Roju+nakameguro+Tokyo"
    },
    {
      "name": "Good Sound Coffee",
      "area": "Kamimeguro, Meguro",
      "address": "1-6-5 Kamimeguro, Meguro City, Tokyo 153-0051",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "A hidden gem in Kamimeguro offering craft coffee and curated playlists. Locals come here for its peace and solid WiFi.",
      "googleMaps": "https://www.google.com/maps/search/Good+Sound+Coffee+Tokyo"
    },
    {
      "name": "goodcoffee 学芸大学",
      "area": "Gakugei-daigaku",
      "address": "2-20-6 Takaban, Meguro City, Tokyo 152-0004",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "A stylish outpost from the goodcoffee brand, known for its bright interiors and consistently excellent brews. Great for work or chats.",
      "googleMaps": "https://www.google.com/maps/search/goodcoffee+学芸大学+Tokyo"
    },
    {
      "name": "Blue Six Coffee",
      "area": "Meiji Park",
      "address": "5-7 Kasumigaokamachi, Shinjuku City, Tokyo 160-0013",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "An ultra-minimalist café nestled near the stadium with serene lighting and thoughtful drip coffee. Shinjuku's best-kept secret.",
      "googleMaps": "https://www.google.com/maps/search/Blue+Six+Coffee+Tokyo"
    },
    {
      "name": "Valley Park Stand",
      "area": "Shibuya",
      "address": "6-20-10 Jingumae, Shibuya City, Tokyo 150-0001 (MIYASHITA PARK North 4F)",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Located in the trendy Miyashita Park, this stand serves specialty coffee with ample plugs and chill outdoor seating.",
      "googleMaps": "https://www.google.com/maps/search/Valley+Park+Stand+Tokyo"
    },
    {
      "name": "dotcom space ",
      "area": "Jingumae",
      "address": "B1F Erindale Jingumae, 1-19-19 Jingumae, Shibuya City, Tokyo 150-0001",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Known for creative events and co-working, dotcom space blends great design with Tokyo's startup spirit. Laptops welcome.",
      "googleMaps": "https://www.google.com/maps/search/dotcom+space+Tokyo"
    },
    {
      "name": "Streamer Coffee Company Azabujuban",
      "area": "Azabujuban",
      "address": "6-11-16 Roppongi, Minato City, Tokyo 106-0032",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Industrial-chic café with signature military latte and spacious seating. Popular with freelancers and creative types.",
      "googleMaps": "https://www.google.com/maps/search/Streamer+Coffee+Company+Azabujuban+Tokyo"
    },
    {
      "name": "Think Coffee",
      "area": "Kanda",
      "address": "Kanda SDGs Connection 1F, 2-9-15 Kanda Nishikicho, Chiyoda City, Tokyo 101-0054",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "NYC-rooted Think Coffee brings sustainability and top-tier beans to Kanda. Calm, community-forward atmosphere.",
      "googleMaps": "https://www.google.com/maps/search/Think+Coffee+Tokyo"
    },
    {
      "name": "Blue Bottle Coffee Shibuya",
      "area": "Shibuya",
      "address": "1-7-3 Jinnan, Shibuya City, Tokyo 150-0041",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "Glass-walled location tucked in Shibuya. Natural light, minimal noise, and Blue Bottle's signature quality in every cup.",
      "googleMaps": "https://www.google.com/maps/search/Blue+Bottle+Coffee+Shibuya+Tokyo"
    },
    {
      "name": "Lit Coffee & Tea Stand",
      "area": "Shiba, Minato",
      "address": "1F Radice Shiba Building, 2-15-15 Shiba, Minato City, Tokyo 105-0014",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "This stylish tea & coffee bar in Shiba is known for its curated tea menu, good WiFi, and refined interior.",
      "googleMaps": "https://www.google.com/maps/search/Lit+Coffee+&+Tea+Stand+Tokyo"
    },
    {
      "name": "FabCafe Tokyo",
      "area": "Shibuya",
      "address": "1F Dogenzaka Pia, 1-22-7 Dogenzaka, Shibuya City, Tokyo 150-0043",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Creative space and café rolled into one — FabCafe is a hotspot for designers, techies, and those who love good coffee with conversation.",
      "googleMaps": "https://www.google.com/maps/search/FabCafe+Tokyo+Tokyo"
    },
    {
      "name": "White Glass Coffee",
      "area": "Shibuya",
      "address": "23-18 Sakuragaoka-cho, Shibuya City, Tokyo 150-0031",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "A quiet retreat in Sakuragaoka offering lush greenery views and deep, rich coffee. Frequented by locals and remote workers.",
      "googleMaps": "https://www.google.com/maps/search/White+Glass+Coffee+Tokyo"
    },
    {
      "name": "Roasted Coffee Laboratory",
      "area": "Shibuya",
      "address": "1-6-3 Jinnan, Shibuya City, Tokyo 150-0041",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Reliable WiFi, cozy seats, and house-roasted coffee make this Jinnan shop a go-to for both casual visits and focused work.",
      "googleMaps": "https://www.google.com/maps/search/Roasted+Coffee+Laboratory+Tokyo"
    },
    {
      "name": "5 crossties coffee Shibuya",
      "area": "Shibuya",
      "address": "Shibuya Scramble Square Office Building EV17F, 2-24-12 Shibuya, Shibuya City, Tokyo 150-0002",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Located in the Shibuya Scramble Square, this café mixes commuter speed with premium coffee and sleek counter service.",
      "googleMaps": "https://www.google.com/maps/search/5+crossties+coffee+Shibuya+Tokyo"
    },
    {
      "name": "Gehsary coffee Hibiya",
      "area": "Hibiya",
      "address": "1-6-3 Yurakucho, Chiyoda City, Tokyo 100-0006",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Trendy espresso bar in Hibiya with single-origin offerings and fast service. Modern design with convenient plug access.",
      "googleMaps": "https://www.google.com/maps/search/Gehsary+coffee+hibiya+Tokyo"
    },
    {
      "name": "toggle hotel café/bar",
      "area": "Iidabashi",
      "address": "3-11-4 Iidabashi, Chiyoda City, Tokyo 102-0072",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "Hidden inside Toggle Hotel, this café-bar hybrid is an aesthetic dream for coffee lovers and Instagrammers alike.",
      "googleMaps": "https://www.google.com/maps/search/toggle+hotel+café/bar+Tokyo"
    },
    {
      "name": "Reward Coffee",
      "area": "Nihonbashi",
      "address": "1 Chome-2-10 Shinkawa, Chuo City, Tokyo 104-0033, Japan",
      "hasWifi": true,
      "hasPlugs": true,
      "features": [
        "WiFi",
        "Power"
      ],
      "description": "Community-focused café with DIY vibes and strong coffee. East Tokyo's answer to Brooklyn charm.",
      "googleMaps": "https://www.google.com/maps/search/Reward+Coffee+Tokyo"
    },
    {
      "name": "Natsumezaka Coffee",
      "area": "Shinjuku",
      "address": "1-11-10 Toyama, Shinjuku City, Tokyo 162-0052",
      "hasWifi": true,
      "hasPlugs": false,
      "features": [
        "WiFi"
      ],
      "description": "A serene hideout near Waseda. Natsumezaka Coffee serves pour-over in a tatami-accented setting perfect for reading.",
      "googleMaps": "https://www.google.com/maps/search/Natsumezaka+Coffee+Tokyo"
    },
    {
        "name": "Allpress Espresso Toranomon",
        "area": "Toranomon, Minato",
        "address": "1-chōme-1-2 Atago, Minato City, Tokyo 105-0002",
        "hasWifi": true,
        "hasPlugs": true,
        "features": [
          "Wifi", "Power"
        ],
        "description": "A stylish, New Zealand-born specialty coffee shop tucked away in Toranomon. Known for its wood-fired roasted beans and laid-back industrial vibe, it offers both indoor and outdoor seating. A great place to work or relax with reliable WiFi, power outlets, and expertly brewed espresso.",
        "googleMaps": "https://www.google.com/maps/place/Allpress+Espresso+Toranomon+Cafe+%E2%94%82+%E3%82%AA%E3%83%BC%E3%83%AB%E3%83%97%E3%83%AC%E3%82%B9%E3%83%BB%E3%82%A8%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%82%BD+%E8%99%8E%E3%83%8E%E9%96%80%E3%82%AB%E3%83%95%E3%82%A7/@35.6676443,139.7501533,17z"
    }
      
  ];
// Get unique areas for the filter
const areas = [...new Set(cafes.map(cafe => cafe.area))];

// Populate area filter
const areaFilter = document.getElementById('area-filter');
areas.forEach(area => {
    const option = document.createElement('option');
    option.value = area;
    option.textContent = area;
    areaFilter.appendChild(option);
});

// Function to create cafe card
function createCafeCard(cafe) {
    const card = document.createElement('div');
    card.className = 'cafe-card';
    
    const wifiStatus = cafe.hasWifi ? 'Yes' : 'No';
    const plugsStatus = cafe.hasPlugs ? 'Yes' : 'No';
    
    card.innerHTML = `
        <div class="cafe-info">
            <h2>${cafe.name}</h2>
            <p><i class="fas fa-map-marker-alt"></i> ${cafe.area}</p>
            <p>${cafe.description || ''}</p>
            <div class="cafe-features">
                <span class="feature-tag wifi-${cafe.hasWifi ? 'yes' : 'no'}">
                    <i class="fas fa-wifi"></i> WiFi: ${wifiStatus}
                </span>
                <span class="feature-tag plugs-${cafe.hasPlugs ? 'yes' : 'no'}">
                    <i class="fas fa-plug"></i> Power Outlets: ${plugsStatus}
                </span>
                ${cafe.features && cafe.features.filter(f => f !== 'WiFi' && f !== 'Power' && f !== 'Power Outlets').map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="cafe-actions">
                <a href="${cafe.googleMaps}" class="maps-btn" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-map"></i> View on Google Maps
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Function to filter cafes
function filterCafes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const areaFilter = document.getElementById('area-filter').value;
    const wifiFilter = document.getElementById('wifi-filter').value;
    const plugsFilter = document.getElementById('plugs-filter').value;
    
    const filteredCafes = cafes.filter(cafe => {
        const matchesSearch = cafe.name.toLowerCase().includes(searchTerm) ||
                            (cafe.description && cafe.description.toLowerCase().includes(searchTerm));
        const matchesArea = !areaFilter || cafe.area === areaFilter;
        const matchesWifi = !wifiFilter || 
                          (wifiFilter === 'yes' && cafe.hasWifi) || 
                          (wifiFilter === 'no' && !cafe.hasWifi);
        const matchesPlugs = !plugsFilter || 
                           (plugsFilter === 'yes' && cafe.hasPlugs) || 
                           (plugsFilter === 'no' && !cafe.hasPlugs);
        
        return matchesSearch && matchesArea && matchesWifi && matchesPlugs;
    });
    
    displayCafes(filteredCafes);
}

// Function to display cafes
function displayCafes(cafesToDisplay) {
    const container = document.getElementById('cafes-container');
    container.innerHTML = '';
    
    if (cafesToDisplay.length === 0) {
        container.innerHTML = '<p class="no-results">No cafes found matching your criteria.</p>';
        return;
    }
    
    cafesToDisplay.forEach(cafe => {
        container.appendChild(createCafeCard(cafe));
    });
}

// Event listeners
document.getElementById('search').addEventListener('input', filterCafes);
document.getElementById('area-filter').addEventListener('change', filterCafes);
document.getElementById('wifi-filter').addEventListener('change', filterCafes);
document.getElementById('plugs-filter').addEventListener('change', filterCafes);

// Initial display
displayCafes(cafes); 