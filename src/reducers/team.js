export const SET_TEAM_LIST = "SET_TEAM_LIST";
export const SET_TEAM_LIST_MORE = "SET_TEAM_LIST_MORE";

const initialState = {
  teamList: {},
  teamId: [],
  teamPage: 0,
  teamCnt: 0,
};

export function team(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_LIST: {
      return {
        ...state,
        teamId: action.payload.Ids,
        teamList: action.payload.List,
        teamCnt: action.payload.count,
        teamPage: 1
      };
    }
    case SET_TEAM_LIST_MORE: {
      return {
        ...state,
        teamId: [
          ...state.teamId,
          ...action.payload.Ids,
        ],
        teamList: { ...state.teamList, ...action.payload.List },
        teamPage: state.teamPage + 1,
      };
    }

    default: {
      return state;
    }
  }
}