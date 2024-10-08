import LOGO from "../assets/images/Netflix_Logo_PMS.png";

export const NET_LOGO = LOGO;
export const PHOTO_URL = "https://avatars.githubusercontent.com/u/67818016?v=4";
export const MOVIE_OPT = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg";

export const SUP_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "tam", name: "தமிழ்" },
  { identifier: "hin", name: "हिंदी" },
  { identifier: "kor", name: "한국인" },
];

export const OPENAI_KEY = `${process.env.REACT_APP_OPENAI_KEY}`;
