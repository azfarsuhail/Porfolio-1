'use client'
import Link from "next/link"
import Image from "next/image"
import nav from "../../../public/nav logo.png"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
    return (
        <div className='w-full h-15 top-0 fixed justify-between items-center px-4 flex bg-teal-800 rounded-full'>
            <Link href={"/"} className=" bg-transparent">
                <Image
                    src={nav}
                    alt="logo"
                    width={150}
                    height={10}
                    className="rounded-full bg-transparent"
                /> </Link>
            <ul className="hidden md:flex gap-4 bg-inherit">
                <Link className="bg-inherit text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="/">Home</Link>
                <Link className="bg-inherit text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="/Portfolio">Portfolio</Link>
                <Link className="bg-inherit text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="/Contact">Contact</Link>
            </ul>
            <Sheet>
                <SheetTrigger className="bg-inherit  md:hidden flex "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-inherit">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>
</SheetTrigger>
                <SheetContent className=" bg-inherit" side = 'top'>
                    <SheetHeader className=" bg-inherit">
                        <SheetTitle className=" ">Menu</SheetTitle>
                        <SheetDescription className=" bg-inherit">
                            <ul className="bg-inherit flex-col">
                                <br />
                                <Link className="bg-inherit text-xl" href="/">Home</Link>
                                <br />
                                <Link className="bg-inherit text-xl" href="/Portfolio">Portfolio</Link>
                                <br />
                                <Link className="bg-inherit text-xl" href="/Contact">Contact</Link>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}