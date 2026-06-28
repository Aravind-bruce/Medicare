export const heroData = {
    title: 'Get Premium medical care for your best health',
    subtitle: 'Discover Our Benefits & Features',
    ctaText: 'Get Started',
    ctaLink: '#features',
    secondaryCtaText: 'Learn More',
    secondaryCtaLink: '#doctors',
    doctorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&h=800&q=80',
    floatingCards: [
      {
        id: 1,
        icon: '📱',
        title: 'Appointment',
        subtitle: 'Book now',
        color: 'blue',
        // top-right corner
        position: 'top-4 right-4 lg:top-8 lg:right-8',
        animation: 'animate-float'
      },
      {
        id: 2,
        icon: '🎥',
        title: 'Video Call',
        subtitle: 'Consult now',
        color: 'purple',
        // bottom-right corner
        position: 'bottom-4 right-4 lg:bottom-8 lg:right-8',
        animation: 'animate-float-delay'
      },
      {
        id: 3,
        icon: '💊',
        title: 'Medication',
        subtitle: 'Order now',
        color: 'green',
        // middle-right, vertically centered
        position: 'top-1/2 -translate-y-1/2 right-4 lg:right-8',
        animation: 'animate-float-delay-2'
      }
    ]
  }