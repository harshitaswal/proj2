import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Eye, 
  Users, 
  PenTool,
  ArrowUpRight,
  Calendar,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Views",
      value: "12,847",
      change: "+12.5%",
      icon: Eye,
      color: "text-info"
    },
    {
      title: "Subscribers",
      value: "2,394", 
      change: "+8.3%",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Published Posts",
      value: "47",
      change: "+3",
      icon: PenTool,
      color: "text-primary"
    },
    {
      title: "Engagement Rate",
      value: "4.2%",
      change: "+0.8%", 
      icon: TrendingUp,
      color: "text-accent"
    }
  ];

  const recentPosts = [
    {
      title: "Building AI-Powered Content Strategies",
      status: "Published",
      views: 1247,
      date: "2 hours ago"
    },
    {
      title: "The Future of Automated Blogging",
      status: "Draft",
      views: 0,
      date: "1 day ago"
    },
    {
      title: "SEO Best Practices for 2024",
      status: "Published", 
      views: 856,
      date: "3 days ago"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your blog.
          </p>
        </div>
        <Button variant="hero" size="lg">
          <PenTool className="w-5 h-5" />
          Write New Post
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6 bg-gradient-card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-4 h-4 text-success" />
                    <span className="text-sm text-success font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Recent Posts</h2>
            <Button variant="ghost" size="sm">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{post.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      post.status === 'Published' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-warning/10 text-warning'
                    }`}>
                      {post.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insights */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">AI Insights</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-info/10 border border-info/20">
              <h3 className="font-medium text-info mb-2">Content Suggestion</h3>
              <p className="text-sm text-muted-foreground">
                Based on trending topics, consider writing about "AI Ethics in Content Creation"
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <h3 className="font-medium text-success mb-2">SEO Opportunity</h3>
              <p className="text-sm text-muted-foreground">
                Your recent post could rank higher with improved meta descriptions
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h3 className="font-medium text-warning mb-2">Engagement Tip</h3>
              <p className="text-sm text-muted-foreground">
                Posts published on Tuesday at 10 AM get 23% more engagement
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;