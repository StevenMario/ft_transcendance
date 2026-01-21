export type GradientTextProps = {
    text: string;
    className?: string;
}

export type NeomorphContainerProps = {
    text: string;
    className?: string;
    textClassName?: string;
}

export function GradientText(props: GradientTextProps) {
    return (
        <span className={`bg-linear-to-r from-[#EF485B] via-[#F39C12] to-[#F1C40F] text-transparent bg-clip-text ${props.className}`}>
            {props.text}
        </span>
    )
}

export function NeomorphContainer(props: NeomorphContainerProps) {
    return (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold text-red-700 mb-6 px-4 py-2 shadow-inner shadow-slate-200 rounded-3xl border-[1.5px] border-white ${props.className}`}>
            <GradientText text={props.text} className={props.textClassName} />
        </div>
    )
}