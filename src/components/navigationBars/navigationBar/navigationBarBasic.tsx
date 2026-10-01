import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { LinkBasic } from "@/components/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

type NavigationBarLink ={
	src: string;
	label: string;
}

export function NavigationBarBasic({ children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
 	return (
		<nav className={cn("flex py-2 px-4", className)} {...props}>
			{ children }
 		</nav>
 	)
}

export function NavigationBarBasicDesktop({ links, className}: { links: NavigationBarLink[], className?: string } ) {
	return (
		<ul className={cn("hidden md:flex", className)}>
			{links.map((link, index) => (
				<li key={index}>
					<LinkBasic href={link.src}>{link.label}</LinkBasic>
				</li>
			))}
		</ul>
	)
}

export function NavigationBarBasicMobile({ links, className, children}: { links: NavigationBarLink[], className?: string, children?: React.ReactNode }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className={cn("md:hidden", className)}>
				{children?? <Menu />}
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center" className="pointer-events-auto">
				{links.map((link, index) => (
					<DropdownMenuItem className="pointer-events-auto" key={index}>
						<LinkBasic href={link.src} className="w-full">{link.label}</LinkBasic>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}