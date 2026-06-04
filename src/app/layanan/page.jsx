import Link from "next/link";

export const metadata = {
  title: "Layanan Servis | Gerai Ncek",
  description: "Layanan reparasi handphone, laptop, dan penjualan sparepart profesional.",
};

export default function LayananPage() {
  const services = [
    {
      icon: "📱",
      title: "Reparasi Handphone",
      categories: ["Layar Pecah", "Baterai Rusak", "Konektor Charger", "Masalah Software"],
    },
    {
      icon: "💻",
      title: "Reparasi Laptop",
      categories: ["Layar Rusak", "Keyboard Error", "Hard Drive", "RAM Upgrade"],
    },
    {
      icon: "🔋",
      title: "Penggantian Sparepart",
      categories: ["LCD/Layar", "Baterai", "Casing", "Charging Port"],
    },
    {
      icon: "⚡",
      title: "Upgrade & Maintenance",
      categories: ["RAM Upgrade", "SSD Install", "Thermal Paste", "Cleaning Service"],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Layanan Servis Kami</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Penyediaan layanan reparasi profesional untuk handphone dan laptop dengan teknisi bersertifikat dan spare part original.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border-2 border-gray-100 bg-white p-8 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.categories.map((cat) => (
                    <li key={cat} className="flex gap-2">
                      <span>•</span>
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
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Butuh Bantuan? Hubungi Kami Sekarang
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/628xxxxxxxxxx"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 transition"
            >
              💬 Chat WhatsApp
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-900 hover:bg-gray-100 transition"
            >
              Formulir Kontak
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
