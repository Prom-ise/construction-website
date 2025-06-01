import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
    <h1 className="text-5xl font-bold text-[#fe5d14] mb-4">404</h1>
    <h2 className="text-2xl text-blue-600 font-semibold mb-2">Page Not Found</h2>
    <p className="mb-6 text-gray-600 font-semibold">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="bg-[#fe5d14] text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold transition">
      Go Home
    </Link>
  </div>
);

export default NotFound;