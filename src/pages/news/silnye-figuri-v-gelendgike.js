import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Strong, Text, Span, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"news/silnye-figuri-v-gelendgike"} />
		<Helmet>
			<title>
				«Сильные фигуры» в Геленджике
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
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/7.webp?v=2021-06-01T22:35:07.809Z"
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
							<Strong font="700 22px/33.8px Montserrat, sans-serif">
								«Сильные фигуры» в Геленджике, 4 мая
							</Strong>
						</Text>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							4 мая в Геленджике на территории «Геленджик гольф резорт» прошел четвертый розыгрыш международного фестиваля «
							<Link
								href="https://xn--c1adibnmybyh9ege.xn--p1ai/"
								color="#001A51"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Сильные фигуры
							</Link>
							». В командном зачете турнира по гольфу победила команда под руководством Александра Жукова с результатом 119 ударов. Второе место заняла команда с капитаном Дмитрием Сватковским, а третье — с капитаном Михаилом Купфером.
							<br />
							<br />
							<Span
								font="14px/27.3px Montserrat, sans-serif"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Источник:{" "}
								<Link href="https://sport24.ru/news/golf/2021-05-05-rezultaty-mezhdunarodnogo-festivalya-silnyye-figury-v-gelendzhike" target="_blank" color="#001A51">
									https://sport24.ru/news/golf/2021-05-05-rezultaty-mezhdunarodnogo-festivalya-silnyye-figury-v-gelendzhike
								</Link>
							</Span>
						</Text>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#000000" padding="5px 0 5px 0" align-items="center">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
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