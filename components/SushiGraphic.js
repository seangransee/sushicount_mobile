import React from "react"
import { TouchableWithoutFeedback, Animated } from "react-native"

const SCALE = 1.2
const SUSHI_WIDTH = 250 * SCALE
const SUSHI_HEIGHT = 154 * SCALE
const SMALL_SUSHI_SCALE = 0.95
const ANIMATION_DURATION = 100

class SushiGraphic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: new Animated.Value(SUSHI_WIDTH),
      height: new Animated.Value(SUSHI_HEIGHT)
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Animated.sequence([
            Animated.parallel([
              Animated.timing(this.state.width, {
                toValue: SUSHI_WIDTH * 0.9,
                duration: ANIMATION_DURATION
              }),
              Animated.timing(this.state.height, {
                toValue: SUSHI_HEIGHT * 0.9,
                duration: ANIMATION_DURATION
              })
            ]),
            Animated.parallel([
              Animated.timing(this.state.width, {
                toValue: SUSHI_WIDTH,
                duration: ANIMATION_DURATION
              }),
              Animated.timing(this.state.height, {
                toValue: SUSHI_HEIGHT,
                duration: ANIMATION_DURATION
              })
            ])
          ]).start()
          this.props.incrementCount()
        }}
      >
        <Animated.Image
          source={require("../img/sushi_0.png")}
          style={{ width: this.state.width, height: this.state.height }}
        />
      </TouchableWithoutFeedback>
    )
  }
}

export default SushiGraphic
