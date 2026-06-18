"use client";

import { useEffect } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactLocation from "@/components/ContactLocation";
import AOS from "aos";
import "aos/dist/aos.css";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

export default function KontakPage() {
  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-out",
      offset: 50,
    });
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1
            className="text-4xl font-bold text-white mb-4"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Hubungi Kami
          </h1>
          <p
            className="text-lg text-red-100 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ada pertanyaan atau ingin booking servis? Tim kami siap membantu
            Anda melalui berbagai channel komunikasi.
          </p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285710043275"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white p-8 border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4 group-hover:scale-110 transition">
                <MessageCircle className="w-10 h-10 text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Chat langsung untuk pertanyaan cepat dan booking servis
              </p>
              <span className="text-green-600 font-semibold">
                Buka WhatsApp →
              </span>
            </a>

            {/* Telepon */}
            <a
              href="tel:+6285710043275"
              className="group rounded-2xl bg-white p-8 border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4 group-hover:scale-110 transition">
                <Phone className="w-10 h-10 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600 mb-4">
                Hubungi kami langsung untuk mendiskusikan kebutuhan Anda
              </p>
              <span className="text-blue-600 font-semibold">Hubungi →</span>
            </a>

            {/* Kunjungi Toko */}
            <Link
              href="https://maps.app.goo.gl/eA5yXKZ6zV25FdQc8?g_st=aw"
              target="_blank"
              className="group rounded-2xl bg-white p-8 border-2 border-gray-100 hover:border-orange-500 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-4 group-hover:scale-110 transition">
                <MapPin className="w-10 h-10 text-orange-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kunjungi Toko
              </h3>
              <p className="text-gray-600 mb-4">
                Datang langsung ke toko kami untuk konsultasi dan service
              </p>
              <span className="text-orange-600 font-semibold">
                Lihat Lokasi →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20" data-aos="fade-up">
        <ContactLocation />
      </section>

      {/* Contact Form */}
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Kirim Pesan Langsung
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Isi formulir berikut dan tim kami akan menghubungi Anda secepatnya
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" /> Jam Operasional
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Hari Kerja</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Senin - Jumat: 09:00 - 18:00</p>
                  <p>Sabtu: 09:00 - 17:00</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Hari Libur</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Minggu: 10:00 - 16:00</p>
                  <p>Libur Nasional: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
