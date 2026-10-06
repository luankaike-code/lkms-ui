import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

export function HeroRoadmapBullet({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col gap-16", className)} {...props}>
			{ children }
		</section>
	)
}

export function HeroRoadmapBulletItem({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("flex gap-8 items-center", className)} {...props}>
			{ children }
		</div>
	)
}

export const HeroRoadmapBulletItemBullet = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({children, className, ...props}, ref) => {
	return (
		<aside ref={ref} className={cn("flex items-center justify-center aspect-square rounded-full bg-emphasis text-background font-bold size-28", className)} {...props}>
			{ children }
		</aside>
	)
})

export function HeroRoadmapBulletItemArticle({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<article className={cn("h-full", className)} {...props}>
			{ children }
		</article>
	)
}