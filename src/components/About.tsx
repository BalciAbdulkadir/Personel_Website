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
Bilgisayar Programcılığı mezunu olarak eğitimim boyunca özellikle
ASP.NET Core ile güvenli ve ölçeklenebilir backend çözümleri geliştirmeye
odaklandım. Bitirme projem olan “Güvenli Ödeme Sistemi” ile JWT ve
AES gibi modern teknolojileri kullanarak yazılım mimarisi ve veri güvenliği
konularında kendimi geliştirdim. Akçaabat Belediyesi Bilgi İşlem
birimindeki stajımla, Windows istemci yönetimi, temel ağ yapılandırması ve
sistem bakımı üzerine pratik tecrübe kazandım. Bu sayede yazılım
geliştirme becerilerimi donanım ve sistem bilgisiyle birleştirerek bütünsel
bir bakış açısı elde ettim. Junior Full Stack Geliştirici ve IT Teknisyeni
olarak, hem yazılım geliştirme hem de IT altyapılarını anlama yönündeki bu
çift taraflı deneyimimle ekiplerinize değer katmayı hedefliyorum.          </p>
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
                Akçaabat Belediyesi’nde bitirdiğim Bilgi İşlem stajı sayesinde, Windows istemci yönetimi, ağ yapılandırması ve sistem bakımı gibi alanlarda deneyim kazandım. Aynı zamanda karşılaştığım rutin IT sorunlarına, sahip olduğum C# ve ASP.NET Core bilgisiyle otomasyon ve küçük çözümler üreterek pratik problem çözme becerimi geliştirdim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eğitim hayatım boyunca ise özellikle ASP.NET Core backend geliştirme üzerine yoğunlaştım. JWT ile kimlik doğrulama, AES ile veri güvenliği gibi teknolojileri kullanarak hazırladığım “Güvenli Ödeme Sistemi” projesi bana hem yazılım güvenliği hem de ölçeklenebilir mimariler hakkında önemli deneyimler kazandırdı. Yazılım ve sistem bilgimi birleştirerek, modern altyapıların geliştirilmesi ve yönetilmesi alanında kariyerime yön vermeyi amaçlıyorum.
              </p>
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
                  <p className="text-primary font-medium mb-1">Bilgisayar Programcılığı</p>
                  <p className="text-muted-foreground text-sm mb-3">Karadeniz Teknik Üniversitesi • 2023-2025</p>
                  <p className="text-muted-foreground text-sm">
                    Yazılım geliştirme, algoritma tasarımı, nesne tabanlı programlama, veri yapıları ve sistem tasarımı konularında 
                    temel eğitim aldım. Ayrıca Photoshop ile tasarım düzenleme alanında da gördüm. 
                  </p>
                </div>
              </div>
            </Card>

            {/* Goals Card */}
            <Card className="glass-effect border-border p-6 card-hover animate-slide-up">
              <div className="flex items-start">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Hedeflerim</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Senior Full Stack Developer olmak
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Açık kaynak projelere katkı sağlamak
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Teknoloji topluluğuna değer katmak
                    </li>
                  </ul>
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
                  <span className="text-muted-foreground">İlgi Alanları:</span>
                  <p className="font-medium">Web Dev, DevOps, IT, Siber Güvenlik</p>
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