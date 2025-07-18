import { useState } from 'react';
import { Droplets, Zap, Wheat, Wifi, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Resource {
  id: string;
  name: string;
  icon: any;
  totalAvailable: number;
  currentDistribution: { region: string; amount: number; need: number }[];
  ethicalFramework: string;
}

const EquityEngines = () => {
  const [selectedResource, setSelectedResource] = useState<string>('water');
  const [selectedEthic, setSelectedEthic] = useState<string>('ubuntu');

  const resources: Resource[] = [
    {
      id: 'water',
      name: 'Sacred Waters',
      icon: Droplets,
      totalAvailable: 100,
      currentDistribution: [
        { region: 'Northern Abundance', amount: 40, need: 20 },
        { region: 'Equatorial Communities', amount: 15, need: 35 },
        { region: 'Island Nations', amount: 8, need: 25 },
        { region: 'Desert Peoples', amount: 5, need: 20 }
      ],
      ethicalFramework: 'Water as sacred gift, not commodity'
    },
    {
      id: 'energy',
      name: 'Solar Abundance',
      icon: Zap,
      totalAvailable: 100,
      currentDistribution: [
        { region: 'Industrial Centers', amount: 50, need: 25 },
        { region: 'Rural Communities', amount: 20, need: 30 },
        { region: 'Emerging Cities', amount: 15, need: 30 },
        { region: 'Remote Villages', amount: 5, need: 15 }
      ],
      ethicalFramework: 'Energy as universal right to flourishing'
    },
    {
      id: 'food',
      name: 'Nourishment Networks',
      icon: Wheat,
      totalAvailable: 100,
      currentDistribution: [
        { region: 'Surplus Nations', amount: 35, need: 20 },
        { region: 'Growing Regions', amount: 30, need: 25 },
        { region: 'Climate-Affected', amount: 20, need: 30 },
        { region: 'Food Deserts', amount: 10, need: 25 }
      ],
      ethicalFramework: 'Food sovereignty as cultural preservation'
    }
  ];

  const ethicalFrameworks = [
    {
      id: 'ubuntu',
      name: 'Ubuntu Sharing',
      description: 'I am because we are - interconnected abundance',
      principle: 'Distribute based on collective wellbeing and Ubuntu wisdom'
    },
    {
      id: 'dharmic',
      name: 'Dharmic Duty',
      description: 'Righteous distribution according to cosmic order',
      principle: 'Allocate resources to maintain universal balance and dharma'
    },
    {
      id: 'indigenous',
      name: 'Seven Generations',
      description: 'Every decision considers seven generations ahead',
      principle: 'Distribute thinking of our ancestors and descendants'
    }
  ];

  const currentResource = resources.find(r => r.id === selectedResource);
  const currentEthic = ethicalFrameworks.find(e => e.id === selectedEthic);

  const simulateRebalance = () => {
    if (!currentResource) return;
    
    // Simple rebalancing simulation based on need vs availability
    const totalNeed = currentResource.currentDistribution.reduce((sum, region) => sum + region.need, 0);
    const rebalanced = currentResource.currentDistribution.map(region => ({
      ...region,
      suggested: Math.round((region.need / totalNeed) * currentResource.totalAvailable)
    }));
    
    console.log('Rebalanced distribution:', rebalanced);
    // In a real app, this would update the state and show the new distribution
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
          ⚖️ AEGIS RECONCILE: Equity Engines
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          *Intelligent redistributors guided by ancient wisdom and quantum compassion*
        </p>
      </div>

      {/* Resource Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resources.map((resource) => {
          const IconComponent = resource.icon;
          return (
            <button
              key={resource.id}
              onClick={() => setSelectedResource(resource.id)}
              className={`aegis-card text-left transition-earth ${
                selectedResource === resource.id ? 'border-primary-glow' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full neural-network">
                  <IconComponent className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground">{resource.ethicalFramework}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Ethical Framework Selection */}
      <div className="aegis-card">
        <h2 className="text-xl font-bold mb-4 text-accent">Choose Ethical Lens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ethicalFrameworks.map((framework) => (
            <button
              key={framework.id}
              onClick={() => setSelectedEthic(framework.id)}
              className={`p-4 rounded-lg border transition-earth text-left ${
                selectedEthic === framework.id 
                  ? 'border-accent bg-accent/10' 
                  : 'border-border bg-muted/20 hover:bg-muted/40'
              }`}
            >
              <h3 className="font-semibold mb-2">{framework.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{framework.description}</p>
              <p className="text-xs text-accent italic">{framework.principle}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Current Distribution Visualization */}
      {currentResource && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aegis-card">
            <h2 className="text-xl font-bold mb-6 text-destructive">Current Imbalance</h2>
            <div className="space-y-4">
              {currentResource.currentDistribution.map((region, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{region.region}</span>
                    <span className="text-sm">
                      Has: {region.amount}% | Needs: {region.need}%
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-muted rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-destructive transition-earth"
                        style={{ width: `${(region.amount / currentResource.totalAvailable) * 100}%` }}
                      />
                    </div>
                    <div className="flex-1 bg-muted rounded-full h-3">
                      <div 
                        className="h-3 rounded-full aurora-flow transition-earth"
                        style={{ width: `${(region.need / currentResource.totalAvailable) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Current Access</span>
                    <span>Actual Need</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aegis-card">
            <h2 className="text-xl font-bold mb-6 text-secondary">AEGIS Rebalanced Future</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Through {currentEthic?.name} principles:
              </p>
              {currentResource.currentDistribution.map((region, index) => {
                const idealDistribution = Math.round((region.need / 
                  currentResource.currentDistribution.reduce((sum, r) => sum + r.need, 0)) * 100);
                
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{region.region}</span>
                      <span className="text-sm text-secondary">
                        Optimal: {idealDistribution}%
                      </span>
                    </div>
                    <div className="bg-muted rounded-full h-3">
                      <div 
                        className="h-3 rounded-full earth-gradient transition-earth"
                        style={{ width: `${idealDistribution}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Button 
              onClick={simulateRebalance}
              className="w-full mt-6 bg-primary hover:bg-primary-glow transition-earth"
            >
              🌊 Simulate Harmonic Flow
            </Button>
          </div>
        </div>
      )}

      <div className="aegis-card text-center">
        <h3 className="text-lg font-semibold mb-4 text-accent">Fractal Equity Visualization</h3>
        <div className="grid grid-cols-6 gap-2 max-w-md mx-auto">
          {Array.from({ length: 36 }).map((_, i) => (
            <div 
              key={i}
              className={`h-4 w-4 rounded-sm transition-earth ${
                i % 3 === 0 ? 'bg-destructive' : 
                i % 3 === 1 ? 'aurora-flow' : 'earth-gradient'
              }`}
              style={{ 
                animationDelay: `${i * 0.1}s`,
                transform: `scale(${0.5 + Math.sin(i * 0.5) * 0.3})`
              }}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          "Not pie charts of scarcity, but fractals of abundance"
        </p>
      </div>
    </div>
  );
};

export default EquityEngines;