import { useEffect, useState } from "react";
import loc from '../../assets/images/location.png'
import '../../App.css'
import '../../index.css'
export default function Header() {
  const [selectedValue, setSelectedValue] = useState("");
  const [weather, setWeather] = useState(null);
  const handClick = (e) => {
    let city = e.target.value;
    setSelectedValue(city);
  };
  let APIkey = "a2aeb178122ce7ee8d10ef846e85b589";
  let fetchAPI = `https://api.openweathermap.org/data/2.5/weather?q=${selectedValue}&appid=${APIkey}`;
  useEffect(() => {
    if (!selectedValue) return;
    fetch(`${fetchAPI}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, [selectedValue]);

  return (
    <>
      <div className="flex  justify-between border-b-[1px] w-full items-center px-10 h-24">
        <div className="flex gap-x-1 items-center">
            <img src={loc} alt="" />
        <select
          className="font-Vazir w-[107px] max-h-[60px] h-[40px] "
          onChange={handClick}
          value={selectedValue}
          name=""
          id=""
        >
        <option value="">انتخاب شهر</option>
          <option value="tehran">تهران</option>
          <option value="shiraz">شیراز</option>
          <option value="Esfahan">اصفهان</option>
          <option value="tabriz">تبریز</option>
          <option value="Qom">قم</option>
          <option value="Kerman">کرمان</option>
          <option value="Kermanshah">کرمانشاه</option>
          <option value="qazvin">قزوین</option>
          <option value="hamedan">همدان</option>
          <option value="zanjan">زنجان</option>
          <option value="yazd">یزد</option>
          <option value="ahvaz">اهواز</option>
          <option value="mashhad">مشهد</option>
          <option value="rasht">رشت</option>
          <option value="sari">ساری</option>
          <option value="ilam">ایلام</option>
          <option value="urmia">ارومیه</option>
          <option value="gorgan">گرگان</option>
        </select>
        </div>
        <h1 className="font-Popins">Starweather</h1>
      </div>

        <div className="flex w-[437px] h-[637px] justify-center">
      {weather && (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <img className="w-[200px]  h-[200px]" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
              <p className="text-[80px] text-[#051320] ">{Math.floor(weather.main.temp - 273)}°C</p>
              <div>
                <p>{weather.name}</p>
              </div>
              <div className="w-full set-width h-24 rounded-xl px-10 py-4  flex items-center flex-col border gap-y-5 justify-between border-white/5 ">
                <div className="flex justify-between w-full">
              <span>رطوبت</span>
              <p>{weather.main.humidity}%</p>
                </div>
                <div className="flex justify-between w-full">
                    <span>باد</span>
                    <p>{weather.wind.speed}m/s</p>
                </div>
              </div>
        </div>
      )}
        </div>
    </>
  );
}
