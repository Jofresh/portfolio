import "./UnderConstruction.scss";

function UnderConstruction() {
  return (
    <div className="under-construction">
      <h3 className="under-construction__header">Under construction...</h3>
      <a
        href="https://github.com/Jofresh/portfolio"
        target="_blank"
        rel="noreferrer"
        className="under-construction__info"
      >
        See on Github
      </a>
    </div>
  );
}

export default UnderConstruction;
