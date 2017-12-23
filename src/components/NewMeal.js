import React from "react"
import { Image, TouchableWithoutFeedback, Alert, View } from "react-native"

NEW_MEAL_WIDTH = 80
NEW_MEAL_HEIGHT = 70

class NewMeal extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Alert.alert(
            "New Meal",
            "Are you sure you want to start a new meal?",
            [{ text: "No" }, { text: "Yes", onPress: this.props.resetCount }]
          )
        }}
      >
        <Image
          source={require("../img/new_meal.png")}
          style={{ width: NEW_MEAL_WIDTH, height: NEW_MEAL_HEIGHT }}
        />
      </TouchableWithoutFeedback>
    )
  }
}

export default NewMeal
