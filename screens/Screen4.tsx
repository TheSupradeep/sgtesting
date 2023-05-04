import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Screen4 = () => {
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
              source={require("../assets/shape.png")}
            />
            <Image
              style={[styles.socialYtChild, styles.socialChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-61.png")}
            />
            <View style={styles.iconPublic} />
          </View>
        </View>
        <Text style={[styles.designAllRig, styles.addAViewerLayout]}>
          © 18 Design, all rights reserved.
        </Text>
        <Text style={[styles.leadGeneration, styles.aboutUsPosition]}>
          Lead generation
        </Text>
        <Text style={[styles.customerEngagement, styles.customerPosition]}>
          Customer engagement
        </Text>
        <Text style={[styles.customerSupport, styles.customerPosition]}>
          Customer support
        </Text>
        <Text style={[styles.helpCenterArticles, styles.customerPosition]}>
          Help Center Articles
        </Text>
        <Text style={[styles.outboundMessages, styles.customerPosition]}>
          Outbound Messages
        </Text>
        <Text style={[styles.aboutUs, styles.aboutUsPosition]}>About us</Text>
        <Text style={[styles.howItWorks, styles.faqsPosition]}>
          How it works
        </Text>
        <Text style={[styles.pricing, styles.faqsPosition]}>Pricing</Text>
        <Text style={[styles.faqs, styles.faqsPosition]}>FAQs</Text>
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
            style={[styles.contributorsAreMem, styles.addAViewerLayout]}
          >{`Contributors are members of your team who need access to use 
the Mac app to create and edit Sketch documents. These prices don’t include sales 
tax, which may still apply. Head over to our pricing page to get full details.`}</Text>
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
          style={[styles.theOnlineForm, styles.addAViewerLayout]}
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
            source={require("../assets/rectangle2.png")}
          />
          <Image
            style={[styles.illustration5Icon, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-52.png")}
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
            Access to the Mac app for all
          </Text>
          <Text style={[styles.aSharedCloud, styles.thePosition]}>
            A shared Cloud workspace
          </Text>
          <Text style={[styles.freeCloudAccess, styles.thePosition]}>
            Free Cloud access for unlim
          </Text>
          <Text style={[styles.easyTeamManagement, styles.thePosition]}>
            Easy team management
          </Text>
          <Text style={[styles.noLicenseKey, styles.thePosition]}>
            No license key required
          </Text>
          <Text style={[styles.text, styles.textPosition]}>299</Text>
          <Text style={[styles.text1, styles.textPosition1]}>$</Text>
          <Text style={[styles.perMonth, styles.perPosition]}>per month</Text>
          <Text style={[styles.aSubscriptionFor, styles.elementsdotPosition1]}>
            A subscription for the whole team
          </Text>
          <View
            style={[
              styles.buttonblackbuttonBlackNorm,
              styles.elementsdotPosition1,
            ]}
          >
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.buttonBlackChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-417.png")}
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
            The Mac app — yours to keep
          </Text>
          <Text style={[styles.oneYearOf, styles.thePosition]}>
            One year of Mac app updates
          </Text>
          <Text style={[styles.oneYearOf1, styles.thePosition]}>
            One year of saving to Cloud
          </Text>
          <Text style={[styles.aPersonalCloud, styles.thePosition]}>
            A personal Cloud workspace
          </Text>
          <Text style={[styles.allToolsJust, styles.thePosition]}>
            All tools, just for you
          </Text>
          <Text style={[styles.text2, styles.textPosition]}>99</Text>
          <Text style={[styles.text3, styles.textPosition1]}>$</Text>
          <Text style={[styles.perMonth1, styles.perPosition]}>per month</Text>
          <Text style={[styles.proAccountJust, styles.elementsdotPosition1]}>
            Pro account, just for you
          </Text>
          <View
            style={[
              styles.buttonblackbuttonBlackNorm,
              styles.elementsdotPosition1,
            ]}
          >
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.buttonBlackChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-418.png")}
              />
              <Text style={[styles.signUp1, styles.signPosition]}>Join</Text>
            </View>
          </View>
        </View>
        <View style={[styles.price1, styles.pricePosition]}>
          <View style={[styles.frameInner, styles.frameInnerPosition]} />
          <View
            style={[
              styles.buttonblackbuttonBlackNorm,
              styles.elementsdotPosition1,
            ]}
          >
            <View style={[styles.vectorParent, styles.frameChildLayout]}>
              <Image
                style={[styles.buttonBlackChild, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-417.png")}
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
            The Mac app — yours to keep
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
          <Text style={[styles.freeCloudAccess, styles.thePosition]}>
            One year of saving to Cloud
          </Text>
          <Text style={[styles.text, styles.textPosition]}>49</Text>
          <Text style={[styles.text1, styles.textPosition1]}>$</Text>
          <Text style={[styles.perMonth2, styles.perPosition]}>per month</Text>
          <Text style={[styles.aSubscriptionFor, styles.elementsdotPosition1]}>
            A pay-once license, just for you
          </Text>
        </View>
        <Text
          style={[styles.selectAMembership, styles.pricesListedInTypo]}
        >{`Select a membership level
the right price for you.`}</Text>
        <Text
          style={[styles.pricesListedIn, styles.pricesListedInTypo]}
        >{`Prices listed in USD. Taxes may apply. 
By using program you agree to our terms and policies.`}</Text>
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
            source={require("../assets/illustration-41.png")}
          />
        </View>
      </View>
      <View style={[styles.howItWorks1, styles.heroPosition]}>
        <Text
          style={[styles.buildingTheBest, styles.commonQuestionsTypo]}
        >{`Building the best space 
for collaboration.`}</Text>
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
            source={require("../assets/illustration-32.png")}
          />
        </View>
      </View>
      <View style={styles.aboutUs4}>
        <Text
          style={[styles.fasterFriendlierF, styles.addAViewerPosition]}
        >{`Faster, friendlier feedback 
loops make life easier.`}</Text>
        <Text
          style={[styles.addAViewer, styles.addAViewerPosition]}
        >{`Add a Viewer to your team so they can see everything you share, or invite 
people to individual documents. It’s up to you. Stakeholders can check 
out designs in their web browser, test prototypes and leave feedback for free.`}</Text>
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
            style={[styles.buttonBlackChild, styles.iconFrameLayout]}
            resizeMode="cover"
            source={require("../assets/illustration-21.png")}
          />
        </View>
      </View>
      <View style={[styles.hero, styles.heroPosition]}>
        <Text
          style={[styles.alwaysTrack, styles.textPosition]}
        >{`Always Track & 
Analyze Your Business 
Statistics To Succeed.`}</Text>
        <Text
          style={[styles.aBetterWay, styles.addAViewerLayout]}
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
        <View
          style={[styles.illustrationsillustration1, styles.frameChildLayout]}
        >
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
        <View style={[styles.gridChild, styles.gridChildLayout]} />
        <View style={[styles.gridItem, styles.gridChildLayout]} />
        <View style={[styles.gridInner, styles.gridChildLayout]} />
        <View style={[styles.gridChild1, styles.gridChildLayout]} />
        <View style={[styles.gridChild2, styles.gridChildLayout]} />
        <View style={[styles.gridChild3, styles.gridChildLayout]} />
        <Image
          style={[styles.gridChild4, styles.gridChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <View style={[styles.gridChild5, styles.gridChildLayout]} />
        <View style={[styles.gridChild6, styles.gridChildLayout]} />
        <View style={[styles.gridChild7, styles.gridChildLayout]} />
        <View style={[styles.gridChild8, styles.gridChildLayout]} />
        <View style={[styles.gridChild9, styles.gridChildLayout]} />
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
    width: "4.17%",
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
  addAViewerLayout: {
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  aboutUsPosition: {
    marginTop: -242,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  customerPosition: {
    left: "80.07%",
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  faqsPosition: {
    left: "66.04%",
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  emailPosition: {
    left: "48.26%",
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  logotypelogowhiteIconPosition: {
    height: "9.29%",
    left: "5.56%",
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
    left: 80,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "96.67%",
    width: "3.33%",
    height: "6.98%",
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
    height: "0.25%",
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
    width: 1280,
    left: 80,
    position: "absolute",
    overflow: "hidden",
  },
  pricePosition: {
    top: "46.51%",
    width: "32.5%",
    height: "53.49%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  elementsdotPosition1: {
    left: "9.62%",
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
    left: "19.23%",
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    letterSpacing: -4,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  textPosition1: {
    marginTop: -270,
    left: "9.62%",
    textAlign: "left",
    fontFamily: FontFamily.abrilFatfaceRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
  },
  perPosition: {
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
    right: "92.13%",
    width: "7.87%",
    height: "11.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  sharedCloudLibrariTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_9xl,
    left: "10.08%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  navigateToThePosition: {
    left: "10.08%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  roomServiceHelpsPosition: {
    width: "37.8%",
    left: "10.08%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  addAViewerPosition: {
    left: "45.35%",
    position: "absolute",
  },
  elementsdotPosition: {
    right: "52.6%",
    width: "2.05%",
    height: "4.96%",
    left: "45.35%",
    position: "absolute",
  },
  prototypePreviewsFPosition: {
    left: "48.87%",
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
  },
  elementsmIconPosition: {
    bottom: "2.76%",
    top: "90.34%",
    height: "6.9%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    width: "11.33%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  gridChildLayout: {
    opacity: 0.2,
    width: 92,
    height: 4346,
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
    left: "5.56%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  logotypelogowhiteIcon: {
    width: "3.61%",
    top: "7.14%",
    right: "90.83%",
    bottom: "83.57%",
    height: "9.29%",
    left: "5.56%",
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
    right: "91.67%",
    left: "4.17%",
  },
  socialTwChild: {
    height: "38.33%",
    width: "46.67%",
    right: "24.85%",
    left: "28.48%",
    top: "30.76%",
  },
  socialTw: {
    right: "86.11%",
    left: "9.72%",
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
    right: "80.56%",
    left: "15.28%",
  },
  socialInChild: {
    width: "43.33%",
    right: "25.91%",
    left: "30.76%",
  },
  socialIn: {
    right: "75%",
    left: "20.83%",
  },
  socialYtChild: {
    height: "36.67%",
    width: "51.67%",
    top: "32.42%",
    right: "24.39%",
    left: "23.94%",
  },
  socialYt: {
    right: "69.44%",
    left: "26.39%",
  },
  designAllRig: {
    marginTop: 200,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    color: Color.white,
    left: "5.56%",
    position: "absolute",
  },
  leadGeneration: {
    left: "80.21%",
  },
  customerEngagement: {
    marginTop: -202,
  },
  customerSupport: {
    marginTop: -162,
  },
  helpCenterArticles: {
    marginTop: -122,
  },
  outboundMessages: {
    marginTop: -82,
  },
  aboutUs: {
    left: "66.18%",
  },
  howItWorks: {
    marginTop: -202,
  },
  pricing: {
    marginTop: -162,
  },
  faqs: {
    marginTop: -122,
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
    width: "31.67%",
    top: "62.14%",
    right: "62.78%",
    bottom: "28.57%",
  },
  footer: {
    top: 5129,
    width: 1440,
    height: 560,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  howMuchDoes: {
    marginTop: -200.5,
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
    bottom: "93.02%",
    top: "0%",
  },
  contributorsAreMem: {
    marginTop: -152.5,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  questionsChild: {
    top: "36.41%",
    bottom: "63.34%",
  },
  doIStill: {
    marginTop: -33.5,
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
    top: "41.65%",
    bottom: "51.37%",
  },
  questionsItem: {
    top: "53.62%",
    bottom: "46.13%",
  },
  whatAreThe: {
    marginTop: 35.5,
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
    top: "58.85%",
    bottom: "34.16%",
  },
  questionsInner: {
    top: "70.82%",
    bottom: "28.93%",
  },
  howLongDoes: {
    marginTop: 104.5,
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
    top: "76.06%",
    bottom: "16.96%",
  },
  questionsChild1: {
    top: "88.03%",
    bottom: "11.72%",
  },
  willProgramFor: {
    marginTop: 172.5,
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
    top: "93.02%",
    bottom: "0%",
  },
  questions: {
    height: "56.88%",
    width: "62.69%",
    top: "43.12%",
    right: "37.31%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  commonQuestions: {
    marginTop: -296.5,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  theOnlineForm: {
    marginTop: -206.5,
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
    height: "5.11%",
    width: "5.67%",
    right: "94.33%",
    bottom: "94.89%",
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
    height: "70.35%",
    width: "35.82%",
    top: "7.94%",
    bottom: "21.7%",
    left: "64.18%",
    right: "0%",
    position: "absolute",
  },
  faqs1: {
    top: 4224,
    width: 1340,
    height: 705,
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
    right: "83.65%",
    width: "6.73%",
    height: "4.35%",
    left: "9.62%",
  },
  uiElementsdotBlack1: {
    top: "46.58%",
    bottom: "49.07%",
    right: "83.65%",
    width: "6.73%",
    height: "4.35%",
    left: "9.62%",
  },
  uiElementsdotBlack2: {
    top: "54.66%",
    bottom: "40.99%",
    right: "83.65%",
    width: "6.73%",
    height: "4.35%",
    left: "9.62%",
  },
  uiElementsdotBlack3: {
    top: "62.73%",
    bottom: "32.92%",
    right: "83.65%",
    width: "6.73%",
    height: "4.35%",
    left: "9.62%",
  },
  uiElementsdotBlack4: {
    top: "70.81%",
    bottom: "24.84%",
    right: "83.65%",
    width: "6.73%",
    height: "4.35%",
    left: "9.62%",
  },
  accessToThe: {
    marginTop: -73,
    color: Color.gray,
  },
  aSharedCloud: {
    marginTop: -21,
    color: Color.gray,
  },
  freeCloudAccess: {
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
    left: "13.46%",
    letterSpacing: -4,
    marginTop: -270,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.gray,
  },
  text1: {
    color: Color.gray,
  },
  perMonth: {
    left: "55.53%",
    color: Color.gray,
  },
  aSubscriptionFor: {
    color: Color.gray,
    marginTop: -162,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: "9.62%",
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
    width: "80.77%",
    top: "84.47%",
    right: "9.62%",
    bottom: "7.45%",
  },
  price3: {
    left: "67.5%",
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
  aPersonalCloud: {
    marginTop: 82,
    color: Color.white,
  },
  allToolsJust: {
    marginTop: 134,
    color: Color.white,
  },
  text2: {
    fontSize: FontSize.size_61xl,
    left: "13.46%",
    letterSpacing: -4,
    marginTop: -270,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: Color.white,
  },
  text3: {
    color: Color.white,
  },
  perMonth1: {
    left: "43.03%",
    color: Color.white,
  },
  proAccountJust: {
    marginTop: -162,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    color: Color.white,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: "9.62%",
  },
  signUp1: {
    marginLeft: -16,
    top: 14,
    color: Color.gray,
  },
  price2: {
    right: "33.75%",
    left: "33.75%",
  },
  perMonth2: {
    left: "42.07%",
    color: Color.gray,
  },
  price1: {
    right: "67.5%",
    left: "0%",
  },
  selectAMembership: {
    marginTop: -434,
    left: "55.86%",
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
  },
  pricesListedIn: {
    marginTop: -274,
    left: "69.3%",
    lineHeight: 26,
    fontSize: FontSize.size_lg,
  },
  aboutUs2: {
    marginLeft: -28.5,
  },
  uiElementsarticleTag1: {
    height: "2.99%",
    width: "8.05%",
    top: "9.3%",
    bottom: "87.71%",
    left: "91.95%",
    right: "0%",
    position: "absolute",
  },
  illustrationsillustration4: {
    height: "41.53%",
    width: "36.72%",
    right: "63.28%",
    bottom: "58.47%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  pricing1: {
    top: 2820,
    height: 1204,
  },
  buildingTheBest: {
    marginTop: -398,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  uiElementsicon1: {
    top: "30.4%",
    bottom: "58.59%",
  },
  sharedCloudLibrari: {
    marginTop: -178,
  },
  navigateToThe: {
    marginTop: -134,
  },
  uiElementsicon4: {
    top: "86.56%",
    bottom: "2.42%",
  },
  integrationsWithTh: {
    marginTop: 332,
  },
  unlockingThatValue: {
    marginTop: 376,
  },
  uiElementsicon3: {
    top: "67.84%",
    bottom: "21.15%",
  },
  realTimeCollaborat: {
    marginTop: 162,
  },
  roomServiceHelps: {
    marginTop: 206,
  },
  uiElementsicon2: {
    top: "49.12%",
    bottom: "39.87%",
  },
  freeDeveloperHando: {
    marginTop: -8,
  },
  cloudInspectorMake: {
    marginTop: 36,
  },
  aboutUs3: {
    marginLeft: -52.5,
  },
  uiElementsarticleTag2: {
    height: "3.96%",
    width: "12.2%",
    right: "87.8%",
    bottom: "96.04%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  illustrationsillustration3: {
    height: "77.09%",
    width: "38.58%",
    bottom: "22.91%",
    left: "61.42%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  howItWorks1: {
    top: 1712,
    width: 1270,
    height: 908,
  },
  fasterFriendlierF: {
    marginTop: -226,
    letterSpacing: -3,
    fontSize: FontSize.size_41xl,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
  },
  addAViewer: {
    marginTop: -66,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: "50%",
  },
  uiElementsdotBlack5: {
    top: "58.16%",
    bottom: "36.88%",
  },
  uiElementsdotBlack6: {
    top: "67.38%",
    bottom: "27.66%",
  },
  uiElementsdotBlack7: {
    top: "76.6%",
    bottom: "18.44%",
  },
  uiElementsdotBlack8: {
    top: "85.82%",
    bottom: "9.22%",
  },
  uiElementsdotBlack9: {
    top: "95.04%",
    bottom: "0%",
  },
  sharedCloudLibrari1: {
    marginTop: 46,
  },
  prototypePreviewsF: {
    marginTop: 98,
  },
  easyOrganizationWi: {
    marginTop: 150,
  },
  freeDeveloperHando1: {
    marginTop: 202,
  },
  twoFactorAuthentic: {
    marginTop: 254,
  },
  aboutUs5: {
    marginLeft: -34,
  },
  uiElementsarticleTag3: {
    height: "6.38%",
    width: "7.9%",
    right: "46.74%",
    bottom: "93.62%",
    top: "0%",
  },
  illustrationsillustration2: {
    height: "88.65%",
    width: "42.43%",
    right: "57.57%",
    bottom: "11.35%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  aboutUs4: {
    top: 948,
    width: 1367,
    height: 564,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  alwaysTrack: {
    marginTop: -250,
    fontSize: FontSize.size_51xl,
    lineHeight: 80,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    left: "0%",
  },
  aBetterWay: {
    marginTop: 10,
    color: Color.gray,
    fontFamily: FontFamily.abhayaLibreRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  uiElementsmVisaIcon: {
    width: "6.52%",
    right: "93.48%",
    left: "0%",
  },
  uiElementsmMastercardIcon: {
    width: "4.55%",
    right: "86.5%",
    left: "8.95%",
  },
  uiElementsmPaypallIcon: {
    width: "9.1%",
    right: "74.98%",
    left: "15.92%",
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
    height: "8.97%",
    width: "36.24%",
    top: "67.59%",
    right: "63.76%",
    bottom: "23.45%",
    left: "0%",
    position: "absolute",
  },
  illustrationsillustration1: {
    width: "41.7%",
    left: "58.3%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  hero: {
    top: 168,
    width: 1319,
    height: 580,
  },
  logotypelogoblackIcon: {
    width: "4.06%",
    right: "95.94%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  aboutUs6: {
    left: "7.19%",
  },
  howItWorks2: {
    left: "16.56%",
  },
  pricing2: {
    left: "29.22%",
  },
  faqs2: {
    left: "37.73%",
  },
  signUp3: {
    marginLeft: -29.5,
    color: Color.white,
  },
  buttonblackbuttonBlackNorm3: {
    left: "88.67%",
    right: "0%",
  },
  signUp4: {
    marginLeft: -21.5,
    color: Color.gray,
  },
  buttonblackbuttonBlackNorm4: {
    right: "12.89%",
    left: "75.78%",
  },
  header: {
    top: 36,
    height: 52,
  },
  gridChild: {
    backgroundColor: Color.blueviolet,
    width: 92,
    left: 0,
  },
  gridItem: {
    left: 108,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridInner: {
    left: 216,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild1: {
    left: 324,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild2: {
    left: 432,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild3: {
    left: 540,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild4: {
    left: 648,
  },
  gridChild5: {
    left: 756,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild6: {
    left: 864,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild7: {
    left: 972,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild8: {
    left: 1080,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  gridChild9: {
    left: 1188,
    backgroundColor: Color.blueviolet,
    width: 92,
  },
  grid: {
    display: "none",
    opacity: 0.3,
    height: 4346,
    top: 0,
    width: 1280,
    left: 80,
    position: "absolute",
  },
  view: {
    flex: 1,
    height: 5689,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.whitesmoke,
  },
});

export default Screen4;
