// src/data/heroSlides.ts  (put it next to home.ts)

export type HeroIcon =
    | "ruler"
    | "scissors"
    | "timer"
    | "shirt"
    | "gem"
    | "leaf"
    | "factory"
    | "globe"
    | "truck"
    | "shield"
    | "award"
    | "users";

export interface HeroSlide {
    /** Top strip headlines: small italic line + big accent word */
    left: { line: string; word: string };
    right: { line: string; word: string };

    /** Panel theme – only palette colours. Classes are written in full so Tailwind can see them. */
    panelClass: string; // panel background
    accentClass: string; // big headline words (top strip)
    tone: "dark" | "light"; // dark panel => white text, light panel => navy text

    /** Left side of the panel */
    eyebrow: string;
    title: string;
    description: string;
    proof: { value: string; label: string };
    rightProof?: { value: string; label: string };

    /** Centre image */
    image: string;
    imageAlt: string;
    imageWrapperClass?: string;

    /** Right side of the panel */
    features: { icon: HeroIcon; title: string }[];
    card: { image: string; title: string; subtitle: string; text: string };
}

export const heroSlides: HeroSlide[] = [
    {
        left: { line: "Design Your", word: "VISION" },
        right: { line: "Own Your", word: "BRAND" },
        panelClass: "bg-blue",
        accentClass: "text-blue",
        tone: "dark",
        eyebrow: "Design & Sampling",
        title: "Where Your Ideas Meet Expert Craft",
        description:
            "From first sketch to approved sample, our team turns your concept into a garment that is ready for production.",
        proof: { value: "25+", label: "Years of apparel experience" },
        rightProof: { value: "98%", label: "First-sample approval rate" },
        image: "/images/home/homeHero-1.png",
        imageAlt: "Models wearing coordinated blue and cream outfits",
        imageWrapperClass: "lg:h-[670px] lg:w-[460px] xl:h-[640px] xl:w-[540px]",
        features: [
            { icon: "ruler", title: "Design Support" },
            { icon: "scissors", title: "Pattern Making" },
            { icon: "timer", title: "Quick Sampling" },
        ],
        card: {
            image: "/images/home/homeCard-1.png",
            title: "Streetwear Hoodies",
            subtitle: "Fleece & Knitwear",
            text: "Heavy, soft fleece with clean finishing.",
        },
    },
    {
        left: { line: "Crafted For", word: "COMFORT" },
        right: { line: "Built To", word: "LAST" },
        panelClass: "bg-[#6B141E]",
        accentClass: "text-[#8E1B28]",
        tone: "dark",
        eyebrow: "Tops & Bottoms",
        title: "Everyday Wear, Made With Precision",
        description:
            "T-shirts, polos, chinos and sweatpants stitched to hold their shape wash after wash.",
        proof: { value: "350k", label: "Pieces made every month" },
        rightProof: { value: "99.2%", label: "AQL quality inspection pass" },
        image: "/images/home/homeHero-2-v2.png",
        imageAlt: "Model in tailored burgundy and dark apparel",
        imageWrapperClass: "lg:h-[670px] lg:w-[460px] xl:h-[640px] xl:w-[540px]",
        features: [
            { icon: "shirt", title: "Premium Fabrics" },
            { icon: "shield", title: "Checked Every Stage" },
            { icon: "award", title: "ISO 9001" },
        ],
        card: {
            image: "/images/home/homeCard-2.png",
            title: "Tailored Womenswear",
            subtitle: "Blazers & Trousers",
            text: "Sharp cuts, consistent fit across sizes.",
        },
    },
    {
        left: { line: "Bring Your", word: "COLOURS" },
        right: { line: "Ship To The", word: "WORLD" },
        panelClass: "bg-[#F5A32B]",
        accentClass: "text-[#F5A32B]",
        tone: "light",
        eyebrow: "Global Export",
        title: "Made In Sri Lanka, Worn Everywhere",
        description:
            "We plan, produce and ship orders on schedule to buyers across more than 18 markets.",
        proof: { value: "18+", label: "Export markets served" },
        rightProof: { value: "99.5%", label: "On-time export delivery" },
        image: "/images/home/homeHero-3.png",
        imageAlt: "Mannequins styled in bright knitwear and denim",
        imageWrapperClass: "lg:h-[670px] lg:w-[460px] xl:h-[640px] xl:w-[540px]",
        features: [
            { icon: "globe", title: "Worldwide Buyers" },
            { icon: "truck", title: "On-Time Shipping" },
            { icon: "gem", title: "Colour Accuracy" },
        ],
        card: {
            image: "/images/home/homeCard-3.png",
            title: "Smart Casual Menswear",
            subtitle: "Shirts & Chinos",
            text: "Light, breathable styles for all seasons.",
        },
    },
    {
        left: { line: "Stitched With", word: "CARE" },
        right: { line: "Delivered", word: "ON TIME" },
        panelClass: "bg-tint border border-line",
        accentClass: "text-blue",
        tone: "light",
        eyebrow: "Responsible Production",
        title: "Good Clothes, Made The Right Way",
        description:
            "Safe, fair workplaces and a skilled team of 500+ people behind every order we ship.",
        proof: { value: "500+", label: "Skilled team members" },
        rightProof: { value: "100%", label: "WRAP & ethical certified" },
        image: "/images/home/homeHero-4.png",
        imageAlt: "Casual outfits in brown, cream and denim",
        imageWrapperClass: "lg:h-[670px] lg:w-[460px] xl:h-[640px] xl:w-[540px]",
        features: [
            { icon: "users", title: "Fair Workplaces" },
            { icon: "leaf", title: "Renewable Energy" },
            { icon: "factory", title: "WRAP Certified" },
        ],
        card: {
            image: "/images/home/homeCard-4.png",
            title: "Unisex Essentials",
            subtitle: "Jackets, Tees & Denim",
            text: "Versatile pieces for every wardrobe.",
        },
    },
];