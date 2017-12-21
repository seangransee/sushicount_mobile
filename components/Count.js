import React from "react"
import { Text, Animated } from "react-native"

ANIMATION_DURATION = 100

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
        toValue: 1.2,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: ANIMATION_DURATION
      })
    ]).start()
    console.log(this.state.scale)
  }

  render() {
    console.log(this.state.scale)
    return (
      <Animated.Text style={{ fontSize: 220, color: "#d9b384" }}>
        {this.props.count}
      </Animated.Text>
    )
  }
}

export default Count
