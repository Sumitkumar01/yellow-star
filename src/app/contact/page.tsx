import Link from "next/link";
import { AiFillMail } from "react-icons/ai"
import { IoCall } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6";


function contact() {

  interface link {
    linkname: string | JSX.Element;
    src: string;
    title?: String;
  }

  const contact_links: link[] = [
    {
      linkname: <FaLocationDot />,
      src: "https://www.google.com/maps/place/Yellow+Star+Kitchen/@22.52733,88.407407,11z/data=!4m6!3m5!1s0x3a0275dfec786e15:0x6bd635881d790b4c!8m2!3d22.5273298!4d88.4074065!16s%2Fg%2F11shnzxk00?hl=en&entry=ttu",
      title: "Gulshan Colony, Purba Panchannagram South, Uttar Panchanna Gram, Kolkata, West Bengal 700100"
    },
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
  return (
    <section>
      <div className="max-w-[1900px] mx-auto bg-cover bg-center bg-no-repeat h-[40vh]" style={{ backgroundImage: "url('/contact.jpg')" }}>
        <div className="w-full h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl uppercase font-semibold text-white">Contact Us</h1>
        </div>
      </div>
      <div className="py-5">
        <div className="max_width">
          <div className="md:grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 mb-5">
              <div>
                <h2 className="text-4xl uppercase font-semibold mb-10">Get in Touch</h2>
              </div>
              <form>
                <div className="flex flex-col">
                  <div className="w-full border border-black rounded mb-2 p-2">
                    <input type="text" className="w-full outline-none " placeholder="Name" />
                  </div>
                  <div className="w-full border border-black rounded mb-2 p-2">
                    <input type="email" className="" placeholder="Email" />
                  </div>
                  <div className="w-full border border-black rounded mb-2 p-2">
                    <input type="text" className="w-full outline-none" placeholder="Phone" />
                  </div>
                  <div className="w-full border border-black rounded mb-2 p-2">
                    <input type="text" className="w-full outline-none" placeholder="Address" />
                  </div>
                  <div className="w-full border border-black rounded mb-2 p-2">
                    <textarea name="requirement" className="w-full outline-none" id="requirement" cols={30} rows={10} placeholder="Requirement"></textarea>
                  </div>
                  <button className="px-10 py-2 rounded-tl font-bold rounded-tr rounded-b rounded-br-2xl bg-red-500 hover:bg-red-500 text-white hover:text-yellow-300 w-min">Submit</button>
                </div>
              </form>
            </div>
            <div className="md:col-span-1 mb-5">
              <div>
                <h2 className="text-4xl uppercase font-semibold mb-10">Info</h2>
              </div>
              <div className="flex flex-col gap-5">
                {contact_links.map((link, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div>
                      <Link href={link.src} className="text-xl mt-1 border-red-700 border flex items-center justify-center  rounded-full w-9 h-9 hover:text-yellow-400 hover:bg-red-500 duration-300">{link.linkname}</Link>
                    </div>
                    <div>
                      <Link href={link.src} className="text-xl font-normal hover:text-yellow-400 leading-6 text-justify">{link.title}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max_width">
        <div className="w-full border border-black rounded mb-2 p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117932.24868831022!2d88.3250090390625!3d22.527329800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275dfec786e15%3A0x6bd635881d790b4c!2sYellow%20Star%20Kitchen!5e0!3m2!1sen!2sin!4v1718284837435!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default contact


