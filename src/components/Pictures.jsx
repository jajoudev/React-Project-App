function Pictures({pic1, pic2}) {
  return (
    <>
      {pic1 && <img src={pic1} alt="" />}
      {pic2 && <img src={pic2} alt="" />}
    </>
  );
}

export default Pictures;
