import { MeetDoctorButton } from "@/components/MeetDoctorButton";
import { CallButton } from "@/components/CallButton";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "General dentistry is a branch of dentistry that focuses on a wide range of oral health services. General dentists are often the first point of",
      imageSrc: "./images/jpegs/General_Dentistry.jpeg",
      imageAlt: "General dentistry procedures and treatments",
      readMoreLink: "/services/general-dentistry",
      bookingLink: "/appointments/general-dentistry",
    },
    {
      title: "Skin tag,wart &Tattoo Removal",
      description:
        "1.    Skin Tag Removal: This procedure is quick and minimally invasive, typically performed using cryotherapy (freezing), cauterization (burning),",
      imageSrc: "./images/jpegs/Tattoo_Removal.jpeg",
      imageAlt: "Skin tag and tattoo removal before and after",
      readMoreLink: "/services/skin-tag-removal",
      bookingLink: "/appointments/skin-tag-removal",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Cosmetic Dentistry focuses on improving the appearance of a person's teeth, gums, and overall smile. While traditional dentistry",
      imageSrc: "./images/jpegs/Cosmetic_Dentistry.jpeg",
      imageAlt: "Cosmetic dentistry procedures",
      readMoreLink: "/services/cosmetic-dentistry",
      bookingLink: "/appointments/cosmetic-dentistry",
    },
  ];
  return (
    <>
      <header>
        <section className="mainmenu-area sticky z-1 top-0 bg-white shadow-md py-4 px-6">
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="images/jpegs/family_clinic.jpeg"
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </a>
            </div>

            <nav>
              <ul className="flex gap-6 text-base font-medium">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    About
                  </a>
                  <ul className="hidden h-[102px] pt-3 mt-0 pb-3 mb-0">
                    <li>
                      <a
                        href="/about"
                        className="text-gray-700 hover:text-gray-900 transition"
                      >
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-doctors"
                        className="text-gray-700 hover:text-gray-900 transition"
                      >
                        Our Doctor
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    Services
                  </a>
                  <ul className="hidden h-[140px] pt-3 pb-3 mt-0 mb-0">
                    <li>
                      <a
                        href="/services"
                        className="text-gray-700 hover:text-gray-900 transition"
                      >
                        Dentistry
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="text-gray-700 hover:text-gray-900 transition"
                      >
                        DERMATOLOGY COSMETIC PROCEDURES
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="text-gray-700 hover:text-gray-900 transition"
                      >
                        Dental,Fillings,Root,Canal,Treatment,Dental,Implants
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/Updates"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="/videos"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    More Info
                  </a>
                </li>
                <ul className="hidden h-16 pt-3 pb-3 mt-0 mb-0">
                  <li>
                    <a
                      href="/videos"
                      className="text-gray-700 hover:text-gray-900 transition"
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-gray-700 hover:text-gray-900 transition"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="tel:123-456-7890"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              123-456-7890
            </a>
          </div>
        </section>

        <section className="hero bg-cover bg-center h-screen flex items-center justify-center">
          <div className="text-left max-w-7xl w-full mx-auto text-white">
            <p className="text-lg font-semibold mb-2">WELCOME TO</p>
            <h1 className="text-5xl font-bold mb-4">Family Clinic</h1>
            <p>
              Family Multi Speciality Clinic started its medical and dental
              service since 2006 by Dr kiruthika Asokan, Dental Surgeon.
            </p>

            <div className="flex gap-4 mt-4">
              <MeetDoctorButton />
              <CallButton />
            </div>
          </div>
        </section>

        <section className="bg-[#82c1bb] py-8 ">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl text-white font-bold text-center mb-6">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  readMoreLink={service.readMoreLink}
                  bookingLink={service.bookingLink}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 text-[#626262]  py-8">
          <div className="max-w-7xl w-full mx-auto px-4">
            <h2 className="text-3xl text-[#82c1bb] font-bold text-center mt-[50px] mb-[50px]">
              Meet Our Doctor
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg ">
              <div className="w-full md:w-1/2">
                <img
                  src="./images/pngs/image3.png"
                  alt="Doctor"
                  className="rounded-lg shadow-lg mb-4 md:mb-0 rounded-br-[50%] rounded-tr-[50%]"
                />
              </div>
              <div className="w-full md:w-1/2 p-[40px] text-center md:text-left">
                <h3 className="text-[45px] font-[system-ui] font-thin  text-[#82c1bb] mb-2">
                  Dr. Kiruthika Asokan
                </h3>
                <p className="text-xs font-medium mb-2"> Dental Surgeon</p>
                <p className="flex">
                  <img src="https://proj.s-cdn.boostkit.dev/59d74e153872831a6483491e/v453/phone.svg?v=454"></img>
                  <span className="ml-5  text-[#82c1bb] font-semibold ">
                    123-456-7890
                  </span>
                </p>
                <p className="text-[#898989] pt-20">
                  Dr. Kiruthika Asokan completed her BDS from the prestigious
                  SRM Medical University in 2004. Subsequently, she pursued her
                  certified course in Rotary Root Canal Treatment in 2013. Her
                  skill and commitment in dentistry create trust and confidence
                  in every smile she works on. Based in Karambakkam, Porur,
                  Chennai she has more than 19 years of experience and is
                  practicing as a full-time Dentist in a Family Clinic.
                </p>
                <p className="text-[#898989] mt-10 pb-20">
                  In 2017, her outstanding skills and strong dedication placed
                  her on the prestigious "Top 10 Dentists" list recognized by
                  Business Review Today. She is also valued member of the
                  respected Indian Dental Association.
                </p>
                <div>
                  <a
                    href="/appointments"
                    className="bg-[#82c1bb] text-md text-white font-semibold py-4 px-8   transition duration-300"
                  >
                    Read More
                  </a>
                  <a
                    href="/appointments"
                    className="bg-transparent text-md text-[#82c1bb] ms-4 font-semibold py-4 px-8 border hover:bg-[#82c1bb] transition duration-300"
                  >
                    Book an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
