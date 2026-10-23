import Step from "../components/Step";
import { useState } from "react";
import imgStep from "../assets/img.png";

export default function Login() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    isEmpolyee: false,
    gender: "",
    country: "",
    desc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender:user.gender,
      isEmpolyee:user.isEmpolyee,
      country: user.country,
      description: user.desc,

    };
    console.log(data);
  };

  return (
    <main className="bg-[#EFF5FF] min-h-screen flex justify-center items-center p-2 sm:p-4 md:p-8">
      <section className="all-info bg-white flex flex-row w-full max-w-4xl rounded-2xl p-2 sm:p-4 gap-3 sm:gap-6 shadow-sm overflow-hidden">
        
        <div className="img-cover relative  sm:w-50 md:w-67.5 shrink-0">
          <img
            src={imgStep}
            alt="step-photo"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="steps absolute top-3 left-2 sm:top-8 sm:left-5 md:top-10 md:left-8 flex flex-col gap-3 sm:gap-6 md:gap-8 items-start max-w-[calc(100%-16px)]">
            <Step num={1} content={"YOUR INFO"} />
            <Step num={2} content={"SELECT PLAN"} />
            <Step num={3} content={"ADD-ONS"} />
            <Step num={4} content={"SUMMARY"} />
          </div>
        </div>

        <div className="personal-inputs flex-1 pt-2 sm:pt-6 md:pt-8 pr-1 sm:pr-4 md:pr-8">
          <div className="title">
            <h1 className="text-[#022959] text-lg sm:text-2xl md:text-[32px] font-bold">
              Personal info
            </h1>
            <p className="text-[#9699AA] text-xs sm:text-sm md:text-[16px] font-bold pt-1 sm:pt-2">
              Please provide your name, email address, and phone number.
            </p>
          </div>

          <form className="pt-3 sm:pt-6 flex flex-col gap-3 sm:gap-5" onSubmit={handleSubmit}>
            <div className="div-input flex flex-col gap-1">
              <label className="text-[#022959] text-xs sm:text-[14px] font-bold">
                Name
              </label>
              <input
                className="border-2 border-[#D6D9E6] rounded-md py-1.5 sm:py-2.5 md:py-3 px-2.5 sm:px-4 font-bold text-xs sm:text-[15px] md:text-[16px] text-[#022959] placeholder-[#9699AA] outline-none focus:border-[#022959] transition-colors"
                type="text"
                placeholder="e.g. Stephen King"
                onChange={(e) => {
                  const newUser = { ...user, name: e.target.value };
                  setuser(newUser);
                }}
                value={user.name}
              />
            </div>

            <div className="div-input flex flex-col gap-1">
              <label className="text-[#022959] text-xs sm:text-[14px] font-bold">
                Email Address
              </label>
              <input
                className="border-2 border-[#D6D9E6] rounded-md py-1.5 sm:py-2.5 md:py-3 px-2.5 sm:px-4 font-bold text-xs sm:text-[15px] md:text-[16px] text-[#022959] placeholder-[#9699AA] outline-none focus:border-[#022959] transition-colors"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                onChange={(e) => {
                  const newUser = { ...user, email: e.target.value };
                  setuser(newUser);
                }}
                value={user.email}
              />
            </div>

            <div className="div-input flex flex-col gap-1">
              <label className="text-[#022959] text-xs sm:text-[14px] font-bold">
                Phone Number
              </label>
              <input
                className="border-2 border-[#D6D9E6] rounded-md py-1.5 sm:py-2.5 md:py-3 px-2.5 sm:px-4 font-bold text-xs sm:text-[15px] md:text-[16px] text-[#022959] placeholder-[#9699AA] outline-none focus:border-[#022959] transition-colors"
                type="number"
                placeholder="e.g. +1 234 567 890"
                onChange={(e) => {
                  const newUser = { ...user, phone: e.target.value };
                  setuser(newUser);
                }}
                value={user.phone}
              />
            </div>

            <select
              className="cursor-pointer py-1.5 sm:py-2.5 md:py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base rounded-md border-2 border-[#D6D9E6] text-[#022959] font-bold outline-none focus:border-[#022959] transition-colors"
              onChange={(e) => {
                const newUser = { ...user, country: e.target.value };
                setuser(newUser);
              }}
              value={user.country}
            >
              <option value="Egypt">Egypt</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Turkey">Turkey</option>
            </select>

            <div className="check-box flex items-center gap-2">
              <input
                type="checkbox"
                id="isEmployee"
                className="w-4 h-4 sm:w-5 sm:h-5 accent-[#022959] cursor-pointer"
                onChange={() => {
                  const newUser = { ...user, isEmpolyee: !user.isEmpolyee };
                  setuser(newUser);
                }}
                checked={user.isEmpolyee}
              />
              <label htmlFor="isEmployee" className="text-[#022959] text-xs sm:text-[16px] font-bold cursor-pointer">
                Is Employee
              </label>
            </div>

            <div className="radio-box flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <input
                  type="radio"
                  id="female"
                  className="w-4 h-4 sm:w-5 sm:h-5 accent-[#022959] cursor-pointer"
                  name="gender"
                  onChange={() => {
                    const newUser = { ...user, gender: "female" };
                    setuser(newUser);
                  }}
                  checked={user.gender === "female"}
                />
                <label htmlFor="female" className="text-[#022959] text-xs sm:text-[16px] font-bold cursor-pointer">
                  Female
                </label>
              </div>

              <div className="flex items-center gap-1.5">
                <input
                  type="radio"
                  id="male"
                  className="w-4 h-4 sm:w-5 sm:h-5 accent-[#022959] cursor-pointer"
                  name="gender"
                  onChange={() => {
                    const newUser = { ...user, gender: "male" };
                    setuser(newUser);
                  }}
                  checked={user.gender === "male"}
                />
                <label htmlFor="male" className="text-[#022959] text-xs sm:text-[16px] font-bold cursor-pointer">
                  Male
                </label>
              </div>
            </div>

            <textarea
              rows={2}
              className="text-[#022959] text-xs sm:text-[14px] p-2 sm:p-3 rounded-md border-2 border-[#D6D9E6] font-medium outline-none focus:border-[#022959] transition-colors resize-none"
              placeholder="Write Here..."
              onChange={(e) => {
                const newUser = { ...user, desc: e.target.value };
                setuser(newUser);
              }}
              value={user.desc}
            ></textarea>

            <button
              className="bg-[#022959] hover:bg-[#173a6b] text-white py-2 sm:py-3 px-5 sm:px-8 rounded-md ml-auto text-xs sm:text-base font-medium cursor-pointer transition-colors"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}