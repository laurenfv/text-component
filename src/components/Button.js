import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './SimpleCard';

class MyButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
      return (
        <div>
          <Button onClick={this._onButtonClick}>Add Text</Button>
          {this.state.showComponent ?
             <SimpleCard /> :
             null
          }
        </div>
      );
    }
  }

  export default MyButton;