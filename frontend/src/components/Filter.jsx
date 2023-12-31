import React from "react";
import { MdAddLocationAlt } from "react-icons/md";

const Filter = ({ handleChange, handleChangeCategory, categorys, uniqLocations, setSort }) => {
  return (
    <>
      <div className="bg-white p-4 border">
        <h3 className="font-semibold text-xl text-orange-500 mb-4">Find Job By Category</h3>
        <select
          className="w-full outline-none text-sm bg-slate-100 py-2 px-4 rounded-md focus:bg-gray-100"
          onChange={handleChangeCategory}
        >
          <option value="" className=" bg-slate-400 text-sm font-medium ">
            All Category
          </option>
          {categorys?.map((c, i) => (
            <option className=" bg-slate-400 text-sm font-medium capitalize" key={i + 1} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-white p-4 mt-4 border">
        <h3 className="font-semibold text-xl text-orange-500 mb-4">Find Job By Category</h3>
        <div className="flex flex-col mt-4">
          {uniqLocations.map((lc, i) => (
            <div className="flex items-center m-2 px-4 rounded" key={i + 1}>
              <input
                type="radio"
                name="all"
                id={i + 1}
                value={lc}
                onClick={(e) => handleChange(e)}
                className="hidden"
              />
              <label
                htmlFor={i + 1}
                className="ml-2 text-slate-500 font-medium text-[14px] cursor-pointer flex  gap-x-6 items-center capitalize"
              >
                <span className="text-orange-500 text-[16px]">
                  <MdAddLocationAlt />
                </span>
                {lc}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 my-4 border">
        <h3 className="font-semibold text-xl text-orange-500 mb-4">Sort By Date</h3>

        <select
          className="w-full outline-none text-sm bg-slate-100 py-2 px-4 rounded-md focus:bg-gray-100 capitalize"
          onClick={(e) => setSort(e.target.value)}
        >
          <option className="bg-slate-400 font-medium text-sm" value="">
            Sort Now
          </option>
          <option className=" bg-slate-400 font-medium text-sm" value="new">
            New to Old
          </option>
          <option className="bg-slate-400 font-medium text-sm" value="old">
            Old to New
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
