import Link from "next/link";
import Logo from "../components/Logo";
import Image from "next/image";
import main_img from "../images/main-hero-image.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
          <Logo />
          <div className="flex items-center mr-1">
            <Link className="font-black pr-14 text-3xl" href="/faq">FAQ</Link>
            <Link className="font-black pr-14 text-3xl" href="/about">About Us</Link>
            <Link className="font-black pr-14 text-3xl" href="/login">Login</Link>
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
              <div className="text-left mt-8">
                <Link
                  className="text-left mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg"
                  href="/login"
                >
                  Get Started
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
      <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} Medilink. All rights reserved.</p>
      </footer>
    </div>
  );
}
