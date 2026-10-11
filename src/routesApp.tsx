import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderBasic, HeaderBasicContent, HeaderBasicIcon } from './components/headers';
import { App } from './App';
import { Outlet } from "react-router";
import { PlaceholderImage } from './components/placeholders';
import { LinkBasic } from './components/link';
import { FooterBasicMainContent, FooterBasicMainContentSection, FooterBasicMainContentSectionItem, FooterBasicMainContentSectionTitle, FooterBasic, FooterBasicMain, FooterBasicCopyright, FooterBasicMainIcon } from './components/footers';

function FTSection() {
	return (
		<FooterBasicMainContentSection>
			<FooterBasicMainContentSectionTitle>Title1</FooterBasicMainContentSectionTitle>
			<FooterBasicMainContentSectionItem>item1</FooterBasicMainContentSectionItem>
			<FooterBasicMainContentSectionItem>item2</FooterBasicMainContentSectionItem>
			<FooterBasicMainContentSectionItem>item3</FooterBasicMainContentSectionItem>
			<FooterBasicMainContentSectionItem>item4</FooterBasicMainContentSectionItem>
			<FooterBasicMainContentSectionItem>item5</FooterBasicMainContentSectionItem>
		</FooterBasicMainContentSection>
	)
}

function Wrapper() {
	return (
		<>
			<HeaderBasic>
				<HeaderBasicIcon>
					<PlaceholderImage x={32} y={32} />
				</HeaderBasicIcon>
				<HeaderBasicContent>
					{Array.from({length: 5}).map(_ =>
						<LinkBasic href="/">Lorem </LinkBasic>
					)}
				</HeaderBasicContent>
			</HeaderBasic>
			<Outlet />
			<FooterBasic>
				<FooterBasicMain>
					<FooterBasicMainIcon>
						<PlaceholderImage x={200} y={200} />
					</FooterBasicMainIcon>
					<FooterBasicMainContent>
						<FTSection />
						<FTSection />
						<FTSection />
						<FTSection />
						<FTSection />
					</FooterBasicMainContent>
				</FooterBasicMain>
				<FooterBasicCopyright>
					© 2026 Luan Mack. All rights reserved.
				</FooterBasicCopyright>
			</FooterBasic>
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