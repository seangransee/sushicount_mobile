import React from "react"
import { Image } from "react-native"

class Instructions extends React.Component {
  render() {
    return (
      <Image
        source={require("../img/instructions.png")}
        style={{ width: 350 }}
        resizeMode="contain"
      />
    )
  }
}

export default Instructions
