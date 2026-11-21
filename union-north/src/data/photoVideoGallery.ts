export const photoVideoGalleryData = {
  header: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Media", href: "/news-and-updates" },
      { label: "Photo & Video Gallery" },
    ],
    title: "Photo & Video Gallery",
    subtitle: "Behind the scenes inside our production floor, community initiatives, and garment craftsmanship.",
  },

  categories: [
    { id: "all", label: "All" },
    { id: "factory", label: "Factory" },
    { id: "events", label: "Events" },
    { id: "community", label: "Community" },
    { id: "videos", label: "Videos" },
  ],

  items: [
    { id: "1", type: "photo", category: "factory", title: "Automated Spreading & CNC Cutting", tag: "Cutting Dept" },
    { id: "2", type: "photo", category: "factory", title: "High-Speed Modular Sewing Floor", tag: "Sewing Line 04" },
    { id: "3", type: "photo", category: "factory", title: "In-line AQL Measurement Auditing", tag: "Quality Dept" },
    { id: "4", type: "photo", category: "events", title: "Annual Sports & Cricket Championship", tag: "Team Culture" },
    { id: "5", type: "photo", category: "events", title: "National New Year Festival Celebrations", tag: "Festivals" },
    { id: "6", type: "photo", category: "community", title: "Village School Scholarship Distribution", tag: "Dankotuwa CSR" },
    { id: "7", type: "photo", category: "community", title: "Wetland Tree Planting Drive", tag: "Environment" },
    { id: "8", type: "video", category: "videos", title: "Full Factory Tour & Craftsmanship Walkthrough", tag: "Video Tour" },
  ],
};
