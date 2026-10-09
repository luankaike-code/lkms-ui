import { useRef } from 'react';
import { HeroRoadmapBullet, HeroRoadmapBulletItem, HeroRoadmapBulletItemArticle, HeroRoadmapBulletItemBullet, HeroWithAside, HeroWithAsideMainContent, HeroWithAsideSecondContent, HeroWithProducts, HeroWithProductsContent, HeroWithProductsHeader } from './components/heros';
import { LineBasic } from './components/lines';
import { MainBase } from './components/mains';
import { PlaceholderImage } from './components/placeholders';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';

const bulletsArray = [0, 1, 2, 3, 4]

export function App() {
  const firstItemBullet = useRef<HTMLDivElement>(null)
  const lastItemBullet = useRef<HTMLDivElement>(null)

  return (
		<MainBase className="gap-8">
			<HeroWithAside>
				<HeroWithAsideMainContent>
					<h1>bla bla bal bal</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reiciendis. Voluptatibus iste dolor incidunt eaque id, error qui labore, iusto alias dicta magni maxime, libero ipsam. Quasi repellendus error sint.</p>
				</HeroWithAsideMainContent>
				<HeroWithAsideSecondContent>
					<PlaceholderImage x={600} y={800} className="w-lg hidden md:flex" />
					<PlaceholderImage x={800} y={600} className="w-lg md:hidden"/>
				</HeroWithAsideSecondContent>
			</HeroWithAside>

			<HeroWithProducts>
				<HeroWithProductsHeader>
					<h1>BLA BAL BLA BAL BAL BA L</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus ad laudantium? In fugit ratione perspiciatis deleniti mollitia laudantium, ullam architecto? Numquam consequatur, tempore iure amet est minus vero adipisci.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, obcaecati? Odit rerum ea cum fugit autem delectus. Numquam sequi fuga eligendi dolore, ut, modi ea adipisci iusto rerum corporis tenetur?
					</p>
				</HeroWithProductsHeader>
				<LineBasic border="bottom" className="w-3/4"/>
				<HeroWithProductsContent>
					{Array.from({length: 9}).map(x => (
						<Card>
							<CardHeader>
								<CardTitle>{ x as number}</CardTitle>
							</CardHeader>
							<CardContent>
								<PlaceholderImage x={300} y={300} className="w-full" />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat libero ipsa! Sapiente nam deserunt error quaerat totam, qui nulla laboriosam accusantium atque quidem similique architecto rem. Dolorum, corporis perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, omnis nam, quo nostrum expedita blanditiis minima, ullam magni molestiae officia fugit animi corrupti. Sequi, accusamus provident. Officiis, sed tempore.
								</p>
							</CardContent>
						</Card>
					))}
				</HeroWithProductsContent>
			</HeroWithProducts>
			
			<LineBasic border="right" className={"border-emphasis"} to={firstItemBullet} from={lastItemBullet} />

			<HeroRoadmapBullet>
				{bulletsArray.map((x, i) => (
					<HeroRoadmapBulletItem>
						<div className="flex items-center self-stretch flex-col">
							<HeroRoadmapBulletItemBullet ref={
								i === 0? firstItemBullet :
									i === bulletsArray.length-1? lastItemBullet :
										undefined
							}>
								<h1>{2025 - x}</h1>
							</HeroRoadmapBulletItemBullet>
						</div>
						<HeroRoadmapBulletItemArticle>
							<Card>
								<CardHeader>
									<CardTitle>Tipo isso ai mano</CardTitle>
									<CardDescription className="text-emphasis">
										2025-2012
									</CardDescription>
								</CardHeader>
								<CardContent>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni veniam repellendus necessitatibus, sit ea nisi velit omnis neque quisquam! Eligendi autem ducimus sequi eos! Ex saepe non sit corrupti cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque provident fugiat magnam non illo! Minima officia labore numquam maiores autem quod deleniti voluptates suscipit explicabo ex corrupti animi, accusantium dignissimos.
								</p>
								</CardContent>
							</Card>
						</HeroRoadmapBulletItemArticle>
					</HeroRoadmapBulletItem>
				))}
			</HeroRoadmapBullet>
		</MainBase>
  )
}

export default App
