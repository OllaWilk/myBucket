// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [...posts, action.payload];
    case 'UPDATE_POST':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case 'DELETE_POST':
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
