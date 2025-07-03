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
          
          {/* Trust & Expertise Grid */}
          <div 
            className="trust-expertise-grid"
            style={{ 
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            
            {/* Featured Trust - Queens Specialists (Large Hero) */}
            <div 
              className="trust-hero"
              style={{
                gridRow: '1 / 3',
                background: 'linear-gradient(135deg, var(--white) 0%, #fafbfc 100%)',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                border: '2px solid rgba(244, 184, 29, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(244, 184, 29, 0.15)',
                  color: 'var(--primary-blue)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  width: 'fit-content'
                }}>
                  👑 QUEENS RENOVATION SPECIALISTS
                </div>
                
                <h3 style={{ 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
                  marginBottom: '1rem', 
                  color: 'var(--primary-blue)',
                  lineHeight: '1.2'
                }}>
                  We Understand NYC's Unique Apartment Challenges
                </h3>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  color: 'var(--text-dark)' 
                }}>
                  Apartment renovations in NYC require contractors who understand the city's specific requirements. Arber Construction Group specializes in navigating co-op board approvals, building restrictions, and neighbor considerations that other apartment renovation contractors often struggle with. From pre-war buildings with unique quirks to modern high-rises with strict regulations, we handle every NYC apartment renovation challenge.
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--primary-blue)', 
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    NYC Apartment Renovation Expertise:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                        <span>Co-op and condo board approval processes</span>
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                        <span>Building management coordination and permits</span>
                      </li>
                    </ul>
                    <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                        <span>NYC building code compliance and inspections</span>
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1.1rem' }}>✓</span>
                        <span>Service elevator scheduling and material logistics</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(35, 48, 99, 0.05)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary-blue)',
                  marginBottom: '2rem',
                  fontStyle: 'italic' 
                }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', lineHeight: '1.5' }}>
                    "Arber Construction Group handled every detail of our co-op renovation perfectly. They even coordinated with our building management better than we could!"
                  </p>
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--primary-blue)' }}>
                    — Sarah & Mike T., Forest Hills
                  </span>
                </div>
                
                <div style={{ marginTop: 'auto' }}>
                  <a 
                    href="/about" 
                    className="btn btn-primary" 
                    style={{ 
                      fontSize: '1.1rem', 
                      padding: '1rem 2rem'
                    }}
                  >
                    Learn About Our Team →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Supporting Trust Cards */}
            {/* Project Management Card */}
            <div 
               className="trust-support-card"
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
                🔧 RELIABLE PROJECT MANAGEMENT
              </div>
              
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                 Your Apartment Renovation Stays On Track
               </h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                 NYC apartment renovations demand careful coordination and clear communication. Our project managers ensure your apartment renovation proceeds smoothly by handling deliveries, scheduling around building quiet hours, and maintaining professional relationships with your building management and neighbors throughout the renovation process.
               </p>
               
               <div style={{ marginBottom: '1rem' }}>
                 <h5 style={{ 
                   fontSize: '0.95rem', 
                   color: 'var(--primary-blue)', 
                   marginBottom: '0.8rem',
                   fontWeight: '600'
                 }}>
                   Project Management Benefits:
                 </h5>
               </div>
               
               {/* Trust Icons + Stats */}
               <div style={{ marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Detailed renovation timelines and progress updates</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Building management and doorman coordination</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Material delivery scheduling and logistics</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Clear communication throughout your project</span>
                 </div>
               </div>
               
               <a href="/our-process" style={{ 
                 color: 'var(--primary-blue)', 
                 textDecoration: 'none', 
                 fontWeight: '600',
                 fontSize: '0.9rem'
               }}>
                 Our Process →
               </a>
            </div>
            
            {/* Efficient Process Card */}
            <div 
               className="trust-support-card"
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
                ⚡ EFFICIENT PROCESS
              </div>
              
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                 Minimize Disruption, Maximize Results
               </h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                 We understand that living through an apartment renovation is challenging. Our streamlined renovation process and efficient scheduling minimize disruption to your daily routine while ensuring your NYC apartment renovation is completed on time and within budget.
               </p>
               
               <div style={{ marginBottom: '1rem' }}>
                 <h5 style={{ 
                   fontSize: '0.95rem', 
                   color: 'var(--primary-blue)', 
                   marginBottom: '0.8rem',
                   fontWeight: '600'
                 }}>
                   Process Advantages:
                 </h5>
               </div>
               
               {/* Trust Icons + Stats */}
               <div style={{ marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Realistic timelines for apartment renovations</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Efficient work scheduling around your life</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Quality materials and skilled craftsmen</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Regular progress updates and communication</span>
                 </div>
               </div>
               
               <a href="/renovation-process" style={{ 
                 color: 'var(--primary-blue)', 
                 textDecoration: 'none', 
                 fontWeight: '600',
                 fontSize: '0.9rem'
               }}>
                 Our Renovation Process →
               </a>
            </div>
            
            {/* Quality & Protection Card */}
            <div 
               className="trust-support-card"
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
                🛡️ COMPLETE PROJECT PROTECTION
              </div>
              
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                 Licensed, Insured, and Guaranteed
               </h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                 Every apartment renovation project comes with comprehensive protection and warranties. Arber Construction Group maintains all required NYC licenses, carries full insurance coverage, and stands behind our apartment renovation work with written guarantees.
               </p>
               
               <div style={{ marginBottom: '1rem' }}>
                 <h5 style={{ 
                   fontSize: '0.95rem', 
                   color: 'var(--primary-blue)', 
                   marginBottom: '0.8rem',
                   fontWeight: '600'
                 }}>
                   Protection Coverage:
                 </h5>
               </div>
               
               {/* Trust Icons + Certifications */}
               <div style={{ marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Fully licensed NYC apartment renovation contractors</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Comprehensive liability and workers' compensation insurance</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>Written warranties on all renovation work</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                   <span style={{ color: 'var(--primary-yellow)', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                   <span style={{ color: 'var(--text-dark)' }}>EPA Lead-Safe certification for older buildings</span>
                 </div>
               </div>
               
               <a href="/guarantees" style={{ 
                 color: 'var(--primary-blue)', 
                 textDecoration: 'none', 
                 fontWeight: '600',
                 fontSize: '0.9rem'
               }}>
                 Our Guarantees →
               </a>
            </div>
          </div>

          {/* Enhanced Team Photo Section */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '3rem',
            background: 'linear-gradient(135deg, var(--white) 0%, #fafbfc 100%)',
            borderRadius: '20px',
            padding: '3rem 2rem',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1rem', 
              color: 'var(--primary-blue)' 
            }}>
              Meet Your NYC Renovation Team
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-medium)', 
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Led by experienced professionals who understand NYC's unique renovation challenges.
            </p>
            
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '600px', 
              height: '350px', 
              margin: '0 auto', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}>
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Arber Construction Group team of NYC apartment renovation contractors"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(35, 48, 99, 0.9))',
                color: 'white',
                padding: '3rem 2rem 2rem',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: 0, marginBottom: '0.5rem' }}>
                  The Arber Construction Group Team
                </p>
                <p style={{ fontSize: '1rem', margin: 0, opacity: 0.95, marginBottom: '1rem' }}>
                  Licensed, Insured & EPA Lead-Safe Certified Contractors
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '2rem', 
                  flexWrap: 'wrap' 
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>15+</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Years Experience</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>200+</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Projects Completed</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>5★</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Client Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Apartment Renovation Success Stories
          </h2>
          
          <div className="grid grid-3">
            <div className="card">
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Manhattan co-op kitchen renovation before and after transformation"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '10px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  Before & After
                </div>
              </div>
              <h4>Manhattan Co-op Kitchen Revolution</h4>
              <p className="subtitle">Upper East Side Pre-War Building</p>
              <p><strong>The Challenge:</strong> 1950s galley kitchen, co-op board restrictions, zero counter space</p>
              <p><strong>The Transformation:</strong> Sleek modern kitchen with hidden storage, premium appliances, and doubled workspace</p>
              <div className="testimonial" style={{ fontStyle: 'italic', margin: '1rem 0' }}>
                &quot;Our friends can&apos;t believe it&apos;s the same apartment. The board was so impressed, they&apos;re using our photos for building marketing!&quot;<br />
                <span style={{ fontWeight: 'bold' }}>— Jennifer & David L., Manhattan</span>
              </div>
              <a href="/portfolio/manhattan-projects" className="btn btn-secondary">
                View Manhattan Portfolio →
              </a>
            </div>
            
            <div className="card">
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Brooklyn brownstone apartment renovation with preserved details"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '10px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  Historic Preservation
                </div>
              </div>
              <h4>Brooklyn Brownstone Apartment Conversion</h4>
              <p className="subtitle">Park Slope Historic Building</p>
              <p><strong>The Challenge:</strong> Dark railroad apartment, outdated systems, historic preservation requirements</p>
              <p><strong>The Transformation:</strong> Open-concept living with preserved architectural details and modern amenities</p>
              <div className="testimonial" style={{ fontStyle: 'italic', margin: '1rem 0' }}>
                &quot;Arber Construction respected our building&apos;s character while giving us everything we wanted in a modern home.&quot;<br />
                <span style={{ fontWeight: 'bold' }}>— Alex M., Brooklyn</span>
              </div>
              <a href="/portfolio/brooklyn-projects" className="btn btn-secondary">
                View Brooklyn Portfolio →
              </a>
            </div>
            
            <div className="card">
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Queens high-rise apartment luxury renovation with city views"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '10px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  Luxury Upgrade
                </div>
              </div>
              <h4>Queens High-Rise Luxury Upgrade</h4>
              <p className="subtitle">Long Island City Modern Building</p>
              <p><strong>The Challenge:</strong> Builder-grade finishes, poor layout, soundproofing issues</p>
              <p><strong>The Transformation:</strong> Custom luxury finishes, optimized floor plan, enhanced acoustics</p>
              <div className="testimonial" style={{ fontStyle: 'italic', margin: '1rem 0' }}>
                &quot;They turned our generic apartment into a custom luxury home. Worth every penny.&quot;<br />
                <span style={{ fontWeight: 'bold' }}>— Priya & James K., Queens</span>
              </div>
              <a href="/portfolio/queens-projects" className="btn btn-secondary">
                View Queens Portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Start Your NYC Apartment Renovation Today
          </h2>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3>Ready to Get Your Apartment Renovation Started?</h3>
            <p className="subtitle">
              <strong>Free Apartment Renovation Consultation</strong>
            </p>
            <p>
              Our NYC apartment renovation contractors will visit your home, discuss your goals, and provide an honest estimate with no hidden surprises. We&apos;ll explain the renovation process, timeline, and answer all your questions about your apartment renovation project.
            </p>
          </div>
          
          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <h4>What You Get:</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>✓ Complete apartment assessment and renovation recommendations</li>
                <li>✓ Detailed timeline and budget breakdown for your project</li>
                <li>✓ Expert advice on permits and building requirements</li>
                <li>✓ Clear, written estimate with no hidden costs</li>
                <li>✓ Honest guidance on what&apos;s possible within your budget</li>
              </ul>
            </div>
            
            <div className="card">
              <div style={{ position: 'relative', width: '100%', height: '150px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Free apartment renovation consultation with Arber Construction contractors"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <h4>Contact Information:</h4>
              <p><strong>Call NYC&apos;s Reliable Apartment Renovation Contractors:</strong></p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>
                <a href="tel:646-206-5590">646-206-5590</a>
              </p>
              <p><strong>Text Us Your Photos:</strong></p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                <a href="sms:646-206-5590">646-206-5590</a>
              </p>
            </div>
          </div>
          
          <div className="hero-cta" style={{ textAlign: 'center' }}>
            <a href="/get-quote" className="btn btn-primary btn-lg">
              Schedule Your Free Apartment Renovation Consultation
            </a>
            <a href="tel:646-206-5590" className="btn btn-secondary btn-lg">
              Call Now: 646-206-5590
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            NYC Apartment Renovation Areas We Serve
          </h2>
          
          <div className="grid grid-3">
            <div className="card">
              <h4>Manhattan</h4>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li><a href="/manhattan-home-renovation/upper-east-side-renovations/">Upper East Side</a></li>
                <li><a href="/manhattan-home-renovation/upper-west-side-remodeling/">Upper West Side</a></li>
                <li><a href="/manhattan-home-renovation/soho-apartment-renovation/">SoHo</a></li>
                <li><a href="/manhattan-home-renovation/tribeca-home-renovation/">TriBeca</a></li>
                <li>Midtown</li>
                <li>Financial District</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Brooklyn</h4>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Park Slope</li>
                <li>Williamsburg</li>
                <li>DUMBO</li>
                <li>Brooklyn Heights</li>
                <li>Carroll Gardens</li>
                <li>Prospect Heights</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Queens</h4>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li><a href="/queens-remodeling-contractors/astoria-renovations/">Astoria</a></li>
                <li><a href="/queens-remodeling-contractors/long-island-city-remodeling/">Long Island City</a></li>
                <li><a href="/queens-remodeling-contractors/forest-hills-contractors/">Forest Hills</a></li>
                <li><a href="/queens-remodeling-contractors/flushing-home-renovation/">Flushing</a></li>
                <li>Elmhurst</li>
                <li>Bayside</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 