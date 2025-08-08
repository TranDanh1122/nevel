import React from "react";
import Image from "@components/image.component";
import { ImageType } from "../ult/type";
import clsx from "clsx/lite";
import debounce from "just-debounce-it";

interface SliderComponentProps {
    batchSize: number,
    currentItem: number,
    startIdx: number,
    renderImages: ImageType[],
    total: number,
    gap?: number,
    wrapperWidth?: number,
    itemClass?: string,
    itemWidth?: number
}
const SliderComponent: React.FC<SliderComponentProps> = (
    {
        batchSize,
        currentItem,
        startIdx,
        renderImages,
        wrapperWidth,
        gap = 0,
        itemClass,
        itemWidth: expectWidth
    }): React.JSX.Element => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = React.useState(
        () => {
            if (expectWidth) return expectWidth
            if (wrapperWidth) return wrapperWidth / batchSize
            return window.innerWidth / batchSize
        });

    React.useEffect(() => {
        /**
         * Handle drag browser window, but screen size not reach responsive point
         */
        const onResize = debounce(() => {

            const newWidth = (wrapperWidth ?? window.innerWidth) / batchSize;
            setItemWidth(prev => newWidth !== prev ? newWidth : prev);

        }, 50);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [batchSize, wrapperWidth]);

    React.useLayoutEffect(() => {
        /**
         * Scroll after layout => have element position
         * Scroll before paint => no flicker
         */
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: currentItem * itemWidth,
            behavior: "smooth"
        });
    }, [currentItem, itemWidth]);

    const itemStyle = React.useCallback((actualIdx: number) => {

        let left = actualIdx * itemWidth
        const totalGapInBatch = (batchSize - 1) * gap
        let width = itemWidth - (totalGapInBatch / batchSize)

        if (expectWidth) {
            left = actualIdx > 0 ? left + (gap * actualIdx) : left
            width = expectWidth
        }
        return {
            left: `${left}px`,
            width: `${width}px`,
            height: "100%"
        }
    }, [itemWidth, batchSize, expectWidth, gap])

    return (
        <div ref={scrollRef}
            className="relative overflow-x-scroll scrollbar-none whitespace-nowrap h-full">
            {
                renderImages.map((img, idx) => {
                    const actualIdx = startIdx + idx;
                    const isCurrent = actualIdx === currentItem;
                    return (
                        <div
                            key={actualIdx}
                            className={clsx("absolute z-1 top-0", itemClass)}
                            style={itemStyle(actualIdx)} >
                            <Image
                                loading="lazy"
                                data-current={isCurrent}
                                src={img.DESKTOP}
                                mobileSrc={img.MOBILE}
                                alt={img.alt}
                                className="object-cover w-full h-full"
                                wrapperClassName="h-full w-full"
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default React.memo(SliderComponent)