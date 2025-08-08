import React from "react"
import { HERO_IMAGES } from "@/commons/content"
import { BANNER_URL } from "@/commons/const";
import Image from "@/components/image.component";

const Slider = React.lazy(() => import("@components/slider"));
const HeroSection: React.FC = (): React.JSX.Element => {
    return (
        <section id="hero" className="w-screen" style={{ aspectRatio: "calc(1600/450)" }}>
            <React.Suspense fallback={
                <Image 
                loading="eager" 
                src={`${BANNER_URL.DESKTOP}/banner1.webp`} 
                mobileSrc={`${BANNER_URL.MOBILE}/banner1.webp`} 
                alt="banner" 
                className="w-full h-full object-contain" 
                wrapperClassName="w-full h-full"
                />
            }>
                <Slider images={HERO_IMAGES} batchSize={1} />

            </React.Suspense>
        </section>
    )

}
export default HeroSection