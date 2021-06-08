import React from "react";
import { useOverrides, Override, StackItem, SocialMedia, Stack } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"background": "#000000",
	"padding": "5px 0 5px 0",
	"align-items": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"margin": "0px 0px 0px 0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"sm-width": "100%",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-start",
			"justify-content": "center",
			"padding": "0px 0px 0px 0px",
			"flex-direction": "column",
			"color": "#ffffff",
			"sm-align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "700 20px/130% --fontFamily-googleMontserrat",
			"color": "#ffffff",
			"margin": "0px 0px 0px 0px",
			"children": "18+"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "400 14px/130% --fontFamily-googleMontserrat",
			"margin": "16px 0px 0px 0px",
			"sm-text-align": "center",
			"children": "© 2021 Союз участников интеллектуальных игр"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"sm-width": "100%",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-end",
			"justify-content": "center",
			"padding": "0px 0px 0px 0px",
			"flex-direction": "column",
			"color": "#ffffff",
			"sm-align-items": "center"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "#ffffff",
			"background": "rgba(237, 242, 246, 0)"
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1280px" width="95%" />
		<Stack {...override("stack")}>
			{"        "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Text {...override("text")} />
				<Text {...override("text1")} />
				{"          "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<SocialMedia {...override("socialMedia")}>
					<Override {...override("socialMediaOverride")} />
				</SocialMedia>
				{"          "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;