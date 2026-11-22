// src/data/storySections.ts

export interface StorySection {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: { text: string; href: string };
    image: string;
    imageAlt: string;
    images?: Array<{ src: string; alt: string; caption?: string }>;
    /** "cover" for photos, "contain" for cut-out PNGs */
    fit: "cover" | "contain";
}

export const storySections: StorySection[] = [
    {
        id: "about",
        eyebrow: "Who We Are",
        title: "Quality apparel from the heart of Dankotuwa",
        paragraphs: [
            "Union North is an apparel manufacturer based in Dankotuwa, Sri Lanka. For more than 25 years we have made garments for buyers in over 18 export markets, with ethical practices and reliable delivery behind every order.",
            "A team of 500+ people, ISO 9001 and WRAP certification, and a habit of doing things properly are what keep our partners coming back.",
        ],
        cta: { text: "About Us", href: "/about-us" },
        images: [
            {
                src: "/images/home/fac1.jpg",
                alt: "Union North Eco-friendly Industrial Zone entrance sign in Dankotuwa",
                caption: "Eco-Friendly Zone",
            },
            {
                src: "/images/home/fac2.webp",
                alt: "Union North modern manufacturing plant and landscaped grounds",
                caption: "Dankotuwa Facility",
            },
            {
                src: "/images/home/fac3.jpg",
                alt: "Precision sewing and Union North embroidery craftsmanship",
                caption: "Precision Craft",
            },
        ],
        image: "/images/home/fac1.jpg",
        imageAlt: "Union North facility entrance in Dankotuwa",
        fit: "cover",
    },
    {
        id: "capabilities",
        eyebrow: "What We Do",
        title: "From first sketch to final shipment",
        paragraphs: [
            "We look after the whole journey of a garment: design support, sampling, cutting, sewing, finishing and shipping. Keeping these steps under one roof keeps quality consistent and lead times predictable.",
            "Our lines produce up to 350,000 pieces a month across intimates, athleisure, performance wear, swimwear and shapewear.",
        ],
        cta: { text: "See What We Do", href: "/manufacturing-capabilities" },
        images: [
            {
                src: "/images/home/do1.webp",
                alt: "Union North high-capacity modern apparel manufacturing lines",
                caption: "High-Volume Production",
            },
            {
                src: "/images/home/do2.webp",
                alt: "Precision garment finishing, hangers and sewing stations",
                caption: "Cutting to Sewing",
            },
            {
                src: "/images/home/do3.avif",
                alt: "Quality inspection and finishing lines ensuring export standards",
                caption: "Quality Assurance",
            },
        ],
        image: "/images/home/do1.webp",
        imageAlt: "High-capacity apparel manufacturing lines",
        fit: "cover",
    },
    // {
    //     id: "responsible",
    //     eyebrow: "Responsible Business",
    //     title: "Responsible by design",
    //     paragraphs: [
    //         "Our Dankotuwa facility runs on renewable energy and avoids hazardous chemicals, and worker safety stays at the centre of daily operations.",
    //         "Sustainability is not a side project for us. It shapes how we plan, buy and produce every garment.",
    //     ],
    //     cta: { text: "Our Commitments", href: "/sustainability-commitments" },
    //     image: "/images/home/homeHero-4.png",
    //     imageAlt: "Earth-toned casual outfits",
    //     fit: "contain",
    // },
];

export interface SplitStoryItem {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: { text: string; href: string };
}

export interface VideoStorySectionData {
    videoSrc: string;
    left: SplitStoryItem;
    right: SplitStoryItem;
}

export const videoStoryData: VideoStorySectionData = {
    videoSrc: "/videos/home-banner-video.mp4",
    left: {
        id: "people",
        eyebrow: "Our People",
        title: "Good garments start with good people",
        paragraphs: [
            "Our team is the reason our garments are good. We work to provide a safe, fair and respectful workplace where everyone can learn, grow and build a career, with a strong commitment to empowering women.",
            "If you want to build your skills with a team that values them, we would like to hear from you.",
        ],
        cta: { text: "Join Our Team", href: "/careers" },
    },
    right: {
        id: "innovation",
        eyebrow: "Innovation",
        title: "Better garments, smarter processes",
        paragraphs: [
            "We invest in product development, fabric knowledge and smarter production methods, so our buyers get garments that perform well, last longer and use resources more carefully.",
            "Steady improvement on the factory floor is how we stay ready for what our buyers will need next.",
        ],
        cta: { text: "Step Into Our Future", href: "/innovation" },
    },
};