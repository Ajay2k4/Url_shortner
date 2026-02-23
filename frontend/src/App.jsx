import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const generateShortUrl = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/url/shorten",
        {
          originalUrl: url,
        }
      );

      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.log(err);
      alert("Error creating short URL");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied!");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>URL Shortener 🔗</h1>

      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />

      <br /><br />

      <button onClick={generateShortUrl}>Generate</button>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>{shortUrl}</p>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default App;