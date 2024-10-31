const EmailReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload.list.map((email) => ({
          ...email,
          isRead: false,
          isFavorite: false,
        })),
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        data: state.data.map((email) =>
          email.id === action.payload
            ? { ...email, isFavorite: !email.isFavorite }
            : email
        ),
      };

    case "MARK_AS_READ":
      return {
        ...state,
        data: state.data.map((email) =>
          email.id === action.payload ? { ...email, isRead: true } : email
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export { EmailReducer };
