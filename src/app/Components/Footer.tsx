import Image from "next/image"
import Link from "next/link"
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import LinkButton from "./Linkbutton";


function Footer() {

    interface link {
        linkname: string | JSX.Element;
        src: string;
        title?: string;
    }

    const navlink: link[] = [
        {
            linkname: "Home",
            src: "/",
        },
        {
            linkname: "About",
            src: "/about",
        },
        {
            linkname: "products",
            src: "/products",
        },
        {
            linkname: "Contact",
            src: "/contact",
        },
    ];
    const contact_links: link[] = [
        {
            linkname: <IoCall />,
            src: "tel:+919038262752",
            title: "+919038262752"
        },
        {
            linkname: <IoCall />,
            src: "tel:+919051249270",
            title: "+919051249270",
        },
        {
            linkname: <AiFillMail />,
            src: "mailto:yellowstar@gmail.com",
            title: "yellowstar@gmail.com",
        },
    ]
    const social_links: link[] = [
        // 
        {
            linkname: <FaFacebookF />,
            src: "https://www.facebook.com/",
        },
        {
            linkname: <FaInstagram />,
            src: "https://www.instagram.com/",
        },
        {
            linkname: <FaTwitter />,
            src: "https://www.twitter.com/",
        }
    ];
    return (
        <footer className="bg-gray-900 text-white py-5">
            <div className="max_width mt-10">
                <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2">
                    <div className="mb-5">
                        <div>
                            <Image src="/logo2.png" alt="alt" width={130} height={130} className=""/>
                        </div>
                        <div>
                            <div className="footer_social_links">
                                <ul className="flex items-center justify-start gap-4 mt-5">
                                    {social_links.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={link.src} className="flex items-center justify-center text-xl border-red-500 w-9 h-9 border gap-2 hover:text-yellow-500 hover:bg-red-500 rounded-full transition duration-300 ease-in-out">
                                                    {link.linkname}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h2 className="uppercase text-xl mb-2">quick links</h2>
                        <ul className="permalinks">
                            {navlink.map((link, index) => {
                                return (
                                    <li key={index} className="w-full py-1">
                                        <Link href={link.src} className="uppercase text-base hover:text-yellow-400 transition duration-300 ease-in-out">{link.linkname}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h2 className="uppercase text-xl mb-2">contact us</h2>
                        <div className="">
                            <div>
                                <Link href={"https://maps.app.goo.gl/oHjmAYYAceiuuiP18"} className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 ease-in-out">
                                    <div><FaLocationDot /></div>
                                    <span className="sr-only">location</span>
                                    <span>Gulshan Colony, Purba Panchannagram South, Uttar Panchanna Gram, Kolkata, West Bengal 700100</span>
                                </Link>
                            </div>
                            <div>
                                <ul>
                                    {contact_links.map((link, index) => {
                                        return (
                                            <li key={index} className="w-full py-2">
                                                <Link href={link.src} className="flex items-center gap-2 hover:text-yellow-400 transition duration-300 ease-in-out">
                                                    {link.linkname}
                                                    <span>{link.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-b p-1">
                        <LinkButton href="/Contact" className="w-full text-center rounded-tl rounded-tr rounded-b rounded-br-2xl font-bold px-5 py-3 text-white hover:text-yellow-400 bg-red-500 hover:bg-red-400 transition duration-300 ease-in-out">
                            Send Enquiry
                        </LinkButton>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between gap-4 mt-6">
                    <div className="footer_copyright">
                        <small>&copy; Yellow Star. All rights reserved</small>
                    </div>

                    <div className="footer_terms">
                        <small>Terms and Conditions</small>
                        <small>Privacy Policy</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer