import React from "react";
import theme from "theme";
import { Theme, Image, Box, Strong, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"turnirnyj-poker"} />
		<Helmet>
			<title>
				Турнирный покер
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
						padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					>
						<Image
							border-radius="6px"
							height="400px"
							object-fit="cover"
							object-position="0% 0%"
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/tablepoker.jpg?v=2021-05-19T17:13:20.409Z"
							width="100%"
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
						flex-direction="column"
						padding="0px 0px 0px 0px"
						display="flex"
						align-items="flex-start"
						justify-content="center"
					>
						<Text text-align="center" font="500 26px/130% --fontFamily-googleMontserrat" margin="0px 0px 23px 0px" sm-text-align="center">
							<Strong font="700 22px/33.8px Montserrat, sans-serif">
								Турнирный покер
							</Strong>
						</Text>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Покер – интеллектуальная азартная игра, в которой люди играют друг с другом и результат (победа или поражение) игры во многом зависит от мастерства игрока, от его умения точнее соперника рассчитывать вероятности и шансы, принимать математически оптимальные решения, анализировать и оценивать тактику и стратегию игры оппонента.{" "}
							<br />
							<br />
							Жители России, благодаря сильной математической подготовке, занимают лидирующие позиции на мировой покерной арене. Они выигрывали и выигрывают крупнейшие турниры по покеру и считаются одними из сильнейших в мире. В международных сериях по покеру участвуют десяти тысяч игроков из России.{" "}
							<br />
							<br />
							Вне зависимости от наличия регуляторных или запретительных мер, игра в покер существует и охватывает большое количество населения страны, что позволяет считать покер социально-общественным явлением, нуждающимся в специальном регулировании. В марте 2021 года ВЦИОМ провел общероссийский опрос общественного мнения на тему отношения россиян к игре в покер. По данным опроса уровень вовлеченности населения в игру в покер составляет 15% (в сентябре 2013 года 16%) среди совершеннолетних жителей России, тогда как среди представителей интернет-аудитории, почти каждый второй опрошенный (49%) знаком с игрой и когда-либо играл в нее. Доля респондентов, имеющих опыт игры в покер, выше среди молодежи до 34 лет. Лидерами по доле игроков в покер являются россияне с незаконченным высшим или высшим образованием, а также проживающие в городах с численностью 1 миллион и более человек. По мнению большинства, как среди всех россиян (54%), так и среди интернет-аудитории (71%) право играть в покер у жителей России должно быть.
							<br />
							<br />
							С 2018 года в игорной зоне Красная Поляна (Сочи) на постоянной основе проводится российский этап Европейского покерного тура (ЕРТ), самого масштабного и популярного покерного тура в мире. С момента основания EPT (2004 год) этапы тура проходили в крупнейших городах мира, в т.ч. в Лондоне, Барселоне, Берлине, Вене, Праге, Варшаве, Копенгагене и др., финал в Монако (Монте-Карло). Благодаря профессионализму Казино Сочи, местной инфраструктуре и сервису Россия теперь тоже включена в постоянное расписание лучших покерных чемпионатов мира.{" \n\n"}
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
				max-width="1280px"
			/>
			<Stack width="100%" margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="100%" display="flex">
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