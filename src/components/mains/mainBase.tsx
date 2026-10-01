import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function MainBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className={cn("flex flex-col p-4 md:px-12 min-h-svh", className)} {...props}>
			{ children }
		</main>
	)
}