import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  PenTool, 
  Sparkles, 
  BarChart3, 
  Target, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-blog.jpg";

const Index = () => {
  const features = [
    {
      icon: PenTool,
      title: "Smart Editor",
      description: "Write with AI assistance and real-time suggestions"
    },
    {
      icon: Sparkles,
      title: "AI Content Generation",
      description: "Generate ideas, improve content, and optimize for SEO"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard", 
      description: "Track performance with detailed insights and metrics"
    },
    {
      icon: Target,
      title: "SEO Optimization",
      description: "Built-in SEO tools to maximize your content's reach"
    }
  ];

  const benefits = [
    "AI-powered content suggestions",
    "Real-time SEO optimization",
    "Advanced analytics and insights",
    "Seamless publishing workflow",
    "Multi-platform distribution",
    "Monetization features"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">BlogAI</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/editor">
                <Button variant="hero">
                  Start Writing
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  AI-Powered
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Blogging </span>
                  Platform
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Create, optimize, and publish content with the power of artificial intelligence. 
                  Transform your ideas into engaging blog posts that rank higher and convert better.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/editor">
                  <Button variant="hero" size="hero" className="w-full sm:w-auto">
                    <PenTool className="w-5 h-5" />
                    Start Writing Free
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="hero" className="w-full sm:w-auto">
                    <BarChart3 className="w-5 h-5" />
                    View Dashboard
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>10,000+ Writers</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>2M+ Posts Created</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="AI-Powered Blogging Platform Interface"
                className="relative z-10 w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Create Amazing Content
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides all the tools you need to write, optimize, and publish content that engages your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose BlogAI?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of content creators who are already using AI to supercharge their blogging workflow.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Increase Traffic</h3>
                    <p className="text-sm text-muted-foreground">Up to 300% more organic traffic</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Save Time</h3>
                    <p className="text-sm text-muted-foreground">Write content 5x faster with AI</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Better SEO</h3>
                    <p className="text-sm text-muted-foreground">Rank higher on search engines</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of writers who are already creating better content with AI assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/editor">
              <Button variant="hero" size="hero" className="w-full sm:w-auto">
                <PenTool className="w-5 h-5" />
                Start Writing Now
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="hero" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-muted-foreground">BlogAI - AI-Powered Content Creation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
