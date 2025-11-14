import quince from "../assets/15.png";

const Portada = () => {
  return (
    <section className="d-flex flex-column justify-content-end align-items-center  portada">
      <aside className="linea">
        <h2 className="enfoque mis">
          {"mis".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
        <img src={quince} alt="" width={300} />
        <h2 className="enfoque años">
          {"años".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
      </aside>

      <h1 className="enfoque">
        {"Maia".split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default Portada;
