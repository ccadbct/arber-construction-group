'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    // Close mobile menu on window resize
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Handle body scroll lock
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveDropdown(null) // Close all dropdowns when toggling menu
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      <style jsx>{`
        /* Navigation Styles - Preserving existing CSS */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--white);
          box-shadow: 0 2px 20px rgba(35, 48, 99, 0.1);
          z-index: 1000;
          height: 80px;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-dark);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-company {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary-blue);
        }

        .logo-tagline {
          font-size: 0.8rem;
          color: var(--text-medium);
          font-weight: 500;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 0.85rem;
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.92rem;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .nav-link:hover {
          color: var(--primary-blue);
          background: var(--light-blue);
        }

        .nav-arrow {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .nav-arrow {
          transform: rotate(180deg);
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(35, 48, 99, 0.15);
          min-width: 500px;
          max-width: 600px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          z-index: 1001;
          border: 1px solid rgba(35, 48, 99, 0.1);
        }

        .nav-item:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .dropdown-header {
          font-weight: 700;
          color: #233063;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #F4B81D;
          padding-bottom: 0.5rem;
          width: 100%;
        }

        .dropdown-link {
          padding: 0.75rem 0.5rem;
          color: #233063;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          width: 100%;
          border-radius: 6px;
          display: block;
        }

        .dropdown-link:hover {
          color: #233063;
          background: #e8ecf5;
          transform: translateX(5px);
        }

        .dropdown-featured {
          font-weight: 600;
          color: #233063;
        }

        .emergency-contact {
          display: flex;
          align-items: center;
        }

        .emergency-phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--primary-yellow);
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 700;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .emergency-phone:hover {
          background: var(--light-yellow);
          transform: translateY(-1px);
        }

        .emergency-icon {
          font-size: 1.1rem;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          gap: 4px;
        }

        .mobile-toggle span {
          width: 25px;
          height: 3px;
          background: var(--primary-blue);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu {
          position: fixed;
          top: var(--nav-height);
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--white);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .mobile-menu-content {
          padding: 2rem;
        }

        .mobile-nav-item {
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-nav-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .mobile-nav-link.active {
          color: var(--primary-blue);
        }

        .mobile-arrow {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .mobile-nav-link.active .mobile-arrow {
          transform: rotate(180deg);
        }

        .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: var(--background-light);
          margin: 0 -1rem;
          border-radius: 8px;
        }

        .mobile-dropdown.active {
          max-height: 500px;
        }

        .mobile-dropdown-section {
          padding: 1rem;
        }

        .mobile-dropdown-header {
          font-weight: 700;
          color: #233063;
          margin-bottom: 0.75rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #F4B81D;
          padding-bottom: 0.5rem;
        }

        .mobile-dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          color: #233063;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 6px;
          margin-bottom: 0.25rem;
          transition: all 0.3s ease;
        }

        .mobile-dropdown-link:hover {
          background: #e8ecf5;
          padding-left: 1.5rem;
        }

        .mobile-cta {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-cta-button {
          padding: 1rem;
          text-align: center;
          text-decoration: none;
          font-weight: 700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-cta-button:first-child {
          background: var(--primary-yellow);
          color: var(--primary-blue);
        }

        .mobile-emergency {
          background: var(--primary-blue);
          color: var(--white);
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>

      <header className="header">
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/685b3a80958e7f0d7584df27.svg"
              alt="Arber Construction Group Logo"
              width={50}
              height={50}
              style={{
                borderRadius: '12px',
                background: 'white',
                objectFit: 'contain',
                display: 'block',
                padding: '6px',
              }}
            />
            <div className="logo-text">
              <div className="logo-company">Arber Construction Group</div>
              <div className="logo-tagline">NYC&apos;s Renovation Experts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              {/* Services Dropdown */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Services
                  <span className="nav-arrow">▼</span>
                </a>
                <div className="dropdown">
                  <div className="dropdown-section">
                    <div className="dropdown-header">Main Services</div>
                    <Link href="/kitchen-remodeling-nyc" className="dropdown-link dropdown-featured">
                      Kitchen Remodeling
                    </Link>
                    <Link href="/bathroom-remodeling-nyc" className="dropdown-link dropdown-featured">
                      Bathroom Renovation
                    </Link>
                    <Link href="/basement-remodeling-nyc" className="dropdown-link dropdown-featured">
                      Basement Finishing
                    </Link>
                    <Link href="/nyc-apartment-renovations" className="dropdown-link">
                      Complete Renovations
                    </Link>
                  </div>
                  <div className="dropdown-section">
                    <div className="dropdown-header">Specialty Services</div>
                    <Link href="/specialty-services/co-op-condo-renovations" className="dropdown-link">
                      Co-op & Condo
                    </Link>
                    <Link href="/specialty-services/historic-brownstone-renovation" className="dropdown-link">
                      Historic Brownstones
                    </Link>
                    <Link href="/specialty-services/luxury-apartment-design" className="dropdown-link">
                      Luxury Design
                    </Link>
                    <Link href="/specialty-services/ada-accessible-renovations" className="dropdown-link">
                      ADA Accessible
                    </Link>
                  </div>
                </div>
              </li>

              {/* Service Areas Dropdown */}
              <li className="nav-item">
                <Link href="/service-areas" className="nav-link">
                  Service Areas
                  <span className="nav-arrow">▼</span>
                </Link>
                <div className="dropdown">
                  <div className="dropdown-section">
                    <div className="dropdown-header">NYC Boroughs</div>
                    <Link href="/manhattan-home-renovation" className="dropdown-link dropdown-featured">
                      Manhattan
                    </Link>
                    <Link href="/brooklyn-home-renovations" className="dropdown-link dropdown-featured">
                      Brooklyn
                    </Link>
                    <Link href="/queens-remodeling-contractors" className="dropdown-link dropdown-featured">
                      Queens
                    </Link>
                    <Link href="/bronx-remodeling-contractors" className="dropdown-link">
                      Bronx
                    </Link>
                    <Link href="/staten-island-remodeling" className="dropdown-link">
                      Staten Island
                    </Link>
                  </div>
                  <div className="dropdown-section">
                    <div className="dropdown-header">Featured Neighborhoods</div>
                    <Link href="/neighborhoods/astoria-renovations" className="dropdown-link">
                      Astoria
                    </Link>
                    <Link href="/neighborhoods/upper-east-side-renovations" className="dropdown-link">
                      Upper East Side
                    </Link>
                    <Link href="/neighborhoods/park-slope-renovation" className="dropdown-link">
                      Park Slope
                    </Link>
                  </div>
                </div>
              </li>

              {/* Portfolio */}
              <li className="nav-item">
                <Link href="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>

              {/* Blog */}
              <li className="nav-item">
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Emergency Contact */}
            <div className="emergency-contact">
              <a href="tel:646-206-5590" className="emergency-phone">
                <span className="emergency-icon">📞</span>
                (646) 206-5590
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {/* Services */}
          <div className="mobile-nav-item">
            <a
              href="#"
              className={`mobile-nav-link ${activeDropdown === 'services' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                toggleMobileDropdown('services')
              }}
            >
              Services
              <span className="mobile-arrow">▼</span>
            </a>
            <div className={`mobile-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
              <div className="mobile-dropdown-section">
                <div className="mobile-dropdown-header">Main Services</div>
                <Link href="/kitchen-remodeling-nyc" className="mobile-dropdown-link">
                  Kitchen Remodeling
                </Link>
                <Link href="/bathroom-remodeling-nyc" className="mobile-dropdown-link">
                  Bathroom Renovation
                </Link>
                <Link href="/basement-remodeling-nyc" className="mobile-dropdown-link">
                  Basement Finishing
                </Link>
                <Link href="/nyc-apartment-renovations" className="mobile-dropdown-link">
                  Complete Renovations
                </Link>
              </div>
              <div className="mobile-dropdown-section">
                <div className="mobile-dropdown-header">Specialty Services</div>
                <Link href="/specialty-services/co-op-condo-renovations" className="mobile-dropdown-link">
                  Co-op & Condo
                </Link>
                <Link href="/specialty-services/historic-brownstone-renovation" className="mobile-dropdown-link">
                  Historic Brownstones
                </Link>
                <Link href="/specialty-services/luxury-apartment-design" className="mobile-dropdown-link">
                  Luxury Design
                </Link>
                <Link href="/specialty-services/ada-accessible-renovations" className="mobile-dropdown-link">
                  ADA Accessible
                </Link>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mobile-nav-item">
            <a
              href="#"
              className={`mobile-nav-link ${activeDropdown === 'areas' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                toggleMobileDropdown('areas')
              }}
            >
              Service Areas
              <span className="mobile-arrow">▼</span>
            </a>
            <div className={`mobile-dropdown ${activeDropdown === 'areas' ? 'active' : ''}`}>
              <div className="mobile-dropdown-section">
                <div className="mobile-dropdown-header">NYC Boroughs</div>
                <Link href="/manhattan-home-renovation" className="mobile-dropdown-link">
                  Manhattan
                </Link>
                <Link href="/brooklyn-home-renovations" className="mobile-dropdown-link">
                  Brooklyn
                </Link>
                <Link href="/queens-remodeling-contractors" className="mobile-dropdown-link">
                  Queens
                </Link>
                <Link href="/bronx-remodeling-contractors" className="mobile-dropdown-link">
                  Bronx
                </Link>
                <Link href="/staten-island-remodeling" className="mobile-dropdown-link">
                  Staten Island
                </Link>
              </div>
              <div className="mobile-dropdown-section">
                <div className="mobile-dropdown-header">Featured Neighborhoods</div>
                <Link href="/neighborhoods/astoria-renovations" className="mobile-dropdown-link">
                  Astoria
                </Link>
                <Link href="/neighborhoods/upper-east-side-renovations" className="mobile-dropdown-link">
                  Upper East Side
                </Link>
                <Link href="/neighborhoods/park-slope-renovation" className="mobile-dropdown-link">
                  Park Slope
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mobile-nav-item">
            <Link href="/portfolio" className="mobile-nav-link">
              Portfolio
            </Link>
          </div>

          {/* About */}
          <div className="mobile-nav-item">
            <Link href="/about" className="mobile-nav-link">
              About
            </Link>
          </div>

          {/* Blog */}
          <div className="mobile-nav-item">
            <Link href="/blog" className="mobile-nav-link">
              Blog
            </Link>
          </div>

          {/* Contact */}
          <div className="mobile-nav-item">
            <Link href="/contact" className="mobile-nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="mobile-cta">
            <Link href="/get-quote" className="mobile-cta-button">
              Get Free Quote
            </Link>
            <a href="tel:646-206-5590" className="mobile-cta-button mobile-emergency">
              Emergency: (646) 206-5590
            </a>
          </div>
        </div>
      </div>
    </>
  )
} 