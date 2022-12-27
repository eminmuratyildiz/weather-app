import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { getData } from "./redux/weatherSlice";
import cities from "./data/cities.json";

function App() {
  const [city, setCity] = useState("istanbul");
  const { weather } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(city));
  }, [dispatch, city]);
  return (
    <div className="w-4/5 py-20 mx-auto flex flex-col justify-center items-center space-y-20">
      <select
        className="outline-none bg-blue-300 rounded p-2"
        onChange={(e) => setCity(e.target.value)}
        defaultValue="İSTANBUL"
      >
        {cities.iller.map((item) => (
          <option key={item.plaka} value={item.il_adi}>
            {item.il_adi}
          </option>
        ))}
      </select>
      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
        {Object.values(weather).map((item, index) => (
          <Card key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
