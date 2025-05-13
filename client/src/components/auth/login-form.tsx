"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Icons } from "@/components/ui/icons"

interface LoginFormProps {
  onSuccess?: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Simulate authentication
    try {
      // This is where you would normally call your authentication API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email === "user@example.com" && password === "password") {
        if (onSuccess) {
          onSuccess()
        } else {
          router.push("/dashboard")
        }
      } else {
        setError("Invalid email or password")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          autoComplete="email"
          disabled={isLoading}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-xs">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          disabled={isLoading}
          required
        />
      </div>

      {error && <div className="text-xs text-red-500">{error}</div>}

      <div className="flex items-center space-x-2">
        <Checkbox id="remember" name="remember" />
        <Label htmlFor="remember" className="text-xs font-medium leading-none">
          Remember me
        </Label>
      </div>

      <Button type="submit" className="w-full text-sm py-1.5" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-3 w-3 animate-spin" />}
        Sign in
      </Button>
    </form>
  )
}
