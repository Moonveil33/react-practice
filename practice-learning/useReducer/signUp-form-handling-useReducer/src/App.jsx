import { useReducer } from "react";
import BgOverlay from "./components/BgOverlay";
import FormHeader from "./components/FormHeader";
import userReducer from "./reducers/userReducer";

import {
  FETCH_POSTS,
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PHONE,
  BIRTH_DATE,
  GENDER,
  NATIONALITY,
  MARITAL_STATUS,
} from "./actions/user";

const App = () => {
  const [user, dispatch] = useReducer(userReducer, {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    //  For test and learn api fetch
    posts: [],
  });

  const fetchHandler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    dispatch({
      type: FETCH_POSTS,
      payload: data,
    });
  };

  return (
    <>
      <main className="w-dvw ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[80%]  mx-auto bg-white my-10 rounded-lg p-10 overflow-y-auto shadow"
        >
          <section id="content-wrapper" className="w-[90%] mx-auto">
            <FormHeader />

            {/* بخش اطلاعات شخصی */}
            <div className="mt-10">
              <h2 className="text-xl text-zinc-800 font-bold mb-6">
                اطلاعات شخصی
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    نام
                  </label>
                  <input
                    value={user.firstName}
                    onChange={(event) =>
                      dispatch({
                        type: FIRSTNAME,
                        payload: event.target.value,
                      })
                    }
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    نام خانوادگی
                  </label>
                  <input
                    value={user.lastName}
                    onChange={(event) =>
                      dispatch({
                        type: LASTNAME,
                        payload: event.target.value,
                      })
                    }
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="نام خانوادگی خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    ایمیل
                  </label>
                  <input
                    onChange={(event) =>
                      dispatch({ type: EMAIL, payload: event.target.value })
                    }
                    value={user.email}
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    شماره تلفن
                  </label>
                  <input
                    onChange={(event) =>
                      dispatch({ type: PHONE, payload: event.target.value })
                    }
                    value={user.phone}
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="09123456789"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    تاریخ تولد
                  </label>
                  <input
                    onChange={(event) =>
                      dispatch({
                        type: BIRTH_DATE,
                        payload: event.target.value,
                      })
                    }
                    value={user.birthDate}
                    type="date"
                    name="birthDate"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    جنسیت
                  </label>
                  <select
                    onChange={(event) =>
                      dispatch({ type: GENDER, payload: event.target.value })
                    }
                    value={user.gender}
                    name="gender"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                    <option value="prefer-not">ترجیح نمی‌دهم</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    ملیت
                  </label>
                  <input
                    onChange={(event) =>
                      dispatch({
                        type: NATIONALITY,
                        payload: event.target.value,
                      })
                    }
                    value={user.nationality}
                    type="text"
                    name="nationality"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ایرانی"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-medium mb-2">
                    وضعیت تأهل
                  </label>
                  <select
                    onChange={(event) =>
                      dispatch({
                        type: MARITAL_STATUS,
                        payload: event.target.value,
                      })
                    }
                    value={user.maritalStatus}
                    name="maritalStatus"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="single">مجرد</option>
                    <option value="married">متاهل</option>
                  </select>
                </div>

                <button
                  onClick={fetchHandler}
                  style={{
                    cursor: "pointer",
                    padding: "1rem 2.5rem",
                    backgroundColor: "#e3e3e3",
                    borderRadius: "7px",
                  }}
                >
                  Fetch Data
                </button>
              </div>
            </div>
          </section>
        </form>
        <br />
        <hr />
        <div>
          <ul>
            {user.posts.length
              ? user.posts.map((post) => <li key={post.id}>{post.title}</li>)
              : null}
          </ul>
        </div>
      </main>
      <BgOverlay />
    </>
  );
};

export default App;
