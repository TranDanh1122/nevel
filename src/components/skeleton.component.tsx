import clsx from "clsx/lite"

const SkeletonComponent: React.FC<React.ComponentProps<"div">> = ({ className }): React.JSX.Element => {
    return <div className={clsx(" bg-secondary-800 animate-pulse", className)} />
}
export default SkeletonComponent