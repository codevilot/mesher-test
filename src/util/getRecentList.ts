export const getRecentList = () => {
  if (!localStorage.getItem("recent")) {
    const initialState = ["DAI", "USDC"];
    localStorage.setItem("recent", JSON.stringify(initialState));
    return ["DAI", "USDC"];
  } else return JSON.parse(localStorage.getItem("recent"));
};
