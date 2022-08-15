const CREATE = "create";
const MARKDONE = "mark done";
const REMOVE = "remove";
const EMPTYALL = "empty all";

export const ACTION = () => {
  return {
    create: () => ({ type: CREATE }),
    markDone: () => ({ type: MARKDONE }),
    remove: () => ({ type: REMOVE }),
    emptyAll: () => ({ type: EMPTYALL }),
  };
};
