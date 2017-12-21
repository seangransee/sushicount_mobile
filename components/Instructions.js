import React from "react"
import { Image } from "react-native"

class Instructions extends React.Component {
  render() {
    const INSTRUCTIONS_WIDTH = 601
    const INSTRUCTIONS_HEIGHT = 203
    const scale = 0.58
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
