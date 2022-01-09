const IsNextDay = (start, end) => {
  const startAsDs = new Date(start);
  const temp = startAsDs.toDateString();

  //const midNight = temp+' '+'00:00:00'
  //const midNightAsDs = new Date(midNight)
  const endAsDs = new Date(end);
  const temp2 = endAsDs.toDateString();

  return temp2 > temp;
};

export default IsNextDay;
