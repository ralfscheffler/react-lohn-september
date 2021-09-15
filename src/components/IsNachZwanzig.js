import isAfter from "date-fns/isAfter";

const IsNachZwanzig = (end) => {
  const endAsDs = new Date(end);
  console.log(endAsDs)
  const endDate = endAsDs.toDateString();
  console.log(endDate);
  const temp = endDate + " " + "20:00:00";
  console.log(temp);
  const zwanzigUhrBreak = new Date(temp);
  console.log(zwanzigUhrBreak);
  return (isAfter(endAsDs , zwanzigUhrBreak))
};

export default IsNachZwanzig;
