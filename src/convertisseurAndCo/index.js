import CurrencyConvertisseurContainer from "./CurrencyConverter";
import ImcCalculatorContainer from "./IMCCalculator";

import styles from "./styles.module.scss";

const convertisseurAndCo = () => {
  return (
    <>
      <h1 className={styles.title}>Converter & Co</h1>
      <div className={styles.currency}>
        <CurrencyConvertisseurContainer />
      </div>
      <ImcCalculatorContainer />
    </>
  );
};

export default convertisseurAndCo;
