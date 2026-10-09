import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function FooterBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<footer className={cn("border-t-solid border-t-2 border-border pb-1 pt-4 md:pt-2 px-4", className)} {...props}>
			{ children }
		</footer>
	)
}

export function FooterBaseCopyright({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<p className={cn("text-ring text-center", className)} {...props}>
			{ children }
		</p>
	)
}

export function FooterBaseMain({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className={cn("flex flex-col-reverse gap-8 justify-between items-center md:flex-row", className)} {...props}>
			{ children }
		</main>
	)
}

export function FooterBaseMainIcon({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<aside className={cn("flex justify-center items-center p-4", className)} {...props}>
			{ children }
		</aside>
	)
}

export function FooterBaseMainContent({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col md:flex-row gap-4 md:gap-24", className)} {...props}>
			{ children }
		</section>
	)
}

export function FooterBaseMainContentSection({ children, className, ...props}: HTMLAttributes<HTMLUListElement>) {
	return (
		<ul className={cn("", className)} {...props}>
			{ children }
		</ul>
	)
}

export function FooterBaseMainContentSectionTitle({ children, className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1 className={cn("font-black text-xl", className)} {...props}>
			{ children }
		</h1>
	)
}

export function FooterBaseMainContentSectionItem({ children, className, ...props}: HTMLAttributes<HTMLLIElement>) {
	return (
		<li className={cn("", className)} {...props}>
			{ children }
		</li>
	)
}