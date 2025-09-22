import { 
  Sparkles, Globe, Crown, Coins, Award, TreePine, Bug, MapPin, Satellite, RefreshCw 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Farmer, Guild, BossChallenge, DailyRiddle } from '../types';
import { getAuraColor } from '../utils/utils';
import { useState, useEffect } from 'react';

// GeoJSON data structure
interface GeoJSONFeature {
  type: "Feature";
  properties: {
    land_type: string;
    [key: string]: any;
  };
  geometry: {
    type: "Polygon";
    coordinates: number[][][];
  };
}

interface GeoJSONData {
  type: "FeatureCollection";
  crs: {
    type: "name";
    properties: { name: string };
  };
  features: GeoJSONFeature[];
}

// Enhanced GIS data interface for processed farm data
interface GISFarmData {
  farmId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  auraHealth: number;
  vegetationIndex: number;
  soilMoisture: number;
  cropDensity: number;
  temperature: number;
  rainfall: number;
  lastUpdated: string;
  recommendations: string[];
  riskFactors: string[];
  landType: string;
  area: number; // in square kilometers
  boundingBox: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
}

interface WebGISService {
  fetchFarmData: (farmId: string) => Promise<GISFarmData>;
  getMapUrl: (coordinates: { lat: number; lng: number }) => string;
}

// Your GeoJSON dataset
const geoJsonData: GeoJSONData = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": { "name": "EPSG:4326" }
  },
  "features": [
    {
      "type": "Feature",
      "properties": { "land_type": "Agriculture" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.0, 28.0], [88.0, 28.0],
            [88.0, 23.0], [72.0, 23.0],
            [72.0, 28.0]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "land_type": "Forest" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [77.0, 21.0], [83.0, 21.0],
            [83.0, 17.0], [77.0, 17.0],
            [77.0, 21.0]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "land_type": "Urban" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.7, 19.0], [73.0, 19.0],
            [73.0, 18.7], [72.7, 18.7],
            [72.7, 19.0]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "land_type": "Water" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [78.0, 10.0], [80.0, 10.0],
            [80.0, 8.0], [78.0, 8.0],
            [78.0, 10.0]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { "land_type": "Barren" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [69.0, 25.0], [72.0, 25.0],
            [72.0, 27.0], [69.0, 27.0],
            [69.0, 25.0]
          ]
        ]
      }
    }
  ]
};

// Utility functions for GeoJSON processing
const calculatePolygonArea = (coordinates: number[][][]): number => {
  // Simple area calculation for rectangular polygons
  const coords = coordinates[0];
  const lat1 = coords[0][1], lng1 = coords[0][0];
  const lat2 = coords[2][1], lng2 = coords[2][0];
  
  // Convert degrees to approximate km (rough calculation)
  const latDiff = Math.abs(lat2 - lat1) * 111; // 1 degree lat ≈ 111 km
  const lngDiff = Math.abs(lng2 - lng1) * 111 * Math.cos((lat1 + lat2) / 2 * Math.PI / 180);
  
  return latDiff * lngDiff; // area in square km
};

const getPolygonCenter = (coordinates: number[][][]): { lat: number; lng: number } => {
  const coords = coordinates[0];
  let latSum = 0, lngSum = 0;
  
  for (let i = 0; i < coords.length - 1; i++) { // -1 to avoid duplicate closing point
    latSum += coords[i][1];
    lngSum += coords[i][0];
  }
  
  return {
    lat: latSum / (coords.length - 1),
    lng: lngSum / (coords.length - 1)
  };
};

const getBoundingBox = (coordinates: number[][][]) => {
  const coords = coordinates[0];
  let north = -90, south = 90, east = -180, west = 180;
  
  coords.forEach(([lng, lat]) => {
    north = Math.max(north, lat);
    south = Math.min(south, lat);
    east = Math.max(east, lng);
    west = Math.min(west, lng);
  });
  
  return { north, south, east, west };
};

// Generate realistic farm data based on land type
const generateFarmDataFromLandType = (feature: GeoJSONFeature, index: number): GISFarmData => {
  const { land_type } = feature.properties;
  const coordinates = getPolygonCenter(feature.geometry.coordinates);
  const area = calculatePolygonArea(feature.geometry.coordinates);
  const boundingBox = getBoundingBox(feature.geometry.coordinates);
  
  let auraHealth = 50;
  let vegetationIndex = 0.3;
  let soilMoisture = 0.4;
  let cropDensity = 0.3;
  let recommendations: string[] = [];
  let riskFactors: string[] = [];
  
  // Customize based on land type
  switch (land_type) {
    case 'Agriculture':
      auraHealth = 75 + Math.random() * 20;
      vegetationIndex = 0.6 + Math.random() * 0.3;
      soilMoisture = 0.5 + Math.random() * 0.4;
      cropDensity = 0.7 + Math.random() * 0.3;
      recommendations = [
        'Optimize irrigation scheduling based on crop growth stage',
        'Consider crop rotation to improve soil health',
        'Monitor for pest activity during flowering season',
        'Apply organic fertilizers to boost soil nutrients'
      ];
      if (auraHealth < 80) {
        riskFactors = ['Soil nutrient depletion in some areas', 'Irregular irrigation patterns detected'];
      }
      break;
      
    case 'Forest':
      auraHealth = 85 + Math.random() * 15;
      vegetationIndex = 0.8 + Math.random() * 0.2;
      soilMoisture = 0.7 + Math.random() * 0.3;
      cropDensity = 0.9 + Math.random() * 0.1;
      recommendations = [
        'Maintain forest cover to preserve biodiversity',
        'Monitor for illegal logging activities',
        'Implement fire prevention measures',
        'Protect wildlife corridors'
      ];
      if (Math.random() > 0.7) {
        riskFactors = ['Fire risk during dry season', 'Encroachment pressure from nearby settlements'];
      }
      break;
      
    case 'Urban':
      auraHealth = 30 + Math.random() * 20;
      vegetationIndex = 0.1 + Math.random() * 0.2;
      soilMoisture = 0.2 + Math.random() * 0.3;
      cropDensity = 0.1 + Math.random() * 0.2;
      recommendations = [
        'Increase green cover through urban forestry',
        'Implement rooftop gardening initiatives',
        'Create community gardens and parks',
        'Improve air quality through vegetation'
      ];
      riskFactors = ['High air pollution levels', 'Urban heat island effect', 'Limited green space'];
      break;
      
    case 'Water':
      auraHealth = 60 + Math.random() * 30;
      vegetationIndex = 0.2 + Math.random() * 0.3;
      soilMoisture = 0.9 + Math.random() * 0.1;
      cropDensity = 0.3 + Math.random() * 0.4;
      recommendations = [
        'Monitor water quality regularly',
        'Protect riparian vegetation',
        'Prevent industrial pollution discharge',
        'Maintain aquatic ecosystem balance'
      ];
      if (Math.random() > 0.6) {
        riskFactors = ['Water pollution from upstream sources', 'Algal bloom risk during summer'];
      }
      break;
      
    case 'Barren':
      auraHealth = 20 + Math.random() * 30;
      vegetationIndex = 0.05 + Math.random() * 0.15;
      soilMoisture = 0.1 + Math.random() * 0.2;
      cropDensity = 0.05 + Math.random() * 0.15;
      recommendations = [
        'Implement soil conservation measures',
        'Consider afforestation programs',
        'Introduce drought-resistant vegetation',
        'Prevent further soil erosion'
      ];
      riskFactors = ['Severe soil erosion', 'Desertification risk', 'Limited water availability'];
      break;
  }
  
  return {
    farmId: `${land_type.toUpperCase()}_${index + 1}`,
    coordinates,
    auraHealth: Math.round(auraHealth),
    vegetationIndex: Number(vegetationIndex.toFixed(3)),
    soilMoisture: Number(soilMoisture.toFixed(3)),
    cropDensity: Number(cropDensity.toFixed(3)),
    temperature: 25 + Math.random() * 15, // 25-40°C range
    rainfall: Math.random() * 300, // 0-300mm
    lastUpdated: new Date().toISOString(),
    recommendations,
    riskFactors,
    landType: land_type,
    area: Number(area.toFixed(2)),
    boundingBox
  };
};

// Process GeoJSON data into farm dataset
let farmDataset: GISFarmData[] = geoJsonData.features.map((feature, index) => 
  generateFarmDataFromLandType(feature, index)
);

// Function to get available farm IDs
export const getAvailableFarms = (): Array<{id: string, type: string, area: number}> => {
  return farmDataset.map(farm => ({
    id: farm.farmId,
    type: farm.landType,
    area: farm.area
  }));
};

// Function to update dataset (if needed)
export const loadFarmDataset = (dataset: GISFarmData[]) => {
  farmDataset = dataset;
};

// Dataset-based service with GeoJSON integration
const webGISService: WebGISService = {
  fetchFarmData: async (farmId: string): Promise<GISFarmData> => {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find farm data in processed GeoJSON dataset
    const farmData = farmDataset.find(farm => farm.farmId === farmId);
    
    if (!farmData) {
      throw new Error(`Farm data not found for ID: ${farmId}. Available farms: ${farmDataset.map(f => f.farmId).join(', ')}`);
    }
    
    return farmData;
  },
  
  getMapUrl: (coordinates: { lat: number; lng: number }) => {
    // Generate map URL for external viewing with farm location
    return `https://www.google.com/maps/@${coordinates.lat},${coordinates.lng},12z/data=!3m1!1e3`;
  }
};

interface DashboardPageProps {
  farmer: Farmer;
  guild: Guild;
  bossChallenge: BossChallenge;
  dailyRiddle: DailyRiddle;
  farmId?: string; // Default will be first available farm
}

export default function DashboardPage({ farmer, guild, bossChallenge, farmId }: DashboardPageProps) {
  const { t } = useLanguage();
  const [gisData, setGisData] = useState<GISFarmData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFarmId, setSelectedFarmId] = useState(farmId || farmDataset[0]?.farmId || 'AGRICULTURE_1');

  // Get available farms for dropdown
  const availableFarms = getAvailableFarms();

  // Fetch GIS data on component mount and when selectedFarmId changes
  useEffect(() => {
    fetchFarmGISData();
  }, [selectedFarmId]);

  const fetchFarmGISData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await webGISService.fetchFarmData(selectedFarmId);
      setGisData(data);
      
      // Update farmer's aura health with real GIS data
      farmer.auraHealth = data.auraHealth;
    } catch (err) {
      setError(`Failed to fetch farm data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      console.error('GIS data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const openWebGISMap = () => {
    if (gisData) {
      const mapUrl = webGISService.getMapUrl(gisData.coordinates);
      window.open(mapUrl, '_blank');
    }
  };

  const getLandTypeColor = (landType: string) => {
    switch (landType) {
      case 'Agriculture': return 'bg-green-500';
      case 'Forest': return 'bg-emerald-600';
      case 'Urban': return 'bg-gray-500';
      case 'Water': return 'bg-blue-500';
      case 'Barren': return 'bg-yellow-700';
      default: return 'bg-gray-400';
    }
  };

  const getLandTypeIcon = (landType: string) => {
    switch (landType) {
      case 'Agriculture': return TreePine;
      case 'Forest': return TreePine;
      case 'Urban': return Globe;
      case 'Water': return Globe;
      case 'Barren': return Globe;
      default: return Globe;
    }
  };

  const getHealthStatus = (value: number) => {
    if (value >= 0.8) return { status: t.dashboard.excellent, color: 'text-green-600' };
    if (value >= 0.6) return { status: t.dashboard.good, color: 'text-blue-600' };
    if (value >= 0.4) return { status: 'Average', color: 'text-yellow-600' };
    return { status: 'Needs Attention', color: 'text-red-600' };
  };

  return (
    <div className="space-y-8">
      {/* Daily Riddle */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Sparkles className="h-5 w-5 mr-2" />
            {t.dashboard.dailyRiddle}
          </h3>
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
            {t.dashboard.dailyChallenge}
          </div>
        </div>
        <p className="text-indigo-100 mb-4">{t.dailyRiddle.question}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {t.dailyRiddle.options.map((option, index) => (
            <button 
              key={index}
              className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-2 text-sm transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
        <p className="text-xs text-indigo-200">{t.dashboard.reward}: {t.dailyRiddle.reward}</p>
      </div>

      {/* Boss Challenge Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Bug className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t.dashboard.bossChallenge}: {t.bossChallenge.chemicalAsur}</h3>
              <p className="text-red-100">{t.bossChallenge.chemicalAsurDesc}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <span>{bossChallenge.participants} {t.dashboard.farmersParticipating}</span>
                <span>⏰ {bossChallenge.timeLeft} {t.dashboard.timeLeft}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{bossChallenge.progress}%</div>
            <div className="w-24 h-3 bg-white bg-opacity-20 rounded-full mt-2">
              <div 
                className="h-3 bg-white rounded-full transition-all duration-500"
                style={{ width: `${bossChallenge.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.farmAuraHealth}</p>
              <p className="text-3xl font-bold text-green-600">
                {loading ? '...' : `${gisData?.auraHealth || farmer.auraHealth}%`}
              </p>
            </div>
            <div className={`bg-gradient-to-r ${getAuraColor(gisData?.auraHealth || farmer.auraHealth)} p-3 rounded-lg`}>
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${getAuraColor(gisData?.auraHealth || farmer.auraHealth)} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${gisData?.auraHealth || farmer.auraHealth}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {gisData?.auraHealth || farmer.auraHealth}%
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-gray-500">{t.dashboard.poweredBySatelliteData}</p>
              {gisData && (
                <button
                  onClick={fetchFarmGISData}
                  disabled={loading}
                  className="text-xs text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <RefreshCw className={`h-3 w-3 mr-1 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.levelTitle}</p>
              <p className="text-2xl font-bold text-blue-600">{farmer.level}</p>
              <p className="text-xs text-blue-600 font-medium">{t.titles[farmer.title as keyof typeof t.titles]}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Crown className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{farmer.totalPoints} {t.dashboard.totalPoints}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.greenCredits}</p>
              <p className="text-3xl font-bold text-yellow-600">{farmer.greenCredits}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Coins className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{t.dashboard.spendInMandi}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.guildRank}</p>
              <p className="text-3xl font-bold text-purple-600">#{guild.rank}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Crown className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{guild.name}</p>
        </div>
      </div>

      {/* Enhanced Farm Aura Visualization with GIS Integration */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Satellite className="h-5 w-5 mr-2 text-green-500" />
            {t.dashboard.farmAura} - GeoJSON Analysis
          </h3>
          <div className="flex items-center space-x-2">
            {/* Farm Selector */}
            <select
              value={selectedFarmId}
              onChange={(e) => setSelectedFarmId(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm"
              disabled={loading}
            >
              {availableFarms.map((farm) => (
                <option key={farm.id} value={farm.id}>
                  {farm.type} ({farm.area.toFixed(1)} km²)
                </option>
              ))}
            </select>
            {gisData && (
              <button
                onClick={openWebGISMap}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center"
              >
                <MapPin className="h-4 w-4 mr-1" />
                View Map
              </button>
            )}
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="h-8 w-8 animate-spin text-blue-500" />
            <span className="ml-2 text-gray-600">Loading GIS data...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={fetchFarmGISData}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
            >
              Retry
            </button>
          </div>
        )}

        {gisData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-green-800">GeoJSON Land Analysis</h4>
                  <div className={`px-2 py-1 rounded-full text-xs text-white ${getLandTypeColor(gisData.landType)}`}>
                    {gisData.landType}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Land Type</span>
                    <span className="font-medium text-green-600">{gisData.landType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Area Coverage</span>
                    <span className="font-medium text-green-600">{gisData.area} km²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vegetation Index (NDVI)</span>
                    <span className={`font-medium ${getHealthStatus(gisData.vegetationIndex).color}`}>
                      {gisData.vegetationIndex.toFixed(3)} ({getHealthStatus(gisData.vegetationIndex).status})
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Soil Moisture</span>
                    <span className={`font-medium ${getHealthStatus(gisData.soilMoisture).color}`}>
                      {(gisData.soilMoisture * 100).toFixed(0)}% ({getHealthStatus(gisData.soilMoisture).status})
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Crop/Vegetation Density</span>
                    <span className={`font-medium ${getHealthStatus(gisData.cropDensity).color}`}>
                      {(gisData.cropDensity * 100).toFixed(0)}% ({getHealthStatus(gisData.cropDensity).status})
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Environmental Data</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Temperature:</span>
                    <div className="font-medium text-orange-600">{gisData.temperature.toFixed(1)}°C</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Rainfall:</span>
                    <div className="font-medium text-blue-600">{gisData.rainfall.toFixed(0)}mm</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  <strong>Coordinates:</strong> {gisData.coordinates.lat.toFixed(4)}, {gisData.coordinates.lng.toFixed(4)}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Land-Specific Recommendations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {gisData.recommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>

              {gisData.riskFactors.length > 0 && (
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Risk Assessment</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    {gisData.riskFactors.map((risk, index) => (
                      <li key={index}>⚠️ {risk}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-32 h-32 ${getLandTypeColor(gisData.landType)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg relative`}>
                  {(() => {
                    const IconComponent = getLandTypeIcon(gisData.landType);
                    return <IconComponent className="h-16 w-16 text-white" />;
                  })()}
                  <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                    <Satellite className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {gisData.landType} Aura: {gisData.auraHealth}%
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Area: {gisData.area} km²
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Last Updated: {new Date(gisData.lastUpdated).toLocaleString()}
                </p>
                <div className="mt-3 bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-xs text-gray-600 mb-1">Bounding Box:</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div>N: {gisData.boundingBox.north.toFixed(2)}°</div>
                    <div>S: {gisData.boundingBox.south.toFixed(2)}°</div>
                    <div>E: {gisData.boundingBox.east.toFixed(2)}°</div>
                    <div>W: {gisData.boundingBox.west.toFixed(2)}°</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-yellow-500" />
          {t.dashboard.recentAchievements}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {farmer.badges.map((badge, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">{t.titles[badge as keyof typeof t.titles]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}