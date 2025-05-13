"use client"

import { useState, useEffect } from "react"

interface PasswordStrengthIndicatorProps {
  password: string
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const [strength, setStrength] = useState(0)
  const [message, setMessage] = useState("")

  useEffect(() => {
    calculateStrength(password)
  }, [password])

  const calculateStrength = (password: string) => {
    let score = 0

    // Length check
    if (password.length >= 8) score += 1
    if (password.length >= 12) score += 1

    // Complexity checks
    if (/[A-Z]/.test(password)) score += 1 // Has uppercase
    if (/[a-z]/.test(password)) score += 1 // Has lowercase
    if (/[0-9]/.test(password)) score += 1 // Has number
    if (/[^A-Za-z0-9]/.test(password)) score += 1 // Has special char

    // Normalize to 0-100
    const normalizedScore = Math.min(Math.floor((score / 6) * 100), 100)
    setStrength(normalizedScore)

    // Set message based on strength
    if (normalizedScore < 30) setMessage("Weak")
    else if (normalizedScore < 60) setMessage("Fair")
    else if (normalizedScore < 80) setMessage("Good")
    else setMessage("Strong")
  }

  const getColor = () => {
    if (strength < 30) return "bg-red-500"
    if (strength < 60) return "bg-yellow-500"
    if (strength < 80) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
    <div className="space-y-1">
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${getColor()} transition-all duration-300`} style={{ width: `${strength}%` }} />
      </div>
      <p className="text-xs text-muted-foreground">
        Password strength: <span className="font-medium">{message}</span>
      </p>
    </div>
  )
}
