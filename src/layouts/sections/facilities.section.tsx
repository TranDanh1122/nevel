import React from "react"
import { FACILITIES } from "@/commons/content"

const FacilitiesSection: React.FC = (): React.JSX.Element => {
    return (
        <>
            {FACILITIES.map((facility, idx) => (
                <div key={idx} className="space-y-2 cursor-pointer">
                    <img
                        src={facility.DESKTOP}
                        alt={facility.text}
                        className="md:w-12.5 md:h-10 w-9 h-7 object-contain mx-auto"
                    />
                    <span className="md:text-sm md:leading-5 text-[10px] leading-3 uppercase">{facility.text}</span>
                </div>
            ))}
        </>
    )
}
export default React.memo(FacilitiesSection)