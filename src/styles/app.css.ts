
import { style } from "@vanilla-extract/css";

import { primaryAccent, primaryAccentMuted } from "./globals.css";

export const appStyles = style({
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 26rem) minmax(0, 1fr)",
  gridTemplateAreas: `
    "anniversary anniversary anniversary"
    "gameTitle gameTitle gameTitle"
    "levels question next"
    "history history history"
  `,
  alignContent: "center",
  alignItems: "center",
  justifyItems: "center",
  columnGap: "clamp(16px, 3vw, 32px)",
  rowGap: 16,
  fontWeight: 800,
  maxWidth: 1080,
  width: "100%",
  margin: "0 auto",
  minHeight: "100%",
  padding: "56px 24px 24px",

  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "minmax(0, 1fr)",
      gridTemplateAreas: `
        "anniversary"
        "gameTitle"
        "levels"
        "question"
        "next"
        "history"
      `,
      alignContent: "start",
      padding: "56px 16px 24px",
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
  gridArea: "levels",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: 231,
  gap: 18,

  "@media": {
    "screen and (max-width: 800px)": {
      flexDirection: "row",
      maxWidth: "26rem",
      gap: 8,
    },
  },
});

export const levelButtonStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
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
    "screen and (max-width: 800px)": {
      height: 60,
      width: "auto",
      flex: "1 1 0",
      minWidth: 0,
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
  gridArea: "next",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  borderRadius: 15,
  backgroundColor: ["#fff", primaryAccent],
  height: 88,
  width: "100%",
  maxWidth: 231,
  textTransform: "uppercase",
  color: "#fff",
  outline: "none",
  fontSize: 18,
  border: "none",
  cursor: "pointer",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },

  "@media": {
    "screen and (max-width: 800px)": {
      height: 60,
      width: "80%",
    },
  },
});

export const questionStyles = style({
  gridArea: "question",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  maxWidth: "26rem",
  minWidth: 0,
  textTransform: "uppercase",
  alignItems: "center",
});
