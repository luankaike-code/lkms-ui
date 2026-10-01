import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function HeroWithAside({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col md:flex-row gap-8 w-full justify-around", className)} {...props}>
			{children}
		</section>
	)
}

export function HeroWithAsideMainContent({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<article className={cn("self-center max-w-lg", className)} {...props}>
			{children}
		</article>
	)
}

export function HeroWithAsideSecondContent({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<aside className={cn("self-center", className)} {...props}>
			{children}
		</aside>
	)
}
