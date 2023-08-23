import * as React from "react";
import { Image,StyleSheet,TouchableOpacity, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.english, styles.worldTypo]}>ENGLISH</Text>
        <Text style={[styles.world, styles.worldTypo]}>WORLD</Text>
      </View>
      <View style={styles.frameParent}>
      <TouchableOpacity  style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
      </View>
      <Text style={[styles.learnGrowAndContainer, styles.getStartedTypo]}>
        <Text style={styles.learnGrowAnd}>{`Learn, grow, and succeed with 
`}</Text>
        <Text style={styles.englishWorld}>English World</Text>
        <Text style={styles.learnGrowAnd}>{` – the key to a 
world of endless possibilities.
`}</Text>
      </Text>
      <Image
        style={[styles.homePageChild, styles.rectangleViewPosition]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  worldTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontStyle: "italic",
    color: Color.black,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 0,
    position: "absolute",
  },
  getStartedTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontStyle: "italic",
    position: "absolute",
  },
  groupChild: {
    top: 33,
    left: 109,
    width: 244,
    height: 157,
    position: "absolute",
  },
  groupItem: {
    left: -4,
    width: 221,
    height: 159,
  },
  english: {
    top: 61,
    left: 53,
    fontSize: 26,
  },
  world: {
    top: 92,
    left: 204,
    fontSize: 25,
  },
  ellipseParent: {
    top: 128,
    left: 21,
    width: 349,
    height: 182,
    position: "absolute",
  },
  groupInner: {
    left: 1,
    width: 248,
    height: 138,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Color.gainsboro,
    borderRadius: 15,
    height: 50, 
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: FontFamily.interExtraBold,
    fontSize: FontSize.size_m,


  },
  rectangleView: {
    top: 126,
    borderRadius: 20,
    backgroundColor: Color.gainsboro,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 67,
    width: 283,
  },
  getStarted: {
    top: 149,
    left: 83,
    width: 117,
    height: 22,
    color: Color.black,
  },
  frameParent: {
    top: 520,
    height: 193,
    width: 283,
    left: 54,
    position: "absolute",
    alignItems: 'center',
  },
  learnGrowAnd: {
    color: Color.black,
  },
  englishWorld: {
    color: Color.gainsboro,
  },
  learnGrowAndContainer: {
    top: 341,
    width: 330,
    left: 54,
  },
  homePageChild: {
    top: 767,
    width: 467,
    height: 106,
  },
  homePage: {
    backgroundColor: "rgba(37, 75, 211, 0.62)",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomePage;
