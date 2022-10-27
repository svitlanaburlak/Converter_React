// == Import
import React from 'react';

import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import currencies from 'src/data/currencies';
import './converter.scss';
import { element } from 'prop-types';


class Converter extends React.Component {
  constructor(props) {
    // obligatory
    super(props);
    this.state = {
      isOpen: true,
      baseAmount: 1,
      currency: 'Australian Dollar',
      search: '',
    };
    // give acces to state by handleClick
    this.handleClick = this.handleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }
  // if isOpen is true list of currencies will be shown
 
  handleClick() {
    const {isOpen} = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  handleCurrencyClick(name) {
    const { currency } = this.state;
    this.setState({
      currency: name,
    });
  }

  handleChangeSearch(valueSearch) {
    this.setState({
      search: valueSearch,
    });
  }

  makeConversion() {
    const { baseAmount, currency } = this.state;

    const currencyToFind = currencies.find((element) => currency === element.name);

    const { rate } = currencyToFind;

    // toFixed(n) can round number to contain n digits after,
    // return parseFloat((baseAmount * rate).toFixed(2));
    return Math.round((baseAmount * rate) * 100) / 100;
  }

  // render() is executed every time state is changed
  render() {
    const resultAmount = this.makeConversion();

    const {isOpen, baseAmount, currency, search} = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={isOpen} manageClick={this.handleClick} />
        {
          isOpen 
          && (
            <Currencies 
              currencies={currencies} 
              handleCurrencyClick={this.handleCurrencyClick}
              searchValue={search}
              setSearch={this.handleChangeSearch}
          />)
        }
        <Result currency={currency} value={resultAmount} />
      </div>
    );
  }
}

// == Export
export default Converter;
