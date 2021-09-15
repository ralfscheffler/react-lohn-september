import axios from "axios";
import useFetch from "./useFetch";

const getDayName = (datestr, locale) => {
  var date = new Date(datestr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

const GetShiftdata = (start, end, personalData, shiftData) => {
  let data = [];

  personalData.map((item) => {
    var personalID = item.id;
    const result =
      shiftData &&
      shiftData.filter((shift) => shift.stamm_id.id === personalID);
    if (result.length > 0) {
      data.push(result);
    }

    console.log(result);
  });
  console.log(data);
  return (
    <div className="wrapper">
      <div className="container-md">
        {data &&
          data.map((shifts, index) => (
            <div key={index}>
              <p>{index}</p>
              <p>{shifts[0].stamm_id.Name}</p>
              {shifts.map((items) => (
                <div key={items.id}>
                  {console.log(shifts, data[index])}
                  <p>
                    {getDayName(items.starttime, "DE-de")}:
                    {"  " + items.starttime}
                  </p>
                  <p>{items.endtime}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetShiftdata;
