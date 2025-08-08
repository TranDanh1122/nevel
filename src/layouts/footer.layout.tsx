import React from "react";
import { FOOTER_ITEMS } from "@/commons/content";
import FooterNav from "@components/navbar/footer.nav";
import Image from "@components/image.component";

const Footer: React.FC = (): React.JSX.Element => {
    const footer = React.useMemo(() => {
        return FOOTER_ITEMS.map((section, index) => {
            const itemEL = section.hasImage ? (
                <Image
                    loading="lazy"
                    src="./assets/images/footer.webp"
                    alt={section.title}
                    className="w-full aspect-[3.5] max-w-38 object-cover rounded-lg"
                />
            ) : undefined;
            return <FooterNav key={index} section={section} itemEL={itemEL} />
        });
    }, [])
    return (
        <footer className="border-t border-t-secondary-800 text-secondary-400 mt-10">
            <div className="container py-12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {footer}
            </div>
        </footer>
    );
}

export default React.memo(Footer);  