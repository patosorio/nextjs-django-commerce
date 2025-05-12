'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative">
      {/* Floating Logo Container */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-20">
        <Image
          src="/images/logos/logo-circle.png"
          alt="Naturwest Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <footer className="bg-[#1D1D1D] text-gray-300 pt-24 pb-8 font-freeman text-[15px]">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Description */}
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <p className="mb-6">
                Naturwest, tu distribuidor de CBD. Producto único y de calidad, obtenido mediante prácticas
                sostenibles. Libre de pesticidas y aditivos. Las mejores variantes genéticas.
              </p>
              <p>
                Los textos del sitio web no reemplazan el consejo profesional de un médico o farmacéutico y no
                pueden utilizarse como base para un diagnóstico independiente ni para el inicio, modificación o
                finalización del tratamiento de una enfermedad
              </p>
            </div>

            {/* Right Side - Info and Contact */}
            <div className="w-full lg:w-3/4 lg:flex lg:justify-end">
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
                {/* Information Links */}
                <div>
                  <h3 className="text-[#9FE870] text-xl font-freeman mb-4">Información</h3>
                  <ul className="space-y-2">
                    <li><Link href="/aviso-legal" className="hover:text-[#9FE870] transition-colors">Aviso Legal</Link></li>
                    <li><Link href="/politica-cookies" className="hover:text-[#9FE870] transition-colors">Política de Cookies</Link></li>
                    <li><Link href="/politica-privacidad" className="hover:text-[#9FE870] transition-colors">Política de Privacidad</Link></li>
                    <li><Link href="/condiciones-generales" className="hover:text-[#9FE870] transition-colors">Condiciones Generales</Link></li>
                    <li><Link href="/preguntas-frecuentes" className="hover:text-[#9FE870] transition-colors">Preguntas Frecuentes</Link></li>
                    <li><Link href="/analisis" className="hover:text-[#9FE870] transition-colors">Análisis</Link></li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-[#9FE870] text-xl font-freeman mb-4">Contacto</h3>
                  <div className="space-y-2">
                    <p>+34 687 73 15 99</p>
                    <p>hola@naturwest.com</p>
                    <div className="flex items-center space-x-4 mt-4">
                      <Image 
                        src="/images/logos/mastercard.webp" 
                        alt="Mastercard" 
                        width={50} 
                        height={20}
                        className="object-contain"
                      />
                      <Image 
                        src="/images/logos/visa.webp" 
                        alt="Visa" 
                        width={50} 
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col items-center space-y-4">
              <p>Copyright © 2025 - NaturWest | Programación: www.patosorio.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
