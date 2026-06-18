import Link from "next/link";
import ServiceStatusTracker from "@/components/ServiceStatusTracker";
import ContactLocation from "@/components/ContactLocation";
import ContactForm from "@/components/ContactForm";
import {
  Wrench,
  Smartphone,
  ShoppingCart,
  MessageCircle,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Service Handphone & Laptop",
    description:
      "Perbaikan layar, baterai, speaker, konektor charger, dan masalah software/booting.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Penjualan Sparepart",
    description:
      "LCD, baterai, casing, kaca anti gores, charger, dan aksesoris original/aftermarket.",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Jual Beli Unit",
    description:
      "Beli dan jual handphone bekas/baru dalam berbagai kondisi dengan harga wajar.",
  },
  {
    icon: <MessageCircle className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Konsultasi Gratis",
    description:
      "Informasi layanan, estimasi biaya, dan saran perawatan untuk pelanggan baru.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 mb-4 items-center gap-1">
                <Zap className="w-4 h-4" /> Solusi Service Terpercaya
              </div>
              <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
                Reparasi HP & Laptop Profesional
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Gerai Ncek menyediakan layanan reparasi berkualitas tinggi dengan
              teknisi berpengalaman, garansi resmi, dan harga transparan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/6285710043275"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition shadow-lg"
              >
                <MessageCircle className="w-5 h-5" /> Konsultasi WhatsApp
              </a>
              <Link
                href="/cek-status"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Cek Status Servis
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-600">
              {[
                "Garansi Resmi",
                "Teknisi Berpengalaman",
                "Harga Transparan",
                "Konsultasi Gratis",
              ].map((text) => (
                <div key={text} className="flex gap-2 items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-2xl">
              <div className="rounded-2xl bg-white p-8 shadow-lg space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Kenapa Pilih Kami?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      n: 1,
                      t: "Eksper 2+ Tahun",
                      d: "Ratusan perangkat sukses diperbaiki",
                    },
                    {
                      n: 2,
                      t: "Suku Cadang Ori",
                      d: "Kualitas terjamin untuk jangka panjang",
                    },
                    {
                      n: 3,
                      t: "Proses Cepat",
                      d: "Banyak servis selesai di hari yang sama",
                    },
                  ].map((item) => (
                    <div key={item.n} className="flex gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">
                          {item.n}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.t}</p>
                        <p className="text-sm text-gray-600">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mb-10 md:mb-16 space-y-4 text-center"
            data-aos="fade-up"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Layanan Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Solusi Lengkap Perangkat Anda
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-2xl border-2 border-gray-100 bg-white p-8 text-center transition hover:-translate-y-2 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/stok"
              className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
            >
              Lihat Produk & Sparepart <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900">
                Reputasi Terpercaya Sejak 2023
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Berawal dari jasa private hingga kini menjadi Gerai Ncek, kami
                berkomitmen memberikan hasil terbaik untuk menjaga kepercayaan
                pelanggan baru maupun lama.
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {[
                "Garansi Resmi",
                "Teknisi Bersertifikat",
                "Suku Cadang Original",
                "Tanpa Biaya Tersembunyi",
              ].map((text, index) => (
                <div
                  key={text}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="p-4 rounded-lg bg-blue-50 border border-blue-100 font-medium text-gray-800 flex items-center gap-2"
                >
                  <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Tracker */}
      <section
        id="status"
        className="bg-gradient-to-br from-blue-50 to-white py-20"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pantau Status Servis
          </h2>
          <p className="text-gray-600 mb-12">
            Masukkan nomor nota Anda untuk mengecek progres perbaikan.
          </p>
          <ServiceStatusTracker />
        </div>
      </section>

      {/* Contact & Location */}
      <section id="kontak" className="py-20 bg-white" data-aos="fade-up">
        <ContactLocation />
        <div className="mt-20 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Kirim Pesan Langsung
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
