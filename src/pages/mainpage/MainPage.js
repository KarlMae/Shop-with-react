import React, {Component} from 'react'
import BrandNewSection from './brandNewSection/BrandNewSection';
import Header from '../../components/header/Header';
import Content from './content/Content';
import Footer from '../../components/footer/Footer';


class MainPage extends Component {
  render() {
    return (
      <div>
        <Header isHomePage={true}/>
        <BrandNewSection />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default MainPage