export default function Recomandations() {
  return (
    <section className="flex flex-col  bg-[#93d9d9] items-center justify-center py-[50px] w-full h-full">
      <div className="flex flex-col items-center max-w-7xl mx-auto justify-center w-full h-full">
        <h4 className="font-medium text-2xl text-white mb-2">
          Get fresh health tips and alerts in your inbox.
        </h4>
        <p className="font-medium text-sm text-black opacity-50 max-w-xl text-center mb-4">
          great way to stay updated about latest health tips, alerts and
          enhancements.
        </p>
        <div className="flex flex-col items-center justify-center  w-full h-full">
          <form className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex w-full max-w-xl rounded-md overflow-hidden bg-white ">
              <input
                type="email"
                placeholder="Your email address here..."
                className="flex-grow px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
              <button className="px-[48px] py-3 text-white text-sm font-medium bg-[#82c1bb]  ">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
