import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const val=useSelector((store) => store.config.lang);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute w-full px-8 py-1 bg-gradient-to-b from-black to-gray-900 z-20 flex items-center justify-between">
      {/* Logo */}
      <img className="w-40 cursor-pointer" src={LOGO} alt="logo" onClick={() => navigate("/browse")}/>

      {user && (
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          {/* Language Selector */}
            {showGptSearch && (
            <select
              className="p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:ring focus:ring-gray-500"
              onChange={handleLanguageChange}
              value = {val} // Set value from Redux
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            onClick={handleGPTSearchClick}
            className="py-2 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-red-600 to-red-800 hover:brightness-110 transition-all"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          {/* User Profile Section */}
          <div className="flex flex-col items-center">
            <img
              className="w-12 h-12 border border-gray-400 cursor-pointer"
              src={user?.photoURL}
              alt="User Icon"
            />
            <button
              onClick={handleSignOut}
              className="mt-2 text-white text-sm font-semibold bg-gray-700 px-4 py-1 rounded-md hover:bg-gray-600 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
