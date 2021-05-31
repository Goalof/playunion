import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Strong, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"news/ert-sochi"} />
		<Helmet>
			<title>
				Quarkly export
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
		<Section background="#F8F8F8" padding="0px 0 0px 0" position="fixed" z-index="9">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="25%" display="flex" lg-width="50%" sm-width="70%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Link href="/home" display="flex" align-items="center" justify-content="center">
						<Image
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%A1%D0%BE%D1%8E%D0%B7_%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%98%D0%B3%D1%80_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.svg?v=2021-04-28T05:03:18.949Z"
							width="100%"
							height="auto"
							max-height="115px"
							object-position="0% 0%"
						/>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="75%" display="flex" lg-width="50%" sm-width="30%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Box display="none" align-items="center" justify-content="center">
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
					</Box>
					{"   "}
					<Components.MobileSide2
						flex="1 0 auto"
						lg-position="relative"
						lg-z-index="5"
						lg-display="flex"
						lg-justify-content="flex-end"
						lg-align-items="center"
						display="flex"
						align-items="center"
						justify-content="flex-end"
					>
						<Override
							slot="Content"
							display="flex"
							align-items="center"
							lg-position="fixed"
							lg-top={0}
							lg-left={0}
							lg-z-index="1"
							lg-width="100%"
							lg-height="100%"
							lg-background="white"
							lg-flex-direction="column"
						/>
						<Override
							slot="Button"
							display="none"
							lg-display="block"
							lg-width="44px"
							lg-height="28px"
							lg-position="relative"
							lg-z-index="6"
							md-margin="0px 0px 0px 0px"
						/>
						<Override slot="Button Line" lg-background="black" lg-min-height="4px" lg-position="absolute" />
						<Override slot="Button Line1" lg-width="44px" lg-top="0px" lg-right="0px" />
						<Override slot="Button Line2" lg-top="12px" lg-right="0px" />
						<Override slot="Button Line3" lg-top="24px" lg-right="0px" />
						<Override slot="Button Line1 :closed" lg-width="44px" />
						<Override slot="Button Line2 :closed" lg-width="32px" />
						<Override slot="Button Line3 :closed" lg-width="20px" />
						<Override slot="Button Line2 :open" lg-opacity="0" lg-width="32px" />
						<Override slot="Button Line1 :open" lg-width="36px" lg-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Button Line3 :open" lg-width="36px" lg-transform="translateY(-12px) rotate(135deg)" md-margin="0px 0px 0px 0px" />
						<Override slot="Content :closed" lg-opacity="0" lg-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-transform="translateY(-100%)" />
						<Override slot="Content :open" lg-transform="translateY(0%)" lg-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-opacity="1" />
						<Override slot="Button :open" lg-position="fixed" md-margin="14px 0px 0px 0px" />
						<Box
							display="flex"
							align-items="center"
							justify-content="center"
							lg-flex-direction="column"
							lg-margin="80px 0px 0px 0px"
							lg-width="100%"
						>
							<Link
								href="/home#about"
								text-decoration-line="initial"
								color="#000000"
								font="600 20px --fontFamily-googleMontserrat"
								padding="10px 13px 10px 12px"
								transition="opacity 0.4s ease 0s"
								lg-margin="0px 0px 8px 0px"
								lg-font="600 24px --fontFamily-googleMontserrat"
								sm-font="600 20px --fontFamily-googleMontserrat"
								sm-text-align="center"
								hover-color="#001A51"
							>
								О нас
							</Link>
							<Link
								href="/home#categories"
								text-decoration-line="initial"
								color="#000000"
								font="600 20px --fontFamily-googleMontserrat"
								padding="10px 13px 10px 12px"
								transition="opacity 0.4s ease 0s"
								lg-margin="0px 0px 8px 0px"
								lg-font="600 24px --fontFamily-googleMontserrat"
								sm-font="600 20px --fontFamily-googleMontserrat"
								sm-text-align="center"
								hover-color="#001A51"
							>
								Категории игр
							</Link>
							<Link
								href="/home#team"
								text-decoration-line="initial"
								color="#000000"
								font="600 20px --fontFamily-googleMontserrat"
								padding="10px 13px 10px 12px"
								transition="opacity 0.4s ease 0s"
								lg-margin="0px 0px 8px 0px"
								lg-font="600 24px --fontFamily-googleMontserrat"
								sm-font="600 20px --fontFamily-googleMontserrat"
								sm-text-align="center"
								hover-color="#001A51"
							>
								Состав Союза
							</Link>
							<Link
								href="/home#event"
								text-decoration-line="initial"
								color="#000000"
								font="600 20px --fontFamily-googleMontserrat"
								padding="10px 13px 10px 12px"
								transition="opacity 0.4s ease 0s"
								lg-margin="0px 0px 8px 0px"
								lg-font="600 24px --fontFamily-googleMontserrat"
								sm-font="600 20px --fontFamily-googleMontserrat"
								sm-text-align="center"
								hover-color="#001A51"
							>
								События
							</Link>
							<Link
								href="/home#partners"
								text-decoration-line="initial"
								color="#000000"
								font="600 20px --fontFamily-googleMontserrat"
								padding="10px 13px 10px 12px"
								transition="opacity 0.4s ease 0s"
								lg-margin="0px 0px 8px 0px"
								lg-font="600 24px --fontFamily-googleMontserrat"
								sm-font="600 20px --fontFamily-googleMontserrat"
								sm-text-align="center"
								hover-color="#001A51"
							>
								Партнеры
							</Link>
						</Box>
					</Components.MobileSide2>
					{" "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="115px 0 45px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
							height="auto"
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
							<Strong>
								ЕРТ Сочи, 19-28 марта 2021
							</Strong>
						</Text>
						<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
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
						<Text font="600 20px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px" sm-text-align="center">
							Результаты финального стола События EPT Sochi 2021:
						</Text>
						<List margin="0px 0px 0px 0px" list-style-type="decimal" padding="0px 0px 0px 30px" font="500 16px/130% --fontFamily-googleMontserrat">
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
						<Text font="600 20px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px" sm-text-align="center">
							Чемпионы Главного События EPT Sochi по годам:
						</Text>
						<Text font="500 16px/130% --fontFamily-googleMontserrat" margin="16px 0px 8px 0px">
							2018: 861 вход, Арсений Кармацкий (Россия)
						</Text>
						<Text font="500 16px/130% --fontFamily-googleMontserrat" margin="8px 0px 8px 0px">
							2019: 758 вход, Ури Гилбоа (Израиль)
						</Text>
						<Text font="500 16px/130% --fontFamily-googleMontserrat" margin="8px 0px 8px 0px">
							2020: 637 вход, Руслан Богданов (Россия)
						</Text>
						<Text font="500 16px/130% --fontFamily-googleMontserrat" margin="8px 0px 8px 0px">
							2021: 852 входа, Артур Мартиросян (Россия)
						</Text>
						<Text font="500 16px/150% --fontFamily-googleMontserrat" margin="18px 0px 8px 0px">
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
						<Text font="600 20px/150% --fontFamily-googleMontserrat" margin="20px 0px 16px 0px" sm-text-align="center">
							Результаты финального стола турнира хайроллеров EPT Sochi 2021:
						</Text>
						<List margin="0px 0px 0px 0px" list-style-type="decimal" padding="0px 0px 0px 30px" font="500 16px/130% --fontFamily-googleMontserrat">
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
						<Text font="500 18px/130% --fontFamily-googleMontserrat">
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
						<Text font="600 20px/130% --fontFamily-googleMontserrat" margin="20px 0px 16px 0px" sm-text-align="center">
							Итоги финального стола EPT Cup :
						</Text>
						<List margin="0px 0px 0px 0px" list-style-type="decimal" padding="0px 0px 0px 30px" font="500 16px/130% --fontFamily-googleMontserrat">
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
						<Text font="500 18px/150% --fontFamily-googleMontserrat" margin="19px 0px 16px 0px">
							Всего 10-дневный фестиваль ЕРТ Sochi 2021 включал в себя 25 различных турниров.
						</Text>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="0px 0 0px 0">
			<Override
				slot="SectionContent"
				align-items="center"
				justify-content="center"
				width="100%"
				max-width="none"
			/>
			<Stack width="100%" margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="100%" display="flex">
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#000000" padding="5px 0 5px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="50%" display="flex">
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
					<Text font="400 14px/130% --fontFamily-googleMontserrat" margin="16px 0px 0px 0px">
						© 2021 Союз участников интеллектуальных игр
					</Text>
					{"          "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						color="#ffffff"
					/>
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					>
						<Override slot="link" color="#ffffff" background="rgba(237, 242, 246, 0)" />
					</SocialMedia>
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
				{"* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});