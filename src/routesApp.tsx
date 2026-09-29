import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HeaderBase } from './components/headers';
import { MainBase } from './components/mains';
import { FooterBase } from './components/footers';
import { App } from './App';
import { Outlet } from "react-router";

function Wrapper() {
	return (
		<>
			<HeaderBase>
				<h1>Header</h1>
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