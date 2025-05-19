import ServiceCard from "./ServiceCard";
import { services } from "@/components/Services/ServicesData";
export default function Services() {
  return (
    <section className="bg-[#82c1bb] py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center my-[50px]">
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
  );
}
