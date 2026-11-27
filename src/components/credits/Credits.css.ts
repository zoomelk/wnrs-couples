import { style } from "@vanilla-extract/css";

import { primaryAccent } from "../../styles/globals.css";

export const creditStyles = style({
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: "0.2px",
  backgroundColor: "#fff",
  height: "auto",
  textAlign: "left",
  maxHeight: 17,
  width: 290,
  padding: 0,
  top: 30,
  left: 40,
  paddingLeft: 10,
  borderLeft: `1px solid ${primaryAccent}`,
  zIndex: 10,
  position: "fixed",
  overflow: "hidden",
  transition: "max-height 1.2s ease-in-out",

  ":hover": {
    height: "auto",
    maxHeight: 1000,
    transition: "max-height 1.2s ease-in-out",
  },
});

export const creditTitleStyles = style({
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: "0.5px",
    lineHeight: "17px",

      ":hover": {
    color: primaryAccent,
  },
});

export const contStyles = style({
  paddingTop: 10,
    paddingBottom: 0,
//  borderTop: "1px solid #eee",
});

export const replayStyles = style({
  fontSize: 12,
  height: 17,
  backgroundColor: "#fff",
  position: "fixed",
  top: 30,
  right: 40,
  paddingRight: 10,
  borderRight: `1px solid ${primaryAccent}`,
  zIndex: 10,
  color: "#000",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 5,
  cursor: "pointer",

  ":hover": {
    color: primaryAccent,
  },
});

export const noteButtonStyles = style({
  display: "block",
  background: "none",
  border: "none",
  padding: 0,
  fontSize: "inherit",
  textAlign: "left",
  color: "#000",
  cursor: "pointer",

  selectors: {
    '&[data-highlighted="true"]': {
      color: primaryAccent,
    },
  },

  "@media": {
    "(hover: hover)": {
      ":hover": {
        color: primaryAccent,
      },
    },
  },
});