import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#260b01",
    justifyContent: "space-between"
  },
  newMeal: {
    alignSelf: "flex-end"
  },
  sushiGraphic: {
    position: "absolute",
    bottom: "15%",
    alignSelf: "center"
  },
  count: {
    position: "absolute",
    bottom: "50%",
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  instructions: {
    position: "absolute",
    bottom: "50%",
    alignSelf: "center"
  }
})
