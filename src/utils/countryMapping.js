// Centralized name mapping: GeoJSON names -> Our Data Keys
export const geoNameMap = {
    "United States of America": "United States",
    "United Arab Emirates": "UAE",
    "Czech Republic": "Czechia",
    "Russian Federation": "Russia",
    "Republic of Korea": "South Korea",
    "Dem. Rep. Korea": "North Korea",
    "Lao PDR": "Laos",
    "Dominican Rep.": "Dominican Republic",
    "Côte d'Ivoire": "Ivory Coast",
    "Syrian Arab Republic": "Syria",
    "Macedonia": "North Macedonia",
    "Dem. Rep. Congo": "DRC",
    "Republic of the Congo": "Congo",
    "Brunei Darussalam": "Brunei",
    "Central African Rep.": "Central African Republic",
    "Eq. Guinea": "Equatorial Guinea",
    "S. Sudan": "South Sudan",
    "Solomon Is.": "Solomon Islands",
    "W. Sahara": "Western Sahara",
    "eSwatini": "Eswatini",
    "Falkland Is.": "Falkland Islands",
    "Timor-Leste": "East Timor",
    "Cabo Verde": "Cape Verde",
    "N. Cyprus": "Northern Cyprus",
    "Macao": "Macau",
    "Bosnia and Herz.": "Bosnia and Herzegovina"
};

export const mapGeoName = (name) => geoNameMap[name] || name;

// ISO 2-letter codes for FlagCDN
export const countryCodeMapping = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad", "Angola": "ao", "Argentina": "ar",
    "Armenia": "am", "Australia": "au", "Austria": "at", "Azerbaijan": "az", "Bahamas": "bs", "Bahrain": "bh",
    "Bangladesh": "bd", "Belarus": "by", "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bermuda": "bm", "Bhutan": "bt",
    "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw", "Brazil": "br", "Brunei": "bn", "Bulgaria": "bg",
    "Burkina Faso": "bf", "Burundi": "bi", "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca", "Cape Verde": "cv",
    "Central African Republic": "cf", "Chad": "td", "Chile": "cl", "China": "cn", "Colombia": "co", "Comoros": "km",
    "Congo": "cg", "Costa Rica": "cr", "Croatia": "hr", "Cuba": "cu", "Cyprus": "cy", "Czechia": "cz",
    "Denmark": "dk", "Djibouti": "dj", "Dominican Republic": "do", "DRC": "cd",
    "East Timor": "tl", "Ecuador": "ec", "Egypt": "eg", "El Salvador": "sv", "Equatorial Guinea": "gq",
    "Eritrea": "er", "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et", "Fiji": "fj", "Finland": "fi",
    "France": "fr", "Gabon": "ga", "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh",
    "Greece": "gr", "Greenland": "gl", "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw", "Guyana": "gy",
    "Haiti": "ht", "Honduras": "hn", "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is", "India": "in",
    "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il", "Italy": "it",
    "Ivory Coast": "ci", "Jamaica": "jm", "Japan": "jp", "Jordan": "jo", "Kazakhstan": "kz", "Kenya": "ke",
    "South Korea": "kr", "Kosovo": "xk", "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv",
    "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
    "Luxembourg": "lu", "Macau": "mo", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml",
    "Malta": "mt", "Mauritania": "mr", "Mauritius": "mu", "Mexico": "mx", "Moldova": "md", "Mongolia": "mn",
    "Montenegro": "me", "Morocco": "ma", "Mozambique": "mz", "Myanmar": "mm", "Namibia": "na", "Nepal": "np",
    "Netherlands": "nl", "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng", "North Korea": "kp",
    "North Macedonia": "mk", "Northern Cyprus": "cy", "Norway": "no", "Oman": "om", "Pakistan": "pk",
    "Palestine": "ps", "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph",
    "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr", "Qatar": "qa", "Romania": "ro", "Russia": "ru",
    "Rwanda": "rw", "Sao Tome and Principe": "st", "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs",
    "Seychelles": "sc", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si",
    "Somalia": "so", "Somaliland": "so", "South Africa": "za", "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk",
    "Sudan": "sd", "Suriname": "sr", "Sweden": "se", "Switzerland": "ch", "Syria": "sy", "Taiwan": "tw",
    "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th", "Togo": "tg", "Trinidad and Tobago": "tt",
    "Tunisia": "tn", "Turkey": "tr", "Turkmenistan": "tm", "UAE": "ae", "Uganda": "ug", "United Kingdom": "gb",
    "Ukraine": "ua", "Uruguay": "uy", "United States": "us", "Uzbekistan": "uz", "Venezuela": "ve", "Vietnam": "vn",
    "Western Sahara": "eh", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw"
};

export const getCountryCode = (name) => countryCodeMapping[name] || null;

// Unified Theme Colors
export const MAP_COLORS = {
    LIGHT: {
        OCEAN: "#aadaff",      // Google Maps Day Water
        LAND_DEFAULT: "#f5f5f5",
        LAND_TEMPERATE: "#aed581",  // Light Green
        LAND_DESERT: "#faeed1",     // Sandy Beige
        LAND_COLD: "#e1f5fe",       // Icy Pale Blue
        STROKE: "#ffffff",
        TEXT: "#374151"
    },
    DARK: {
        OCEAN: "#1a1c2c",      // Deep Midnight Water
        LAND_DEFAULT: "#242424",
        LAND_TEMPERATE: "#1b3a20",  // Dark Forest Green
        LAND_DESERT: "#4a3728",     // Dark Warm Sand
        LAND_COLD: "#2c3e50",       // Midnight Cold Slate
        STROKE: "#666666",          // Brighter stroke for visibility
        TEXT: "#ffffff"
    }
};

const DESERT_COUNTRIES = new Set([
    "Saudi Arabia", "Egypt", "UAE", "Iraq", "Iran", "Algeria", "Libya", 
    "Oman", "Yemen", "Jordan", "Kuwait", "Qatar", "Bahrain", "Morocco", 
    "Tunisia", "Djibouti", "Somalia", "Sudan", "Chad", "Niger", "Mali", 
    "Mauritania", "Western Sahara", "Australia", "Namibia", "Botswana", 
    "Mexico", "Afghanistan", "Pakistan", "Kazakhstan", "Uzbekistan", 
    "Turkmenistan", "Syria", "Israel", "Mongolia", "Chile", "Eritrea"
]);

const COLD_COUNTRIES = new Set([
    "Russia", "Canada", "Norway", "Sweden", "Finland", "Iceland", 
    "Greenland", "Denmark", "Estonia", "Latvia", "Lithuania"
]);

export const getClimateType = (name) => {
    if (DESERT_COUNTRIES.has(name)) return "DESERT";
    if (COLD_COUNTRIES.has(name)) return "COLD";
    return "TEMPERATE";
};

// Deprecated: Logic moved to MapLayer
export const getCountryColor = (name) => MAP_COLORS.LIGHT.LAND_TEMPERATE;

// Manual Centroid Overrides for countries where the calculated center is skewed by territories
export const MANUAL_CENTROIDS = {
    "France": [2.2137, 46.6033],
    "United States": [-98.5795, 39.8283], // Center of Contiguous US
    "Norway": [8.4689, 61.4720],
    "Netherlands": [5.2913, 52.1326],
    "United Kingdom": [-3.4360, 54.5], // Slightly lower to center visually on Great Britain
    "Spain": [-3.7492, 40.0],
    "Portugal": [-8.0, 39.5],
    "Malaysia": [109.0, 4.0], // Visual center between West and East Malaysia
    "Indonesia": [113.9213, -0.7893], // Borneo/Java visual center
    "Japan": [138.2529, 36.2048] // Honshu center
};

// Minimum Zoom Level to show label (to prevent overlapping)
// Hierarchical visibility based on spatial density and size
export const LABEL_MIN_ZOOM = {
    // LEVEL 1: GLOBAL GIANTS (Always visible)
    "Russia": 1, "Canada": 1, "United States": 1, "China": 1, "Brazil": 1, "Australia": 1, 
    "India": 1, "Greenland": 1, "Antarctica": 1,

    // LEVEL 1.8 - 2: REGIONAL ANCHORS (Visible early)
    "South Korea": 1.8, "Japan": 1.8, "United Kingdom": 1.8, "France": 1.8, "Germany": 1.8, 
    "Mexico": 1.8, "Indonesia": 1.8, "Turkey": 1.8, "Argentina": 1.8, "South Africa": 1.8, 
    "Nigeria": 1.8, "Algeria": 2, "Kazakhstan": 2, "Saudi Arabia": 2, "Iran": 2, 
    "Mongolia": 2, "Peru": 2, "Sudan": 2, "DRC": 2, "Libya": 2,

    // LEVEL 3.5: MID-SIZED COUNTRIES (Enough clearance)
    "Italy": 3.5, "Spain": 3.5, "Poland": 3.5, "Ukraine": 3.5, "Thailand": 3.5, "Vietnam": 3.5, 
    "Egypt": 3.5, "Morocco": 3.5, "Colombia": 3.5, "Chile": 3.5, "Pakistan": 3.5, "Sweden": 3.5, 
    "Norway": 3.5, "Finland": 3.5, "Romania": 3.5, "Myanmar": 3.5, "Ethiopia": 3.5, 
    "Tanzania": 3.5, "Kenya": 3.5, "Zambia": 3.5, "Angola": 3.5, "Venezuela": 3.5, 
    "Bolivia": 3.5, "Paraguay": 3.5, "Uzbekistan": 3.5, "Afghanistan": 3.5,

    // LEVEL 5 - 5.5: DENSE / SMALLER COUNTRIES (Need zoom to avoid overlap)
    "Netherlands": 5.5, "Belgium": 5.5, "Switzerland": 5.5, "Austria": 5.5, "Czechia": 5.5, 
    "Slovakia": 5.5, "Hungary": 5.5, "Portugal": 5, "Greece": 5, "Ireland": 5, "Denmark": 5, 
    "Bulgaria": 5, "Serbia": 5.5, "Croatia": 5.5, "Slovenia": 5.5, "Bosnia and Herzegovina": 5.5,
    "Somaliland": 5, "Jordan": 5, "Syria": 5, "Iraq": 5, "Azerbaijan": 5, "Georgia": 5, 
    "Armenia": 5, "Israel": 5, "Palestine": 5, "Lebanon": 5, "Taiwan": 5, "Philippines": 4.5, 
    "Malaysia": 4.5, "Cambodia": 5, "Laos": 5, "Sri Lanka": 5, "Nepal": 5, "Bhutan": 5,
    "Uruguay": 5, "Ecuador": 5, "Guyana": 5, "Suriname": 5, "Costa Rica": 5.5, "Panama": 5.5, 
    "Honduras": 5.5, "Guatemala": 5.5, "Nicaragua": 5.5, "El Salvador": 5.5, "Jamaica": 5.5, 
    "Cuba": 5, "Haiti": 5.5, "Dominican Republic": 5.5,

    // LEVEL 7.5+: MICROSTATES & TINY ISLANDS
    "Singapore": 7.5, "Hong Kong": 6.5, "Macau": 7.5, "Liechtenstein": 8, "Andorra": 8, 
    "Monaco": 9, "San Marino": 9, "Vatican City": 9, "Luxembourg": 6.5, "Malta": 7.5, 
    "Bahrain": 7.5, "Qatar": 6.5, "UAE": 5, "Kuwait": 6.5, "Brunei": 6.5, "Maldives": 8, 
    "Seychelles": 8, "Mauritius": 7.5, "Trinidad and Tobago": 7, "Cape Verde": 7
};
