export default function Footer1() {
  return (
    <section className="bg-[#82c1bb] py-10 ">
      <div className="max-w-7xl w-full mx-auto flex ">
        <div className="w-1/2 mx-auto mt-10 flex flex-col gap-2">
          <h3 className="flex gap-2 items-center text-2xl font-bold ">
            <i class="fa fa-phone icon-white" aria-hidden="true"></i>
            <a itemprop="telephone" href="tel:08048030932">
              08048030932
            </a>
          </h3>

          <div className="flex gap-3 items-center">
            <i class="fa fa-envelope icon-white" aria-hidden="true"></i>
            <a
              itemprop="email"
              href="mailto:info@familymultispecialityclinic.com"
            >
              info@familymultispecialityclinic.com
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <i class="fa fa-map-marker icon-white" aria-hidden="true"></i>
            <a
              id="doctorAddress"
              itemprop="address"
              href="https://www.familymultispecialityclinic.com/mapview/13-037161146242502/80-15790897913323"
            >
              1st Street, Rajeswari Nagar, karambakkam, Porur, Chennai, Tamil
              Nadu, India
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <i class="fa fa-globe icon-white" aria-hidden="true"></i>
            <a
              itemprop="address"
              href="http://www.familymultispecialityclinic.com/latest-updates/1"
              class="icon-white full-address"
            >
              http://www.familymultispecialityclinic.com/latest-updates/1
            </a>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-10">
          <h3 className="text-2xl font-bold mb-2">Share website on</h3>
          <div class="flex justify-center gap-10 items-center w-[300px] border-2 border-white  py-2 ">
            <a
              itemprop="url"
              href="https://wa.me/?text=https://www.familymultispecialityclinic.com"
              target="_blank"
            >
              <span class="fa fa-whatsapp icon-size" aria-hidden="true"></span>
            </a>
            <a
              itemprop="url"
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.familymultispecialityclinic.com"
              target="_blank"
            >
              <span
                class="fa fa-facebook-square icon-size"
                aria-hidden="true"
              ></span>
            </a>
            <a
              itemprop="url"
              href="https://twitter.com/intent/tweet?text=Check+out+&amp;url=https://www.familymultispecialityclinic.com"
              target="_blank"
            >
              <span class="fa fa-twitter icon-size" aria-hidden="true"></span>
            </a>
            <a
              itemprop="url"
              href="https://www.linkedin.com/cws/share?url=https://www.familymultispecialityclinic.com"
              target="_blank"
            >
              <span class="fa fa-linkedin icon-size" aria-hidden="true"></span>
            </a>
            <a
              itemprop="url"
              href="http://pinterest.com/pin/create/button/?url=https://www.familymultispecialityclinic.com"
              target="_blank"
            >
              <span class="fa fa-pinterest icon-size" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
