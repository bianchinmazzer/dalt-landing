"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CartIcon from "./CartIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar sticky w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-800 shadow-lg"
          : "bg-primary-900 shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/dalt-logo.png"
              alt="DALT Logo"
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#inicio"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/productos"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/mayoristas"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Mayoristas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/tienda"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Tienda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#contacto"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <CartIcon />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent-400 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <Link
              href="/#inicio"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/tienda"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link
              href="/mayoristas"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Mayoristas
            </Link>
            <Link
              href="/#contacto"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-4 py-3">
              <CartIcon />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
