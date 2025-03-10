import Footer from "@/ui/layout/Footer";
import Header from "../../ui/layout/Header";
import "../globals.css";
export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full overflow-x-hidden">
      <Header />

      {children}
      <Footer />
    </section>
  );
}
