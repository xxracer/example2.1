import React from 'react';
import './InstagramFeed.css';

const instagramPosts = [
  { id: 1, img: 'https://placehold.co/150x150?text=Instagram+1' },
  { id: 2, img: 'https://placehold.co/150x150?text=Instagram+2' },
  { id: 3, img: 'https://placehold.co/150x150?text=Instagram+3' },
  { id: 4, img: 'https://placehold.co/150x150?text=Instagram+4' },
  { id: 5, img: 'https://placehold.co/150x150?text=Instagram+5' },
  { id: 6, img: 'https://placehold.co/150x150?text=Instagram+6' },
];

const InstagramFeed = () => {
  return (
    <section className="instagram-feed-section">
      <h2 className="section-title">Latest on Instagram</h2>
      <div className="instagram-grid">
        {instagramPosts.map(post => (
          <a key={post.id} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="instagram-post-link">
            <img src={post.img} alt={`Instagram post ${post.id}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;