import { Button } from "../Button";
export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6 text-base font-medium">
        <li>
          <Button
            link="/"
            style="bg-transparent text-gray-700 hover:text-gray-900 transition px-0 py-0 shadow-none"
            Name="Home"
          />
        </li>

        <li className="relative group">
          <Button
            link="/about"
            style="bg-transparent text-gray-700 hover:text-gray-900 transition px-0 py-0 shadow-none"
            Name="About"
          />
          <ul className="absolute hidden group-hover:block  bg-white shadow-lg border-t-2 border-[#82c1bb] mt-[35px] w-48 z-10">
            <li>
              <Button
                link="/about"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Our Story"
              />
            </li>
            <li>
              <Button
                link="/our-doctors"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Our Doctor"
              />
            </li>
          </ul>
        </li>

        <li className="relative group">
          <Button
            link="/services"
            style="bg-transparent text-gray-700 hover:text-gray-900 transition px-0 py-0 shadow-none"
            Name="Services"
          />
          <ul className="absolute hidden group-hover:block bg-white shadow-lg border-t-2  border-[#82c1bb] mt-[35px] w-64 z-10">
            <li>
              <Button
                link="/services"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Dentistry"
              />
            </li>
            <li>
              <Button
                link="/services"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Dermatology Cosmetic Procedures"
              />
            </li>
            <li>
              <Button
                link="/services"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Fillings, Root Canal, Implants"
              />
            </li>
          </ul>
        </li>

        <li>
          <Button
            link="/Updates"
            style="bg-transparent text-gray-700 hover:text-gray-900 transition px-0 py-0 shadow-none"
            Name="Updates"
          />
        </li>

        <li className="relative group">
          <Button
            link="/videos"
            style="bg-transparent text-gray-700 hover:text-gray-900 transition px-0 py-0 shadow-none"
            Name="More Info"
          />
          <ul className="absolute hidden group-hover:block bg-white shadow-lg border-t-2  border-[#82c1bb] mt-[35px] w-48 z-10">
            <li>
              <Button
                link="/videos"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Videos"
              />
            </li>
            <li>
              <Button
                link="/gallery"
                style="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition bg-transparent shadow-none"
                Name="Gallery"
              />
            </li>
          </ul>
        </li>

        <li>
          <Button
            link="/contact"
            style="bg-transparent text-gray-700 hover:text-gray-900 transition px-0 py-0 shadow-none"
            Name="Contact"
          />
        </li>
      </ul>
    </nav>
  );
}
