import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({
    fullname:"",
    email:"",
    gender:"",
  })

  useEffect(() => {
   console.log(formData)
  }, [formData]);
  return (
    <div className="flex item-center justify-center">
      <div className="w-full p-6 mx-auto mt-40 ">
        <div className="flex flex-wrap -mx-3  ">
          <div className="w-full max-w-full px-3 flex-0">
            <div className="mb-12">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
                  <form className="relative mb-32">
                    <div
                      form="user"
                      className="absolute top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 shadow-xl opacity-100  rounded-2xl bg-clip-border"
                    >
                      <h5 className="mb-0 font-bold ">Add User</h5>
                      <p className="mb-0 text-sm leading-normal">
                        Mandatory informations
                      </p>
                      <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                          <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                            <label
                              className="mb-2 ml-1 text-xs font-bold text-slate-700 "
                              htmlFor="fullname"
                            >
                              Full Name
                            </label>
                            <input
                            onChange={(e)=>{
                              setFormData({...formData, [e.target.name]:e.target.value})
                            }}
                              type="text"
                              name="fullname"
                              placeholder="eg. Michael"
                              className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                          <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                            <label
                              className="mb-2 ml-1 text-xs font-bold text-slate-700 /80"
                              htmlFor="email"
                            >
                              Email Address
                            </label>
                            <input
                            onChange={(e)=>{
                              setFormData({...formData, [e.target.name]:e.target.value})
                            }}
                              type="text"
                              name="email"
                              placeholder="eg. Prior"
                              className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                          <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                            <FormControl>
                              <label
                                id="demo-controlled-radio-buttons-group"
                                className="text-black font-semibold"
                              >
                                Gender
                              </label>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={formData.gender}
                                onChange={(e)=>{
                                  setFormData({...formData, ["gender"]:e.target.value})
                                }}
                              >
                                <div className="flex">
                                  <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                  />
                                  <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                  />
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </div>
                        </div>
                        <div className="flex mt-6">
                          <button
                            type="submit"
                            aria-controls="address"
                            className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs  bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
