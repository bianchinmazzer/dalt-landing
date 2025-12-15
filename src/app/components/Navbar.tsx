"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-800/95 backdrop-blur-navbar shadow-lg"
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
              src="/dalt-logo.jpg"
              alt="DALT Logo"
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#por-que-elegirnos"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              ¿Por qué elegirnos?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#como-funciona"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Cómo funciona
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              href="/productos"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="#contacto"
              className="text-white hover:text-accent-400 transition-colors relative group font-medium"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
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
            <a
              href="#inicio"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#por-que-elegirnos"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Por qué elegirnos?
            </a>
            <a
              href="#como-funciona"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo funciona
            </a>
            <Link
              href="/productos"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <a
              href="#contacto"
              className="block py-3 text-white hover:text-accent-400 hover:bg-primary-800 px-4 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
