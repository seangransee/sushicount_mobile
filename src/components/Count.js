import React from "react"
import { Text, Animated } from "react-native"

PULSE_DURATION = 100
MAX_SCALE = 1.1
FONT_SIZE = 220
COLOR = "#D9B384"
FONT = "Helvetica"
BEST_NUMBER_IN_THE_WORLD = 51
SPIN_DURATION = 500

class Count extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: new Animated.Value(1),
      rotation: new Animated.Value(0)
    }
  }

  componentWillReceiveProps({ count: newCount }) {
    if (this.props.count !== newCount) this.pulseAnimation()
    if (newCount === BEST_NUMBER_IN_THE_WORLD) this.spinAnimation()
  }

  pulseAnimation() {
    Animated.sequence([
      Animated.timing(this.state.scale, {
        toValue: MAX_SCALE,
        duration: PULSE_DURATION
      }),
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: PULSE_DURATION
      })
    ]).start()
  }

  spinAnimation() {
    Animated.timing(this.state.rotation, {
      toValue: 360,
      duration: SPIN_DURATION
    }).start()
  }

  render() {
    return (
      <Animated.Text
        style={{
          fontSize: FONT_SIZE,
          color: COLOR,
          fontFamily: FONT,
          transform: [
            { scaleX: this.state.scale },
            { scaleY: this.state.scale },
            {
              rotate: this.state.rotation.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"]
              })
            }
          ]
        }}
      >
        {this.props.count}
      </Animated.Text>
    )
  }
}

export default Count
