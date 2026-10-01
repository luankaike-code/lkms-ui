import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function HeroWithProducts({children, className, ...props} : HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col gap-8", className)} {...props}>
			{children}
		</section>
	)
}

export function HeroWithProductsHeader({children, className, ...props} : HTMLAttributes<HTMLDivElement>) {
	return (
		<article className={cn("text-center", className)} {...props}>
			{children}
		</article>
	)
}

export function HeroWithProductsContent({children, className, ...props} : HTMLAttributes<HTMLDivElement>) {
	return (
		<aside className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)} {...props}>
			{children}
		</aside>
	)
}