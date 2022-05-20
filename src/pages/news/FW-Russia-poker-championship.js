import React from "react";
import theme from "theme";
import { Theme, Image, Box, Strong, Text, Span, Em, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"news/FW-Russia-poker-championship"} />
		<Helmet>
			<title>
				FW: Russian Poker Championship - 20 мая
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
		<Section padding="115px 0 45px 0" align-items="center" background="#F8F8F8">
			<Override slot="SectionContent" max-width="1280px" width="95%" />
			<Stack align-items="flex-start" justify-content="center" margin="0px 0px 0px 0px">
				{"        "}
				<StackItem margin="0px 0px 0px 0px" width="100%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 0px"
						flex-direction="column"
						md-align-items="center"
						justify-content="center"
					/>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
					>
						<Image
							width="100%"
							border-radius="6px"
							sm-width="100%"
							height="500px"
							object-fit="contain"
							src="https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/logo-poker-fm-champ.png?v=2022-05-20T08:49:58.812Z"
							lg-height="auto"
						/>
					</Box>
					{"          "}
				</StackItem>
				<StackItem md-width="100%" margin="20px 0px 0px 0px" width="100%" display="flex">
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
						<Text font="500 26px/130% --fontFamily-googleMontserrat" margin="0px 0px 23px 0px" sm-text-align="center" text-align="center">
							<Strong>
								Первый открытый Чемпионат России по покеру{" "}
							</Strong>
							{"\n\n"}
						</Text>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Ассоциация операторов индустрии развлечений и игорного бизнеса России (АИРИС)
							</Strong>
							{" "}при поддержке{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Союза Учтниасков Интеллектуальных Игр
							</Strong>
							{" "}объявляет о проведении первого открытого{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Чемпионата России по покеру
							</Strong>
							, этапы которого пройдут в 4-х игорных зонах страны.
							<br />
							{"\n\n"}
						</Text>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							Чемпионат состоит из 4-х региональных этапов (
							<Strong>
								Russian Poker Cup
							</Strong>
							) и одного финального этапа (
							<Strong>
								Russian Poker Championship
							</Strong>
							).
							<br />
							{"\n\n"}
						</Text>
						<Text font="normal 400 16px/230% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							1. Russian Poker Cup,{" "}
							<Strong>
								Сочи
							</Strong>
							, «Казино Сочи» (Игорная зона Красная поляна) 20-29 мая 2022
							<br />
							2. Russian Poker Cup,{" "}
							<Strong>
								Калининград
							</Strong>
							, «Sobranie» (Игорная зона Янтарная) 1-10 июля 2022
							<br />
							3. Russian Poker Cup,{" "}
							<Strong>
								Алтай
							</Strong>
							, «Altai Palace» (Игорная зона Сибирская монета) 16-25 сентября 2022
							<br />
							4. Russian Poker Cup,{" "}
							<Strong>
								Владивосток
							</Strong>
							, «Tigre de Cristal» (Игорная зона Приморье) 18-27 ноября 2022
							<br />
							5. Финальный этап Russian Poker Championship 2022 пройдёт в «Казино Сочи» с 16 по 22 декабря{"\n\n\n\n"}
						</Text>
						<Text font="normal 400 16px/130% --fontFamily-googleMontserrat" margin="0px 0px 16px 0px">
							В сетку каждого регионального этапа
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								{" "}Russian Poker Cup
							</Strong>
							{" "}на постоянной основе включены два главных турнира:
							<br />
							<br />
							{"\n"}
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Texas NL Freezout (Buy-in: 50,000 руб.)
								<br />
								<br />
								Omaha PL Freezout (Buy-in: 50,000 руб.)
							</Span>
							<br />
							{"\n\n"}
							<br />
							<br />
							{"\n"}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Russian Poker Championship{" "}
							</Strong>
							— ежегодный финальный этап открытого{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Чемпионата России по покеру
							</Strong>
							.{" "}
							<br />
							{"\n\n"}
							<br />
							{"\n\n"}Texas NL Freezout (Buy-in: 100,000 руб.)
							<br />
							<br />
							Omaha PL Freezout (Buy-in: 100,000 руб.)
							<br />
							<br />
							<br />
							В течение года все игроки, участвующие в главных турнирах региональных этапов (Russian Poker Cup) и главных турнирах ежегодного финального этапа (Russian Poker Championship), в зависимости от занятого места в турнире, получают очки, идущие в рейтинг «
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Игрок Года
							</Strong>
							». В конце года в рамках финального этапа Чемпионата России (Russian Poker Championship) состоится церемония{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Russian Poker Awards
							</Strong>
							, на которой по итогам рейтинга пройдёт награждение лучшего игрока года. Кроме того, путем предварительного голосования будут определены победители года в различных номинациях: «Лучший покерный менеджер России», «Лучший покерный журналист», «Лучший этап серии» и др.{" "}
							<br />
							<br />
							Первый региональный этап{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Russian Poker Cup{" "}
							</Strong>
							пройдёт в «
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Казино Сочи
							</Strong>
							» с 20 по 29 мая 2022 года и будет представлен 27 турнирами в различных дисциплинах.
							<br />
							<br />
							Победители главных турниров региональных этапов получат Кубок и титул «Победитель Кубка России по покеру», денежный приз, а также бесплатное проживание и участие в главном турнире финального этапа
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								{" "}Russian Poker Championship
							</Strong>
							{" "}в своей дисциплине.
							<br />
							<br />
							<Em>
								{" "}«Российские игроки в покер, являясь одними из сильнейших в мире, давно заслужили право на собственный Чемпионат. Нет никаких сомнений, что Чемпионат станет знаковым событием для каждой игорной зоны, он еще раз продемонстрирует всем, что покер – это интеллектуальная игра, которая в России уже давно превратилось в большое социальное явление».{" "}
							</Em>
							<br />
							М.А. Блудян, Союз Участников Интеллектуальных Игр
							<br />
							<br />
							<Em>
								"Чемпионат России по покеру станет одним из главных проектов для ассоциации в этом году. Масштабный, многоэтапный турнир объединит сообщество игроков и познакомит покерное комьюнити с ключевыми игорными зонами нашей страны. Также хочу выразить благодарность Союзу Участников Интеллектуальных Игр за поддержку. Не сомневаюсь, что вместе мы организуем турнир, который найдет положительный отклик у профессионалов и любителей покера».{" "}
							</Em>
							<br />
							Д.С. Анфиногенов, Председатель АИРИС
							<br />
							<br />
							{" "}
							<Em>
								«Покер в России развивается так стремительно, что создание общероссийского чемпионата — это большое событие, но в то же время очень логичное.  Мы несколько лет шли к такому крупному проекту, и мне очень приятно быть у руля этой истории. Я уверен, Чемпионат России станет одной из самых престижных серий в нашей стране, ведь мы объединяем все игорные зоны, игроков со всей России, запускаем внутренний туристический поток. А главное, развиваем и популяризируем эту замечательную интеллектуальную игру и унифицируем единые правила и регламент игры».
							</Em>
							<br />
							Артур Восканян, директор и главный судья Чемпионата{" "}
							<br />
							{" "}
							<br />
							<Em>
								<br />
								Открытый Чемпионат России по покеру проводится при поддержке Ассоциации операторов индустрии развлечений и игорного бизнеса России (АИРИС) и Союза Участников Интеллектуальных Игр.
								<br />
								<br />
								Организатор Russian Poker Cup, Сочи — игорная зона «Красная Поляна». Место проведения – «Покерный клуб Сочи», «Казино Сочи». По адресу: с. Эсто-Садок, ул. Эстонская, 51.
							</Em>
							<br />
							{"\n\n"}
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