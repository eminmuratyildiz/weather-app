import React from "react";

function Card({ item, index }) {
  const date = new Date(item[0].dt_date);
  return (
    <div className="h-60 bg-blue-300 rounded flex flex-col justify-center items-center md:h-80 lg:h-80 xl:h-80 2xl:h-80">
      <h1 className="w-3/5 text-center">
        {new Intl.DateTimeFormat("tr-TR", { dateStyle: "full" }).format(date)}
      </h1>
      <img
        src={`http://openweathermap.org/img/wn/${
          index === 0 ? item[0].weather[0].icon : item[4].weather[0].icon
        }@2x.png`}
        alt=""
      />
      <h1 className="capitalize">
        {index === 0
          ? item[0].weather[0].description
          : item[4].weather[0].description}
      </h1>
      <p>
        {Math.round(
          item.reduce((acc, obj) => (acc = acc + obj.main.temp), 0) /
            item.length
        )}
        &#176;
      </p>
    </div>
  );
}

export default Card;
