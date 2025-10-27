"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function MicrosoftLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Microsoft Logo */}
        <div className="mb-8">
          <svg className="h-6 w-auto" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Microsoft Four Squares Logo */}
            <rect x="0" y="0" width="10" height="10" fill="#F25022" />
            <rect x="12" y="0" width="10" height="10" fill="#7FBA00" />
            <rect x="0" y="12" width="10" height="10" fill="#00A4EF" />
            <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Sign in</h1>
        <p className="text-sm text-gray-600 mb-6">to your Microsoft account</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email, phone, or Skype"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-900 placeholder-gray-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-900 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-sm text-sm transition-colors disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mb-6">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline font-semibold">
            Create one
          </a>
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 border-t border-gray-200 pt-6">
          <a href="#" className="hover:text-primary">
            Can't access your account?
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-primary">
            Privacy & cookies
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-primary">
            Legal
          </a>
        </div>
      </div>
    </div>
  )
}
