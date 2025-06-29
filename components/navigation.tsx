"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { QuoteModal } from "@/components/quote-modal"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-navy-900 text-gold-400 p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-xl font-bold">PG</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">Peto Group</div>
              <div className="text-xs text-gold-600 font-medium tracking-wide">Manufacturing Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors duration-300 relative group focus-visible"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-navy-700 hover:text-gold-600 font-medium transition-colors duration-300 group focus-visible">
                Products{" "}
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-gray-200 shadow-xl">
                <DropdownMenuItem asChild>
                  <Link href="/products" className="hover:bg-gold-50 hover:text-gold-700 focus-visible">
                    All Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/products#kitchen-cleaning"
                    className="hover:bg-gold-50 hover:text-gold-700 focus-visible"
                  >
                    Kitchen & Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#laundry" className="hover:bg-gold-50 hover:text-gold-700 focus-visible">
                    Laundry Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/products#personal-hygiene"
                    className="hover:bg-gold-50 hover:text-gold-700 focus-visible"
                  >
                    Personal Hygiene
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#personal-care" className="hover:bg-gold-50 hover:text-gold-700 focus-visible">
                    Personal Care
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#industrial" className="hover:bg-gold-50 hover:text-gold-700 focus-visible">
                    Industrial Solutions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors duration-300 relative group focus-visible"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors duration-300 relative group focus-visible"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <QuoteModal>
              <Button className="modern-button text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-visible">
                Get Quote
              </Button>
            </QuoteModal>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gold-50 transition-colors duration-300 focus-visible"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-navy-700" /> : <Menu className="h-6 w-6 text-navy-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-navy-700 hover:text-gold-600 font-medium py-2 px-4 hover:bg-gold-50 transition-all duration-300 focus-visible"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-navy-700 hover:text-gold-600 font-medium py-2 px-4 hover:bg-gold-50 transition-all duration-300 focus-visible"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-navy-700 hover:text-gold-600 font-medium py-2 px-4 hover:bg-gold-50 transition-all duration-300 focus-visible"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-navy-700 hover:text-gold-600 font-medium py-2 px-4 hover:bg-gold-50 transition-all duration-300 focus-visible"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <QuoteModal>
                <Button
                  className="modern-button text-black font-semibold w-fit mx-4 focus-visible"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Button>
              </QuoteModal>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
