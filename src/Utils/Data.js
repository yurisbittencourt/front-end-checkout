export const getData = async (description) => {
  const response = await fetch(
    "https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json"
  );
  const data = await response.json();
  return data.results;
};
