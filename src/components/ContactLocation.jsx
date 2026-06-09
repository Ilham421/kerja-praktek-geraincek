import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ExternalLink,
  PhoneCall,
} from "lucide-react";

export default function ContactLocation() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Punya pertanyaan atau ingin booking servis? Tim kami siap
                membantu Anda dengan layanan terbaik.
              </p>
            </div>

            <div className="space-y-6">
              {/* Telepon */}
              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telepon</h3>
                  <p className="text-gray-600">+62 857-1004-3275</p>
                  <a
                    href="tel:+6285710043275"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Hubungi Sekarang
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">Chat & Tanya Langsung</p>
                  <a
                    href="https://wa.me/6285710043275"
                    className="text-sm text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Buka WhatsApp
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Jam Operasional
                  </h3>
                  <p className="text-gray-600">
                    Senin - Sabtu: 09:00 - 18:00
                    <br />
                    Minggu: 10:00 - 16:00
                  </p>
                </div>
              </div>

              {/* Lokasi */}
              <div className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lokasi</h3>
                  <p className="text-gray-600">
                    Perum Mustika Tigaraksa
                    <br />
                    Jl. Mustika Gg. Durian 4 No.31 Blok C.30
                    <br />
                    RT.07/RW.07, Pasir Nangka
                    <br />
                    Kec. Tigaraksa, Kab. Tangerang
                    <br />
                    Banten 15720
                  </p>
                  <a
                    href="https://maps.app.goo.gl/eA5yXKZ6zV25FdQc8?g_st=aw"
                    target="_blank"
                    className="text-sm text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Lihat di Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-14 h-14 mx-auto mb-4 text-red-500" />
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  Gerai Ncek
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perum Mustika Tigaraksa, Blok C.30 No.31
                </p>
                <a
                  href="https://maps.app.goo.gl/eA5yXKZ6zV25FdQc8?g_st=aw"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  <MapPin className="w-4 h-4" /> Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
