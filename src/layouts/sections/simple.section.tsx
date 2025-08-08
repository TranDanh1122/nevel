import { IMG_URL } from "@/commons/type";
import Image from "@components/image.component";
import React from "react";

interface SimpleSectionProps {
    title: string;
    url: IMG_URL
}
const SimpleSection: React.FC<SimpleSectionProps> = ({ title, url }): React.JSX.Element => {
    return <section className="h-full flex flex-col gap-2 w-full">
        <h2 className="font-barlow  font-black italic text-2xl md:text-[2rem] leading-8 md:leading-12 text-primary-500 uppercase">
            {title}
        </h2>

        <Image
            loading="lazy"
            src={`${url.DESKTOP}/1.webp`}
            mobileSrc={`${url.MOBILE}/1.webp`}
            alt="hot nft"
            className="object-cover w-full h-full rounded-xl"
            wrapperClassName=" md:w-60 w-full aspect-square"
        />
    </section>
}
export default SimpleSection