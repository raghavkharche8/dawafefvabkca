import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, TrendingUp } from 'lucide-react';

export default function RouteMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [mapStats, setMapStats] = useState({
    distance: '25',
    loaded: false,
  });

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [17.5333, 73.5167],
      zoom: 13,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    const parseGPX = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/fff4ba451c911807c346f84fa8d4b2897127f594/Chiplun_Cyclothon_2024.gpx'
        );
        const gpxText = await response.text();
        const parser = new DOMParser();
        const gpxDoc = parser.parseFromString(gpxText, 'text/xml');

        const trkpts = gpxDoc.getElementsByTagName('trkpt');
        const coordinates: L.LatLngExpression[] = [];

        for (let i = 0; i < trkpts.length; i++) {
          const lat = parseFloat(trkpts[i].getAttribute('lat') || '0');
          const lon = parseFloat(trkpts[i].getAttribute('lon') || '0');
          coordinates.push([lat, lon]);
        }

        if (coordinates.length > 0) {
          const polyline = L.polyline(coordinates, {
            color: '#D84315',
            weight: 4,
            opacity: 0.8,
            smoothFactor: 1,
          }).addTo(map);

          map.fitBounds(polyline.getBounds(), { padding: [50, 50] });

          const startIcon = L.divIcon({
            html: '<div style="background-color: #2E7D32; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });

          const endIcon = L.divIcon({
            html: '<div style="background-color: #D84315; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });

          L.marker(coordinates[0], { icon: startIcon })
            .addTo(map)
            .bindPopup(
              '<div style="text-align: center; font-weight: bold;"><div style="color: #2E7D32;">🏁 Start Point</div><div style="font-size: 12px; margin-top: 4px;">Bahadur Sheikh Naka</div></div>'
            );

          L.marker(coordinates[coordinates.length - 1], { icon: endIcon })
            .addTo(map)
            .bindPopup(
              '<div style="text-align: center; font-weight: bold;"><div style="color: #D84315;">🏆 Finish Point</div><div style="font-size: 12px; margin-top: 4px;">Bahadur Sheikh Naka</div></div>'
            );

          let totalDistance = 0;
          for (let i = 1; i < coordinates.length; i++) {
            totalDistance += map.distance(coordinates[i - 1], coordinates[i]);
          }
          const distanceKm = (totalDistance / 1000).toFixed(2);

          setMapStats({
            distance: distanceKm,
            loaded: true,
          });
        }
      } catch (error) {
        console.error('Error loading GPX:', error);
        setMapStats({
          distance: '25',
          loaded: true,
        });
      }
    };

    parseGPX();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="route-map" className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            मार्ग नकाशा | Route Map
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D84315] to-[#1565C0] mx-auto rounded-full mb-3"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            सायक्लोथॉनचा संपूर्ण मार्ग पहा | Explore the complete cyclothon route
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-2 gap-3 p-4 sm:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#D84315]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[#D84315]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 font-medium">अंतर | Distance</p>
                <p className="text-lg sm:text-xl font-black text-gray-900">{mapStats.distance} km</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#1565C0]/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-[#1565C0]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 font-medium">प्रकार | Type</p>
                <p className="text-lg sm:text-xl font-black text-gray-900">Round Trip</p>
              </div>
            </div>
          </div>

          <div ref={mapRef} className="w-full h-[350px] sm:h-[450px]"></div>

          <div className="p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#2E7D32] border-2 border-white shadow-md flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">प्रारंभ बिंदू | Start Point</p>
                  <p className="text-xs text-gray-600">Shivraj Dhaba, Bahadur Sheikh Naka</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#D84315] border-2 border-white shadow-md flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">समाप्ती बिंदू | Finish Point</p>
                  <p className="text-xs text-gray-600">Shivraj Dhaba, Bahadur Sheikh Naka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-[#1565C0] to-[#1976D2] rounded-xl p-4 sm:p-6 text-white shadow-xl">
          <p className="text-base sm:text-lg font-bold text-center">
            मार्ग: बहादुरशेख नाका → अलोरे → बहादुरशेख नाका
          </p>
          <p className="text-sm sm:text-base text-center mt-1">
            Route: Bahadur Sheikh Naka → Alore → Bahadur Sheikh Naka
          </p>
        </div>
      </div>
    </section>
  );
}
