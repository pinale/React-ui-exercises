import React, { Component, Fragment } from "react";
import "../styles.css";
import Exercises from "./Exercises";
import { Header, Footer } from "./Layouts/index";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises,
    category: "chest"
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  andleCategorySelected = (category) => {
    this.setState({
      category
    });
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
