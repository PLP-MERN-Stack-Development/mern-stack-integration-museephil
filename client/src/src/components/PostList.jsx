import React, { useEffect, useState } from "react";
import api from "../api/apiClient";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading posts...</div>;
  return (
    <div>
      {posts.length === 0 ? <div>No posts yet</div> : posts.map(p => (
        <div key={p._id} style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
