import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function FooterBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<footer className={cn("flex flex-col md:flex-row border-t-solid border-t-2 border-border py-2 px-4", className)} {...props}>
			{ children }
		</footer>
	)
}