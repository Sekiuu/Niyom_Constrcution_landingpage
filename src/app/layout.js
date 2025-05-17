import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import kanit from "./fonts/Kanit";
import Nav from "./component/Nav";
import Contact from "./component/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "บริษัท นิยมดีอิเล็กทริกซ์ บริการติดตั้งระบบไฟฟ้า ปทุมธานี และ จังหวัดไกล้เคียง",
  description: "รับเหมางานไฟฟ้า ปทุมธานี | บริษัท นิยมดีอิเล็กทริกซ์ บริการติดตั้งระบบไฟฟ้า บ้าน อาคาร โรงงาน เดินสายไฟ ซ่อมตู้ไฟ ปรับปรุงระบบไฟ ไฟดับ รับเดินสายไฟในบ้าน ไฟรั่ว เรียกช่าง โดยทีมช่างมืออาชีพ ประสบการณ์ยาวนาน บริการทั่วปทุมธานี"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-800 ${kanit.className}`}
      >
        <Nav/>
        {children}
        <Contact/>
      </body>
    </html>
  );
}
