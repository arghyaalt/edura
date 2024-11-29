import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
});

const Chat = () => {
  return (
    <div
      className={`${poppins.className} relative min-h-screen flex flex-col items-center justify-center`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-indigo-900 z-0" />

      {/* Main Content */}
      <Navbar />

      <main className="relative text-center mt-24 p-4 w-full max-w-7xl">
        {/* Embed the chatbot iframe */}
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/S9KobTL6Hufk0GFQiQzFr"
          style={{
            width: "100%",
            height: "650px", // Desktop height
            borderRadius: "10px", // Adds rounded corners
          }}
          className="sm:h-[500px] lg:h-[700px]"
          frameBorder="0"
        ></iframe>

        {/* Inject the chatbot configuration script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "S9KobTL6Hufk0GFQiQzFr",
                domain: "www.chatbase.co"
              }
            `,
          }}
        />

        {/* Load external JS script */}
        <script src="https://www.chatbase.co/embed.min.js" defer />
        <p className = "fixed bottom-0 left-0 w-full text-white text-center py-2 text-sm opacity-60">
          Made with ❤️ by Arghya Vyas, Ali Salman, Kishan Suhirthan, David Santoso
        </p>
      </main>
    </div>
  );
};

export default Chat;
