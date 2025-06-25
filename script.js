// Global variables
let selectedEventId = null
let currentUser = {
  name: "Tu Usuario",
  initials: "TU",
  email: "usuario@email.com",
  phone: "+54 11 1234-5678",
  city: "Buenos Aires",
  rating: 4.9,
  trips: 47,
}

let currentChat = null
let notifications = []

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  loadUserData()
  loadNotifications()
  showScreen("home")
  setupEventListeners()
})

// Load user data from localStorage
function loadUserData() {
  const savedUser = localStorage.getItem("moviUser")
  if (savedUser) {
    currentUser = { ...currentUser, ...JSON.parse(savedUser) }
    updateUserInterface()
  }
}

// Save user data to localStorage
function saveUserData() {
  localStorage.setItem("moviUser", JSON.stringify(currentUser))
}

// Update user interface with current user data
function updateUserInterface() {
  const userInitials = document.getElementById("user-initials")
  const userName = document.getElementById("user-name")

  if (userInitials) userInitials.textContent = currentUser.initials
  if (userName) userName.textContent = currentUser.name
}

// Load notifications
function loadNotifications() {
  const savedNotifications = localStorage.getItem("moviNotifications")
  if (savedNotifications) {
    notifications = JSON.parse(savedNotifications)
  } else {
    notifications = [
      {
        id: 1,
        type: "message",
        title: "Nuevo mensaje de María José",
        content: "¡Perfecto! Nos vemos mañana a las 14:00...",
        time: "Hace 5 min",
        unread: true,
        icon: "💬",
      },
      {
        id: 2,
        type: "trip",
        title: "Viaje confirmado",
        content: "Tu viaje al Cosquín Rock ha sido confirmado",
        time: "Hace 1 hora",
        unread: true,
        icon: "🚗",
      },
      {
        id: 3,
        type: "rating",
        title: "Nueva calificación recibida",
        content: "Valentina te calificó con 5 estrellas",
        time: "Ayer",
        unread: false,
        icon: "⭐",
      },
    ]
  }
  updateNotificationBadge()
}

// Save notifications
function saveNotifications() {
  localStorage.setItem("moviNotifications", JSON.stringify(notifications))
}

// Update notification badge
function updateNotificationBadge() {
  const badge = document.querySelector(".nav-badge")
  const unreadCount = notifications.filter((n) => n.unread).length

  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount
      badge.style.display = "flex"
    } else {
      badge.style.display = "none"
    }
  }
}

// Screen navigation
function showScreen(screenName) {
  // Hide all screens
  const screens = document.querySelectorAll(".screen")
  screens.forEach((screen) => screen.classList.remove("active"))

  // Show selected screen
  const targetScreen = document.getElementById(screenName + "-screen")
  if (targetScreen) {
    targetScreen.classList.add("active")
  }

  // Update navigation
  updateNavigation(screenName)

  // Hide notifications if open
  hideNotifications()
}

function updateNavigation(activeScreen) {
  const navButtons = document.querySelectorAll(".nav-btn")
  navButtons.forEach((btn) => btn.classList.remove("active"))

  // Add active class to current nav button
  const navMap = {
    home: 0,
    search: 1,
    chat: 2,
    profile: 3,
  }

  if (navMap[activeScreen] !== undefined) {
    navButtons[navMap[activeScreen]].classList.add("active")
  }
}

// Event selection
function selectEvent(eventId) {
  // Remove previous selection
  const eventOptions = document.querySelectorAll(".event-option")
  eventOptions.forEach((option) => option.classList.remove("selected"))

  // Add selection to clicked event
  const selectedOption = eventOptions[eventId - 1]
  if (selectedOption) {
    selectedOption.classList.add("selected")
    selectedEventId = eventId
  }
}

// Character count for description
function updateCharCount() {
  const textarea = document.getElementById("description")
  const charRemaining = document.getElementById("char-remaining")
  const remaining = 200 - textarea.value.length
  charRemaining.textContent = remaining

  // Change color if approaching limit
  if (remaining < 20) {
    charRemaining.style.color = "#ef4444"
  } else {
    charRemaining.style.color = "#6b7280"
  }
}

// Create trip function
function createTrip() {
  const formData = {
    date: document.getElementById("trip-date").value,
    time: document.getElementById("trip-time").value,
    meetingPlace: document.getElementById("meeting-place").value,
    passengers: document.getElementById("passengers").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    eventId: selectedEventId,
  }

  // Basic validation
  if (!formData.date || !formData.time || !formData.meetingPlace || !selectedEventId) {
    showErrorMessage("Por favor completa todos los campos obligatorios")
    return
  }

  // Show loading
  const createBtn = document.querySelector(".form-actions .btn.primary")
  const stopLoading = showLoading(createBtn)

  // Simulate API call
  setTimeout(() => {
    stopLoading()

    // Add notification
    addNotification({
      type: "trip",
      title: "¡Viaje creado exitosamente!",
      content: "Tu viaje ha sido publicado y otros usuarios pueden solicitarlo",
      icon: "🚗",
    })

    showSuccessMessage("¡Viaje creado exitosamente!")
    resetCreateForm()

    setTimeout(() => {
      showScreen("home")
    }, 1500)
  }, 2000)
}

// Request trip function
function requestTrip() {
  const requestBtn = event.target
  const stopLoading = showLoading(requestBtn)

  setTimeout(() => {
    stopLoading()

    addNotification({
      type: "trip",
      title: "Solicitud enviada",
      content: "El conductor te contactará pronto",
      icon: "📤",
    })

    showSuccessMessage("¡Solicitud enviada! El conductor te contactará pronto.")
  }, 1500)
}

// Chat functions
function openChat(userId) {
  currentChat = userId

  const chatData = {
    maria: {
      name: "María José",
      initials: "MJ",
      status: "En línea",
    },
    lucas: {
      name: "Lucas",
      initials: "LC",
      status: "Visto hace 5 min",
    },
    valentina: {
      name: "Valentina",
      initials: "VS",
      status: "Visto hace 2 horas",
    },
  }

  const chat = chatData[userId]
  if (chat) {
    document.getElementById("current-chat-name").textContent = chat.name
    document.getElementById("current-chat-avatar").textContent = chat.initials
    document.querySelector(".online-status").textContent = chat.status
  }

  showScreen("individual-chat")
}

function sendMessage() {
  const messageInput = document.getElementById("message-input")
  const messageText = messageInput.value.trim()

  if (!messageText) return

  // Add message to chat
  const messagesContainer = document.getElementById("chat-messages")
  const messageElement = document.createElement("div")
  messageElement.className = "message sent"
  messageElement.innerHTML = `
    <div class="message-content">
      <p>${messageText}</p>
      <span class="message-time">${new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}</span>
    </div>
  `

  messagesContainer.appendChild(messageElement)
  messagesContainer.scrollTop = messagesContainer.scrollHeight

  // Clear input
  messageInput.value = ""

  // Simulate response (optional)
  setTimeout(() => {
    const responseElement = document.createElement("div")
    responseElement.className = "message received"
    responseElement.innerHTML = `
      <div class="message-content">
        <p>¡Perfecto! 👍</p>
        <span class="message-time">${new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
    `
    messagesContainer.appendChild(responseElement)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }, 1000)
}

// Notifications
function showNotifications() {
  const overlay = document.getElementById("notifications-overlay")
  overlay.classList.add("active")

  // Mark all as read
  notifications.forEach((n) => (n.unread = false))
  saveNotifications()
  updateNotificationBadge()
}

function hideNotifications() {
  const overlay = document.getElementById("notifications-overlay")
  overlay.classList.remove("active")
}

function addNotification(notification) {
  const newNotification = {
    id: Date.now(),
    time: "Ahora",
    unread: true,
    ...notification,
  }

  notifications.unshift(newNotification)
  saveNotifications()
  updateNotificationBadge()

  // Update notifications panel if open
  updateNotificationsPanel()
}

function updateNotificationsPanel() {
  const notificationsList = document.querySelector(".notifications-list")
  if (!notificationsList) return

  notificationsList.innerHTML = notifications
    .map(
      (notification) => `
    <div class="notification-item ${notification.unread ? "unread" : ""}">
      <div class="notification-icon">${notification.icon}</div>
      <div class="notification-content">
        <h4>${notification.title}</h4>
        <p>${notification.content}</p>
        <span class="notification-time">${notification.time}</span>
      </div>
    </div>
  `,
    )
    .join("")
}

// Profile functions
function editProfile() {
  const newName = prompt("Ingresa tu nombre:", currentUser.name)
  if (newName && newName.trim()) {
    currentUser.name = newName.trim()
    currentUser.initials = newName
      .trim()
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
    saveUserData()
    updateUserInterface()
    showSuccessMessage("Perfil actualizado correctamente")
  }
}

function showSettings() {
  showInfoMessage("Configuración", "Esta funcionalidad estará disponible próximamente")
}

function showHelp() {
  showInfoMessage("Ayuda y Soporte", "Para soporte técnico, contacta a soporte@movi.com.ar")
}

function logout() {
  if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
    localStorage.clear()
    showSuccessMessage("Sesión cerrada correctamente")
    setTimeout(() => {
      location.reload()
    }, 1500)
  }
}

// Utility functions
function showSuccessMessage(message) {
  showMessage(message, "success", "✅")
}

function showErrorMessage(message) {
  showMessage(message, "error", "❌")
}

function showInfoMessage(title, message) {
  showMessage(`${title}: ${message}`, "info", "ℹ️")
}

function showMessage(message, type = "success", icon = "✅") {
  const overlay = document.createElement("div")
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `

  const messageBox = document.createElement("div")
  const bgColor = type === "error" ? "#fee2e2" : type === "info" ? "#e0f2fe" : "white"
  const textColor = type === "error" ? "#dc2626" : type === "info" ? "#0369a1" : "#059669"

  messageBox.style.cssText = `
    background: ${bgColor};
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    max-width: 300px;
    margin: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  `

  messageBox.innerHTML = `
    <div style="font-size: 48px; margin-bottom: 15px;">${icon}</div>
    <h3 style="color: ${textColor}; margin-bottom: 10px; font-size: 16px; line-height: 1.4;">${message}</h3>
  `

  overlay.appendChild(messageBox)
  document.body.appendChild(overlay)

  setTimeout(() => {
    document.body.removeChild(overlay)
  }, 2500)
}

function showLoading(button) {
  const originalText = button.innerHTML
  button.innerHTML = '<div class="loading"></div> Cargando...'
  button.disabled = true

  return () => {
    button.innerHTML = originalText
    button.disabled = false
  }
}

function resetCreateForm() {
  document.getElementById("trip-date").value = ""
  document.getElementById("trip-time").value = ""
  document.getElementById("meeting-place").value = ""
  document.getElementById("passengers").value = "3"
  document.getElementById("price").value = ""
  document.getElementById("description").value = ""

  const eventOptions = document.querySelectorAll(".event-option")
  eventOptions.forEach((option) => option.classList.remove("selected"))
  selectedEventId = null

  document.getElementById("char-remaining").textContent = "200"
  document.getElementById("char-remaining").style.color = "#6b7280"
}

// Setup event listeners
function setupEventListeners() {
  // Message input enter key
  const messageInput = document.getElementById("message-input")
  if (messageInput) {
    messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  }

  // Close notifications on outside click
  const notificationsOverlay = document.getElementById("notifications-overlay")
  if (notificationsOverlay) {
    notificationsOverlay.addEventListener("click", function (e) {
      if (e.target === this) {
        hideNotifications()
      }
    })
  }

  // Auto-focus and formatting
  const dateInput = document.getElementById("trip-date")
  const timeInput = document.getElementById("trip-time")
  const priceInput = document.getElementById("price")
  const textarea = document.getElementById("description")

  if (dateInput && timeInput) {
    dateInput.addEventListener("change", () => timeInput.focus())
  }

  if (priceInput) {
    priceInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "")
    })
  }

  if (textarea) {
    textarea.addEventListener("input", function () {
      this.style.height = "auto"
      this.style.height = this.scrollHeight + "px"
    })
  }

  // Touch feedback for mobile
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.95)"
    })

    button.addEventListener("touchend", function () {
      this.style.transform = "scale(1)"
    })
  })
}

// Initialize notifications panel
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    updateNotificationsPanel()
  }, 100)
})
