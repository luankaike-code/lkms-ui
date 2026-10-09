import { cn } from "@/lib/utils";
import { useCallback, type PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export function LinkBasic({ children, href, className}: PropsWithChildren & {href: string, className?: string}) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate(href);
	}, [navigate, href]);

 	return (
		<Button variant="link" className={cn("hover:text-emphasis", location.pathname == href? "text-emphasis" : "", className)} onClick={handleClick}>
 			{ children }
 		</Button>
 	)
}