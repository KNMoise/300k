"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Notification, type NotificationProps } from "./notification"

interface NotificationContextType {
  showNotification: (notification: Omit<NotificationProps, "id" | "onClose">) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const showNotification = (notification: Omit<NotificationProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification: NotificationProps = {
      ...notification,
      id,
      onClose: (id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      },
    }
    setNotifications((prev) => [...prev, newNotification])
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider")
  }
  return context
}
