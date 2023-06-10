/* eslint-disable react/no-unknown-property */
import { people } from "../assets";
import { useEffect, useState } from "react";
import {
  Pagination,
  Button,
  FormControl,
  NativeSelect,
  InputLabel,
} from "@mui/material";
const ListUsers = () => {
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
  console.log(dropdown)
  }, [dropdown]);
  return (
    <div className="w-full p-6 mx-auto bg-[#e9eff3] ">
      <div className="flex justify-between  w-full">
        <div>
          <Button variant="contained" color="success">
            Add User
          </Button>
        </div>
        <div className="relative mb-3 rounded" data-te-input-wrapper-init>
          <input
            type="search"
            className="bg-white text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleSearch2"
            placeholder="Type query"
          />
          <label
            for="exampleSearch2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
          >
            Search
          </label>
        </div>
      </div>

      {/* table */}
      <div className="flex flex-wrap my-6 -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
            <div className="overflow-x-auto ps">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold uppercase text-left bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70   ">
                      name
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70   ">
                      Gender
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70   ">
                      Status
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70   ">
                      Email
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70   ">
                      id
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70   ">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody className="border-t-2 border-current border-solid w-full">
                  <tr className="w-full relative">
                    <td className="p-2 bg-transparent flex  border-b whitespace-nowrap ">
                      <div className="flex gap-2 px-3 py-1">
                        <div>
                          <img
                            className="inline-flex items-center object-contain justify-center mr-7 h-9 w-9 rounded-xl"
                            src={people}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal ">
                            John Michael
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap ">
                      <p className="mb-0 text-sm leading-normal text-slate-400 ">
                        Manager
                      </p>
                    </td>
                    <td className="p-2 align-middle flex justify-center items-center top-0 bg-transparent border-b whitespace-nowrap ">
                      <span className="py-2.2 rounded-1.8  text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                        <span className="text-xs leading-tight text-slate-700 flex justify-center items-center">
                          <FormControl fullWidth>
                            <InputLabel
                              variant="standard"
                              htmlFor="uncontrolled-native"
                            ></InputLabel>
                            <NativeSelect
                              defaultValue={"InActive"}
                              inputProps={{
                                name: "status",
                                id: "uncontrolled-native",
                              }}
                            >
                              <option value={"Active"}>Active</option>
                              <option value={"InActive"}>InActive</option>
                            </NativeSelect>
                          </FormControl>
                        </span>
                      </span>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap ">
                      <p className="mb-0 text-sm leading-normal text-slate-400 ">
                        john@user.com
                      </p>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap ">
                      <span className="text-sm leading-normal text-slate-400 ">
                        23/04/18
                      </span>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap " >
                     

                      <span className="text-sm leading-normal text-slate-400 ">
                        <div
                          x-data="{ isOpen: true }"
                          className="relative inline-block "
                        >
                          <button
                          type="button"
                           onClick={()=>{
                            setDropdown(!dropdown)
                            console.log(dropdown);
                           }}
                            className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md  focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring  focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                      </span>
                    </td>
                    
                  </tr>
                </tbody>
                {dropdown ? (
                      <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl ">
                        <div className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          View 
                        </div>
                        <div className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Edit
                        </div>
                        <div className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Delete
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
              </table>
              <div
                className="ps__rail-x"
                //  style="left: 0px; bottom: 0px;"
              >
                <div
                  className="ps__thumb-x"
                  tabIndex="0"
                  // style="left: 0px; width: 0px;"
                ></div>
              </div>
              <div
                className="ps__rail-y"
                //  style="top: 0px; right: 0px;"
              >
                <div
                  className="ps__thumb-y"
                  tabIndex="0"
                  // style="top: 0px; height: 0px;"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="">
          <Pagination
            count={100}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            boundaryCount={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
