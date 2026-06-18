"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Smartphone,
  Laptop,
  BatteryWarning,
  Zap,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export default function LayananPage() {
  // Inisialisasi AOS di komponen ini
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-out",
      offset: 50,
    });
    // Refresh AOS setelah inisialisasi ulang
    AOS.refresh();
  }, []);

  const services = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Reparasi Handphone",
      categories: [
        "Layar / LCD Pecah",
        "Baterai Rusak / Bocor",
        "Konektor Charger",
        "IC Power & Masalah Software",
      ],
    },
    {
      icon: <Laptop className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Reparasi Laptop",
      categories: [
        "Layar Rusak / Bergaris",
        "Keyboard Error / Mati",
        "Hard Drive / SSD Upgrade",
        "Overheat & Thermal Paste",
      ],
    },
    {
      icon: <BatteryWarning className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Penggantian Sparepart",
      categories: [
        "LCD / Layar Original",
        "Baterai Original",
        "Casing & Body",
        "Charging Port / Konektor",
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Upgrade & Maintenance",
      categories: [
        "RAM Upgrade",
        "SSD Install",
        "Cleaning Service",
        "Optimasi Software",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1
            className="text-4xl font-bold text-white mb-4"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Layanan Servis Kami
          </h1>
          <p
            className="text-lg text-blue-100 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Penyediaan layanan reparasi profesional untuk handphone dan laptop
            dengan teknisi bersertifikat dan spare part original.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-2xl border-2 border-gray-100 bg-white p-8 hover:shadow-lg transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.categories.map((cat) => (
                    <li key={cat} className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Butuh Bantuan? Hubungi Kami Sekarang
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/6285710043275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 transition"
            >
              <MessageCircle className="w-5 h-5" /> Chat WhatsApp
            </a>
            <Link
              href="/#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-900 hover:bg-gray-100 transition"
            >
              <PhoneCall className="w-5 h-5" /> Formulir Kontak
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
