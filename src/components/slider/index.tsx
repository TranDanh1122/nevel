import React from "react";
import ButtonComponent from "@components/button.component";
import StepperSliderComponent from "./components/stepper.component";
import { ImageType } from "./ult/type";
import SliderComponent from "./components/slider.component";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
interface SliderProps {
    images: ImageType[],
    batchSize: number,
    preload?: number,
    variant?: "stepper" | "carousel",
    gap?: number,
    wrapperWidth?: number,
    itemWidth?: number,
    itemClass?: string,
    titleEL?: React.ReactElement

}
/**
 * Just a simple slider component that allows you to scroll through images.
 * keep you app work well if you have a lot of images/product/content.
 * In real live, just use a library like react window
 */
const Slider: React.FC<SliderProps> = (
    {
        images,
        batchSize,
        preload = 3,
        variant = "stepper",
        gap,
        wrapperWidth,
        itemClass,
        titleEL,
        itemWidth
    }) => {
    const [currentItem, setCurrentItem] = React.useState(0);

    const startIdx = Math.max(0, currentItem - preload);
    const endIdx = Math.min(images.length, currentItem + batchSize + preload);

    const next = React.useCallback(() => {
        setCurrentItem((prev) => Math.min(prev + 1, images.length - 1));
    }, []);

    const prev = React.useCallback(() => {
        setCurrentItem((prev) => Math.max(prev - 1, 0));
    }, []);

    const changeStep = React.useCallback((actualIdx: number) => {
        setCurrentItem(prev => prev != actualIdx ? actualIdx : prev)
    }, [])
    const renderImages = React.useMemo(() => {
        return images.slice(startIdx, endIdx)
    }, [images, startIdx, endIdx]);

    if (batchSize > images.length) return <p>Not allowed</p>;
    return (
        <>
            {
                variant === "carousel" &&
                titleEL &&
                <div className="flex items-center justify-between">
                    {titleEL}
                    <div className="flex justify-center items-center gap-2">
                        <ButtonComponent
                            aria-label="previos"
                            className="bg-secondary-800 hover:opacity-80 hover:bg-secondary-800 md:size-10 size-8 rounded-xl p-0!"
                            onClick={prev}
                            label={<ChevronLeft className="text-white/60 w-6 h-6 mx-auto" />}
                            variant="primary" />
                        <ButtonComponent
                            aria-label="next"
                            className="bg-secondary-800 hover:opacity-80 hover:bg-secondary-800 md:size-10 size-8 rounded-xl p-0!"
                            onClick={next}
                            label={<ChevronRight className="text-white/60 w-6 h-6 mx-auto" />}
                            variant="primary" />
                    </div>
                </div>
            }

            <div className="relative w-full h-full">

                <SliderComponent
                    total={images.length}
                    currentItem={currentItem}
                    startIdx={startIdx}
                    renderImages={renderImages}
                    wrapperWidth={wrapperWidth}
                    itemClass={itemClass}
                    gap={gap}
                    batchSize={batchSize}
                    itemWidth={itemWidth}
                />
                {
                    variant === "stepper" &&
                    <StepperSliderComponent startIdx={startIdx}
                        currentItem={currentItem}
                        onClick={changeStep}
                        length={endIdx - startIdx}
                    />
                }
            </div>
        </>
    );
};

export default React.memo(Slider);
