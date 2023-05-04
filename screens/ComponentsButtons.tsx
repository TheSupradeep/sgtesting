import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ComponentsButtons = () => {
  return (
    <View style={styles.componentsButtons}>
      <Image
        style={[styles.bgIcon, styles.bgIconPosition]}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
      <Text style={[styles.darkButtons, styles.buttonsTypo]}>Dark Buttons</Text>
      <Text style={[styles.normal, styles.normalTypo]}>NORMAL</Text>
      <Text style={[styles.hoverPressed, styles.normalTypo]}>
        HOVER / PRESSED
      </Text>
      <Text style={[styles.disabled, styles.normalTypo]}>DISABLED</Text>
      <Text style={[styles.normal1, styles.normalTypo]}>NORMAL</Text>
      <Text style={[styles.whiteButtons, styles.buttonsTypo]}>
        White Buttons
      </Text>
      <Text style={[styles.hoverPressed1, styles.normalTypo]}>
        HOVER / PRESSED
      </Text>
      <Text style={[styles.disabled1, styles.normalTypo]}>DISABLED</Text>
      <View
        style={[
          styles.buttonblackbuttonBlackNorm,
          styles.buttonblackbuttonBlackNormLayout,
        ]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-4.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[
          styles.buttonblackbuttonBlackHove,
          styles.buttongreybuttonGreyHoverPosition,
        ]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.signUp1, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View style={[styles.buttonblackbuttonBlackDis, styles.disPosition]}>
        <View style={[styles.buttonBlackDis, styles.buttonPosition]}>
          <Image
            style={[styles.buttonBlackDisChild, styles.buttonChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-42.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[
          styles.buttongreybuttonGreyNormal,
          styles.buttonblackbuttonBlackNormLayout,
        ]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-43.png")}
          />
          <Text style={[styles.signUp1, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[
          styles.buttongreybuttonGreyHover,
          styles.buttongreybuttonGreyHoverPosition,
        ]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.signUp1, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View style={[styles.buttongreybuttonGreyDis, styles.disPosition]}>
        <View style={[styles.buttonBlackDis, styles.buttonPosition]}>
          <Image
            style={[styles.buttonBlackDisChild, styles.buttonChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-42.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.buttonwhiteFullbuttonWhite, styles.buttonwhitePosition2]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.signUp1, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[
          styles.buttonwhiteFullbuttonWhite1,
          styles.buttonwhitePosition1,
        ]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-44.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.buttonwhiteFullbuttonWhite2, styles.buttonwhitePosition]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={[styles.buttonBlackDisItem, styles.buttonChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-45.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.buttonwhiteLinebuttonWhite, styles.buttonwhitePosition2]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-44.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[
          styles.buttonwhiteLinebuttonWhite1,
          styles.buttonwhitePosition1,
        ]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={styles.buttonChildPosition}
            resizeMode="cover"
            source={require("../assets/rectangle-44.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.buttonwhiteLinebuttonWhite2, styles.buttonwhitePosition]}
      >
        <View style={[styles.buttonBlack, styles.buttonPosition]}>
          <Image
            style={[styles.buttonBlackDisItem, styles.buttonChildPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-45.png")}
          />
          <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
        </View>
      </View>
      <View style={[styles.header, styles.bgIconPosition]}>
        <View style={[styles.headerChild, styles.buttonPosition]} />
        <Text style={[styles.buttons, styles.buttonsPosition]}>Buttons</Text>
        <Text style={[styles.componentsSimpleB, styles.buttonsPosition]}>
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
  buttonsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: 60,
    position: "absolute",
  },
  normalTypo: {
    fontFamily: FontFamily.abhayaLibreRegular,
    left: 550,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  buttonblackbuttonBlackNormLayout: {
    height: 52,
    width: 145,
    top: 313,
    position: "absolute",
  },
  buttonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  signPosition: {
    textAlign: "center",
    left: "50%",
    top: 14,
    marginLeft: -29.5,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  buttongreybuttonGreyHoverPosition: {
    top: 425,
    height: 52,
    width: 145,
    position: "absolute",
  },
  disPosition: {
    top: 537,
    height: 52,
    width: 145,
    position: "absolute",
  },
  buttonChildPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  buttonwhitePosition2: {
    top: 817,
    height: 52,
    width: 145,
    position: "absolute",
  },
  buttonwhitePosition1: {
    top: 929,
    height: 52,
    width: 145,
    position: "absolute",
  },
  buttonwhitePosition: {
    top: 1041,
    height: 52,
    width: 145,
    position: "absolute",
  },
  buttonsPosition: {
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
  darkButtons: {
    top: 228,
    color: Color.gray,
  },
  normal: {
    top: 326,
    color: Color.gray,
  },
  hoverPressed: {
    top: 438,
    color: Color.gray,
  },
  disabled: {
    top: 550,
    color: Color.gray,
  },
  normal1: {
    top: 831,
    color: Color.white,
  },
  whiteButtons: {
    top: 729,
    color: Color.white,
  },
  hoverPressed1: {
    top: 943,
    color: Color.white,
  },
  disabled1: {
    top: 1055,
    color: Color.white,
  },
  signUp: {
    color: Color.white,
  },
  buttonBlack: {
    overflow: "hidden",
  },
  buttonblackbuttonBlackNorm: {
    left: 60,
  },
  signUp1: {
    color: Color.gray,
  },
  buttonblackbuttonBlackHove: {
    left: 60,
  },
  buttonBlackDisChild: {
    opacity: 0.2,
  },
  buttonBlackDis: {
    opacity: 0.3,
    overflow: "hidden",
  },
  buttonblackbuttonBlackDis: {
    left: 60,
  },
  buttongreybuttonGreyNormal: {
    left: 305,
  },
  buttongreybuttonGreyHover: {
    left: 305,
  },
  buttongreybuttonGreyDis: {
    left: 305,
  },
  buttonwhiteFullbuttonWhite: {
    left: 60,
  },
  buttonwhiteFullbuttonWhite1: {
    left: 60,
  },
  buttonBlackDisItem: {
    opacity: 0.1,
  },
  buttonwhiteFullbuttonWhite2: {
    left: 60,
  },
  buttonwhiteLinebuttonWhite: {
    left: 305,
  },
  buttonwhiteLinebuttonWhite1: {
    left: 305,
  },
  buttonwhiteLinebuttonWhite2: {
    left: 305,
  },
  headerChild: {
    backgroundColor: Color.whitesmoke,
  },
  buttons: {
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
  componentsButtons: {
    backgroundColor: Color.white,
    flex: 1,
    height: 1190,
    overflow: "hidden",
    width: "100%",
  },
});

export default ComponentsButtons;
