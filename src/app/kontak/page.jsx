import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactLocation from "@/components/ContactLocation";

export const metadata = {
  title: "Hubungi Kami | Gerai Ncek",
  description: "Hubungi Gerai Ncek melalui berbagai channel untuk konsultasi service dan pertanyaan lainnya.",
};

export default function KontakPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h1>
          <p className="text-lg text-red-100 max-w-2xl">
            Ada pertanyaan atau ingin booking servis? Tim kami siap membantu Anda melalui berbagai channel komunikasi.
          </p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <a
              href="https://wa.me/628xxxxxxxxxx"
              className="group rounded-2xl bg-white p-8 border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Chat langsung untuk pertanyaan cepat dan booking servis</p>
              <span className="text-green-600 font-semibold">Buka WhatsApp →</span>
            </a>

            <a
              href="tel:08xxxxxxxxxx"
              className="group rounded-2xl bg-white p-8 border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600 mb-4">Hubungi kami langsung untuk mendiskusikan kebutuhan Anda</p>
              <span className="text-blue-600 font-semibold">Hubungi →</span>
            </a>

            <div className="group rounded-2xl bg-white p-8 border-2 border-gray-100 hover:border-orange-500 hover:shadow-lg transition">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kunjungi Toko</h3>
              <p className="text-gray-600 mb-4">Datang langsung ke toko kami untuk konsultasi dan service</p>
              <span className="text-orange-600 font-semibold">Lihat Lokasi →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20">
        <ContactLocation />
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
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
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Jam Operasional</h2>
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
