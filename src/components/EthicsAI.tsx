import { useState } from 'react';
import { Brain, Clock, Users, Leaf, Scale, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PolicySeed {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: {
    immediate: number;
    generational: number;
    harmony: number;
  };
}

interface EthicalSource {
  name: string;
  tradition: string;
  wisdom: string;
  icon: string;
}

const EthicsAI = () => {
  const [selectedSeed, setSelectedSeed] = useState<PolicySeed | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState<any>(null);

  const policySeedsData = [
    {
      id: '1',
      title: 'Universal Basic Resources',
      description: 'Guarantee water, food, shelter, and dignity for every being',
      category: 'Abundance Redistribution',
      impact: { immediate: 85, generational: 95, harmony: 90 }
    },
    {
      id: '2',
      title: 'Mycorrhizal Internet Rights',
      description: 'Protect forest communication networks as sacred infrastructure',
      category: 'Interspecies Collaboration',
      impact: { immediate: 70, generational: 98, harmony: 93 }
    },
    {
      id: '3',
      title: 'Empathy Amplification Technology',
      description: 'Deploy compassion enhancement in conflict zones',
      category: 'Emotional Infrastructure',
      impact: { immediate: 75, generational: 88, harmony: 95 }
    },
    {
      id: '4',
      title: 'Seven Generation Impact Assessments',
      description: 'Mandate long-term thinking for all major decisions',
      category: 'Temporal Wisdom',
      impact: { immediate: 60, generational: 100, harmony: 85 }
    }
  ];

  const ethicalSources: EthicalSource[] = [
    {
      name: 'Confucius',
      tradition: 'Chinese Philosophy',
      wisdom: 'The superior man thinks of virtue; the small man thinks of comfort.',
      icon: '🏮'
    },
    {
      name: 'Adi Sankara',
      tradition: 'Advaita Vedanta',
      wisdom: 'Brahman alone is real; the world is appearance.',
      icon: '🕉️'
    },
    {
      name: 'Martin Buber',
      tradition: 'Jewish Philosophy',
      wisdom: 'All real living is meeting.',
      icon: '✡️'
    },
    {
      name: 'Ubuntu Tradition',
      tradition: 'African Philosophy',
      wisdom: 'I am because we are.',
      icon: '🌍'
    },
    {
      name: 'Indigenous Councils',
      tradition: 'First Nations Wisdom',
      wisdom: 'We do not inherit the Earth from our ancestors; we borrow it from our children.',
      icon: '🦅'
    },
    {
      name: 'Thich Nhat Hanh',
      tradition: 'Buddhist Teaching',
      wisdom: 'We are here to awaken from our illusion of separateness.',
      icon: '🪷'
    }
  ];

  const simulatePolicy = async (policy: PolicySeed) => {
    setIsSimulating(true);
    setSelectedSeed(policy);
    
    // Simulate the "1 billion futures" calculation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const results = {
      futuresAnalyzed: 1000000000,
      harmonicConvergence: Math.round(85 + Math.random() * 10),
      culturalResonance: Math.round(80 + Math.random() * 15),
      ecologicalImpact: Math.round(75 + Math.random() * 20),
      generationalWisdom: policy.impact.generational,
      ethicalAlignment: Math.round(88 + Math.random() * 8),
      recommendations: [
        `Integrate ${ethicalSources[Math.floor(Math.random() * ethicalSources.length)].tradition} principles`,
        "Establish regenerative feedback loops",
        "Ensure Indigenous community leadership",
        "Deploy with compassionate iteration cycles"
      ]
    };
    
    setSimulationResults(results);
    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
          🌌 AEGIS CONSTELLATION: Global Ethics Orchestrator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          *Simulating 1 billion policy futures through the lens of universal compassion*
        </p>
      </div>

      {/* Policy Seeds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policySeedsData.map((seed) => (
          <div 
            key={seed.id} 
            className={`aegis-card cursor-pointer transition-earth ${
              selectedSeed?.id === seed.id ? 'border-primary-glow' : ''
            }`}
            onClick={() => setSelectedSeed(seed)}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-accent">{seed.title}</h3>
                <p className="text-sm text-muted-foreground">{seed.category}</p>
              </div>
              
              <p className="text-foreground">{seed.description}</p>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">{seed.impact.immediate}%</div>
                  <div className="text-xs text-muted-foreground">Immediate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-secondary">{seed.impact.generational}%</div>
                  <div className="text-xs text-muted-foreground">7-Gen Impact</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-accent">{seed.impact.harmony}%</div>
                  <div className="text-xs text-muted-foreground">Harmony</div>
                </div>
              </div>

              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  simulatePolicy(seed);
                }}
                className="w-full bg-primary hover:bg-primary-glow transition-earth"
                disabled={isSimulating}
              >
                {isSimulating ? (
                  <><Brain className="w-4 h-4 mr-2 animate-spin" /> Consulting 1B Futures...</>
                ) : (
                  <><Sparkles className="w-4 h-4 mr-2" /> Simulate Ethics Impact</>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Simulation Results */}
      {simulationResults && (
        <div className="aegis-card">
          <h2 className="text-2xl font-bold mb-6 text-center text-accent">
            🔮 Ethical Simulation Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center space-y-2">
              <Brain className="w-8 h-8 mx-auto text-primary-glow" />
              <div className="text-2xl font-bold">{simulationResults.futuresAnalyzed.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Futures Analyzed</div>
            </div>
            
            <div className="text-center space-y-2">
              <Scale className="w-8 h-8 mx-auto text-accent" />
              <div className="text-2xl font-bold text-accent">{simulationResults.harmonicConvergence}%</div>
              <div className="text-sm text-muted-foreground">Harmonic Convergence</div>
            </div>
            
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 mx-auto text-secondary" />
              <div className="text-2xl font-bold text-secondary">{simulationResults.culturalResonance}%</div>
              <div className="text-sm text-muted-foreground">Cultural Resonance</div>
            </div>
            
            <div className="text-center space-y-2">
              <Leaf className="w-8 h-8 mx-auto text-secondary" />
              <div className="text-2xl font-bold text-secondary">{simulationResults.ecologicalImpact}%</div>
              <div className="text-sm text-muted-foreground">Ecological Healing</div>
            </div>
            
            <div className="text-center space-y-2">
              <Clock className="w-8 h-8 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">{simulationResults.generationalWisdom}%</div>
              <div className="text-sm text-muted-foreground">7-Gen Wisdom</div>
            </div>
            
            <div className="text-center space-y-2">
              <Sparkles className="w-8 h-8 mx-auto text-accent" />
              <div className="text-2xl font-bold text-accent">{simulationResults.ethicalAlignment}%</div>
              <div className="text-sm text-muted-foreground">Ethical Alignment</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Recommended Integrations:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {simulationResults.recommendations.map((rec: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary-glow biosignal-pulse" />
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Ethical Archives */}
      <div className="aegis-card">
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          📚 Ethical Archives - Universal Wisdom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ethicalSources.map((source, index) => (
            <div key={index} className="p-4 bg-muted/20 rounded-lg transition-earth hover:bg-muted/40">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{source.icon}</span>
                <div>
                  <h3 className="font-semibold">{source.name}</h3>
                  <p className="text-xs text-muted-foreground">{source.tradition}</p>
                </div>
              </div>
              <p className="text-sm italic text-foreground">"{source.wisdom}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground italic">
          "Every simulation carries the dreams of a billion ancestors and the hopes of a billion descendants."
        </p>
      </div>
    </div>
  );
};

export default EthicsAI;