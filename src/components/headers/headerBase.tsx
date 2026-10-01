import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function HeaderBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<header className={cn("flex justify-between items-center border-b-solid border-b-2 border-border px-4 py-2", className)} {...props}>
			{ children }
		</header>
	)
}

export function HeaderBaseIcon({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("", className)} {...props}>
			{ children }
		</div>
	)
}

export function HeaderBaseContent({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("", className)} {...props}>
			{ children }
		</div>
	)
}
