import React from "react"
import { StyleSheet, View, StatusBar } from "react-native"
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
      count: 0
    }
  }

  render() {
    StatusBar.setBarStyle("light-content")
    return (
      <View style={styles.container}>
        <View style={styles.newMeal}>
          {this.state.count > 0 && (
            <NewMeal resetCount={() => this.setState({ count: 0 })} />
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
            incrementCount={() =>
              this.setState({
                count: this.state.count + 1
              })
            }
          />
        </View>
      </View>
    )
  }
}
