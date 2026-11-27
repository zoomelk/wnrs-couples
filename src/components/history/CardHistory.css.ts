
import { style } from "@vanilla-extract/css";

import { primaryAccent } from "../../styles/globals.css";

export const historyStyles = style({
  gridArea: "history",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  alignItems: "center",
  padding: 0,
});

export const historyTitleStyles = style({
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 20,
  fontWeight: "inherit",
  marginBottom: 8,
});

export const cardContainerStyles = style({
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  margin: 0,
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
});

export const cardContainerScrollStyles = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 12,
  width: "100%",
  minHeight: 216,
  overflowX: "auto",
  overflowY: "hidden",
  padding: 16,
});
