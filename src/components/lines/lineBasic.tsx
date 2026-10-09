import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useCallback, useEffect, useRef, type HTMLAttributes, type RefObject } from "react";

const lineBasicVariants = cva("self-center z-50 inline-block border-boder", {
	variants: {
		border: {
			bottom: "border-b-2 boder-b-solid",
			top: "border-t-2 boder-t-solid",
			left: "border-l-2 boder-l-solid",
			right: "border-r-2 boder-r-solid",
		},
	},
	defaultVariants: {
		border: "bottom"
	}
})

type ReactElement = RefObject<HTMLElement | null>

export function LineBasic({className, children, to, from, border="bottom", ...props}: {to?: ReactElement, from?: ReactElement} & VariantProps<typeof lineBasicVariants> & HTMLAttributes<HTMLSpanElement>) {
	const selfRef = useRef<HTMLSpanElement>(null)

	const UpdateStyle = useCallback(() => {
		if(to?.current == null || from?.current == null || selfRef.current == null)
			return

		const toRect = to.current.getBoundingClientRect()
		const fromRect = from.current.getBoundingClientRect()

		const toX = toRect.x + window.scrollX + toRect.width / 2
		const toY = toRect.y + window.scrollY
		const fromX = fromRect.x + window.scrollX + fromRect.width / 2
		const fromY = fromRect.y + window.scrollY

		const deltaX = toX - fromX;
		const deltaY = toY - fromY;
		const distance = Math.hypot(deltaX, deltaY); 

		const angle = (Math.atan2(deltaY, deltaX) * 180 / Math.PI) - 90;

		selfRef.current.style.position = "absolute"
		selfRef.current.style.top = `${toY}px`
		selfRef.current.style.left = `${toX}px`
		selfRef.current.style.height = `${distance}px`
		selfRef.current.style.transform = `rotate(${angle}deg)`
	}, [from, to, selfRef])

	useEffect(() => {
		window.addEventListener('resize', UpdateStyle);
		window.addEventListener('load', UpdateStyle);

		return () => {
			window.removeEventListener('resize', UpdateStyle);
			window.addEventListener('load', UpdateStyle);
		}
	}, [UpdateStyle])

	return (
		<span ref={selfRef} className={cn(lineBasicVariants({border, className}))} {...props}>
			{children}
		</span>
	)
}