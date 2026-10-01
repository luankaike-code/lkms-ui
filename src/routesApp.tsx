import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderBase, HeaderBaseContent, HeaderBaseIcon } from './components/headers';
import { MainBase } from './components/mains';
import { FooterBase } from './components/footers';
import { App } from './App';
import { Outlet } from "react-router";
import { PlaceholderImage } from './components/placeholders';
import { LinkBasic } from './components/link';

function Wrapper() {
	return (
		<>
			<HeaderBase>
				<HeaderBaseIcon>
					<PlaceholderImage x={32} y={32} />
				</HeaderBaseIcon>
				<HeaderBaseContent>
					{Array.from({length: 5}).map(x =>
						<LinkBasic href="/">Lorem </LinkBasic>
					)}
				</HeaderBaseContent>
			</HeaderBase>
			<MainBase>
				<Outlet />
			</MainBase>
			<FooterBase>
					<h1>Footer</h1>
			</FooterBase>
		</>
	)
}

export function RoutesApp() {
	return (
		<BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
					<Route path="/" element={<App />} />
				</Route>
      </Routes>
    </BrowserRouter>
	)
}