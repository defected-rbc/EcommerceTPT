import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showTeam, setShowTeam] = useState(false);

  const handleReadMore = () => {
    setShowTeam(!showTeam); 
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); 
  };
  const teamMembers = [
    { name: 'Anuj', role: 'Chief Executive Officer (CEO)', description: 'As the Chief Executive Officer of our company, Anuj is the visionary leader who drives our strategic direction and oversees our overall operations. With a keen eye for opportunity and a passion for innovation, Anuj ensures that the company navigates its path to success while maintaining strong relationships with stakeholders.', imgSrc: '/pictures/team1.jpg' },
    { name: 'Arunima', role: 'Chief Operating Officer (COO)', description: 'Arunima, our Chief Operating Officer, is the powerhouse behind our day-to-day operations. With an exceptional ability to implement strategic plans and enhance productivity, she ensures that all departments function seamlessly. Her expertise in operational management and her proactive approach to solving challenges are crucial in maintaining the efficiency and effectiveness of our business processes.', imgSrc: '/pictures/team2.jpg' },
    { name: 'Geetika', role: 'Chief Financial Officer (CFO)', description: 'Geetika, our Chief Financial Officer, is the financial steward of our company. She oversees all aspects of financial planning, budgeting, and reporting, ensuring that our financial practices are robust and transparent. Her strategic insights into financial management and her ability to navigate complex financial landscapes have been instrumental in driving our company’s growth. ', imgSrc: '/pictures/team3.jpg' },
    { name: 'Gunjan', role: 'Chief Technology Officer (CTO)', description: 'As the Chief Technology Officer, Gunjan spearheads our technological innovation and strategy. She is responsible for managing our technological infrastructure and ensuring the security and integrity of our data. Gunjan\'s leadership in research and development keeps us at the cutting edge of technology, enabling us to stay competitive in a rapidly evolving market. ', imgSrc: '/pictures/team4.jpg' },
    { name: 'Kiran', role: 'Chief Marketing Officer (CMO)', description: 'Kiran, our Chief Marketing Officer, is the creative mind behind our brand’s presence in the market. She leads the development and implementation of marketing strategies that promote our products and services effectively. With a deep understanding of market dynamics and consumer behavior, Kiran oversees our branding, advertising, and public relations efforts.', imgSrc: '/pictures/team5.jpg' },
  ];
  


  return (
    <div
    style={{ 
      backgroundImage: 'url(/pictures/aboutback.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '110vh', 
      width: '100%',
       
    }}
     className="about-us">
      <div className="container">
        <div className="row">
          <div className="flex" >
          
            <h2>About Us</h2>
            <h3>Our Journey</h3>
            <p>
              Welcome to Elegant Steps, your go-to destination for stylish and high-quality footwear. We are dedicated
              to bringing you the latest trends and timeless classics that suit every occasion and personality. Our carefully 
              curated collection ensures that every pair of shoes we offer meets our standards of comfort, durability, and elegance.
              At Elegant Steps, we believe that the right pair of shoes can transform your look and elevate your confidence. Whether 
              you're looking for chic heels, trendy sandals, or classic pumps, we have something for everyone. Our commitment to 
              customer satisfaction means we are constantly updating our inventory with fresh, fashionable options. Thank you for
              choosing Elegant Steps, where we help you step out in style, one perfect pair at a time.
            </p>
            <div className="social-links">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
    </a>
</div>

            <button onClick={handleReadMore} className="btn">{showTeam ? 'Show Less' : 'Read More..'}</button>
          </div>
          
        </div>

        {showTeam && (
          <div className="wrapper">
            <h3>Our Team</h3>
            <div className="team">
              {teamMembers.map((member, index) => (
                <div className="team-members" key={index}>
                  <div className="team_img">
                    <img src={member.imgSrc} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
