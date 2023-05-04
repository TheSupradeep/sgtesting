import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Screen1 = () => {
  return (
    <View style={[styles.view, styles.viewBg]}>
      <View style={styles.footer}>
        <Image
          style={[styles.bgIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/bg1.png")}
        />
        <Text
          style={[styles.wantToRecieve, styles.customerFlexBox]}
        >{`Want to recieve our awesome 
stories?`}</Text>
        <Image
          style={[
            styles.logotypelogowhiteIcon,
            styles.logotypelogowhiteIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/6-logotypelogowhite.png")}
        />
        <View style={[styles.socialFb, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.iconFramePosition]}>
            <Image
              style={[styles.shapeIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialFbChild, styles.socialChildPosition1]}
              resizeMode="cover"
              source={require("../assets/group-2.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <View style={[styles.socialTw, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.iconFramePosition]}>
            <Image
              style={[styles.shapeIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialTwChild, styles.socialChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-3.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <View style={[styles.socialGl, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.iconFramePosition]}>
            <Image
              style={[styles.shapeIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialGlChild, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-4.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <View style={[styles.socialIn, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.iconFramePosition]}>
            <Image
              style={[styles.shapeIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialInChild, styles.socialChildPosition1]}
              resizeMode="cover"
              source={require("../assets/group-5.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <View style={[styles.socialYt, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.iconFramePosition]}>
            <Image
              style={[styles.shapeIcon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialYtChild, styles.socialChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-6.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <Text style={[styles.designAllRig, styles.customerTypo]}>
          © 18 Design, all rights reserved.
        </Text>
        <Text style={[styles.leadGeneration, styles.aboutUsPosition]}>
          Lead generation
        </Text>
        <Text style={[styles.customerEngagement, styles.customerTypo]}>
          Customer engagement
        </Text>
        <Text style={[styles.customerSupport, styles.customerTypo]}>
          Customer support
        </Text>
        <Text style={[styles.helpCenterArticles, styles.customerTypo]}>
          Help Center Articles
        </Text>
        <Text style={[styles.outboundMessages, styles.customerTypo]}>
          Outbound Messages
        </Text>
        <Text style={[styles.aboutUs, styles.aboutUsPosition]}>About us</Text>
        <Text style={[styles.howItWorks, styles.customerTypo]}>
          How it works
        </Text>
        <Text style={[styles.pricing, styles.customerTypo]}>Pricing</Text>
        <Text style={[styles.faqs, styles.customerTypo]}>FAQs</Text>
        <Text style={[styles.email, styles.emailPosition]}>Email</Text>
        <Text style={[styles.infothe18design, styles.emailPosition]}>
          info@the18.design
        </Text>
        <View
          style={[
            styles.inputwhiteinputWhiteNormal,
            styles.logotypelogowhiteIconPosition,
          ]}
        >
          <View style={[styles.socialFb1, styles.iconFramePosition]}>
            <View style={[styles.vectorParent, styles.iconFramePosition]}>
              <Image
                style={[styles.frameChild, styles.iconChildLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-412.png")}
              />
              <Text style={[styles.enterYourEmail, styles.customerTypo]}>
                Enter your email
              </Text>
              <View style={[styles.frameItem, styles.iconFramePosition1]} />
              <Text style={[styles.subcribe, styles.subcribePosition]}>
                Subcribe
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.howItWorks1, styles.gridIconPosition]}>
        <Text
          style={[styles.buildingTheBest, styles.buildingTheBestFlexBox]}
        >{`Building the best space 
for collaboration.`}</Text>
        <Image
          style={[styles.uiElementsicon1, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-1.png")}
        />
        <Text
          style={[styles.sharedCloudLibrari, styles.realTimeCollaboRPosition]}
        >{`Shared Cloud 
Libraries`}</Text>
        <Text
          style={[styles.navigateToThe, styles.navigateToThePosition]}
        >{`Navigate to the Your work panel in the left sidebar. 
Select the library you want to share. Select the Share 
icon in the upper right to share the library.`}</Text>
        <Image
          style={[styles.uiElementsicon4, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-4.png")}
        />
        <Text
          style={[styles.integrationsWithTh, styles.realTimeCollaboRPosition]}
        >{`Integrations with 
the Cloud API`}</Text>
        <Text
          style={[styles.unlockingThatValue, styles.navigateToThePosition]}
        >{`Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. `}</Text>
        <Image
          style={[styles.uiElementsicon3, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-3.png")}
        />
        <Text
          style={[styles.realTimeCollaboR, styles.realTimeCollaboRPosition]}
        >{`Real-time collabo-
rative editing`}</Text>
        <Text style={[styles.roomServiceHelps, styles.navigateToThePosition]}>
          Room Service helps you build real-time collaborative features. Add
          real-time data sync! Let users edit the same data at the same time.
        </Text>
        <Image
          style={[styles.uiElementsicon2, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-2.png")}
        />
        <Text
          style={[styles.freeDeveloperHando, styles.realTimeCollaboRPosition]}
        >{`Free developer 
handoff, right inside`}</Text>
        <Text
          style={[styles.cloudInspectorMake, styles.navigateToThePosition]}
        >{`Cloud Inspector makes it easy for developers to get 
the information they need to turn pixels into code — 
all in the browser and, most importantly, for free.`}</Text>
        <View style={[styles.uiElementsarticleTag, styles.iconFramePosition]}>
          <View style={[styles.vectorParent, styles.iconFramePosition]}>
            <View style={[styles.frameInner, styles.iconFramePosition]} />
            <Text style={[styles.aboutUs1, styles.subcribePosition]}>
              How it works
            </Text>
          </View>
        </View>
        <View style={styles.illustrationsillustration3}>
          <Image
            style={[styles.bgIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-3.png")}
          />
        </View>
      </View>
      <View style={styles.group}>
        <Text style={styles.alwaysTrack} />
        <Text style={styles.alwaysTrack} />
        <View style={styles.alwaysTrack} />
        <View style={styles.alwaysTrack} />
        <View style={styles.alwaysTrack} />
      </View>
      <Image
        style={styles.uiElementsmenuIcon}
        resizeMode="cover"
        source={require("../assets/3-ui-elementsmenu.png")}
      />
      <Image
        style={[styles.gridIcon, styles.gridIconPosition]}
        resizeMode="cover"
        source={require("../assets/grid.png")}
      />
      <Text
        style={[
          styles.kvkdigitalDigiarchiveContainer,
          styles.buildingTheBestFlexBox,
        ]}
      >
        <Text style={styles.kvkdigital}>{`kvk.digital / `}</Text>
        <Text style={styles.digi}>digi</Text>
        <Text style={styles.archive}>archive</Text>
        <Text style={styles.kvkdigital}>.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBg: {
    backgroundColor: Color.whitesmoke,
    width: "100%",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  customerFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  logotypelogowhiteIconPosition: {
    height: "5.71%",
    left: "5.56%",
    position: "absolute",
  },
  socialPosition: {
    bottom: "76.7%",
    top: "16.7%",
    width: "16.67%",
    height: "6.59%",
    position: "absolute",
  },
  iconFramePosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  socialChildPosition1: {
    bottom: "30.45%",
    top: "26.21%",
    height: "43.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  socialChildPosition: {
    bottom: "30.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  customerTypo: {
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
  },
  aboutUsPosition: {
    left: "6.11%",
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  emailPosition: {
    textAlign: "right",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  iconFramePosition1: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  subcribePosition: {
    textAlign: "center",
    left: "50%",
    color: Color.gray,
    lineHeight: 26,
    position: "absolute",
  },
  gridIconPosition: {
    width: 320,
    left: 20,
    position: "absolute",
  },
  buildingTheBestFlexBox: {
    letterSpacing: -1,
    textAlign: "left",
    position: "absolute",
  },
  elementsiconLayout: {
    right: "78.75%",
    width: "21.25%",
    height: "4.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  realTimeCollaboRPosition: {
    left: "26.25%",
    color: Color.gray,
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
  },
  navigateToThePosition: {
    width: "73.75%",
    left: "26.25%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  bgIcon: {
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  wantToRecieve: {
    marginTop: 209,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: "5.56%",
    top: "50%",
    color: Color.white,
  },
  logotypelogowhiteIcon: {
    width: "14.44%",
    top: "4.4%",
    right: "80%",
    bottom: "89.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  shapeIcon: {
    opacity: 0,
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  socialFbChild: {
    width: "23.33%",
    right: "39.7%",
    left: "36.97%",
  },
  iconPublic: {
    width: 60,
    height: 60,
  },
  socialFb1: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  socialFb: {
    right: "80.56%",
    left: "2.78%",
  },
  socialTwChild: {
    height: "38.33%",
    width: "46.67%",
    right: "24.85%",
    left: "28.48%",
    top: "30.76%",
  },
  socialTw: {
    right: "61.11%",
    left: "22.22%",
  },
  socialGlChild: {
    height: "33.33%",
    width: "55%",
    right: "22.73%",
    bottom: "35.91%",
    left: "22.27%",
    top: "30.76%",
    position: "absolute",
  },
  socialGl: {
    right: "41.67%",
    left: "41.67%",
  },
  socialInChild: {
    width: "43.33%",
    right: "25.91%",
    left: "30.76%",
  },
  socialIn: {
    right: "22.22%",
    left: "61.11%",
  },
  socialYtChild: {
    height: "36.67%",
    width: "51.67%",
    top: "32.42%",
    right: "24.39%",
    left: "23.94%",
  },
  socialYt: {
    right: "2.78%",
    left: "80.56%",
  },
  designAllRig: {
    marginTop: 377,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  leadGeneration: {
    marginTop: -17,
  },
  customerEngagement: {
    marginTop: 23,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  customerSupport: {
    marginTop: 63,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  helpCenterArticles: {
    marginTop: 103,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  outboundMessages: {
    marginTop: 143,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  aboutUs: {
    marginTop: -203,
  },
  howItWorks: {
    marginTop: -163,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  pricing: {
    marginTop: -123,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  faqs: {
    marginTop: -83,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: "5.56%",
    top: "50%",
  },
  email: {
    marginTop: -415,
    left: "79.44%",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
  },
  infothe18design: {
    marginTop: -369,
    left: "56.11%",
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    lineHeight: 26,
  },
  frameChild: {
    width: "61.4%",
    right: "38.6%",
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  enterYourEmail: {
    top: 16,
    left: 20,
    lineHeight: 26,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  frameItem: {
    width: "38.6%",
    left: "61.4%",
    backgroundColor: Color.white,
    bottom: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  subcribe: {
    marginLeft: 107,
    top: 13,
    fontFamily: FontFamily.abhayaLibreRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    left: "50%",
  },
  vectorParent: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  inputwhiteinputWhiteNormal: {
    width: "88.89%",
    top: "81.32%",
    right: "5.56%",
    bottom: "12.97%",
  },
  footer: {
    top: 7975,
    left: 0,
    width: 360,
    height: 910,
    position: "absolute",
    overflow: "hidden",
  },
  buildingTheBest: {
    marginTop: -772,
    fontSize: FontSize.size_9xl,
    color: Color.gray,
    letterSpacing: -1,
    fontFamily: FontFamily.abhayaLibreRegular,
    top: "50%",
    left: "0%",
  },
  uiElementsicon1: {
    top: "9.18%",
    bottom: "86.71%",
  },
  sharedCloudLibrari: {
    marginTop: -668,
  },
  navigateToThe: {
    marginTop: -602,
  },
  uiElementsicon4: {
    top: "62.32%",
    bottom: "33.57%",
  },
  integrationsWithTh: {
    marginTop: 212,
  },
  unlockingThatValue: {
    marginTop: 278,
  },
  uiElementsicon3: {
    top: "47.22%",
    bottom: "48.67%",
  },
  realTimeCollaboR: {
    marginTop: -38,
  },
  roomServiceHelps: {
    marginTop: 28,
  },
  uiElementsicon2: {
    top: "27.42%",
    bottom: "68.48%",
  },
  freeDeveloperHando: {
    marginTop: -366,
  },
  cloudInspectorMake: {
    marginTop: -300,
  },
  frameInner: {
    borderStyle: "solid",
    borderColor: "#151515",
    borderWidth: 1,
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.whitesmoke,
  },
  aboutUs1: {
    marginLeft: -52.5,
    top: 6,
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    fontFamily: FontFamily.abrilFatfaceRegular,
  },
  uiElementsarticleTag: {
    height: "2.17%",
    width: "48.44%",
    right: "51.56%",
    bottom: "97.83%",
  },
  illustrationsillustration3: {
    height: "24.15%",
    width: "87.5%",
    top: "75.85%",
    right: "6.25%",
    left: "6.25%",
    bottom: "0%",
    position: "absolute",
  },
  howItWorks1: {
    top: 2161,
    height: 1656,
    overflow: "hidden",
  },
  alwaysTrack: {
    display: "none",
  },
  group: {
    top: 104,
    width: 330,
    height: 382,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  uiElementsmenuIcon: {
    left: 293,
    width: 52,
    height: 52,
    top: 13,
    position: "absolute",
  },
  gridIcon: {
    top: 0,
    height: 11014,
    opacity: 0.3,
    display: "none",
  },
  kvkdigital: {
    color: Color.black,
  },
  digi: {
    color: "#faa500",
  },
  archive: {
    color: "#113edd",
  },
  kvkdigitalDigiarchiveContainer: {
    top: 19,
    fontSize: 24,
    fontFamily: FontFamily.alataRegular,
    width: 251,
    height: 41,
    left: 20,
  },
  view: {
    flex: 1,
    height: 8885,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen1;
