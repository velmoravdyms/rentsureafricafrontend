


import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ControlPosition } from "@vis.gl/react-google-maps";

import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
  Pin,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

import { Circle } from "./circle";



/* ============================================================
   TYPES & INTERFACES
============================================================ */

export interface PropertyListing {
  id: string;
  title: string;
  price?: string | number;
  latitude: number;
  longitude: number;
  formattedAddress?: string;
  availableUnits?: number;
  totalUnits?: number;
  images?: string[];
}

export interface SelectedLocation {
  lat: number;
  lng: number;
  displayName?: string;
  formattedAddress?: string;
  viewport?: any;
}

interface PlaceSearchInputProps {
  onPlaceSelect: (location: SelectedLocation) => void;
}

interface PanMapToSelectedLocationProps {
  location: SelectedLocation | null;
}

interface PropertyMarkersProps {
  properties: PropertyListing[];
  selectedProperty: PropertyListing | null;
  hoveredProperty: PropertyListing | null;
  onSelectProperty: (property: PropertyListing | null) => void;
  onHoverProperty: (property: PropertyListing | null) => void;
}

/* ============================================================
   STABLE GOOGLE MAPS LIBRARIES
============================================================ */

const LIBRARIES = ["places"];

/* ============================================================
   STYLES
============================================================ */

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

const TopNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const BrandLogo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  color: #111;

  span {
    color: #0056b3;
  }
`;

const AuthNavGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
`;

const SignInButton = styled(NavButton)`
  background: #28a745;
`;

const SignUpButton = styled(NavButton)`
  background: #0056b3;
`;

/* 2-COLUMN FLEX CONTAINER */
const MainContent = styled.div`
  width: 95vw;
  height: 82vh;
  margin: 1rem auto;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SidebarContainer = styled.div<{ isCollapsed: boolean }>`
  position: relative;
  width: ${(props) => (props.isCollapsed ? "0px" : "380px")};
  min-width: ${(props) => (props.isCollapsed ? "0px" : "320px")};
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
`;

const Sidebar = styled.div<{ isCollapsed: boolean }>`
  width: 380px;
  min-width: 320px;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #e9ecef;
  overflow-y: auto;
  padding: ${(props) => (props.isCollapsed ? "0" : "1rem")};
  opacity: ${(props) => (props.isCollapsed ? 0 : 1)};
  pointer-events: ${(props) => (props.isCollapsed ? "none" : "auto")};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
`;

const CollapseToggleButton = styled.button<{ isCollapsed: boolean }>`
  position: absolute;
  top: 50%;
  right: -24px;
  transform: translateY(-50%);
  width: 24px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-left: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
  font-size: 11px;
  color: #374151;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #0056b3;
  }
`;

const PropertyCard = styled.div<{ isSelected?: boolean; isHovered?: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) =>
    props.isSelected
      ? "#f0f7ff"
      : props.isHovered
      ? "#f9fafb"
      : "#ffffff"};
  border: 1px solid
    ${(props) =>
      props.isSelected ? "#0056b3" : props.isHovered ? "#93c5fd" : "#e9ecef"};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);

  &:hover {
    border-color: #0056b3;
    transform: translateY(-1px);
  }
`;

const Rendermap = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;

const SearchOverlay = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 320px;
  max-width: calc(100% - 32px);
  z-index: 1000;
  background: white;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  gmp-place-autocomplete {
    width: 100%;
    display: block;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  bottom: 18px;
  right: 18px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 16px;
  border-radius: 20px;
  z-index: 20;
  font-weight: 600;
`;

/* ============================================================
   GOOGLE PLACES AUTOCOMPLETE + ENTER KEY GEOCODING
============================================================ */

const PlaceSearchInput: React.FC<PlaceSearchInputProps> = ({ onPlaceSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const places = useMapsLibrary("places");
  const geocoding = useMapsLibrary("geocoding");

  const handlePlaceSelect = useCallback(
    async (event: any) => {
      try {
        const placePrediction = event?.placePrediction;
        if (!placePrediction) return;

        const place = placePrediction.toPlace();
        if (!place) return;

        await place.fetchFields({
          fields: ["location", "displayName", "formattedAddress", "viewport"],
        });

        if (!place.location) return;

        onPlaceSelect({
          lat: place.location.lat(),
          lng: place.location.lng(),
          displayName: place.displayName || "",
          formattedAddress: place.formattedAddress || "",
          viewport: place.viewport || null,
        });
      } catch (error) {
        console.error("Error selecting Google Places location:", error);
      }
    },
    [onPlaceSelect]
  );

  useEffect(() => {
    if (!places || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const PlacesLib = places as any;
    if (!PlacesLib.PlaceAutocompleteElement) return;

    const autocomplete = new PlacesLib.PlaceAutocompleteElement();
    autocomplete.includedRegionCodes = ["ke"];
    autocomplete.placeholder = "Search location & hit Enter...";

    autocomplete.addEventListener("gmp-select", handlePlaceSelect);

    // Fallback Geocoding on Enter Key Press
    autocomplete.addEventListener("keydown", async (e: KeyboardEvent) => {
      if (e.key === "Enter" && geocoding) {
        const inputVal = (e.target as any)?.value;
        if (inputVal && inputVal.trim() !== "") {
          const geocoder = new geocoding.Geocoder();
          geocoder.geocode({ address: inputVal + ", Kenya" }, (results, status) => {
            if (status === "OK" && results && results[0]?.geometry?.location) {
              const loc = results[0].geometry.location;
              onPlaceSelect({
                lat: loc.lat(),
                lng: loc.lng(),
                formattedAddress: results[0].formatted_address,
              });
            }
          });
        }
      }
    });

    containerRef.current.appendChild(autocomplete);

    return () => {
      autocomplete.removeEventListener("gmp-select", handlePlaceSelect);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [places, geocoding, handlePlaceSelect, onPlaceSelect]);

  return <div ref={containerRef} />;
};

/* ============================================================
   PAN MAP TO SELECTED LOCATION
============================================================ */

const PanMapToSelectedLocation: React.FC<PanMapToSelectedLocationProps> = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !location) return;

    if (
      typeof location.lat !== "number" ||
      typeof location.lng !== "number"
    ) return;

    map.panTo({
      lat: location.lat,
      lng: location.lng,
    });

    map.setZoom(14);
  }, [map, location]);

  return null;
};

/* ============================================================
   MAP VIEWPORT BOUNDS TRACKER
============================================================ */

const ViewportTracker: React.FC<{
  onBoundsChange: (bounds: google.maps.LatLngBounds | null) => void;
}> = ({ onBoundsChange }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const listener = map.addListener("bounds_changed", () => {
      const bounds = map.getBounds();
      onBoundsChange(bounds || null);
    });

    onBoundsChange(map.getBounds() || null);

    return () => {
      google.maps.event.removeListener(listener);
    };
  }, [map, onBoundsChange]);

  return null;
};

/* ============================================================
   PROPERTY MARKERS & IMPROVED INFOWINDOW HOVER/CLICK
============================================================ */

const PropertyMarkers: React.FC<PropertyMarkersProps> = ({
  properties,
  selectedProperty,
  hoveredProperty,
  onSelectProperty,
  onHoverProperty,
}) => {
  const map = useMap();
  const clusterer = useRef<MarkerClusterer | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const [circleCenter, setCircleCenter] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (!map || clusterer.current) return;

    clusterer.current = new MarkerClusterer({ map });

    return () => {
      if (clusterer.current) {
        clusterer.current.clearMarkers();
        clusterer.current.setMap(null);
        clusterer.current = null;
      }
    };
  }, [map]);

  const refreshClusters = useCallback(() => {
    if (!clusterer.current) return;

    clusterer.current.clearMarkers();
    const markers = Object.values(markersRef.current).filter(Boolean);

    if (markers.length > 0) {
      clusterer.current.addMarkers(markers);
    }
  }, []);

  const setMarkerRef = useCallback(
    (marker: Marker | null, key: string) => {
      if (marker) {
        if (markersRef.current[key] === marker) return;
        markersRef.current[key] = marker;
      } else {
        delete markersRef.current[key];
      }

      refreshClusters();
    },
    [refreshClusters]
  );

  useEffect(() => {
    refreshClusters();
  }, [properties, refreshClusters]);

  const handleMarkerClicked = useCallback(
    (property: PropertyListing) => {
      if (!map) return;

      const center = { lat: property.latitude, lng: property.longitude };
      map.panTo(center);
      setCircleCenter(center);
      onSelectProperty(property);
    },
    [map, onSelectProperty]
  );

  // Clicked takes precedence over Hover preview
  const activeInfoWindowProperty = selectedProperty || hoveredProperty;
  const isHoverOnly = !selectedProperty && !!hoveredProperty;

  return (
    <>
      {properties.map((property) => {
        if (
          typeof property.latitude !== "number" ||
          typeof property.longitude !== "number" ||
          Number.isNaN(property.latitude) ||
          Number.isNaN(property.longitude)
        ) {
          return null;
        }

        const isSelected = selectedProperty?.id === property.id;
        const isHovered = hoveredProperty?.id === property.id;

        return (
          <AdvancedMarker
            key={property.id}
            position={{
              lat: property.latitude,
              lng: property.longitude,
            }}
            ref={(marker) => setMarkerRef(marker as Marker | null, property.id)}
            onClick={() => handleMarkerClicked(property)}
            onMouseEnter={() => onHoverProperty(property)}
            onMouseLeave={() => onHoverProperty(null)}
            clickable
          >
            <Pin
              background={isSelected ? "#0056b3" : isHovered ? "#2563eb" : "yellow"}
              borderColor="#003f8a"
              glyphColor={isSelected || isHovered ? "white" : "black"}
              scale={isSelected ? 1.4 : isHovered ? 1.3 : 1.2}
            />
          </AdvancedMarker>
        );
      })}

      {/* Offset InfoWindow floating above marker pins without covering or blocking hover events */}
      {activeInfoWindowProperty && (
        <InfoWindow
          position={{
            lat: activeInfoWindowProperty.latitude,
            lng: activeInfoWindowProperty.longitude,
          }}
          pixelOffset={[0, -38]} // Floats directly above the pin height
          onCloseClick={() => {
            onSelectProperty(null);
            onHoverProperty(null);
          }}
        >
          <div
            style={{
              padding: "4px",
              maxWidth: "220px",
              color: "#111",
              fontFamily: "sans-serif",
              pointerEvents: isHoverOnly ? "none" : "auto", // Prevents hover card from stealing mouse cursor focus
            }}
          >
            <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: "bold" }}>
              {activeInfoWindowProperty.title}
            </h4>
            <p style={{ margin: "2px 0", fontSize: "12px", color: "#555" }}>
              📍 {activeInfoWindowProperty.formattedAddress || "N/A"}
            </p>
            <p style={{ margin: "4px 0", fontSize: "13px", fontWeight: "bold", color: "#0056b3" }}>
              {activeInfoWindowProperty.price}
            </p>
            {activeInfoWindowProperty.availableUnits !== undefined && (
              <p style={{ margin: "2px 0", fontSize: "11px", color: "#28a745", fontWeight: 600 }}>
                {activeInfoWindowProperty.availableUnits} / {activeInfoWindowProperty.totalUnits || "--"} units available
              </p>
            )}
          </div>
        </InfoWindow>
      )}

      {circleCenter && (
        <Circle
          center={circleCenter}
          radius={250}
          strokeColor="#0056b3"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0056b3"
          fillOpacity={0.2}
        />
      )}
    </>
  );
};

/* ============================================================
   MAIN COMPONENT
============================================================ */

const SetPoiMarkers: React.FC = () => {
  const GOOGLE_MAPS_API_KEY =
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
    process.env.GOOGLE_MAPS_API_KEY ||
    "";

  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [hoveredProperty, setHoveredProperty] = useState<PropertyListing | null>(null);
  const [searchLocation, setSearchLocation] = useState<SelectedLocation | null>(null);
  const [mapBounds, setMapBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /* ==========================================================
     FETCH PROPERTIES FROM PUBLIC LISTINGS ENDPOINT
  ========================================================== */

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      let fetchedRecords: PropertyListing[] = [];

      try {
        const response = await fetch("http://localhost:8000/api/public/listings/properties");

        if (response.ok) {
          const contentType = response.headers.get("content-type");

          if (contentType && contentType.includes("application/json")) {
            const body = await response.json();

            const rawItems = Array.isArray(body.data)
              ? body.data
              : Array.isArray(body)
              ? body
              : [];

            fetchedRecords = rawItems
              .map((item: any): PropertyListing => {
                const latitude = parseFloat(
                  item.property_latitude ?? item.latitude ?? item.lat
                );

                const longitude = parseFloat(
                  item.property_longitude ?? item.longitude ?? item.lng
                );

                const rawPrice = item.prices_per_unit || item.price;
                let formattedPrice = "KES --";

                if (Array.isArray(rawPrice) && rawPrice.length > 0) {
                  const formattedNumbers = rawPrice
                    .map((p) => Number(p).toLocaleString())
                    .join(", ");
                  formattedPrice = `KES ${formattedNumbers}`;
                } else if (rawPrice) {
                  formattedPrice = `KES ${Number(rawPrice).toLocaleString()}`;
                }

                return {
                  id:
                    item.property_id ||
                    item.id ||
                    item._id ||
                    `property-${Math.random()}`,

                  title:
                    item.property_name ||
                    item.title ||
                    item.propertyName ||
                    "Untitled Property",

                  latitude,
                  longitude,

                  price: formattedPrice,

                  formattedAddress:
                    item.property_address ||
                    item.formattedAddress ||
                    item.address ||
                    "",

                  availableUnits:
                    item.available_units ?? item.availableUnits,

                  totalUnits:
                    item.total_units ?? item.totalUnits,

                  images: item.images || [],
                };
              })
              .filter(
                (item: PropertyListing) =>
                  Number.isFinite(item.latitude) &&
                  Number.isFinite(item.longitude)
              );
          }
        }
      } catch (err) {
        console.warn("Public listings API request failed, checking local drafts...", err);
      }

      /* Local Storage Draft Fallback */
      const saved = localStorage.getItem("propertylocation");
      if (saved) {
        try {
          const draft = JSON.parse(saved);
          if (draft.latitude !== undefined && draft.longitude !== undefined) {
            const latitude = parseFloat(draft.latitude);
            const longitude = parseFloat(draft.longitude);

            if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
              fetchedRecords.push({
                id: "draft_pinned_property",
                title: "Newly Pinned Property (Draft)",
                latitude,
                longitude,
                formattedAddress: draft.formattedAddress || "Pinned Location",
                price: "KES --",
                images: [],
              });
            }
          }
        } catch (e) {
          console.error("Error parsing local draft property location:", e);
        }
      }

      setProperties(fetchedRecords);
      setIsLoading(false);
    };

    fetchProperties();
  }, []);

  /* ==========================================================
     DYNAMIC SIDEBAR FILTERING
  ========================================================== */

  const visibleProperties = properties.filter((prop) => {
    if (!mapBounds) return true;
    const pos = new google.maps.LatLng(prop.latitude, prop.longitude);
    return mapBounds.contains(pos);
  });

  /* ==========================================================
     HANDLERS
  ========================================================== */

  const handlePlaceSelect = useCallback((location: SelectedLocation) => {
    if (!location) return;
    if (typeof location.lat !== "number" || typeof location.lng !== "number") return;

    setSearchLocation({
      lat: location.lat,
      lng: location.lng,
      displayName: location.displayName || "",
      formattedAddress: location.formattedAddress || "",
      viewport: location.viewport || null,
    });
  }, []);

  const handleCardClick = (prop: PropertyListing) => {
    setSelectedProperty(prop);
    setSearchLocation({
      lat: prop.latitude,
      lng: prop.longitude,
    });
  };

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <PageContainer>
      <TopNavbar>
        <BrandLogo to="/">
          Rent<span>Sure</span> Marketplace
        </BrandLogo>

        <AuthNavGroup>
          <SignInButton to="/signin">SIGN IN</SignInButton>
          <SignUpButton to="/signup">SIGN UP</SignUpButton>
        </AuthNavGroup>
      </TopNavbar>

      <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={LIBRARIES}>
        <MainContent>
          {/* Side-by-Side Cards List */}
          <SidebarContainer isCollapsed={isSidebarCollapsed}>
            <Sidebar isCollapsed={isSidebarCollapsed}>
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#111" }}>
                Properties in view ({visibleProperties.length})
              </h3>

              {visibleProperties.map((prop) => {
                const isSelected = selectedProperty?.id === prop.id;
                const isHovered = hoveredProperty?.id === prop.id;

                return (
                  <PropertyCard
                    key={prop.id}
                    isSelected={isSelected}
                    isHovered={isHovered}
                    onClick={() => handleCardClick(prop)}
                    onMouseEnter={() => setHoveredProperty(prop)}
                    onMouseLeave={() => setHoveredProperty(null)}
                  >
                    <h4 style={{ margin: "0 0 4px 0", fontSize: "0.95rem", color: "#1f2937" }}>
                      {prop.title}
                    </h4>
                    <p style={{ margin: "0 0 6px 0", fontSize: "0.8rem", color: "#6b7280" }}>
                      📍 {prop.formattedAddress || "Location provided on inquiry"}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: "bold", color: "#0056b3", fontSize: "0.85rem" }}>
                        {prop.price}
                      </span>
                      {prop.availableUnits !== undefined && (
                        <span style={{ fontSize: "0.75rem", background: "#e5e7eb", color: "#374151", padding: "2px 6px", borderRadius: "4px" }}>
                          {prop.availableUnits} avail.
                        </span>
                      )}
                    </div>
                  </PropertyCard>
                );
              })}
            </Sidebar>

            {/* Sidebar Collapse Toggle Arrow */}
            <CollapseToggleButton
              isCollapsed={isSidebarCollapsed}
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isSidebarCollapsed ? "▶" : "◀"}
            </CollapseToggleButton>
          </SidebarContainer>

          {/* Map View Area */}
          <Rendermap>
            <SearchOverlay>
              <PlaceSearchInput onPlaceSelect={handlePlaceSelect} />
            </SearchOverlay>

            <Map
              defaultZoom={7}
              defaultCenter={{ lat: -1.286389, lng: 36.817223 }}
              gestureHandling="greedy"
              disableDefaultUI={false}
              mapTypeId="hybrid"
              mapId="a99c0ae2ccbc0904"
              mapTypeControl={true}
              mapTypeControlOptions={{
                position: 3, // 3 represents TOP_RIGHT in Google Maps JS API, or use import { ControlPosition }
              }}  
              
            >
              <PanMapToSelectedLocation location={searchLocation} />
              <ViewportTracker onBoundsChange={setMapBounds} />
              <PropertyMarkers
                properties={visibleProperties}
                selectedProperty={selectedProperty}
                hoveredProperty={hoveredProperty}
                onSelectProperty={setSelectedProperty}
                onHoverProperty={setHoveredProperty}
              />
            </Map>
          </Rendermap>

          {isLoading && <LoadingOverlay>Loading properties...</LoadingOverlay>}
        </MainContent>
      </APIProvider>
    </PageContainer>
  );
};

export default SetPoiMarkers;