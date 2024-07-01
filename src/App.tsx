import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuidv4 function from the uuid library

function App() {
  const [embedLink, setEmbedLink] = useState<string>("");

  const createChatbot = () => {
    const sessionId = uuidv4(); // Use the uuidv4 function
    const link = `<chatbot-widget data-session-id="${sessionId}"></chatbot-widget><script type="module" src="https://moebkydnqitkkfkgqbhu.supabase.co/storage/v1/object/public/chatbot-assignment/chatbot.js?t=2024-07-01T13%3A11%3A43.282Z"></script>`;
    setEmbedLink(link);
  };

  return (
    <div>
      <button onClick={createChatbot}>Create Chatbot</button>
      {embedLink && (
        <div>
          <p>Copy this code to embed the chatbot:</p>
          <pre>{embedLink}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
