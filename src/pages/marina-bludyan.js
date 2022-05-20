import React from "react";
import theme from "theme";
import { Theme, Image, Box, Strong, Text, List, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"marina-bludyan"} />
		<Helmet>
			<title>
				Марина Блудян
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
			<Stack justify-content="center" margin="0px 0px 0px 0px" align-items="flex-start">
				{"        "}
				<StackItem width="30%" display="flex" md-width="100%" margin="0px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
						align-items="flex-start"
						justify-content="center"
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
						justify-content="center"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
						align-items="flex-start"
					/>
					<Box
						display="flex"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Text margin="0px 0px 14px 0px" sm-text-align="center" text-align="center" font="500 22px/130% --fontFamily-googleMontserrat">
							<Strong>
								Марина Блудян{"\n\n"}
							</Strong>
						</Text>
						<Text font="italic 400 18px/130% --fontFamily-googleMontserrat" margin="0px 0px 30px 0px">
							Президент Союза{"\n\n"}
						</Text>
						<List margin="0px 0px 16px 0px" padding="0px 0px 0px 20px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Первый вице-президент Общероссийской общественной организации малого и среднего предпринимательства «ОПОРА РОССИИ»;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Представитель Уполномоченного при Президенте Российской Федерации по защите прав предпринимателей по вопросам, связанным с ликвидацией нарушений прав предпринимателей сфере пожарной безопасности и по вопросам защиты прав предпринимателей, использующих специальные налоговые режимы, в том числе замозанятых;{"\n\n"}
							</Text>
						</List>
						<List margin="0px 0px 16px 0px" padding="0px 0px 0px 20px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Высшего совета Всероссийской политической партии «ЕДИНАЯ РОССИЯ»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Подкомиссии по оценке фактического воздействия нормативных правовых актов при Правительственной комиссии по проведению административной реформы;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/130% --fontFamily-googleMontserrat">
								Заместитель Председателя Общественного совета Федеральной службы по аккредитации «Росаккредитация»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Совета по стандартизации Федерального агентства по техническому регулированию и метрологии (Росстандарт);
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Комиссии по апелляциям при Федеральном агентстве по техническому регулированию и метрологии (Росстандарт);
							</Text>
						</List>
						<List margin="0px 0px 16px 0px" padding="0px 0px 0px 20px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Комиссии по апелляциям при Федеральной службе по аккредитации (Росаккредитация)
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Комитета по стратегии при Наблюдательном совете Фонда развития промышленности;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Член Совета по техническому регулированию и стандартизации
								<br />
								при Минпромторге России;{"\n\n"}
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Сопредседатель рабочих групп по реализации механизма «регуляторной гильотины» в сферах пожарной безопасности, гражданской обороны и чрезвычайных ситуаций и в сфере азартных игр и лотерей;
							</Text>
						</List>
						<List margin="0px 0px 16px 0px" padding="0px 0px 0px 20px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Председатель Технического комитета по стандартизации ТК 079
								<br />
								«Оценка соответствия»;{"\n\n"}
							</Text>
						</List>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px" text-decoration-line="underline">
							Участие в группах:{"\n\n"}
						</Text>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								Экспертная группа по основному направлению стратегического развития РФ «Малый бизнес и поддержка индивидуальной предпринимательской инициативы»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 0px 0px">
								проектный комитет по основному направлению стратегического развития РФ «Малый бизнес и поддержка индивидуальной предпринимательской инициативы»;
							</Text>
						</List>
						<List padding="0px 0px 0px 20px" margin="0px 0px 16px 0px">
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/130% --fontFamily-googleMontserrat">
								рабочая группа по улучшению условий ведения предпринимательской деятельности при Правительственной комиссии по экономическому развитию и интеграции
							</Text>
						</List>
						<Text margin="0px 0px 0px 0px" font="normal 400 16px/130% --fontFamily-googleMontserrat">
							Марина Анатольевна активно занимается законотворческой деятельностью, является разработчиком десятков законодательных инициатив в сфере технического регулирования, государственного и муниципального контроля и надзора, вносит поправки и предложения к рассматриваемым законопроектам, выступает с докладами на российских и международных форумах предпринимателей.{"\n\n\n\n"}
						</Text>
					</Box>
					{"          "}
				</StackItem>
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