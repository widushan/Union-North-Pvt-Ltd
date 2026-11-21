export interface NavDropdownItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavItem {
  title: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export const navigationData = {
  // Navigation Bar Items
  leftNav: [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      dropdown: [
        { title: "Our Story", href: "/our-story", description: "Our heritage, evolution and manufacturing journey" },
        { title: "Vision & Mission", href: "/vision-and-mission", description: "What guides Union North every single day" },
        { title: "Leadership Team", href: "/leadership-team", description: "The experienced minds leading our operations" },
        { title: "Quality & Certifications", href: "/quality-and-certifications", description: "Global audits and quality standards we adhere to" },
        { title: "Our Location", href: "/our-location", description: "Visit our modern manufacturing facility in Dankotuwa" },
      ],
    },
    {
      title: "What We Make",
      dropdown: [
        { title: "Product Range", href: "/product-range", description: "Tops, Bottoms, Knitwear and Activewear garments" },
        { title: "Manufacturing Capabilities", href: "/manufacturing-capabilities", description: "End-to-end production capacity from sketch to shipment" },
        { title: "Technology & Equipment", href: "/technology-and-equipment", description: "Automated cutting, sewing machinery and CAD systems" },
        { title: "Our Services", href: "/our-services", description: "Custom uniforms, private label OEM and supply chain services" },
      ],
    },
    {
      title: "Responsible Business",
      dropdown: [
        { title: "Sustainability Commitments", href: "/sustainability-commitments", description: "Energy, water conservation and zero-waste targets" },
        { title: "Ethical & Safe Workplace", href: "/ethical-and-safe-workplace", description: "Worker well-being, safe standards and fair compensation" },
        { title: "Community Initiatives", href: "/community-initiatives", description: "Empowering regional communities across Dankotuwa" },
      ],
    },

  ] as NavItem[],

  rightNav: [
    {
      title: "Innovation",
      dropdown: [
        { title: "Product Development", href: "/product-development", description: "Fabric R&D, rapid sampling and functional garment tech" },
        { title: "Digital & Process Improvement", href: "/digital-and-process-improvement", description: "Lean manufacturing, RFID tracking and smart floor systems" },
      ],
    },
    {
      title: "Careers",
      dropdown: [
        { title: "Life at Union North", href: "/life-at-union-north", description: "Our culture, people and everyday life at the factory" },
        { title: "Open Positions", href: "/open-positions", description: "Explore immediate vacancies and join our growing team" },
        { title: "Internships & Training", href: "/internships-and-training", description: "Programs for university students and technical apprentices" },
      ],
    },
    {
      title: "Media",
      dropdown: [
        { title: "News & Updates", href: "/news-and-updates", description: "Latest company announcements and milestone updates" },
        { title: "Photo & Video Gallery", href: "/photo-and-video-gallery", description: "Behind-the-scenes inside our production floor" },
      ],
    },
    { title: "Contact Us", href: "/contact-us" },
  ] as NavItem[],

  // Global Company Contact & Details
  company: {
    name: "Union North (Pvt) Ltd",
    tagline: "Apparel manufacturer in Dankotuwa, Sri Lanka.",
    address: "Industrial Zone, Dankotuwa, Western/North Western Province, Sri Lanka",
    phone: "+94 31 225 8900",
    email: "info@unionnorth.lk",
    workingHours: "Monday – Friday: 8:00 AM – 5:30 PM",
    copyright: `© ${new Date().getFullYear()} Union North (Pvt) Ltd. All rights reserved.`,
  },

  // Floating CTA default texts
  floatingCta: {
    title: "Ready to start your next collection?",
    buttonText: "Request a Quote →",
  },

  // Search Items for Search Box
  searchablePages: [
    { title: "Home", href: "/", category: "Main", keywords: "home apparel uniform dankotuwa garment manufacturer" },
    { title: "Our Story", href: "/our-story", category: "About Us", keywords: "history founder background heritage story" },
    { title: "Vision & Mission", href: "/vision-and-mission", category: "About Us", keywords: "values vision mission principles" },
    { title: "Leadership Team", href: "/leadership-team", category: "About Us", keywords: "directors executives management team" },
    { title: "Quality & Certifications", href: "/quality-and-certifications", category: "About Us", keywords: "iso wrap oeko tex gots audit testing inspection" },
    { title: "Our Location", href: "/our-location", category: "About Us", keywords: "factory address dankotuwa map phone visit directions" },
    { title: "Product Range", href: "/product-range", category: "What We Make", keywords: "products t-shirts polo shirts bottoms trousers knitwear activewear uniforms" },
    { title: "Manufacturing Capabilities", href: "/manufacturing-capabilities", category: "What We Make", keywords: "capacity cutting sewing sampling volume delivery" },
    { title: "Technology & Equipment", href: "/technology-and-equipment", category: "What We Make", keywords: "machines automation cad spreading laser cnc" },
    { title: "Our Services", href: "/our-services", category: "What We Make", keywords: "oem odm private label custom uniform sourcing export" },
    { title: "Sustainability Commitments", href: "/sustainability-commitments", category: "Responsible Business", keywords: "green eco water energy zero waste solar recycling" },
    { title: "Ethical & Safe Workplace", href: "/ethical-and-safe-workplace", category: "Responsible Business", keywords: "safety compliance fair wages worker welfare health" },
    { title: "Community Initiatives", href: "/community-initiatives", category: "Responsible Business", keywords: "csr village education donation dankotuwa empowerment" },
    { title: "Product Development", href: "/product-development", category: "Innovation", keywords: "r&d design fabric pattern sampling prototypes 3d" },
    { title: "Digital & Process Improvement", href: "/digital-and-process-improvement", category: "Innovation", keywords: "lean erp tracking digital smart production automated" },
    { title: "Life at Union North", href: "/life-at-union-north", category: "Careers", keywords: "culture employees teamwork events sports benefits" },
    { title: "Open Positions", href: "/open-positions", category: "Careers", keywords: "jobs vacancies hiring careers merchandiser supervisor" },
    { title: "Internships & Training", href: "/internships-and-training", category: "Careers", keywords: "internship student apprentice technical training vocational" },
    { title: "News & Updates", href: "/news-and-updates", category: "Media", keywords: "press news media events achievements blog" },
    { title: "Photo & Video Gallery", href: "/photo-and-video-gallery", category: "Media", keywords: "photos images gallery video factory machinery" },
    { title: "Contact Us", href: "/contact-us", category: "Contact", keywords: "quote inquiry email phone message reach us" },
  ],
};
