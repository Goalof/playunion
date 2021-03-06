import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {},
    "home": {},
    "marina-bludyan": {},
    "artur-voskanyan": {},
    "turnirnyj-poker": {},
    "news": {},
    "news/FW-Russia-poker-championship": {},
    "news/ert-sochi": {},
    "news/silnye-figuri-v-gelendgike": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
