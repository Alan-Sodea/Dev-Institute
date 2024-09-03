import React from 'react';
import './Exercise.css';

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>Styled Header</h1>
        <p className="para">This is a paragraph with some styling.</p>
        <a href="https://example.com">This is a link</a>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <button type="submit">Submit</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
