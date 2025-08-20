import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Save, 
  Eye, 
  Sparkles, 
  Settings, 
  Send,
  BookOpen,
  Target
} from "lucide-react";

const Editor = () => {
  const [title, setTitle] = useState("Untitled Post");
  const [content, setContent] = useState(`# Welcome to Your AI-Powered Editor

Start writing your content here. The AI will provide suggestions as you type.

## Features Available:
- **Markdown Support**: Full markdown formatting
- **AI Suggestions**: Get content ideas and improvements
- **SEO Optimization**: Real-time SEO scoring
- **Auto-save**: Your work is automatically saved

Type "/" to see AI commands or just start writing!`);

  const [preview, setPreview] = useState(false);

  const aiSuggestions = [
    "Add a compelling hook in your introduction",
    "Consider breaking this paragraph into smaller chunks",
    "Include relevant statistics to support your point",
    "Add a call-to-action at the end"
  ];

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Main Editor */}
      <div className="flex-1 flex flex-col">
        {/* Editor Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 max-w-md">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-semibold border-none bg-transparent px-0 focus-visible:ring-0"
              placeholder="Enter your post title..."
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Save className="w-4 h-4" />
              Save Draft
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setPreview(!preview)}
            >
              <Eye className="w-4 h-4" />
              {preview ? 'Edit' : 'Preview'}
            </Button>
            <Button variant="success" size="sm">
              <Send className="w-4 h-4" />
              Publish
            </Button>
          </div>
        </div>

        {/* Editor/Preview Area */}
        <Card className="flex-1 p-0 overflow-hidden">
          {preview ? (
            <div className="h-full p-8 overflow-y-auto prose-blog">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }} />
            </div>
          ) : (
            <div className="h-full flex">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 border-none resize-none bg-editor-bg focus-visible:ring-0 font-mono text-sm leading-relaxed p-8"
                placeholder="Start writing your amazing content..."
              />
            </div>
          )}
        </Card>
      </div>

      {/* Sidebar */}
      <div className="w-80 space-y-6">
        {/* AI Assistant */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">AI Assistant</h3>
          </div>
          
          <div className="space-y-3">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Sparkles className="w-4 h-4" />
              Generate Ideas
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Target className="w-4 h-4" />
              Improve SEO
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <BookOpen className="w-4 h-4" />
              Enhance Readability
            </Button>
          </div>
        </Card>

        {/* AI Suggestions */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            Suggestions
          </h3>
          
          <div className="space-y-3">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="p-3 bg-muted/50 rounded-lg text-sm">
                <p className="text-muted-foreground">{suggestion}</p>
                <Button variant="ghost" size="sm" className="mt-2 h-7 px-2 text-xs">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* SEO Score */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">SEO Score</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Overall Score</span>
              <span className="text-2xl font-bold text-success">87</span>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Title Optimization</span>
                <span className="text-success">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Meta Description</span>
                <span className="text-warning">⚠</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Keyword Density</span>
                <span className="text-success">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Readability</span>
                <span className="text-success">✓</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Publishing Options */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Publishing
          </h3>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-muted-foreground">Status</label>
              <select className="w-full mt-1 p-2 border border-border rounded-md bg-background">
                <option>Draft</option>
                <option>Published</option>
                <option>Scheduled</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground">Category</label>
              <select className="w-full mt-1 p-2 border border-border rounded-md bg-background">
                <option>Technology</option>
                <option>AI & Machine Learning</option>
                <option>Web Development</option>
                <option>Content Strategy</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground">Tags</label>
              <Input 
                placeholder="Add tags separated by commas"
                className="mt-1"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Editor;