import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Mail } from "lucide-react"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-sm mx-auto my-8 mb-24">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl font-bold text-center">Create an account</CardTitle>
        <CardDescription className="text-center text-sm">Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <RegisterForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full" size="sm">
            <Github className="mr-2 h-3 w-3" />
            Github
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            <Mail className="mr-2 h-3 w-3" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col pt-0">
        <div className="text-xs text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
