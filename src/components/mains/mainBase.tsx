import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function MainBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className={cn("", className)} {...props}>
			<h1>Main</h1>
			{ children }
		</main>
	)
}