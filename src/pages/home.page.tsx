import React from "react"
import HeroSection from "@layouts/sections/hero.section";
import SkeletonComponent from "@components/skeleton.component";
import { HOT_NFT_URL, PROMOTION_URL } from "@/commons/const";
import SimpleSection from "@layouts/sections/simple.section";
import { ResponsiveContext } from "@/contexts/responsive.context";

const FacilitiesSection = React.lazy(() => import("@layouts/sections/facilities.section"));
const NewCollectionSection = React.lazy(() => import("@layouts/sections/newcollection.section"))
const DropNFTSection = React.lazy(() => import("@layouts/sections/dropnft.section"))
const HomePage: React.FC = (): React.JSX.Element => {
    return (
        <>
            <HeroSection />
            <section id="facilities" className="bg-secondary-700 text-secondary-400">
                <div className="container mx-auto flex items-center justify-center md:justify-between md:flex-nowrap flex-wrap gap-8 md:gap-0 py-6">
                    <React.Suspense fallback={<FacilitiesSectionSkeleton />}>
                        <FacilitiesSection />
                    </React.Suspense>
                </div>
            </section>
            <section className="md:py-20 py-10 flex flex-col md:gap-20 gap-10">
                <section id="new-nft">
                    <div className="container mx-auto md:h-77.5 h-45 flex flex-col gap-2">
                        <React.Suspense fallback={<NewCollectionSectionSkeleton />}>
                            <NewCollectionSection />
                        </React.Suspense>
                    </div>
                </section>

                <section id="tripper" >
                    <div className="container mx-auto md:h-75 h-full flex md:flex-row flex-col gap-10">
                        <section className="md:w-[600px] md:h-full h-53 w-full shrink-0 flex flex-col gap-2">
                            <React.Suspense fallback={<DropNFTSectionSkeleton />}>
                                <DropNFTSection />
                            </React.Suspense>
                        </section>
                        <div className="flex items-center justify-center shrink-0 md:gap-6 gap-3 h-full">

                            <SimpleSection title="Hot NFT" url={HOT_NFT_URL} />
                            <SimpleSection title="PROMOTION" url={PROMOTION_URL} />
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}
export default HomePage

const FacilitiesSectionSkeleton: React.FC = (): React.JSX.Element => {


    return (
        <>
            {
                Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="space-y-2">
                        <SkeletonComponent className="w-12.5 h-10  mx-auto" />
                        <SkeletonComponent className="w-full h-3.5" />
                    </div>
                ))
            }
        </>)
}
const NewCollectionSectionSkeleton: React.FC = (): React.JSX.Element => {
    const { isMobile } = React.useContext(ResponsiveContext);
    return (
        <>
            <div className="flex items-center justify-between">
                <SkeletonComponent className="md:w-75 w-56 md:h-12 h-8" />
                <div className="flex justify-center items-center gap-2">
                    <SkeletonComponent className="md:size-10 size-8" />
                    <SkeletonComponent className="md:size-10 size-8" />
                </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
                {
                    Array.from({ length: isMobile ? 3 : 6 }).map((_, idx) => (<SkeletonComponent key={idx} className="md:h-61 md:w-45 h-26 w-36" />))
                }
            </div>
        </>
    )
}

const DropNFTSectionSkeleton: React.FC = (): React.JSX.Element => {
    return (
        <>
            <div className="flex items-center justify-between">
                   <SkeletonComponent className="md:w-75 w-56 md:h-12 h-8" />
                <div className="flex justify-center items-center gap-2">
                    <SkeletonComponent className="md:size-10 size-8" />
                    <SkeletonComponent className="md:size-10 size-8" />
                </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
                <SkeletonComponent className="md:h-60 h-43 md:w-[600px] w-full" />
            </div>
        </>
    )
}