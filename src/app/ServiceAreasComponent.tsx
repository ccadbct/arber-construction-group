'use client'

import { useState } from 'react'

export default function ServiceAreasComponent() {
  const [activeTab, setActiveTab] = useState('Manhattan')
  
  const serviceAreas: Record<string, {
    icon: string;
    badge: string;
    badgeColor: string;
    description: string;
    neighborhoods: Array<{name: string; link: string | null}>;
  }> = {
    'Manhattan': {
      icon: '🏙️',
      badge: 'Premium Borough',
      badgeColor: 'var(--primary-blue)',
      description: 'Manhattan\'s premier apartment renovation specialists',
      neighborhoods: [
        { name: 'Upper East Side', link: '/manhattan-home-renovation/upper-east-side-renovations/' },
        { name: 'Upper West Side', link: '/manhattan-home-renovation/upper-west-side-remodeling/' },
        { name: 'SoHo', link: '/manhattan-home-renovation/soho-apartment-renovation/' },
        { name: 'TriBeca', link: '/manhattan-home-renovation/tribeca-home-renovation/' },
        { name: 'Midtown', link: null },
        { name: 'Financial District', link: null }
      ]
    },
    'Brooklyn': {
      icon: '🌉',
      badge: 'Historic Borough',
      badgeColor: 'var(--primary-yellow)',
      description: 'Preserving Brooklyn\'s architectural heritage with modern updates',
      neighborhoods: [
        { name: 'Park Slope', link: null },
        { name: 'Williamsburg', link: null },
        { name: 'DUMBO', link: null },
        { name: 'Brooklyn Heights', link: null },
        { name: 'Carroll Gardens', link: null },
        { name: 'Prospect Heights', link: null }
      ]
    },
    'Queens': {
      icon: '🏘️',
      badge: 'Our Specialty',
      badgeColor: 'var(--primary-blue)',
      description: '200+ completed Queens renovations - Our home borough specialty',
      neighborhoods: [
        { name: 'Astoria', link: '/queens-remodeling-contractors/astoria-renovations/' },
        { name: 'Long Island City', link: '/queens-remodeling-contractors/long-island-city-remodeling/' },
        { name: 'Forest Hills', link: '/queens-remodeling-contractors/forest-hills-contractors/' },
        { name: 'Flushing', link: '/queens-remodeling-contractors/flushing-home-renovation/' },
        { name: 'Elmhurst', link: null },
        { name: 'Bayside', link: null }
      ]
    },
    'The Bronx': {
      icon: '🏗️',
      badge: 'Expanding Coverage',
      badgeColor: 'var(--primary-blue)',
      description: 'Bringing our expertise to the Bronx - Coming Soon',
      neighborhoods: [
        { name: 'Riverdale', link: null },
        { name: 'Fordham', link: null },
        { name: 'Morrisania', link: null },
        { name: 'South Bronx', link: null }
      ]
    },
    'Westchester': {
      icon: '🌳',
      badge: 'Suburban Expertise',
      badgeColor: 'var(--primary-yellow)', 
      description: 'Premium renovations in Westchester County',
      neighborhoods: [
        { name: 'White Plains', link: null },
        { name: 'Yonkers', link: null },
        { name: 'New Rochelle', link: null },
        { name: 'Mount Vernon', link: null }
      ]
    },
    'Staten Island': {
      icon: '🏖️',
      badge: 'Island Coverage',
      badgeColor: 'var(--primary-blue)',
      description: 'Staten Island home renovations and remodeling',
      neighborhoods: [
        { name: 'St. George', link: null },
        { name: 'Stapleton', link: null },
        { name: 'Tottenville', link: null },
        { name: 'Great Kills', link: null }
      ]
    },
    'Long Island': {
      icon: '🏡',
      badge: 'Extended Service',
      badgeColor: 'var(--primary-yellow)',
      description: 'Quality renovations across Long Island',
      neighborhoods: [
        { name: 'Nassau County', link: null },
        { name: 'Suffolk County', link: null },
        { name: 'Hamptons', link: null },
        { name: 'North Shore', link: null }
      ]
    }
  }

  const tabs = Object.keys(serviceAreas)
  const activeArea = serviceAreas[activeTab]

  return (
    <section style={{
      position: 'relative',
      padding: '4rem 0',
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
        
        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '3rem',
          padding: '0 1rem'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === tab ? 'var(--primary-blue)' : 'white',
                color: activeTab === tab ? 'white' : 'var(--primary-blue)',
                boxShadow: activeTab === tab ? '0 8px 20px rgba(35, 48, 99, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
                transform: activeTab === tab ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Active Area Content */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Area Icon */}
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
            {activeArea.icon}
          </div>
          
          {/* Badge */}
          <div style={{
            backgroundColor: activeArea.badgeColor,
            color: activeArea.badgeColor === 'var(--primary-yellow)' ? 'var(--primary-blue)' : 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            display: 'inline-block',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {activeArea.badge}
          </div>
          
          {/* Area Name */}
          <h3 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem',
            color: 'var(--primary-blue)',
            fontWeight: 'bold'
          }}>
            {activeTab}
          </h3>
          
          {/* Neighborhoods Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {activeArea.neighborhoods.map((neighborhood: {name: string; link: string | null}, index: number) => (
              <div 
                key={index} 
                className={`neighborhood-card ${neighborhood.link ? 'clickable' : 'coming-soon'}`}
                style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(35, 48, 99, 0.05)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                {neighborhood.link ? (
                  <a 
                    href={neighborhood.link}
                    style={{
                      fontWeight: '600',
                      color: 'var(--primary-blue)',
                      textDecoration: 'none',
                      fontSize: '1.1rem'
                    }}
                  >
                    {neighborhood.name}
                  </a>
                ) : (
                  <span style={{
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    fontSize: '1.1rem'
                  }}>
                    {neighborhood.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          {/* Description */}
          <div style={{
            backgroundColor: 'rgba(244, 184, 29, 0.1)',
            padding: '1rem',
            borderRadius: '12px',
            borderLeft: '4px solid var(--primary-yellow)',
            fontSize: '1rem',
            color: 'var(--text-dark)',
            fontWeight: '500'
          }}>
            🏆 {activeArea.description}
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
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
          marginTop: '3rem'
        }}>
          <div>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: 'var(--primary-blue)',
              marginBottom: '0.5rem'
            }}>
              7
            </div>
            <div style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-dark)',
              fontWeight: '600'
            }}>
              Service Areas
            </div>
          </div>
          
          <div>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: 'var(--primary-blue)',
              marginBottom: '0.5rem'
            }}>
              25+
            </div>
            <div style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-dark)',
              fontWeight: '600'
            }}>
              Neighborhoods
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
  )
} 