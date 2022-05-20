import React from "react";
import theme from "theme";
import { Theme, Box, Section, Strong, Text, Icon, Link, Image, Span, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import * as Components from "components";
import { GiPokerHand, GiHorseshoe, GiCrossedAxes } from "react-icons/gi";
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
		<Components.HeaderNew />
		<Section background="#F8F8F8" padding="100px 0 0px 0">
			<Override slot="SectionContent" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Components.QuarklycommunityKitCarousel
						height="500px"
						slidesProp="2"
						showHead={false}
						showLink={false}
						showText={false}
						autoPlayBehavior="range"
						autoPlay={false}
						aspectRatio="auto"
						lg-height="400px"
						sm-height="200px"
						max-width="1248px"
						width="100%"
						lg-max-width="800px"
						md-max-width="700px"
						sm-max-width="360px"
					>
						<Override
							slot="Slide Image"
							md-height="400px"
							sm-height="200px"
							height="500px"
							min-height="200px"
							width="100%"
						/>
						<Override slot="Slide" height="500px" min-height="500px" sm-height="200px" />
						<Override slot="Slides" height="500px" sm-height="200px" />
						<Override slot="Slide 1" height="500px" />
						<Override
							slot="Slide Image 2"
							height="500px"
							md-height="400px"
							sm-height="200px"
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/1400%D1%85410-01.png?v=2021-04-28T18:28:13.562Z"
						/>
						<Override
							slot="Slide Image 1"
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/banner1.jpg?v=2021-05-31T15:49:13.737Z"
							object-fit="cover"
							height="500px"
							md-height="400px"
							sm-height="200px"
						/>
					</Components.QuarklycommunityKitCarousel>
					{"            "}
				</StackItem>
			</Stack>
			<Box id="about" height="1px" min-height="1px" />
		</Section>
		<Section sm-padding="5px 0 25px 0" background="#F8F8F8" padding="45px 0 65px 0">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem display="flex" width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					<Text
						lg-margin="0px 0px 0px 0px"
						sm-text-align="center"
						md-margin="0px 0px 0px 0px"
						font="18px/140% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="18px/130% --fontFamily-googleMontserrat"
						sm-margin="0px 0px 0px 0px"
						lg-font="27px/130% --fontFamily-googleMontserrat"
						md-font="24px/130% --fontFamily-googleMontserrat"
					>
						<Strong>
							Cоюз Участников Интеллектуальных Игр
						</Strong>
						{" "}направлен на объединение
    любителей массовых интеллектуальных игр в целях развития данных игр,
    формирования экспертного мнения, в том числе, в части эффективного
    государственного регулирования этого явления.
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="categories" padding="5px 0 10px 0" background="#F8F8F8">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Text
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#222"
						font="700 30px/130% --fontFamily-googleMontserrat"
					>
						Категории игр
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="95px 0 125px 0" align-items="center" sm-padding="65px 0 65px 0">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="33.33%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						padding="0px 0px 0px 0px"
						md-justify-content="center"
					/>
					<Link
						flex-direction="column"
						md-margin="0px 0px 20px 0px"
						display="flex"
						target="_blank"
						sm-font="600 20px/130% --fontFamily-googleMontserrat"
						text-decoration-line="initial"
						hover-color="#8F3E2C"
						font="500 20px/130% --fontFamily-googleMontserrat"
						color="#000000"
						justify-content="center"
						text-align="center"
						href="/turnirnyj-poker"
						align-items="center"
						lg-font="600 28px/130% --fontFamily-googleMontserrat"
					>
						<Icon
							category="gi"
							icon={GiPokerHand}
							color="inherit"
							size="120px"
							padding="15px 15px 15px 15px"
						/>
						Турнирный покер{"\n\t\t\n\t\t\t\t  "}
					</Link>
					{"          "}
				</StackItem>
				<StackItem width="33.33%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						display="flex"
						flex-direction="column"
					/>
					<Link
						display="flex"
						text-decoration-line="initial"
						font="500 20px/130% --fontFamily-googleMontserrat"
						lg-font="600 28px/130% --fontFamily-googleMontserrat"
						sm-font="600 20px/130% --fontFamily-googleMontserrat"
						text-align="center"
						align-items="center"
						hover-color="#8F3E2C"
						flex-direction="column"
						justify-content="center"
						color="#000000"
						href="/"
						target="_blank"
						order="1"
						md-margin="0px 0px 20px 0px"
					>
						<Icon
							category="gi"
							icon={GiHorseshoe}
							color="inherit"
							size="110px"
							padding="15px 15px 15px 15px"
							order="0"
						/>
						Букмекерские игры{"\n\t\t\n\t\t\t\t  "}
					</Link>
					{"          "}
				</StackItem>
				<StackItem width="33.33%" display="flex" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" justify-content="flex-end" padding="0px 0px 0px 0px" />
					<Link
						lg-font="600 28px/130% --fontFamily-googleMontserrat"
						font="500 20px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						md-margin="0px 0px 20px 0px"
						href="/"
						display="flex"
						sm-font="600 20px/130% --fontFamily-googleMontserrat"
						flex-direction="column"
						justify-content="center"
						text-align="center"
						align-items="center"
						target="_blank"
						text-decoration-line="initial"
					>
						<Icon
							padding="15px 15px 15px 15px"
							category="gi"
							icon={GiCrossedAxes}
							color="inherit"
							size="110px"
						/>
						{"  \n\t\t\t\t"}Военные игры
					</Link>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="5px 0 10px 0" background="#F8F8F8" id="team">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Text
						color="#222"
						font="700 30px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
					>
						Состав Cоюза
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			align-items="center"
			sm-padding="25px 0 25px 0"
			background="#F8F8F8"
			padding="75px 0 75px 0"
			box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
		>
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px" align-items="center" justify-content="center">
				{"        "}
				<StackItem width="25%" display="flex" md-width="100%" margin="0px 20px 0px 20px">
					<Override
						slot="StackItemContent"
						md-align-items="center"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
					/>
					<Link
						text-decoration-line="initial"
						color="#000000"
						hover-transform="translateY(-10px);"
						transition="-webkit-transition: all .3s;  transition: all .3s;"
						href="/marina-bludyan"
					>
						<Box
							align-items="center"
							justify-content="center"
							flex-direction="column"
							padding="0px 0px 0px 0px"
							display="flex"
						>
							<Image
								border-radius="50px"
								sm-width="80%"
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-marina.webp?v=2021-04-19T00:05:59.273Z"
								width="100%"
								max-width="450px"
							/>
							<Text font="500 20px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px" sm-text-align="center" text-align="center">
								Марина Блудян
							</Text>
							<Text font="400 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
								Президент Союза
							</Text>
						</Box>
					</Link>
					{"          "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="100%" margin="0px 20px 0px 20px">
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
					/>
					<Link
						text-decoration-line="initial"
						color="#000000"
						hover-transform="translateY(-10px);"
						transition="-webkit-transition: all .3s;  transition: all .3s;"
						href="/artur-voskanyan"
					>
						<Box
							justify-content="center"
							flex-direction="column"
							padding="0px 0px 0px 0px"
							display="flex"
							align-items="center"
						>
							<Image
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-artur.webp?v=2021-04-19T00:05:54.037Z"
								width="100%"
								max-width="450px"
								border-radius="50px"
								sm-width="80%"
							/>
							<Text text-align="center" font="500 20px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px" sm-text-align="center">
								Артур Восканян
							</Text>
							<Text font="400 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
								Турнирный покер
							</Text>
						</Box>
					</Link>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="event" background="#F8F8F8" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Text
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#222"
						font="700 30px/130% --fontFamily-googleMontserrat"
					>
						События
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="30px 0 40px 0" align-items="center">
			<Override slot="SectionContent" width="95%" max-width="1280px" />
			<Stack margin="0px 0px 0px 0px" flex-direction="row">
				<StackItem width="33.33%" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px px 10px 0px"
						border-radius="6px"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
						background="#ffffff"
						overflow-x="hidden"
						overflow-y="hidden"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						width="100%"
						background="#E5E5E5"
						border-radius="6px 6px 0px 0px"
						max-height="165px"
					>
						<Image
							height="165px"
							object-fit="contain"
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/7bd8d608-33f0-43f4-9cd7-c91eb695c74c.jpg?v=2022-05-20T08:35:51.664Z"
							border-radius="12px 12px 0px 0px"
							margin="0px 0px 0px 0px"
							width="100%"
						/>
					</Box>
					<Text font="600 21px/130% --fontFamily-googleMontserrat" margin="16px 0px 8px 0px" text-align="center">
						FW: Russian Poker Championship{"\n\n"}
					</Text>
					<Text font="italic 600 18px/130% --fontFamily-googleMontserrat" margin="16px 0px 40px 0px">
						20 мая 2022
					</Text>
					<Link
						hover-color="#000000"
						hover-background="#F8F8F8"
						href="/news/FW-Russia-poker-championship"
						margin="0px 0px 20px 0px"
						border-radius="40px"
						color="#ffffff"
						background="#001A51"
						padding="13px 20px 13px 20px"
						font="500 18px/130% --fontFamily-googleMontserrat"
						border-width="1px"
						border-style="solid"
						border-color="#000000"
						text-decoration-line="initial"
						transition="background-color 0.3s ease 0s"
					>
						Подробнее
					</Link>
				</StackItem>
				<StackItem width="33.33%" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px px 10px 0px"
						border-radius="6px"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="#ffffff"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
					/>
					<Image
						height="165px"
						object-fit="cover"
						src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/7.webp?v=2021-06-01T22:35:07.809Z"
						border-radius="12px 12px 0px 0px"
						width="100%"
						margin="-2px 0px 0px 0px"
					/>
					<Text font="600 21px/130% --fontFamily-googleMontserrat" margin="16px 0px 8px 0px" text-align="center">
						«Сильные фигуры»{" "}
						<br />
						в Геленджике{"\n\n"}
					</Text>
					<Text font="italic 600 18px/130% --fontFamily-googleMontserrat" margin="16px 0px 40px 0px">
						4 мая 2021
					</Text>
					<Link
						hover-color="#000000"
						hover-background="#F8F8F8"
						href="/news/silnye-figuri-v-gelendgike"
						margin="0px 0px 20px 0px"
						border-radius="40px"
						color="#ffffff"
						background="#001A51"
						padding="13px 20px 13px 20px"
						font="500 18px/130% --fontFamily-googleMontserrat"
						border-width="1px"
						border-style="solid"
						border-color="#000000"
						text-decoration-line="initial"
						transition="background-color 0.3s ease 0s"
					>
						Подробнее
					</Link>
				</StackItem>
				<StackItem md-width="50%" sm-width="100%" height="100%" width="33.33%">
					<Override
						slot="StackItemContent"
						background="#ffffff"
						padding="0px 0px 10px 0px"
						border-radius="6px"
						height="100%"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
					/>
					<Image
						src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon4.jpg?v=2021-04-20T11:48:15.855Z"
						border-radius="12px 12px 0px 0px"
						width="100%"
						height="165px"
						object-fit="cover"
					/>
					<Text font="600 21px/130% --fontFamily-googleMontserrat" margin="16px 0px 8px 0px" text-align="center">
						EPT Sochi{" "}
						<br />
						<Span color="#ffffff">
							.
						</Span>
					</Text>
					<Text font="italic 600 18px/130% --fontFamily-googleMontserrat" margin="16px 0px 40px 0px">
						19-28 марта 2021
					</Text>
					<Link
						text-decoration-line="initial"
						color="#ffffff"
						font="500 18px/130% --fontFamily-googleMontserrat"
						hover-color="#000000"
						background="#001A51"
						border-width="1px"
						border-color="#000000"
						border-style="solid"
						transition="background-color 0.3s ease 0s"
						padding="13px 20px 13px 20px"
						border-radius="40px"
						margin="0px 0px 20px 0px"
						hover-background="#F8F8F8"
						href="/news/ert-sochi"
					>
						Подробнее
					</Link>
				</StackItem>
				<Link
					padding="16px 28px 17px 28px"
					margin="0px 16px 0px 16px"
					hover-color="#000000"
					hover-background="#F8F8F8"
					border-color="#000000"
					text-decoration-line="initial"
					color="#ffffff"
					width="100%"
					transition="background-color 0.3s ease 0s"
					text-align="center"
					background="#000000"
					font="500 18px/130% --fontFamily-googleMontserrat"
					border-width="1px"
					border-style="solid"
					href="/news"
					border-radius="6px"
				>
					Перейти к архиву
				</Link>
				{"        "}
			</Stack>
		</Section>
		<Section background="#F8F8F8" id="partners" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem display="flex" width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Text
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#222"
						font="700 30px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
					>
						Партнеры
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			align-items="center"
			lg-padding="70px 0 70px 0"
			md-padding="50px 0 50px 0"
			background="#F8F8F8"
			padding="100px 0 110px 0"
		>
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack align-items="center" justify-content="center" margin="0px 0px 0px 0px">
				{"        "}
				<StackItem
					margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-margin="0 0 20px 0"
					width="25%"
					display="flex"
				>
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
						<Link href="https://www.pokerstarslive.com/ept/open-sochi/">
							<Image
								max-width="450px"
								filter="grayscale(100%)"
								transition="all .3s"
								hover-filter="grayscale(0%)"
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/pokertour.png?v=2021-04-19T00:14:33.230Z"
								width="100%"
							/>
						</Link>
					</Box>
					{"          "}
				</StackItem>
				<StackItem
					lg-margin="0 0 20px 0"
					width="25%"
					display="flex"
					margin="0px 0px 0px 0px"
					lg-width="50%"
				>
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
					/>
					<Box
						flex-direction="column"
						padding="0px 20px 0px 20px"
						display="flex"
						align-items="center"
						justify-content="center"
					>
						<Link href="https://xn--c1adibnmybyh9ege.xn--p1ai/">
							<Image
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/figurs.png?v=2021-05-19T20:24:59.160Z"
								width="100%"
								max-width="450px"
								hover-opacity="0.8"
								transition="opacity 0.3s ease 0s"
							/>
						</Link>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="partners" padding="5px 0 10px 0" background="#F8F8F8">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem display="flex" width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Text
						font="700 30px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#222"
					>
						Обратная связь
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#000000" padding="0px 0 0px 0">
			<Override
				slot="SectionContent"
				align-items="center"
				justify-content="center"
				width="100%"
				max-width="1280px"
			/>
			<Stack width="100%" margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" padding="40px 0px 20px 0px" />
					<Components.QuarklycommunityKitPopup>
						<Override
							slot="Button Open"
							background="#001A51"
							font="500 18px/130% --fontFamily-googleMontserrat"
							border-radius="40px"
							padding="13px 24px 13px 24px"
							hover-color="#001A51"
							hover-background="--color-light"
							transition="background-color 0.3s ease 0s"
						>
							Написать нам
						</Override>
						<Formspree
							border-width="12px"
							align-items="center"
							completeText="Success"
							endpoint="meqvonkd"
							flex-direction="column"
							box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
							background="#000000"
							justify-content="center"
							display="flex"
							color="#ffffff"
							errorMessage="Something went wrong"
							padding="50px 80px 50px 80px"
							border-radius="0px"
							font="500 18px/130% --fontFamily-googleMontserrat"
						>
							<Input
								placeholder-color="#000000"
								name="Имя"
								placeholder="Имя"
								margin="0px 4px 20px 0px"
								width="100%"
								type="text"
								border-width="1px"
								padding="9px 16px 9px 16px"
							/>
							<Input
								name="email"
								placeholder="Email"
								margin="0px 4px 20px 0px"
								width="100%"
								border-width="1px"
								padding="9px 16px 9px 16px"
								placeholder-color="#000000"
							/>
							<Input
								width="100%"
								type="text"
								border-width="1px"
								padding="9px 16px 9px 16px"
								placeholder-color="#000000"
								name="Категория"
								placeholder="Категория"
								margin="0px 4px 20px 0px"
							/>
							<Button
								width="100%"
								color="#000000"
								hover-color="#ffffff"
								border-color="#ffffff"
								background="#ffffff"
								hover-background="#000000"
								border-width="1px"
								border-style="solid"
								font="500 19px/130% --fontFamily-googleMontserrat"
							>
								Отправить
							</Button>
						</Formspree>
					</Components.QuarklycommunityKitPopup>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6079f48266fcdfa80157a2ab"}>
				{"* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});