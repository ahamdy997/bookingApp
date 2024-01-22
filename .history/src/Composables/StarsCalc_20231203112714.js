const stars = (data) => {
  return Number(
    data % 2 == 0
      ? Math.round(+data * 10) / 2 / 10
      : Math.round((+data * 10 + 1) / 10) / 2
  );
};
export default stars;
