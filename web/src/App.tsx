import { useEffect, useState } from "react";
import axios from "axios";

interface FeedItem {
  id: string;
  title: string;
  source: string;
  link: string;
  authors: string[];
  summary?: string;
  type: string;
  date?: string;
  tags: string[];
}

function App() {
  const [feeds, setFeeds] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<FeedItem[]>("/feeds")
      .then((res) => {
        setFeeds(res.data);
      })
      .catch((err) => {
        console.error("Error fetching feeds:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1> Recommender Feeds</h1>
      {loading ? (
        <p>Loading feeds...</p>
      ) : (
        <ul>
          {feeds.map((f) => (
            <li key={f.id} style={{ marginBottom: "1rem" }}>
              <a href={f.link} target="_blank" rel="noreferrer">
                {f.title}
              </a>
              <p><strong>Source:</strong> {f.source}</p>
              <p>{f.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
