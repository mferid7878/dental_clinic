import Link from "next/link";
import { Button } from "../Button";

function ServiceCard(props) {
  const title = props.title || "";
  const description = props.description || "";
  const imageSrc = props.imageSrc || "";
  const imageAlt = props.imageAlt || title;
  const readMoreLink = props.readMoreLink || "#";
  const bookingLink = props.bookingLink || "#";

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-transform duration-300 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden group">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-7 flex-grow flex flex-col">
        <h3 className="text-xl font-medium text-[#676767] mb-[30px] pb-2 border-b border-white hover:border-black transition-colors">
          {title}
        </h3>

        <div className="text-gray-600 flex-grow">
          <p className="leading-relaxed">
            {description}
            {description.endsWith("...") ? "" : " ..."}
          </p>
        </div>

        <div className="text-right">
          <Button
            link={readMoreLink}
            Name="Read More"
            style="text-teal-500 border-b border-teal-500 hover:border-white uppercase text-sm font-medium inline-flex items-center transition-colors duration-300"
          />
        </div>
      </div>

      <div className="px-7 pb-7">
        <Button
          link={bookingLink}
          Name="Book Appointment"
          style="block w-full bg-[#82c1bb] text-white text-center py-2 px-4 rounded-sm font-medium transition duration-300 transform shadow-md"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
