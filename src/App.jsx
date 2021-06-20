function App() {
  console.error('process.env', process.env);
  const { REACT_APP_NAME } = process.env;
  const numberOfAds = 100;
  return (
    <div>
      <blockquote className="blockquote">
        <h1>{REACT_APP_NAME}</h1>
        {Object.keys(process.env)
          .filter((k) => process.env[k] && true)
          .map((k, idx) => (
            <p key={idx} className="shadow p-3 mb-5 bg-body rounded">
              {k + ':' + process.env[k]}
            </p>
          ))}
        <figcaption className="blockquote-footer">
          Learn enough to be <cite title="Dangerous">Dangerous</cite>
        </figcaption>
      </blockquote>
      <div className="ads">
        {Array.from(Array(numberOfAds)).map((v, k) => (
          <div key={k} className="ad_300x250"></div>
        ))}
      </div>
    </div>
  );
}

export default App;
