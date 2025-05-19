import { Button } from "../Button";

export default function LastestUpdates() {
  return (
    <>
      <section className="bg-white py-20 ">
        <div className="heading col-md-12 col-sm-12 col-xs-12 max-w-7xl w-full mx-auto">
          <h2 className="text-3xl text-[#82c1bb] font-bold text-center my-[50px]">
            Latest Updates
          </h2>
          <div className="p-[25px] flex flex-col items-start  justify-center shadow-lg rounded-lg ">
            <p className="font-normal text-lg tracking-wide text-[#4a4a4a] px-4 mb-[30px]">
              Still deciding between braces or aligners? Let us guide you. Book
              your free orthodontics consultation and discover your perfect
              smile solution. Call 91713 33368 and book your slot.
              #dentistinporur##de
            </p>
            <Button
              link="/appointments"
              Name="Read More"
              style="bg-[#82c1bb] text-md  text-white font-semibold py-4 px-8  mx-[10px]  transition duration-300"
            />
          </div>
          <div className="justify-end flex flex-col items-end ">
            <Button
              link="/appointments"
              Name="View All Updates"
              style="text-[#82c1bb]  uppercase text-md font-bold inline-flex  mt-4 pr-4 items-center transition-colors duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
