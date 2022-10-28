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
    // if isOpen is true list of currencies will be shown
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

  componentDidMount() {
    // Closes currency list with ESC and opens with ENTER
    document.addEventListener('keyup', (evt) => {
      console.log(evt.key);
      if (evt.key === 'Escape') {
        this.setState({
          isOpen: false,
        });
      }
      else if (evt.key === 'Enter') {
        this.setState({
          isOpen: true,
        });
      }
    });
    
  }

  // Every time component (its state) gets updated, this method is launched
  componentDidUpdate() {
    const { currency } = this.state;
    document.title = currency;
  }
 
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
    // chnages value of state upon the input change
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

  /**
   * Function returns the list of the currencies according to the criteria of the research:
   * @search of our state
   */
  getFilteretedCurrencies() {
    const { search } = this.state;
    let filteredCurrencies = currencies;

    if(search.length > 0) {
      filteredCurrencies = currencies.filter((currency) => {
        const nameLowerCase = currency.name.toLowerCase();
        const searchLowerCase = search.toLowerCase();
        return nameLowerCase.includes(searchLowerCase);
      })
    }
    // console.log(filteredCurrencies);
    return filteredCurrencies;
  }

  // render() is executed every time state is changed
  render() {
    const resultAmount = this.makeConversion();
    const filteretedCurrencies = this.getFilteretedCurrencies();

    const {isOpen, baseAmount, currency, search} = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={isOpen} manageClick={this.handleClick} />
        {
          isOpen 
          && (
            <Currencies 
              currencies={filteretedCurrencies} 
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
