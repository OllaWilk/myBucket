// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [...posts, action.payload];
    case 'DELETE_POST':
      return posts;
    default:
      return posts;
  }
};
