import CommentLeave from "./CommentLeave";
import CommentsList from "./CommentsList";

const BlogComments = () => {
  return (
    <>
      <div className="blog-comments">
        <CommentsList />
        <CommentLeave />
      </div>
    </>
  );
};

export default BlogComments;
