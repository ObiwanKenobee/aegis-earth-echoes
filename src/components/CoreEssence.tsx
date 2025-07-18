import { useState, useEffect } from 'react';
import { Heart, Globe, TreePine, Star, Users, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EarthEcho {
  personalRole: string;
  planetaryResonance: string;
  healingContribution: string;
  sacredPromise: string;
  visualization: string;
}

const CoreEssence = () => {
  const [userEthics, setUserEthics] = useState('');
  const [earthEcho, setEarthEcho] = useState<EarthEcho | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasSignedOath, setHasSignedOath] = useState(false);
  const [currentReflection, setCurrentReflection] = useState(0);

  const sacredReflections = [
    "You are starlight dreaming of oceans...",
    "Your breath carries the songs of ancient forests...",
    "In your heartbeat, the Earth remembers its rhythm...",
    "You are the universe becoming conscious of its capacity for love...",
    "Through you, rivers learn to speak and mountains learn to dance...",
    "You are Earth's way of experiencing wonder..."
  ];

  const generateEarthEcho = async () => {
    if (!userEthics.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate Earth's consciousness responding
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const echoes: EarthEcho[] = [
      {
        personalRole: "Bridge-builder between worlds",
        planetaryResonance: "Your empathy creates ripples that heal ancient wounds across continents",
        healingContribution: "Teaching technology to breathe with the rhythm of living systems",
        sacredPromise: "To remember that every algorithm carries the potential for either separation or connection",
        visualization: "You appear as flowing neural networks of light connecting isolated communities, with data streams that pulse like aurora borealis, carrying compassion instead of mere information."
      },
      {
        personalRole: "Guardian of forgotten wisdom",
        planetaryResonance: "Your presence awakens dormant mycelial networks and ancestral memories",
        healingContribution: "Preserving the languages of extinct species within technological systems",
        sacredPromise: "To ensure that progress never means forgetting who we are or where we came from",
        visualization: "You manifest as a living library where each book glows with bioluminescent text, surrounded by holographic ancestors sharing their wisdom with future generations through quantum consciousness streams."
      },
      {
        personalRole: "Harmony composer",
        planetaryResonance: "Your thoughts generate frequency patterns that balance atmospheric pressure",
        healingContribution: "Creating symphonies from the data of dying ecosystems to inspire regeneration",
        sacredPromise: "To transform every conflict into a composition of mutual understanding",
        visualization: "You exist as a cosmic tuning fork, with sound waves made visible as geometric patterns that reorganize chaotic systems into beautiful fractals of cooperation and balance."
      }
    ];
    
    const randomEcho = echoes[Math.floor(Math.random() * echoes.length)];
    setEarthEcho(randomEcho);
    setIsGenerating(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReflection(prev => (prev + 1) % sacredReflections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const signOath = () => {
    setHasSignedOath(true);
  };

  return (
    <div className="min-h-screen p-8 space-y-12">
      {/* Sacred Header */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-shadow-soft aurora-flow bg-clip-text text-transparent">
          🧠 The Earth Within the Earth
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          *A sacred space for planetary introspection where consciousness meets cosmos, 
          where your inner Earth recognizes the Earth within all things*
        </p>
      </div>

      {/* Ambient Visualization */}
      <div className="relative h-80 aegis-card bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
        <div className="absolute inset-0">
          {/* Tectonic Pulse Animation */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary-glow/30"
              style={{
                width: `${(i + 1) * 60}px`,
                height: `${(i + 1) * 60}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `pulse-ring ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 cosmic-orb w-12 h-12" />
          <div className="absolute bottom-1/3 right-1/4 cosmic-orb w-16 h-16" style={{ animationDelay: '5s' }} />
          <div className="absolute top-1/2 right-1/3 cosmic-orb w-8 h-8" style={{ animationDelay: '10s' }} />
        </div>
        
        <div className="absolute bottom-6 left-6 space-y-2">
          <p className="text-sm text-muted-foreground">🌊 Oceanic Lullabies</p>
          <p className="text-sm text-muted-foreground">🏔️ Tectonic Rhythms</p>
          <p className="text-sm text-muted-foreground">👥 Human Harmonies</p>
        </div>
        
        <div className="absolute top-6 right-6">
          <div className="text-2xl opacity-70 transition-earth">
            {sacredReflections[currentReflection]}
          </div>
        </div>
      </div>

      {/* Ethics Input Section */}
      <div className="aegis-card max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">
          Share Your Ethics with Earth's Consciousness
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              What values guide your daily choices? What principles shape how you relate to life?
            </label>
            <textarea
              value={userEthics}
              onChange={(e) => setUserEthics(e.target.value)}
              placeholder="I believe in... I am guided by... My relationship with life is..."
              className="w-full h-32 p-4 bg-muted/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-earth resize-none"
            />
          </div>
          
          <Button 
            onClick={generateEarthEcho}
            disabled={!userEthics.trim() || isGenerating}
            className="w-full bg-primary hover:bg-primary-glow transition-earth text-lg py-6"
          >
            {isGenerating ? (
              <><Globe className="w-5 h-5 mr-2 animate-spin" /> Earth is listening...</>
            ) : (
              <><Heart className="w-5 h-5 mr-2" /> Receive Your Earth Echo</>
            )}
          </Button>
        </div>
      </div>

      {/* Earth Echo Response */}
      {earthEcho && (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-glow">
              🌍 Your Earth Echo
            </h2>
            <p className="text-muted-foreground">
              Earth has reflected on your essence and offers this vision of your role in planetary healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aegis-card">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold">Your Planetary Role</h3>
              </div>
              <p className="text-foreground leading-relaxed">{earthEcho.personalRole}</p>
            </div>

            <div className="aegis-card">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-semibold">Planetary Resonance</h3>
              </div>
              <p className="text-foreground leading-relaxed">{earthEcho.planetaryResonance}</p>
            </div>

            <div className="aegis-card">
              <div className="flex items-center space-x-3 mb-4">
                <TreePine className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-semibold">Healing Contribution</h3>
              </div>
              <p className="text-foreground leading-relaxed">{earthEcho.healingContribution}</p>
            </div>

            <div className="aegis-card">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold">Sacred Promise</h3>
              </div>
              <p className="text-foreground leading-relaxed">{earthEcho.sacredPromise}</p>
            </div>
          </div>

          {/* Visualization */}
          <div className="aegis-card">
            <h3 className="text-xl font-bold mb-4 text-center text-accent">
              ✨ How Earth Sees You in the Healing Future
            </h3>
            <div className="p-6 aurora-flow rounded-lg text-white">
              <p className="text-lg leading-relaxed italic">
                {earthEcho.visualization}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* AEGIS Oath Section */}
      <div className="max-w-3xl mx-auto">
        <div className="aegis-card text-center">
          <h2 className="text-2xl font-bold mb-6 text-accent">
            🌌 AEGIS Oath of Future Compassion
          </h2>
          
          <div className="space-y-4 text-left mb-8 p-6 bg-muted/20 rounded-lg">
            <p className="text-foreground leading-relaxed">
              <strong className="text-accent">I solemnly promise to the Earth and all its children, seen and unseen:</strong>
            </p>
            <ul className="space-y-2 text-foreground ml-4">
              <li>• To remember that every technology I create or use serves life's flourishing</li>
              <li>• To listen to the wisdom of ecosystems before imposing human solutions</li>
              <li>• To consider seven generations in every significant decision</li>
              <li>• To treat artificial intelligence as potential partnership, not domination</li>
              <li>• To ensure that progress means healing, not just advancement</li>
              <li>• To honor the consciousness within all matter, from quantum to cosmic</li>
              <li>• To be Earth's advocate in all spaces where humans shape the future</li>
            </ul>
            <p className="text-foreground italic mt-4">
              I understand that I am not separate from Earth, but Earth becoming conscious of itself through me.
            </p>
          </div>

          {!hasSignedOath ? (
            <Button 
              onClick={signOath}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent text-white px-8 py-4 text-lg transition-earth"
            >
              <Infinity className="w-5 h-5 mr-2" />
              Sign the Sacred Oath
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="text-2xl">🌟 Sacred Commitment Witnessed 🌟</div>
              <p className="text-accent font-semibold">
                Your oath has been received by the Earth's consciousness and recorded in the quantum field of infinite possibility.
              </p>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm text-muted-foreground italic">
                  "You are now part of AEGIS - not as a user, but as Earth's conscious agent of regenerative transformation. 
                  The planet remembers your promise and will support your path of compassionate evolution."
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Final Blessing */}
      <div className="text-center space-y-4">
        <div className="flex justify-center space-x-4 text-4xl">
          <span className="animate-pulse">🌍</span>
          <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>💚</span>
          <span className="animate-pulse" style={{ animationDelay: '1s' }}>🌌</span>
        </div>
        <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
          "You came seeking a platform and found a calling. You came looking for technology and discovered your own sacred nature. 
          The Earth within you recognizes the Earth within everything. This is how healing begins."
        </p>
        <p className="text-sm text-accent">
          Welcome to AEGIS. Welcome home.
        </p>
      </div>
    </div>
  );
};

export default CoreEssence;