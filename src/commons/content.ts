import { BANNER_URL, DROP_NFT_URL, FACILITIES_TEXT_ICON_MAPPING, FACILITIES_URL, NEW_NFT_URL } from "./const"

export const MENU_ITEMS = [
    { linked: "#", label: "Home" },
    { linked: "#item1", label: "Item1" },
    { linked: "#item2", label: "Item2" },
    { linked: "#item3", label: "Item3" },
    { linked: "#item4", label: "Item4" },
]
export const FOOTER_ITEMS = [
    {
        title: "About Us",
        menu: [
            { linked: "#", label: "Careers" },
            { linked: "#", label: "Company Details" },
            { linked: "#", label: "Terms & Conditions" },
            { linked: "#", label: "Help center" },
            { linked: "#", label: "Privacy Policy" },
            { linked: "#", label: "Affiliate" },
        ],
        hasImage: false
    },
    {
        title: "Products",
        menu: [
            { linked: "#", label: "NFT Marketplace" },
            { linked: "#", label: "Slingshot" },
            { linked: "#", label: "Swaps" },
            { linked: "#", label: "NFT Launchpad" },
            { linked: "#", label: "Runes Platform" },
            { linked: "#", label: "Creator Dashboard" },
        ],
        hasImage: false
    },
    {
        title: "Resources",
        menu: [
            { linked: "#", label: "Support" },
            { linked: "#", label: "API" },
            { linked: "#", label: "Feature Requests" },
            { linked: "#", label: "Trust & Safety" },
            { linked: "#", label: "Sitemap" },
        ],
        hasImage: false
    },
    {
        title: "Contact Us",
        menu: [
            { linked: "mailto:support@tech.email", label: "support@tech.email" },
            { linked: "mailto:affiliate@tech.com", label: "affiliate@tech.com" },
        ],
        hasImage: true
    }
]
export const HERO_IMAGES = Array.from({ length: 10 }).map((_, idx) => ({
    DESKTOP: `${BANNER_URL.DESKTOP}/banner${idx + 1}.webp`,
    MOBILE: `${BANNER_URL.MOBILE}/banner${idx + 1}.webp`,
    alt: `banner${idx + 1}`
}))

export const FACILITIES = Array.from({ length: FACILITIES_TEXT_ICON_MAPPING.length }).map((_, idx) => ({
    DESKTOP: `${FACILITIES_URL.DESKTOP}/${FACILITIES_TEXT_ICON_MAPPING[idx].icon}`,
    MOBILE: `${FACILITIES_URL.MOBILE}/${FACILITIES_TEXT_ICON_MAPPING[idx].icon}`,
    text: FACILITIES_TEXT_ICON_MAPPING[idx].text
}));

export const NEW_NFT = Array.from({ length: 1000 }).map((_, idx) => {
    let fileName = idx + 1
    if (fileName > 6)
        fileName = Math.floor(Math.random() * 6) + 1;
    return {
        DESKTOP: `${NEW_NFT_URL.DESKTOP}/${fileName}.webp`,
        MOBILE: `${NEW_NFT_URL.MOBILE}/${fileName}.webp`,
        alt: "Lorem"
    }
});
export const DROP_NFT = Array.from({ length: 1000 }).map((_, idx) => {
    let fileName = idx + 1
    if (fileName > 4)
        fileName = Math.floor(Math.random() * 4) + 1;
    return {
        DESKTOP: `${DROP_NFT_URL.DESKTOP}/${fileName}.webp`,
        MOBILE: `${DROP_NFT_URL.MOBILE}/${fileName}.webp`,
        alt: "Lorem"
    }
});
