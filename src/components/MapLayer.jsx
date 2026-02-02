import React, { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { foodData } from "../data/foodData";
import { mapGeoName, MAP_COLORS, MANUAL_CENTROIDS, LABEL_MIN_ZOOM, getClimateType } from "../utils/countryMapping";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Extract style logic to keep the component clean
const getGeographyStyle = ({ isMobile, isSelected, isHovered, hasData, theme, fillColor }) => {
  const baseStyle = {
    outline: "none",
    strokeWidth: 0.5,
    vectorEffect: "non-scaling-stroke",
    transition: "all 0.3s ease",
  };

  // Apply hover effect even if the mouse is on the label
  const activeFilter = hasData && !isMobile && isHovered ? "brightness(0.9)" : "none";

  return {
    default: {
      ...baseStyle,
      fill: fillColor,
      stroke: theme.STROKE,
      filter: activeFilter,
      opacity: 1,
    },
    hover: {
      ...baseStyle,
      fill: fillColor, 
      filter: hasData && !isMobile ? "brightness(0.9)" : "none", 
      stroke: theme.STROKE,
      opacity: 1,
      cursor: hasData ? "pointer" : "default",
    },
    pressed: {
      ...baseStyle,
      fill: fillColor,
      stroke: theme.STROKE,
      opacity: 1,
    },
  };
};

const MapLayer = ({ 
  width, 
  height, 
  position, 
  handleMoveEnd, 
  handleCountryClick, 
  selectedCountry, 
  setTooltipContent, 
  animationMode, 
  darkMode, 
  onMapClick 
}) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const isMobile = width < 600;
  const theme = darkMode ? MAP_COLORS.DARK : MAP_COLORS.LIGHT;

  const scale = useMemo(() => {
    return width < 600 ? (width / 6.5) : 150;
  }, [width]);

  // Calculate dynamic font size to keep visual size relatively constant
  const labelFontSize = Math.max(0.5, 6 / Math.sqrt(position.zoom)); 

  return (
    <div 
      id="map-container"
      className="position-absolute top-0 start-0 w-100 h-100" 
      style={{ 
        zIndex: 0, 
        touchAction: "none",
        backgroundColor: theme.OCEAN 
      }} 
      onClick={onMapClick}
    >
      <ComposableMap 
        width={width}
        height={height}
        projection="geoMercator" 
        projectionConfig={{ scale }} 
      >
        <ZoomableGroup 
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={128}
          className={animationMode === "fast" ? "map-animating-fast" : (animationMode === "slow" ? "map-animating-slow" : "")}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const geoName = mapGeoName(geo.properties.name);
                  const isSelected = selectedCountry === geoName;
                  const isHovered = hoveredCountry === geoName;
                  const hasData = !!foodData[geoName];
                  
                  // Determine climate color
                  const climate = getClimateType(geoName);
                  const fillColor = hasData ? theme["LAND_" + climate] : theme.LAND_DEFAULT;

                  const geoStyles = getGeographyStyle({
                    isMobile,
                    isSelected,
                    isHovered,
                    hasData,
                    theme,
                    fillColor
                  });

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        if (!isMobile) {
                          setTooltipContent(geoName);
                          setHoveredCountry(geoName);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMobile) {
                          setTooltipContent("");
                          setHoveredCountry(null);
                        }
                      }}
                      onClick={() => {
                        const centroid = geoCentroid(geo);
                        handleCountryClick(geo, centroid);
                      }}
                      style={geoStyles}
                    />
                  );
                })}
                {/* Country Labels */}
                {geographies.map((geo) => {
                  const geoName = mapGeoName(geo.properties.name);
                  const hasData = !!foodData[geoName];
                  if (!hasData) return null;

                  // Zoom-based Label Filtering
                  const minZoom = LABEL_MIN_ZOOM[geoName] || 4.5;
                  if (position.zoom < minZoom) return null;

                  // Use manual centroid if defined
                  const centroid = MANUAL_CENTROIDS[geoName] || geoCentroid(geo);
                  
                  return (
                    <Marker key={geo.rsmKey + "-label"} coordinates={centroid}>
                      <text
                        dy="0.33em"
                        fontSize={labelFontSize}
                        textAnchor="middle"
                        onMouseEnter={() => {
                          if (!isMobile) {
                            setTooltipContent(geoName);
                            setHoveredCountry(geoName);
                          }
                        }}
                        onMouseLeave={() => {
                          if (!isMobile) {
                            setTooltipContent("");
                            setHoveredCountry(null);
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountryClick(geo, centroid);
                        }}
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                          fill: theme.TEXT,
                          paintOrder: "stroke",
                          stroke: darkMode ? "#000000" : "#ffffff", // Halo to separate text from map
                          strokeWidth: labelFontSize / 5,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          pointerEvents: "auto",
                          cursor: "pointer",
                          fontWeight: 600,
                          opacity: 0.9
                        }}
                      >
                        {geoName}
                      </text>
                    </Marker>
                  );
                })}
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapLayer;