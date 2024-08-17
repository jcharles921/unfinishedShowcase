import React, { useState, ChangeEvent } from "react";
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface BlogPostDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (post: Post) => void;
  post?: any;
}

const BlogPostDialog: React.FC<BlogPostDialogProps> = ({
  open,
  onClose,
  onSave,
  post,
}) => {
  const [title, setTitle] = useState<string>(post?.title || "");
  const [subtitles, setSubtitles] = useState<string>(post?.subtitles || "");
  const [coverPhoto, setCoverPhoto] = useState<string>(post?.coverPhoto || "");
  const [paragraphs, setParagraphs] = useState<Paragraph[]>(
    post?.paragraphs || [{ text: "", images: [] }]
  );
  const [author, setAuthor] = useState<string>(post?.author || "");

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, { text: "", images: [] }]);
  };

  const handleRemoveParagraph = (index: number) => {
    const newParagraphs = paragraphs.filter((_, i) => i !== index);
    setParagraphs(newParagraphs);
  };

  const handleParagraphChange = (
    index: number,
    field: keyof Paragraph,
    value: string | string[]
  ) => {
    const newParagraphs = paragraphs.map((paragraph, i) =>
      i === index ? { ...paragraph, [field]: value } : paragraph
    );
    setParagraphs(newParagraphs);
  };

  const handleSave = () => {
    const updatedPost: Post = {
      title,
      subtitles,
      coverPhoto,
      paragraphs,
      comments: post?.comments || [],
      likes: post?.likes || 0,
      author,
      createdAt: post?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(updatedPost);
  };

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '');

      try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setCoverPhoto(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleMultipleFileUpload = async (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i]);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '');

        try {
          const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });

          // Update the specific paragraph's images array with the new image URL
          handleParagraphChange(index, 'images', [...paragraphs[index].images, response.data.secure_url]);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{post ? "Modifier Article" : "Ajouter un Article"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Subtitles"
          value={subtitles}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSubtitles(e.target.value)
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cover Photo URL"
          value={coverPhoto}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCoverPhoto(e.target.value)
          }
          fullWidth
          margin="normal"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
        />
        {paragraphs.map((paragraph, index) => (
          <Box key={index} mb={2}>
            <TextField
              label={`Paragraph ${index + 1}`}
              value={paragraph.text}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleParagraphChange(index, "text", e.target.value)
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label={`Images (comma separated)`}
              value={paragraph.images.join(", ")}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleParagraphChange(
                  index,
                  "images",
                  e.target.value.split(", ")
                )
              }
              fullWidth
              margin="normal"
            />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleMultipleFileUpload(e, index)}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton
                onClick={() => handleRemoveParagraph(index)}
                color="secondary"
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              {index === paragraphs.length - 1 && (
                <IconButton onClick={handleAddParagraph} color="primary">
                  <AddCircleOutlineIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        ))}
        <TextField
          label="Author"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          {post ? "Actualiser" : "Ajouter"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlogPostDialog;
