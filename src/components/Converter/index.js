// == Import
import Header from 'src/components/Header';
import Result from 'src/components/Result';
import Currencies from 'src/data/currencies';
import './converter.css';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <Result />
    </div>
  );
}

// == Export
export default Converter;
