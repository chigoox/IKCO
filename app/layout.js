import { Inter, Josefin_Sans, Jost, Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "./GlobalComponets/NavBar";

const inter = Jost({ weight: ['400'], subsets: ["latin"] });

export const metadata = {
  title: "IKCO",
  description: "Kitchen Cabinets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <NavBar />
        {children}


      </body>
    </html>
  );
}
