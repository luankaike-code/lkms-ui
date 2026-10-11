import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function HeroFeature({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("flex flex-col gap-1", className)} {...props}>
			{children}
		</section>
	)
}

export function HeroFeatureSuperTitle({children, className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1 className={cn("text-sm font-mono text-emphasis -translate-x-1", className)} {...props}>
			{children}
		</h1>
	)
}

export function HeroFeatureTitle({children, className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1 className={cn("text-3xl font-semibold max-w-md", className)} {...props}>
			{children}
		</h1>
	)
}