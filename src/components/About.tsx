import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hakkımda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bilgi İşlem alanında staj deneyimi ve serbest geliştirici olarak web projeleri geliştirme tecrübesine sahibim.
            Özellikle ASP.NET Core ve React teknolojileri ile performans odaklı çözümler üretiyorum.
            Öte yandan Flutter ile mobil uygulama geliştirme alanında da kendimi geliştirdim. Aktif Projeler yapıyorum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <Heart className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold">Kişisel Hikayem</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bilgi İşlem Stajyeri olarak Windows istemci kurulumları ve ağ yapılandırma destekleri sağladım. Otomasyon sistemlerinin bakımı aşamalarına destek oldum.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Serbest Geliştirici olarak gıda ve perakende sektörü için ASP.NET Core ve React ile performans odaklı web mimarileri geliştirdim. KOBİ'ler için WordPress tabanlı kurumsal web siteleri kurdum.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ana odağım Flutter dilinde mobil ve web uygulamaları geliştirmek. Flutter üzerine yoğunlaşıyorum. </p>
            </div>
          </div>

          {/* Education & Goals */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="glass-effect border-border p-6 card-hover animate-slide-up">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Eğitim</h4>
                  <p className="text-primary font-medium mb-1">Karadeniz Teknik Üniversitesi</p>
                  <p className="text-muted-foreground text-sm mb-3">Bilgisayar Programcılığı (Önlisans) • 2023 - 2025</p>
                  <p className="text-muted-foreground text-sm">

                  </p>
                </div>
              </div>
            </Card>

            

            {/* Quick Facts */}
            <Card className="glass-effect border-border p-6 card-hover animate-slide-up">
              <h4 className="text-xl font-semibold mb-4">Hızlı Bilgiler</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Konum:</span>
                  <p className="font-medium">İstanbul, Türkiye</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Durum:</span>
                  <p className="font-medium text-success">Çalışmaya açık</p>
                </div>

                <div>
                  <span className="text-muted-foreground">Diller:</span>
                  <p className="font-medium">İngilizce</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;