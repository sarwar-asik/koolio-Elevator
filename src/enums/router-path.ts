const MAIN_ROUTE = {
  ROOT: "/",
  ALL: "*",
};

export const ROUTER_PATH = { ...MAIN_ROUTE }; ////! used for every router of different layout
export type RouterPath = (typeof ROUTER_PATH)[keyof typeof ROUTER_PATH];  /////! FOR DYNAMIC LAYOUT CREATE 
