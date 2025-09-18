import { Trophy, Medal, Award, Gift } from "lucide-react";
import trophyImage from "@/assets/trophy-cyber.jpg";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      icon: Trophy,
      title: "Champions Trophy",
      rewards: [
        "₹10,000 Cash Prize",
        "Winner's Certificate",
        "Internship Opportunities",
        "Premium Swag Kit",
        "LinkedIn Feature"
      ],
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10 border-yellow-400/30"
    },
    {
      position: "2nd Place", 
      icon: Medal,
      title: "Runner-up Medal",
      rewards: [
        "₹5,000 Cash Prize",
        "Runner-up Certificate", 
        "Course Vouchers",
        "Swag Kit",
        "Recognition Letter"
      ],
      color: "text-gray-300",
      bgColor: "bg-gray-300/10 border-gray-300/30"
    },
    {
      position: "3rd Place",
      icon: Award,
      title: "Third Place Award",
      rewards: [
        "₹2,500 Cash Prize",
        "Certificate of Achievement",
        "Learning Resources",
        "Stickers & Goodies",
        "Participation Badge"
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-600/10 border-amber-600/30"
    }
  ];

  const specialPrizes = [
    {
      title: "Best Newcomer Team",
      description: "For the best performing team with beginners",
      reward: "₹1,000 + Certificates"
    },
    {
      title: "Most Creative Solution",
      description: "For the most innovative approach to solving challenges",
      reward: "Special Recognition + Goodies"
    },
    {
      title: "Fastest Solver",
      description: "For the team that solves challenges in minimum time",
      reward: "Speed Award + Premium Items"
    }
  ];

  return (
    <section id="prizes" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
              Prizes & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compete for prestigious awards, professional recognition, and career advancement 
              opportunities. Your cybersecurity expertise deserves recognition!
            </p>
          </div>

          {/* Main Prizes */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {prizes.map((prize, index) => (
              <div 
                key={index} 
                className={`card-cyber p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-200 ${prize.bgColor}`}
              >
                <div className="mb-6">
                  <prize.icon className={`w-16 h-16 mx-auto mb-4 ${prize.color} group-hover:animate-pulse`} />
                  <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
                    {prize.position}
                  </h3>
                  <h4 className={`text-lg font-semibold ${prize.color}`}>
                    {prize.title}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {prize.rewards.map((reward, rewardIndex) => (
                    <li key={rewardIndex} className="flex items-center justify-center">
                      <Gift className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-foreground text-sm">{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trophy Image & Total Prize Pool */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="card-cyber p-4 rounded-2xl">
                <img 
                  src={trophyImage} 
                  alt="Championship Trophy" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-cyber rounded-full opacity-30 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/30 rounded-full animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-orbitron font-bold text-primary">
                Total Prize Pool: ₹25,000+
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                We believe in rewarding excellence. Beyond cash prizes, winners gain access to 
                <span className="text-primary font-semibold"> exclusive internship opportunities</span>, 
                industry connections, and a platform to showcase their skills to potential employers.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                All participants receive <span className="text-accent font-semibold">official certificates</span> 
                that add significant value to your resume and demonstrate your commitment to cybersecurity.
              </p>
              
              <div className="card-cyber p-6 rounded-xl bg-primary/5 border-primary/20">
                <h4 className="font-orbitron font-semibold text-primary mb-3">
                  🎯 Career Benefits
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Direct recruitment opportunities with partner companies</li>
                  <li>• Featured profiles on our LinkedIn and social media</li>
                  <li>• Access to exclusive cybersecurity webinars and workshops</li>
                  <li>• Networking with industry professionals and mentors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Prizes */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold text-center text-primary mb-8">
              Special Recognition Awards
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {specialPrizes.map((special, index) => (
                <div key={index} className="card-cyber p-6 rounded-xl text-center hover:scale-[1.02] transition-transform duration-200">
                  <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="font-orbitron font-semibold text-accent mb-3">
                    {special.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {special.description}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {special.reward}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;