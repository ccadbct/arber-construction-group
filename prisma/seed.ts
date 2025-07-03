import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create Services
  console.log('📋 Creating services...')
  const services = await Promise.all([
    prisma.service.upsert({
      where: { slug: 'kitchen-remodeling' },
      update: {},
      create: {
        name: 'Kitchen Remodeling',
        slug: 'kitchen-remodeling',
        description: 'Complete kitchen renovations including cabinets, countertops, appliances, and flooring',
        basePrice: '$25,000 - $75,000',
        order: 1,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'bathroom-remodeling' },
      update: {},
      create: {
        name: 'Bathroom Remodeling',
        slug: 'bathroom-remodeling',
        description: 'Full bathroom renovations including tile work, fixtures, vanities, and lighting',
        basePrice: '$15,000 - $45,000',
        order: 2,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'basement-renovations' },
      update: {},
      create: {
        name: 'Basement Renovations',
        slug: 'basement-renovations',
        description: 'Transform your basement into functional living space, home office, or entertainment area',
        basePrice: '$20,000 - $60,000',
        order: 3,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'complete-home-renovation' },
      update: {},
      create: {
        name: 'Complete Home Renovation',
        slug: 'complete-home-renovation',
        description: 'Whole house renovations from floor to ceiling including structural work',
        basePrice: '$75,000 - $250,000',
        order: 4,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'general-contracting' },
      update: {},
      create: {
        name: 'General Contracting',
        slug: 'general-contracting',
        description: 'Licensed general contracting services for all types of construction projects',
        basePrice: 'Custom Quote',
        order: 5,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'emergency-services' },
      update: {},
      create: {
        name: 'Emergency Services',
        slug: 'emergency-services',
        description: '24/7 emergency construction services for water damage, structural issues, and urgent repairs',
        basePrice: 'Emergency Rates Apply',
        order: 6,
      },
    }),
  ])

  // Create NYC Boroughs
  console.log('🏢 Creating NYC boroughs...')
  const queens = await prisma.borough.upsert({
    where: { slug: 'queens' },
    update: {},
    create: {
      name: 'Queens',
      slug: 'queens',
    },
  })

  const manhattan = await prisma.borough.upsert({
    where: { slug: 'manhattan' },
    update: {},
    create: {
      name: 'Manhattan',
      slug: 'manhattan',
    },
  })

  const brooklyn = await prisma.borough.upsert({
    where: { slug: 'brooklyn' },
    update: {},
    create: {
      name: 'Brooklyn',
      slug: 'brooklyn',
    },
  })

  const bronx = await prisma.borough.upsert({
    where: { slug: 'bronx' },
    update: {},
    create: {
      name: 'Bronx',
      slug: 'bronx',
    },
  })

  const statenIsland = await prisma.borough.upsert({
    where: { slug: 'staten-island' },
    update: {},
    create: {
      name: 'Staten Island',
      slug: 'staten-island',
    },
  })

  // Create Queens Neighborhoods (Arber's specialty)
  console.log('🏘️ Creating Queens neighborhoods...')
  const queensNeighborhoods = [
    'Astoria', 'Long Island City', 'Sunnyside', 'Woodside', 'Jackson Heights',
    'Corona', 'Elmhurst', 'Forest Hills', 'Rego Park', 'Middle Village',
    'Glendale', 'Ridgewood', 'Maspeth', 'Woodhaven', 'Richmond Hill',
    'Kew Gardens', 'Briarwood', 'Jamaica', 'Hollis', 'Queens Village',
    'Bayside', 'Whitestone', 'College Point', 'Flushing', 'Murray Hill',
    'Auburndale', 'Fresh Meadows', 'Douglaston', 'Little Neck', 'Bellerose'
  ]

  for (const neighborhood of queensNeighborhoods) {
    await prisma.neighborhood.upsert({
      where: {
        slug_boroughId: {
          slug: neighborhood.toLowerCase().replace(/\s+/g, '-'),
          boroughId: queens.id,
        },
      },
      update: {},
      create: {
        name: neighborhood,
        slug: neighborhood.toLowerCase().replace(/\s+/g, '-'),
        boroughId: queens.id,
      },
    })
  }

  // Create Manhattan Neighborhoods (high-value areas)
  console.log('🏙️ Creating Manhattan neighborhoods...')
  const manhattanNeighborhoods = [
    'Upper East Side', 'Upper West Side', 'Midtown East', 'Midtown West',
    'Chelsea', 'Greenwich Village', 'SoHo', 'Tribeca', 'Financial District',
    'Lower East Side', 'East Village', 'Nolita', 'Little Italy', 'Chinatown',
    'Harlem', 'Morningside Heights', 'Washington Heights', 'Inwood'
  ]

  for (const neighborhood of manhattanNeighborhoods) {
    await prisma.neighborhood.upsert({
      where: {
        slug_boroughId: {
          slug: neighborhood.toLowerCase().replace(/\s+/g, '-'),
          boroughId: manhattan.id,
        },
      },
      update: {},
      create: {
        name: neighborhood,
        slug: neighborhood.toLowerCase().replace(/\s+/g, '-'),
        boroughId: manhattan.id,
      },
    })
  }

  // Create Brooklyn Neighborhoods (popular areas)
  console.log('🌉 Creating Brooklyn neighborhoods...')
  const brooklynNeighborhoods = [
    'Park Slope', 'Williamsburg', 'DUMBO', 'Brooklyn Heights', 'Carroll Gardens',
    'Cobble Hill', 'Red Hook', 'Gowanus', 'Sunset Park', 'Bay Ridge',
    'Bensonhurst', 'Sheepshead Bay', 'Brighton Beach', 'Coney Island',
    'Prospect Heights', 'Crown Heights', 'Bedford Stuyvesant', 'Bushwick',
    'Greenpoint', 'Long Island City'
  ]

  for (const neighborhood of brooklynNeighborhoods) {
    await prisma.neighborhood.upsert({
      where: {
        slug_boroughId: {
          slug: neighborhood.toLowerCase().replace(/\s+/g, '-'),
          boroughId: brooklyn.id,
        },
      },
      update: {},
      create: {
        name: neighborhood,
        slug: neighborhood.toLowerCase().replace(/\s+/g, '-'),
        boroughId: brooklyn.id,
      },
    })
  }

  // Create sample testimonials
  console.log('💬 Creating testimonials...')
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Sarah Johnson',
        location: 'Forest Hills, Queens',
        content: 'Arber Construction Group transformed our kitchen beyond our expectations. The attention to detail and professionalism was outstanding. They completed the project on time and within budget.',
        rating: 5,
        featured: true,
        approved: true,
      },
      {
        name: 'Michael Chen',
        location: 'Astoria, Queens',
        content: 'Our bathroom renovation was handled perfectly from start to finish. The team was clean, professional, and the quality of work is exceptional. Highly recommend for any renovation project.',
        rating: 5,
        featured: true,
        approved: true,
      },
      {
        name: 'Maria Rodriguez',
        location: 'Jackson Heights, Queens',
        content: 'Complete home renovation that increased our property value significantly. The project management was excellent and communication was clear throughout the entire process.',
        rating: 5,
        featured: false,
        approved: true,
      },
    ],
  })

  // Create sample blog posts
  console.log('📝 Creating blog posts...')
  await prisma.blogPost.createMany({
    data: [
      {
        title: '2024 Kitchen Renovation Trends in NYC',
        slug: '2024-kitchen-renovation-trends-nyc',
        excerpt: 'Discover the latest kitchen design trends taking NYC by storm, from smart appliances to sustainable materials.',
        content: 'Full blog content would go here...',
        published: true,
        featured: true,
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
      {
        title: 'ROI Guide: Which Home Renovations Add the Most Value in Queens',
        slug: 'roi-guide-home-renovations-queens',
        excerpt: 'Learn which renovations provide the best return on investment for Queens homeowners.',
        content: 'Full blog content would go here...',
        published: true,
        featured: false,
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    ],
  })

  console.log('✅ Seed completed successfully!')
  console.log(`📊 Created:`)
  console.log(`   - ${services.length} services`)
  console.log(`   - 5 boroughs`)
  console.log(`   - ${queensNeighborhoods.length + manhattanNeighborhoods.length + brooklynNeighborhoods.length} neighborhoods`)
  console.log(`   - 3 testimonials`)
  console.log(`   - 2 blog posts`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 