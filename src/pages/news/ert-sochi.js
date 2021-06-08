import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Strong, Text, List, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"news/ert-sochi"} />
		<Helmet>
			<title>
				ЕРТ Сочи, 19-28 марта 2021
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
		<Components.HeaderNew />
		<Section background="#F8F8F8" padding="115px 0 45px 0" align-items="center">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px" align-items="flex-start" justify-content="center">
				{"        "}
				<StackItem width="100%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/ept-sochi.jpg?v=2021-05-05T13:09:12.729Z"
							width="100%"
							border-radius="6px"
							sm-width="100%"
							height="500px"
							object-fit="cover"
							object-position="10% 30%"
						/>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="100%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Text font="500 26px/130% --fontFamily-googleMontserrat" margin="0px 0px 23px 0px" sm-text-align="center" text-align="center">
							<Strong font="700 22px/33.8px Montserrat, sans-serif">
								ЕРТ Сочи, 19-28 марта 2021
							</Strong>
						</Text>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Состоявшийся в марте 2021 года российский этап European Poker Tour (EPT) обрел своего нового чемпиона. Артур Мартиросян стал лучшим среди 852 участников Главного События, проходившего в Казино Сочи.{" "}
						</Text>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Text font="600 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px" sm-text-align="center">
							Результаты финального стола События EPT Sochi 2021:
						</Text>
						<List margin="0px 0px 0px 0px" list-style-type="decimal" padding="0px 0px 0px 30px" font="500 14px/130% --fontFamily-googleMontserrat">
							<Text>
								Артур Мартиросян (Россия)
							</Text>
							<Text>
								Владислав Наумов (Россия)
							</Text>
							<Text>
								Мухтар Тайзи (Турция)
							</Text>
							<Text>
								Фанис Хафизов (Россия)
							</Text>
							<Text>
								Юрий Бречанов (Россия)
							</Text>
							<Text>
								Антон Смирнов (Россия)
							</Text>
							<Text>
								Владимир Божинович (Сербия) - 3 283 000 рублей
							</Text>
							<Text>
								Роман Гаджиев (Россия) - 2 307 900 рублей
							</Text>
						</List>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Text font="600 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px" sm-text-align="center">
							Чемпионы Главного События EPT Sochi по годам:
						</Text>
						<Text font="500 14px/130% --fontFamily-googleMontserrat" margin="16px 0px 8px 0px">
							2018: 861 вход, Арсений Кармацкий (Россия)
						</Text>
						<Text font="500 14px/130% --fontFamily-googleMontserrat" margin="8px 0px 8px 0px">
							2019: 758 вход, Ури Гилбоа (Израиль)
						</Text>
						<Text font="500 14px/130% --fontFamily-googleMontserrat" margin="8px 0px 8px 0px">
							2020: 637 вход, Руслан Богданов (Россия)
						</Text>
						<Text font="500 14px/130% --fontFamily-googleMontserrat" margin="8px 0px 8px 0px">
							2021: 852 входа, Артур Мартиросян (Россия)
						</Text>
						<Text font="500 14px/150% --fontFamily-googleMontserrat" margin="18px 0px 8px 0px">
							Виктор Кудинов стал лучшим среди 105 участников турнира{" "}
							<Strong>
								хайроллеров ЕРТ Sochi.{" "}
							</Strong>
							<br />
							<br />
							Турнир хайроллеров 2021 года стал самым многочисленным среди себе подобных на EPT Sochi, собрав 105 входов (из них 12 повторных).
						</Text>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Text font="600 18px/130% --fontFamily-googleMontserrat" margin="20px 0px 16px 0px" sm-text-align="center">
							Результаты финального стола турнира хайроллеров EPT Sochi 2021:
						</Text>
						<List margin="0px 0px 0px 0px" list-style-type="decimal" padding="0px 0px 0px 30px" font="500 14px/130% --fontFamily-googleMontserrat">
							<Text>
								Виктор Кудинов (Россия)
							</Text>
							<Text>
								Георгий Схулухия (Россия)
							</Text>
							<Text>
								Ваге Мартиросян (Россия)
							</Text>
							<Text>
								Евгений Старинков (Россия)
							</Text>
							<Text>
								Анатолий Столковский (Россия)
							</Text>
							<Text>
								Андрей Чернокоз (Россия)
							</Text>
							<Text>
								Егор Турубанов (Россия)
							</Text>
							<Text>
								Александр Томович (Сербия)
							</Text>
						</List>
						<Text font="500 16px/130% --fontFamily-googleMontserrat">
							<Strong>
								EPT Cup
							</Strong>
							{" "}собрал 875 входов.
						</Text>
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Text font="600 18px/130% --fontFamily-googleMontserrat" margin="20px 0px 16px 0px" sm-text-align="center">
							Итоги финального стола EPT Cup :
						</Text>
						<List margin="0px 0px 0px 0px" list-style-type="decimal" padding="0px 0px 0px 30px" font="500 14px/130% --fontFamily-googleMontserrat">
							<Text>
								Дмитрий Коптев (Россия)
							</Text>
							<Text>
								Александр Агабеков (Россия)
							</Text>
							<Text>
								Булат Феоктистов (Россия)
							</Text>
							<Text>
								Владимир Волов (Россия)
							</Text>
							<Text>
								Георгий Филиппович (Россия)
							</Text>
							<Text>
								Рудольф Домин (Россия)
							</Text>
							<Text>
								Вадим Габриэль (Россия)
							</Text>
							<Text>
								Константин Генералов (Россия)
							</Text>
						</List>
						<Text font="500 16px/150% --fontFamily-googleMontserrat" margin="19px 0px 16px 0px">
							Всего 10-дневный фестиваль ЕРТ Sochi 2021 включал в себя 25 различных турниров.
						</Text>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer />
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
				{"* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});