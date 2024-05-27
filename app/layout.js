import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = { title: "The Wild Oasis" };

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
