import React from 'react';

class Test extends React.Component {
  Test2(props) {
    console.log(props);

    return (
      <h2>{props.difficultyLevel}</h2>
    );
  }

  render() {
    return this.Test2({ difficultyLevel: "easy" });
  }
}

export default Test;
