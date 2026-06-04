import Link from "next/link";
import ServiceStatusTracker from "@/components/ServiceStatusTracker";

export const metadata = {
  title: "Cek Status Servis | Gerai Ncek",
  description: "Pantau status perbaikan perangkat Anda secara real-time dengan nomor nota.",
};

export default function CekStatusPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Cek Status Servis</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Pantau progress perbaikan perangkat Anda secara real-time. Masukkan nomor nota untuk melihat status terkini.
          </p>
        </div>
      </section>

      {/* Status Tracker Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ServiceStatusTracker />

          {/* Info Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 border border-blue-200">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nomor Nota Anda</h3>
              <p className="text-gray-700">Lihat nomor nota di bagian bukti pembayaran atau tanya ke teknisi kami</p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 border border-green-200">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Update Real-Time</h3>
              <p className="text-gray-700">Status akan diperbarui setiap kali ada perubahan pada perbaikan Anda</p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 border border-orange-200">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Notifikasi</h3>
              <p className="text-gray-700">Kami akan menghubungi Anda via WhatsApp saat perbaikan selesai</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Pertanyaan Umum</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Berapa lama proses perbaikan?</h3>
                <p className="text-gray-600">Rata-rata perbaikan handphone 1-3 hari kerja, laptop 2-5 hari kerja tergantung kompleksitas masalah.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Apakah ada biaya konsultasi?</h3>
                <p className="text-gray-600">Konsultasi gratis! Kami akan memberikan estimasi biaya setelah diagnostic selesai.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Apa jika tidak puas dengan hasilnya?</h3>
                <p className="text-gray-600">Kami memberikan garansi service selama 30 hari. Jika ada masalah, hubungi kami segera.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Belum Punya Nomor Nota?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk membawa perangkat Anda ke Gerai Ncek
          </p>
          <a
            href="https://wa.me/628xxxxxxxxxx"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 hover:bg-purple-50 transition"
          >
            💬 Hubungi Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
