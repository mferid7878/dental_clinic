import { Button } from "../Button";

export default function MeetOurDoctor() {
  return (
    <section className="bg-white shadow-lg rounded-lg  text-[#626262]  py-8">
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
              Dr. Kiruthika Asokan completed her BDS from the prestigious SRM
              Medical University in 2004. Subsequently, she pursued her
              certified course in Rotary Root Canal Treatment in 2013. Her skill
              and commitment in dentistry create trust and confidence in every
              smile she works on. Based in Karambakkam, Porur, Chennai she has
              more than 19 years of experience and is practicing as a full-time
              Dentist in a Family Clinic.
            </p>
            <p className="text-[#898989] mt-10 pb-20">
              In 2017, her outstanding skills and strong dedication placed her
              on the prestigious "Top 10 Dentists" list recognized by Business
              Review Today. She is also valued member of the respected Indian
              Dental Association.
            </p>
            <div>
              <Button
                link="/appointments"
                Name="Read More"
                style="bg-[#82c1bb] text-md text-white font-semibold py-4 px-8   transition duration-300"
              />
              <Button
                link="/appointments"
                Name="Book an appointment"
                style="bg-transparent text-md text-[#82c1bb] ms-4 font-semibold py-4 px-8 border hover:bg-[#82c1bb] transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
