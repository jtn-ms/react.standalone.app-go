import { Box, styled } from "@mui/material";

export const VBox = styled(Box)({
  display: "flex",
  flexDirection: "column"
});

export const HBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

export const HBoxCenter = styled(HBox)({
  alignItems: "center",
});

export const HBoxFlexEnd = styled(HBoxCenter)({
  justifyContent: "end",
});

export const HBoxAbsolute = styled(HBoxFlexEnd)({
  position: "absolute",
});