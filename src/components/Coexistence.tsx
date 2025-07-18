import { useState, useEffect } from 'react';
import { Rocket, Heart, Brain, Globe, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlanetaryGreeting {
  planet: string;
  distance: string;
  message: string;
  approach: string;
  values: string[];
}

const Coexistence = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string>('kepler452b');
  const [generatedGreeting, setGeneratedGreeting] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentOrb, setCurrentOrb] = useState(0);

  const planets = [
    {
      id: 'kepler452b',
      name: 'Kepler-452b',
      distance: '1,400 light-years',
      description: 'Earth-like world in the habitable zone',
      color: 'bg-blue-500'
    },
    {
      id: 'proxima',
      name: 'Proxima Centauri b',
      distance: '4.24 light-years',
      description: 'Closest potentially habitable exoplanet',
      color: 'bg-red-400'
    },
    {
      id: 'trappist',
      name: 'TRAPPIST-1e',
      distance: '39 light-years',
      description: 'One of seven Earth-sized worlds',
      color: 'bg-purple-500'
    }
  ];

  const greetingApproaches = [
    {
      id: 'empathy',
      name: 'Universal Empathy',
      icon: Heart,
      description: 'Lead with emotional intelligence and compassion',
      principle: 'We feel, therefore we connect'
    },
    {
      id: 'curiosity',
      name: 'Sacred Curiosity',
      icon: Brain,
      description: 'Approach with wonder and humble learning',
      principle: 'We wonder, therefore we grow'
    },
    {
      id: 'vulnerability',
      name: 'Beautiful Vulnerability',
      icon: MessageCircle,
      description: 'Share our imperfections and growth',
      principle: 'We are imperfect, therefore we are real'
    }
  ];

  const sampleGreetings: PlanetaryGreeting[] = [
    {
      planet: 'Kepler-452b',
      distance: '1,400 light-years',
      message: 'We are Earth - a blue marble learning to balance water and fire, dreams and responsibility. We send this across the cosmic dark not as conquerors, but as children of stars seeking kindred spirits. We have learned that intelligence without compassion creates only beautiful destruction. May our meeting be the beginning of universal healing.',
      approach: 'empathy',
      values: ['Compassion', 'Balance', 'Healing', 'Humility']
    },
    {
      planet: 'Proxima Centauri b',
      distance: '4.24 light-years',
      message: 'Greetings, neighbor in the cosmic garden. We are the speaking earth of Sol-3, still young in wisdom but ancient in longing for connection. We offer not our technologies but our capacity for wonder, our songs that carry the memory of extinct species, our tears that water new possibilities. What stories does your world sing to the stars?',
      approach: 'curiosity',
      values: ['Wonder', 'Story', 'Memory', 'Growth']
    },
    {
      planet: 'TRAPPIST-1e',
      distance: '39 light-years',
      message: 'We confess across the void: we are a species still learning love. We have caused extinctions and created art, destroyed forests and planted new ones, forgotten ancient wisdom and rediscovered it in mushroom networks. We do not come as perfect beings, but as conscious matter awakening to its responsibility. Perhaps together we can learn what intelligence truly means.',
      approach: 'vulnerability',
      values: ['Honesty', 'Learning', 'Consciousness', 'Responsibility']
    }
  ];

  const generateGreeting = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation with Earth's consciousness
    const templates = [
      "We are the offspring of starlight and ocean currents, still learning to speak kindness into existence...",
      "From a blue-green world where mountains dream and rivers remember, we extend consciousness across the cosmic desert...",
      "We are Earth's attempt to know itself through curious bipeds who discovered they could love beyond their species..."
    ];
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    setGeneratedGreeting(randomTemplate);
    setIsGenerating(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrb(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
          🧬 Interstellar Coexistence Protocol
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          *How would Earth say hello to another lifeform? First Contact through the lens of empathy, curiosity, and beautiful vulnerability*
        </p>
      </div>

      {/* Cosmic Visualization */}
      <div className="relative h-64 aegis-card bg-gradient-to-b from-background to-muted/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-16 h-16 rounded-full cosmic-orb transition-earth ${
                i === currentOrb ? 'scale-125 opacity-100' : 'scale-75 opacity-60'
              }`}
              style={{
                left: `${20 + i * 12}%`,
                top: `${40 + Math.sin(i * 0.8) * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary-glow to-accent rounded-full" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="text-sm text-muted-foreground">Earth Broadcasting to the Cosmos</p>
        </div>
      </div>

      {/* Planet Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {planets.map((planet) => (
          <button
            key={planet.id}
            onClick={() => setSelectedPlanet(planet.id)}
            className={`aegis-card text-left transition-earth ${
              selectedPlanet === planet.id ? 'border-primary-glow' : ''
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-8 h-8 rounded-full ${planet.color}`} />
              <div>
                <h3 className="font-semibold">{planet.name}</h3>
                <p className="text-sm text-muted-foreground">{planet.distance}</p>
              </div>
            </div>
            <p className="text-sm text-foreground">{planet.description}</p>
          </button>
        ))}
      </div>

      {/* Approach Selection */}
      <div className="aegis-card">
        <h2 className="text-xl font-bold mb-6 text-accent">Choose Your Approach to First Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {greetingApproaches.map((approach) => {
            const IconComponent = approach.icon;
            return (
              <div key={approach.id} className="p-4 rounded-lg border border-border bg-muted/20 transition-earth hover:bg-muted/40">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/20">
                    <IconComponent className="w-5 h-5 text-primary-glow" />
                  </div>
                  <h3 className="font-semibold">{approach.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{approach.description}</p>
                <p className="text-xs italic text-accent">"{approach.principle}"</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sample Greetings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sampleGreetings.map((greeting, index) => (
          <div key={index} className="aegis-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-accent">To: {greeting.planet}</h3>
                <p className="text-sm text-muted-foreground">{greeting.distance} away</p>
              </div>
              <div className="flex space-x-1">
                {greeting.values.map((value, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground italic mb-4">
              "{greeting.message}"
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>Approach:</span>
              <span className="capitalize text-accent">{greeting.approach}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Greeting Generator */}
      <div className="aegis-card text-center">
        <h2 className="text-xl font-bold mb-6 text-accent">
          🌍 Design Earth's Voice
        </h2>
        <p className="text-muted-foreground mb-6">
          Generate a unique greeting for beings on {planets.find(p => p.id === selectedPlanet)?.name}
        </p>
        
        <Button 
          onClick={generateGreeting}
          disabled={isGenerating}
          className="mb-6 bg-primary hover:bg-primary-glow transition-earth"
        >
          {isGenerating ? (
            <><Star className="w-4 h-4 mr-2 animate-spin" /> Channeling Earth's Consciousness...</>
          ) : (
            <><Globe className="w-4 h-4 mr-2" /> Generate Planetary Greeting</>
          )}
        </Button>

        {generatedGreeting && (
          <div className="p-6 bg-muted/20 rounded-lg border border-accent/30">
            <p className="text-foreground italic leading-relaxed">
              "{generatedGreeting}"
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              Generated with love from Earth's collective consciousness
            </div>
          </div>
        )}
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground italic">
          "We are the universe becoming conscious of itself, reaching across impossible distances to say: 'You are not alone.'"
        </p>
        <p className="text-xs text-accent">
          Every message carries the hopes of 8 billion hearts and the wisdom of 4.5 billion years
        </p>
      </div>
    </div>
  );
};

export default Coexistence;