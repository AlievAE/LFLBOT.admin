export const SET_APPLICATION = "SET_APPLICATION";
export const SET_APPLICATION_LIST = "SET_APPLICATION_LIST";
export const SET_ERROR = "SET_ERROR";
export const SET_CLEAN = "SET_CLEAN";
export const ERASE_APPLICATIONS = "ERASE_APPLICATION";
export const SET_APPLICATION_LIST_MORE = "SET_APPLICATION_LIST_MORE";

const initialState = {
  applicationList: {},
  applicationId: [],
  isError: false,
  applicationPage: 0,
  applicationCnt: 0,
};

export function application(state = initialState, action) {
  switch (action.type) {
    case SET_APPLICATION_LIST: {
      return {
        ...state,
        applicationId: action.payload.Ids,
        applicationList: action.payload.List,
        applicationPage: 1,
        applicationCnt: action.payload.count,
        isError: false,
      };
    }
    case SET_APPLICATION_LIST_MORE: {
      return {
        ...state,
        applicationId: [
          ...state.applicationId,
          ...action.payload.Ids,
        ],
        applicationList: { ...state.applicationList, ...action.payload.List },
        applicationPage: state.applicationPage + 1,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        isError: true
      };
    }

    case ERASE_APPLICATIONS: {
      const selected = action.payload;
      return {
        ...state,
        applicationId: state.applicationId.filter(function (item) {
          return !selected.includes(item);
        }),
        applicationCnt: state.applicationCnt - selected.length,
      };
    }

    default: {
      return state;
    }
  }
}