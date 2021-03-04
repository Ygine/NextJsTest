interface PostItem {
  text: string;
  tag: string;
  id: string;
}

export type PostsState = PostItem[];

const PostsReducer = (state = [], action) => {
  switch (action) {
    case 'SUCCESS':
      return {
        type: 'success',
        message: [],
      };
    default:
      return state;
  }
};


export default PostsReducer;
