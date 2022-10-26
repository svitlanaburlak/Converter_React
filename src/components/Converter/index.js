// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import currencies from 'src/data/currencies';
import './converter.scss';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies currencies={currencies} />
      <Result />
    </div>
  );
}

// == Export
export default Converter;
