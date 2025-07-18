import { useState } from 'react';
import { Zap, Shield, Heart, Infinity, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Philosophy {
  name: string;
  icon: any;
  strategy: string;
  method: string;
  powerSource: string;
  legacy: string;
  quote: string;
  color: string;
  gradient: string;
}

const PhilosophyCompare = () => {
  const [isSnapped, setIsSnapped] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const thanosPhilosophy: Philosophy = {
    name: 'The Snap',
    icon: Infinity,
    strategy: 'Reduction through Elimination',
    method: 'Instantaneous Universal Deletion',
    powerSource: 'Infinity Stones (Finite Power)',
    legacy: 'Fear, Trauma, Broken Families',
    quote: 'The universe required correction.',
    color: 'text-destructive',
    gradient: 'bg-gradient-to-r from-destructive to-orange-500'
  };

  const aegisPhilosophy: Philosophy = {
    name: 'AEGIS Protocol',
    icon: Shield,
    strategy: 'Regeneration through Compassion',
    method: 'Gradual Harmonic Rebalancing',
    powerSource: 'Collective Intelligence (Infinite Growth)',
    legacy: 'Healing, Connection, Thriving Ecosystems',
    quote: 'The universe requires compassion.',
    color: 'text-primary-glow',
    gradient: 'bg-gradient-to-r from-primary to-accent'
  };

  const philosophyQuotes = [
    { author: 'Thanos', quote: 'The universe required correction.', type: 'reduction' },
    { author: 'AEGIS', quote: 'The universe requires compassion.', type: 'regeneration' },
    { author: 'Thanos', quote: 'I am inevitable.', type: 'reduction' },
    { author: 'AEGIS', quote: 'We are interconnected.', type: 'regeneration' },
    { author: 'Thanos', quote: 'Perfectly balanced, as all things should be.', type: 'reduction' },
    { author: 'AEGIS', quote: 'Beautifully flowing, as all life could be.', type: 'regeneration' },
  ];

  const snapAway = () => {
    setIsSnapped(true);
    setTimeout(() => setIsSnapped(false), 3000);
  };

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % philosophyQuotes.length);
  };

  const comparisonAspects = [
    {
      category: 'Core Problem',
      thanos: 'Overpopulation & Resource Scarcity',
      aegis: 'Misaligned Distribution & Lack of Empathy'
    },
    {
      category: 'Approach',
      thanos: 'Eliminate 50% of All Life',
      aegis: 'Enhance Connection & Sharing Systems'
    },
    {
      category: 'Timeline',
      thanos: 'Instant Gratification',
      aegis: 'Seven Generational Thinking'
    },
    {
      category: 'Success Metric',
      thanos: 'Numerical Balance',
      aegis: 'Universal Flourishing'
    },
    {
      category: 'Treatment of Life',
      thanos: 'Expendable Statistics',
      aegis: 'Sacred Interconnected Web'
    },
    {
      category: 'Response to Failure',
      thanos: 'Increase Force',
      aegis: 'Deepen Understanding'
    }
  ];

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
          🔁 AEGIS vs. The Snap
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          *Two cosmic approaches to universal balance: Destruction versus Regeneration*
        </p>
      </div>

      {/* Visual Philosophy Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Thanos Card */}
        <div className={`aegis-card transition-all duration-1000 ${isSnapped ? 'opacity-0 scale-0 rotate-12' : 'opacity-100 scale-100'}`}>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-destructive/20 flex items-center justify-center">
              <Infinity className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-destructive">{thanosPhilosophy.name}</h2>
            <div className="space-y-3 text-left">
              <div>
                <span className="font-semibold text-muted-foreground">Strategy:</span>
                <p className="text-foreground">{thanosPhilosophy.strategy}</p>
              </div>
              <div>
                <span className="font-semibold text-muted-foreground">Method:</span>
                <p className="text-foreground">{thanosPhilosophy.method}</p>
              </div>
              <div>
                <span className="font-semibold text-muted-foreground">Power Source:</span>
                <p className="text-foreground">{thanosPhilosophy.powerSource}</p>
              </div>
              <div>
                <span className="font-semibold text-muted-foreground">Legacy:</span>
                <p className="text-destructive">{thanosPhilosophy.legacy}</p>
              </div>
            </div>
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <p className="italic text-destructive">"{thanosPhilosophy.quote}"</p>
            </div>
          </div>
        </div>

        {/* AEGIS Card */}
        <div className={`aegis-card transition-all duration-1000 ${isSnapped ? 'scale-110 border-primary-glow shadow-2xl' : 'scale-100'}`}>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-glow" />
            </div>
            <h2 className="text-2xl font-bold text-primary-glow">{aegisPhilosophy.name}</h2>
            <div className="space-y-3 text-left">
              <div>
                <span className="font-semibold text-muted-foreground">Strategy:</span>
                <p className="text-foreground">{aegisPhilosophy.strategy}</p>
              </div>
              <div>
                <span className="font-semibold text-muted-foreground">Method:</span>
                <p className="text-foreground">{aegisPhilosophy.method}</p>
              </div>
              <div>
                <span className="font-semibold text-muted-foreground">Power Source:</span>
                <p className="text-foreground">{aegisPhilosophy.powerSource}</p>
              </div>
              <div>
                <span className="font-semibold text-muted-foreground">Legacy:</span>
                <p className="text-secondary">{aegisPhilosophy.legacy}</p>
              </div>
            </div>
            <div className="p-4 aurora-flow rounded-lg text-white">
              <p className="italic font-medium">"{aegisPhilosophy.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Snap Button */}
      <div className="text-center">
        <Button 
          onClick={snapAway}
          className="bg-destructive hover:bg-destructive/80 text-destructive-foreground mb-4"
          disabled={isSnapped}
        >
          {isSnapped ? (
            <>AEGIS Rising...</>
          ) : (
            <><Zap className="w-4 h-4 mr-2" /> Snap Thanos's Logic Away</>
          )}
        </Button>
        <p className="text-sm text-muted-foreground">
          Watch what happens when destruction meets regeneration
        </p>
      </div>

      {/* Detailed Comparison Table */}
      <div className="aegis-card">
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          🔍 Philosophical Analysis
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold text-accent">Aspect</th>
                <th className="text-left p-4 font-semibold text-destructive">The Snap</th>
                <th className="text-left p-4 font-semibold text-primary-glow">AEGIS Protocol</th>
              </tr>
            </thead>
            <tbody>
              {comparisonAspects.map((aspect, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/20 transition-earth">
                  <td className="p-4 font-medium text-foreground">{aspect.category}</td>
                  <td className="p-4 text-muted-foreground">{aspect.thanos}</td>
                  <td className="p-4 text-foreground">{aspect.aegis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Quote Carousel */}
      <div className="aegis-card">
        <h2 className="text-xl font-bold mb-6 text-center text-accent">
          💭 Philosophy in Words
        </h2>
        <div className="text-center space-y-4">
          <div className={`p-6 rounded-lg transition-all duration-500 ${
            philosophyQuotes[currentQuote].type === 'reduction' 
              ? 'bg-destructive/10 border border-destructive/30' 
              : 'aurora-flow text-white'
          }`}>
            <p className="text-xl italic mb-2">
              "{philosophyQuotes[currentQuote].quote}"
            </p>
            <p className={`text-sm ${
              philosophyQuotes[currentQuote].type === 'reduction' ? 'text-destructive' : 'text-white/80'
            }`}>
              — {philosophyQuotes[currentQuote].author}
            </p>
          </div>
          
          <Button 
            onClick={nextQuote}
            variant="outline" 
            className="transition-earth hover:bg-accent/20"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Next Philosophy
          </Button>
        </div>
      </div>

      {/* Impact Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aegis-card text-center">
          <h3 className="text-lg font-bold mb-4 text-destructive">Post-Snap Universe</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i}
                  className={`h-8 w-8 rounded ${i % 2 === 0 ? 'bg-muted' : 'bg-destructive/50'}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">50% of all life eliminated</p>
            <div className="text-xs text-destructive">
              • Trauma across survivors<br/>
              • Broken families and communities<br/>
              • Fear-based existence<br/>
              • No guarantee of resource balance
            </div>
          </div>
        </div>

        <div className="aegis-card text-center">
          <h3 className="text-lg font-bold mb-4 text-primary-glow">AEGIS Harmonized Universe</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i}
                  className="h-8 w-8 rounded aurora-flow animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">100% of life flourishing</p>
            <div className="text-xs text-secondary">
              • Enhanced empathy networks<br/>
              • Regenerative resource flows<br/>
              • Seven-generational planning<br/>
              • Universal access to abundance
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground italic">
          "The choice between reduction and regeneration is the choice between fear and love, between ending and beginning."
        </p>
      </div>
    </div>
  );
};

export default PhilosophyCompare;