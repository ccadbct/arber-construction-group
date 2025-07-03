import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'NYC Apartment Renovation Contractors | Arber Construction - Transform Your Space',
  description: 'NYC\'s premier apartment renovation contractors specializing in kitchen renovations, bathroom remodeling, complete apartment transformations. Licensed, insured, and co-op board approved.',
  openGraph: {
    title: 'NYC Apartment Renovation Contractors | Arber Construction',
    description: 'Transform your NYC apartment with reliable contractors who get it done right. No drama. No surprises. Just beautiful results.',
    url: 'https://arberconstruction.com/',
  },
  keywords: 'NYC apartment renovation, apartment contractors, NYC kitchen remodeling, NYC bathroom renovation, Manhattan apartment renovation, Brooklyn apartment renovation, Queens apartment renovation',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-hero" style={{ position: 'relative', overflow: 'hidden', background: 'none', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
        {/* Hero Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <Image
            src="/images/homepage/hero-apartment-renovation.webp"
            alt="Professional NYC apartment renovation showcase - Arber Construction"
            fill
            priority
            style={{ 
              objectFit: 'cover',
              filter: 'brightness(0.5) contrast(1.1)',
            }}
          />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            
            {/* Left Column - Main Message */}
            <div>
              <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                The NYC Apartment Renovation Contractors Who Actually Get It Done
              </h1>
              
              <p style={{ fontSize: '1.25rem', fontWeight: '600', margin: '1.5rem 0', color: '#F4B81D', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                <strong>No drama. No surprises. Just beautiful results.</strong>
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <a href="/get-quote" className="btn btn-primary btn-lg" style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                  Get Your Free Honest Estimate
                </a>
                <br />
                <a href="tel:646-206-5590" className="btn btn-primary btn-lg">
                  Call Now: 646-206-5590
                </a>
              </div>
            </div>

            {/* Right Column - Benefits & Credentials */}
            <div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <h3 style={{ color: '#F4B81D', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Why NYC Chooses Arber Construction:</h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Show up when promised, finish on time & on budget</span>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Handle co-op board approvals & NYC permits</span>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>500+ apartment renovations completed</span>
                  </li>
                  <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Licensed, insured & EPA Lead-Safe certified</span>
                  </li>
                </ul>
                
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1rem', textAlign: 'center' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                    Serving Manhattan • Brooklyn • Queens • Bronx • Staten Island
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Temporary placeholder for other sections */}
      <section className="section">
        <div className="container">
          <h2>More sections to be added...</h2>
        </div>
      </section>
    </div>
  )
} 