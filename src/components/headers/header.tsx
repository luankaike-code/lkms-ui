import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function HeaderBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<header className={cn("flex justify-between border-b-solid border-b-2 border-border py-2 px-4", className)} {...props}>
			{ children }
		</header>
	)
}

export function HeaderBaseIcon({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("self-start", className)} {...props}>
			{ children }
		</div>
	)
}

export function HeaderBaseContent({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("self-end pr-32", className)} {...props}>
			{ children }
		</div>
	)
}
