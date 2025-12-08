import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-posta",
      value: "balciabdulkadir61@gmail.com",
      href: "mailto:balciabdulkadir61@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/BalciAbdulkadir",
      href: "https://github.com/BalciAbdulkadir",
      color: "foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdülkadir-balcı",
      href: "https://linkedin.com/in/abdülkadir-balcı",
      color: "accent"
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+90 541 815 66 61",
      href: "tel:+905418156661", // Tıklayınca arama yapması için eklendi
      color: "foreground"
    },
    {
      icon: MapPin,
      label: "Konum",
      value: "İstanbul, Türkiye", // Şehri ekledim, daha net olsun
      href: null,
      color: "success"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">İletişim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeleriniz için hazırım. Benimle iletişime geçmekten çekinmeyin.
          </p>
        </div>

        {/* Ana İçerik - Kartlar */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16 animate-slide-up">
          
          {/* Sol Taraf: İletişim Bilgileri Listesi */}
          <Card className="glass-effect border-border p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">İletişim Kanalları</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center group">
                    <div className={`p-3 bg-${info.color}/10 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-5 w-5 text-${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Sağ Taraf: Hızlı Aksiyon Butonları */}
          <Card className="glass-effect border-border p-8 h-full flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold mb-4">Hemen Bağlantı Kur</h3>
            <p className="text-muted-foreground mb-8">
              Sosyal medya profillerime göz atabilir veya doğrudan mail gönderebilirsiniz.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Button className="btn-hero-primary w-full" asChild>
                <a href="mailto:balciabdulkadir61@gmail.com">
                  <Mail className="mr-3 h-5 w-5" />
                  E-posta Gönder
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://linkedin.com/in/abdülkadir-balcı" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn Profili
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://github.com/BalciAbdulkadir" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" />
                  GitHub Profili
                </a>
              </Button>
            </div>
          </Card>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;