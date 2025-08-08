import { NEW_NFT } from "@/commons/content"
import { ResponsiveContext } from "@contexts/responsive.context";
import React from "react"
const Slider = React.lazy(() => import("@components/slider"));

const NewCollectionSection: React.FC = (): React.JSX.Element => {
    const { isMobile } = React.useContext(ResponsiveContext);
    return <Slider
        images={NEW_NFT}
        batchSize={isMobile ? 3 : 6}
        variant="carousel"
        gap={isMobile ? 8 : 16}
        itemWidth={isMobile ? undefined : 180}
        itemClass="rounded-xl overflow-hidden cursor-pointer"
        titleEL={
            <h2 className="font-barlow font-black italic text-2xl md:text-[2rem] leading-8 md:leading-12 text-primary-500 uppercase">New NFT Collections</h2>
        }
    />
}
export default React.memo(NewCollectionSection)