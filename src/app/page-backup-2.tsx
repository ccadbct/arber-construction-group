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
    <>
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

      {/* NYC Apartment Renovation Experts Section */}
      <section className="section" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        overflow: 'hidden'
      }}>
                {/* Animated Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23233063' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'backgroundFloat 12s ease-in-out infinite'
        }} />
        
                {/* Floating Geometric Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, rgba(244, 184, 29, 0.25), rgba(35, 48, 99, 0.15))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          transform: 'rotate(45deg)',
          filter: 'blur(1px)'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '8%',
          width: '100px',
          height: '100px',
          background: 'rgba(244, 184, 29, 0.2)',
          transform: 'rotate(30deg)',
          animation: 'floatReverse 10s ease-in-out infinite',
          filter: 'blur(1px)'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '8%',
          width: '100px',
          height: '100px',
          border: '3px solid rgba(35, 48, 99, 0.4)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          boxShadow: '0 0 15px rgba(35, 48, 99, 0.2)'
        }} />
        
        {/* Additional floating element for more movement */}
        <div style={{
          position: 'absolute',
          top: '75%',
          left: '12%',
          width: '40px',
          height: '40px',
          background: 'rgba(35, 48, 99, 0.15)',
          borderRadius: '50%',
          animation: 'float 5s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
            NYC Apartment Renovation Experts in Every Borough
          </h2>
          
          {/* Manhattan - Image Left, Content Right */}
          <div className="borough-feature">
            <div className="borough-image">
              <Image
                src="/images/homepage/luxury-manhattan-apartment-renovation-interior.webp"
                alt="Luxury Manhattan apartment renovation interior"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                MANHATTAN
              </div>
            </div>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Manhattan Apartment Renovations</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Manhattan doesn&apos;t forgive mediocrity—it rewards excellence. Your <a href="/manhattan-home-renovation/">Manhattan apartment</a> sits atop the world&apos;s most expensive real estate. Every decision either costs you thousands or makes you millions.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-medium)', fontStyle: 'italic' }}>
                We architect renovations that make co-op boards beg for blueprints and competitors study your success.
              </p>
            </div>
          </div>

          {/* Brooklyn - Content Left, Image Right */}
          <div className="borough-feature">
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Brooklyn Apartment Renovations</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Brooklyn&apos;s boom isn&apos;t slowing down—it&apos;s accelerating exponentially. Your <a href="/brooklyn-home-renovations/">Brooklyn apartment</a> holds the keys to generational wealth.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-medium)', fontStyle: 'italic' }}>
                Park Slope brownstones, Williamsburg waterfront condos, DUMBO industrial conversions—we engineer renovations that make real estate agents fight over listings.
              </p>
            </div>
            <div className="borough-image">
              <Image
                src="/images/homepage/brooklyn-brownstone-living-room-renovation-park-slope.webp"
                alt="Brooklyn brownstone apartment renovation"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge" style={{ left: 'auto', right: '20px' }}>
                BROOKLYN
              </div>
            </div>
          </div>

          {/* Queens - Image Left, Content Right */}
          <div className="borough-feature">
            <div className="borough-image">
              <Image
                src="/images/homepage/queens-apartment-bathroom-renovation-modern-design.webp"
                alt="Queens apartment renovation with modern design"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                QUEENS
              </div>
            </div>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Queens Apartment Renovations</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                The insiders know: Queens is tomorrow&apos;s Manhattan today. Your <a href="/queens-remodeling-contractors/">Queens apartment</a> sits on the launch pad of NYC&apos;s next fortune cycle.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-medium)', fontStyle: 'italic' }}>
                From Astoria&apos;s artist enclaves to Forest Hills&apos; suburban sanctuaries, we craft renovations that position you ahead of the curve.
              </p>
            </div>
          </div>

          {/* Bronx - Content Left, Image Right */}
          <div className="borough-feature">
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Bronx Apartment Renovations</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                The Bronx&apos;s renaissance isn&apos;t coming—it&apos;s here and thriving. Your <a href="/bronx-remodeling-contractors/">Bronx apartment</a> occupies ground zero of NYC&apos;s most explosive growth market.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-medium)', fontStyle: 'italic' }}>
                From Grand Concourse classics to Riverdale luxury, we engineer renovations that position you ahead of NYC&apos;s next boom cycle.
              </p>
            </div>
            <div className="borough-image">
              <Image
                src="/images/homepage/westchester-apartment-bedroom-renovation-luxury-finishes.webp"
                alt="Bronx apartment renovation with luxury finishes"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge" style={{ left: 'auto', right: '20px' }}>
                BRONX
              </div>
            </div>
          </div>

          {/* Staten Island - Image Left, Content Right */}
          <div className="borough-feature">
            <div className="borough-image">
              <Image
                src="/images/homepage/staten-island-apartment-dining-room-renovation.webp"
                alt="Staten Island apartment renovation dining room"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                STATEN ISLAND
              </div>
            </div>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Staten Island Apartment Renovations</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Where space meets sophistication. Your Staten Island apartment delivers suburban comfort with Manhattan accessibility. We create renovations that maximize both comfort and value.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-medium)', fontStyle: 'italic' }}>
                From St. George waterfront views to Tottenville tranquility, we craft renovations that celebrate space and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert NYC Apartment Renovation Services - Service Spotlight */}
      <section className="section" style={{
        position: 'relative',
        background: 'linear-gradient(165deg, #ffffff 0%, #f8fafc 40%, #e2e8f0 100%)',
        overflow: 'hidden'
      }}>
        {/* Complementary Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F4B81D' fill-opacity='1'%3E%3Cpath d='M20 20v-10h2v10h10v2H22v10h-2V22H10v-2h10z'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'backgroundFloat 15s ease-in-out infinite reverse'
        }} />
        
        {/* Floating Service Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(244, 184, 29, 0.2), rgba(35, 48, 99, 0.1))',
          borderRadius: '12px',
          animation: 'float 10s ease-in-out infinite',
          transform: 'rotate(25deg)'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '8%',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(244, 184, 29, 0.3)',
          borderRadius: '50%',
          animation: 'floatReverse 12s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '5%',
          width: '30px',
          height: '30px',
          background: 'rgba(35, 48, 99, 0.15)',
          borderRadius: '6px',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '3s'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            color: 'var(--primary-blue)'
          }}>
            Expert NYC Apartment Renovation Services
          </h2>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: '4rem', 
            fontSize: '1.1rem', 
            color: 'var(--text-medium)',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}>
            Transform your NYC apartment with our specialized renovation services. From compact kitchens to complete makeovers.
          </p>
          
          {/* Service Spotlight Layout */}
          <div 
            className="service-spotlight-grid"
            style={{ 
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            
            {/* Featured Service - Kitchen (Large Hero) */}
            <div 
              className="spotlight-hero"
              style={{
                gridRow: '1 / 3',
                background: 'linear-gradient(135deg, var(--white) 0%, #fafbfc 100%)',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(244, 184, 29, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
            >
              {/* Kitchen Hero Content */}
              <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(244, 184, 29, 0.1)',
                  color: 'var(--primary-blue)',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  width: 'fit-content'
                }}>
                  ⭐ MOST POPULAR SERVICE
                </div>
                
                <h3 style={{ 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
                  marginBottom: '1rem', 
                  color: 'var(--primary-blue)',
                  lineHeight: '1.2'
                }}>
                  🏠 Apartment Kitchen Renovations
                </h3>
                
                <p style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  margin: '0 0 1.5rem 0', 
                  color: 'var(--primary-yellow)' 
                }}>
                  Turn Your Galley Kitchen Into a Gourmet Haven
                </p>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem',
                  color: 'var(--text-dark)' 
                }}>
                  NYC apartment kitchens demand ingenious solutions. Our <a href="/kitchen-remodeling-nyc/" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: '600' }}>apartment kitchen remodeling</a> specialists master the art of maximizing every square inch while delivering stunning results that would make any chef jealous.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                  <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                      <span>Space-maximizing cabinet designs</span>
                    </li>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                      <span>Co-op board compliant installations</span>
                    </li>
                  </ul>
                  <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                      <span>Noise-minimizing construction techniques</span>
                    </li>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                      <span>Custom solutions for unusual layouts</span>
                    </li>
                  </ul>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(244, 184, 29, 0.05)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-yellow)',
                  marginBottom: '2rem',
                  fontStyle: 'italic' 
                }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', lineHeight: '1.5' }}>
                    "They transformed our 80-square-foot kitchen into something you'd see in Architectural Digest. Incredible."
                  </p>
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--primary-blue)' }}>
                    — Maria S., Upper West Side
                  </span>
                </div>
                
                <div style={{ marginTop: 'auto' }}>
                  <a 
                    href="/kitchen-remodeling-nyc" 
                    className="btn btn-primary" 
                    style={{ 
                      fontSize: '1.1rem', 
                      padding: '1rem 2rem'
                    }}
                  >
                    Discover Kitchen Transformations →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Supporting Service Cards */}
            {/* Bathroom Card */}
                         <div 
               className="service-support-card"
               style={{
                 background: 'var(--white)',
                 borderRadius: '16px',
                 padding: '2rem',
                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                 border: '1px solid rgba(35, 48, 99, 0.05)',
                 transition: 'all 0.3s ease',
                 cursor: 'pointer'
               }}
             >
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(35, 48, 99, 0.1)',
                color: 'var(--primary-blue)',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                🛁 BATHROOM
              </div>
              
                             <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                 Luxury Spa Vibes
               </h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                 Even the tiniest NYC bathrooms can deliver five-star luxury and maximum functionality.
               </p>
               
               {/* Feature Icons + Stats */}
               <div style={{ marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>⚡</span>
                   <span style={{ color: 'var(--text-dark)' }}>3-5 day avg. timeline</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>💎</span>
                   <span style={{ color: 'var(--text-dark)' }}>Premium materials included</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>🏆</span>
                   <span style={{ color: 'var(--text-dark)' }}>100% satisfaction rate</span>
                 </div>
               </div>
               
               <a href="/bathroom-remodeling-nyc" style={{ 
                 color: 'var(--primary-blue)', 
                 textDecoration: 'none', 
                 fontWeight: '600',
                 fontSize: '0.9rem'
               }}>
                 Explore Bathrooms →
               </a>
            </div>
            
            {/* Complete Renovations Card */}
                         <div 
               className="service-support-card"
               style={{
                 background: 'var(--white)',
                 borderRadius: '16px',
                 padding: '2rem',
                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                 border: '1px solid rgba(244, 184, 29, 0.05)',
                 transition: 'all 0.3s ease',
                 cursor: 'pointer'
               }}
             >
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(244, 184, 29, 0.1)',
                color: 'var(--primary-blue)',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                🏗️ COMPLETE
              </div>
              
                             <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                 Total Makeovers
               </h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                 Full apartment transformations that orchestrate every detail and create apartments that feel twice their size.
               </p>
               
               {/* Feature Icons + Stats */}
               <div style={{ marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>📈</span>
                   <span style={{ color: 'var(--text-dark)' }}>40% avg. value increase</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>🎯</span>
                   <span style={{ color: 'var(--text-dark)' }}>Custom design solutions</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>⏰</span>
                   <span style={{ color: 'var(--text-dark)' }}>2-4 week completion</span>
                 </div>
               </div>
               
               <a href="/nyc-apartment-renovations" style={{ 
                 color: 'var(--primary-blue)', 
                 textDecoration: 'none', 
                 fontWeight: '600',
                 fontSize: '0.9rem'
               }}>
                 Complete Transformations →
               </a>
            </div>
          </div>
          
          {/* Basement Card - Full Width Bottom */}
                     <div 
             className="service-support-card basement-card"
             style={{
               background: 'linear-gradient(135deg, var(--white) 0%, #f8fafc 100%)',
               borderRadius: '16px',
               padding: '2rem 3rem',
               boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
               border: '1px solid rgba(35, 48, 99, 0.05)',
               transition: 'all 0.3s ease',
               cursor: 'pointer',
               display: 'grid',
               gridTemplateColumns: 'auto 1fr auto',
               alignItems: 'center',
               gap: '2rem'
             }}
           >
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(35, 48, 99, 0.1)',
              color: 'var(--primary-blue)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap'
            }}>
              🏠 BASEMENT REMODELING
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                Convert Dead Space Into Dream Space
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-medium)', margin: 0, lineHeight: '1.5' }}>
                Transform forgotten basement spaces into valuable living areas that boost your property's value and rental income potential.
              </p>
            </div>
            
            <a 
              href="/basement-remodeling-nyc" 
              className="btn btn-secondary"
              style={{ 
                whiteSpace: 'nowrap',
                padding: '0.8rem 1.5rem'
              }}
            >
              Explore Basements →
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Expertise Hub */}
      <section className="section" style={{
        position: 'relative',
        background: 'linear-gradient(160deg, var(--background-light) 0%, #ffffff 40%, #f0f4f8 100%)',
        overflow: 'hidden'
      }}>
        {/* Sophisticated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23233063' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'backgroundFloat 20s ease-in-out infinite'
        }} />
        
        {/* Floating Trust Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(35, 48, 99, 0.15), rgba(244, 184, 29, 0.08))',
          borderRadius: '20px',
          animation: 'float 14s ease-in-out infinite',
          transform: 'rotate(15deg)'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '50px',
          height: '50px',
          border: '3px solid rgba(244, 184, 29, 0.4)',
          borderRadius: '50%',
          animation: 'floatReverse 16s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '45%',
          right: '3%',
          width: '35px',
          height: '35px',
          background: 'rgba(35, 48, 99, 0.12)',
          borderRadius: '8px',
          animation: 'float 11s ease-in-out infinite',
          animationDelay: '4s'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            color: 'var(--primary-blue)'
          }}>
            Why NYC Apartment Owners Trust Arber Construction Group
          </h2>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: '4rem', 
            fontSize: '1.1rem', 
            color: 'var(--text-medium)',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}>
            From Queens specialization to Manhattan luxury, we deliver renovation excellence that NYC apartment owners count on.
          </p>

          {/* Trust Statistics Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>200+</div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-medium)',
                fontWeight: '600'
              }}>NYC Projects Completed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: 'var(--primary-yellow)',
                marginBottom: '0.5rem'
              }}>100%</div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-medium)',
                fontWeight: '600'
              }}>Client Satisfaction Rate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>15+</div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-medium)',
                fontWeight: '600'
              }}>Years NYC Experience</div>
            </div>
          </div>
          
          {/* Trust & Expertise Grid - Redesigned 2x2 Layout */}
          <div 
            className="trust-expertise-grid"
            style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            
            {/* NYC Expertise Card - Top Left */}
            <div 
              className="trust-hero"
              style={{
                background: 'linear-gradient(135deg, var(--white) 0%, #fafbfc 100%)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                border: '2px solid rgba(244, 184, 29, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(244, 184, 29, 0.15)',
                  color: 'var(--primary-blue)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}>
                  🏢 NYC APARTMENT RENOVATION SPECIALISTS
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem', 
                  color: 'var(--primary-blue)',
                  lineHeight: '1.3'
                }}>
                  We Understand NYC's Unique Apartment Challenges
                </h3>
                
                <p style={{ 
                  fontSize: '0.95rem', 
                  lineHeight: '1.5', 
                  marginBottom: '1.5rem',
                  color: 'var(--text-dark)' 
                }}>
                  Apartment renovations in NYC require contractors who understand the city's specific requirements. Arber Construction Group specializes in navigating co-op board approvals, building restrictions, and neighbor considerations that other apartment renovation contractors often struggle with. From pre-war buildings with unique quirks to modern high-rises with strict regulations, we handle every NYC apartment renovation challenge.
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    color: 'var(--primary-blue)', 
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    NYC Apartment Renovation Expertise:
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                      <span style={{ fontSize: '0.9rem' }}>Co-op and condo board approval processes</span>
                    </li>
                    <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                      <span style={{ fontSize: '0.9rem' }}>Building management coordination and permits</span>
                    </li>
                    <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                      <span style={{ fontSize: '0.9rem' }}>NYC building code compliance and inspections</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                      <span style={{ fontSize: '0.9rem' }}>Service elevator scheduling and material logistics</span>
                    </li>
                  </ul>
                </div>
                

              </div>
            </div>
            
            {/* Project Management Card - Top Right */}
            <div 
               className="trust-support-card"
               style={{
                 background: 'var(--white)',
                 borderRadius: '20px',
                 padding: '2.5rem',
                 boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                 border: '1px solid rgba(35, 48, 99, 0.05)',
                 transition: 'all 0.3s ease'
               }}
             >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(35, 48, 99, 0.1)',
                  color: 'var(--primary-blue)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}>
                  🔧 RELIABLE PROJECT MANAGEMENT
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-blue)', lineHeight: '1.3' }}>
                   Your Apartment Renovation Stays On Track
                 </h3>
                 <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                   NYC apartment renovations demand careful coordination and clear communication. Our project managers ensure your apartment renovation proceeds smoothly by handling deliveries, scheduling around building quiet hours, and maintaining professional relationships with your building management and neighbors throughout the renovation process.
                 </p>
                 
                 <div style={{ marginBottom: '1rem' }}>
                   <h4 style={{ 
                     fontSize: '1rem', 
                     color: 'var(--primary-blue)', 
                     marginBottom: '0.8rem',
                     fontWeight: '600'
                   }}>
                     Project Management Benefits:
                   </h4>
                 </div>
                 
                 <div style={{ marginBottom: '1.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Detailed renovation timelines and progress updates</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Building management and doorman coordination</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Material delivery scheduling and logistics</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Clear communication throughout your project</span>
                   </div>
                 </div>
                 

               </div>
            </div>
            
            {/* Efficient Process Card - Bottom Left */}
            <div 
               className="trust-support-card"
               style={{
                 background: 'var(--white)',
                 borderRadius: '20px',
                 padding: '2.5rem',
                 boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                 border: '1px solid rgba(244, 184, 29, 0.05)',
                 transition: 'all 0.3s ease'
               }}
             >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(244, 184, 29, 0.1)',
                  color: 'var(--primary-blue)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}>
                  ⚡ EFFICIENT RENOVATION PROCESS
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-blue)', lineHeight: '1.3' }}>
                   Minimize Disruption, Maximize Results
                 </h3>
                 <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                   We understand that living through an apartment renovation is challenging. Our streamlined renovation process and efficient scheduling minimize disruption to your daily routine while ensuring your NYC apartment renovation is completed on time and within budget.
                 </p>
                 
                 <div style={{ marginBottom: '1rem' }}>
                   <h4 style={{ 
                     fontSize: '1rem', 
                     color: 'var(--primary-blue)', 
                     marginBottom: '0.8rem',
                     fontWeight: '600'
                   }}>
                     Process Advantages:
                   </h4>
                 </div>
                 
                 <div style={{ marginBottom: '1.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Realistic timelines for apartment renovations</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Efficient work scheduling around your life</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Quality materials and skilled craftsmen</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Regular progress updates and communication</span>
                   </div>
                 </div>
                 

               </div>
            </div>
            
            {/* Complete Protection Card - Bottom Right */}
            <div 
               className="trust-support-card"
               style={{
                 background: 'var(--white)',
                 borderRadius: '20px',
                 padding: '2.5rem',
                 boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                 border: '1px solid rgba(244, 184, 29, 0.05)',
                 transition: 'all 0.3s ease'
               }}
             >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(244, 184, 29, 0.1)',
                  color: 'var(--primary-blue)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}>
                  🛡️ COMPLETE PROJECT PROTECTION
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-blue)', lineHeight: '1.3' }}>
                   Licensed, Insured, and Guaranteed
                 </h3>
                 <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                   Every apartment renovation project comes with comprehensive protection and warranties. Arber Construction Group maintains all required NYC licenses, carries full insurance coverage, and stands behind our apartment renovation work with written guarantees.
                 </p>
                 
                 <div style={{ marginBottom: '1rem' }}>
                   <h4 style={{ 
                     fontSize: '1rem', 
                     color: 'var(--primary-blue)', 
                     marginBottom: '0.8rem',
                     fontWeight: '600'
                   }}>
                     Protection Coverage:
                   </h4>
                 </div>
                 
                 <div style={{ marginBottom: '1.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Fully licensed NYC apartment renovation contractors</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Comprehensive liability and workers' compensation insurance</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>Written warranties on all renovation work</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                     <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                     <span style={{ color: 'var(--text-dark)' }}>EPA Lead-Safe certification for older buildings</span>
                   </div>
                 </div>
                 

               </div>
            </div>
          </div>


        </div>
      </section>

      {/* Success Stories Section - Horizontal Layout */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
            Apartment Renovation Success Stories
          </h2>
          
          {/* Story 1 - Manhattan */}
          <div 
            className="success-story-card"
            style={{ 
              display: 'flex',
              backgroundColor: 'var(--white)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              marginBottom: '3rem',
              minHeight: '350px'
            }}>
            <div style={{ flex: '0 0 40%', position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Manhattan co-op kitchen renovation before and after transformation"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                left: '20px', 
                backgroundColor: 'rgba(35, 48, 99, 0.9)', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                Before & After
              </div>
            </div>
            
            <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                  Manhattan Co-op Kitchen Revolution
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--primary-yellow)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Upper East Side Pre-War Building
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Challenge:</strong> 1950s galley kitchen, co-op board restrictions, zero counter space
                  </p>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Transformation:</strong> Sleek modern kitchen with hidden storage, premium appliances, and doubled workspace
                  </p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(35, 48, 99, 0.05)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-yellow)',
                  marginBottom: '2rem',
                  fontStyle: 'italic' 
                }}>
                  <p style={{ margin: '0 0 0.8rem 0', fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--text-dark)' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Result:</strong> "Our friends can't believe it's the same apartment. The board was so impressed, they're using our photos for building marketing!"
                  </p>
                  <span style={{ fontWeight: 'bold', fontSize: '1rem', color: 'var(--primary-blue)' }}>
                    — Jennifer & David L., Manhattan
                  </span>
                </div>
              </div>
              
              <div>
                <a href="/portfolio/manhattan-projects" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  View Manhattan Portfolio →
                </a>
              </div>
            </div>
          </div>

          {/* Story 2 - Brooklyn */}
          <div 
            className="success-story-card"
            style={{ 
              display: 'flex',
              backgroundColor: 'var(--white)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              marginBottom: '3rem',
              minHeight: '350px'
            }}>
            <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                  Brooklyn Brownstone Apartment Conversion
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--primary-yellow)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Park Slope Historic Building
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Challenge:</strong> Dark railroad apartment, outdated systems, historic preservation requirements
                  </p>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Transformation:</strong> Open-concept living with preserved architectural details and modern amenities
                  </p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(35, 48, 99, 0.05)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-yellow)',
                  marginBottom: '2rem',
                  fontStyle: 'italic' 
                }}>
                  <p style={{ margin: '0 0 0.8rem 0', fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--text-dark)' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Result:</strong> "Arber Construction respected our building's character while giving us everything we wanted in a modern home."
                  </p>
                  <span style={{ fontWeight: 'bold', fontSize: '1rem', color: 'var(--primary-blue)' }}>
                    — Alex M., Brooklyn
                  </span>
                </div>
              </div>
              
              <div>
                <a href="/portfolio/brooklyn-projects" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  View Brooklyn Portfolio →
                </a>
              </div>
            </div>

            <div style={{ flex: '0 0 40%', position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Brooklyn brownstone apartment renovation with preserved details"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
                backgroundColor: 'rgba(35, 48, 99, 0.9)', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                Historic Preservation
              </div>
            </div>
          </div>

          {/* Story 3 - Queens */}
          <div 
            className="success-story-card"
            style={{ 
              display: 'flex',
              backgroundColor: 'var(--white)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              marginBottom: '3rem',
              minHeight: '350px'
            }}>
            <div style={{ flex: '0 0 40%', position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Queens high-rise apartment luxury renovation with city views"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                left: '20px', 
                backgroundColor: 'rgba(35, 48, 99, 0.9)', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                Luxury Upgrade
              </div>
            </div>
            
            <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                  Queens High-Rise Luxury Upgrade
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--primary-yellow)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Long Island City Modern Building
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Challenge:</strong> Builder-grade finishes, poor layout, soundproofing issues
                  </p>
                  <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Transformation:</strong> Custom luxury finishes, optimized floor plan, enhanced acoustics
                  </p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(35, 48, 99, 0.05)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-yellow)',
                  marginBottom: '2rem',
                  fontStyle: 'italic' 
                }}>
                  <p style={{ margin: '0 0 0.8rem 0', fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--text-dark)' }}>
                    <strong style={{ color: 'var(--primary-blue)' }}>The Result:</strong> "They turned our generic apartment into a custom luxury home. Worth every penny."
                  </p>
                  <span style={{ fontWeight: 'bold', fontSize: '1rem', color: 'var(--primary-blue)' }}>
                    — Priya & James K., Queens
                  </span>
                </div>
              </div>
              
              <div>
                <a href="/portfolio/queens-projects" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  View Queens Portfolio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Spotlight Design */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1a365d 50%, var(--primary-blue) 100%)',
        padding: '5rem 0',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(244, 184, 29, 0.1), rgba(244, 184, 29, 0.05))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '20px',
          transform: 'rotate(45deg)',
          animation: 'floatReverse 10s ease-in-out infinite'
        }}></div>

        <div className="container">
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            color: 'white'
          }}>
            {/* Main Heading */}
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              marginBottom: '1rem',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              Start Your NYC Apartment Renovation Today
            </h2>
            
            <h3 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', 
              marginBottom: '1rem',
              color: 'var(--primary-yellow)',
              fontWeight: '600'
            }}>
              Ready to Get Your Apartment Renovation Started?
            </h3>
            
            <div style={{
              backgroundColor: 'rgba(244, 184, 29, 0.15)',
              display: 'inline-block',
              padding: '1rem 2rem',
              borderRadius: '50px',
              marginBottom: '2rem',
              border: '2px solid var(--primary-yellow)'
            }}>
              <p style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold',
                margin: 0,
                color: 'var(--primary-yellow)'
              }}>
                Free Apartment Renovation Consultation
              </p>
            </div>
            
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.6',
              marginBottom: '3rem',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              Our NYC apartment renovation contractors will visit your home, discuss your goals, and provide an honest estimate with no hidden surprises. We'll explain the renovation process, timeline, and answer all your questions about your apartment renovation project.
            </p>
            
            {/* Benefits Section */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '3rem',
              marginBottom: '3rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              color: 'var(--text-dark)'
            }}>
              <h4 style={{ 
                fontSize: '1.6rem', 
                marginBottom: '2rem',
                color: 'var(--primary-blue)',
                fontWeight: 'bold'
              }}>
                What You Get:
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--primary-yellow)', marginRight: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>✓</span>
                  <span>Complete apartment assessment and renovation recommendations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--primary-yellow)', marginRight: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>✓</span>
                  <span>Detailed timeline and budget breakdown for your project</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--primary-yellow)', marginRight: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>✓</span>
                  <span>Expert advice on permits and building requirements</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--primary-yellow)', marginRight: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>✓</span>
                  <span>Clear, written estimate with no hidden costs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--primary-yellow)', marginRight: '1rem', fontSize: '1.3rem', fontWeight: 'bold' }}>✓</span>
                  <span>Honest guidance on what's possible within your budget</span>
                </div>
              </div>
            </div>
            
            {/* Main CTA Button */}
            <div style={{ marginBottom: '3rem' }}>
              <a 
                href="/get-quote" 
                className="btn btn-primary"
                style={{ 
                  fontSize: '1.3rem', 
                  padding: '1.5rem 3rem',
                  background: 'linear-gradient(135deg, var(--primary-yellow) 0%, #f1a91b 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'var(--primary-blue)',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 15px 30px rgba(244, 184, 29, 0.4)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Schedule Your Free Apartment Renovation Consultation
              </a>
            </div>
            
            {/* Contact Information */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '600'
                }}>
                  Call NYC's Reliable Apartment Renovation Contractors:
                </p>
                <a 
                  href="tel:646-206-5590" 
                  style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold',
                    color: 'var(--primary-yellow)',
                    textDecoration: 'none',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  646-206-5590
                </a>
              </div>
              
              <div style={{ 
                width: '2px', 
                height: '60px', 
                backgroundColor: 'rgba(255, 255, 255, 0.3)' 
              }}></div>
              
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '600'
                }}>
                  Text Us Your Photos:
                </p>
                <a 
                  href="sms:646-206-5590" 
                  style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold',
                    color: 'var(--primary-yellow)',
                    textDecoration: 'none',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  646-206-5590
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - NYC Coverage Map */}
      <section style={{
        position: 'relative',
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23233063' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              marginBottom: '1rem',
              color: 'var(--primary-blue)',
              fontWeight: 'bold'
            }}>
              NYC Apartment Renovation Areas We Serve
            </h2>
            <p style={{ 
              fontSize: '1.3rem', 
              color: 'var(--text-dark)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Bringing premium apartment renovations to NYC's most prestigious neighborhoods
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Manhattan Card */}
            <div 
              className="borough-service-card"
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}>
              {/* Borough Icon/Background */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(35, 48, 99, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--primary-blue)'
              }}>
                🏙️
              </div>
              
              <div style={{
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Premium Borough
              </div>
              
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)',
                fontWeight: 'bold'
              }}>
                Manhattan
              </h3>
              
                             <div style={{
                 fontSize: '1.1rem',
                 lineHeight: '1.8',
                 color: 'var(--text-dark)',
                 marginBottom: '2rem'
               }}>
                 <a href="/manhattan-home-renovation/upper-east-side-renovations/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>Upper East Side</a> | <a href="/manhattan-home-renovation/upper-west-side-remodeling/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>Upper West Side</a> | <a href="/manhattan-home-renovation/soho-apartment-renovation/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>SoHo</a> | <a href="/manhattan-home-renovation/tribeca-home-renovation/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>TriBeca</a> | <span style={{ fontWeight: '600' }}>Midtown</span> | <span style={{ fontWeight: '600' }}>Financial District</span>
               </div>
              
              <div style={{
                backgroundColor: 'rgba(244, 184, 29, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                fontSize: '0.95rem',
                color: 'var(--text-dark)',
                fontWeight: '500'
              }}>
                ⭐ Manhattan's premier apartment renovation specialists
              </div>
            </div>

            {/* Brooklyn Card */}
            <div 
              className="borough-service-card"
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}>
              {/* Borough Icon/Background */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(35, 48, 99, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--primary-blue)'
              }}>
                🌉
              </div>
              
              <div style={{
                backgroundColor: 'var(--primary-yellow)',
                color: 'var(--primary-blue)',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Historic Borough
              </div>
              
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)',
                fontWeight: 'bold'
              }}>
                Brooklyn
              </h3>
              
              <div style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--text-dark)',
                marginBottom: '2rem'
              }}>
                <span style={{ fontWeight: '600' }}>Park Slope</span> | <span style={{ fontWeight: '600' }}>Williamsburg</span> | <span style={{ fontWeight: '600' }}>DUMBO</span> | <span style={{ fontWeight: '600' }}>Brooklyn Heights</span> | <span style={{ fontWeight: '600' }}>Carroll Gardens</span> | <span style={{ fontWeight: '600' }}>Prospect Heights</span>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(244, 184, 29, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                fontSize: '0.95rem',
                color: 'var(--text-dark)',
                fontWeight: '500'
              }}>
                🏛️ Preserving Brooklyn's architectural heritage with modern updates
              </div>
            </div>

            {/* Queens Card */}
            <div 
              className="borough-service-card"
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}>
              {/* Borough Icon/Background */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(35, 48, 99, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--primary-blue)'
              }}>
                🏘️
              </div>
              
              <div style={{
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Our Specialty
              </div>
              
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)',
                fontWeight: 'bold'
              }}>
                Queens
              </h3>
              
                             <div style={{
                 fontSize: '1.1rem',
                 lineHeight: '1.8',
                 color: 'var(--text-dark)',
                 marginBottom: '2rem'
               }}>
                 <a href="/queens-remodeling-contractors/astoria-renovations/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>Astoria</a> | <a href="/queens-remodeling-contractors/long-island-city-remodeling/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>Long Island City</a> | <a href="/queens-remodeling-contractors/forest-hills-contractors/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>Forest Hills</a> | <a href="/queens-remodeling-contractors/flushing-home-renovation/" style={{ fontWeight: '600', color: 'var(--primary-blue)', textDecoration: 'none' }}>Flushing</a> | <span style={{ fontWeight: '600' }}>Elmhurst</span> | <span style={{ fontWeight: '600' }}>Bayside</span>
               </div>
              
              <div style={{
                backgroundColor: 'rgba(244, 184, 29, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                fontSize: '0.95rem',
                color: 'var(--text-dark)',
                fontWeight: '500'
              }}>
                🏆 200+ completed Queens renovations - Our home borough specialty
              </div>
            </div>
          </div>
          
          {/* Coverage Stats */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
          }}>
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>
                3
              </div>
              <div style={{ 
                fontSize: '1.1rem',
                color: 'var(--text-dark)',
                fontWeight: '600'
              }}>
                NYC Boroughs
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>
                18
              </div>
              <div style={{ 
                fontSize: '1.1rem',
                color: 'var(--text-dark)',
                fontWeight: '600'
              }}>
                Premium Neighborhoods
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>
                100%
              </div>
              <div style={{ 
                fontSize: '1.1rem',
                color: 'var(--text-dark)',
                fontWeight: '600'
              }}>
                NYC Coverage
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>
                24/7
              </div>
              <div style={{ 
                fontSize: '1.1rem',
                color: 'var(--text-dark)',
                fontWeight: '600'
              }}>
                Emergency Service
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 