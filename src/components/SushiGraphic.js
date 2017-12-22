import React from "react"
import { TouchableWithoutFeedback, Animated } from "react-native"

const SCALE = 1.2
const SUSHI_WIDTH = 250 * SCALE
const SUSHI_HEIGHT = 154 * SCALE
const SMALL_SUSHI_SCALE = 0.95
const ANIMATION_DURATION = 100
const BITE_DURATION = 400

const ANIMATION_IMAGES = [
  require("../img/sushi_0.png"),
  require("../img/sushi_1.png"),
  require("../img/sushi_2.png"),
  require("../img/sushi_3.png"),
  require("../img/sushi_4.png"),
  require("../img/sushi_5.png"),
  require("../img/sushi_6.png"),
  require("../img/sushi_7.png"),
  require("../img/sushi_8.png")
]

class SushiGraphic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: new Animated.Value(SUSHI_WIDTH),
      height: new Animated.Value(SUSHI_HEIGHT),
      imageNum: 0
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.incrementCount()
          for (let i = 0; i < ANIMATION_IMAGES.length; i++) {
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

            setTimeout(() => {
              this.setState(({ imageNum }) => ({
                imageNum: imageNum + 1
              }))
            }, BITE_DURATION * i)
          }
        }}
      >
        <Animated.Image
          source={
            ANIMATION_IMAGES[this.state.imageNum % ANIMATION_IMAGES.length]
          }
          style={{ width: this.state.width, height: this.state.height }}
        />
      </TouchableWithoutFeedback>
    )
  }
}

export default SushiGraphic
