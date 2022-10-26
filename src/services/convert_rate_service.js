export const convertRate = async (from, to, amount = 1) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f594e3b8edmsh004341e68f67171p1141ebjsna8fb09523300",
      "X-RapidAPI-Host":
        "currency-conversion-and-exchange-rates.p.rapidapi.com",
    },
  };
  return fetch(
    `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response.result)
    .catch((err) => console.error(err));
};
