import React from "react"
import { View, AsyncStorage, StatusBar } from "react-native"
import Count from "./Count"
import SushiGraphic from "./SushiGraphic"
import NewMeal from "./NewMeal"
import Instructions from "./Instructions"
import layout from "../layout"

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    AsyncStorage.getItem("count").then(count => {
      this.setState({
        count: parseInt(count || 0)
      })
    })
  }

  setCount(count) {
    this.setState({ count }, () => AsyncStorage.setItem("count", String(count)))
  }

  render() {
    StatusBar.setHidden(true)

    return (
      <View style={layout.container}>
        <View style={layout.newMeal}>
          {this.state.count > 0 && (
            <NewMeal resetCount={() => this.setCount(0)} />
          )}
        </View>
        {this.state.count === 0 && (
          <View style={layout.instructions}>
            <Instructions />
          </View>
        )}
        {this.state.count > 0 && (
          <View style={layout.count}>
            <Count count={this.state.count} />
          </View>
        )}
        <View style={layout.sushiGraphic}>
          <SushiGraphic
            incrementCount={() => this.setCount(this.state.count + 1)}
          />
        </View>
      </View>
    )
  }
}

export default Main
