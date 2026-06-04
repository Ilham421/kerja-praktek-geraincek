import NavigationWrapper from "@/components/NavigationWrapper";
import "./globals.css";

export const metadata = {
  title: "Gerai Ncek | Reparasi HP & Laptop Profesional",
  description: "Solusi service terpercaya di Tangerang Selatan dengan garansi resmi dan harga transparan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased bg-white text-gray-900">
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}