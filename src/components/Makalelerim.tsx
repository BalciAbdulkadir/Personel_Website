const articles = [
  {
    title: 'AddScoped, AddTransient, AddSingleton: ASP.NET Core’da Dependency Injection',
    description: 'Stack Overflow\'dan "builder.Services.AddScoped" satırını kopyalamak kolay. Peki, "AddScoped" yerine "AddSingleton" yazsaydınız, uygulamanızın neden patlayacağını biliyor musunuz?',
    imageUrl: '/ikincimakale.webp', 
    link: 'https://medium.com/@balciabdulkadir61/addscoped-addtransient-addsingleton-asp-net-coreda-dependency-injection-bcca206b5d4e',
    btnText: 'Medium\'da Oku →',
    btnClass: 'bg-blue-600 hover:bg-blue-700' 
  },
  {
    title: 'Bir Junior\'un İtirafları: Neden Bir Sonraki Projemde Service/Repository Şart?',
    description: 'Niyetim temiz kod yazmaktı. Ama "önce bir çalışsın" tuzağına düştüm. Bu makalede, "spagetti kod"un acısını ve Service/Repository mimarisinin neden lüks değil, zorunluluk olduğunu anlatıyorum.',
    imageUrl: '/ilkmakale.webp', 
    link: 'https://medium.com/@balciabdulkadir61/neden-bir-sonraki-projemde-service-repository-şart-0a82a5e2d28b',
    btnText: 'Medium\'da Oku →',
    btnClass: 'bg-gray-800 hover:bg-gray-900' 
  },
  {
    title: 'Kod Yazmak Her Zaman Çözüm Değildir: “Maliyet/Fayda” Analizi',
    description: 'Mühendislik, her projeye sıfırdan kod yazmak değil, doğru aracı seçmektir. Körü körüne kod yazmak yerine, WordPress ve .NET Core arasında nasıl Maliyet/Fayda analizi yaptığımı ve projeye göre en verimli çözümü nasıl belirlediğimi anlatıyorum.',
    imageUrl: '/makaleuc.webp', 
    link: 'https://medium.com/@balciabdulkadir61/kod-yazmak-her-zaman-çözüm-değildir-maliyet-fayda-analizi-18130a7a3e7b',
    btnText: 'Medium\'da Oku →',
    btnClass: 'bg-gray-800 hover:bg-gray-900' 
  },
  {
    title: 'ASP.NET Core Identity ve ‘Varsayılan Güvenlik’ İlkesi',
    description: 'ASP.NET Core Identity\'nin varsayılan güvenlik ilkesi, kullanıcı hesaplarını korumak için güçlü parolalar ve diğer güvenlik önlemleri gerektirir. Peki, bu varsayılan ayarları neden değiştirmemelisiniz?',
    imageUrl: '/makaledort.webp', 
    link: 'https://medium.com/@balciabdulkadir61/asp-net-core-identity-ve-varsayılan-güvenlik-i̇lkesi-5bd1f06b00c6',
    btnText: 'Medium\'da Oku →',
    btnClass: 'bg-gray-800 hover:bg-gray-900' 
  }
  
];

const Makalelerim = () => {
  return (
    <section id="makalelerim" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white transition-colors duration-200">
          Teknik Makalelerim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={`${article.title} Kapak Görseli`} 
                className="w-full h-56 object-cover border-b border-gray-200 dark:border-gray-700" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-200">{article.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300 transition-colors duration-200">{article.description}</p>
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full text-center"
                >
                  {article.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Makalelerim;