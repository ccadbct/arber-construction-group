import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kitchen Remodeling NYC | Arber Construction Group',
  description: 'NYC\'s premier kitchen remodeling contractors specializing in kitchen renovations, bathroom remodeling, basement finishing, and complete home renovations across all NYC boroughs.',
  keywords: 'kitchen remodeling NYC, kitchen renovation, NYC contractors, Manhattan kitchen remodeling, Brooklyn kitchen renovation, Queens kitchen remodeling',
  openGraph: {
    title: 'Kitchen Remodeling NYC | Arber Construction Group',
    description: 'Transform your NYC kitchen with our expert remodeling services. Licensed, insured, and specialized in NYC requirements.',
    url: 'https://arberconstruction.com/kitchen-remodeling-nyc/',
    images: [
      {
        url: 'https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d51bfbe05b523c093.webp',
        width: 1200,
        height: 630,
        alt: 'Beautiful NYC kitchen renovation by Arber Construction Group',
      },
    ],
  },
}

export default function KitchenRemodelingNYCPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero" style={{ position: 'relative', overflow: 'hidden', background: 'none', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
        {/* Hero Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <Image
            src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d51bfbe05b523c093.webp"
            alt="Beautiful NYC kitchen renovation by Arber Construction Group"
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
                The NYC Kitchen Remodeling Contractors Who Actually Get It Done Right
              </h1>
              
              <p style={{ fontSize: '1.25rem', fontWeight: '600', margin: '1.5rem 0', color: '#F4B81D', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                <strong>Your kitchen is driving you absolutely insane.</strong>
              </p>
              
              <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Every day, you fight the same losing battle. Can&apos;t find anything. No counter space. Cabinets that barely close. A layout that makes cooking feel like combat.
              </p>
              
              <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                <strong>We specialize in making impossible NYC kitchens work like they should.</strong> Cramped galleys that suddenly have room to breathe. Storage that actually stores things. Workflows that don&apos;t require a PhD in logistics.
              </p>
              
              <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                <strong>Stop fighting your kitchen. Make it work for you.</strong>
              </p>
            </div>

            {/* Right Column - Benefits & Credentials */}
            <div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <h3 style={{ color: '#F4B81D', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Why NYC Chooses Us for Kitchen Remodeling:</h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>500+ NYC kitchen renovations completed</span>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Handle co-op boards & NYC permit nightmares</span>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Realistic timelines, no kitchen drama</span>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Smart layouts for impossible NYC spaces</span>
                  </li>
                  <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4B81D', marginRight: '0.5rem', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'white', fontSize: '1.1rem' }}>Licensed, insured & EPA Lead-Safe certified</span>
                  </li>
                </ul>
                
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1rem', textAlign: 'center' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                    Kitchen Specialists: Manhattan • Brooklyn • Queens • Bronx
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section" id="calculator" style={{
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
        
        {/* Floating Elements */}
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Calculator Copy */}
            <div>
              <h2>Find Out What Your NYC Kitchen Renovation Actually Costs</h2>
              
              <h3>Stop Guessing. Start Planning.</h3>
              
              <p>The biggest fear about kitchen remodeling? <strong>Not knowing what you&apos;re getting into.</strong> Will it cost $30K or $100K? What about all those &quot;hidden&quot; NYC fees everyone warns you about?</p>
              
              <p>We&apos;ve built the most accurate <strong>kitchen renovation calculator</strong> specifically for New York City. It factors in everything the other guys &quot;forget&quot; to mention:</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <strong>NYC permit costs and building requirements</strong>
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <strong>Co-op board approval complexities</strong>
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <strong>Service elevator logistics and building fees</strong>
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <strong>Material delivery challenges in the city</strong>
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <strong>Your specific building age and property type</strong>
                </li>
              </ul>
              
              <p><strong>Takes 2 minutes. Gives you real numbers.</strong> No surprise costs. No hidden fees. Just honest pricing so you can make an informed decision about your kitchen renovation.</p>
              
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(244, 184, 29, 0.1)',
                color: 'var(--primary-blue)',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginTop: '1rem'
              }}>
                Used by 500+ NYC homeowners to plan their dream kitchens.
              </div>
            </div>
            
            {/* Calculator Placeholder */}
            <div>
              {/* Kitchen Calculator will be added here */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                maxWidth: '650px',
                margin: 'auto',
                padding: '25px',
                background: 'linear-gradient(135deg, #e8ecf5 0%, #f2f5fb 50%, #f8faff 100%)',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(35, 48, 99, 0.15)',
                border: '2px solid rgba(35, 48, 99, 0.15)'
              }}>
                <h2 style={{ color: '#233063', fontSize: '28px', textAlign: 'center', marginBottom: '6px', fontWeight: 900, textShadow: '1px 1px 2px rgba(35, 48, 99, 0.1)' }}>
                  NYC Kitchen Renovation Calculator
                </h2>
                <p style={{ fontSize: '16px', color: '#5a6b9a', textAlign: 'center', marginBottom: '18px', fontWeight: 500 }}>
                  Get an instant estimate for your dream kitchen:
                </p>
                
                {/* Calculator form will be implemented with client-side JavaScript */}
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <p style={{ color: '#5a6b9a', marginBottom: '1rem' }}>
                    Interactive calculator loading...
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#5a6b9a' }}>
                    Get instant estimates based on your specific NYC requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Borough Kitchen Services Section */}
      <section className="section section-alt" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23233063' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3Ccircle cx='20' cy='60' r='1'/%3E%3Ccircle cx='60' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'backgroundFloat 20s ease-in-out infinite'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>NYC Kitchen Remodeling: We Know Every Borough</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginTop: '1rem' }}>
              Each NYC borough has unique challenges. We&apos;ve mastered them all.
            </p>
          </div>
          
          {/* Manhattan - Image Left, Content Right */}
          <div className="borough-feature" style={{ marginBottom: '4rem' }}>
            <div className="borough-image">
              <Image
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d8467c095ef9e2f5b.webp"
                alt="Manhattan kitchen remodeling project"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                📍 MANHATTAN
              </div>
            </div>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Manhattan Kitchen Remodeling</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1.5rem' }}>
                High-End Kitchen Renovations for Manhattan Living
              </p>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Manhattan kitchens come with unique challenges: co-op board politics, strict building rules, and spaces that cost $2,000 per square foot. We&apos;ve handled Manhattan kitchen renovations in everything from pre-war Upper East Side apartments to modern TriBeca lofts.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Co-op board applications and approval processes
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Historic building restrictions and requirements
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Premium material selections that match the neighborhood
                </li>
              </ul>
              
              <div style={{
                background: 'rgba(244, 184, 29, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                margin: '1.5rem 0',
                fontStyle: 'italic'
              }}>
                &quot;They navigated our co-op board like pros and delivered exactly what they promised. Our UES kitchen finally works for how we actually live.&quot;
                <div style={{ fontWeight: 600, color: 'var(--primary-blue)', textAlign: 'right', fontSize: '0.95rem', marginTop: '1rem' }}>
                  - Sarah M., Upper East Side
                </div>
              </div>
            </div>
          </div>

          {/* Brooklyn - Content Left, Image Right */}
          <div className="borough-feature" style={{ marginBottom: '4rem' }}>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Brooklyn Kitchen Renovations</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1.5rem' }}>
                Brownstones, Condos, and Everything Brooklyn
              </p>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Brooklyn kitchen remodeling means understanding the borough&apos;s character - from Park Slope brownstones to Williamsburg industrial conversions. We&apos;ve worked on Brooklyn kitchen renovations that respect the original architecture while adding modern functionality.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Brownstone kitchen layouts and structural considerations
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Preserving original details while upgrading function
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Open concept designs that work for family life
                </li>
              </ul>
              
              <div style={{
                background: 'rgba(244, 184, 29, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                margin: '1.5rem 0',
                fontStyle: 'italic'
              }}>
                &quot;Our Park Slope kitchen went from cramped and dark to the center of our home. They understood what we needed without breaking the bank.&quot;
                <div style={{ fontWeight: 600, color: 'var(--primary-blue)', textAlign: 'right', fontSize: '0.95rem', marginTop: '1rem' }}>
                  - Michael & Lisa R., Park Slope
                </div>
              </div>
            </div>
            <div className="borough-image">
              <Image
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d021f4262d3be6a52.webp"
                alt="Brooklyn kitchen remodeling project"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                📍 BROOKLYN
              </div>
            </div>
          </div>

          {/* Queens - Image Left, Content Right */}
          <div className="borough-feature" style={{ marginBottom: '4rem' }}>
            <div className="borough-image">
              <Image
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d8693885f76125228.webp"
                alt="Queens kitchen remodeling project"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                📍 QUEENS
              </div>
            </div>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Queens Kitchen Remodeling</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1.5rem' }}>
                Smart Kitchen Renovations for Queens Families
              </p>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Queens offers some of the best value for kitchen renovation investments in NYC. Our Queens kitchen remodeling team works across Astoria, Long Island City, Forest Hills, and Flushing to create kitchens that work for real families.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Family-friendly layouts that handle daily chaos
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Durable materials that age well with kids and pets
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Smart storage for multi-generational households
                </li>
              </ul>
              
              <div style={{
                background: 'rgba(244, 184, 29, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                margin: '1.5rem 0',
                fontStyle: 'italic'
              }}>
                &quot;We got the kitchen we wanted without the Manhattan price tag. Great value and they actually showed up when they said they would.&quot;
                <div style={{ fontWeight: 600, color: 'var(--primary-blue)', textAlign: 'right', fontSize: '0.95rem', marginTop: '1rem' }}>
                  - Priya & James K., Astoria
                </div>
              </div>
            </div>
          </div>

          {/* Bronx - Content Left, Image Right */}
          <div className="borough-feature">
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Bronx Kitchen Renovations</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1.5rem' }}>
                Quality Kitchen Remodeling Throughout the Bronx
              </p>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                The Bronx offers incredible opportunities for kitchen renovation investments. We handle Bronx kitchen remodeling projects from Riverdale to Fordham, focusing on practical upgrades that improve daily life and property value.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Investment-minded renovations that add real value
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Practical layouts for active families
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Quality materials at honest prices
                </li>
              </ul>
              
              <div style={{
                background: 'rgba(244, 184, 29, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-yellow)',
                margin: '1.5rem 0',
                fontStyle: 'italic'
              }}>
                &quot;They gave us a beautiful kitchen without any of the drama we expected from a renovation. Finished on time and on budget.&quot;
                <div style={{ fontWeight: 600, color: 'var(--primary-blue)', textAlign: 'right', fontSize: '0.95rem', marginTop: '1rem' }}>
                  - Carmen & Roberto S., Riverdale
                </div>
              </div>
            </div>
            <div className="borough-image">
              <Image
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d080b4d4f0e700e3e.webp"
                alt="Bronx kitchen remodeling project"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="borough-badge">
                📍 BRONX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Services Section */}
      <section className="section" style={{
        position: 'relative',
        background: 'linear-gradient(165deg, #ffffff 0%, #f8fafc 40%, #e2e8f0 100%)',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>NYC Kitchen Remodeling Services: What We Actually Do</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginTop: '1rem' }}>
              From small space makeovers to luxury renovations, we handle every type of kitchen project in NYC.
            </p>
          </div>
          
          {/* Horizontal Service Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Small Kitchen Remodeling - Left Image, Right Content */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '350px 1fr',
              gap: '2rem',
              alignItems: 'center',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(35, 48, 99, 0.1)',
              overflow: 'hidden',
              border: '1px solid rgba(35, 48, 99, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ position: 'relative', height: '250px' }}>
                <Image
                  src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d021f42947abe6a4f.webp"
                  alt="Small NYC kitchen renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(244, 184, 29, 0.95)',
                  color: 'var(--primary-blue)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🏠 SMALL SPACES
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Small Kitchen Remodeling NYC</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                  Making the Most of Every Square Foot
                </p>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                  NYC kitchens are notoriously small, but that doesn&apos;t mean they can&apos;t be functional and beautiful. We specialize in small kitchen renovations that maximize every inch without breaking your budget.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Custom ceiling-height cabinets
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Multi-functional islands
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Smart appliance placement
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Light, space-expanding finishes
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Kitchen Renovations - Right Image, Left Content */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 350px',
              gap: '2rem',
              alignItems: 'center',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(35, 48, 99, 0.1)',
              overflow: 'hidden',
              border: '1px solid rgba(35, 48, 99, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Luxury Kitchen Renovations</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                  High-End Kitchen Remodeling When You Want the Best
                </p>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                  When you&apos;re ready to invest in a truly exceptional kitchen, we deliver luxury renovations with premium materials, custom millwork, and professional-grade appliances.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Custom European cabinetry
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Natural stone countertops
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Professional-grade appliances
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Smart home integration
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative', height: '250px' }}>
                <Image
                  src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d8467c022159e2f57.webp"
                  alt="Luxury NYC kitchen renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(244, 184, 29, 0.95)',
                  color: 'var(--primary-blue)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ⭐ LUXURY
                </div>
              </div>
            </div>

            {/* Cabinet Installation - Left Image, Right Content */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '350px 1fr',
              gap: '2rem',
              alignItems: 'center',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(35, 48, 99, 0.1)',
              overflow: 'hidden',
              border: '1px solid rgba(35, 48, 99, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ position: 'relative', height: '250px' }}>
                <Image
                  src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d021f4228f5be6a50.webp"
                  alt="Custom kitchen cabinets NYC"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(244, 184, 29, 0.95)',
                  color: 'var(--primary-blue)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🗄️ CABINETS
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Kitchen Cabinet Installation & Refacing</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                  Custom Cabinets That Actually Fit Your Space
                </p>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                  Sometimes you don&apos;t need a complete gut renovation. We can reface your existing cabinets or design completely new custom cabinetry that maximizes storage and style.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Custom cabinet design
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Cabinet refacing & refinishing
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Soft-close hardware
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Space-maximizing solutions
                  </div>
                </div>
              </div>
            </div>

            {/* Countertop Installation - Right Image, Left Content */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 350px',
              gap: '2rem',
              alignItems: 'center',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(35, 48, 99, 0.1)',
              overflow: 'hidden',
              border: '1px solid rgba(35, 48, 99, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Kitchen Countertop Installation</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                  Durable, Beautiful Countertops for NYC Living
                </p>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                  The right countertops need to handle daily use while looking great for years. We install premium materials that stand up to real life in NYC kitchens.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Quartz surfaces
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Natural granite & stone
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Butcher block options
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '1rem' }}>✓</span>
                    Professional stainless steel
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative', height: '250px' }}>
                <Image
                  src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d5188d88063758c97.webp"
                  alt="Kitchen countertops installation NYC"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(244, 184, 29, 0.95)',
                  color: 'var(--primary-blue)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🏔️ COUNTERTOPS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-alt" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose Us for Your NYC Kitchen Remodeling?
          </h2>
          
          {/* Feature 1: NYC Specialists */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', margin: '3rem 0' }}>
            <div>
              <Image
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d07bcd33fb05b9710.webp"
                alt="NYC kitchen renovation permits and approvals"
                width={500}
                height={400}
                style={{ 
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(35, 48, 99, 0.15)'
                }}
              />
            </div>
            <div>
              <h3>NYC Kitchen Renovation Specialists</h3>
              <h4>We Know How NYC Actually Works</h4>
              <p>Kitchen remodeling in NYC means dealing with co-op boards, building management, service elevators, and neighbors who complain about everything. We&apos;ve been doing this for years and know how to handle all the NYC-specific challenges.</p>
              
              <h4>What we handle for you:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Co-op and condo board applications and approvals
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Building management coordination and scheduling
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Service elevator reservations and logistics
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Neighbor relations and noise management
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature Divider */}
          <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary-yellow), transparent)', margin: '4rem 0' }}></div>
          
          {/* Feature 2: Smart Design */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', margin: '3rem 0', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <h3>Smart Kitchen Design</h3>
              <h4>Kitchens That Actually Work for NYC Living</h4>
              <p>We design kitchens for people who actually live in NYC apartments. That means understanding how you really cook, entertain, and use your space every day.</p>
              
              <h4>Our design approach:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Layouts that maximize workflow in small spaces
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Storage solutions that actually store your stuff
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Materials that hold up to real daily use
                </li>
                <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-yellow)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  Designs that work for how you actually live
                </li>
              </ul>
            </div>
            <div style={{ direction: 'ltr' }}>
              <Image
                src="https://storage.googleapis.com/msgsndr/CPp3iF3YvmWBjZE0ogfg/media/684b3e4d625d67ba9aefafbe.webp"
                alt="Kitchen design process and planning"
                width={500}
                height={400}
                style={{ 
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(35, 48, 99, 0.15)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, var(--primary-blue), var(--dark-blue))',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '100px',
          height: '100px',
          background: 'rgba(244, 184, 29, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: 'rgba(244, 184, 29, 0.15)',
          borderRadius: '12px',
          animation: 'floatReverse 10s ease-in-out infinite',
          transform: 'rotate(45deg)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white' }}>Ready to Start Your NYC Kitchen Remodeling Project?</h2>
            
            <h3 style={{ color: '#F4B81D', marginBottom: '2rem' }}>Get Your Free Kitchen Design Consultation</h3>
            
            <p style={{ color: 'white', marginBottom: '2rem' }}><strong>What&apos;s Included:</strong></p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '600px', margin: '2rem auto' }}>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'white' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#F4B81D', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                In-home kitchen assessment and measurements
              </li>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'white' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#F4B81D', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                3D design concepts and material recommendations
              </li>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'white' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#F4B81D', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                Detailed timeline and budget breakdown
              </li>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'white' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#F4B81D', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                Co-op/condo board assistance (when needed)
              </li>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '0.75rem', color: 'white' }}>
                <span style={{ position: 'absolute', left: 0, top: 0, color: '#F4B81D', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                Comprehensive written estimate
              </li>
            </ul>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2.5rem 0', flexWrap: 'wrap' }}>
              <a href="#calculator" className="btn btn-primary btn-lg">
                Schedule Your Free Kitchen Consultation
              </a>
              <a href="tel:646-846-7576" className="btn btn-secondary btn-lg">
                Call NYC&apos;s Kitchen Remodeling Experts: (646) 846-7576
              </a>
            </div>
            
            <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.9)' }}>
              Text Us Your Kitchen Photos: (646) 846-7576
            </p>
          </div>
        </div>
      </section>
    </>
  )
} 