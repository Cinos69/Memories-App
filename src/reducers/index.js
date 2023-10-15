import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

export default combineReducers({ posts, auth });                          //key and value are of same name 'posts':posts, so we specify only one//