export const dispatchHandler = (state, dispatchedItem) => {
  //   console.log(priorStates, dispatchedItem);
  if (dispatchedItem.type === "NAME") {
    return {
      ...state,
      people: [...state.people, dispatchedItem.payload],
      isShowModal: true,
      modalContent: "SUCCESS",
    };
  }
  if (dispatchedItem.type === "EMPTY") {
    return {
      ...state,
      modalContent: "Empty Field",
      isShowModal: true,
    };
  }
  if (dispatchedItem.type === "REMOVE") {
    const newPeople = state.people.filter(
      (person) => person.id !== dispatchedItem.payload.Id
    );
    return {
      ...state,
      people: newPeople,
      isShowModal: true,
      modalContent: "Item Removed",
    };
  }
  if (dispatchedItem.type === "CLOSE_MODAL") {
    return {
      ...state,
      isShowModal: false,
    };
  }
};
