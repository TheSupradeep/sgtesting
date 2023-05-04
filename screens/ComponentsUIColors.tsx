import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ComponentsUIColors = () => {
  return (
    <View style={styles.componentsUicolors}>
      <View style={[styles.bg, styles.bgLayout]} />
      <View style={[styles.bg1, styles.bgLayout]} />
      <Text style={[styles.styleColors, styles.colorsTypo]}>Style colors</Text>
      <View style={[styles.componentsUicolorsChild, styles.componentsLayout]} />
      <Text style={[styles.text, styles.textTypo]}>#151515</Text>
      <Text style={[styles.mainBlack, styles.mainBlackLayout]}>Main black</Text>
      <View style={styles.componentsUicolorsItem} />
      <Text style={[styles.ffffff, styles.ffffffTypo1]}>#FFFFFF</Text>
      <Text style={[styles.white, styles.greyTypo]}>White</Text>
      <View style={[styles.componentsUicolorsInner, styles.componentsLayout]} />
      <Text style={[styles.f0f0f0, styles.ffffffTypo1]}>#F0F0F0</Text>
      <Text style={[styles.grey, styles.greyTypo]}>Grey</Text>
      <Text style={[styles.borderColors, styles.colorsTypo]}>
        Border colors
      </Text>
      <View style={[styles.rectangleView, styles.componentsChildLayout]} />
      <Text style={[styles.f0f0f01, styles.ffffffTypo]}>#F0F0F0</Text>
      <Text style={[styles.borderHard, styles.mainBlackLayout]}>
        Border hard
      </Text>
      <View
        style={[styles.componentsUicolorsChild1, styles.componentsChildLayout]}
      />
      <Text style={[styles.ffffff1, styles.ffffffTypo]}>#FFFFFF</Text>
      <Text style={[styles.borderLight, styles.borderTypo]}>Border light</Text>
      <View
        style={[styles.componentsUicolorsChild2, styles.componentsChildLayout]}
      />
      <Text style={[styles.ffffff2, styles.ffffffTypo]}>#FFFFFF</Text>
      <Text style={[styles.borderWhite, styles.borderTypo]}>Border white</Text>
      <View style={styles.header}>
        <View style={styles.headerChild} />
        <Text style={[styles.uiColors, styles.uiColorsPosition]}>
          UI Colors
        </Text>
        <Text style={[styles.componentsStyleCo, styles.uiColorsPosition]}>
          Components: Style colors, Border colors
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    height: 80,
    width: 80,
    left: 550,
    backgroundColor: Color.whitesmoke,
    position: "absolute",
  },
  colorsTypo: {
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: 60,
    position: "absolute",
  },
  componentsLayout: {
    height: 60,
    width: 60,
    top: 292,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.abhayaLibreRegular,
    left: 136,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  mainBlackLayout: {
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  ffffffTypo1: {
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xs,
    top: 327,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  greyTypo: {
    top: 300,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  componentsChildLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 520,
    height: 60,
    width: 60,
    position: "absolute",
  },
  ffffffTypo: {
    top: 555,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  borderTypo: {
    top: 528,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  uiColorsPosition: {
    left: "6.67%",
    top: "50%",
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  bg: {
    top: 282,
  },
  bg1: {
    top: 510,
  },
  styleColors: {
    top: 224,
  },
  componentsUicolorsChild: {
    backgroundColor: Color.gray,
    left: 60,
  },
  text: {
    fontSize: FontSize.size_2xs,
    top: 327,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  mainBlack: {
    top: 299,
    fontFamily: FontFamily.abhayaLibreRegular,
    left: 136,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  componentsUicolorsItem: {
    left: 560,
    height: 60,
    width: 60,
    top: 292,
    position: "absolute",
    backgroundColor: Color.white,
  },
  ffffff: {
    left: 646,
  },
  white: {
    left: 646,
  },
  componentsUicolorsInner: {
    left: 310,
    backgroundColor: Color.whitesmoke,
  },
  f0f0f0: {
    left: 386,
  },
  grey: {
    left: 386,
  },
  borderColors: {
    top: 452,
  },
  rectangleView: {
    borderColor: "#151515",
    borderWidth: 1,
    borderStyle: "solid",
    top: 520,
    left: 60,
    backgroundColor: Color.whitesmoke,
  },
  f0f0f01: {
    left: 136,
    top: 555,
  },
  borderHard: {
    top: 527,
    fontFamily: FontFamily.abhayaLibreRegular,
    left: 136,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  componentsUicolorsChild1: {
    borderColor: "#151515",
    borderWidth: 1,
    borderStyle: "solid",
    top: 520,
    left: 310,
    backgroundColor: Color.white,
  },
  ffffff1: {
    left: 386,
  },
  borderLight: {
    left: 386,
  },
  componentsUicolorsChild2: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    top: 520,
    left: 560,
  },
  ffffff2: {
    left: 646,
  },
  borderWhite: {
    left: 646,
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.whitesmoke,
    position: "absolute",
    width: "100%",
  },
  uiColors: {
    marginTop: -58,
    fontSize: FontSize.size_41xl,
    letterSpacing: -3,
  },
  componentsStyleCo: {
    marginTop: 24,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  header: {
    top: 0,
    left: 0,
    width: 900,
    height: 164,
    position: "absolute",
    overflow: "hidden",
  },
  componentsUicolors: {
    flex: 1,
    height: 720,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ComponentsUIColors;
