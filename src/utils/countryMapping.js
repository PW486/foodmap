// Centralized name mapping: GeoJSON names -> Our Data Keys
export const geoNameMap = {
    "United States of America": "USA",
    "United States": "USA",
    "United Kingdom": "UK",
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
    "Bosnia and Herz.": "Bosnia and Herz.",
    "Bosnia and Herzegovina": "Bosnia and Herz.",
    "Trinidad and Tobago": "Trinidad and Tobago",
    "Dem. Rep. Congo": "Democratic Republic of the Congo",
    "Congo, Dem. Rep. of the": "Democratic Republic of the Congo",
    "Congo": "Republic of the Congo",
    "Republic of the Congo": "Republic of the Congo",
    "Brunei Darussalam": "Brunei",
    "Central African Rep.": "Central African Republic",
    "Eq. Guinea": "Equatorial Guinea",
    "S. Sudan": "South Sudan",
    "South Sudan": "South Sudan",
    "Solomon Is.": "Solomon Islands",
    "W. Sahara": "Western Sahara",
    "eSwatini": "Eswatini",
    "Falkland Is.": "Falkland Islands",
    "Timor-Leste": "East Timor",
    "Puerto Rico": "Puerto Rico",
    "Bermuda": "Bermuda",
    "Cabo Verde": "Cape Verde",
    "Guinea-Bissau": "Guinea-Bissau",
    "Sao Tome and Principe": "Sao Tome and Principe",
    "Somaliland": "Somaliland",
    "Bahrain": "Bahrain",
    "Northern Cyprus": "Northern Cyprus"
};

export const mapGeoName = (name) => geoNameMap[name] || name;

// ISO 2-letter codes for FlagCDN
export const countryCodeMapping = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad", "Angola": "ao", "Argentina": "ar",
    "Armenia": "am", "Australia": "au", "Austria": "at", "Azerbaijan": "az", "Bahamas": "bs", "Bahrain": "bh",
    "Bangladesh": "bd", "Belarus": "by", "Belgium": "be", "Benin": "bj", "Bermuda": "bm", "Bhutan": "bt",
    "Bolivia": "bo", "Bosnia and Herz.": "ba", "Botswana": "bw", "Brazil": "br", "Brunei": "bn", "Bulgaria": "bg",
    "Burkina Faso": "bf", "Burundi": "bi", "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca", "Cape Verde": "cv",
    "Central African Republic": "cf", "Chad": "td", "Chile": "cl", "China": "cn", "Colombia": "co", "Comoros": "km",
    "Republic of the Congo": "cg", "Costa Rica": "cr", "Croatia": "hr", "Cuba": "cu", "Cyprus": "cy", "Czechia": "cz",
    "Denmark": "dk", "Djibouti": "dj", "Dominican Republic": "do", "Democratic Republic of the Congo": "cd",
    "East Timor": "tl", "Ecuador": "ec", "Egypt": "eg", "El Salvador": "sv", "Equatorial Guinea": "gq",
    "Eritrea": "er", "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et", "Fiji": "fj", "Finland": "fi",
    "France": "fr", "Gabon": "ga", "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh",
    "Greece": "gr", "Greenland": "gl", "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw", "Guyana": "gy",
    "Haiti": "ht", "Honduras": "hn", "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is", "India": "in",
    "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il", "Italy": "it",
    "Ivory Coast": "ci", "Jamaica": "jm", "Japan": "jp", "Jordan": "jo", "Kazakhstan": "kz", "Kenya": "ke",
    "South Korea": "kr", "Kosovo": "xk", "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv",
    "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
    "Luxembourg": "lu", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml",
    "Malta": "mt", "Mauritania": "mr", "Mauritius": "mu", "Mexico": "mx", "Moldova": "md", "Mongolia": "mn",
    "Montenegro": "me", "Morocco": "ma", "Mozambique": "mz", "Myanmar": "mm", "Namibia": "na", "Nepal": "np",
    "Netherlands": "nl", "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng", "North Korea": "kp",
    "North Macedonia": "mk", "Northern Cyprus": "ct", "Norway": "no", "Oman": "om", "Pakistan": "pk",
    "Palestine": "ps", "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph",
    "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr", "Qatar": "qa", "Romania": "ro", "Russia": "ru",
    "Rwanda": "rw", "Sao Tome and Principe": "st", "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs",
    "Seychelles": "sc", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si",
    "Somalia": "so", "Somaliland": "so", "South Africa": "za", "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk",
    "Sudan": "sd", "Suriname": "sr", "Sweden": "se", "Switzerland": "ch", "Syria": "sy", "Taiwan": "tw",
    "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th", "Togo": "tg", "Trinidad and Tobago": "tt",
    "Tunisia": "tn", "Turkey": "tr", "Turkmenistan": "tm", "UAE": "ae", "Uganda": "ug", "UK": "gb",
    "Ukraine": "ua", "Uruguay": "uy", "USA": "us", "Uzbekistan": "uz", "Venezuela": "ve", "Vietnam": "vn",
    "Western Sahara": "eh", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw"
};

export const getCountryCode = (name) => countryCodeMapping[name] || null;

const PINK = "#FF6B6B";
const YELLOW = "#FFD93D";
const GREEN = "#6BCB77";
const BLUE = "#4D96FF";
const PURPLE = "#9D4EDD";
const NAVY = "#2D3A4A";

export const countryColorMapping = {
    "Afghanistan": PURPLE, "Albania": YELLOW, "Algeria": PINK, "Andorra": YELLOW, "Angola": YELLOW, "Argentina": GREEN,
    "Armenia": YELLOW, "Australia": BLUE, "Austria": YELLOW, "Azerbaijan": PINK, "Bahamas": GREEN, "Bahrain": BLUE,
    "Bangladesh": YELLOW, "Belarus": GREEN, "Belgium": PINK, "Benin": YELLOW, "Bermuda": PINK, "Bhutan": YELLOW,
    "Bolivia": PURPLE, "Bosnia and Herz.": GREEN, "Botswana": GREEN, "Brazil": BLUE, "Brunei": PINK, "Bulgaria": YELLOW,
    "Burkina Faso": GREEN, "Burundi": GREEN, "Cambodia": PINK, "Cameroon": PINK, "Canada": PINK, "Cape Verde": YELLOW,
    "Central African Republic": YELLOW, "Chad": GREEN, "Chile": PINK, "China": BLUE, "Colombia": PURPLE, "Comoros": PINK,
    "Republic of the Congo": GREEN, "Costa Rica": GREEN, "Croatia": PURPLE, "Cuba": BLUE, "Cyprus": YELLOW, "Czechia": YELLOW,
    "Denmark": GREEN, "Djibouti": BLUE, "Dominican Republic": PINK, "Democratic Republic of the Congo": BLUE,
    "East Timor": YELLOW, "Ecuador": YELLOW, "Egypt": BLUE, "El Salvador": GREEN, "Equatorial Guinea": BLUE,
    "Eritrea": GREEN, "Estonia": GREEN, "Eswatini": GREEN, "Ethiopia": PURPLE, "Fiji": GREEN, "Finland": PINK,
    "France": PURPLE, "Gabon": YELLOW, "Gambia": PINK, "Georgia": GREEN, "Germany": BLUE, "Ghana": YELLOW,
    "Greece": GREEN, "Greenland": YELLOW, "Guatemala": PINK, "Guinea": BLUE, "Guinea-Bissau": PINK, "Guyana": GREEN,
    "Haiti": YELLOW, "Honduras": YELLOW, "Hong Kong": YELLOW, "Hungary": PURPLE, "Iceland": GREEN, "India": GREEN,
    "Indonesia": PINK, "Iran": BLUE, "Iraq": YELLOW, "Ireland": GREEN, "Israel": BLUE, "Italy": NAVY,
    "Ivory Coast": PINK, "Jamaica": GREEN, "Japan": GREEN, "Jordan": PINK, "Kazakhstan": GREEN, "Kenya": BLUE,
    "South Korea": YELLOW, "Kosovo": GREEN, "Kuwait": PINK, "Kyrgyzstan": BLUE, "Laos": GREEN, "Latvia": PINK,
    "Lebanon": BLUE, "Lesotho": YELLOW, "Liberia": YELLOW, "Libya": YELLOW, "Liechtenstein": PINK, "Lithuania": YELLOW,
    "Luxembourg": BLUE, "Madagascar": GREEN, "Malawi": PURPLE, "Malaysia": GREEN, "Maldives": PINK, "Mali": YELLOW,
    "Malta": PINK, "Mauritania": GREEN, "Mauritius": YELLOW, "Mexico": GREEN, "Moldova": YELLOW, "Mongolia": PINK,
    "Montenegro": PINK, "Morocco": BLUE, "Mozambique": YELLOW, "Myanmar": PINK, "Namibia": BLUE, "Nepal": PINK,
    "Netherlands": BLUE, "New Zealand": GREEN, "Nicaragua": PINK, "Niger": BLUE, "Nigeria": PINK,
    "North Korea": PINK, "North Macedonia": PINK, "Northern Cyprus": GREEN, "Norway": GREEN, "Oman": PINK,
    "Pakistan": BLUE, "Palestine": GREEN, "Panama": NAVY, "Papua New Guinea": YELLOW, "Paraguay": NAVY,
    "Peru": YELLOW, "Philippines": BLUE, "Poland": PINK, "Portugal": PURPLE, "Puerto Rico": YELLOW,
    "Qatar": YELLOW, "Romania": PINK, "Russia": YELLOW, "Rwanda": YELLOW, "Sao Tome and Principe": YELLOW,
    "Saudi Arabia": GREEN, "Senegal": YELLOW, "Serbia": BLUE, "Seychelles": PINK,
    "Sierra Leone": GREEN, "Singapore": YELLOW, "Slovakia": YELLOW, "Slovenia": PINK, "Somalia": GREEN,
    "Somaliland": PINK, "South Africa": PINK, "South Sudan": BLUE, "Spain": BLUE, "Sri Lanka": PINK,
    "Sudan": PINK, "Suriname": PINK, "Sweden": PURPLE, "Switzerland": GREEN, "Syria": GREEN, "Taiwan": PINK,
    "Tajikistan": PINK, "Tanzania": BLUE, "Thailand": YELLOW, "Togo": PINK, "Trinidad and Tobago": PINK,
    "Tunisia": GREEN, "Turkey": NAVY, "Turkmenistan": PINK, "UAE": YELLOW, "Uganda": PINK, "UK": YELLOW,
    "Ukraine": BLUE, "Uruguay": NAVY, "USA": YELLOW, "Uzbekistan": PURPLE, "Venezuela": BLUE, "Vietnam": PINK,
    "Western Sahara": YELLOW, "Yemen": GREEN, "Zambia": PINK, "Zimbabwe": YELLOW
};

export const getCountryColor = (name) => countryColorMapping[name] || "#f8fafc";
