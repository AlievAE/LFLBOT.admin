import { schema, normalize } from "normalizr";
import {
    SET_APPLICATION,
    SET_APPLICATION_LIST,
    SET_ERROR,
    SET_CLEAN,
    ERASE_APPLICATIONS,
    SET_APPLICATION_LIST_MORE
} from "../reducers/application";
import { ApiClientService } from "../services/ApiClientService";

import {
    ADD_PLAYER,
    ERASE_PLAYERS
} from "../reducers/player";

import {
  SET_TEAM_LIST,
  SET_TEAM_LIST_MORE
} from "../reducers/team";

import {
  SET_PLAYER_LIST
} from "../reducers/player";
// import { ApiClientService } from "../services/ApiClientService";
import { HOST_ADDR } from "../constants/constants";

const applicationSchema = new schema.Entity("applications");

function setGlobal(data, type, usedSchema) {
  const { result, entities } = normalize(data.results, [usedSchema]);
  return {
    type: type,
    payload: {
      Ids: result,
      List: entities.applications,
      isError: false,
      count: data.count
    },
  };
}

function setGlobalMore(data, type, usedSchema) {
  const { result, entities } = normalize(data.results, [usedSchema]);
  console.log(result, entities);
  return {
    type: type,
    payload: {
      Ids: result,
      List: entities.applications,
    },
  };
}


export function fetchGlobalMore(path, type, usedSchema, page) {
  return async (dispatch, getState) => {
      const state = getState();
      let page = state.team.teamPage+1;
      if (path === 'applications') {
        page = state.application.applicationPage+1;
      }
      const data = await ApiClientService(path+'/?page='+page);
      console.log(data);
      dispatch(setGlobalMore(data, type, usedSchema));
  };
}

function fetchGlobal(path, type, usedSchema) {
  return async (dispatch) => {
    try {
        const data = await ApiClientService(path+'/');
        dispatch(setGlobal(data, type, usedSchema));
      } catch {
        dispatch(setError());
      }
  };
}

export function setError(errorMsg) {
  return {
    type: SET_ERROR,
    payload: errorMsg,
  };
}

export function fetchApplications() {
  return fetchGlobal('applications', SET_APPLICATION_LIST, applicationSchema)
}

export function fetchApplicationsMore() {
  return fetchGlobalMore('applications', SET_APPLICATION_LIST_MORE, applicationSchema)
}

export function fetchTeams() {
  return fetchGlobal('teams', SET_TEAM_LIST, applicationSchema)
}

export function fetchTeamsMore() {
  return fetchGlobalMore('teams', SET_TEAM_LIST_MORE, applicationSchema)
}

export function fetchPlayers() {
  return fetchGlobal('players', SET_PLAYER_LIST, applicationSchema)
}

export function eraseApplications(selected) {
  return {
    type: ERASE_APPLICATIONS,
    payload: selected
  }
}

export function erasePlayers(team, selected) {
  return {
    type: ERASE_PLAYERS,
    payload: {team, selected}
  }
}

function setIsError() {
  return {
    type: SET_ERROR,
  };
}

function addPlayer(data) {
  return {
    type: ADD_PLAYER,
    payload: data
  }
}

export function deleteSingle(id, path) {
  return async (dispatch /*, getState*/) => {
    {
      const response = await ApiClientService(path+'/'+id + '/', {
        headers: {
          "Content-Type": "Application/json",
        },
        method: "DELETE",
      });
    }
  }
}

export function acceptApplication(data) {
  return async (dispatch /*, getState*/) => {
    try {
      const response = await ApiClientService('players/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "Application/json",
            'Accept': 'Application/json'
        },
      });
      dispatch(addPlayer(response.results));
    } catch { 
      
    }
  }
}