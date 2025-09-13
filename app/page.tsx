import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hakkımda</h2>
            
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Merhaba! Ben Yiğit Aktürk, Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünden yeni mezun oldum. 
                Makine öğrenimi ve web geliştirme alanlarında kendimi geliştirmeye çalışıyorum.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Teknolojiye olan tutkum ve sürekli öğrenme isteğimle, kariyerime sağlam bir başlangıç yapmak 
                ve değer katacağım projelerde yer almak istiyorum.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary text-white rounded-full text-sm">Makine Öğrenimi</span>
                <span className="px-4 py-2 bg-primary text-white rounded-full text-sm">Web Geliştirme</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-700 rounded-lg p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-graduation-cap text-primary mr-3"></i>
                    <span className="text-gray-300">Yeni Mezun - 2025</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                    <span className="text-gray-300">Ankara, Türkiye</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-brain text-primary mr-3"></i>
                    <span className="text-gray-300">Makine Öğrenimi Odaklı</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-search text-primary mr-3"></i>
                    <span className="text-gray-300">Aktif İş Arıyor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="py-20 bg-gray-800">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Yeteneklerim</h2>
      <p className="text-xl text-gray-300">Uzmanlaştığım teknolojiler ve kişisel becerilerim</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12">
      {/* Technical Skills */}
      <div className="bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
            <i className="fas fa-code text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-white">Bildiğim Diller</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-600 rounded-lg p-4 hover:bg-gray-500 transition-colors duration-300">
            <div className="flex items-center">
              <i className="fab fa-python text-yellow-400 text-2xl mr-3"></i>
              <span className="text-white font-medium">Python</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-lg p-4 hover:bg-gray-500 transition-colors duration-300">
            <div className="flex items-center">
              <i className="fab fa-js-square text-yellow-500 text-2xl mr-3"></i>
              <span className="text-white font-medium">JavaScript</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-lg p-4 hover:bg-gray-500 transition-colors duration-300">
            <div className="flex items-center">
              <i className="fab fa-css3-alt text-blue-400 text-2xl mr-3"></i>
              <span className="text-white font-medium">CSS</span>
            </div>
          </div>
          <div className="bg-gray-600 rounded-lg p-4 hover:bg-gray-500 transition-colors duration-300">
            <div className="flex items-center">
              <i className="fas fa-database text-orange-400 text-2xl mr-3"></i>
              <span className="text-white font-medium">MySQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Skills */}
      <div className="bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
            <i className="fas fa-user-friends text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-white">Kişisel Özellikler</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors duration-300">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-handshake text-white text-sm"></i>
            </div>
            <span className="text-gray-200">Takım arkadaşları ile uyumlu</span>
          </div>
          <div className="flex items-center p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors duration-300">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-lightbulb text-white text-sm"></i>
            </div>
            <span className="text-gray-200">Bağımsız karar verebilen</span>
          </div>
          <div className="flex items-center p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors duration-300">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-sync-alt text-white text-sm"></i>
            </div>
            <span className="text-gray-200">Çalışma ortamına uyum sağlayabilen</span>
          </div>
          <div className="flex items-center p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors duration-300">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-ear-listen text-white text-sm"></i>
            </div>
            <span className="text-gray-200">İyi dinleyen ve anlayan</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Experiences Section */}
<section id="experiences" className="py-20 bg-gray-800">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Tecrübelerim</h2>
      <p className="text-xl text-gray-300">Staj deneyimlerim ve öğrendiğim teknolojiler</p>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary"></div>

      {/* Experience 1 - TRT Stajı */}
      <div className="relative mb-12">
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-auto max-w-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-broadcast-tower text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Ağ ve Sistem Yönetimi Stajı</h3>
                  <p className="text-blue-300 font-medium">TRT (Türkiye Radyo Televizyon)</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <i className="fas fa-calendar mr-1"></i>
                  1 Temmuz - 29 Temmuz 2024
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Ağ altyapısı ve sistem yönetimi konularında kapsamlı deneyim. Cisco cihazları ile pratik çalışmalar.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-400">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Cisco Packet Tracer ile ağ simülasyonu
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  VLAN, DHCP, NAT yapılandırmaları
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  OSPF, EIGRP routing protokolleri
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 z-10"></div>
          
          <div className="w-1/2 pl-8">
            <div className="bg-gray-600 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">Öğrenilen Teknolojiler</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Cisco</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">TCP/IP</span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">VLAN</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Router Config</span>
                <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience 2 - Simplex Stajı */}
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-8">
            <div className="bg-gray-600 rounded-lg p-4 ml-auto max-w-md">
              <h4 className="text-white font-semibold mb-3">Öğrenilen Teknolojiler</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">OpenSlide</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Deep Learning</span>
              </div>
            </div>
          </div>
          
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-800 z-10"></div>
          
          <div className="w-1/2 pl-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-microscope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Dijital Patoloji Stajı</h3>
                  <p className="text-green-300 font-medium">Simplex Bilgi Teknolojileri A.Ş.</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30">
                  <i className="fas fa-calendar mr-1"></i>
                  4 Ağustos - 29 Ağustos 2025
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Dijital patoloji ve görüntü işleme alanında derin öğrenme teknikleri ile çalışma deneyimi.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-400">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  OpenSlide ile doku tespiti algoritmaları
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Dijital patoloji görüntü analizi
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  Tıbbi görüntü piramit yapıları
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Summary Cards */}
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      <div className="bg-gray-700 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-clock text-white text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Toplam Staj Süresi</h3>
        <p className="text-3xl font-bold text-primary">40 Gün</p>
        <p className="text-gray-300 text-sm">2 farklı şirkette</p>
      </div>

      <div className="bg-gray-700 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-tools text-white text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Öğrenilen Teknoloji</h3>
        <p className="text-3xl font-bold text-blue-500">15+</p>
        <p className="text-gray-300 text-sm">Farklı araç ve platform</p>
      </div>

      <div className="bg-gray-700 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-project-diagram text-white text-xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Tamamlanan Proje</h3>
        <p className="text-3xl font-bold text-green-500">8+</p>
        <p className="text-gray-300 text-sm">Pratik uygulama</p>
      </div>
    </div>

    {/* Key Learnings */}
    <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-6">
      <h3 className="text-xl font-bold text-white text-center mb-4">Temel Kazanımlar</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-blue-100">
          <h4 className="font-semibold mb-2">Teknik Beceriler</h4>
          <ul className="text-sm space-y-1">
            <li>• Ağ protokolleri ve sistem yönetimi</li>
            <li>• Algoritma geliştirme ve kodlama</li>
            <li>• Cisco cihaz konfigürasyonları</li>
            <li>• Python ile algorithm geliştirme</li>
          </ul>
        </div>
        <div className="text-blue-100">
          <h4 className="font-semibold mb-2">Kişisel Gelişim</h4>
          <ul className="text-sm space-y-1">
            <li>• Profesyonel çalışma ortamına uyum</li>
            <li>• Problem çözme ve analitik düşünce</li>
            <li>• Ekip çalışması ve iletişim</li>
            <li>• Sürekli öğrenme alışkanlığı</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ana Projem</h2>
      <p className="text-xl text-gray-300">Bitirme projesi ve araştırma odağım</p>
    </div>
    
    <div className="max-w-4xl mx-auto">
      {/* Main Project: Brain Tumor Detection AI System */}
      <div className="bg-gray-700 rounded-xl shadow-2xl overflow-hidden">
        {/* Project Header */}
        <div className="h-80 bg-gradient-to-br from-primary via-dark-blue to-accent flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Animated Brain Icon */}
          <div className="relative z-10 text-center">
            <div className="relative mb-6">
              <i className="fas fa-brain text-white text-8xl floating"></i>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">BrainTumorNet</h3>
            <p className="text-xl text-blue-200 font-medium">AI-Powered MR Tumor Detection System</p>
          </div>
        </div>

        <div className="p-8">
          {/* Project Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Yapay Zekâ Destekli Beyin MR Tümör Tespit Sistemi</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Süleyman Demirel Üniversitesi bitirme projem olarak geliştirdiğim derin öğrenme tabanlı tıbbi görüntü analiz sistemi. 
              56,445+ beyin MRI görüntüsü üzerinde eğitilmiş özel BrainTumorNet modeli ile %99.62 doğruluk oranında tümör tespiti yapıyor.
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <i className="fas fa-star mr-2"></i>
                Temel Özellikler
              </h4>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3 flex-shrink-0"></i>
                  <span>51+ milyon parametreli özel CNN mimarisi</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3 flex-shrink-0"></i>
                  <span>11 farklı Kaggle veri setinden geniş dataset</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3 flex-shrink-0"></i>
                  <span>U-Net + ResNet hibrit mimarisi</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3 flex-shrink-0"></i>
                  <span>Attention mekanizmaları ile odaklanmış analiz</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3 flex-shrink-0"></i>
                  <span>FastAPI + Next.js tam stack uygulama</span>
                </li>
              </ul>
            </div>

            {/* Performance Stats */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <i className="fas fa-chart-line mr-2"></i>
                Performans Metrikleri
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-600 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Doğruluk (Accuracy)</span>
                    <span className="text-green-400 font-bold text-lg">99.62%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '99.62%'}}></div>
                  </div>
                </div>
                <div className="bg-gray-600 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Kesinlik (Precision)</span>
                    <span className="text-blue-400 font-bold text-lg">99.69%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '99.69%'}}></div>
                  </div>
                </div>
                <div className="bg-gray-600 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">F1 Score</span>
                    <span className="text-purple-400 font-bold text-lg">99.75%</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '99.75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-primary mb-4">Kullanılan Teknolojiler</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30 flex items-center">
                <i className="fab fa-python mr-2"></i>Python
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 flex items-center">
                <i className="fas fa-brain mr-2"></i>TensorFlow
              </span>
              <span className="px-4 py-2 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30 flex items-center">
                <i className="fas fa-server mr-2"></i>FastAPI
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30 flex items-center">
                <i className="fab fa-react mr-2"></i>Next.js
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 flex items-center">
                <i className="fab fa-js mr-2"></i>TypeScript
              </span>
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30 flex items-center">
                <i className="fas fa-palette mr-2"></i>Tailwind CSS
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-600 rounded-lg">
              <i className="fas fa-images text-primary text-2xl mb-2"></i>
              <h5 className="font-semibold text-white">Veri Seti</h5>
              <p className="text-gray-300 text-sm">56,445+ MR görüntüsü</p>
            </div>
            <div className="text-center p-4 bg-gray-600 rounded-lg">
              <i className="fas fa-calendar text-primary text-2xl mb-2"></i>
              <h5 className="font-semibold text-white">Tamamlanma</h5>
              <p className="text-gray-300 text-sm">Haziran 2025</p>
            </div>
          </div>

          {/* Project Actions */}
          <div className="flex justify-center items-center pt-6 border-t border-gray-600">
            <div className="flex space-x-4">
              <a href="https://github.com/Ygty324/Brain-Tumor-Detection" className="flex items-center text-primary hover:text-white transition-colors transform hover:scale-110">
                <i className="fab fa-github text-xl mr-2"></i>
                <span className="text-sm font-medium">GitHub Repository</span>
              </a>
              <button className="px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-info-circle mr-2"></i>
                Detaylar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Certificates Section */}
<section id="certificates" className="py-20 bg-gray-800">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sertifikalarım</h2>
      <p className="text-xl text-gray-300">Aldığım sertifikalar, eğitimler ve dil yetkinliğim</p>
    </div>

    {/* Language Skills */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white text-center mb-8">Dil Yetkinliği</h3>
      <div className="flex justify-center">
        <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 max-w-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-language text-white text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">İngilizce</h4>
              <p className="text-blue-300 font-medium">B1 Seviyesi</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">Orta düzey İngilizce yetkinliği. Teknik dokümantasyon okuma ve temel iletişim becerisi.</p>
        </div>
      </div>
    </div>

    {/* Certificates Section Title */}
    <h3 className="text-2xl font-bold text-white text-center mb-8">Sertifikalar</h3>

    {/* Certificates Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* BTK Academy Certificates */}
      <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translateY(-2px) border-l-4 border-green-500">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
            <i className="fab fa-python text-white text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Python Programlama Dili</h4>
            <p className="text-sm text-green-300 font-medium">BTK Akademi</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">Python programlama dilinin temel ve ileri konularını kapsayan kapsamlı eğitim programı.</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">2025</span>
          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <i className="fas fa-certificate text-green-400 text-sm"></i>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translateY(-2px) border-l-4 border-orange-500">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
            <i className="fas fa-chart-line text-white text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Veri Bilimi için Python ve Tensorflow</h4>
            <p className="text-sm text-orange-300 font-medium">BTK Akademi</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">Veri bilimi uygulamaları, pandas, numpy ve TensorFlow ile makine öğrenimi temelleri.</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">2025</span>
          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
            <i className="fas fa-certificate text-orange-400 text-sm"></i>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translateY(-2px) border-l-4 border-purple-500">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
            <i className="fas fa-brain text-white text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Keras ile Derin Öğrenme</h4>
            <p className="text-sm text-purple-300 font-medium">BTK Akademi</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">Keras framework'ü kullanarak neural network'ler ve derin öğrenme algoritmaları geliştirme.</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">2025</span>
          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
            <i className="fas fa-certificate text-purple-400 text-sm"></i>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translateY(-2px) border-l-4 border-red-500">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <i className="fas fa-code-branch text-white text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Git ve GitHub</h4>
            <p className="text-sm text-red-300 font-medium">BTK Akademi</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">Versiyon kontrol sistemleri, Git kullanımı ve GitHub ile proje yönetimi teknikleri.</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">2025</span>
          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
            <i className="fas fa-certificate text-red-400 text-sm"></i>
          </div>
        </div>
      </div>

      {/* Udemy Certificate */}
      <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translateY(-2px) border-l-4 border-indigo-500 md:col-span-2">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
            <i className="fas fa-robot text-white text-xl"></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">TensorFlow 2: Deep Learning & Artificial Intelligence</h4>
            <p className="text-sm text-indigo-300 font-medium">Udemy</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          Kapsamlı TensorFlow 2.0 eğitimi ile derin öğrenme ve yapay zeka uygulamaları. 
          Computer vision, NLP ve neural network mimarileri üzerine detaylı çalışma.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">2025</span>
          <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
            <i className="fas fa-certificate text-indigo-400 text-sm"></i>
          </div>
        </div>
      </div>
    </div>

    {/* Achievement Summary */}
    <div className="mt-12 text-center">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 max-w-2xl mx-auto">
        <h4 className="text-xl font-bold text-white mb-3">Toplam Başarı</h4>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-blue-100 text-sm">Tamamlanan Sertifika</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">B1</div>
            <div className="text-blue-100 text-sm">İngilizce Seviyesi</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Contact Section */}
<section id="contact" className="py-20 bg-gray-900">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">İletişim</h2>
      <p className="text-xl text-gray-300">Benimle iletişime geçin</p>
    </div>
    
    <div className="max-w-2xl mx-auto">
      {/* Email Card */}
      <div className="bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-6">
            <i className="fas fa-envelope text-white text-2xl"></i>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
            <a href="mailto:yigitakturk324@gmail.com" className="text-primary hover:text-white transition-colors text-lg font-medium">
              yigitakturk324@gmail.com
            </a>
          </div>
        </div>
        <p className="text-gray-300 text-center">
          Projeler, iş fırsatları veya işbirliği önerileri için benimle iletişime geçebilirsiniz.
        </p>
      </div>

      {/* Social Links */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-white mb-6">Sosyal Medya</h3>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/yi%C4%9Fit-akt%C3%BCrk-0a42502b8/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a 
            href="https://github.com/Ygty324" 
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a 
            href="mailto:yigitakturk324@gmail.com" 
            className="group w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 Yiğit Aktürk. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}