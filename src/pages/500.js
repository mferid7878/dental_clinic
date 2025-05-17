import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-red-900 font-sans">
      <h1 className="text-5xl font-bold mb-4">500 - Server Error</h1>
      <p className="text-lg mb-6">
        Sorry, something went wrong on our end. Please try again later.
      </p>
      <Link
        href="/"
        className="text-red-600 border border-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}
