import { Card } from "@/components/ui/card";
import {
  Server,
  Globe,
  Shield,
  Database,
  Layers,
  Code2,
  Gamepad2,
  Container,
  Lock
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobil",
      icon: Gamepad2, // Using Gamepad2 as placeholder or suggest Smartphone if available, but I'll stick to imported icons
      color: "accent",
      skills: [
        { name: "Flutter", level: 70 },
        { name: "Dart", level: 70 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "primary",
      skills: [
        { name: "ASP.NET Core", level: 80 },
        { name: "C#", level: 80 }
      ]
    },
    {
      title: "Veritabanı",
      icon: Database,
      color: "success",
      skills: [
        { name: "SQL", level: 75 },
        { name: "NoSQL", level: 60 }
      ]
    },
    {
      title: "Araçlar & Teknolojiler",
      icon: Layers,
      color: "foreground",
      skills: [
        { name: "Git", level: 85 },
        { name: "Github", level: 85 },
        { name: "Antigravity", level: 90 }
      ]
    }
  ];

  const tools = [
    { name: "Visual Studio", icon: Code2 },
    { name: "VS Code", icon: Code2 },
    { name: "Unity", icon: Gamepad2 },
    { name: "Docker", icon: Container },
    { name: "SQL Server", icon: Database },
    { name: "Postman", icon: Globe },
    { name: "Git", icon: Code2 },
    { name: "Azure", icon: Shield }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Yeteneklerim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern teknolojiler ve araçlarla geliştirilmiş teknik yetkinliklerim
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="glass-effect border-border p-6 card-hover animate-slide-up">
                <div className={`flex items-center mb-6`}>
                  <div className={`p-3 bg-${category.color}/10 rounded-lg mr-4`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`
                        px-3 
                        py-1 
                        rounded-full 
                        text-sm 
                        font-medium
                        ${category.color === 'primary' && 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'}
                        ${category.color === 'accent' && 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'}
                        ${category.color === 'success' && 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'}
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default Skills;