import React from "react";
import theme from "theme";
import { Theme, Image, Box, Text, Link, Span, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"news"} />
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
		<Components.Header />
		<Section background="#F8F8F8" padding="150px 0 40px 0" align-items="center">
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
						FW: Russian Poker Championship
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
						в Геленджике
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
				{"        "}
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