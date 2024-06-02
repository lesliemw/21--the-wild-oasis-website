import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = { title: "The Wild Oasis" };
import "@/app/_styles/globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-900 text-gray-50 min-h-screen ">
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
        <footer>Copyright lesliemw</footer>
      </body>
    </html>
  );
}

export default RootLayout;
