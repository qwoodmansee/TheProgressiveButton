import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';

class TheButton extends React.Component {
  render() {
    return (
      <div>
        <a href="#" class="button-3d center">Get A Word</a>
      </div>
    );
  }
}

ReactDOM.render(
  <TheButton/>,
  document.getElementById('root')
);