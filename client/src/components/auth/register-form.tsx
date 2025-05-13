"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Icons } from "@/components/ui/icons"
import { PasswordStrengthIndicator } from "./password-strength-indicator"

interface RegisterFormProps {
  onSuccess?: () => void
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (passwordConfirm) {
      setPasswordsMatch(e.target.value === passwordConfirm)
    }
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value)
    setPasswordsMatch(password === e.target.value)
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (password !== passwordConfirm) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const termsAccepted = formData.get("terms") === "on"

    if (!termsAccepted) {
      setError("You must accept the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate registration
    try {
      // This is where you would normally call your registration API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (onSuccess) {
        onSuccess()
      } else {
        router.push("/login?registered=true")
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
        <Label htmlFor="name" className="text-xs">
          Full Name
        </Label>
        <Input id="name" name="name" placeholder="John Doe" autoComplete="name" disabled={isLoading} required />
      </div>

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
          value={password}
          onChange={handlePasswordChange}
          autoComplete="new-password"
          disabled={isLoading}
          required
        />
        {password && <PasswordStrengthIndicator password={password} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-xs">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={passwordConfirm}
          onChange={handleConfirmPasswordChange}
          autoComplete="new-password"
          disabled={isLoading}
          required
        />
        {passwordConfirm && !passwordsMatch && <p className="text-xs text-red-500">Passwords do not match</p>}
      </div>

      {error && <div className="text-xs text-red-500">{error}</div>}

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" name="terms" />
        <Label htmlFor="terms" className="text-xs font-medium leading-none">
          I agree to the{" "}
          <Link href="/terms" className="text-primary hover:underline">
            terms and conditions
          </Link>
        </Label>
      </div>

      <Button type="submit" className="w-full text-sm py-1.5" disabled={isLoading}>
        {isLoading && <Icons.spinner className="mr-2 h-3 w-3 animate-spin" />}
        Create account
      </Button>
    </form>
  )
}

const Link = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a href={href} className={className}>
    {children}
  </a>
)
