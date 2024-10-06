import React, { useState } from 'react';
import './ClimateData.css';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Jean134',
      message: 'Le réchauffement climatique a affecté mes récoltes cette année...',
      timestamp: '2024-10-05 10:00',
    },
    {
      id: 2,
      username: 'Marie95',
      message: 'J’ai remarqué une hausse des températures dans ma ville...',
      timestamp: '2024-10-05 11:15',
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [username, setUsername] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost && username) {
      const newEntry = {
        id: posts.length + 1,
        username: username,
        message: newPost,
        timestamp: new Date().toLocaleString(),
      };
      setPosts([...posts, newEntry]);
      setNewPost('');
      setUsername('');
    }
  };

  return (
    <div className="community-container">
      <h1 className="community-title">Partagez votre expérience sur le réchauffement climatique</h1>
      
      <form className="community-form" onSubmit={handlePostSubmit}>
        <input
          type="text"  
          placeholder="Votre nom"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="community-input"
        />
        <textarea
          placeholder="Partagez votre expérience..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="community-textarea"
        ></textarea>
        <button type="submit" className="community-submit-btn">Publier</button>
      </form>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <strong>{post.username}</strong> <span>{post.timestamp}</span>
            </div>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
