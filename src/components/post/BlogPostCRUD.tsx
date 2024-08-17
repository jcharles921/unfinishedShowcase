import React, { useState } from "react";
import { Button, Typography, Paper, Box } from "@mui/material";
import BlogPostDialog from "./BlogPostDialog";

const BlogPostCRUD: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleOpenDialog = (post: Post | null = null) => {
    setCurrentPost(post);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSavePost = (post: Post) => {
    if (currentPost) {
      // Edit existing post
      setPosts(
        posts.map((p) => (p.createdAt === currentPost.createdAt ? post : p))
      );
    } else {
      // Create new post
      setPosts([...posts, post]);
    }
    handleCloseDialog();
  };

  const handleDeletePost = (createdAt: string) => {
    setPosts(posts.filter((post) => post.createdAt !== createdAt));
  };

  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <button
        className=" bg-primary  sm:text-xs text-tertiary p-2 rounded-full flex gap-3 max-w-36  sm:py-2 md:py-3 ease-in-out duration-200 hover:scale-[.99] active:scale-[1.03] text-poppins font-medium items-center justify-center hover:bg-[#C2B450] active:bg-[#e0d793] drop-shadow-lg"
        onClick={() => handleOpenDialog()}
      >
        Ajouter un article +
      </button>
      {/* <Box mt={3}>
        {posts.map((post) => (
          <Paper
            key={post.createdAt}
            elevation={3}
            style={{ padding: "16px", marginBottom: "16px" }}
          >
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="subtitle1">{post.subtitles}</Typography>
            <Typography variant="body2">By {post.author}</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleOpenDialog(post)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeletePost(post.createdAt)}
            >
              Delete
            </Button>
          </Paper>
        ))}
      </Box> */}
      <BlogPostDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSavePost}
        post={currentPost}
      />
    </Box>
  );
};

export default BlogPostCRUD;
