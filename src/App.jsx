import { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import mockData from "./data/_mock_.json";
import ItemsCard from "./components/ItemsCard";
import Input from "./components/Input";
import _get from "lodash/get";

function App() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(mockData);
  const [selectedValue, setSelectedValue] = useState({});
  const [gender, setGender] = useState([]);
  const [country, setcountry] = useState([]);

  useEffect(() => {
    const genderData = new Set(mockData.map((e) => e.gender));
    const countryData = new Set(mockData.map((e) => e.country));
    setGender([...genderData]);
    setcountry([...countryData]);
  }, []);

  useEffect(() => {
    setData(
      mockData.filter((e) => {
        return (
          e.first_name.toLowerCase().includes(keyword.trim()) ||
          e.last_name.toLowerCase().includes(keyword.trim())
        );
      })
    );
    if (!keyword) setSelectedValue({});
  }, [keyword]);

  useEffect(() => {
    const country = _get(selectedValue, "country", "");
    const gender = _get(selectedValue, "gender", "");

    const selectedKeyword = Object.values(selectedValue);

    if (!country && !gender) return setData(mockData);

    if (country && gender) {
      return setData(
        mockData.filter((e) => {
          return (
            selectedKeyword.includes(e.country) &&
            selectedKeyword.includes(e.gender)
          );
        })
      );
    }

    setData(
      mockData.filter((e) => {
        return (
          selectedKeyword.includes(e.country) ||
          selectedKeyword.includes(e.gender)
        );
      })
    );
  }, [selectedValue]);

  const onClickFilterItems = (items, type) => {
    setSelectedValue({
      ...selectedValue,
      [type]: selectedValue[type] === items ? "" : items,
    });
  };

  const onClear = () => {
    setData(mockData);
    setKeyword("");
    setSelectedValue({});
  };

  return (
    <div className="mt-[50px] text-center mx-[50px]">
      <h1 className="font-normal text-[50px] mb-[60px]">Test</h1>

      {/* filter gender button */}
      <div className="flex gap-[30px] justify-around flex-wrap mb-[60px]">
        {gender.map((e, index) => {
          return (
            <FilterButton
              items={e}
              key={`${e}_${index}`}
              onClickFilterItems={onClickFilterItems}
              type={"gender"}
              selectedValue={selectedValue}
              keyword={keyword}
            />
          );
        })}
      </div>

      <hr className="mb-[60px]" />

      {/* filter country button */}
      <div className="flex gap-[30px] justify-center flex-wrap mb-[60px]">
        {country.map((e, index) => {
          return (
            <FilterButton
              items={e}
              key={`${e}_${index}`}
              onClickFilterItems={onClickFilterItems}
              type={"country"}
              selectedValue={selectedValue}
              keyword={keyword}
            />
          );
        })}
      </div>

      {/* Input */}
      <Input keyword={keyword} setKeyword={setKeyword} onClear={onClear} />

      {/* Items Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 px-10 ">
        {data.map((e, index) => {
          return <ItemsCard items={e} key={e.id} />;
        })}
      </div>
      {!data.length && (
        <div className="text-center w-full text-[32px] text-red-500">
          *Data not found*
        </div>
      )}
    </div>
  );
}

export default App;
