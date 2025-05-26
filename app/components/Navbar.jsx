'use client'

import { useState, useEffect, useReducer, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { AUTH_CHANGE_EVENT } from '../context/AuthContext'
import UserMenu from './UserMenu'
import { FaShieldAlt, FaBook, FaQuestionCircle, FaInfoCircle, FaNewspaper, FaUserShield, FaGraduationCap } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

// Navigasyon linkleri
const NAV_LINKS = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'Blog', path: '/blog' },
  { name: 'Siber Tehditler', path: '/siber-tehditler' },
  { name: 'İpuçları', path: '/ipuclari' },
  { name: 'Kaynaklar', path: '/kaynaklar' },
  { name: 'SSS', path: '/sss' },
  { name: 'Eğitimler', path: '/egitimler' },
]

// Kullanıcı giriş yaptıysa görünecek linkler
const USER_LINKS = [
  { name: 'Profilim', path: '/profilim', icon: <FaUserShield className="inline-block mr-1" /> },
  { name: 'Eğitimlerim', path: '/egitimlerim', icon: <FaGraduationCap className="inline-block mr-1" /> },
]

function Navbar() {
  // useAuth hook'u ile user ve diğer fonksiyonları al
  const { user, loading, logout, checkAuth } = useAuth();
  
  // Yerel state'ler
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || '/';
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  
  // Giriş durumu ve yerel kullanıcı - başlangıçta false olarak ayarla
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [localUser, setLocalUser] = useState(null);
  
  // SSR/CSR uyumsuzluğunu engellemek için kullanacağımız bir bayrak
  const [isMounted, setIsMounted] = useState(false);
  
  // Önceki kullanıcı referansı
  const prevUserRef = useRef(null);
  
  const router = useRouter();
  
  // Aktif link kontrolü için gelişmiş fonksiyon
  const isLinkActive = (path) => {
    if (!pathname) return false;
    // Tam eşleşme
    if (pathname === path) return true;
    // Ana sayfa kontrolü (sadece / için)
    if (path === '/' && pathname === '/') return true;
    // Alt sayfalar için kontrol
    if (path !== '/' && pathname.startsWith(path + '/')) return true;
    return false;
  };
  
  // Bileşen mount edildikten sonra isLoggedIn durumunu kontrol et
  useEffect(() => {
    setIsMounted(true);
    
    // İstemci tarafında çalıştığımızdan emin olalım
    if (typeof window !== 'undefined') {
      try {
        const storedUser = localStorage.getItem('cyberly_user');
        // Gereksiz logları kaldır
        // console.log('Navbar: localStorage kontrolü', !!storedUser, storedUser ? JSON.parse(storedUser) : null);
        
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setLocalUser(userData);
          setIsLoggedIn(true);
          // console.log('Navbar: Kullanıcı giriş yapmış, isLoggedIn=true');
        } else {
          setIsLoggedIn(false);
          // console.log('Navbar: Kullanıcı giriş yapmamış, isLoggedIn=false');
        }
      } catch (error) {
        console.error('Navbar: LocalStorage kontrolü sırasında hata:', error);
      }
    }
  }, []);
  
  // Tarayıcıda localStorage'dan direkt kullanıcı durumunu kontrol et
  const checkLocalStorage = () => {
    if (typeof window === 'undefined') return null;
    
    try {
      const storedUser = localStorage.getItem('cyberly_user');
      const userData = storedUser ? JSON.parse(storedUser) : null;
      return userData;
    } catch (error) {
      console.error('Navbar: LocalStorage kontrol hatası', error);
      return null;
    }
  };
  
  // Özel oturum değişikliği olayını dinle
  useEffect(() => {
    if (!isMounted) return;
    
    const handleAuthChange = (event) => {
      // console.log('Navbar: Auth değişiklik olayı alındı', event.detail);
      const { user: authUser, loggedIn } = event.detail;
      
      // Önbelleğe alınmış kullanıcıyla karşılaştır
      const prevUserStr = JSON.stringify(prevUserRef.current);
      const currentUserStr = JSON.stringify(authUser);
      
      // Sadece değişiklik varsa güncelle
      if (prevUserStr !== currentUserStr) {
        prevUserRef.current = authUser;
        
        // State'i güncelle
        if (typeof loggedIn !== 'undefined') {
          setIsLoggedIn(loggedIn);
        } else {
          setIsLoggedIn(!!authUser);
        }
        
        setLocalUser(authUser);
        forceUpdate();
      }
    };
    
    // Event listener'ı ekle
    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    
    // Cleanup
    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    };
  }, [isMounted]);
  
  // Sayfa yüklendikten sonra bir kez oturumu kontrol et
  useEffect(() => {
    if (!isMounted) return;
    
    let mounted = true;
    
    const verifyOnce = async () => {
      try {
        const isAuth = await checkAuth();
        if (mounted) {
          if (isAuth !== isLoggedIn) {
            // Log mesajını kaldıralım
            setIsLoggedIn(isAuth);
          }
        }
      } catch (error) {
        console.error('Navbar: Oturum kontrolü sırasında hata -', error.message);
      }
    };
    
    // Biraz gecikme ile kontrol et
    if (typeof window !== 'undefined') {
      setTimeout(verifyOnce, 500);
    }
    
    return () => {
      mounted = false;
    };
  }, [isLoggedIn, checkAuth, isMounted]);

  // User değişikliklerini izle
  useEffect(() => {
    if (user) {
      // Önceki state ile karşılaştır
      const prevUserStr = JSON.stringify(localUser);
      const currentUserStr = JSON.stringify(user);
      
      // Sadece değişiklik varsa güncelle ve log yap
      if (prevUserStr !== currentUserStr) {
        // console.log('Navbar: useAuth hook kullanıcı değişikliği algılandı', user);
        setIsLoggedIn(true);
        setLocalUser(user);
      }
    }
  }, [user, localUser]);

  // Görüntülenecek kullanıcı bilgisi
  const currentUser = user || localUser;

  // Link prefetching için - sayfa yüklendiğinde en sık ziyaret edilen sayfaları önceden yükle
  useEffect(() => {
    // Next.js'in kendi prefetch mekanizmasını kullanıyoruz,
    // bu nedenle manuel preload linkleri kaldırıyoruz
    // preload link mekanizması uyarılara neden olduğu için kaldırıyoruz
  }, [pathname])

  // Önceki useEffect yerine pathname değişkeninin logging'i için bir kullanım ekleyelim
  useEffect(() => {
    if (isMounted && process.env.NODE_ENV === 'development') {
      console.log('Navbar: Mevcut pathname değeri:', pathname);
    }
  }, [pathname, isMounted]);

  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('iletisim')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleLogout = async () => {
    try {
      console.log('Navbar: Oturum kapatma işlemi başlatıldı');
      
      // UI durumunu hemen güncelle
      setIsMenuOpen(false);
      setIsLoggedIn(false);
      setLocalUser(null);
      
      // LocalStorage ve diğer depoları tamamen temizle
      localStorage.removeItem('cyberly_user');
      localStorage.removeItem('cyberly_token');
      sessionStorage.removeItem('cyberly_user');
      sessionStorage.removeItem('cyberly_token');
      
      // Tüm sibergercek ile ilgili lokalstroage verilerini temizle
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cyberly_')) {
          localStorage.removeItem(key);
        }
      });
      
      // Tüm cookie'leri temizle
      document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
      
      // Özel olay tetikle - diğer bileşenlerin güncellenebilmesi için
      const authEvent = new CustomEvent(AUTH_CHANGE_EVENT, { 
        detail: { user: null, loggedIn: false } 
      });
      window.dispatchEvent(authEvent);
      
      try {
        // Auth context üzerinden çıkış işlemi
        await logout();
        console.log('Navbar: Context logout işlemi başarıyla tamamlandı');
      } catch (apiError) {
        console.error('Navbar: Context logout işleminde hata -', apiError.message);
        // API hatası olsa bile kullanıcı çıkış yapmış olacak
      }
      
      // Tamamen sayfayı yeniden yükleyerek giriş sayfasına yönlendir
      console.log('Navbar: Oturum başarıyla kapatıldı, giriş sayfasına yönlendiriliyor...');
      window.location.href = '/giris?fresh=' + new Date().getTime();
    } catch (error) {
      console.error('Navbar: Oturum kapatma işleminde hata -', error.message);
      // Hata durumunda da temizlik işlemlerini yap ve yönlendir
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
      window.location.href = '/giris?fresh=' + new Date().getTime();
    }
  }

  const handleMobileNavigation = (path) => (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 100);
  };

  // Admin durumunu vurgulayan bir class belirleme fonksiyonu
  const getAdminClass = () => {
    if (currentUser?.role === 'ADMIN') {
      return "text-red-400 font-bold";
    }
    return "";
  };

  return (
    <nav className="relative bg-gray-900/20 text-white shadow-lg border-b border-cyan-700 backdrop-blur-sm z-[3]">
      <div className="max-w-full mx-0 px-1 sm:px-2 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-2">
            <Link href="/" className="flex items-center">
              <div className="w-9 h-9 mr-2 relative">
                <Image
                  src="/shield-lock.svg"
                  alt="CYBERLY Logo"
                  width={36}
                  height={36}
                  className="text-cyan-500 text-glow"
                  priority
                />
              </div>
              <span className="font-extrabold text-xl text-cyan-400 text-glow tracking-wide">CYBERLY</span>
            </Link>
          </div>

          {/* Tüm navigasyon linkleri tek container içinde */}
          <div className="hidden md:flex flex-grow items-center justify-between mx-4">
            <div className="flex items-center w-full justify-evenly px-2">
              {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(link.path)
                return (
                  <Link 
                    key={link.path}
                    href={link.path} 
                    prefetch={link.path === '/hakkimizda' || link.path === '/blog' || link.path === '/'}
                    className={`flex items-center px-2 py-1.5 text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors rounded-md ${
                      isActive ? 'text-cyan-400 bg-gray-800/30' : 'text-white'
                    }`}
                  >
                    <span className="whitespace-nowrap">
                      {link.name}
                    </span>
                  </Link>
                )
              })}
            
              {/* İletişim butonu */}
              <a 
                href="#iletisim" 
                onClick={scrollToContact}
                className="flex items-center px-2 py-1.5 text-sm font-semibold bg-cyan-600/60 hover:bg-cyan-700 transition-colors border-glow rounded-md whitespace-nowrap"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* Giriş/Çıkış Butonları */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Kullanıcı giriş linkleri */}
            {isMounted && (
              <>
                {/* Kullanıcı giriş yaptıysa */}
                {isLoggedIn && USER_LINKS.map((link) => {
                  const isActive = isLinkActive(link.path)
                  return (
                    <Link 
                      key={link.path}
                      href={link.path} 
                      prefetch={false}
                      className={`flex items-center px-2 py-1.5 text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors rounded-md ${
                        isActive ? 'text-cyan-400 bg-gray-800/30' : 'text-white'
                      }`}
                    >
                      <span className="flex items-center">
                        {link.icon}
                        {link.name}
                      </span>
                    </Link>
                  )
                })}
                
                {/* Kullanıcı giriş yapmadıysa giriş/kayıt butonları göster */}
                {!isLoggedIn && (
                  <>
                    <Link 
                      href="/giris" 
                      prefetch={true}
                      className="px-2 py-1.5 text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors rounded-md"
                    >
                      Giriş Yap
                    </Link>
                    <Link 
                      href="/uye-ol" 
                      prefetch={true}
                      className="px-2 py-1.5 text-sm font-semibold bg-cyan-500/80 hover:bg-cyan-600 transition-colors rounded-md"
                    >
                      Üye Ol
                    </Link>
                  </>
                )}
                
                {/* Kullanıcı giriş yaptıysa kullanıcı menüsünü göster */}
                {isLoggedIn && (
                  <div>
                    <UserMenu />
                  </div>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1 rounded-md text-cyan-400 hover:text-white hover:bg-gray-800/30 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/20 backdrop-blur-sm`}
        id="mobile-menu"
      >
        <div className="px-2 pt-1 pb-2 space-y-1 sm:px-2">
          {NAV_LINKS.map((link) => {
            const isMobileNavActive = isLinkActive(link.path)
            return (
              <Link 
                key={link.path}
                href={link.path} 
                prefetch={link.path === '/hakkimizda' || link.path === '/blog' || link.path === '/'}
                className={`flex items-center block px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors ${
                  isMobileNavActive ? 'text-cyan-400 bg-gray-800/30' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  {link.name}
                </span>
              </Link>
            )
          })}
          
          <a 
            href="#iletisim" 
            onClick={scrollToContact}
            className="block px-2 py-1 rounded-md text-sm font-semibold bg-cyan-600/60 hover:bg-cyan-700 transition-colors border-glow flex items-center"
          >
            İletişim
          </a>
          
          {/* İstemci tarafındaki kontroller burada */}
          {isMounted && (
            <>
              {/* Kullanıcı giriş yaptıysa gösterilecek menü öğeleri */}
              {isLoggedIn && USER_LINKS.map((link) => {
                const isMobileUserLinkActive = isLinkActive(link.path)
                return (
                  <Link 
                    key={link.path}
                    href={link.path} 
                    prefetch={false}
                    className={`flex items-center block px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors ${
                      isMobileUserLinkActive ? 'text-cyan-400 bg-gray-800/30' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      {link.icon}
                      {link.name}
                    </span>
                  </Link>
                )
              })}
              
              {/* Kullanıcı giriş yapmadıysa giriş/kayıt butonları göster */}
              {!isLoggedIn && (
                <>
                  <Link 
                    href="/giris" 
                    prefetch={true}
                    className="block px-2 py-1 mt-2 rounded-md text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Giriş Yap
                  </Link>
                  <Link 
                    href="/uye-ol" 
                    prefetch={true}
                    className="block px-2 py-1 mt-2 rounded-md text-sm font-semibold bg-cyan-500/80 hover:bg-cyan-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Üye Ol
                  </Link>
                </>
              )}
              
              {/* Kullanıcı giriş yaptıysa profil ve çıkış butonları göster */}
              {isLoggedIn && (
                <>
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="px-2 py-1 text-sm font-semibold text-cyan-400">
                    {currentUser?.name || currentUser?.email?.split('@')[0] || 'Kullanıcı'}
                    {currentUser?.role === 'ADMIN' && (
                      <span className="ml-1 px-1 py-0.5 text-xs font-bold bg-red-600 text-white rounded">ADMIN</span>
                    )}
                  </div>
                  <button 
                    className="flex items-center w-full text-left px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors"
                    onClick={(e) => handleMobileNavigation('/ayarlar')(e)}
                  >
                    Ayarlar
                  </button>
                  {currentUser?.role === 'ADMIN' && (
                    <button 
                      className="flex items-center w-full text-left px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors"
                      onClick={(e) => handleMobileNavigation('/admin-panel')(e)}
                    >
                      Yönetim Paneli
                    </button>
                  )}
                  <button 
                    className="flex items-center w-full text-left px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-800/30 hover:text-cyan-400 transition-colors"
                    onClick={(e) => handleMobileNavigation('/profilim')(e)}
                  >
                    Profilim
                  </button>
                  <button
                    className="flex items-center w-full text-left px-2 py-1 rounded-md text-sm font-semibold text-red-400 hover:bg-gray-800/30 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Navbar Mobil: Oturum kapatma butonuna tıklandı');
                      
                      // Merkezi oturum kapatma fonksiyonunu çağır
                      handleLogout();
                    }}
                  >
                    Çıkış Yap
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 