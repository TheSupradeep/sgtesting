import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ComponentsTypography = () => {
  return (
    <View style={styles.componentsTypography}>
      <View style={[styles.bg, styles.bgPosition]} />
      <Text style={[styles.headerH2L, styles.headerFlexBox2]}>Header H2 L</Text>
      <Text style={[styles.descriptionH3L, styles.descriptionLayout]}>
        Description H3 L
      </Text>
      <Text style={[styles.headerH3L, styles.headerTypo1]}>Header H3 L</Text>
      <Text style={[styles.descriptionH4L, styles.descriptionPosition11]}>
        Description H4 L
      </Text>
      <Text style={[styles.sampleH3L, styles.sampleTypo3]}>Sample H3 L</Text>
      <Text style={[styles.sampleH1L, styles.sampleTypo2]}>Sample H1 L</Text>
      <Text style={[styles.descriptionH1L, styles.descriptionTypo]}>
        Description H1 L
      </Text>
      <Text style={[styles.headerH1L, styles.headerTypo]}>Header H1 L</Text>
      <Text style={[styles.sampleH2L, styles.sampleTypo1]}>Sample H2 L</Text>
      <Text style={[styles.descriptionForText, styles.descriptionPosition10]}>
        Description for text H2 L
      </Text>
      <Text style={[styles.headerH2C, styles.headerFlexBox1]}>Header H2 C</Text>
      <Text style={[styles.descriptionH3C, styles.descriptionPosition9]}>
        Description H3 C
      </Text>
      <Text style={[styles.headerH3C, styles.headerPosition6]}>
        Header H3 C
      </Text>
      <Text style={[styles.descriptionH4C, styles.descriptionPosition9]}>
        Description H4 C
      </Text>
      <Text style={[styles.sampleH3C, styles.samplePosition7]}>
        Sample H3 C
      </Text>
      <Text style={[styles.sampleH1C, styles.samplePosition6]}>
        Sample H1 C
      </Text>
      <Text style={[styles.descriptionH1C, styles.descriptionPosition8]}>
        Description H1 C
      </Text>
      <Text style={[styles.headerH1C, styles.headerPosition5]}>
        Header H1 C
      </Text>
      <Text style={[styles.sampleH2C, styles.samplePosition5]}>
        Sample H2 C
      </Text>
      <Text style={[styles.descriptionForText1, styles.descriptionPosition7]}>
        Description for text H2 C
      </Text>
      <Text style={[styles.headerH2R, styles.headerFlexBox]}>Header H2 R</Text>
      <Text style={[styles.descriptionH3R, styles.descriptionPosition6]}>
        Description H3 R
      </Text>
      <Text style={[styles.headerH3R, styles.headerPosition4]}>
        Header H3 R
      </Text>
      <Text style={[styles.descriptionH4R, styles.descriptionPosition6]}>
        Description H4 R
      </Text>
      <Text style={[styles.sampleH3R, styles.samplePosition4]}>
        Sample H3 R
      </Text>
      <Text style={[styles.sampleH1R, styles.samplePosition3]}>
        Sample H1 R
      </Text>
      <Text style={[styles.descriptionH1R, styles.descriptionPosition5]}>
        Description H1 R
      </Text>
      <Text style={[styles.headerH1R, styles.headerPosition3]}>
        Header H1 R
      </Text>
      <Text style={[styles.sampleH2R, styles.samplePosition2]}>
        Sample H2 R
      </Text>
      <Text style={[styles.descriptionForText2, styles.descriptionPosition4]}>
        Description for text H2 R
      </Text>
      <Text style={[styles.headerH2L1, styles.headerClr]}>Header H2 L</Text>
      <Text style={[styles.descriptionH3L1, styles.descriptionPosition3]}>
        Description H3 L
      </Text>
      <Text style={[styles.headerH3L1, styles.headerPosition1]}>
        Header H3 L
      </Text>
      <Text style={[styles.descriptionH4L1, styles.descriptionPosition2]}>
        Description H4 L
      </Text>
      <Text style={[styles.sampleH3L1, styles.sampleTypo]}>Sample H3 L</Text>
      <Text style={[styles.sampleH1L1, styles.samplePosition1]}>
        Sample H1 L
      </Text>
      <Text style={[styles.descriptionH1L1, styles.descriptionPosition1]}>
        Description H1 L
      </Text>
      <Text style={[styles.headerH1L1, styles.headerPosition]}>
        Header H1 L
      </Text>
      <Text style={[styles.sampleH2L1, styles.samplePosition]}>
        Sample H2 L
      </Text>
      <Text style={[styles.descriptionForText3, styles.descriptionPosition]}>
        Description for text H2 L
      </Text>
      <Text style={[styles.headerH2C1, styles.headerClr]}>Header H2 C</Text>
      <Text style={[styles.descriptionH3C1, styles.headerClr]}>
        Description H3 C
      </Text>
      <Text style={[styles.headerH3C1, styles.headerPosition1]}>
        Header H3 C
      </Text>
      <Text style={[styles.descriptionH4C1, styles.descriptionPosition2]}>
        Description H4 C
      </Text>
      <Text style={[styles.sampleH3C1, styles.sampleTypo]}>Sample H3 C</Text>
      <Text style={[styles.sampleH1C1, styles.samplePosition1]}>
        Sample H1 C
      </Text>
      <Text style={[styles.descriptionH1C1, styles.descriptionPosition1]}>
        Description H1 C
      </Text>
      <Text style={[styles.headerH1C1, styles.headerPosition]}>
        Header H1 C
      </Text>
      <Text style={[styles.sampleH2C1, styles.samplePosition]}>
        Sample H2 C
      </Text>
      <Text style={[styles.descriptionForText4, styles.descriptionPosition]}>
        Description for text H2 C
      </Text>
      <Text style={[styles.headerH2R1, styles.headerClr]}>Header H2 R</Text>
      <Text style={[styles.descriptionH3R1, styles.descriptionPosition3]}>
        Description H3 R
      </Text>
      <Text style={[styles.headerH3R1, styles.headerPosition1]}>
        Header H3 R
      </Text>
      <Text style={[styles.descriptionH4R1, styles.descriptionPosition2]}>
        Description H4 R
      </Text>
      <Text style={[styles.sampleH3R1, styles.sampleTypo]}>Sample H3 R</Text>
      <Text style={[styles.sampleH1R1, styles.samplePosition1]}>
        Sample H1 R
      </Text>
      <Text style={[styles.descriptionH1R1, styles.descriptionPosition1]}>
        Description H1 R
      </Text>
      <Text style={[styles.headerH1R1, styles.headerPosition]}>
        Header H1 R
      </Text>
      <Text style={[styles.sampleH2R1, styles.samplePosition]}>
        Sample H2 R
      </Text>
      <Text style={[styles.descriptionForText5, styles.descriptionPosition]}>
        Description for text H2 R
      </Text>
      <View style={[styles.header, styles.bgPosition]}>
        <View style={styles.headerChild} />
        <Text style={[styles.typography, styles.typographyPosition]}>
          Typography
        </Text>
        <Text style={[styles.componentsHeading, styles.typographyPosition]}>
          Components: Heading, Sample, Description
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    width: 1740,
    left: 0,
    position: "absolute",
  },
  headerFlexBox2: {
    textAlign: "left",
    left: 80,
  },
  descriptionLayout: {
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  headerTypo1: {
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
  },
  descriptionPosition11: {
    top: 1190,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  sampleTypo3: {
    fontFamily: FontFamily.abrilFatfaceRegular,
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    top: 846,
    lineHeight: 26,
    color: Color.gray,
    position: "absolute",
  },
  sampleTypo2: {
    letterSpacing: -1,
    fontSize: FontSize.size_9xl,
    top: 666,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionTypo: {
    fontSize: FontSize.size_2xl,
    top: 932,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerTypo: {
    fontSize: FontSize.size_61xl,
    top: 244,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
    letterSpacing: -4,
    position: "absolute",
  },
  sampleTypo1: {
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: 758,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
    position: "absolute",
  },
  descriptionPosition10: {
    top: 1016,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerFlexBox1: {
    textAlign: "center",
    left: 690,
  },
  descriptionPosition9: {
    left: 787,
    textAlign: "center",
  },
  headerPosition6: {
    left: 710,
    textAlign: "center",
  },
  samplePosition7: {
    left: 806,
    textAlign: "center",
  },
  samplePosition6: {
    left: 785,
    textAlign: "center",
  },
  descriptionPosition8: {
    left: 778,
    textAlign: "center",
  },
  headerPosition5: {
    left: 645,
    textAlign: "center",
  },
  samplePosition5: {
    left: 792,
    textAlign: "center",
  },
  descriptionPosition7: {
    left: 750,
    textAlign: "center",
  },
  headerFlexBox: {
    textAlign: "right",
    left: 1311,
  },
  descriptionPosition6: {
    left: 1505,
    textAlign: "right",
  },
  headerPosition4: {
    left: 1351,
    textAlign: "right",
  },
  samplePosition4: {
    left: 1542,
    textAlign: "right",
  },
  samplePosition3: {
    left: 1500,
    textAlign: "right",
  },
  descriptionPosition5: {
    left: 1486,
    textAlign: "right",
  },
  headerPosition3: {
    left: 1218,
    textAlign: "right",
  },
  samplePosition2: {
    left: 1514,
    textAlign: "right",
  },
  descriptionPosition4: {
    left: 1430,
    textAlign: "right",
  },
  headerClr: {
    color: Color.white,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionPosition3: {
    top: 2236,
    color: Color.white,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerPosition1: {
    top: 1668,
    color: Color.white,
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionPosition2: {
    top: 2322,
    color: Color.white,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  sampleTypo: {
    top: 1978,
    color: Color.white,
    fontFamily: FontFamily.abrilFatfaceRegular,
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    lineHeight: 26,
    position: "absolute",
  },
  samplePosition1: {
    top: 1798,
    color: Color.white,
    letterSpacing: -1,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionPosition1: {
    top: 2064,
    color: Color.white,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerPosition: {
    top: 1376,
    color: Color.white,
    fontSize: FontSize.size_61xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
    letterSpacing: -4,
    position: "absolute",
  },
  samplePosition: {
    top: 1890,
    color: Color.white,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  descriptionPosition: {
    top: 2148,
    color: Color.white,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  typographyPosition: {
    left: "3.45%",
    top: "50%",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  bg: {
    top: 1296,
    backgroundColor: Color.gray,
    height: 1132,
  },
  headerH2L: {
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
    lineHeight: 80,
    letterSpacing: -4,
    fontSize: FontSize.size_51xl,
    top: 396,
  },
  descriptionH3L: {
    top: 1104,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
    textAlign: "left",
    left: 80,
  },
  headerH3L: {
    top: 536,
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
    textAlign: "left",
    left: 80,
  },
  descriptionH4L: {
    textAlign: "left",
    left: 80,
  },
  sampleH3L: {
    textAlign: "left",
    left: 80,
  },
  sampleH1L: {
    textAlign: "left",
    left: 80,
  },
  descriptionH1L: {
    textAlign: "left",
    left: 80,
  },
  headerH1L: {
    textAlign: "left",
    left: 80,
  },
  sampleH2L: {
    textAlign: "left",
    left: 80,
  },
  descriptionForText: {
    textAlign: "left",
    left: 80,
  },
  headerH2C: {
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
    lineHeight: 80,
    letterSpacing: -4,
    fontSize: FontSize.size_51xl,
    top: 396,
  },
  descriptionH3C: {
    top: 1105,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerH3C: {
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
    top: 536,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionH4C: {
    top: 1190,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  sampleH3C: {
    fontFamily: FontFamily.abrilFatfaceRegular,
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    top: 846,
    lineHeight: 26,
    color: Color.gray,
    position: "absolute",
  },
  sampleH1C: {
    letterSpacing: -1,
    fontSize: FontSize.size_9xl,
    top: 666,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionH1C: {
    fontSize: FontSize.size_2xl,
    top: 932,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerH1C: {
    fontSize: FontSize.size_61xl,
    top: 244,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
    letterSpacing: -4,
    position: "absolute",
  },
  sampleH2C: {
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: 758,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
    position: "absolute",
  },
  descriptionForText1: {
    top: 1016,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerH2R: {
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
    lineHeight: 80,
    letterSpacing: -4,
    fontSize: FontSize.size_51xl,
    top: 396,
  },
  descriptionH3R: {
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    top: 1104,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerH3R: {
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
    top: 536,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionH4R: {
    top: 1190,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  sampleH3R: {
    fontFamily: FontFamily.abrilFatfaceRegular,
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    top: 846,
    lineHeight: 26,
    color: Color.gray,
    position: "absolute",
  },
  sampleH1R: {
    letterSpacing: -1,
    fontSize: FontSize.size_9xl,
    top: 666,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  descriptionH1R: {
    fontSize: FontSize.size_2xl,
    top: 932,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerH1R: {
    fontSize: FontSize.size_61xl,
    top: 244,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
    letterSpacing: -4,
    position: "absolute",
  },
  sampleH2R: {
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: 758,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
    position: "absolute",
  },
  descriptionForText2: {
    top: 1016,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    position: "absolute",
  },
  headerH2L1: {
    top: 1528,
    color: Color.white,
    lineHeight: 80,
    letterSpacing: -4,
    fontSize: FontSize.size_51xl,
    textAlign: "left",
    left: 80,
  },
  descriptionH3L1: {
    textAlign: "left",
    left: 80,
  },
  headerH3L1: {
    textAlign: "left",
    left: 80,
  },
  descriptionH4L1: {
    textAlign: "left",
    left: 80,
  },
  sampleH3L1: {
    textAlign: "left",
    left: 80,
  },
  sampleH1L1: {
    textAlign: "left",
    left: 80,
  },
  descriptionH1L1: {
    textAlign: "left",
    left: 80,
  },
  headerH1L1: {
    textAlign: "left",
    left: 80,
  },
  sampleH2L1: {
    textAlign: "left",
    left: 80,
  },
  descriptionForText3: {
    textAlign: "left",
    left: 80,
  },
  headerH2C1: {
    top: 1528,
    color: Color.white,
    lineHeight: 80,
    letterSpacing: -4,
    fontSize: FontSize.size_51xl,
    textAlign: "center",
    left: 690,
  },
  descriptionH3C1: {
    top: 2237,
    left: 787,
    textAlign: "center",
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  headerH3C1: {
    left: 710,
    textAlign: "center",
  },
  descriptionH4C1: {
    left: 787,
    textAlign: "center",
  },
  sampleH3C1: {
    left: 806,
    textAlign: "center",
  },
  sampleH1C1: {
    left: 785,
    textAlign: "center",
  },
  descriptionH1C1: {
    left: 778,
    textAlign: "center",
  },
  headerH1C1: {
    left: 645,
    textAlign: "center",
  },
  sampleH2C1: {
    left: 792,
    textAlign: "center",
  },
  descriptionForText4: {
    left: 750,
    textAlign: "center",
  },
  headerH2R1: {
    top: 1528,
    color: Color.white,
    lineHeight: 80,
    letterSpacing: -4,
    fontSize: FontSize.size_51xl,
    textAlign: "right",
    left: 1311,
  },
  descriptionH3R1: {
    left: 1505,
    textAlign: "right",
  },
  headerH3R1: {
    left: 1351,
    textAlign: "right",
  },
  descriptionH4R1: {
    left: 1505,
    textAlign: "right",
  },
  sampleH3R1: {
    left: 1542,
    textAlign: "right",
  },
  sampleH1R1: {
    left: 1500,
    textAlign: "right",
  },
  descriptionH1R1: {
    left: 1486,
    textAlign: "right",
  },
  headerH1R1: {
    left: 1218,
    textAlign: "right",
  },
  sampleH2R1: {
    left: 1514,
    textAlign: "right",
  },
  descriptionForText5: {
    left: 1430,
    textAlign: "right",
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
  typography: {
    marginTop: -58,
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
  },
  componentsHeading: {
    marginTop: 24,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  header: {
    top: 0,
    height: 164,
    overflow: "hidden",
  },
  componentsTypography: {
    backgroundColor: Color.white,
    flex: 1,
    height: 2428,
    overflow: "hidden",
    width: "100%",
  },
});

export default ComponentsTypography;
