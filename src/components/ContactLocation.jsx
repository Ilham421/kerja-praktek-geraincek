export default function ContactLocation() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Punya pertanyaan atau ingin booking servis? Tim kami siap membantu Anda dengan layanan terbaik.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telepon</h3>
                  <p className="text-gray-600">08xx-xxxx-xxxx</p>
                  <a href="tel:08xxxxxxxxxx" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Hubungi Sekarang →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">Chat & Tanya Langsung</p>
                  <a
                    href="https://wa.me/628xxxxxxxxxx"
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    Buka WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <span className="text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                  <p className="text-gray-600">
                    Senin - Sabtu: 09:00 - 18:00<br />
                    Minggu: 10:00 - 16:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lokasi</h3>
                  <p className="text-gray-600">Jl. Utama No. XX, Rumah Usaha</p>
                  <a
                    href="https://maps.google.com"
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Lihat di Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl mb-4 inline-block">📍</span>
                <h3 className="font-semibold text-gray-900 mb-2">Gerai Ncek</h3>
                <p className="text-gray-600 text-sm mb-4">Google Maps Integration</p>
                <a
                  href="https://maps.google.com"
                  className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Buka Lokasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
