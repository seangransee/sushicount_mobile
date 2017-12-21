import React from "react"
import { Image, TouchableWithoutFeedback, Alert, View } from "react-native"

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
          resizeMode="contain"
          style={{ width: 80 }}
        />
      </TouchableWithoutFeedback>
    )
  }
}

export default NewMeal
