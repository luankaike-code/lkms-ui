import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type size = {
	x?: number
	y?: number
}

export function PlaceholderImage({ x=64, y=64, className, ...props}: size & HTMLAttributes<HTMLImageElement>) {
	return (
		<img src={`https://placehold.co/${x}x${y}`} className={cn(className)} {...props} />
	)
}