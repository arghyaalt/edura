import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
});

const Home = () => {
  return (
    <div className={`${poppins.className} relative min-h-screen`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-indigo-900" />
      {/* Main Content */}
      <main className="p-5 md:p-10 pt-20 md:pt-32 text-center">
        <h1 className="text-7xl lg:text-8xl font-semibold mt-20 leading-snug">
          <span className="text-black">Meet </span> <br />
          <span className="text-[#396d93] font-bold">Youth Venture</span>
        </h1>
        <p className="text-[#829CB0] font-medium text-3xl md:text-2xl lg:text-3xl p-3">
          A student-led non-profit organization <br />
          dedicated to fostering passion for business.
        </p>
      </main>
    </div>
  );
};

export default Home;
