import React from "react";

interface FooterNavProps {
    section: {
        title: string;
        menu: { linked: string; label: string }[]
    },
    itemEL?: React.ReactElement

}
const FooterNav: React.FC<FooterNavProps> = ({ section: { title, menu }, itemEL }): React.JSX.Element => {
    return (
        <div className="space-y-4">
            <h3 className="font-black font-barlow italic leading-7 text-white text-lg">{title}</h3>
            <ul className="space-y-2">
                {menu.map((item, idx) => (
                    <li key={idx} className="font-roman text-sm">
                        <a href={item.linked} className="hover:text-primary-500">{item.label}</a>
                    </li>
                ))}
                {itemEL && itemEL}
            </ul>
        </div>
    )
}
export default React.memo(FooterNav);