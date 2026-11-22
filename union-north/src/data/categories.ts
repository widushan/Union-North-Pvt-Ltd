// src/data/categories.ts  (put it next to home.ts)

export interface Category {
    id: string;
    title: string;
    tagline: string;
    description: string;
    items: string[];
    image: string;
    /** CSS object-position, so the crop keeps the models in frame */
    focus: string;
    link: string;
}

const DIR = "/images/home/categories";

export const categories: Category[] = [
    {
        id: "intimates",
        title: "Intimates",
        tagline: "Comfort for every day",
        description:
            "Soft, breathable bras, panties and men's basics made to be worn all day.",
        items: ["Bras", "Panties", "Men's Essentials"],
        image: `${DIR}/intimates.jpg`,
        focus: "50% 45%",
        link: "/product-range?category=intimates",
    },
    {
        id: "leisure-athleisure",
        title: "Leisure & Athleisure",
        tagline: "Relaxed style, home to gym",
        description:
            "Easy-wear styles for home, the gym and getting out, in soft stretch fabrics.",
        items: ["Yoga Wear", "Gym Wear", "Track Suits", "Sweatshirts", "Polo Shirts", "Tank Tops"],
        image: `${DIR}/leisure&athletics.jpg`,
        focus: "50% 50%",
        link: "/product-range?category=leisure-athleisure",
    },
    {
        id: "training-performance",
        title: "Training & Performance",
        tagline: "Built for hard training",
        description:
            "Sweat-wicking, high-stretch wear for serious sport, with support levels to match.",
        items: ["Sports Bras", "Training Tights", "Compression Wear", "Performance Tees"],
        image: `${DIR}/Training&Performance.webp`,
        focus: "50% 40%",
        link: "/product-range?category=training-performance",
    },
    {
        id: "swimwear",
        title: "Swimwear",
        tagline: "Pool, beach and race day",
        description:
            "Swimwear for the beach, the pool and competition, from racing suits to rash guards.",
        items: ["Competitive", "Fashion", "Rash Guards", "Board Shorts"],
        image: `${DIR}/Swimwear.webp`,
        focus: "50% 35%",
        link: "/product-range?category=swimwear",
    },
    {
        id: "shapewear",
        title: "Shapewear",
        tagline: "Smooth, firm support",
        description:
            "Body-smoothing support in full, strapless and thigh-shaping styles.",
        items: ["Full Body Suits", "Strapless", "Thigh-Shaping"],
        image: `${DIR}/ShapeWear.jpg`,
        focus: "50% 40%",
        link: "/product-range?category=shapewear",
    },
];