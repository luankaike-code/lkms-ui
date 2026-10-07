import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderBase, HeaderBaseContent, HeaderBaseIcon } from './components/headers';
import { App } from './App';
import { Outlet } from "react-router";
import { PlaceholderImage } from './components/placeholders';
import { LinkBasic } from './components/link';
import { FooterBaseMainContent, FooterBaseMainContentSection, FooterBaseMainContentSectionItem, FooterBaseMainContentSectionTitle, FooterBase, FooterBaseMain, FooterBaseCopyright, FooterBaseMainIcon } from './components/footers';

function FTSection() {
	return (
		<FooterBaseMainContentSection>
			<FooterBaseMainContentSectionTitle>Title1</FooterBaseMainContentSectionTitle>
			<FooterBaseMainContentSectionItem>item1</FooterBaseMainContentSectionItem>
			<FooterBaseMainContentSectionItem>item2</FooterBaseMainContentSectionItem>
			<FooterBaseMainContentSectionItem>item3</FooterBaseMainContentSectionItem>
			<FooterBaseMainContentSectionItem>item4</FooterBaseMainContentSectionItem>
			<FooterBaseMainContentSectionItem>item5</FooterBaseMainContentSectionItem>
		</FooterBaseMainContentSection>
	)
}

function Wrapper() {
	return (
		<>
			<HeaderBase>
				<HeaderBaseIcon>
					<PlaceholderImage x={32} y={32} />
				</HeaderBaseIcon>
				<HeaderBaseContent>
					{Array.from({length: 5}).map(_ =>
						<LinkBasic href="/">Lorem </LinkBasic>
					)}
				</HeaderBaseContent>
			</HeaderBase>
			<Outlet />
			<FooterBase>
				<FooterBaseMain>
					<FooterBaseMainIcon>
						<PlaceholderImage x={200} y={200} />
					</FooterBaseMainIcon>
					<FooterBaseMainContent>
						<FTSection />
						<FTSection />
						<FTSection />
						<FTSection />
						<FTSection />
					</FooterBaseMainContent>
				</FooterBaseMain>
				<FooterBaseCopyright>
					© 2026 Luan Mack. All rights reserved.
				</FooterBaseCopyright>
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