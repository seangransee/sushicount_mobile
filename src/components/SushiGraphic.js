import React from "react"
import { TouchableWithoutFeedback, Animated, Vibration } from "react-native"
import reactMixin from "react-mixin"
import TimerMixin from "react-timer-mixin"

const SUSHI_HEIGHT = 185
const MIN_SCALE = 0.95
const MAX_SCALE = 1.2
const PULSE_DURATION = 100
const BITE_DURATION = 250
const VIBRATE_DURATION = 100

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
      scale: new Animated.Value(1),
      imageNum: 0
    }
  }

  eatingAnimation() {
    for (let i = 0; i < ANIMATION_IMAGES.length; i++) {
      this.setTimeout(() => {
        this.setState(({ imageNum }) => ({
          imageNum: (imageNum + 1) % ANIMATION_IMAGES.length
        }))
      }, BITE_DURATION * i)
    }
  }

  pulseAnimation() {
    Animated.sequence([
      Animated.timing(this.state.scale, {
        toValue: MIN_SCALE,
        duration: PULSE_DURATION
      }),
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: PULSE_DURATION
      }),
      Animated.delay(BITE_DURATION * (ANIMATION_IMAGES.length - 2)),
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

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Vibration.vibrate(VIBRATE_DURATION)
          this.props.incrementCount()
          this.eatingAnimation()
          this.pulseAnimation()
        }}
      >
        <Animated.Image
          source={ANIMATION_IMAGES[this.state.imageNum]}
          style={{
            height: SUSHI_HEIGHT,
            transform: [
              { scaleX: this.state.scale },
              { scaleY: this.state.scale }
            ]
          }}
          resizeMode="contain"
        />
      </TouchableWithoutFeedback>
    )
  }
}

reactMixin(SushiGraphic.prototype, TimerMixin)

export default SushiGraphic
