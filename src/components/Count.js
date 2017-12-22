import React from "react"
import { Text, Animated } from "react-native"

ANIMATION_DURATION = 100
MAX_SCALE = 1.1
FONT_SIZE = 220

class Count extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: new Animated.Value(1)
    }
  }

  componentWillReceiveProps({ count: newCount }) {
    Animated.sequence([
      Animated.timing(this.state.scale, {
        toValue: MAX_SCALE,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }

  render() {
    return (
      <Animated.Text
        style={{
          fontSize: FONT_SIZE,
          color: "#d9b384",
          transform: [
            { scaleX: this.state.scale },
            { scaleY: this.state.scale }
          ]
        }}
      >
        {this.props.count}
      </Animated.Text>
    )
  }
}

export default Count
