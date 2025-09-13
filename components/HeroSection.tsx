export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg hero-pattern relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dark-blue/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">

          {/* Main Title with Gradient Text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-green-600 mb-6 tracking-tight">
            Yiğit Aktürk
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-2">
              Yeni Mezun Bilgisayar Mühendisi
            </p>
            <p className="text-xl sm:text-2xl text-primary font-medium">
              Makine Öğrenimi & Web Geliştirme
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ankara&apos;da yaşayan ve Süleyman Demirel Üniversitesi'nden yeni mezun olan bir bilgisayar mühendisiyim. Makine öğrenimi ve web geliştirme 
            alanlarında kendimi geliştirmekte olup, yenilikçi projelerle kariyerime başlamak istiyorum.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
              aria-label="Projelerimi görüntüle"
            >
              <i className="fas fa-code mr-3 text-lg group-hover:animate-pulse" aria-hidden="true"></i>
              Projelerimi Keşfet
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
              aria-label="İletişime geç"
            >
              <i className="fas fa-envelope mr-3 text-lg group-hover:animate-bounce" aria-hidden="true"></i>
              İletişime Geç
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://www.linkedin.com/in/yi%C4%9Fit-akt%C3%BCrk-0a42502b8/" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/Ygty324" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="mailto:yigitakturk324@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  )
}