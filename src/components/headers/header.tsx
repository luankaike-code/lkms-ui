import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function HeaderBase({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
	return (
		<header className={cn("", className)} {...props}>
			{ children }
		</header>
	)
}

