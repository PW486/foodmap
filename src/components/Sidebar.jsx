import React, { useEffect, useRef, useState } from "react";
import { foodData } from "../data/foodData";
import WikiFoodImage from "./WikiFoodImage";
import { getCountryColor, getCountryCode } from "../utils/countryMapping";

const Sidebar = ({ selectedCountry, setSelectedCountry, width }) => {
  const sidebarRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [displayCountry, setDisplayCountry] = useState(selectedCountry);

  useEffect(() => {
    if (selectedCountry) {
      setDisplayCountry(selectedCountry);
      setIsClosing(false);
      if (sidebarRef.current) {
        sidebarRef.current.scrollTop = 0;
      }
    } else if (displayCountry) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setDisplayCountry(null);
        setIsClosing(false);
      }, 300); // 0.3s matches animation duration
      return () => clearTimeout(timer);
    }
  }, [selectedCountry, displayCountry]);

  if (!displayCountry) return null;

  const countryColor = getCountryColor(displayCountry);
  const countryCode = getCountryCode(displayCountry);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCountry(null);
  };

  return (
    <div 
      ref={sidebarRef}
      onClick={(e) => e.stopPropagation()}
      className="position-absolute top-0 end-0 h-100 bg-white shadow-lg overflow-auto" 
      style={{ 
        zIndex: 30, 
        width: width < 600 ? "100vw" : "350px", 
        animation: isClosing ? "slideOutRight 0.3s ease-in forwards" : "slideInRight 0.3s ease-out",
        paddingBottom: "env(safe-area-inset-bottom, 0px)"
      }}
    >
        <div className="p-4 pt-0">
            <div className="sticky-top bg-white py-4 mb-4 shadow-sm" style={{ zIndex: 5, margin: "0 -1.5rem", padding: "1.5rem" }}>
                <div className="d-flex align-items-start justify-content-between">
                    <h2 className="h5 fw-bold m-0" style={{ color: "#333333", lineHeight: "1.5" }}>
                        {countryCode && (
                            <img 
                                src={`https://flagcdn.com/w40/${countryCode}.png`} 
                                alt={`${displayCountry} flag`}
                                style={{ 
                                    width: "24px", 
                                    borderRadius: "2px", 
                                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                                    marginRight: "10px",
                                    verticalAlign: "middle",
                                    marginBottom: "3px"
                                }}
                            />
                        )}
                        <span style={{ color: countryColor }}>{displayCountry}</span>
                        <span> Cuisine</span>
                    </h2>
                    <button onClick={handleClose} className="btn btn-close ms-3 flex-shrink-0" style={{ marginTop: "4px" }}></button>
                </div>
            </div>
            
            <div className="d-flex flex-column gap-4">
                {foodData[displayCountry] && foodData[displayCountry].map((food, index) => (
                    <div key={index} className="card border-0 shadow-sm">
                        <div className="position-relative overflow-hidden rounded-top" style={{ height: "160px" }}>
                            <WikiFoodImage 
                                foodName={food.name} 
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                        <div className="card-body">
                            <h6 className="card-title fw-bold" style={{ color: "#333333" }}>{food.name}</h6>
                            <p className="card-text small" style={{ color: "#555555" }}>{food.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
