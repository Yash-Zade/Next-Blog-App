import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return <nav className="w-full p-5 flex items-center justify-between">
        <div className="flex items-center gap-8">

            <Link href="/">
                <h1 className="text-3xl font-bold">
                    Nav<span className="text-blue-500">Bar</span>
                </h1>
            </Link>
            <div className="flex items-center gap-4">
                <Link className={buttonVariants({ variant: "ghost" })} href="/">Home</Link>
                <Link className={buttonVariants({ variant: "ghost" })} href="/blog">Blog</Link>
                <Link className={buttonVariants({ variant: "ghost" })} href="/about">About</Link>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <Link className={buttonVariants()} href="/auth/signup">Signup</Link>
            <Link className={buttonVariants({ variant: "outline" })} href="/auth/login">Login</Link>
            <ThemeToggle />
        </div >
    </nav >

}