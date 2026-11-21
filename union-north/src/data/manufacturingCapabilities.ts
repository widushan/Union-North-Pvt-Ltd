export const manufacturingCapabilitiesData = {
  header: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "What We Make", href: "/product-range" },
      { label: "Manufacturing Capabilities" },
    ],
    title: "Manufacturing Capabilities",
    subtitle: "What our factory can produce, and how much.",
  },

  productionOverview: {
    eyebrow: "Production",
    title: "Built to deliver at scale",
    description: "Our Dankotuwa manufacturing complex operates across 85,000 sq.ft of modern floor space. With flexible lean cell configurations and synchronized line balancing, we effortlessly accommodate both high-volume global export programs and specialized small-batch custom uniform orders.",
    features: [
      "Modular lean production cells for rapid style changeovers",
      "Dedicated sample development wing with 48-hour turnarounds",
      "Automated spreading and computer-guided fabric tension control",
      "Full compliance with international AQL 1.5 inspection standards",
    ],
  },

  stats: [
    { value: "22", label: "Sewing lines" },
    { value: "350k", label: "Pieces per month" },
    { value: "420+", label: "Machines" },
    { value: "15+", label: "Product types" },
  ],

  stages: [
    {
      title: "Cutting",
      description: "Computerized Gerber CAD pattern nesting and automated multi-ply CNC cutters achieving 98.5% fabric utilization with zero edge fraying.",
    },
    {
      title: "Sewing",
      description: "Direct-drive Juki and Brother lockstitch, 4-thread overlock, and flatlock machines equipped with programmable backtacking and electronic thread trimmers.",
    },
    {
      title: "Finishing",
      description: "Rotary steam pressing, tension-free form finishers, and computerized continuous tunnel dryers ensuring impeccable garment presentation.",
    },
    {
      title: "Quality Control",
      description: "Full inline piece inspection, 100% Hashima needle detector scans, carton humidity monitoring, and pre-shipment barcode verification.",
    },
  ],
};
