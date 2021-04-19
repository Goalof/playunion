import React from "react";
import theme from "theme";
import { Theme, Link, Image, Strong, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { GiPokerHand, GiWhiteTower, GiHorseshoe, GiCrossedAxes } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"home"} />
		<Helmet>
			<title>
				Союз участников интеллектуальных игр
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/6.png?v=2021-04-16T21:43:23.926Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/6.png?v=2021-04-16T21:43:23.926Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/6.png?v=2021-04-16T21:43:23.926Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/6.png?v=2021-04-16T21:43:23.926Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/6.png?v=2021-04-16T21:43:23.926Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/6.png?v=2021-04-16T21:43:23.926Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
		</Helmet>
		<Section background="#F8F8F8" padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="30%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/5.png?v=2021-04-18T22:22:31.873Z"
						width="100%"
						height="auto"
						max-height="115px"
						object-position="0% 0%"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Link
						href="#about"
						text-decoration-line="initial"
						color="#000000"
						font="600 21px --fontFamily-googleMontserrat"
						padding="10px 13px 10px 12px"
						hover-opacity="0.7"
						transition="opacity 0.4s ease 0s"
					>
						О нас
					</Link>
					<Link
						href="#categories"
						text-decoration-line="initial"
						color="#000000"
						font="600 21px --fontFamily-googleMontserrat"
						padding="10px 13px 10px 12px"
						hover-opacity="0.7"
						transition="opacity 0.4s ease 0s"
					>
						Категории игр
					</Link>
					<Link
						href="#team"
						text-decoration-line="initial"
						color="#000000"
						font="600 21px --fontFamily-googleMontserrat"
						padding="10px 13px 10px 12px"
						hover-opacity="0.7"
						transition="opacity 0.4s ease 0s"
					>
						Руководство и эксперты
					</Link>
					<Link
						href="#event"
						text-decoration-line="initial"
						color="#000000"
						font="600 21px --fontFamily-googleMontserrat"
						padding="10px 13px 10px 12px"
						hover-opacity="0.7"
						transition="opacity 0.4s ease 0s"
					>
						Мероприятия
					</Link>
					<Link
						href="#partners"
						text-decoration-line="initial"
						color="#000000"
						font="600 21px --fontFamily-googleMontserrat"
						padding="10px 13px 10px 12px"
						hover-opacity="0.7"
						transition="opacity 0.4s ease 0s"
					>
						Партнеры
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Components.Slider
						showHead={false}
						showText={false}
						showLink={false}
						showArrows={false}
						slidesProp="4"
						aspectRatio="16:9"
						width="100%"
						max-height="670px"
					>
						<Override slot="Slide Image" src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon1.png?v=2021-04-18T22:45:37.405Z" />
						<Override slot="Slide Image 1" src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon2.png?v=2021-04-18T22:46:40.293Z" />
						<Override
							slot="Point Icon"
							border-width="1px"
							border-style="solid"
							border-color="#000000"
							border-radius="50%"
							padding="1px 1px 1px 1px"
							margin="0px 5px 0px 5px"
							width="12px"
							height="12px"
						/>
						<Override slot="Point Icon :active" color="#000000" />
					</Components.Slider>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text font="32px/130% --fontFamily-googleMontserrat" margin="20px 0px 60px 0px">
						<Strong>
							Cоюз Участников Интеллектуальных Игр
						</Strong>
						{" "}занимается равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения существенных финансовых и административных условий. Таким образом укрепление и развитие структуры.
						<br />
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="categories" background="#F8F8F8" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text font="700 35px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
						Категории игр
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="5px 0 5px 0" align-items="center" min-height="100vh">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" padding="0px 0px 0px 0px" />
					<Link
						href="https://greenpeace.ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="600 38px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
					>
						Турнирный покер
						<Icon
							category="gi"
							icon={GiPokerHand}
							color="inherit"
							size="120px"
							padding="15px 15px 15px 15px"
						/>
						{"  "}
					</Link>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-start" padding="0px 0px 0px 0px" />
					<Link
						href="https://greenpeace.ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="600 38px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
					>
						<Icon
							category="gi"
							icon={GiWhiteTower}
							color="inherit"
							size="110px"
							padding="15px 15px 15px 15px"
						/>
						{"  \n\t\t\t\t"}Сильные фигуры
					</Link>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" padding="0px 0px 0px 0px" />
					<Link
						href="https://greenpeace.ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="600 38px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
					>
						Букмекерские игры
						<Icon
							category="gi"
							icon={GiHorseshoe}
							color="inherit"
							size="110px"
							padding="15px 15px 15px 15px"
						/>
						{"  "}
					</Link>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-start" padding="0px 0px 0px 0px" />
					<Link
						href="https://greenpeace.ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="600 38px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
					>
						<Icon
							category="gi"
							icon={GiCrossedAxes}
							color="inherit"
							size="110px"
							padding="15px 15px 15px 15px"
						/>
						{"  \n\t\t\t\t"}Военные игры
					</Link>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="team" background="#F8F8F8" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text font="700 35px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
						Руководство и эксперты
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="5px 0 5px 0" align-items="center" min-height="100vh">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 20px"
					>
						<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-marina.webp?v=2021-04-19T00:05:59.273Z" width="100%" max-width="450px" border-radius="50px" />
						<Text font="500 31px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px">
							Марина Блудян
						</Text>
						<Text font="400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Председателя Союза
						</Text>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 20px"
					>
						<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-artur.webp?v=2021-04-19T00:05:54.037Z" width="100%" max-width="450px" border-radius="50px" />
						<Text font="500 31px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px">
							Артур Восканян
							<br />
						</Text>
						<Text font="400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Покерный эксперт
						</Text>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="event" background="#F8F8F8" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text font="700 35px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
						Мероприятия
						<br />
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="5px 0 5px 0" align-items="center" min-height="100vh">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 20px"
					>
						<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-marina.webp?v=2021-04-19T00:05:59.273Z" width="100%" max-width="450px" border-radius="50px" />
						<Text font="500 31px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px">
							Марина Блудян
						</Text>
						<Text font="400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Председателя Союза
						</Text>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 20px"
					>
						<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-artur.webp?v=2021-04-19T00:05:54.037Z" width="100%" max-width="450px" border-radius="50px" />
						<Text font="500 31px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px">
							Артур Восканян
							<br />
						</Text>
						<Text font="400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Покерный эксперт
						</Text>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="partners" background="#F8F8F8" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text font="700 35px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
						Партнеры
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="150px 0 150px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 20px"
					>
						<Image
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/pokertour.png?v=2021-04-19T00:14:33.230Z"
							width="100%"
							max-width="450px"
							border-radius="50px"
							filter="grayscale(100%)"
							transition="all .3s"
							hover-filter="grayscale(0%)"
						/>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#000000" padding="5px 0 5px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						color="#ffffff"
					/>
					<Text font="700 44px/130% --fontFamily-googleMontserrat" color="#ffffff" margin="0px 0px 0px 0px">
						18+
					</Text>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6079f48266fcdfa80157a2ab"}>
				{"@-webkit-keyframes rotate-center {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate-center {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n#hellopreloader_preload {\n  -webkit-animation: rotate-center 0.6s ease-in-out infinite both;\n          animation: rotate-center 0.6s ease-in-out infinite both;\n}\n#hellopreloader>p{display:none;background: #fff;}\n#hellopreloader_fon{display: block;position: fixed;z-index: 9;top: 0;left: 0;width: 100%;height: 100%;min-width: 1000px;background-color: #fff;background: #fff; background-size:159px;}  \n#hellopreloader_preload{display: block;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;background: transparent url(https://playunion.ukit.me/uploads/s/y/s/7/ys7zdj176wjy/img/full_piEUoiO1.png) center center no-repeat;background-size:159px;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"607cb0304ce0d2a45be3aa77"}>
				{"var hellopreloader = document.getElementById(\"hellopreloader_fon\", \"hellopreloader_preload\");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = \"none\";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},2000);};"}
			</script>
		</RawHtml>
	</Theme>;
});