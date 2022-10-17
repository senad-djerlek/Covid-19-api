import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./StateCard.css";

export default function StateCard({
  countryName,
  countryImg,
  new_cases,
  new_death,
  new_recovered,
  total_active,
}) {
  let a = `https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/${countryImg}.svg`; //url for flag
  return (
    <div className="  w-2/3  shadow-xl rounded p-4 ml-auto mr-auto mt-2 mb-2 grid grid-flow-row auto-rows-max bg-slate-50">
      <div className=" bg-white flex flex-col justify-center items-center row-span-1 p-2 rounded-md">
        <div className=" flex justify-center gap-1 items-center bg-white rounded-md m-1 p-3">
          <img src={a} className=" w-14 opacity-75 block" alt="border" />{" "}
          <div className="  flex  items-baseline ">
            <h2 className=" font-bold text-2xl text-gray-600">{countryName}</h2>
          </div>
        </div>
      </div>
      {new_cases && new_death && new_recovered && total_active ? (
        <div className=" grid grid-rows-2">
          <div className="grid grid-cols-3 gap-6  pt-2 pb-2 rounded  justify-evenly">
            <h4 className="grid grid-rows-2  bg-white rounded-lg text-base pt-3 pb-3">
              <span className="inline-block text-2xl text-violet-500 font-bold text-center">
                {new_cases}
              </span>
              <span className="inline-block text-gray-500 font-medium text-center">
                New Cases{" "}
              </span>
            </h4>
            <h4 className="text-xl grid grid-rows-2  bg-white rounded-lg pt-3 pb-3 ">
              <span className="inline-block text-2xl text-red-500 font-bold text-center">
                {new_death}
              </span>
              <span className="inline-block text-base text-gray-500 font-medium text-center">
                New Deaths{" "}
              </span>
            </h4>
            <h4 className="text-xl grid grid-rows-2  bg-white rounded-lg pt-3 pb-3">
              <span className="inline-block text-2xl text-green-500 font-bold text-center">
                {new_recovered}
              </span>
              <span className="inline-block text-base text-gray-500 font-medium text-center">
                New Recovered{" "}
              </span>
            </h4>
          </div>
          <h4 className="text-xl grid grid-rows-2  bg-white rounded-lg p-3">
            <span className="inline-block text-2xl text-gray-500 font-bold text-center">
              {total_active}
            </span>
            <span className="inline-block text-base text-gray-600 font-medium text-center">
              Total Active
            </span>
          </h4>
        </div>
      ) : (
        // <h4 className="text-xl grid grid-rows-2  bg-white rounded-lg p-3">
        //   <span className="inline-block text-base text-gray-700 font-medium text-center">
        //     Loading...
        //   </span>
        // </h4>

        <div className="grid grid-rows-2">
          <div className="grid grid-cols-3 gap-6  pt-2 pb-2 rounded  justify-evenly">
            <Skeleton variant="rounded" animation="wave" height={90} />
            <Skeleton variant="rounded" animation="wave" height={90} />
            <Skeleton variant="rounded" animation="wave" height={90} />
          </div>
          <Skeleton variant="rounded" animation="wave" height={90} />
        </div>
      )}
    </div>
  );
}
