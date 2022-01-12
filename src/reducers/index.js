import { combineReducers } from "redux";
import { user } from "./user";
import { application } from "./application"
import { player } from "./player";
import { team } from "./team"

export const reducers = combineReducers({ user, application, player, team });