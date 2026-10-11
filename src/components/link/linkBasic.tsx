import { cn } from "@/lib/utils";
import { useCallback, type PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export function LinkBasic({ children, href, className, classNameCurrentPath="text-emphasis" }: PropsWithChildren & {href: string, className?: string, classNameCurrentPath?: string}) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate(href);
	}, [navigate, href]);

 	return (
		<Button variant="link" className={cn("hover:text-emphasis", className, location.pathname == href? classNameCurrentPath : "")} onClick={handleClick}>
 			{ children }
 		</Button>
 	)
}