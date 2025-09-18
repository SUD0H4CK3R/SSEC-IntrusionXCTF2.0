import { Clock, Users, Trophy, Coffee } from "lucide-react";

const Schedule = () => {
  const scheduleItems = [
    {
      time: "08:00 - 09:00",
      title: "Registration & Check-in",
      description: "Team registration, ID verification, and welcome briefing",
      icon: Users,
      type: "registration"
    },
    {
      time: "09:00 - 09:30", 
      title: "Opening Ceremony",
      description: "Welcome address, rules explanation, and team introductions",
      icon: Clock,
      type: "ceremony"
    },
    {
      time: "09:30 - 13:00",
      title: "Round 1: Qualification",
      description: "Initial challenges covering basic to intermediate cybersecurity topics",
      icon: Trophy,
      type: "competition"
    },
    {
      time: "13:00 - 14:00",
      title: "Lunch Break",
      description: "Networking lunch and refreshments for all participants",
      icon: Coffee,
      type: "break"
    },
    {
      time: "14:00 - 17:00", 
      title: "Round 2: Advanced Challenges",
      description: "Complex multi-stage challenges for qualified teams",
      icon: Trophy,
      type: "competition"
    },
    {
      time: "17:00 - 17:30",
      title: "Final Evaluation",
      description: "Judges review submissions and calculate final scores",
      icon: Clock,
      type: "evaluation"
    },
    {
      time: "17:30 - 18:00",
      title: "Prize Distribution",
      description: "Winners announcement, certificate distribution, and closing ceremony",
      icon: Trophy,
      type: "ceremony"
    }
  ];

  const getItemStyle = (type: string) => {
    switch (type) {
      case 'competition':
        return 'border-primary/40 bg-primary/5';
      case 'ceremony':
        return 'border-accent/40 bg-accent/5';
      case 'break':
        return 'border-amber-500/40 bg-amber-500/5';
      default:
        return 'border-muted/40 bg-muted/5';
    }
  };

  return (
    <section id="schedule" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
              Event <span className="text-primary">Schedule</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A full day of intensive cybersecurity challenges, learning, and networking. 
              Plan your day with our detailed schedule.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            <div className="space-y-8">
              {scheduleItems.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full card-cyber flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-8 flex-1 card-cyber p-6 rounded-xl ${getItemStyle(item.type)} group-hover:scale-[1.02] transition-all duration-300`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h3 className="text-xl font-orbitron font-semibold text-primary">
                        {item.title}
                      </h3>
                      <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Information */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            <div className="card-cyber p-6 rounded-xl text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-orbitron font-semibold text-primary mb-2">Duration</h4>
              <p className="text-sm text-muted-foreground">10 Hours of Intensive Competition</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl text-center">
              <Coffee className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-orbitron font-semibold text-primary mb-2">Refreshments</h4>
              <p className="text-sm text-muted-foreground">Lunch & Snacks Provided</p>
            </div>
            
            <div className="card-cyber p-6 rounded-xl text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-orbitron font-semibold text-primary mb-2">Certificates</h4>
              <p className="text-sm text-muted-foreground">All Participants Receive Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;