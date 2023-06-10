/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../Axios";
import {
  Pagination,
  Button,
  FormControl,
  NativeSelect,
  InputLabel,
} from "@mui/material";
import { people } from "../assets";


const ListUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLength, setIsLength] = useState(false)
  const [status,setStatus] = useState(false)
  useEffect(() => {
    axios.get("/api/getusers").then((response) => {
      const data = response.data;
      if(data.length !== 0){
        setUsers(data);
        setIsLength(true)
      }else {
        setIsLength(false)
      }
    });
  }, []);

  
  const Navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDropClick = (id) => {
    if (selectedUserId) {
      setSelectedUserId(null);
    } else {
      setSelectedUserId(id);
    }
  };

  const filteredList = searchQuery
    ? users.filter(
        (user) =>
          user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.gender.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;
// eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(5);
const [currentPage, setCurrentPage] = useState(1);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedItems = filteredList.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredList.length / itemsPerPage);
const handlePageChange  = (event, value) => {
  setCurrentPage(value);
};

const handleStatusChange = (event, userId) => {
  const newStatus = event.target.value;
  const data = {
    status : newStatus,
    id : userId,
  }
  axios.patch('/api/editstatus',{ data }).then((response)=>{
    if(response.status == 200){
      setStatus(true)
    }else{
      setStatus(false)
    }
  })
};
useEffect(() => {
  axios.get("/api/getusers").then((response) => {
    const data = response.data;
    if(data.length !== 0){
      setUsers(data);
      setIsLength(true)
    }else {
      setIsLength(false)
    }
  });
}, [status]);
  return (
    <div className="w-full p-6 mx-auto bg-[#e9eff3] ">
      <div className="flex justify-between  w-full">
        <div onClick={() => Navigate("/adduser")}>
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
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <label
            htmlFor="exampleSearch2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
          >
            Search
          </label>
        </div>
      </div>

      {/* table */}
      <div className="flex flex-wrap my-6 -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <div className=" flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
            <div className="overflow-x-auto ps">
              <table className="items-center  w-full mb-0 align-top border-gray-200 text-slate-500 ">
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
                  { isLength ? 
                    displayedItems.map((user) => {
                      return (
                        <tr className="w-full relative" key={user._id}>
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
                                  {user.fullname}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap ">
                            <p className="mb-0 text-sm leading-normal text-slate-400 ">
                              {user.gender}
                            </p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap ">
                            <span className="py-2.2 rounded-1.8  text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                              <span className="text-xs leading-tight text-slate-700 flex justify-center items-center">
                                <FormControl fullWidth>
                                  <InputLabel
                                    variant="standard"
                                    htmlFor="uncontrolled-native"
                                  ></InputLabel>
                                  <NativeSelect
                                    defaultValue={`${user.status}`}
                                    inputProps={{
                                      name: "status",
                                      id: "uncontrolled-native",
                                    }}
                                    onChange={(event) => handleStatusChange(event, user._id)}
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
                              {user.email}
                            </p>
                          </td>
                          <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap ">
                            <span className="text-sm leading-normal text-slate-400 ">
                              {user._id}
                            </span>
                          </td>
                          <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap ">
                            <span className="text-sm leading-normal text-slate-400 ">
                              <div className="relative inline-block ">
                                <button
                                  type="button"
                                  onClick={() => handleDropClick(user._id)}
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

                                {selectedUserId === user._id ? (
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
                                  <React.Fragment></React.Fragment>
                                )}
                              </div>
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  :
                  <React.Fragment></React.Fragment>
                  }
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div>
          <Pagination
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            boundaryCount={1}
            count={totalPages} page={currentPage} onChange={handlePageChange }
          />
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
