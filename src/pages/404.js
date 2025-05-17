import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 font-sans">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-gray-600 border border-gray-600 px-5 py-2 rounded hover:bg-gray-600 hover:text-white transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}
