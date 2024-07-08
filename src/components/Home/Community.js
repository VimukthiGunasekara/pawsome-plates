import React from 'react';

export default function CommunitySection() {
  return (
    <div className="section community">
      <h1 className="community-title">Join With Our <span className="community-title-snap">10K+ </span>Community</h1>
      <p className="community-title-sec">Join Our 10K+ Dog Moms! Share, learn, and celebrate the joy of being a dog mom with us!</p>
      <div className="community-section">
        <div className="community-item item1">
          <img src={`${process.env.PUBLIC_URL}/image/community/1.png`} alt="community 3" />
        </div>
        <div className="community-item item2">
          <img src={`${process.env.PUBLIC_URL}/image/community/2.png`} alt="community 1" />
        </div>
        <div className="community-item item3">
          <img src={`${process.env.PUBLIC_URL}/image/community/3.png`} alt="community 2" />
        </div>
        <div className="community-item item4">
          <img src={`${process.env.PUBLIC_URL}/image/community/4.png`} alt="community 3" />
        </div>
        <div className="community-item item5">
          <img src={`${process.env.PUBLIC_URL}/image/community/5.png`} alt="community 4" />
        </div>
        <div className="community-item item6">
          <img src={`${process.env.PUBLIC_URL}/image/community/6.png`} alt="community 1" />
        </div>
      </div>
    </div>
  );
}
