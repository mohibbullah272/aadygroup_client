interface FormField {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'number' | 'file' | 'checkbox-group';
    placeholder?: string;
    required?: boolean;
    icon?: React.ReactNode;
    min?: number;
    max?: number;
    options?: string[]; 
  }
  
  interface ServiceConfig {
    id: string;
    name: string;
    apiEndpoint: string;
    fields: FormField[];
    defaultValues: any;
  }
  
  export const servicesConfig: Record<string, ServiceConfig> = {
    'event-management': {
      id: 'event-management',
      name: 'Event Management',
      apiEndpoint: '/api/event',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Event Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Event Title',
          type: 'text',
          placeholder: 'Enter event title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter event description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Networking', 'Speakers', 'Catering', 'AV Equipment', 'Decoration', 
            'Photography', 'Entertainment', 'Planning', 'Theme Setup', 'Party Favors',
            'Media Coverage', 'Demo Stations', 'Branding', 'Promotional Materials',
            'Live Streaming', 'Security', 'Valet Parking', 'Gift Bags'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },

    'architectural-design': {
      id: 'architectural-design',
      name: 'Architectural Design',
      apiEndpoint: '/api/architectural-design',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Residential Design', 'Commercial Design', '3D Modeling',
            'Interior Design', 'Landscape Design', 'Structural Engineering',
            'Renovation', 'Space Planning', 'Permit Assistance'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'electric-electronics': {
      id: 'electric-electronics',
      name: 'Electric & Electronics',
      apiEndpoint: '/api/electric-electronics',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Wiring Installation', 'Lighting Solutions', 'Security Systems',
            'Home Automation', 'Electric Repairs', 'Panel Upgrades',
            'Surge Protection', 'Generator Installation', 'Appliance Repair'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'advertising': {
      id: 'advertising',
      name: 'Advertising',
      apiEndpoint: '/api/advertising',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Digital Marketing', 'Print Media', 'Social Media Ads',
            'Billboard Advertising', 'TV Commercials', 'Radio Spots',
            'Content Creation', 'Brand Strategy', 'Influencer Marketing'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'office-stationery': {
      id: 'office-stationery',
      name: 'Office Stationery',
      apiEndpoint: '/api/office-stationery',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Paper Products', 'Writing Instruments', 'Office Supplies',
            'Filing Products', 'Desk Organizers', 'Mailing Supplies',
            'Presentation Boards', 'Labeling Solutions', 'Custom Printing'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'tour-travel': {
      id: 'tour-travel',
      name: 'Tour & Travel',
      apiEndpoint: '/api/tour-travel',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Domestic Tours', 'International Tours', 'Adventure Travel',
            'Luxury Vacations', 'Group Tours', 'Custom Itineraries',
            'Hotel Bookings', 'Transportation', 'Travel Insurance'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'car-rent': {
      id: 'car-rent',
      name: 'Car Rent',
      apiEndpoint: '/api/car-rent',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Economy Cars', 'Luxury Vehicles', 'SUV Rentals',
            'Long-term Rentals', 'Short-term Rentals', 'Airport Pickup',
            'Chauffeur Services', '24/7 Support', 'Insurance Included'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'notary-public': {
      id: 'notary-public',
      name: 'Notary Public',
      apiEndpoint: '/api/notary-public',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Document Notarization', 'Loan Signings', 'Real Estate Documents',
            'Legal Documents', 'Mobile Notary', 'Apostille Services',
            'Certified Copies', 'Oaths and Affirmations', 'Witnessing Signatures'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'consultancy': {
      id: 'consultancy',
      name: 'Consultancy',
      apiEndpoint: '/api/consultancy',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Business Strategy', 'Financial Advisory', 'HR Consulting',
            'IT Consulting', 'Marketing Consulting', 'Operations Management',
            'Startup Consulting', 'Legal Consulting', 'Risk Management'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'hotel': {
      id: 'hotel',
      name: 'Hotel & Resort',
      apiEndpoint: '/api/hotel_resort',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Room Booking',
            'Suite Reservation',
            'Resort Package',
            'Tour Package',
            'Airport Transfer',
            'Spa Booking',
            'Restaurant Reservation',
            'Event Booking',
            'Adventure Activity',
            'Car Rental',
            'Laundry Service',
            'Early Check-in',
            'Late Check-out',
            'All-Inclusive Deal',
            'Honeymoon Package',
            'Family Package',
            'Meeting Room Hire',
            'Wedding Planning'
          ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'IT-Support': {
      id: 'IT-Support',
      name: 'IT-Support',
      apiEndpoint: '/api/IT',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        features: [],
        minPrice: 0,
        maxPrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'features',
          label: 'Features/Tags',
          type: 'checkbox-group',
          options: [
            'Motherboard/Main Logic Board Component Failure',
            'Hard Drive (HDD/SSD) Failure & Data Migration',
            'Desktop Power Supply Unit (PSU) Replacement',
            'Random Access Memory (RAM) Module Diagnostics/Failure',
            'Laptop DC Power Jack Micro-Soldering Repair',
            'Mobile Device Screen/Digitizer Replacement (Complex Disassembly)',
            'Photocopier Imaging Drum Replacement & Recalibration',
            'Printer Fuser Unit or High-Heat Component Swap',
            'Network Interface Card (NIC) Failure (Onboard/Dedicated)',
            'Video/Graphics Card (GPU) Failure & Artifacting',
            'Physical Server Rack Component Installation & Cabling',
            'System BIOS/UEFI Failure or Corruption (No POST)',
            'Laptop Hinge/Chassis Structural Damage Repair',
            'Overheating Diagnostics (Thermal Paste & Fan Replacement)',
            'External Peripheral Port Damage (USB/HDMI/Ethernet)',
            'Keyboard/Touchpad Hardware Replacement (Requiring Full Teardown)',
            'UPS (Uninterruptible Power Supply) Battery/Unit Failure',
            'CCTV/Security Camera Hardware Malfunction',
            'Barcode Scanner/POS Hardware Failure',
            'Worn Printer Feed Roller Assembly Replacement',
            'Laptop Battery Swell/Failure (Hazardous Component)',
            'External Monitor Logic Board Failure',
            'Fax/Modem Card Failure (Legacy Systems)',
            'RAID Array Disk Failure & Hot-Swap Procedure',
            'Firewall/Router Hardware Malfunction (Network Downtime)',
            'Document Scanner Light Source/Sensor Failure',
            'Biometric Scanner/Access Control Hardware Repair',
            'Headset/Microphone Jack or Cord Physical Damage',
            'Internal Speaker/Audio Hardware Failure (PC/Laptop)',
            'Mobile Device Charging Port Repair/Replacement'
        ]
        },
        {
          name: 'minPrice',
          label: 'Minimum Price',
          type: 'number',
          min: 0,
          required: true
        },
        {
          name: 'maxPrice',
          label: 'Maximum Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    },
    'web-development': {
      id: 'web-development',
      name: 'Web Development',
      apiEndpoint: '/api/web-development',
      defaultValues: {
        image: '',
        title: '',
        description: '',
        technologies: [],
        basePrice: 0
      },
      fields: [
        {
          name: 'image',
          label: 'Service Image',
          type: 'file',
          required: true,
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          placeholder: 'Enter service title',
          required: true
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter service description',
          required: true
        },
        {
          name: 'technologies',
          label: 'Technologies',
          type: 'checkbox-group',
          options: [
            'React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL',
            'AWS', 'Docker', 'Next.js', 'Tailwind CSS','SQL','Postgresql','Prisma','Jest','Google search console','vercel','Redux','RDBMS','DBMS','Express','Mongoose','Figma','Photoshop','pixels'
          ]
        },
        {
          name: 'basePrice',
          label: 'Base Price',
          type: 'number',
          min: 0,
          required: true
        }
      ]
    }
  };