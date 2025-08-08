/// <reference types="vite/client" />
declare module "lucide-react/dist/esm/icons/*" {
    import { ComponentType, SVGProps } from "react"
    const Icon: ComponentType<SVGProps<SVGSVGElement>>
    export default Icon
}
declare module 'path'