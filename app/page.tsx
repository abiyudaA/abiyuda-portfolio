// Import server components normally
import Footer from "@/components/footer";
import ClientWrapper from "@/components/client-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <ClientWrapper />
      <Footer />
    </main>
  );
}
