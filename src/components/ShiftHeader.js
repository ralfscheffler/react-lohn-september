import GetStunden from './GetStunden'

const ShiftHeader = ({ data }) => {
  var stunden = 0;
  data &&
    data.map((item) => {
      stunden += GetStunden(item.starttime, item.endtime);
      return stunden;
    });
  return <div>Stunden: {data && stunden}</div>;
};

export default ShiftHeader;
