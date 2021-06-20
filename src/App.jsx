function App() {
  console.error('process.env', process.env);
  const { REACT_APP_NAME } = process.env;
  const numberOfAds = 100;
  return (
    <div>
      <blockquote class="blockquote">
        <h1>{REACT_APP_NAME}</h1>
        {JSON.stringify(process.env)}
        <figcaption class="blockquote-footer">
          Learn enough to be <cite title="Dangerous">Dangerous</cite>
        </figcaption>
      </blockquote>
      <div className="ads">
        {Array.from(Array(numberOfAds)).map((v) => (
          <div className="ad_300x250"></div>
        ))}
      </div>
    </div>
  );
}

export default App;
