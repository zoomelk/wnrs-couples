import { style } from "@vanilla-extract/css";

import { primaryAccent, primaryAccentMuted } from "./globals.css";

export const appStyles = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  fontWeight: 800,
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  maxWidth: 1080,
  margin: "0 auto",
  height: "100%",

  "@media": {
    "screen and (max-width: 600px)": {
      flexDirection: "column",
      flexWrap: "nowrap",
      alignContent: "flex-start",
      height: "auto",
      minHeight: "100%",
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
  width: "17rem",

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
  alignItems: "center",
  justifyContent: "center",
  margin: 15,
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "#fff",
  height: 88,
  width: 231,
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 18,
  fontWeight: 800,
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
  fontWeight: 800,
  fontFamily: '"Biryani", sans-serif',
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
