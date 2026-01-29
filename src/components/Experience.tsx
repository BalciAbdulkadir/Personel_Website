import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            company: "Serbest Geliştirici",
            role: "Full Stack Developer",
            period: "09/2025 - Günümüz",
            description: [
                "Özel Yazılım: Gıda ve perakende sektörü için ASP.NET Core ve React ile performans odaklı web mimarileri geliştirdim.",
                "CMS Çözümleri: KOBİ'ler için WordPress tabanlı kurumsal web siteleri kurdum; tema özelleştirme ve güvenlik optimizasyonlarını sağladım."
            ]
        },
        {
            company: "Akçaabat Belediyesi",
            role: "Bilgi İşlem Stajyeri",
            period: "07/2025 - 09/2025",
            description: [
                "Windows istemci kurulumları ve ağ yapılandırma destekleri sağladım.",
                "Otomasyon sistemlerinin bakımı aşamalarına destek oldum."
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding bg-muted/30">
            <div className="container-max">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Deneyim</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Profesyonel iş geçmişim ve tecrübelerim
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <Card key={index} className="glass-effect border-border p-8 card-hover animate-slide-up relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent opacity-80" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center">
                                        <Briefcase className="mr-3 h-6 w-6 text-primary" />
                                        {exp.company}
                                    </h3>
                                    <span className="text-xl text-primary font-medium pl-9 block">
                                        {exp.role}
                                    </span>
                                </div>

                                <div className="flex items-center text-muted-foreground bg-primary/10 px-4 py-2 rounded-full w-fit">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span className="text-sm font-semibold">{exp.period}</span>
                                </div>
                            </div>

                            <div className="pl-0 md:pl-9">
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground">
                                            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
