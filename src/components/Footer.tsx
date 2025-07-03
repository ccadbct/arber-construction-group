"use client";

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .site-footer {
          background: var(--primary-blue);
          color: var(--white);
          padding: 4rem 0 1.5rem 0;
          margin-top: 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 2.5rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--white);
        }

        .footer-company {
          font-weight: 700;
          font-size: 1.2rem;
        }

        .footer-tagline {
          color: var(--light-blue);
          font-size: 1rem;
          margin: 0;
          line-height: 1.4;
        }

        .footer-credentials {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid var(--primary-yellow);
        }

        .footer-credentials h5 {
          color: var(--primary-yellow);
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
          font-weight: 600;
        }

                 .footer-credentials p {
           margin: 0;
           font-size: 0.85rem;
           line-height: 1.4;
           opacity: 0.9;
           color: var(--white);
         }

        .footer-col h4 {
          color: var(--primary-yellow);
          margin-bottom: 1.2rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 0.6rem;
        }

        .footer-col ul li a {
          color: var(--white);
          text-decoration: none;
          transition: color 0.2s;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .footer-col ul li a:hover {
          color: var(--primary-yellow);
          opacity: 1;
        }

        .footer-contact {
          margin-bottom: 1.5rem;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
        }

        .footer-contact-item span:first-child {
          font-size: 1rem;
          margin-top: 0.1rem;
        }

        .footer-contact-item a {
          color: var(--white);
          text-decoration: none;
        }

        .footer-contact-item a:hover {
          color: var(--primary-yellow);
        }

        .footer-hours {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .footer-hours h5 {
          color: var(--primary-yellow);
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }

                 .footer-hours p {
           margin: 0.2rem 0;
           font-size: 0.85rem;
           opacity: 0.9;
           color: var(--white);
         }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin-top: 3rem;
          padding-top: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .footer-bottom-left {
          color: #cbd5e1;
          font-size: 0.9rem;
        }

        .footer-bottom-right {
          text-align: right;
          color: #cbd5e1;
          font-size: 0.85rem;
        }

        .footer-bottom-right a {
          color: var(--primary-yellow);
          text-decoration: none;
          margin: 0 0.5rem;
        }

        .footer-bottom-right a:hover {
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            grid-template-columns: 1fr;
            gap: 1rem;
            text-align: center;
          }

          .footer-bottom-right {
            text-align: center;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-container">
          {/* Brand & Credentials Column */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/685b3a80958e7f0d7584df27.svg"
                alt="Arber Construction Group Logo"
                width="48"
                height="48"
              />
              <span className="footer-company">Arber Construction Group</span>
            </a>
            <p className="footer-tagline">NYC&apos;s Premier Apartment Renovation Specialists</p>
            
            <div className="footer-credentials">
              <h5>Licensed & Certified</h5>
              <p>
                <a 
                  href="https://a810-bisweb.nyc.gov/bisweb/LicenseQueryServlet?licensetype=G&licno=626826&requestid=1" 
                  target="_blank" 
                  rel="noopener"
                  style={{color: 'var(--primary-yellow)', textDecoration: 'none'}}
                >
                  NYC License #626826
                </a>
                <br />
                EPA Lead-Safe Certified<br />
                Fully Insured & Bonded<br />
                Co-op Board Approved
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4>Renovation Services</h4>
            <ul>
              <li><a href="/kitchen-remodeling-nyc">Kitchen Renovations</a></li>
              <li><a href="/bathroom-remodeling-nyc">Bathroom Remodeling</a></li>
              <li><a href="/basement-remodeling-nyc">Basement Finishing</a></li>
              <li><a href="/complete-apartment-renovations">Complete Renovations</a></li>
              <li><a href="/flooring-installation-nyc">Flooring Installation</a></li>
              <li><a href="/electrical-plumbing-nyc">Electrical & Plumbing</a></li>
              <li><a href="/custom-carpentry-nyc">Custom Carpentry</a></li>
              <li><a href="/painting-contractors-nyc">Interior Painting</a></li>
            </ul>
          </div>

          {/* NYC Service Areas Column */}
          <div className="footer-col">
            <h4>NYC Service Areas</h4>
            <ul>
              <li><a href="/manhattan-renovation-contractors">Manhattan Contractors</a></li>
              <li><a href="/brooklyn-renovation-contractors">Brooklyn Contractors</a></li>
              <li><a href="/queens-renovation-contractors">Queens Contractors</a></li>
              <li><a href="/bronx-renovation-contractors">Bronx Contractors</a></li>
              <li><a href="/staten-island-contractors">Staten Island</a></li>
              <li><a href="/upper-east-side-renovations">Upper East Side</a></li>
              <li><a href="/park-slope-contractors">Park Slope</a></li>
              <li><a href="/astoria-renovations">Astoria</a></li>
            </ul>
          </div>

          {/* Contact & Company Info */}
          <div className="footer-col">
            <h4>Contact Information</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span>📍</span>
                <div>
                  <strong>Headquarters</strong><br />
                  209-15 18th Ave<br />
                  Bayside, NY 11360
                </div>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <div>
                  <a href="tel:646-206-5590"><strong>(646) 206-5590</strong></a><br />
                  <small>Free Consultations</small>
                </div>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <div>
                  <a href="mailto:info@arberconstruction.com">info@arberconstruction.com</a><br />
                  <small>24hr Response Time</small>
                </div>
              </div>
            </div>

            <div className="footer-hours">
              <h5>Business Hours</h5>
              <p><strong>Monday - Friday:</strong> 7:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 8:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Emergency Service Only</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2024 Arber Construction Group. All rights reserved.</p>
            <p>Serving NYC's Five Boroughs Since 2008</p>
          </div>
          <div className="footer-bottom-right">
            <div>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
            <div style={{marginTop: '0.5rem'}}>
              <small>NYC Chamber of Commerce Member • Better Business Bureau A+ Rating</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 