"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-black border-b border-white/10">
            <nav
                aria-label="Global"
                className="flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
            >
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <span className="text-xl font-medium tracking-wide">ReactDev</span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {/* Desktop Nav */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                    <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition">
                        Home
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition">
                        Pricing
                    </Link>
                    <Link href="/About" className="text-sm font-medium text-gray-300 hover:text-white transition">
                        About
                    </Link>
                    <Link href="https://sourabh-kuriyal.vercel.app/" className="text-sm font-medium text-gray-300 hover:text-white transition">
                        Meet Developer
                    </Link>
                </PopoverGroup>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    <Link href="/UnderDevelopment">
                        <Button
                            variant="ghost"
                            className="text-gray-300 hover:text-white hover:bg-white/10"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/UnderDevelopment">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700">
                            Signup
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Mobile Drawer Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black p-6 sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-white">ReactDev</h2>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-md p-2.5 text-gray-400 hover:text-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 space-y-4">
                        <Link href="/" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                            Home
                        </Link>
                        <Link href="#pricing" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                            Pricing
                        </Link>
                        <Link href="/About" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                            About
                        </Link>
                        <Link href="/developer" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                            Meet Developer
                        </Link>
                        {/* <Link href="/contact" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                            Contact
                        </Link> */}
                    </div>
                    <div className="mt-6 flex gap-2">
                        <Link href="/UnderDevelopment" className="w-1/2">
                            <Button
                                variant="ghost"
                                className="w-full text-gray-300 hover:text-white hover:bg-white/10"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href="/UnderDevelopment" className="w-1/2">
                            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                                Signup
                            </Button>
                        </Link>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
