import clsx from "clsx/lite";
import ButtonComponent from "@components/button.component";

interface StepperSliderProps {
    startIdx: number
    currentItem: number,
    onClick: (actualIdx: number) => void,
    length: number
}
const StepperSliderComponent: React.FC<StepperSliderProps> = ({ startIdx, currentItem, onClick, length }): React.JSX.Element => {
    return (
        <div className="flex justify-center mt-4 gap-4 absolute left-1/2 -translate-x-1/2 bottom-3 z-2">
            {
                Array.from({ length }).map((_, idx) => {
                    const actualIdx = startIdx + idx;
                    const isCurrent = actualIdx === currentItem;
                    return <ButtonComponent
                        key={actualIdx}
                        onClick={() => onClick(actualIdx)}
                        label=""
                        aria-label="slider-step"
                        className={clsx(
                            !isCurrent && "bg-white/60 border-none",
                            "p-0! h-1 w-7"
                        )}
                        variant={isCurrent ? "primary" : "outline"}
                    />
                })
            }
        </div>
    )
}
export default StepperSliderComponent