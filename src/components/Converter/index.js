// == Import
import React from 'react';

import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import currencies from 'src/data/currencies';
import './converter.scss';


class Converter extends React.Component {
  constructor(props) {
    // obligatory
    super(props);
    this.state = {
      isOpen: true,
      baseAmount: 1,
      currency: 'Australian Dollar',
    };
    // give acces to state by handleClick
    this.handleClick = this.handleClick.bind(this);
  }
  // if isOpen is true list of currencies will be shown
 
  handleClick() {
    const {isOpen} = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const {isOpen, baseAmount, currency} = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={isOpen} manageClick={this.handleClick} />
        {isOpen && <Currencies currencies={currencies} />}
        <Result currency="Australian Dollar" value={1.665247} />
      </div>
    );
  }
}

// == Export
export default Converter;
