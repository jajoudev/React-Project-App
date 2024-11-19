function Heading({ contentH2, contentH1 }) {
  return (
    // <> = React Fragment ça permet de grouper plusieurs éléments d'un composant au lieu d'une div
    <>
      {contentH2 && <h2>{contentH2}</h2>}
      {contentH1 && <h1>{contentH1}</h1>}
    </>
  );
}

export default Heading;
