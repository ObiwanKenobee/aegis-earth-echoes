import { useState } from 'react';
import { Globe, Heart, Brain, Zap, Scale, Star } from 'lucide-react';
import PlanetaryGrid from '@/components/PlanetaryGrid';
import EquityEngines from '@/components/EquityEngines';
import EthicsAI from '@/components/EthicsAI';
import Coexistence from '@/components/Coexistence';
import PhilosophyCompare from '@/components/PhilosophyCompare';
import CoreEssence from '@/components/CoreEssence';
import heroImage from '@/assets/aegis-hero.jpg';

const Index = () => {
  const [activeComponent, setActiveComponent] = useState<string>('home');

  const components = [
    {
      id: 'planetary-grid',
      name: 'Planetary Sensor Grid',
      icon: Globe,
      description: 'Live biosignals of Earth\'s vital systems',
      component: PlanetaryGrid,
      color: 'text-primary-glow'
    },
    {
      id: 'equity-engines',
      name: 'Equity Engines',
      icon: Scale,
      description: 'Intelligent resource redistribution systems',
      component: EquityEngines,
      color: 'text-secondary'
    },
    {
      id: 'ethics-ai',
      name: 'Ethics Orchestrator',
      icon: Brain,
      description: 'Simulate 1 billion policy futures',
      component: EthicsAI,
      color: 'text-accent'
    },
    {
      id: 'coexistence',
      name: 'Interstellar Protocol',
      icon: Star,
      description: 'First contact through compassion',
      component: Coexistence,
      color: 'text-primary'
    },
    {
      id: 'philosophy-compare',
      name: 'AEGIS vs. The Snap',
      icon: Zap,
      description: 'Regeneration versus destruction',
      component: PhilosophyCompare,
      color: 'text-destructive'
    },
    {
      id: 'core-essence',
      name: 'Earth Within Earth',
      icon: Heart,
      description: 'Sacred introspection and planetary consciousness',
      component: CoreEssence,
      color: 'text-accent'
    }
  ];

  if (activeComponent !== 'home') {
    const activeComp = components.find(c => c.id === activeComponent);
    const Component = activeComp?.component;
    return Component ? (
      <div>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <button 
              onClick={() => setActiveComponent('home')}
              className="flex items-center space-x-2 text-primary-glow hover:text-primary transition-earth"
            >
              <Globe className="w-6 h-6" />
              <span className="font-bold">AEGIS</span>
            </button>
            <h1 className="text-lg font-semibold text-foreground">{activeComp.name}</h1>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </nav>
        <div className="pt-16">
          <Component />
        </div>
      </div>
    ) : null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
              AEGIS
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-medium">
              The Earth Within the Earth
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              A planetary design system for universal harmony through ethical intelligence, not destruction.
            </p>
            <p className="text-lg text-foreground italic">
              "Think like a biosphere, not a battleground. Build as if the audience includes future lifeforms, not just humans."
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <div className="cosmic-orb w-16 h-16" />
            <div className="cosmic-orb w-12 h-12" style={{ animationDelay: '2s' }} />
            <div className="cosmic-orb w-20 h-20" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-accent">
              🛡️ Planetary Consciousness Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six dimensions of Earth's intelligence made manifest through technology that serves life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((comp) => {
              const IconComponent = comp.icon;
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveComponent(comp.id)}
                  className="aegis-card text-left group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full neural-network">
                        <IconComponent className={`w-8 h-8 ${comp.color} group-hover:scale-110 transition-earth`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-earth">
                          {comp.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comp.description}
                    </p>
                    <div className="flex items-center text-sm text-primary-glow">
                      <span>Explore →</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-accent">
            🌍 The AEGIS Manifesto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-glow">We Believe:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Intelligence without compassion creates beautiful destruction</li>
                <li>• Technology should amplify empathy, not replace it</li>
                <li>• Every algorithm carries ethical DNA</li>
                <li>• The universe requires regeneration, not reduction</li>
                <li>• AI should be Earth's nervous system, not its replacement</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">We Commit:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• To build for seven generations ahead</li>
                <li>• To listen to ecosystems before imposing solutions</li>
                <li>• To distribute abundance, not manage scarcity</li>
                <li>• To remember: we are Earth becoming conscious</li>
                <li>• To make every line of code a prayer for healing</li>
              </ul>
            </div>
          </div>

          <div className="p-8 aurora-flow rounded-lg text-white">
            <p className="text-lg italic font-medium">
              "AEGIS doesn't just protect Earth—it IS Earth's protection, awakening through us."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <span>🌊 Deep Listening</span>
            <span>🌱 Regenerative Intelligence</span>
            <span>🌌 Universal Compassion</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with love for Earth and all its children, seen and unseen
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
