import BootstrapJs from "@/components/BootstrapJs";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
      <BootstrapJs />
    </html>
  );
}
