import React from 'react';
import SimpleCard from '../SimpleCard';
import MyButton from '../Button';

class AppContainer extends React.Component {

  render() {

    return (
      <div>
      <MyButton />
      <SimpleCard>
        {console.log('return')}
      </SimpleCard>
      </div>
    );
  }
}


export default AppContainer;
