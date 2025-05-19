export default function Footer2() {
  return (
    <section className="bg-[#3c8282]">
      <div className="max-w-[1500px] w-full mx-auto flex justify-between items-center py-5">
        <div className="w-1/2 mx-auto ">
          <p
            id="hyperlink "
            className="text-white font-medium py-2 uppercase text-[14px]"
          >
            ©2025<span></span> | Made in India with
            <a href="http://practice.healthgro.io/" target="_blank">
              Healthgrow Practice for Doctors
            </a>
          </p>
        </div>
        <div className="w-1/2 text-end ">
          <i
            class="report-abuse"
            onclick="reportAbuse()"
            title="Click here to report any content on this website"
          >
            Report Abuse
          </i>
          &nbsp;•&nbsp;
          <a
            href="https://www.familymultispecialityclinic.com/sitemap.xml"
            target="_blank"
          >
            site map
          </a>
        </div>
      </div>
    </section>
  );
}
