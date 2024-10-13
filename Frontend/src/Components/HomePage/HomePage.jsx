import React, { useEffect, useState } from 'react';
import './HomePage.css'

function DonationRequests() {
  const [donationPosts, setDonationPosts] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch('/sample_requests.json')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setDonationPosts(data.donationPosts);
      })
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
      });
  }, []);

  return (
    <div className="posts-container">
      <h1>Donation Requests</h1>
      <ul>
        {donationPosts.map((post, index) => (
          <li key={index} className='post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
              Money Raised: <br/>
              <meter min="0" max={post.goal_amount} value={post.current_amount}></meter> ${post.current_amount} / ${post.goal_amount}

            </p>
            <p><strong>Deadline:</strong> {post.deadline}</p>
            <p><strong>Contact Info:</strong> {post.contact_info.email && <a href={`mailto:${post.contact_info.email}`}>{post.contact_info.email}</a>}, {post.contact_info.phone && <a href={`tel:${post.contact_info.phone}`}>{post.contact_info.phone}</a>}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonationRequests;
