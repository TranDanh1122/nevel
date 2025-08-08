import { DROP_NFT } from "@/commons/content"
import { ResponsiveContext } from "@contexts/responsive.context";
import React from "react"
const Slider = React.lazy(() => import("@components/slider"));

const DropNFTComponent: React.FC = (): React.JSX.Element => {
    const { isMobile } = React.useContext(ResponsiveContext);

    return <Slider
        images={DROP_NFT}
        batchSize={1}
        variant="carousel"
        wrapperWidth={isMobile ? undefined : 600}
        itemClass="rounded-xl overflow-hidden cursor-pointer"
        titleEL={
            <h2 className="font-barlow font-black italic text-2xl md:text-[2rem] leading-8 md:leading-12 text-primary-500 uppercase">
                NFT Drops Calendar
            </h2>
        }
    />
}
export default React.memo(DropNFTComponent)