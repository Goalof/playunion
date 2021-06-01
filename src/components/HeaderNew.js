import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Image, Link, Box, Section } from "@quarkly/widgets";
import MobileSide2 from "./MobileSide2";
const defaultProps = {
	"background": "#F8F8F8",
	"padding": "0px 0 0px 0",
	"position": "fixed",
	"z-index": "9"
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
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "70%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-start",
			"justify-content": "flex-start"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/home",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/6079f3c67c7120001f1ee287/images/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%A1%D0%BE%D1%8E%D0%B7_%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%98%D0%B3%D1%80_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.svg?v=2021-04-28T05:03:18.949Z",
			"width": "100%",
			"height": "auto",
			"max-height": "115px",
			"object-position": "0% 0%",
			"margin": "0px 0px 0px -7px",
			"padding": "0px 0px 0px 0px"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "75%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "30%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "none",
			"align-items": "center",
			"justify-content": "center",
			"children": <>
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
					href="#news"
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
			</>
		}
	},
	"mobileSide2": {
		"kind": "MobileSide2",
		"props": {
			"flex": "1 0 auto",
			"lg-position": "relative",
			"lg-z-index": "5",
			"lg-display": "flex",
			"lg-justify-content": "flex-end",
			"lg-align-items": "center",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"mobileSide2Override": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"display": "flex",
			"align-items": "center",
			"lg-position": "fixed",
			"lg-top": 0,
			"lg-left": 0,
			"lg-z-index": "1",
			"lg-width": "100%",
			"lg-height": "100%",
			"lg-background": "white",
			"lg-flex-direction": "column"
		}
	},
	"mobileSide2Override1": {
		"kind": "Override",
		"props": {
			"slot": "Button",
			"display": "none",
			"lg-display": "block",
			"lg-width": "44px",
			"lg-height": "28px",
			"lg-position": "relative",
			"lg-z-index": "6",
			"md-margin": "0px 0px 0px 0px"
		}
	},
	"mobileSide2Override2": {
		"kind": "Override",
		"props": {
			"slot": "Button Line",
			"lg-background": "black",
			"lg-min-height": "4px",
			"lg-position": "absolute"
		}
	},
	"mobileSide2Override3": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1",
			"lg-width": "44px",
			"lg-top": "0px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override4": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2",
			"lg-top": "12px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override5": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3",
			"lg-top": "24px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override6": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :closed",
			"lg-width": "44px"
		}
	},
	"mobileSide2Override7": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :closed",
			"lg-width": "32px"
		}
	},
	"mobileSide2Override8": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :closed",
			"lg-width": "20px"
		}
	},
	"mobileSide2Override9": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :open",
			"lg-opacity": "0",
			"lg-width": "32px"
		}
	},
	"mobileSide2Override10": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :open",
			"lg-width": "36px",
			"lg-transform": "translateY(12px) rotate(225deg)"
		}
	},
	"mobileSide2Override11": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :open",
			"lg-width": "36px",
			"lg-transform": "translateY(-12px) rotate(135deg)",
			"md-margin": "0px 0px 0px 0px"
		}
	},
	"mobileSide2Override12": {
		"kind": "Override",
		"props": {
			"slot": "Content :closed",
			"lg-opacity": "0",
			"lg-transition": "transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"lg-transform": "translateY(-100%)"
		}
	},
	"mobileSide2Override13": {
		"kind": "Override",
		"props": {
			"slot": "Content :open",
			"lg-transform": "translateY(0%)",
			"lg-transition": "transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"lg-opacity": "1"
		}
	},
	"mobileSide2Override14": {
		"kind": "Override",
		"props": {
			"slot": "Button :open",
			"lg-position": "fixed",
			"md-margin": "14px 0px 0px 0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"lg-flex-direction": "column",
			"lg-margin": "80px 0px 0px 0px",
			"lg-width": "100%",
			"children": <>
				<Link
					href="/home#about"
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
					href="/home#categories"
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
					href="/home#team"
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
					Состав Союза
				</Link>
				<Link
					href="/home#event"
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
					href="/home#partners"
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
			</>
		}
	}
};

const HeaderNew = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1280px" width="95%" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Link {...override("link")}>
					<Image {...override("image")} />
				</Link>
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Box {...override("box")} />
				{"   "}
				<MobileSide2 {...override("mobileSide2")}>
					<Override {...override("mobileSide2Override")} />
					<Override {...override("mobileSide2Override1")} />
					<Override {...override("mobileSide2Override2")} />
					<Override {...override("mobileSide2Override3")} />
					<Override {...override("mobileSide2Override4")} />
					<Override {...override("mobileSide2Override5")} />
					<Override {...override("mobileSide2Override6")} />
					<Override {...override("mobileSide2Override7")} />
					<Override {...override("mobileSide2Override8")} />
					<Override {...override("mobileSide2Override9")} />
					<Override {...override("mobileSide2Override10")} />
					<Override {...override("mobileSide2Override11")} />
					<Override {...override("mobileSide2Override12")} />
					<Override {...override("mobileSide2Override13")} />
					<Override {...override("mobileSide2Override14")} />
					<Box {...override("box1")} />
				</MobileSide2>
				{" "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(HeaderNew, { ...Section,
	defaultProps,
	overrides
});
export default HeaderNew;