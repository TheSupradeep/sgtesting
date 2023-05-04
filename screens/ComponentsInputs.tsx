import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ComponentsInputs = () => {
  return (
    <View style={styles.componentsInputs}>
      <Image
        style={[styles.bgIcon, styles.bgIconPosition]}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
      <Text style={[styles.darkInputs, styles.inputsTypo]}>Dark Inputs</Text>
      <Text style={[styles.normal, styles.normalTypo]}>NORMAL</Text>
      <Text style={[styles.hoverPressed, styles.normalTypo]}>
        HOVER / PRESSED
      </Text>
      <Text style={[styles.whiteInputs, styles.inputsTypo]}>White Inputs</Text>
      <Text style={[styles.normal1, styles.normal1Typo]}>NORMAL</Text>
      <Text style={[styles.hoverPressed1, styles.normal1Typo]}>
        HOVER / PRESSED
      </Text>
      <Text style={[styles.disabled, styles.normal1Typo]}>DISABLED</Text>
      <View
        style={[
          styles.inputwhiteinputWhiteNormal,
          styles.inputwhiteinputLayout,
        ]}
      >
        <View style={styles.headerChildPosition}>
          <View style={[styles.vectorParent, styles.headerChildPosition]}>
            <Image
              style={[styles.frameChild, styles.frameChildPosition2]}
              resizeMode="cover"
              source={require("../assets/rectangle-46.png")}
            />
            <Text style={styles.enterYourEmail}>Enter your email</Text>
            <View style={styles.framePosition} />
            <Text style={[styles.subcribe, styles.subcribePosition]}>
              Subcribe
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.inputwhiteinputWhiteHover, styles.inputwhiteinputLayout]}
      >
        <View style={styles.headerChildPosition}>
          <View style={[styles.vectorParent, styles.headerChildPosition]}>
            <Image
              style={[styles.frameInner, styles.frameChildPosition2]}
              resizeMode="cover"
              source={require("../assets/rectangle-47.png")}
            />
            <Text style={styles.enterYourEmail}>Enter your email</Text>
            <View style={styles.rectangleView} />
            <Text style={[styles.subcribe1, styles.subcribePosition]}>
              Subcribe
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.inputwhiteinputWhiteDis, styles.inputwhiteinputLayout]}
      >
        <View style={styles.headerChildPosition}>
          <View style={[styles.vectorParent, styles.headerChildPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.frameChildPosition2]}
              resizeMode="cover"
              source={require("../assets/rectangle-48.png")}
            />
            <Text style={[styles.enterYourEmail2, styles.enterPosition]}>
              Enter your email
            </Text>
            <View style={[styles.frameChild1, styles.framePosition]} />
            <Text style={[styles.subcribe1, styles.subcribePosition]}>
              Subcribe
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.inputblackinputBlackNormal,
          styles.inputblackinputLayout,
        ]}
      >
        <View style={[styles.vectorParent, styles.headerChildPosition]}>
          <Image
            style={styles.frameChildPosition1}
            resizeMode="cover"
            source={require("../assets/rectangle-49.png")}
          />
          <Text style={[styles.enterYourEmail3, styles.enterPosition]}>
            Enter your email
          </Text>
          <View style={styles.frameChildPosition} />
          <Text style={[styles.getStarted, styles.getPosition]}>
            Get started
          </Text>
        </View>
      </View>
      <View
        style={[styles.inputblackinputBlackHover, styles.inputblackinputLayout]}
      >
        <View style={[styles.vectorParent, styles.headerChildPosition]}>
          <Image
            style={[styles.frameChild4, styles.frameChildPosition2]}
            resizeMode="cover"
            source={require("../assets/rectangle-410.png")}
          />
          <Text style={[styles.enterYourEmail3, styles.enterPosition]}>
            Enter your email
          </Text>
          <View style={styles.frameChild5} />
          <Text style={[styles.getStarted1, styles.getPosition]}>
            Get started
          </Text>
        </View>
      </View>
      <View
        style={[styles.inputblackinputBlackDis, styles.inputblackinputLayout]}
      >
        <View style={[styles.vectorParent, styles.headerChildPosition]}>
          <Image
            style={[styles.frameChild6, styles.frameChildPosition1]}
            resizeMode="cover"
            source={require("../assets/rectangle-411.png")}
          />
          <Text style={[styles.enterYourEmail5, styles.enterPosition]}>
            Enter your email
          </Text>
          <View style={[styles.frameChild7, styles.frameChildPosition]} />
          <Text style={[styles.getStarted, styles.getPosition]}>
            Get started
          </Text>
        </View>
      </View>
      <Text style={[styles.disabled1, styles.normalTypo]}>DISABLED</Text>
      <View style={[styles.header, styles.bgIconPosition]}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <Text style={[styles.inputs, styles.inputsPosition]}>Inputs</Text>
        <Text style={[styles.componentsSimpleB, styles.inputsPosition]}>
          Components: Simple buttons, Combined buttons, Simple buttons
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIconPosition: {
    width: 900,
    left: 0,
    position: "absolute",
  },
  inputsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: 60,
    position: "absolute",
  },
  normalTypo: {
    fontFamily: FontFamily.abhayaLibreRegular,
    left: 638,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  normal1Typo: {
    left: 616,
    color: Color.white,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  inputwhiteinputLayout: {
    height: 52,
    width: 456,
    left: 60,
    position: "absolute",
  },
  headerChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frameChildPosition2: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  subcribePosition: {
    textAlign: "center",
    left: "50%",
    marginLeft: 107,
    top: 13,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  enterPosition: {
    top: 13,
    left: 20,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  framePosition: {
    left: "61.4%",
    width: "38.6%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  inputblackinputLayout: {
    width: 478,
    height: 52,
    left: 60,
    position: "absolute",
  },
  getPosition: {
    marginLeft: 98.5,
    textAlign: "center",
    left: "50%",
    top: 13,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  frameChildPosition1: {
    right: "41.42%",
    width: "58.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChildPosition: {
    backgroundColor: Color.gray,
    left: "58.58%",
    width: "41.42%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  inputsPosition: {
    left: "6.67%",
    top: "50%",
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    color: Color.gray,
    position: "absolute",
  },
  bgIcon: {
    top: 669,
    height: 520,
  },
  darkInputs: {
    top: 228,
    color: Color.gray,
  },
  normal: {
    top: 329,
  },
  hoverPressed: {
    top: 441,
  },
  whiteInputs: {
    top: 729,
    color: Color.white,
  },
  normal1: {
    top: 832,
  },
  hoverPressed1: {
    top: 942,
  },
  disabled: {
    top: 1054,
  },
  frameChild: {
    right: "38.6%",
    width: "61.4%",
    maxWidth: "100%",
  },
  enterYourEmail: {
    top: 16,
    left: 20,
    color: Color.white,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  subcribe: {
    color: Color.gray,
  },
  vectorParent: {
    overflow: "hidden",
  },
  inputwhiteinputWhiteNormal: {
    top: 817,
  },
  frameInner: {
    width: "61.62%",
    right: "38.38%",
  },
  rectangleView: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    left: "61.4%",
    width: "38.6%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  subcribe1: {
    color: Color.white,
  },
  inputwhiteinputWhiteHover: {
    top: 929,
  },
  rectangleIcon: {
    opacity: 0.1,
    right: "38.6%",
    width: "61.4%",
    maxWidth: "100%",
  },
  enterYourEmail2: {
    color: Color.white,
  },
  frameChild1: {
    opacity: 0.1,
  },
  inputwhiteinputWhiteDis: {
    top: 1041,
  },
  enterYourEmail3: {
    color: Color.gray,
  },
  getStarted: {
    color: Color.white,
  },
  inputblackinputBlackNormal: {
    top: 316,
  },
  frameChild4: {
    width: "58.79%",
    right: "41.21%",
  },
  frameChild5: {
    borderColor: "#151515",
    left: "58.58%",
    width: "41.42%",
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  getStarted1: {
    color: Color.gray,
  },
  inputblackinputBlackHover: {
    top: 428,
  },
  frameChild6: {
    opacity: 0.1,
  },
  enterYourEmail5: {
    opacity: 0.1,
    color: Color.gray,
  },
  frameChild7: {
    opacity: 0.1,
  },
  inputblackinputBlackDis: {
    top: 540,
  },
  disabled1: {
    top: 553,
  },
  headerChild: {
    backgroundColor: Color.whitesmoke,
  },
  inputs: {
    marginTop: -58,
    fontSize: FontSize.size_41xl,
    letterSpacing: -3,
  },
  componentsSimpleB: {
    marginTop: 24,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    left: "6.67%",
    top: "50%",
  },
  header: {
    top: 0,
    height: 164,
    overflow: "hidden",
  },
  componentsInputs: {
    flex: 1,
    height: 1190,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ComponentsInputs;
