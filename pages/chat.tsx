import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
});

const Chat = () => {
  return (
    <div
      className={`${poppins.className} relative min-h-screen flex items-center justify-center`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-indigo-900 z-0" />

      {/* Main Content */}
      <Navbar />
      
      <main className="relative text-center mt-36 p-2">
        {/* Embed the chatbot iframe */}
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/S9KobTL6Hufk0GFQiQzFr"
          width="1000px" // Adjust width here
          height="700px" // Adjust height here
          style={{
            maxWidth: "100%", // Ensures responsiveness
            borderRadius: "10px", // Optional: Adds rounded corners
          }}
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
        <script
          src="https://www.chatbase.co/embed.min.js"
          defer
        />
      </main>
    </div>
  );
};

export default Chat;
