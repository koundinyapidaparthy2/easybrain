export const preLoadedState = {
  actionLoading: false,
  test: "",
  user: {
    fetching: false,
    accessToken: localStorage.getItem("accessToken"),
  },
};
