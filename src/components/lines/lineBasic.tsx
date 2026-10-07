import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState, type CSSProperties, type HTMLAttributes, type RefObject } from "react";

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
	const [style, setStyle] = useState<CSSProperties>({})
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	});
	
	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [])

	useEffect(() => {
		if(to?.current == null || from?.current == null)
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

		let newStyle: CSSProperties = {}

		newStyle.position = "absolute"
		newStyle.top = toY
		newStyle.left = toX
		newStyle.height = `${distance}px`
		newStyle.transform = `rotate(${angle}deg)`

		setStyle(newStyle)
	}, [to, from, windowSize])

	return (
		<span style={style} className={cn(lineBasicVariants({border, className}))} {...props}>
			{children}
		</span>
	)
}