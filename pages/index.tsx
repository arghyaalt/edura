import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Link from 'next/link';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
});

const Home = () => {
  return (
    <div
      className={`${poppins.className} relative min-h-screen flex items-center justify-center`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-indigo-900 z-0" />

      {/* Main Content */}
      <Navbar />
      <main className="relative z-10 text-center">
        <h1 className="text-7xl lg:text-8xl font-semibold leading-snug">
          <span className="text-white">Meet </span>
          <span className="bg-gradient-to-tr from-sky-300 to-pink-400 inline-block text-transparent bg-clip-text">
            Edura
          </span>
        </h1>
        <p className="text-[#d0d8e1] font-medium text-3xl md:text-2xl lg:text-3xl mt-6">
          An optimized chatbot helping you to learn and prepare for school!
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-6">
          <Link href="/chat">
            <button className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-sky-400 to-pink-500 rounded-lg hover:scale-105 transition-transform h-16">
              Get Started
            </button>
          </Link>

          <Link href="/chat">
            <button className="px-8 py-2 text-xl font-semibold text-white border-2 border-white rounded-lg hover:scale-105 transition-transform flex items-center justify-center space-x-3 h-16">
              {/* Discord SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"  // Set consistent size for the icon
                height="24" // Set consistent size for the icon
                viewBox="-1 -3 24 24"
                fill="none"
                stroke="currentColor"
                className="text-white"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
              </svg>
              <span>Add to Discord</span>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
