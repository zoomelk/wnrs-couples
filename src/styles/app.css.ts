import { style, globalStyle } from "@vanilla-extract/css";
import { creditStyles } from "../components/credits/Credits.css";

import { primaryAccent, primaryAccentMuted } from "./globals.css";

export const appStyles = style({
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 26rem minmax(0, 1fr)",
  alignContent: "center",
  alignItems: "center",
  justifyItems: "center",
  fontWeight: 800,
  columnGap: 60,
  maxWidth: 1180,
  margin: "0 auto",
  minHeight: "100%",
padding: "56px 16px",

  "@media": {
    "screen and (max-width: 800px)": {
      display: "flex",
      flexDirection: "column",
      alignContent: "flex-start",
      paddingTop: 56,
      paddingBottom: 24,
    },
  },
});

export const titleStyles = style({
  color: primaryAccent,
  fontSize: 30,
  marginTop: "3vh",
  marginBottom: "3vh",
  fontWeight: 800,
});

export const levelsStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  width: "100%",
maxWidth: 231,
justifySelf: "end",

  "@media": {
    "screen and (max-width: 600px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
  },
});

export const levelButtonStyles = style({
  display: "flex",
  flexDirection: "column",
gap: 4,
  alignItems: "center",
  justifyContent: "center",
  margin: "15px 0",
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "#fff",
  height: 88,
  width: "100%",
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 18,
  fontFamily: "inherit",
  cursor: "pointer",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },
  selectors: {
    "&:focus, &:active": {
      outline: "none",
    },
  },

  "@media": {
    "screen and (max-width: 600px)": {
      margin: 6,
      height: 60,
      width: "28%",
      minWidth: 96,
      fontSize: 13,
      padding: "0 4px",
    },
  },
});

export const selectedLevelStyles = style({
  backgroundColor: primaryAccent,
  color: "#fff",
  outline: "none", 
});

export const nextCardButtonStlyes = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 25,
  borderRadius: 15,
  backgroundColor: ["#fff", primaryAccent],
  height: 88,
  width: 231,
  textTransform: "uppercase",
  color: "#fff",
  outline: "none",
  fontSize: 18,
  border: "none",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },

  "@media": {
    "screen and (max-width: 600px)": {
      margin: "12px auto",
      height: 60,
      width: "80%",
    },
  },
});

export const questionStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "26rem",
  textTransform: "uppercase",
  alignItems: "center",

  "@media": {
    "screen and (max-width: 600px)": {
      width: "100%",
      maxWidth: "26rem",
    },
  },
});

globalStyle(`.${appStyles} > :not(h1):not(a):not(.${creditStyles})`, {
  "@media": {
    "screen and (min-width: 801px)": {
      transform: "translateX(-15px)",
    },
  },
});