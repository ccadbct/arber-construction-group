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
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/images/homepage/hero-apartment-renovation.webp"
            alt="Professional NYC apartment renovation showcase - Arber Construction"
            fill
            priority
            style={{ 
              objectFit: 'cover',
              filter: 'brightness(0.4) contrast(1.2)',
            }}
          />
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-main">
              <h1 className="hero-headline">
                The NYC Apartment Renovation Contractors Who Actually Get It Done
              </h1>
              
              <div className="hero-subtext">
                <p>Tired of contractors who disappear mid-project? Fed up with "ballpark estimates" that double overnight? Done with renovation nightmares that drag on for months?</p>
                <p><strong>No drama. No surprises. Just beautiful results.</strong></p>
              </div>
              
              <div className="hero-cta">
                <a href="/get-quote" className="btn btn-primary btn-lg">
                  Get Your Free Honest Estimate
                </a>
                <a href="tel:646-206-5590" className="btn btn-secondary btn-lg">
                  Call: 646-206-5590
                </a>
              </div>
              
              <div className="hero-credentials">
                <span>Licensed • Insured • Co-op Board Approved • EPA Lead-Safe Certified</span>
              </div>
            </div>

            <div className="hero-benefits">
              <div className="benefits-card">
                <h3>Why NYC Chooses Arber Construction:</h3>
                <ul className="benefits-list">
                  <li>✓ Show up when promised, finish on time & on budget</li>
                  <li>✓ Handle co-op board approvals & NYC permits</li>
                  <li>✓ 500+ apartment renovations completed</li>
                  <li>✓ Licensed, insured & EPA Lead-Safe certified</li>
                </ul>
                <div className="service-areas">
                  <span>Serving Manhattan • Brooklyn • Queens • Bronx • Staten Island</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Borough Expertise Section */}
      <section className="borough-section">
        <div className="borough-background">
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          <div className="floating-element floating-3"></div>
          <div className="floating-element floating-4"></div>
        </div>
        
        <div className="container">
          <div className="section-header">
            <h2>NYC Apartment Renovation Experts in Every Borough</h2>
            <p>Transforming apartments across all five boroughs with local expertise and proven results</p>
          </div>

          <div className="borough-grid">
            {/* Manhattan */}
            <div className="borough-card featured">
              <div className="borough-image">
                <Image
                  src="/images/homepage/luxury-manhattan-apartment-renovation-interior.webp"
                  alt="Manhattan apartment renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="borough-content">
                <h3>Manhattan Apartment Renovations</h3>
                <p>Manhattan doesn't forgive mediocrity—it rewards excellence. Your Manhattan apartment sits atop the world's most expensive real estate. Every decision either costs you thousands or makes you millions. We architect renovations that make co-op boards beg for blueprints and competitors study your success.</p>
                <a href="/manhattan-home-renovation/" className="btn btn-outline">Explore Manhattan Projects →</a>
              </div>
            </div>

            {/* Brooklyn */}
            <div className="borough-card">
              <div className="borough-image">
                <Image
                  src="/images/homepage/brooklyn-brownstone-living-room-renovation-park-slope.webp"
                  alt="Brooklyn apartment renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="borough-content">
                <h3>Brooklyn Apartment Renovations</h3>
                <p>Brooklyn's boom isn't slowing down—it's accelerating exponentially. Your Brooklyn apartment holds the keys to generational wealth. Park Slope brownstones, Williamsburg waterfront condos, DUMBO industrial conversions—we engineer renovations that make real estate agents fight over listings.</p>
                <a href="/brooklyn-home-renovations/" className="btn btn-outline">Discover Brooklyn Projects →</a>
              </div>
            </div>

            {/* Queens */}
            <div className="borough-card">
              <div className="borough-image">
                <Image
                  src="/images/homepage/queens-apartment-bathroom-renovation-modern-design.webp"
                  alt="Queens apartment renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="borough-content">
                <h3>Queens Apartment Renovations</h3>
                <p>The insiders know: Queens is tomorrow's Manhattan today. Your Queens apartment sits on the launch pad of NYC's next fortune cycle. From Astoria's artist enclaves to Forest Hills' suburban sanctuaries, we craft renovations that position you ahead of the curve.</p>
                <a href="/queens-remodeling-contractors/" className="btn btn-outline">View Queens Portfolio →</a>
              </div>
            </div>

            {/* Bronx */}
            <div className="borough-card">
              <div className="borough-image">
                <Image
                  src="/images/homepage/staten-island-apartment-dining-room-renovation.webp"
                  alt="Bronx apartment renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="borough-content">
                <h3>Bronx Apartment Renovations</h3>
                <p>The Bronx's renaissance isn't coming—it's here and thriving. Your Bronx apartment occupies ground zero of NYC's most explosive growth market. Riverdale estates, Fordham gems, Grand Concourse treasures—we engineer renovations that ride the wave.</p>
                <a href="/bronx-remodeling-contractors/" className="btn btn-outline">Explore Bronx Projects →</a>
              </div>
            </div>

            {/* Long Island */}
            <div className="borough-card">
              <div className="borough-image">
                <Image
                  src="/images/homepage/long-island-apartment-living-room-open-concept.webp"
                  alt="Long Island apartment renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="borough-content">
                <h3>Long Island Apartment Renovations</h3>
                <p>Escape the chaos without sacrificing the profits or prestige. Your Long Island apartment delivers Manhattan returns with suburban serenity. Nassau County luxury, Suffolk County sophistication—we craft renovations that prove you can have both wealth and peace of mind.</p>
                <a href="/long-island-remodeling/" className="btn btn-outline">See Long Island Work →</a>
              </div>
            </div>

            {/* Westchester */}
            <div className="borough-card">
              <div className="borough-image">
                <Image
                  src="/images/homepage/westchester-apartment-bedroom-renovation-luxury-finishes.webp"
                  alt="Westchester apartment renovation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="borough-content">
                <h3>Westchester County Apartment Renovations</h3>
                <p>Where power players retreat and property values soar beyond expectations. Your Westchester apartment commands respect in America's most affluent suburbs. White Plains prestige, Scarsdale elegance, Yonkers opportunity—we architect renovations worthy of boardroom legends.</p>
                <a href="/westchester-county-remodeling/" className="btn btn-outline">View Westchester Portfolio →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Spotlight Section */}
      <section className="services-section">
        <div className="services-background">
          <div className="floating-service floating-service-1"></div>
          <div className="floating-service floating-service-2"></div>
          <div className="floating-service floating-service-3"></div>
        </div>

        <div className="container">
          <div className="section-header">
            <h2>Expert NYC Apartment Renovation Services</h2>
            <p>Specialized solutions for every room and every renovation challenge in NYC apartments</p>
          </div>

          <div className="services-grid">
            {/* Kitchen - Featured Service */}
            <div className="service-hero">
              <div className="service-badge">⭐ MOST POPULAR SERVICE</div>
              <div className="service-hero-content">
                <div className="service-hero-text">
                  <h3>Apartment Kitchen Renovations</h3>
                  <p className="service-subtitle">Turn Your Galley Kitchen Into a Gourmet Haven</p>
                  <p>NYC apartment kitchens demand ingenious solutions. Our apartment kitchen remodeling specialists master the art of maximizing every square inch while delivering stunning results that would make any chef jealous.</p>
                  
                  <div className="service-features">
                    <div className="feature-column">
                      <h4>Kitchen Expertise:</h4>
                      <ul>
                        <li>Space-maximizing cabinet designs</li>
                        <li>Co-op board compliant installations</li>
                        <li>Noise-minimizing construction techniques</li>
                        <li>Custom solutions for unusual layouts</li>
                      </ul>
                    </div>
                    <div className="feature-column">
                      <h4>What You Get:</h4>
                      <ul>
                        <li>Premium appliance integration</li>
                        <li>Smart storage solutions</li>
                        <li>Luxury countertops & finishes</li>
                        <li>Professional lighting design</li>
                      </ul>
                    </div>
                  </div>

                  <div className="testimonial-highlight">
                    <p>"They transformed our 80-square-foot kitchen into something you'd see in Architectural Digest. Incredible."</p>
                    <cite>- Maria S., Upper West Side</cite>
                  </div>

                  <a href="/kitchen-remodeling-nyc/" className="btn btn-primary btn-lg">
                    Discover Kitchen Transformations →
                  </a>
                </div>
              </div>
            </div>

            {/* Supporting Services */}
            <div className="service-supporting">
              <div className="service-card">
                <h3>Apartment Bathroom Renovations</h3>
                <p>Luxury Spa Vibes in NYC Apartment Bathrooms</p>
                <p>Small doesn't mean settling. Our apartment bathroom renovations prove that even the tiniest NYC bathrooms can deliver five-star luxury and maximum functionality.</p>
                
                <div className="service-icons">
                  <div className="service-stat">⚡ 3-5 day avg. timeline</div>
                  <div className="service-stat">💎 Premium materials included</div>
                  <div className="service-stat">🏆 100% satisfaction rate</div>
                </div>

                <a href="/bathroom-remodeling-nyc/" className="btn btn-outline">See Transformations →</a>
              </div>

              <div className="service-card">
                <h3>Complete Apartment Renovations</h3>
                <p>Total Apartment Makeovers That Redefine NYC Living</p>
                <p>When your entire apartment needs a complete transformation, our full apartment renovation services orchestrate every detail. From layout optimization to luxury finishes.</p>
                
                <div className="service-icons">
                  <div className="service-stat">📈 40% avg. value increase</div>
                  <div className="service-stat">🎯 Custom design solutions</div>
                  <div className="service-stat">⏰ 2-4 week completion</div>
                </div>

                <a href="/nyc-apartment-renovations/" className="btn btn-outline">Explore Complete Renovations →</a>
              </div>
            </div>

            {/* Basement - Full Width */}
            <div className="service-basement">
              <div className="basement-content">
                <h3>Basement Remodeling</h3>
                <p><strong>Convert Dead Space Into Dream Space</strong></p>
                <p>Your basement doesn't have to be a dungeon. We transform forgotten basement spaces into valuable living areas—home offices, entertainment rooms, or additional bedrooms that boost your property's value and rental income potential.</p>
                
                <div className="basement-features">
                  <span>Legal basement apartment conversions</span>
                  <span>Moisture control and waterproofing systems</span>
                  <span>Egress window installation for safety compliance</span>
                  <span>Income-generating rental unit creation</span>
                </div>

                <div className="basement-testimonial">
                  <p>"Our Park Slope basement went from scary storage to a $2,800/month rental apartment. Best investment we ever made."</p>
                  <cite>- Carmen R., Park Slope</cite>
                </div>

                <a href="/basement-remodeling-nyc/" className="btn btn-primary">Explore Basement Transformations →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Expertise Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="section-header">
              <h2>Why NYC Apartment Owners Choose Arber Construction Group</h2>
              <p>We understand NYC's unique apartment challenges and deliver results that exceed expectations</p>
            </div>

            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-icon">🏢</div>
                <h3>NYC Apartment Renovation Specialists</h3>
                <h4>We Understand NYC's Unique Apartment Challenges</h4>
                <p>Apartment renovations in NYC require contractors who understand the city's specific requirements. Arber Construction Group specializes in navigating co-op board approvals, building restrictions, and neighbor considerations that other apartment renovation contractors often struggle with.</p>
                <ul>
                  <li>Co-op and condo board approval processes</li>
                  <li>Building management coordination and permits</li>
                  <li>NYC building code compliance and inspections</li>
                  <li>Service elevator scheduling and material logistics</li>
                </ul>
              </div>

              <div className="trust-card">
                <div className="trust-icon">🔧</div>
                <h3>Reliable Project Management</h3>
                <h4>Your Apartment Renovation Stays On Track</h4>
                <p>NYC apartment renovations demand careful coordination and clear communication. Our project managers ensure your apartment renovation proceeds smoothly by handling deliveries, scheduling around building quiet hours, and maintaining professional relationships.</p>
                <ul>
                  <li>Detailed renovation timelines and progress updates</li>
                  <li>Building management and doorman coordination</li>
                  <li>Material delivery scheduling and logistics</li>
                  <li>Clear communication throughout your project</li>
                </ul>
              </div>

              <div className="trust-card">
                <div className="trust-icon">⚡</div>
                <h3>Efficient Renovation Process</h3>
                <h4>Minimize Disruption, Maximize Results</h4>
                <p>We understand that living through an apartment renovation is challenging. Our streamlined renovation process and efficient scheduling minimize disruption to your daily routine while ensuring your NYC apartment renovation is completed on time and within budget.</p>
                <ul>
                  <li>Realistic timelines for apartment renovations</li>
                  <li>Efficient work scheduling around your life</li>
                  <li>Quality materials and skilled craftsmen</li>
                  <li>Regular progress updates and communication</li>
                </ul>
              </div>
            </div>

            <div className="stats-bar">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <div className="protection-section">
              <h3>🛡️ Complete Project Protection</h3>
              <p><strong>Licensed, Insured, and Guaranteed</strong></p>
              <p>Every apartment renovation project comes with comprehensive protection and warranties. Arber Construction Group maintains all required NYC licenses, carries full insurance coverage, and stands behind our apartment renovation work with written guarantees.</p>
              
              <div className="protection-grid">
                <div className="protection-item">✓ Fully licensed NYC apartment renovation contractors</div>
                <div className="protection-item">✓ Comprehensive liability and workers' compensation insurance</div>
                <div className="protection-item">✓ Written warranties on all renovation work</div>
                <div className="protection-item">✓ EPA Lead-Safe certification for older buildings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2>Apartment Renovation Success Stories</h2>
            <p>Real transformations from real NYC apartment owners</p>
          </div>

          <div className="stories-grid">
            <div className="story-card">
              <h3>Manhattan Co-op Kitchen Revolution</h3>
              <p className="story-location">Upper East Side Pre-War Building</p>
              <div className="story-details">
                <p><strong>The Challenge:</strong> 1950s galley kitchen, co-op board restrictions, zero counter space</p>
                <p><strong>The Transformation:</strong> Sleek modern kitchen with hidden storage, premium appliances, and doubled workspace</p>
                <p><strong>The Result:</strong> "Our friends can't believe it's the same apartment. The board was so impressed, they're using our photos for building marketing!"</p>
                <cite>— Jennifer & David L., Manhattan</cite>
              </div>
              <a href="/portfolio/manhattan-projects/" className="btn btn-outline">View Manhattan Portfolio →</a>
            </div>

            <div className="story-card">
              <h3>Brooklyn Brownstone Apartment Conversion</h3>
              <p className="story-location">Park Slope Historic Building</p>
              <div className="story-details">
                <p><strong>The Challenge:</strong> Dark railroad apartment, outdated systems, historic preservation requirements</p>
                <p><strong>The Transformation:</strong> Open-concept living with preserved architectural details and modern amenities</p>
                <p><strong>The Result:</strong> "Arber Construction respected our building's character while giving us everything we wanted in a modern home."</p>
                <cite>— Alex M., Brooklyn</cite>
              </div>
              <a href="/portfolio/brooklyn-projects/" className="btn btn-outline">View Brooklyn Portfolio →</a>
            </div>

            <div className="story-card">
              <h3>Queens High-Rise Luxury Upgrade</h3>
              <p className="story-location">Long Island City Modern Building</p>
              <div className="story-details">
                <p><strong>The Challenge:</strong> Builder-grade finishes, poor layout, soundproofing issues</p>
                <p><strong>The Transformation:</strong> Custom luxury finishes, optimized floor plan, enhanced acoustics</p>
                <p><strong>The Result:</strong> "They turned our generic apartment into a custom luxury home. Worth every penny."</p>
                <cite>— Priya & James K., Queens</cite>
              </div>
              <a href="/portfolio/queens-projects/" className="btn btn-outline">View Queens Portfolio →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your NYC Apartment Renovation Today</h2>
            <p className="cta-subtitle">Ready to Get Your Apartment Renovation Started?</p>
            
            <div className="cta-benefits">
              <h3>Free Apartment Renovation Consultation</h3>
              <p>Our NYC apartment renovation contractors will visit your home, discuss your goals, and provide an honest estimate with no hidden surprises.</p>
              
              <div className="cta-checklist">
                <div className="cta-check">✓ Complete apartment assessment and renovation recommendations</div>
                <div className="cta-check">✓ Detailed timeline and budget breakdown for your project</div>
                <div className="cta-check">✓ Expert advice on permits and building requirements</div>
                <div className="cta-check">✓ Clear, written estimate with no hidden costs</div>
                <div className="cta-check">✓ Honest guidance on what's possible within your budget</div>
              </div>
            </div>

            <div className="cta-actions">
              <a href="/get-quote" className="btn btn-primary btn-xl">
                Schedule Your Free Consultation
              </a>
              <div className="cta-contact">
                <a href="tel:646-206-5590" className="btn btn-secondary btn-xl">
                  Call: 646-206-5590
                </a>
                <p>Text Us Your Photos: 646-206-5590</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas">
        <div className="container">
          <h2>NYC Apartment Renovation Areas We Serve</h2>
          
          <div className="areas-grid">
            <div className="area-group">
              <h3>Manhattan</h3>
              <div className="area-links">
                <a href="/manhattan-home-renovation/upper-east-side-renovations/">Upper East Side</a>
                <a href="/manhattan-home-renovation/upper-west-side-remodeling/">Upper West Side</a>
                <a href="/manhattan-home-renovation/soho-apartment-renovation/">SoHo</a>
                <a href="/manhattan-home-renovation/tribeca-home-renovation/">TriBeca</a>
                <span>Midtown</span>
                <span>Financial District</span>
              </div>
            </div>

            <div className="area-group">
              <h3>Brooklyn</h3>
              <div className="area-links">
                <span>Park Slope</span>
                <span>Williamsburg</span>
                <span>DUMBO</span>
                <span>Brooklyn Heights</span>
                <span>Carroll Gardens</span>
                <span>Prospect Heights</span>
              </div>
            </div>

            <div className="area-group">
              <h3>Queens</h3>
              <div className="area-links">
                <a href="/queens-remodeling-contractors/astoria-renovations/">Astoria</a>
                <a href="/queens-remodeling-contractors/long-island-city-remodeling/">Long Island City</a>
                <a href="/queens-remodeling-contractors/forest-hills-contractors/">Forest Hills</a>
                <a href="/queens-remodeling-contractors/flushing-home-renovation/">Flushing</a>
                <span>Elmhurst</span>
                <span>Bayside</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <div className="container">
          <div className="footer-cta-content">
            <h2>Ready to transform your NYC apartment? Let's make it happen.</h2>
            <p>Arber Construction Group - NYC's Premier Apartment Renovation Contractors</p>
            <p className="credentials">Licensed in All 5 Boroughs • Fully Insured • EPA Lead-Safe Certified • Co-op Board Specialists</p>
            <p className="experience">Transforming NYC apartments since 2008 - Over 500 successful apartment renovations completed</p>
          </div>
        </div>
      </section>
    </div>
  )
} 