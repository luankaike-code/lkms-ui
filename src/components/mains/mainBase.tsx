import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function MainBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className={cn("flex flex-col px-12 py-4 min-h-svh", className)} {...props}>
			{ children }
		</main>
	)
}