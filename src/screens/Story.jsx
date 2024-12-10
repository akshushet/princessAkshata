import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";

const storyData = [
  {
    chapter: "Chapter 1: The Beginning",
    content:
      "Once upon a time in a land far away, there was a small village surrounded by mountains and rivers.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URLs
  },
  {
    chapter: "Chapter 2: The Journey",
    content:
      "The young adventurer set out on a quest to explore the world, facing challenges and making friends along the way.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    chapter: "Chapter 3: The Climax",
    content:
      "In the heart of the forest, the adventurer found the treasure they sought, but it came with a cost.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    chapter: "Chapter 4: The Conclusion",
    content:
      "Returning home with newfound wisdom, the adventurer shared their story, inspiring generations to come.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Story = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pageRef = useRef();

  const handleTransition = (nextPage) => {
    if (pageRef.current) {
      gsap.to(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentPage(nextPage);
          gsap.to(pageRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }
  };

  const handleNext = () => {
    if (currentPage < storyData.length - 1) {
      handleTransition(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      handleTransition(currentPage - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Box
        ref={pageRef}
        sx={{
          width: isMobile ? "90%" : "60%",
          minHeight: isMobile ? "70vh" : "80vh",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          padding: 3,
          opacity: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{ marginBottom: 2, textAlign: "center", fontWeight: "bold" }}
        >
          {storyData[currentPage].chapter}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            textAlign: "justify",
            lineHeight: 1.6,
          }}
        >
          {storyData[currentPage].content}
        </Typography>
        {storyData[currentPage].image && (
          <Box
            component="img"
            src={storyData[currentPage].image}
            alt="Chapter Illustration"
            sx={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: 2,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handlePrevious}
          disabled={currentPage === 0}
          sx={{
            backgroundColor: "#7B1E36",
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={currentPage === storyData.length - 1}
          sx={{
            backgroundColor: "#7B1E36",
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Story;
