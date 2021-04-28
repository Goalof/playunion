import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Strong, Text, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section, Formspree, SocialMedia } from "@quarkly/components";
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
		<Section background="#F8F8F8" padding="0px 0 0px 0" position="fixed" z-index="9">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="25%" display="flex" lg-width="50%" sm-width="70%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Image
						src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%A1%D0%BE%D1%8E%D0%B7_%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%98%D0%B3%D1%80_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.svg?v=2021-04-28T05:03:18.949Z"
						width="100%"
						height="auto"
						max-height="115px"
						object-position="0% 0%"
					/>
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
								href="#about"
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
								href="#categories"
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
								href="#team"
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
								Состав союза
							</Link>
							<Link
								href="#event"
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
								href="#partners"
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
		<Section background="#F8F8F8" padding="100px 0 5px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Components.Slider
						showHead={false}
						showText={false}
						showLink={false}
						showArrows
						slidesProp="2"
						aspectRatio="auto"
						width="100%"
						min-height="480px"
						lg-min-height="280px"
						md-min-height="230px"
						sm-min-height="120px"
						showDots={false}
						fullHd-min-height="600px"
					>
						<Override
							slot="Slide Image"
							object-fit="fill"
							width="100%"
							object-position="0% 0%"
							min-height="480px"
							lg-min-height="280px"
							md-min-height="230px"
							sm-min-height="120px"
							fullHd-min-height="600px"
						/>
						<Override slot="Slide Image 1" src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon4.jpg?v=2021-04-20T11:48:15.855Z" />
						<Override
							slot="Point Icon"
							border-width="1px"
							border-style="solid"
							border-color="#000000"
							border-radius="50%"
							padding="1px 1px 1px 1px"
							margin="0px 5px 0px 5px"
							width="10px"
							height="10px"
						/>
						<Override slot="Point Icon :active" color="#000000" />
						<Override slot="Slide Image 2" src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/1400%D1%85410-01.png?v=2021-04-28T18:28:13.562Z" />
						<Override slot="Slide Image 3" src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon3.jpg?v=2021-04-20T11:47:52.035Z" />
						<Override slot="Slide Image 4" object-fit="contain" object-position="0% 0%" />
						<Override slot="Slide" width="100%" />
						<Override slot="Points" sm-z-index="4" lg-z-index="4" />
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
					<Text
						font="28px/140% --fontFamily-googleMontserrat"
						margin="20px 0px 60px 0px"
						lg-font="27px/130% --fontFamily-googleMontserrat"
						lg-margin="20px 0px 40px 0px"
						md-font="24px/130% --fontFamily-googleMontserrat"
						sm-font="18px/130% --fontFamily-googleMontserrat"
						sm-margin="10px 0px 10px 0px"
						sm-text-align="center"
					>
						<Strong>
							Cоюз Участников Интеллектуальных Игр
						</Strong>
						{" "}занимается равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения существенных финансовых и административных условий. Таким образом укрепление и развитие структуры. Нужен текст, предлагаю вставить на то кол-во символов, которое нам будет достаточно по ощущениям, мы поставим в сайт и посмотрим как будет выглядеть. Далее скорректируем если потребуется (путем размера шрифта или сокращения кол-ва символов – так как движок сайта ресайзит под девайсы надо смотреть декстоп/мобайл как будет получаться).
						<br />
						{"\n\n"}
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="partners" background="#001A51" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
						font="700 35px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#ffffff"
					>
						Категории игр
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="95px 0 125px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem width="33.33%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						md-justify-content="center"
					/>
					<Link
						href="/turnirnyj-poker"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="500 30px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
						lg-font="600 28px/130% --fontFamily-googleMontserrat"
						sm-font="600 20px/130% --fontFamily-googleMontserrat"
						flex-direction="column"
						justify-content="center"
						text-align="center"
						md-margin="0px 0px 20px 0px"
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
						href="/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="500 30px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
						lg-font="600 28px/130% --fontFamily-googleMontserrat"
						sm-font="600 20px/130% --fontFamily-googleMontserrat"
						order="1"
						flex-direction="column"
						justify-content="center"
						text-align="center"
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
					<Override slot="StackItemContent" justify-content="flex-start" padding="0px 0px 0px 0px" md-justify-content="center" />
					<Link
						href="/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="500 30px/130% --fontFamily-googleMontserrat"
						color="#000000"
						hover-color="#8F3E2C"
						target="_blank"
						lg-font="600 28px/130% --fontFamily-googleMontserrat"
						sm-font="600 20px/130% --fontFamily-googleMontserrat"
						flex-direction="column"
						justify-content="center"
						text-align="center"
						md-margin="0px 0px 20px 0px"
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
		<Section id="partners" background="#001A51" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
						font="700 35px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#ffffff"
					>
						Состав союза
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="#F8F8F8"
			padding="5px 0 5px 0"
			align-items="center"
			min-height="100vh"
			sm-padding="25px 0 25px 0"
		>
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px" align-items="center" justify-content="center">
				{"        "}
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
						href="/marina-bludyan"
						text-decoration-line="initial"
						color="#000000"
						hover-transform="translateY(-10px);"
						transition="-webkit-transition: all .3s;  transition: all .3s;"
					>
						<Box
							display="flex"
							align-items="center"
							justify-content="center"
							flex-direction="column"
							padding="0px 0px 0px 0px"
						>
							<Image
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-marina.webp?v=2021-04-19T00:05:59.273Z"
								width="100%"
								max-width="450px"
								border-radius="50px"
								sm-width="80%"
							/>
							<Text font="500 26px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px" sm-text-align="center" text-align="center">
								Марина Блудян
							</Text>
							<Text font="400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
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
						href="/artur-voskanyan"
						text-decoration-line="initial"
						color="#000000"
						hover-transform="translateY(-10px);"
						transition="-webkit-transition: all .3s;  transition: all .3s;"
					>
						<Box
							display="flex"
							align-items="center"
							justify-content="center"
							flex-direction="column"
							padding="0px 0px 0px 0px"
						>
							<Image
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-artur.webp?v=2021-04-19T00:05:54.037Z"
								width="100%"
								max-width="450px"
								border-radius="50px"
								sm-width="80%"
							/>
							<Text font="500 26px/130% --fontFamily-googleMontserrat" margin="32px 0px 16px 0px" sm-text-align="center" text-align="center">
								Артур Восканян
							</Text>
							<Text font="400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
								Турнирный покер{"\n\n"}
							</Text>
						</Box>
					</Link>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="partners" background="#001A51" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
						font="700 35px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#ffffff"
					>
						События
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F8" padding="30px 0 40px 0" align-items="center">
			<Override slot="SectionContent" width="95%" max-width="none" />
			<Stack margin="0px 0px 0px 0px" flex-direction="row" align-items="center" justify-content="center">
				<StackItem width="33.33%" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
						background="#ffffff"
						padding="0px 0px 10px 0px"
						border-radius="6px"
					/>
					<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon4.jpg?v=2021-04-20T11:48:15.855Z" border-radius="12px 12px 0px 0px" margin="0px 0px 0px 0px" width="100%" />
					<Text font="600 21px/130% --fontFamily-googleMontserrat" margin="16px 0px 40px 0px">
						EPT Sochi March 2021{"\n\n"}
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffffff"
						background="#001A51"
						padding="13px 20px 13px 20px"
						border-radius="40px"
						font="500 18px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 20px 0px"
						hover-color="#000000"
						hover-background="#F8F8F8"
						border-width="1px"
						border-style="solid"
						border-color="#000000"
						transition="background-color 0.3s ease 0s"
					>
						Подробнее
					</Link>
				</StackItem>
				<StackItem width="33.33%" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
						background="#ffffff"
						padding="0px 0px 10px 0px"
						border-radius="6px"
					/>
					<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon4.jpg?v=2021-04-20T11:48:15.855Z" border-radius="12px 12px 0px 0px" margin="0px 0px 0px 0px" width="100%" />
					<Text font="600 21px/130% --fontFamily-googleMontserrat" margin="16px 0px 40px 0px">
						EPT Sochi March 2021{"\n\n"}
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffffff"
						background="#001A51"
						padding="13px 20px 13px 20px"
						border-radius="40px"
						font="500 18px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 20px 0px"
						hover-color="#000000"
						hover-background="#F8F8F8"
						border-width="1px"
						border-style="solid"
						border-color="#000000"
						transition="background-color 0.3s ease 0s"
					>
						Подробнее
					</Link>
				</StackItem>
				<StackItem width="33.33%" md-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
						background="#ffffff"
						padding="0px 0px 10px 0px"
						border-radius="6px"
					/>
					<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/fon4.jpg?v=2021-04-20T11:48:15.855Z" border-radius="12px 12px 0px 0px" margin="0px 0px 0px 0px" width="100%" />
					<Text font="600 21px/130% --fontFamily-googleMontserrat" margin="16px 0px 40px 0px">
						EPT Sochi March 2021{"\n\n"}
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffffff"
						background="#001A51"
						padding="13px 20px 13px 20px"
						border-radius="40px"
						font="500 18px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 20px 0px"
						hover-color="#000000"
						hover-background="#F8F8F8"
						border-width="1px"
						border-style="solid"
						border-color="#000000"
						transition="background-color 0.3s ease 0s"
					>
						Подробнее
					</Link>
				</StackItem>
				<Link
					href="#"
					text-decoration-line="initial"
					color="#ffffff"
					background="#000000"
					padding="16px 28px 17px 28px"
					border-radius="6px"
					font="500 18px/130% --fontFamily-googleMontserrat"
					margin="0px 16px 0px 16px"
					hover-color="#000000"
					hover-background="#F8F8F8"
					border-width="1px"
					border-style="solid"
					border-color="#000000"
					transition="background-color 0.3s ease 0s"
					width="100%"
					text-align="center"
				>
					Перейти к архиву
				</Link>
				{"        "}
			</Stack>
		</Section>
		<Section id="partners" background="#001A51" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
						font="700 35px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#ffffff"
					>
						Партнеры
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="#F8F8F8"
			padding="100px 0 110px 0"
			align-items="center"
			lg-padding="70px 0 70px 0"
			md-padding="50px 0 50px 0"
		>
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px" align-items="center" justify-content="center">
				{"        "}
				<StackItem
					width="25%"
					display="flex"
					margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-margin="0 0 20px 0"
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
								src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/pokertour.png?v=2021-04-19T00:14:33.230Z"
								width="100%"
								max-width="450px"
								filter="grayscale(100%)"
								transition="all .3s"
								hover-filter="grayscale(0%)"
							/>
						</Link>
					</Box>
					{"          "}
				</StackItem>
			</Stack>
		</Section>
		<Section id="partners" background="#001A51" padding="5px 0 10px 0">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
						font="700 35px/130% --fontFamily-googleMontserrat"
						margin="0px 0px 0px 0px"
						sm-font="700 28px/130% --fontFamily-googleMontserrat"
						sm-text-align="center"
						color="#ffffff"
					>
						Обратная связь
					</Text>
					{"            "}
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
					<Formspree
						errorMessage="Something went wrong"
						completeText="Success"
						endpoint="meqvonkd"
						display="flex"
						flex-direction="column"
						width="100%"
						background="#000000"
						padding="50px 80px 50px 80px"
						border-radius="0px"
						box-shadow="0 10px 10px rgb(0 0 2 / 5%);"
						border-width="12px"
					>
						<Input
							name="Имя"
							placeholder="Имя"
							margin="0px 4px 20px 0px"
							width="100%"
							type="text"
							border-width="1px"
							padding="9px 16px 9px 16px"
							placeholder-color="#000000"
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
							name="Категория"
							placeholder="Категория"
							margin="0px 4px 20px 0px"
							width="100%"
							type="text"
							border-width="1px"
							padding="9px 16px 9px 16px"
							placeholder-color="#000000"
						/>
						<Button
							background="#ffffff"
							font="500 19px/130% --fontFamily-googleMontserrat"
							width="100%"
							color="#000000"
							hover-color="#ffffff"
							hover-background="#000000"
							border-width="1px"
							border-style="solid"
							border-color="#ffffff"
						>
							Отправить
						</Button>
					</Formspree>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#000000" padding="5px 0 5px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
			<Stack margin="0px 0px 0px 0px">
				{"        "}
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					sm-align-items="center"
					sm-justify-content="center"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						color="#ffffff"
						sm-align-items="center"
					/>
					<Text font="700 44px/130% --fontFamily-googleMontserrat" color="#ffffff" margin="0px 0px 0px 0px">
						18+
					</Text>
					<Text font="400 14px/130% --fontFamily-googleMontserrat" margin="16px 0px 0px 0px">
						© 2021 Союз участников интеллектуальных игр
					</Text>
					{"          "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					sm-align-items="center"
					sm-justify-content="center"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						color="#ffffff"
						sm-align-items="center"
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
				{"@-webkit-keyframes rotate-center {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate-center {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n#hellopreloader_preload {\n  -webkit-animation: rotate-center 0.6s ease-in-out infinite both;\n          animation: rotate-center 0.6s ease-in-out infinite both;\n}\n#hellopreloader>p{display:none;background: #fff;}\n#hellopreloader_fon{display: block;position: fixed;z-index: 9;top: 0;left: 0;width: 100%;height: 100%;min-width: 1000px;background-color: #fff;background: #fff; background-size:159px;}  \n#hellopreloader_preload{display: block;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;background: transparent url(https://playunion.ukit.me/uploads/s/y/s/7/ys7zdj176wjy/img/full_piEUoiO1.png) center center no-repeat;background-size:159px;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"607cb0304ce0d2a45be3aa77"}>
				{"var hellopreloader = document.getElementById(\"hellopreloader_fon\", \"hellopreloader_preload\");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = \"none\";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},2000);};"}
			</script>
		</RawHtml>
	</Theme>;
});