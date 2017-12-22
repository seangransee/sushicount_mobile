import React from "react"
import { View, AsyncStorage } from "react-native"
import Count from "./Count"
import SushiGraphic from "./SushiGraphic"
import NewMeal from "./NewMeal"
import Instructions from "./Instructions"
import styles from "../styles"

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      count: 0
    }

    AsyncStorage.getItem("count").then(count => {
      this.setState({
        loading: false,
        count: parseInt(count || 0)
      })
    })
  }

  setCount(count) {
    this.setState({ count }, () => AsyncStorage.setItem("count", String(count)))
  }

  render() {
    if (this.state.loading) {
      return null
    }

    return (
      <View style={styles.container}>
        <View style={styles.newMeal}>
          {this.state.count > 0 && (
            <NewMeal resetCount={() => this.setCount(0)} />
          )}
        </View>
        {this.state.count === 0 && (
          <View style={styles.instructions}>
            <Instructions />
          </View>
        )}
        {this.state.count > 0 && (
          <View style={styles.count}>
            <Count count={this.state.count} />
          </View>
        )}
        <View style={styles.sushiGraphic}>
          <SushiGraphic
            incrementCount={() => this.setCount(this.state.count + 1)}
          />
        </View>
      </View>
    )
  }
}
