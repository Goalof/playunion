import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Strong, Text, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"marina-bludyan"} />
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
		<Section background="#F8F8F8" padding="145px 0 45px 0" align-items="center">
			<Override slot="SectionContent" max-width="none" width="95%" />
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
						<Image src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/photo-marina.webp?v=2021-04-19T00:05:59.273Z" width="100%" max-width="450px" border-radius="6px" />
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
							<Strong>
								Марина Блудян{"\n\n"}
							</Strong>
						</Text>
						<Text font="italic 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 30px 0px">
							Президент Союза{"\n\n"}
						</Text>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Первый вице-президент Общероссийской общественной организации малого и среднего предпринимательства «ОПОРА РОССИИ»;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Представитель Уполномоченного при Президенте Российской Федерации по защите прав предпринимателей по вопросам, связанным с ликвидацией нарушений прав предпринимателей сфере пожарной безопасности и по вопросам защиты прав предпринимателей, использующих специальные налоговые режимы, в том числе замозанятых;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Высшего совета Всероссийской политической партии «ЕДИНАЯ РОССИЯ»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Подкомиссии по оценке фактического воздействия нормативных правовых актов при Правительственной комиссии по проведению административной реформы;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Заместитель Председателя Общественного совета Федеральной службы по аккредитации «Росаккредитация»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Совета по стандартизации Федерального агентства по техническому регулированию и метрологии (Росстандарт);
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Комиссии по апелляциям при Федеральном агентстве по техническому регулированию и метрологии (Росстандарт);
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Комиссии по апелляциям при Федеральной службе по аккредитации (Росаккредитация)
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Комитета по стратегии при Наблюдательном совете Фонда развития промышленности;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Совета по техническому регулированию и стандартизации
								<br />
								при Минпромторге России;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Сопредседатель рабочих групп по реализации механизма «регуляторной гильотины» в сферах пожарной безопасности, гражданской обороны и чрезвычайных ситуаций и в сфере азартных игр и лотерей;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Председатель Технического комитета по стандартизации ТК 079
								<br />
								«Оценка соответствия»;{"\n\n"}
							</Text>
						</List>
						<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px" text-decoration-line="underline">
							Участие в группах:{"\n\n"}
						</Text>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Экспертная группа по основному направлению стратегического развития РФ «Малый бизнес и поддержка индивидуальной предпринимательской инициативы»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								проектный комитет по основному направлению стратегического развития РФ «Малый бизнес и поддержка индивидуальной предпринимательской инициативы»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								рабочая группа по улучшению условий ведения предпринимательской деятельности при Правительственной комиссии по экономическому развитию и интеграции
							</Text>
						</List>
						<Text font="normal 400 21px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
							Марина Анатольевна активно занимается законотворческой деятельностью, является разработчиком десятков законодательных инициатив в сфере технического регулирования, государственного и муниципального контроля и надзора, вносит поправки и предложения к рассматриваемым законопроектам, выступает с докладами на российских и международных форумах предпринимателей.{"\n\n\n\n"}
						</Text>
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
					{"        "}{"    "}
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
				{"@-webkit-keyframes rotate-center {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate-center {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n#hellopreloader_preload {\n  -webkit-animation: rotate-center 0.6s ease-in-out infinite both;\n          animation: rotate-center 0.6s ease-in-out infinite both;\n}\n#hellopreloader>p{display:none;background: #fff;}\n#hellopreloader_fon{display: block;position: fixed;z-index: 9;top: 0;left: 0;width: 100%;height: 100%;min-width: 1000px;background-color: #fff;background: #fff; background-size:159px;}  \n#hellopreloader_preload{display: block;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;background: transparent url(https://playunion.ukit.me/uploads/s/y/s/7/ys7zdj176wjy/img/full_piEUoiO1.png) center center no-repeat;background-size:159px;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"607cb0304ce0d2a45be3aa77"}>
				{"var hellopreloader = document.getElementById(\"hellopreloader_fon\", \"hellopreloader_preload\");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = \"none\";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},2000);};"}
			</script>
		</RawHtml>
	</Theme>;
});