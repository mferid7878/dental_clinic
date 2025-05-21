// import { CaretLeft, CaretRight } from "@phosphor-icons/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Gallery() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="heading col-md-12 col-sm-12 col-xs-12 max-w-7xl w-full mx-auto">
          <h2 className="text-3xl text-[#82c1bb] font-bold text-center my-[50px]">
            Gallery
          </h2>
          <div className="flex flex-wrap justify-end">
            <div className="flex max-w-[90px] justify-end ">
              <div className="w-full md:w-1/2 p-4">
                <a target="_blank" href="/">
                  <p className="text-3xl text-[#82c1bb] font-bold">{"<"}</p>
                </a>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <a target="_blank" href="/">
                  <p className="text-3xl text-[#82c1bb] font-bold">{">"}</p>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center max-w-[1800px] snap-x overflow-x-scroll scrollbar-hide"
            style={{
              overflowX: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <img
              src="images/pngs/doc1.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc2.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc3.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc4.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc5.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc6.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc7.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc8.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc9.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
            <img
              src="images/pngs/doc10.png"
              alt="Gallery Image"
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
