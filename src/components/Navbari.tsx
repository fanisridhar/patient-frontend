import Link from "next/link";
import Logo from "./Logo";

function Header() {
    return (
        <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
            <Logo />
            <div className="flex items-center">
                <Link className="font-black pr-14 text-2xl" href="/insurancedb">Dashboard</Link>
                <Link className="font-black pr-14 text-2xl" href="/insuranceplans">Plans</Link>
                <Link className="font-black pr-14 text-2xl" href="/insuranceacc">Profile</Link>
                <Link className="font-black pr-14 text-2xl" href="/">Logout</Link>
            </div>
        </nav>
    );
}

export default Header;

