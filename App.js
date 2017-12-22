import React from "react"
import { StyleSheet, View, AsyncStorage } from "react-native"
import Count from "./components/Count"
import SushiGraphic from "./components/SushiGraphic"
import NewMeal from "./components/NewMeal"
import Instructions from "./components/Instructions"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#260b01",
    justifyContent: "space-between"
  },
  newMeal: {
    alignSelf: "flex-end"
  },
  sushiGraphic: {
    position: "absolute",
    bottom: "15%",
    alignSelf: "center"
  },
  count: {
    position: "absolute",
    bottom: "50%",
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  instructions: {
    position: "absolute",
    bottom: "50%",
    alignSelf: "center"
  }
})

export default class App extends React.Component {
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
    this.setState({ count })
    AsyncStorage.setItem("count", String(count))
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
