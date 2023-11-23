import "./styles/QuoteBox.css";

const QuoteBox = ({ quote, handleChangeQuote }) => {
  //tambien funcionaria extraer de quote la frase y citar abajo const{phrase}=quote;
  const { author } = quote;
  return (
    <article className="quotebox">
      <img className="quotebox_planet" src="/images/Vector.png" alt=""/>
      <h1 className="quotebox__title">INFOGALAX</h1>
      <div className="quotebox__box">
        <p>{quote.phrase}</p>
      </div>
      <button className="quotebox__btn" onClick={handleChangeQuote}>
      <img src="/images/boton.svg" alt=""/>
      </button>
      <div className="quotebox__author"> {author}</div>
    </article>
  );
};
export default QuoteBox;
