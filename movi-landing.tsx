import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Shield, Star, Download, Calendar, MapPin, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/movi-logo-clean.png" alt="Movi Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#beneficios" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Beneficios
          </Link>
          <Link href="#eventos" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Eventos
          </Link>
          <Link href="#testimonios" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Testimonios
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-1 items-center justify-center">
              <div className="flex flex-col justify-center space-y-6 items-center lg:items-start">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 text-sm px-4 py-1">
                    🎵 La nueva forma de viajar a eventos
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white leading-tight text-center lg:text-left">
                    Tu viaje,{" "}
                    <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                      mucho más que un destino.
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl leading-relaxed text-center lg:text-left">
                    Conectate con otros fans, compartí gastos y viajá seguro a tus eventos favoritos. La experiencia
                    comienza antes de llegar.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 px-8"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Descargar App
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                  >
                    Ver cómo funciona
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Información de la Empresa */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/30 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Sobre Movi</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Somos la primera plataforma argentina especializada en viajes compartidos para eventos musicales.
                  Conectamos a fanáticos de la música que quieren vivir experiencias únicas desde el momento en que
                  salen de casa.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-2">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+50,000 usuarios</p>
                      <p className="text-white/60 text-sm">Comunidad activa</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+500 eventos</p>
                      <p className="text-white/60 text-sm">Cubiertos mensualmente</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">¿Cómo funciona?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <p className="text-white/80">Elegí tu evento favorito en la app</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <p className="text-white/80">Conectate con otros fans que van al mismo lugar</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <p className="text-white/80">Compartí el viaje y dividí los gastos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                      4
                    </div>
                    <p className="text-white/80">¡Disfrutá del evento con nuevos amigos!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">¿Por qué elegir Movi?</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl">
                Transformamos la forma en que llegás a tus eventos favoritos
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-purple-500/30 backdrop-blur-sm hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 w-fit mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Conectate con otros fans</h3>
                  <p className="text-white/80">
                    Conocé gente que comparte tu pasión musical. Hacé amigos antes, durante y después del viaje.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-900/80 to-orange-900/80 border-pink-500/30 backdrop-blur-sm hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-3 w-fit mx-auto">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ahorros en grupo</h3>
                  <p className="text-white/80">
                    Dividí los gastos de combustible, peajes y estacionamiento. Viajá más por menos dinero.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-900/80 to-red-900/80 border-orange-500/30 backdrop-blur-sm hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 w-fit mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Seguridad y reputación verificada</h3>
                  <p className="text-white/80">
                    Perfiles verificados y sistema de reputación para viajar con total tranquilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Eventos Destacados */}
        <section id="eventos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Eventos destacados</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl">
                Viajá a los mejores eventos del país con otros fanáticos
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform">
                <div className="relative">
                  <Image
                    src="/rock-festival.png"
                    width="400"
                    height="200"
                    alt="Festival de Rock"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white">En vivo</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">Festival de Rock Nacional</h3>
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    15 de Marzo
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    Córdoba, Argentina
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform">
                <div className="relative">
                  <Image
                    src="/electronic-festival.png"
                    width="400"
                    height="200"
                    alt="Electronic Music Festival"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-purple-500 text-white">Próximamente</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">Electronic Music Festival</h3>
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    22 de Abril
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    Buenos Aires, Argentina
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform">
                <div className="relative">
                  <Image
                    src="/indie-festival.png"
                    width="400"
                    height="200"
                    alt="Festival Indie"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-green-500 text-white">Disponible</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">Indie Music Showcase</h3>
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />5 de Mayo
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    Rosario, Argentina
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Lo que dicen nuestros usuarios
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl">
                Experiencias reales de viajeros que ya viven la música desde el camino
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-purple-500/30 backdrop-blur-sm hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Increíble experiencia! Conocí gente genial en el viaje a Lollapalooza. El ambiente se vivía desde
                    que subimos al auto."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-2 mr-3">
                      <span className="text-white font-bold text-sm">MJ</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">María José</p>
                      <p className="text-white/60 text-sm">Buenos Aires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-900/80 to-orange-900/80 border-pink-500/30 backdrop-blur-sm hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Ahorré un montón en el viaje al Personal Fest. Además, los chicos del auto tenían el mismo gusto
                    musical que yo!"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 mr-3">
                      <span className="text-white font-bold text-sm">LC</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Lucas</p>
                      <p className="text-white/60 text-sm">Córdoba</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-900/80 to-red-900/80 border-orange-500/30 backdrop-blur-sm hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Super seguro y confiable. Los perfiles verificados me dieron mucha tranquilidad para viajar sola al
                    festival."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2 mr-3">
                      <span className="text-white font-bold text-sm">VS</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Valentina</p>
                      <p className="text-white/60 text-sm">Rosario</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Descargá Movi y empezá tu próxima aventura
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Disponible gratis en iOS y Android. Tu próximo evento te está esperando.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 px-8 py-3"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Descargar para iOS
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Descargar para Android
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-white/60 text-sm">
                <span>⭐ 4.8 en App Store</span>
                <span>•</span>
                <span>⭐ 4.9 en Google Play</span>
                <span>•</span>
                <span>+10,000 viajes realizados</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center">
          <Image src="/movi-logo-clean.png" alt="Movi Logo" width={80} height={26} className="h-6 w-auto mr-2" />
          <p className="text-xs text-white/60">© 2024 Movi. Todos los derechos reservados.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            Privacidad
          </Link>
          <Link href="#" className="text-xs text-white/60 hover:text-white/80 transition-colors">
            Contacto
          </Link>
        </nav>
      </footer>
    </div>
  )
}
