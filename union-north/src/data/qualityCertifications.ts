export const qualityCertificationsData = {
  header: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/our-story" },
      { label: "Quality & Certifications" },
    ],
    title: "Quality & Certifications",
    subtitle: "The standards we are audited to and how we check every order to guarantee zero defect delivery.",
  },

  certifications: {
    eyebrow: "Certifications",
    title: "Standards we meet",
    list: [
      {
        code: "ISO 9001:2015",
        name: "Quality Management System",
        description: "Certified operational excellence across design, procurement, fabric cutting, and export stitching.",
      },
      {
        code: "OEKO-TEX®",
        name: "Standard 100",
        description: "Zero hazardous substances or banned chemicals in yarns, trims, buttons, and finished garments.",
      },
      {
        code: "WRAP Gold",
        name: "Worldwide Responsible Apparel",
        description: "Audited labor compliance, fair wage guarantees, workplace safety, and environmental stewardship.",
      },
      {
        code: "SEDEX / SMETA",
        name: "Ethical Supply Chain Audit",
        description: "Transparent labor practices, business ethics, and worker health standards audited bi-annually.",
      },
    ],
  },

  process: {
    eyebrow: "Quality Process",
    title: "How we check every order",
    steps: [
      {
        step: "STEP 1",
        title: "Incoming Checks",
        description: "100% inspection of raw fabric roll shrinkage, color fastness, yarn count, tensile strength, and trim quality before release.",
      },
      {
        step: "STEP 2",
        title: "In-Line Inspection",
        description: "Dedicated roaming QC inspectors check initial bundle matching, seam tension, and dimensional tolerances at active sewing lines.",
      },
      {
        step: "STEP 3",
        title: "Final Audit",
        description: "Rigorous AQL 1.5/2.5 statistical audit after ironing and finishing, packaging verification, needle detector scans, and carton drop tests.",
      },
    ],
  },
};
