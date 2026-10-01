import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

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

export function HeroRoadmapBulletItemBullet({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<aside className={cn("flex items-center justify-center aspect-square rounded-full bg-emphasis text-background font-bold size-28", className)} {...props}>
			{ children }
		</aside>
	)
}

export function HeroRoadmapBulletItemArticle({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<article className={cn("h-full", className)} {...props}>
			{ children }
		</article>
	)
}