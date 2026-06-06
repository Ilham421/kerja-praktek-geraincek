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
                  <p className="text-gray-600">+62 857-1004-3275</p>
                  <a href="tel:+6285710043275" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
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
                    href="https://wa.me/6285710043275"
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
                  <p className="text-gray-600">
                    Perum Mustika Tigaraksa Blok C.30 No.31<br />
                    Ds. Pasir Nangka, Kec. Tigaraksa<br />
                    Kab. Tangerang – Banten 15720
                  </p>
                  <a
                    href="https://maps.app.goo.gl/PmbCrkYapda7gFqp8"
                    target="_blank"
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Lihat di Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d106.5!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwNsKwMzAnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            ></iframe>
            <div className="p-4 bg-white text-center">
              <a
                href="https://maps.app.goo.gl/PmbCrkYapda7gFqp8"
                target="_blank"
                className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                📍 Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}