export const productRangeData = {
  header: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "What We Make", href: "/product-range" },
      { label: "Product Range" },
    ],
    title: "Product Range",
    subtitle: "Engineered for international retailers, global uniform programs, and private apparel labels.",
  },

  categories: [
    { id: "all", label: "All" },
    { id: "tops", label: "Tops" },
    { id: "bottoms", label: "Bottoms" },
    { id: "knitwear", label: "Knitwear" },
    { id: "activewear", label: "Activewear" },
  ],

  products: [
    {
      id: "1",
      category: "tops",
      name: "Classic Organic Crewneck Tee",
      specs: "100% Combed Organic Cotton · Regular Fit · Min. order 500 pcs",
      tag: "Top Seller",
    },
    {
      id: "2",
      category: "tops",
      name: "Pique Cotton Uniform Polo",
      specs: "65/35 Poly-Cotton Blend · Tailored Fit · Min. order 300 pcs",
      tag: "Corporate",
    },
    {
      id: "3",
      category: "bottoms",
      name: "Executive Stretch Chino Trouser",
      specs: "98% Cotton / 2% Elastane · Slim Straight · Min. order 400 pcs",
      tag: "Durability",
    },
    {
      id: "4",
      category: "bottoms",
      name: "Heavy-Duty Cargo Workpant",
      specs: "Ripstop Poly-Cotton · Relaxed Utility · Min. order 500 pcs",
      tag: "Industrial",
    },
    {
      id: "5",
      category: "knitwear",
      name: "Fine-Gauge Merino Blend Pullover",
      specs: "Merino Wool / Acrylic Blend · Modern Fit · Min. order 300 pcs",
      tag: "Premium",
    },
    {
      id: "6",
      category: "knitwear",
      name: "Brushed French Terry Hoodie",
      specs: "80% Cotton / 20% Recycled Poly · Oversized · Min. order 400 pcs",
      tag: "Casual",
    },
    {
      id: "7",
      category: "activewear",
      name: "Dry-Tech Moisture Wicking Tee",
      specs: "100% Recycled Polyester · Athletic Fit · Min. order 500 pcs",
      tag: "Athletic",
    },
    {
      id: "8",
      category: "activewear",
      name: "High-Visibility Safety Polo",
      specs: "EN ISO 20471 Certified · Hi-Vis Reflective · Min. order 300 pcs",
      tag: "Certified",
    },
  ],

  manufacturingProcess: {
    eyebrow: "Manufacturing Capabilities",
    title: "From sketch to shipment",
    steps: [
      {
        step: "STEP 1",
        title: "Design & Sampling",
        description: "CAD pattern making, digital 3D fitting, and rapid pre-production samples delivered in 5–7 business days.",
      },
      {
        step: "STEP 2",
        title: "Cutting",
        description: "Automated computer-controlled CNC fabric spreading and precision cutting lines minimizing scrap.",
      },
      {
        step: "STEP 3",
        title: "Sewing",
        description: "Over 20 lean modular sewing lines with specialized lockstitch, overlock, and flatlock machinery.",
      },
      {
        step: "STEP 4",
        title: "Finishing & Quality Check",
        description: "Steam tunnel ironing, 100% needle detection scans, barcode packaging, and export palletization.",
      },
    ],
  },
};
