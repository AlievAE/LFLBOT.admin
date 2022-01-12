export const SET_PLAYER_LIST = "SET_PLAYER_LIST";
export const ADD_PLAYER = "ADD_PLAYER";
export const ERASE_PLAYERS = "ERASE_PLAYERS";

const initialState = {
  playerList: {},
  playerId: [],
};

export function player(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_LIST: {
      return {
        ...state,
        playerId: action.payload.Ids,
        playerList: action.payload.List,
      };
    }

    case ERASE_PLAYERS: {
      const selected = action.payload.selected;
      return {
        ...state,
        playerId: state.playerId.filter(function (item) {
          return !selected.includes(item);
        }),
      };
    }

    case ADD_PLAYER: {
      const player = action.payload;
      let playerIds = state.playerId;

      if (!playerIds.includes(player.id)) {
        playerIds.push(player.id);
      }

      return {
        ...state,
        playerId: playerIds,
        playerList: {
          ...state.playerList,
          [player.id]: player,
        },
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
}