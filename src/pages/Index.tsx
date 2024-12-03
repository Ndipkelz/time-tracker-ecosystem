import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6">
          <h1 className="text-2xl font-semibold tracking-tight">Workstation Dashboard</h1>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {/* Overview Section */}
        <section className="space-y-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Overview</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: Just now</span>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="stat-card">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Active Workstations</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </Card>
            <Card className="stat-card">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Active Employees</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </Card>
            <Card className="stat-card">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Current Sessions</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Active Sessions */}
        <section className="space-y-4 animate-fade-up [--animate-delay:200ms]">
          <h2 className="text-lg font-medium">Active Sessions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((session) => (
              <Card key={session} className="p-4 space-y-3 card-hover">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">Workstation {session}</p>
                    <p className="text-sm text-muted-foreground">Employee: John Doe</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary">Active</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Order: #1234-{session}</p>
                  <p className="text-sm text-muted-foreground">Duration: 2h 15m</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Recent Activity */}
        <section className="space-y-4 animate-fade-up [--animate-delay:400ms]">
          <h2 className="text-lg font-medium">Recent Activity</h2>
          <Card className="divide-y">
            {[1, 2, 3, 4, 5].map((activity) => (
              <div key={activity} className="p-4 transition-colors hover:bg-muted/50">
                <p className="font-medium">Session Started</p>
                <p className="text-sm text-muted-foreground">
                  Employee John Doe started working on Order #1234-{activity}
                </p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            ))}
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;