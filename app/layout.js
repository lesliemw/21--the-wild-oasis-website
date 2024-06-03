import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = {
  title: {
    template: "%s  |  The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};
import "@/app/_styles/globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen ">
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
        <footer>&copy; lesliemw</footer>
      </body>
    </html>
  );
}

export default RootLayout;
