import { useEffect, useState } from 'react';
import { Activity, Droplets, Wind, Heart, Globe, TreePine } from 'lucide-react';

interface BiometricData {
  id: string;
  name: string;
  value: number;
  status: 'harmonious' | 'rebalancing' | 'critical';
  region: string;
  icon: any;
}

const PlanetaryGrid = () => {
  const [biosignals, setBiosignals] = useState<BiometricData[]>([
    { id: '1', name: 'Ocean pH Balance', value: 78, status: 'rebalancing', region: 'Pacific', icon: Droplets },
    { id: '2', name: 'Forest Canopy Health', value: 82, status: 'harmonious', region: 'Amazon', icon: TreePine },
    { id: '3', name: 'Atmospheric Stability', value: 65, status: 'rebalancing', region: 'Global', icon: Wind },
    { id: '4', name: 'Social Cohesion Index', value: 73, status: 'harmonious', region: 'Continental', icon: Heart },
    { id: '5', name: 'Biodiversity Pulse', value: 56, status: 'critical', region: 'Equatorial', icon: Globe },
    { id: '6', name: 'Cultural Resilience', value: 89, status: 'harmonious', region: 'Indigenous', icon: Activity },
  ]);

  const [rebalanceActions, setRebalanceActions] = useState([
    "Redirect 12% of military spending to ocean restoration protocols",
    "Activate mycorrhizal network connectivity in deforested regions",
    "Implement Ubuntu-based water sharing between drought-affected communities",
    "Deploy empathy amplification technology in conflict zones",
    "Establish sacred grove protections guided by Indigenous councils"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBiosignals(prev => prev.map(signal => ({
        ...signal,
        value: Math.max(0, Math.min(100, signal.value + (Math.random() - 0.5) * 4))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'harmonious': return 'text-secondary border-secondary';
      case 'rebalancing': return 'text-accent border-accent';
      case 'critical': return 'text-destructive border-destructive';
      default: return 'text-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
          🌀 AEGIS CORE: Planetary Sensor Grid
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          *The Earth's vital signs in real-time - where technology becomes the nervous system of our living planet*
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {biosignals.map((signal) => {
          const IconComponent = signal.icon;
          return (
            <div key={signal.id} className={`aegis-card biosignal-pulse border-2 ${getStatusColor(signal.status)}`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-full neural-network ${getStatusColor(signal.status)}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{signal.name}</h3>
                  <p className="text-sm text-muted-foreground">{signal.region} Region</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Harmony Level</span>
                  <span className="font-bold">{Math.round(signal.value)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-earth ${
                      signal.status === 'harmonious' ? 'earth-gradient' : 
                      signal.status === 'rebalancing' ? 'aurora-flow' : 'bg-destructive'
                    }`}
                    style={{ width: `${signal.value}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground capitalize">
                  Status: {signal.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="aegis-card">
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          🔄 Rebalance Suggestion Feed
        </h2>
        <div className="space-y-4">
          {rebalanceActions.map((action, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg transition-earth hover:bg-muted/50">
              <div className="w-2 h-2 rounded-full bg-primary-glow mt-2 biosignal-pulse" />
              <div className="flex-1">
                <p className="text-foreground">{action}</p>
                <button className="text-sm text-primary hover:text-primary-glow transition-earth mt-2">
                  → Simulate 7-generational impact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground italic">
          "Every pulse you see represents millions of interconnected lives. AEGIS doesn't just monitor—it listens."
        </p>
      </div>
    </div>
  );
};

export default PlanetaryGrid;