"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Users,
  Car,
  DollarSign,
  ArrowLeft,
  Plus,
  Search,
  User,
  Home,
  MessageCircle,
  Bell,
} from "lucide-react"
import Image from "next/image"

export default function MobileApp() {
  const [currentScreen, setCurrentScreen] = useState("home")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    meetingPlace: "",
    description: "",
    maxPassengers: "3",
    pricePerPerson: "",
  })

  const events = [
    {
      id: 1,
      name: "Cosquín Rock 2024",
      date: "15 Mar",
      location: "Córdoba",
      image: "/rock-festival.png",
      genre: "Rock",
      status: "disponible",
    },
    {
      id: 2,
      name: "Electronic Festival",
      date: "22 Abr",
      location: "Buenos Aires",
      image: "/electronic-festival.png",
      genre: "Electronic",
      status: "próximamente",
    },
    {
      id: 3,
      name: "Indie Showcase",
      date: "5 May",
      location: "Rosario",
      image: "/indie-festival.png",
      genre: "Indie",
      status: "disponible",
    },
  ]

  const trips = [
    {
      id: 1,
      event: "Cosquín Rock 2024",
      driver: "María José",
      date: "15 Mar - 14:00",
      from: "Buenos Aires",
      to: "Córdoba",
      price: "$2,500",
      seats: "2/4",
      rating: 4.9,
    },
    {
      id: 2,
      event: "Electronic Festival",
      driver: "Lucas",
      date: "22 Abr - 16:30",
      from: "La Plata",
      to: "Buenos Aires",
      price: "$1,200",
      seats: "1/3",
      rating: 4.8,
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const remainingChars = 200 - formData.description.length

  const renderHomeScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">¡Hola!</h1>
          <p className="text-gray-600">¿A dónde vamos hoy?</p>
        </div>
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => setCurrentScreen("create")}
          className="h-20 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 flex-col space-y-2"
        >
          <Plus className="h-6 w-6" />
          <span>Crear Viaje</span>
        </Button>
        <Button
          onClick={() => setCurrentScreen("search")}
          variant="outline"
          className="h-20 flex-col space-y-2 border-2"
        >
          <Search className="h-6 w-6" />
          <span>Buscar Viaje</span>
        </Button>
      </div>

      {/* Eventos Destacados */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Eventos Destacados</h2>
        <div className="space-y-3">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-20 h-20 relative">
                    <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.name}</h3>
                        <p className="text-sm text-gray-600">
                          {event.date} • {event.location}
                        </p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {event.genre}
                        </Badge>
                      </div>
                      <Badge variant={event.status === "disponible" ? "default" : "secondary"} className="text-xs">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Viajes Recientes */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Viajes Disponibles</h2>
        <div className="space-y-3">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{trip.event}</h3>
                    <p className="text-sm text-gray-600">por {trip.driver}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{trip.price}</p>
                    <p className="text-xs text-gray-500">por persona</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>
                    {trip.from} → {trip.to}
                  </span>
                  <span>{trip.seats} asientos</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">{trip.date}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-1">⭐ {trip.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderCreateScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen("home")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-900">Crear Viaje</h1>
      </div>

      {/* Form */}
      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Fecha</label>
              <div className="relative">
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Hora</label>
              <div className="relative">
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="pr-10"
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Meeting Place */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Lugar de encuentro</label>
            <div className="relative">
              <Input
                placeholder="Ej: Plaza San Martín, Buenos Aires..."
                value={formData.meetingPlace}
                onChange={(e) => handleInputChange("meetingPlace", e.target.value)}
                className="pr-10"
              />
              <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Event Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Evento</label>
            <div className="space-y-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedEvent === event.id ? "border-pink-500 bg-pink-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                      <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{event.name}</h3>
                      <p className="text-sm text-gray-600">
                        {event.date} • {event.location}
                      </p>
                    </div>
                    <Music className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Pasajeros</label>
              <div className="relative">
                <Input
                  type="number"
                  min="1"
                  max="4"
                  value={formData.maxPassengers}
                  onChange={(e) => handleInputChange("maxPassengers", e.target.value)}
                  className="pr-10"
                />
                <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Precio por persona</label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="2500"
                  value={formData.pricePerPerson}
                  onChange={(e) => handleInputChange("pricePerPerson", e.target.value)}
                  className="pr-10"
                />
                <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Descripción</label>
            <Textarea
              placeholder="Ej: Viaje al Cosquín Rock! Salimos temprano, buena música en el auto..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              maxLength={200}
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">{remainingChars} caracteres restantes</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 h-12"
              onClick={() => {
                // Handle create trip
                alert("¡Viaje creado exitosamente!")
                setCurrentScreen("home")
              }}
            >
              <Car className="mr-2 h-5 w-5" />
              Crear Viaje
            </Button>
            <Button variant="outline" className="w-full h-12" onClick={() => setCurrentScreen("home")}>
              Cancelar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSearchScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen("home")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-900">Buscar Viajes</h1>
      </div>

      {/* Search Filters */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="relative">
            <Input placeholder="¿A qué evento querés ir?" className="pr-10" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input type="date" placeholder="Fecha" />
            <Input placeholder="Desde" />
          </div>
        </CardContent>
      </Card>

      {/* Available Trips */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Viajes Disponibles</h2>
        <div className="space-y-4">
          {trips.map((trip) => (
            <Card key={trip.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{trip.event}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{trip.driver.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-gray-600">{trip.driver}</span>
                      <span className="text-sm text-gray-600">⭐ {trip.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{trip.price}</p>
                    <p className="text-xs text-gray-500">por persona</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      📍 {trip.from} → {trip.to}
                    </span>
                    <span className="text-gray-600">🕐 {trip.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">👥 {trip.seats} disponibles</span>
                    <Badge variant="secondary" className="text-xs">
                      Verificado
                    </Badge>
                  </div>
                </div>

                <Button
                  className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => alert("¡Solicitud enviada!")}
                >
                  Solicitar Viaje
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen">
      {/* Mobile Container */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
        {/* Status Bar Simulation */}
        <div className="bg-white px-4 py-2 flex justify-between items-center text-xs font-medium">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-white px-4 py-4 shadow-sm">
          <Image src="/movi-logo-clean.png" alt="Movi Logo" width={100} height={32} className="h-8 w-auto" />
        </div>

        {/* Main Content */}
        <div className="p-4 pb-20">
          {currentScreen === "home" && renderHomeScreen()}
          {currentScreen === "create" && renderCreateScreen()}
          {currentScreen === "search" && renderSearchScreen()}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200">
          <div className="flex justify-around py-2">
            <Button
              variant="ghost"
              size="sm"
              className={`flex-col space-y-1 h-auto py-2 ${currentScreen === "home" ? "text-pink-500" : "text-gray-600"}`}
              onClick={() => setCurrentScreen("home")}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs">Inicio</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`flex-col space-y-1 h-auto py-2 ${currentScreen === "search" ? "text-pink-500" : "text-gray-600"}`}
              onClick={() => setCurrentScreen("search")}
            >
              <Search className="h-5 w-5" />
              <span className="text-xs">Buscar</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col space-y-1 h-auto py-2 text-gray-600">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs">Chats</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col space-y-1 h-auto py-2 text-gray-600">
              <User className="h-5 w-5" />
              <span className="text-xs">Perfil</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
