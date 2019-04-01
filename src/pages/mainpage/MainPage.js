import React, {Component} from 'react'
import BrandNewSection from './brandNewSection/BrandNewSection';
import Content from './content/Content';
import isMobile from '../../reducers/isMobile';

class MainPage extends Component {
  render() {
    return (
      <div>
        {!isMobile() && <BrandNewSection/>}
        <Content/>
      </div>
    )
  }
}

export default MainPage