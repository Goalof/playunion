import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Strong, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"artur-voskanyan"} />
		<Helmet>
			<title>
				Артур Восканян
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
		<Components.Header />
		<Section background="#F8F8F8" padding="145px 0 45px 0" align-items="center">
			<Override slot="SectionContent" max-width="1280px" width="100%" />
			<Stack margin="0px 0px 0px 0px" align-items="flex-start" justify-content="center">
				{"        "}
				<StackItem width="30%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
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
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-artur.webp?v=2021-04-19T00:05:54.037Z" width="100%" max-width="450px" border-radius="6px" />
					</Box>
					{"          "}
				</StackItem>
				<StackItem width="70%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
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
						<Text font="500 26px/130% --fontFamily-googleMontserrat" margin="0px 0px 14px 0px" sm-text-align="center" text-align="center">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="700 22px/33.8px Montserrat, sans-serif"
							>
								Артур Восканян
							</Strong>
						</Text>
						<Text font="italic 400 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 30px 0px">
							Турнирный покер{"\n\n"}
						</Text>
						<Text font="normal 400 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
							Артур Восканян — основатель компании Poker Club Management, управляющий крупнейшим в России покерным клубом в Казино Сочи, игрок и самый популярный покерный блогер в российском Instagram (
							<Link
								href="https://www.instagram.com/artpoker/"
								target="_blank"
								text-decoration-line="initial"
								color="#001A51"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								@artpoker
							</Link>
							).
							<br />
							<br />
							Артур прошел путь от покерного дилера до вице-президента Федерации спортивного покера России.
							<br />
							<br />
							В 2006 году создал компанию Poker Club Management, в первый год штат компании достиг 200 человек.
							<br />
							<br />
							В настоящий момент Poker Club Management является ключевой компанией в индустрии покера Восточной Европы, организует крупнейшие покерные серии на территории СНГ.
							<br />
							<br />
							{"\n"}С 2006 года компания Poker Club Management провела более 150 международных покерных серий, число уникальных игроков превышает 30000.
							<br />
							<br />
							Помимо России, компания проводит чемпионаты в странах СНГ, Европы иКарибского бассейна, этапы World Poker Tour, European Poker Tour, World Series of Poker Circuit и многих других серий, в том числе и созданных самой компанией.
							<br />
							<br />
							C 2012 года Артур Восканян представляет СНГ в международной Ассоциации турнирных директоров (Tournament Directors Association, США), которая занимается стандартизацией правил покера и покерных процедур.{"\n\n"}
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
			<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
				<br />
				{"\n\n"}
			</Text>
		</Section>
		<Section background="#000000" padding="5px 0 5px 0" align-items="center">
			<Override slot="SectionContent" max-width="1280px" width="100%" />
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