import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Screen2 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.footer}>
        <View style={[styles.bg, styles.frameChildLayout]} />
        <Text
          style={[styles.wantToRecieve, styles.areFlexBox]}
        >{`Want to recieve our awesome 
stories?`}</Text>
        <Image
          style={[styles.logotypelogowhiteIcon, styles.iconFrameLayout]}
          resizeMode="cover"
          source={require("../assets/6-logotypelogowhite.png")}
        />
        <View style={[styles.socialFb, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <Image
              style={[styles.shapeIcon, styles.iconPosition1]}
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
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <Image
              style={[styles.shapeIcon, styles.iconPosition1]}
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
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <Image
              style={[styles.shapeIcon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialGlChild, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/group-41.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <View style={[styles.socialIn, styles.socialPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <Image
              style={[styles.shapeIcon, styles.iconPosition1]}
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
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <Image
              style={[styles.shapeIcon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/shape1.png")}
            />
            <Image
              style={[styles.socialYtChild, styles.socialChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-61.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <Text style={[styles.designAllRig, styles.faqsLayout]}>
          © 18 Design, all rights reserved.
        </Text>
        <Text style={[styles.leadGeneration, styles.faqsLayout]}>
          Lead generation
        </Text>
        <Text style={[styles.customerEngagement, styles.customerPosition]}>
          Customer engagement
        </Text>
        <Text style={[styles.customerSupport, styles.proAccountJustSpaceBlock]}>
          Customer support
        </Text>
        <Text style={[styles.helpCenterArticles, styles.customerPosition]}>
          Help Center Articles
        </Text>
        <Text style={[styles.outboundMessages, styles.customerPosition]}>
          Outbound Messages
        </Text>
        <Text style={[styles.aboutUs, styles.faqsLayout]}>About us</Text>
        <Text style={[styles.howItWorks, styles.faqsPosition]}>
          How it works
        </Text>
        <Text style={[styles.pricing, styles.faqsPosition]}>Pricing</Text>
        <Text style={[styles.faqs, styles.faqsPosition]}>FAQs</Text>
        <Text style={[styles.email, styles.faqsPosition]}>Email</Text>
        <Text style={[styles.infothe18design, styles.faqsPosition]}>
          info@the18.design
        </Text>
        <View
          style={[
            styles.inputwhiteinputWhiteNormal,
            styles.logotypelogowhiteIconPosition,
          ]}
        >
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.frameChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-46.png")}
              />
              <Text style={styles.enterYourEmail}>Enter your email</Text>
              <View style={[styles.frameItem, styles.frameChildLayout]} />
              <Text style={[styles.subcribe, styles.subcribeTypo]}>
                Subcribe
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.faqs1, styles.heroPosition]}>
        <View style={styles.questions}>
          <Text style={[styles.howMuchDoes, styles.areFlexBox]}>
            How much does a Teams subscription cost?
          </Text>
          <View style={[styles.uiElementsiPlus, styles.iconPosition]}>
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconItem, styles.iconLayout]} />
              <View style={[styles.iconInner, styles.iconLayout]} />
            </View>
          </View>
          <Text
            style={[styles.contributorsAreMem, styles.faqsLayout]}
          >{`Contributors are members of your team who need access to use 
the Mac app to create and edit Sketch documents. These prices 
don’t include sales tax, which may still apply. Head over to our 
pricing page to get full details.`}</Text>
          <View
            style={[styles.questionsChild, styles.questionsChildPosition]}
          />
          <Text style={[styles.doIStill, styles.areFlexBox]}>
            Do I still need to purchase licenses for the Mac app?
          </Text>
          <View style={[styles.uiElementsiMinus, styles.iconPosition]}>
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconItem, styles.iconLayout]} />
            </View>
          </View>
          <View style={[styles.questionsItem, styles.questionsChildPosition]} />
          <Text style={[styles.whatAreThe, styles.areFlexBox]}>
            What are the differences between Contributors and Viewers?
          </Text>
          <View style={[styles.icon2, styles.iconPosition]}>
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconItem, styles.iconLayout]} />
            </View>
          </View>
          <View
            style={[styles.questionsInner, styles.questionsChildPosition]}
          />
          <Text style={[styles.howLongDoes, styles.areFlexBox]}>
            How long does the free Teams subscription trial last?
          </Text>
          <View style={[styles.icon4, styles.iconPosition]}>
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconItem, styles.iconLayout]} />
            </View>
          </View>
          <View
            style={[styles.questionsChild1, styles.questionsChildPosition]}
          />
          <Text style={[styles.willProgramFor, styles.areFlexBox]}>
            Will program for Teams replace volume licensing?
          </Text>
          <View style={[styles.icon6, styles.iconPosition]}>
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconItem, styles.iconLayout]} />
            </View>
          </View>
        </View>
        <Text style={[styles.commonQuestions, styles.commonQuestionsTypo]}>
          Common Questions.
        </Text>
        <Text
          style={[styles.theOnlineForm, styles.faqsLayout]}
        >{`The online form also provides links to a set of frequently 
asked questions, other information materials related to 
the financial disclosure programme.`}</Text>
        <View style={styles.uiElementsarticleTag}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <View style={[styles.frameInner, styles.frameInnerPosition]} />
            <Text style={[styles.aboutUs1, styles.aboutTypo]}>Faqs</Text>
          </View>
        </View>
        <View style={styles.illustrationsillustration5}>
          <Image
            style={[styles.shapeIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Image
            style={[styles.illustration5Icon, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-5.png")}
          />
        </View>
      </View>
      <View style={[styles.pricing1, styles.headerPosition]}>
        <View style={[styles.price3, styles.pricePosition]}>
          <View style={[styles.price3Child, styles.frameInnerPosition]} />
          <View
            style={[styles.uiElementsdotBlack, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack1, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack2, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack3, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack4, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <Text style={[styles.accessToThe, styles.thePosition]}>
            Access to the Mac for all
          </Text>
          <Text style={[styles.aSharedCloud, styles.thePosition]}>
            A shared Cloud workspace
          </Text>
          <Text style={[styles.freeClAccess, styles.thePosition]}>
            Free Cl access for unlim
          </Text>
          <Text style={[styles.easyTeamManagement, styles.thePosition]}>
            Easy team management
          </Text>
          <Text style={[styles.noLicenseKey, styles.thePosition]}>
            No license key required
          </Text>
          <Text style={[styles.text, styles.textPosition1]}>299</Text>
          <Text style={[styles.text1, styles.textPosition]}>$</Text>
          <Text style={[styles.mo, styles.moPosition]}>/mo</Text>
          <Text
            style={[styles.aSubscriptionFor, styles.textPosition]}
          >{`A subscription for 
the whole team`}</Text>
          <View style={styles.buttonblackbuttonBlackNorm}>
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.buttonBlackChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-413.png")}
              />
              <Text style={[styles.signUp, styles.signPosition]}>Join</Text>
            </View>
          </View>
        </View>
        <View style={[styles.price2, styles.pricePosition]}>
          <View style={[styles.bg, styles.frameChildLayout]} />
          <View
            style={[styles.uiElementsdotBlack, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild19, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack1, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild19, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack2, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild19, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack3, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild19, styles.iconChildPosition]} />
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack4, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild19, styles.iconChildPosition]} />
            </View>
          </View>
          <Text style={[styles.theMacApp, styles.thePosition]}>
            The Mac app yours to keep
          </Text>
          <Text style={[styles.oneYearOf, styles.thePosition]}>
            One year of Mac updates
          </Text>
          <Text style={[styles.oneYearOf1, styles.thePosition]}>
            One year of saving to Cl
          </Text>
          <Text style={[styles.aPersonalCl, styles.thePosition]}>
            A personal Cl workspace
          </Text>
          <Text style={[styles.allToolsJust, styles.thePosition]}>
            All tools, just for you
          </Text>
          <Text style={[styles.text2, styles.textPosition1]}>99</Text>
          <Text style={[styles.text3, styles.textPosition]}>$</Text>
          <Text style={[styles.mo1, styles.moPosition]}>/mo</Text>
          <Text style={[styles.proAccountJust, styles.textPosition]}>
            Pro account, just for you
          </Text>
          <View style={styles.buttonblackbuttonBlackNorm}>
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.buttonBlackChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-414.png")}
              />
              <Text style={[styles.signUp1, styles.signPosition]}>Join</Text>
            </View>
          </View>
        </View>
        <View style={[styles.price1, styles.pricePosition]}>
          <View style={[styles.frameInner, styles.frameInnerPosition]} />
          <View style={styles.buttonblackbuttonBlackNorm}>
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.buttonBlackChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-413.png")}
              />
              <Text style={[styles.signUp, styles.signPosition]}>Join</Text>
            </View>
          </View>
          <View
            style={[styles.uiElementsdotBlack, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <Text style={[styles.accessToThe, styles.thePosition]}>
            The Mac app yours to keep
          </Text>
          <View
            style={[styles.uiElementsdotBlack1, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <Text style={[styles.aSharedCloud, styles.thePosition]}>
            Beautiful White_level
          </Text>
          <View
            style={[styles.uiElementsdotBlack2, styles.elementsdotPosition1]}
          >
            <View style={[styles.socialFb1, styles.frameChildLayout]}>
              <View style={[styles.iconChild, styles.iconPosition1]} />
              <View style={[styles.iconChild9, styles.iconChildPosition]} />
            </View>
          </View>
          <Text style={[styles.freeClAccess, styles.thePosition]}>
            One year of saving Cloud
          </Text>
          <Text style={[styles.text, styles.textPosition1]}>49</Text>
          <Text style={[styles.text1, styles.textPosition]}>$</Text>
          <Text style={[styles.mo2, styles.moPosition]}>/mo</Text>
          <Text
            style={[styles.aSubscriptionFor, styles.textPosition]}
          >{`A pay-once license, 
just for you`}</Text>
        </View>
        <Text
          style={[styles.selectAMembership, styles.pricesListedInTypo]}
        >{`Select a membership
level the right 
price for you.`}</Text>
        <Text
          style={[styles.pricesListedIn, styles.pricesListedInTypo]}
        >{`Prices listed in USD. Taxes may apply. 
By using program you agree to 
our terms and policies.`}</Text>
        <View style={styles.uiElementsarticleTag1}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <View style={[styles.frameInner, styles.frameInnerPosition]} />
            <Text style={[styles.aboutUs2, styles.aboutTypo]}>Pricing</Text>
          </View>
        </View>
        <View style={styles.illustrationsillustration4}>
          <Image
            style={[styles.buttonBlackChild, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-4.png")}
          />
        </View>
      </View>
      <View style={[styles.howItWorks1, styles.heroPosition]}>
        <Text
          style={[styles.buildingTheBest, styles.commonQuestionsTypo]}
        >{`Building the
best space for
collaboration.`}</Text>
        <Image
          style={[styles.uiElementsicon1, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-11.png")}
        />
        <Text
          style={[styles.sharedCloudLibrari, styles.sharedCloudLibrariTypo]}
        >
          Shared Cloud Libraries
        </Text>
        <Text
          style={[styles.navigateToThe, styles.navigateToThePosition]}
        >{`Navigate to the Your work panel in the left sidebar. 
Select the library you want to share. Select the Share 
icon in the upper right to share the library.`}</Text>
        <Image
          style={[styles.uiElementsicon4, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-41.png")}
        />
        <Text
          style={[styles.integrationsWithTh, styles.sharedCloudLibrariTypo]}
        >
          Integrations with the Cloud API
        </Text>
        <Text
          style={[styles.unlockingThatValue, styles.roomServiceHelpsPosition]}
        >{`Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. `}</Text>
        <Image
          style={[styles.uiElementsicon3, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-31.png")}
        />
        <Text
          style={[styles.realTimeCollaborat, styles.sharedCloudLibrariTypo]}
        >
          Real-time collaborative editing
        </Text>
        <Text
          style={[styles.roomServiceHelps, styles.roomServiceHelpsPosition]}
        >
          Room Service helps you build real-time collaborative features. Add
          real-time data sync! Let users edit the same data at the same time.
        </Text>
        <Image
          style={[styles.uiElementsicon2, styles.elementsiconLayout]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsicon-21.png")}
        />
        <Text
          style={[styles.freeDeveloperHando, styles.sharedCloudLibrariTypo]}
        >
          Free developer handoff, right inside
        </Text>
        <Text
          style={[styles.cloudInspectorMake, styles.navigateToThePosition]}
        >{`Cloud Inspector makes it easy for developers to get 
the information they need to turn pixels into code — 
all in the browser and, most importantly, for free.`}</Text>
        <View style={styles.uiElementsarticleTag2}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <View style={[styles.frameInner, styles.frameInnerPosition]} />
            <Text style={[styles.aboutUs3, styles.aboutTypo]}>
              How it works
            </Text>
          </View>
        </View>
        <View style={styles.illustrationsillustration3}>
          <Image
            style={[styles.buttonBlackChild, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-31.png")}
          />
        </View>
      </View>
      <View style={styles.aboutUs4}>
        <Text
          style={[styles.fasterFriendlierF, styles.addAViewerPosition]}
        >{`Faster, friendlier 
feedback loops 
make life easier.`}</Text>
        <Text style={[styles.addAViewer, styles.addAViewerPosition]}>
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It’s up to you. Stakeholders
          can check out designs in their web browser, test prototypes and leave
          feedback for free.
        </Text>
        <View style={[styles.uiElementsdotBlack5, styles.elementsdotPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <View style={[styles.iconChild, styles.iconPosition1]} />
            <View style={[styles.iconChild9, styles.iconChildPosition]} />
          </View>
        </View>
        <View style={[styles.uiElementsdotBlack6, styles.elementsdotPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <View style={[styles.iconChild, styles.iconPosition1]} />
            <View style={[styles.iconChild9, styles.iconChildPosition]} />
          </View>
        </View>
        <View style={[styles.uiElementsdotBlack7, styles.elementsdotPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <View style={[styles.iconChild, styles.iconPosition1]} />
            <View style={[styles.iconChild9, styles.iconChildPosition]} />
          </View>
        </View>
        <View style={[styles.uiElementsdotBlack8, styles.elementsdotPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <View style={[styles.iconChild, styles.iconPosition1]} />
            <View style={[styles.iconChild9, styles.iconChildPosition]} />
          </View>
        </View>
        <View style={[styles.uiElementsdotBlack9, styles.elementsdotPosition]}>
          <View style={[styles.socialFb1, styles.frameChildLayout]}>
            <View style={[styles.iconChild, styles.iconPosition1]} />
            <View style={[styles.iconChild9, styles.iconChildPosition]} />
          </View>
        </View>
        <Text
          style={[
            styles.sharedCloudLibrari1,
            styles.prototypePreviewsFPosition,
          ]}
        >
          Shared Cloud Libraries, for a single source of truth
        </Text>
        <Text
          style={[styles.prototypePreviewsF, styles.prototypePreviewsFPosition]}
        >
          Prototype previews for user testing and research
        </Text>
        <Text
          style={[styles.easyOrganizationWi, styles.prototypePreviewsFPosition]}
        >
          Easy organization with projects
        </Text>
        <Text
          style={[
            styles.freeDeveloperHando1,
            styles.prototypePreviewsFPosition,
          ]}
        >
          Free developer handoff, right inside the browser
        </Text>
        <Text
          style={[styles.twoFactorAuthentic, styles.prototypePreviewsFPosition]}
        >
          Two-factor authentication and SSO
        </Text>
        <View style={[styles.uiElementsarticleTag3, styles.addAViewerPosition]}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <View style={[styles.frameInner, styles.frameInnerPosition]} />
            <Text style={[styles.aboutUs5, styles.aboutTypo]}>About us</Text>
          </View>
        </View>
        <View style={styles.illustrationsillustration2}>
          <Image
            style={[styles.illustration2Icon, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-2.png")}
          />
        </View>
      </View>
      <View style={[styles.hero, styles.heroPosition]}>
        <Text style={[styles.alwaysTrack, styles.textPosition1]}>{`Always Track
& Analyze 
Your Business 
Statistics 
To Succeed.`}</Text>
        <Text
          style={[styles.aBetterWay, styles.faqsLayout]}
        >{`A better way to manage your sales, team, clients & marketing
— on a single platform. Powerful, affordable & easy.`}</Text>
        <Image
          style={[styles.uiElementsmVisaIcon, styles.elementsmIconPosition]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsm-visa.png")}
        />
        <Image
          style={[
            styles.uiElementsmMastercardIcon,
            styles.elementsmIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsm-mastercard.png")}
        />
        <Image
          style={[styles.uiElementsmPaypallIcon, styles.elementsmIconPosition]}
          resizeMode="cover"
          source={require("../assets/3-ui-elementsm-paypall.png")}
        />
        <View style={styles.inputblackinputBlackNormal}>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild4, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-49.png")}
            />
            <Text style={styles.enterYourEmail1}>Enter your email</Text>
            <View style={[styles.frameChild5, styles.frameChildLayout]} />
            <Text style={[styles.getStarted, styles.subcribeTypo]}>
              Get started
            </Text>
          </View>
        </View>
        <View style={styles.illustrationsillustration1}>
          <Image
            style={[styles.buttonBlackChild, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-1.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.logotypelogoblackIcon, styles.iconFrameLayout]}
          resizeMode="cover"
          source={require("../assets/6-logotypelogoblack.png")}
        />
        <Text style={[styles.aboutUs6, styles.faqs2Position]}>About us</Text>
        <Text style={[styles.howItWorks2, styles.faqs2Position]}>
          How it works
        </Text>
        <Text style={[styles.pricing2, styles.faqs2Position]}>Pricing</Text>
        <Text style={[styles.faqs2, styles.faqs2Position]}>FAQs</Text>
        <View
          style={[
            styles.buttonblackbuttonBlackNorm3,
            styles.buttonblackbuttonPosition,
          ]}
        >
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Image
              style={[styles.buttonBlackChild, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-4.png")}
            />
            <Text style={[styles.signUp3, styles.signPosition]}>Sign Up</Text>
          </View>
        </View>
        <View
          style={[
            styles.buttonblackbuttonBlackNorm4,
            styles.buttonblackbuttonPosition,
          ]}
        >
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Image
              style={[styles.buttonBlackChild, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43.png")}
            />
            <Text style={[styles.signUp4, styles.signPosition]}>Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.grid}>
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group1, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group2, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group3, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group4, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group5, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group6, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group7, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group8, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group9, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group10, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={[styles.group11, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: "100%",
    position: "absolute",
  },
  areFlexBox: {
    textAlign: "left",
    top: "50%",
  },
  iconFrameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  socialPosition: {
    bottom: "62.14%",
    top: "27.14%",
    width: "5.85%",
    height: "10.71%",
    position: "absolute",
  },
  iconPosition1: {
    opacity: 0,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  faqsLayout: {
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  customerPosition: {
    left: "75.12%",
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  proAccountJustSpaceBlock: {
    marginTop: -162,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  faqsPosition: {
    left: "51.12%",
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  logotypelogowhiteIconPosition: {
    height: "9.29%",
    left: "3.12%",
    position: "absolute",
  },
  subcribeTypo: {
    textAlign: "center",
    left: "50%",
    top: 13,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  heroPosition: {
    left: 32,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "96.11%",
    width: "3.89%",
    height: "6.56%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    width: "57.14%",
    height: "7.14%",
    backgroundColor: Color.gray,
    position: "absolute",
  },
  questionsChildPosition: {
    height: "0.23%",
    backgroundColor: Color.gray,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  commonQuestionsTypo: {
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
  },
  frameInnerPosition: {
    borderWidth: 1,
    borderColor: "#151515",
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  aboutTypo: {
    textTransform: "uppercase",
    fontSize: FontSize.size_sm,
    top: 6,
    textAlign: "center",
    color: Color.gray,
    left: "50%",
    lineHeight: 26,
    fontFamily: FontFamily.abrilFatfaceRegular,
    position: "absolute",
  },
  headerPosition: {
    width: 960,
    left: 32,
    position: "absolute",
    overflow: "hidden",
  },
  pricePosition: {
    top: "41.03%",
    width: "31.67%",
    height: "58.97%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  elementsdotPosition1: {
    left: "2.63%",
    right: "88.16%",
    width: "9.21%",
    height: "4.35%",
    position: "absolute",
  },
  iconChildPosition: {
    left: "32.14%",
    bottom: "32.14%",
    right: "32.14%",
    top: "32.14%",
    width: "35.71%",
    height: "35.71%",
    position: "absolute",
  },
  thePosition: {
    left: "14.47%",
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  textPosition1: {
    letterSpacing: -4,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    left: "6.58%",
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
  },
  moPosition: {
    marginTop: -222,
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
  },
  signPosition: {
    top: 14,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  pricesListedInTypo: {
    textAlign: "right",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    top: "50%",
    position: "absolute",
  },
  elementsiconLayout: {
    right: "90.24%",
    width: "9.76%",
    height: "10.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  sharedCloudLibrariTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_9xl,
    left: "12.49%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  navigateToThePosition: {
    left: "12.49%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  roomServiceHelpsPosition: {
    width: "46.83%",
    left: "12.49%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  addAViewerPosition: {
    left: "46.3%",
    position: "absolute",
  },
  elementsdotPosition: {
    right: "51.11%",
    width: "2.59%",
    height: "4.24%",
    left: "46.3%",
    position: "absolute",
  },
  prototypePreviewsFPosition: {
    left: "50.74%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  elementsmIconPosition: {
    top: "94.48%",
    height: "5.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  faqs2Position: {
    marginTop: -13,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  buttonblackbuttonPosition: {
    width: "15.1%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupLayout: {
    width: 58,
    height: 12357,
    top: 0,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.gray,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  wantToRecieve: {
    marginTop: -28,
    color: Color.white,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: "3.12%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  logotypelogowhiteIcon: {
    width: "5.07%",
    top: "7.14%",
    right: "91.8%",
    bottom: "83.57%",
    height: "9.29%",
    left: "3.12%",
    position: "absolute",
  },
  shapeIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  socialFb: {
    right: "92.98%",
    left: "1.17%",
  },
  socialTwChild: {
    height: "38.33%",
    width: "46.67%",
    right: "24.85%",
    left: "28.48%",
    top: "30.76%",
  },
  socialTw: {
    right: "85.17%",
    left: "8.98%",
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
    right: "77.37%",
    left: "16.78%",
  },
  socialInChild: {
    width: "43.33%",
    right: "25.91%",
    left: "30.76%",
  },
  socialIn: {
    right: "69.56%",
    left: "24.59%",
  },
  socialYtChild: {
    height: "36.67%",
    width: "51.67%",
    top: "32.42%",
    right: "24.39%",
    left: "23.94%",
  },
  socialYt: {
    right: "61.76%",
    left: "32.39%",
  },
  designAllRig: {
    marginTop: 200,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    color: Color.white,
    left: "3.12%",
    position: "absolute",
  },
  leadGeneration: {
    marginTop: -242,
    left: "75.32%",
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    color: Color.white,
    position: "absolute",
  },
  customerEngagement: {
    marginTop: -202,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  customerSupport: {
    left: "75.12%",
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  helpCenterArticles: {
    marginTop: -122,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  outboundMessages: {
    marginTop: -82,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  aboutUs: {
    marginTop: -128,
    left: "51.32%",
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    color: Color.white,
    position: "absolute",
  },
  howItWorks: {
    marginTop: -88,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  pricing: {
    marginTop: -48,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  faqs: {
    marginTop: -8,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  email: {
    marginTop: -240,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
  },
  infothe18design: {
    marginTop: -194,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  frameChild: {
    width: "61.4%",
    right: "38.6%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  enterYourEmail: {
    top: 16,
    left: 20,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
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
    right: "0%",
    top: "0%",
  },
  subcribe: {
    marginLeft: 107,
    color: Color.gray,
  },
  vectorParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    overflow: "hidden",
    width: "100%",
  },
  inputwhiteinputWhiteNormal: {
    width: "44.49%",
    top: "62.14%",
    right: "52.39%",
    bottom: "28.57%",
  },
  footer: {
    top: 4853,
    height: 560,
    width: 1025,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  howMuchDoes: {
    marginTop: -213.5,
    color: Color.gray,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  iconChild: {
    backgroundColor: Color.white,
  },
  iconItem: {
    top: "46.43%",
    right: "21.43%",
    bottom: "46.43%",
    left: "21.43%",
  },
  iconInner: {
    top: "21.43%",
    right: "-10.71%",
    bottom: "71.43%",
    left: "53.57%",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  uiElementsiPlus: {
    bottom: "93.44%",
    top: "0%",
  },
  contributorsAreMem: {
    marginTop: -165.5,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  questionsChild: {
    top: "40.28%",
    bottom: "59.48%",
  },
  doIStill: {
    marginTop: -20.5,
    color: Color.gray,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  uiElementsiMinus: {
    top: "45.2%",
    bottom: "48.24%",
  },
  questionsItem: {
    top: "56.44%",
    bottom: "43.33%",
  },
  whatAreThe: {
    marginTop: 48.5,
    color: Color.gray,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  icon2: {
    top: "61.36%",
    bottom: "32.08%",
  },
  questionsInner: {
    top: "72.6%",
    bottom: "27.17%",
  },
  howLongDoes: {
    marginTop: 117.5,
    color: Color.gray,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  icon4: {
    top: "77.52%",
    bottom: "15.93%",
  },
  questionsChild1: {
    top: "88.76%",
    bottom: "11.01%",
  },
  willProgramFor: {
    marginTop: 185.5,
    color: Color.gray,
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  icon6: {
    top: "93.44%",
    bottom: "0%",
  },
  questions: {
    height: "58.41%",
    width: "69.36%",
    top: "41.59%",
    right: "30.64%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  commonQuestions: {
    marginTop: -309.5,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  theOnlineForm: {
    marginTop: -219.5,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  frameInner: {
    backgroundColor: Color.whitesmoke,
  },
  aboutUs1: {
    marginLeft: -17,
  },
  uiElementsarticleTag: {
    height: "4.92%",
    width: "7.32%",
    right: "92.68%",
    bottom: "95.08%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  illustration5Icon: {
    top: "1.29%",
    right: "-1%",
    bottom: "-1.29%",
    left: "1%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  illustrationsillustration5: {
    height: "55.13%",
    width: "37.57%",
    bottom: "44.87%",
    left: "62.43%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  faqs1: {
    top: 4022,
    width: 1038,
    height: 731,
  },
  price3Child: {
    backgroundColor: Color.white,
  },
  iconChild9: {
    backgroundColor: Color.gray,
  },
  uiElementsdotBlack: {
    top: "38.51%",
    bottom: "57.14%",
  },
  uiElementsdotBlack1: {
    top: "46.58%",
    bottom: "49.07%",
  },
  uiElementsdotBlack2: {
    top: "54.66%",
    bottom: "40.99%",
  },
  uiElementsdotBlack3: {
    top: "62.73%",
    bottom: "32.92%",
  },
  uiElementsdotBlack4: {
    top: "70.81%",
    bottom: "24.84%",
  },
  accessToThe: {
    marginTop: -73,
    color: Color.gray,
  },
  aSharedCloud: {
    marginTop: -21,
    color: Color.gray,
  },
  freeClAccess: {
    marginTop: 31,
    color: Color.gray,
  },
  easyTeamManagement: {
    marginTop: 83,
    color: Color.gray,
  },
  noLicenseKey: {
    marginTop: 135,
    color: Color.gray,
  },
  text: {
    fontSize: FontSize.size_61xl,
    left: "11.84%",
    letterSpacing: -4,
    marginTop: -270,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
  },
  text1: {
    marginTop: -270,
    left: "6.58%",
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
  },
  mo: {
    left: "69.41%",
    color: Color.gray,
  },
  aSubscriptionFor: {
    color: Color.gray,
    marginTop: -162,
    fontFamily: FontFamily.abhayaLibreRegular,
  },
  buttonBlackChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  signUp: {
    marginLeft: -16,
    top: 14,
    color: Color.white,
  },
  buttonblackbuttonBlackNorm: {
    height: "8.07%",
    width: "73.68%",
    top: "84.47%",
    right: "13.16%",
    bottom: "7.45%",
    left: "13.16%",
    position: "absolute",
  },
  price3: {
    left: "68.33%",
    right: "0%",
  },
  iconChild19: {
    backgroundColor: Color.white,
  },
  theMacApp: {
    marginTop: -74,
    color: Color.white,
  },
  oneYearOf: {
    marginTop: -22,
    color: Color.white,
  },
  oneYearOf1: {
    marginTop: 30,
    color: Color.white,
  },
  aPersonalCl: {
    marginTop: 82,
    color: Color.white,
  },
  allToolsJust: {
    marginTop: 134,
    color: Color.white,
  },
  text2: {
    fontSize: FontSize.size_61xl,
    left: "11.84%",
    letterSpacing: -4,
    marginTop: -270,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.white,
  },
  text3: {
    marginTop: -270,
    left: "6.58%",
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.white,
  },
  mo1: {
    left: "52.3%",
    color: Color.white,
  },
  proAccountJust: {
    marginTop: -162,
    fontFamily: FontFamily.abhayaLibreRegular,
    color: Color.white,
  },
  signUp1: {
    marginLeft: -16,
    top: 14,
    color: Color.gray,
  },
  price2: {
    right: "34.17%",
    left: "34.17%",
  },
  mo2: {
    left: "50.99%",
    color: Color.gray,
  },
  price1: {
    right: "68.33%",
    left: "0%",
  },
  selectAMembership: {
    marginTop: -490,
    left: "51.46%",
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
  },
  pricesListedIn: {
    marginTop: -260,
    left: "69.9%",
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  aboutUs2: {
    marginLeft: -28.5,
  },
  uiElementsarticleTag1: {
    height: "3.3%",
    width: "10.73%",
    right: "1.04%",
    bottom: "96.7%",
    left: "88.23%",
    top: "0%",
    position: "absolute",
  },
  illustrationsillustration4: {
    height: "37%",
    width: "39.58%",
    right: "60.42%",
    bottom: "63%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  pricing1: {
    top: 2830,
    height: 1092,
  },
  buildingTheBest: {
    marginTop: -433,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  uiElementsicon1: {
    top: "35.38%",
    bottom: "54.4%",
  },
  sharedCloudLibrari: {
    marginTop: -143,
  },
  navigateToThe: {
    marginTop: -99,
  },
  uiElementsicon4: {
    top: "87.53%",
    bottom: "2.25%",
  },
  integrationsWithTh: {
    marginTop: 367,
  },
  unlockingThatValue: {
    marginTop: 411,
  },
  uiElementsicon3: {
    top: "70.14%",
    bottom: "19.63%",
  },
  realTimeCollaborat: {
    marginTop: 197,
  },
  roomServiceHelps: {
    marginTop: 241,
  },
  uiElementsicon2: {
    top: "52.76%",
    bottom: "37.01%",
  },
  freeDeveloperHando: {
    marginTop: 27,
  },
  cloudInspectorMake: {
    marginTop: 71,
  },
  aboutUs3: {
    marginLeft: -52.5,
  },
  uiElementsarticleTag2: {
    height: "3.68%",
    width: "15.12%",
    right: "84.88%",
    bottom: "96.32%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  illustrationsillustration3: {
    height: "61.35%",
    width: "40.98%",
    bottom: "38.65%",
    left: "59.02%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  howItWorks1: {
    top: 1752,
    height: 978,
    width: 1025,
  },
  fasterFriendlierF: {
    marginTop: -274,
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
  },
  addAViewer: {
    marginTop: -44,
    width: "53.7%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
  },
  uiElementsdotBlack5: {
    top: "64.24%",
    bottom: "31.52%",
  },
  uiElementsdotBlack6: {
    top: "72.12%",
    bottom: "23.64%",
  },
  uiElementsdotBlack7: {
    top: "80%",
    bottom: "15.76%",
  },
  uiElementsdotBlack8: {
    top: "87.88%",
    bottom: "7.88%",
  },
  uiElementsdotBlack9: {
    top: "95.76%",
    bottom: "0%",
  },
  sharedCloudLibrari1: {
    marginTop: 95,
  },
  prototypePreviewsF: {
    marginTop: 147,
  },
  easyOrganizationWi: {
    marginTop: 199,
  },
  freeDeveloperHando1: {
    marginTop: 251,
  },
  twoFactorAuthentic: {
    marginTop: 303,
  },
  aboutUs5: {
    marginLeft: -34,
  },
  uiElementsarticleTag3: {
    height: "5.45%",
    width: "10%",
    right: "43.7%",
    bottom: "94.55%",
    top: "0%",
  },
  illustration2Icon: {
    right: "-11.6%",
    left: "11.6%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  illustrationsillustration2: {
    height: "65.45%",
    width: "46.3%",
    right: "53.7%",
    bottom: "34.55%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  aboutUs4: {
    top: 992,
    left: -58,
    width: 1080,
    height: 660,
    position: "absolute",
    overflow: "hidden",
  },
  alwaysTrack: {
    marginTop: -322,
    fontSize: FontSize.size_51xl,
    lineHeight: 80,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    left: "0%",
  },
  aBetterWay: {
    marginTop: 98,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  uiElementsmVisaIcon: {
    width: "8.25%",
    right: "91.75%",
    left: "0%",
  },
  uiElementsmMastercardIcon: {
    width: "5.76%",
    right: "82.92%",
    left: "11.32%",
  },
  uiElementsmPaypallIcon: {
    width: "11.52%",
    left: "20.15%",
    right: "68.33%",
  },
  frameChild4: {
    width: "58.58%",
    right: "41.42%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  enterYourEmail1: {
    color: Color.gray,
    top: 13,
    left: 20,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  frameChild5: {
    width: "41.42%",
    left: "58.58%",
    backgroundColor: Color.gray,
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  getStarted: {
    marginLeft: 98.5,
    color: Color.white,
  },
  inputblackinputBlackNormal: {
    height: "7.18%",
    width: "45.87%",
    top: "76.24%",
    right: "54.13%",
    bottom: "16.57%",
    left: "0%",
    position: "absolute",
  },
  illustrationsillustration1: {
    height: "80.11%",
    width: "52.78%",
    bottom: "19.89%",
    left: "47.22%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  hero: {
    top: 168,
    width: 1042,
    height: 724,
  },
  logotypelogoblackIcon: {
    width: "5.42%",
    right: "94.58%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  aboutUs6: {
    left: "9.58%",
  },
  howItWorks2: {
    left: "22.08%",
  },
  pricing2: {
    left: "38.96%",
  },
  faqs2: {
    left: "50.31%",
  },
  signUp3: {
    marginLeft: -29.5,
    color: Color.white,
  },
  buttonblackbuttonBlackNorm3: {
    left: "84.9%",
    right: "0%",
  },
  signUp4: {
    marginLeft: -21.5,
    color: Color.gray,
  },
  buttonblackbuttonBlackNorm4: {
    right: "17.19%",
    left: "67.71%",
  },
  header: {
    top: 36,
    height: 52,
  },
  groupChild: {
    backgroundColor: Color.blueviolet,
    opacity: 0.2,
    left: 0,
  },
  group: {
    left: 0,
  },
  group1: {
    left: 82,
  },
  group2: {
    left: 164,
  },
  group3: {
    left: 246,
  },
  group4: {
    left: 328,
  },
  group5: {
    left: 410,
  },
  group6: {
    left: 492,
  },
  group7: {
    left: 574,
  },
  group8: {
    left: 656,
  },
  group9: {
    left: 738,
  },
  group10: {
    left: 820,
  },
  group11: {
    left: 902,
  },
  grid: {
    display: "none",
    opacity: 0.3,
    height: 12357,
    top: 0,
    width: 960,
    left: 32,
    position: "absolute",
  },
  view: {
    flex: 1,
    height: 5413,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whitesmoke,
  },
});

export default Screen2;
