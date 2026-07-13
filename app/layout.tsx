import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white flex flex-col">
            <Navigation />
            <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
