export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // REMOVE AFTER FINISHED DEV
  //token:
  // "BQAz1xtuOqpup7QEMm0sV88BmiP3ZzHjf-5IGZEDQluAWS45MV6rVSt6gRQYUpSZzRkncb_dX-rxDVWKYWT4hEAH5khEdRq-H5hiSKj1ZoqEMyL3FpxpqNHDmtlHOctcTi5zt-4XZDY-aTm7M3pkeaUI7n0ZfoOo",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
