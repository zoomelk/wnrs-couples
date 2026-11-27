import { style } from "@vanilla-extract/css";

import { primaryAccent } from "../../styles/globals.css";

export const historyStyles = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "19rem",
  alignContent: "center",
  alignItems: "center",
  padding: "5px 0",
  justifySelf: "start",
});

export const historyTitleStyles = style({
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 20,
  fontWeight: "inherit",
  marginBottom:3,
});

export const cardContainerStyles = style({
  height: "100%",
  minHeight: "30rem",
  maxHeight: "30rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  margin: 10,
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
});

export const cardContainerScrollStyles = style({
width: "98%",
height: "auto",
flex: 1,
minHeight: 0,
margin: "4px auto",
  overflowY: "auto",
  overflowX: "hidden",
  padding: 12,
});
