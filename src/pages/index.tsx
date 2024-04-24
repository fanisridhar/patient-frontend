import Link from "next/link";
import Logo from "../components/Logo";
import Image from "next/image";
import Footer from "../components/Footer";
import main_img from "../images/main-hero-image.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
          <Logo />
          <div className="flex items-center mr-1">
            <Link className="font-black pr-14 text-2xl" href="/faq">FAQ</Link>
            <Link className="font-black pr-14 text-2xl" href="/about">About Us</Link>
            <Link className="font-black pr-14 text-2xl" href="/login">Register</Link>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-16">
          <div className="flex-1 p-8">
            <div className="text-left">
              <h1 className="font-bold text-4xl mb-4">
                Welcome to Medilink,
              </h1>
              <h3 className="text-3xl mb-4">
                Your trusted partner for healthcare management.
              </h3>
              <p className="text-xl">
                Streamline your healthcare journey with Medilink's cutting-edge patient insurance management system. Seamlessly manage coverage, claims, and healthcare expenses with precision and ease.
              </p>
              <div className="text-left mt-8 flex ">
                <Link
                  className="text-left mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg mr-4 whitespace-nowrap"
                  href="/patientlogin"
                >
                  I'm a Patient
                </Link>
                <Link
                  className="text-left mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg mr-4 whitespace-nowrap"
                  href="/doctorlogin"
                >
                  I'm a Doctor
                </Link>
                <Link
                  className="text-left mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg whitespace-nowrap"
                  href="/insurancelogin"
                >
                  I sell Insurance Plans
                </Link>
              </div>

            </div>
          </div>
          <div className="flex-1 p-8">
            <Image
              src={main_img}
              alt="Showcasing the patient and insurance management system"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
