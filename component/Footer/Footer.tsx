import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";
function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelpanda
        </Link>
        <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">addis</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-000</p>
            </div>
            <div className="flex items-center">
              <BiMessageDetail />
              <p className="ml-2">leave it here</p>
            </div>
          
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Privacy</p>
            <p className="pb-4">Support</p>
            <p>Our story</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
