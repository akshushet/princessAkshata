import { Box, Typography } from '@mui/material';
import React from 'react';
import Images from '../../../utils/images';

const ChapterOne = () => {
  const content = [
    {
      text: "This is the first paragraph of Chapter One, setting the stage for an amazing story.",
      image: Images.awardsBanner,
      imagePosition: "right",
    },
    {
      text: "The second paragraph dives deeper, revealing more about our characters and plot.",
      image: "https://via.placeholder.com/400",
      imagePosition: "left",
    },
    {
      text: "As the chapter progresses, the tension builds and stakes are raised.",
      image: "https://via.placeholder.com/400",
      imagePosition: "right",
    },
    {
      text: "Near the end of the chapter, a twist emerges that changes everything.",
      image: "https://via.placeholder.com/400",
      imagePosition: "left",
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      {/* Header with Image and Title */}
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          pt: 8
        }}
      >
        <img
          src={Images.wayanad}
          alt="Chapter One"
          style={{ height: "20%",  width: "100%", borderRadius: "8px", marginBottom: "16px", objectFit: 'cover' }}
        />
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Chapter One
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", mt: 1 }}>
          A Tale of Adventure and Discovery
        </Typography>
      </Box>

      {/* Content with alternating layout */}
      {content.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: item.imagePosition === "right" ? "row" : "row-reverse",
            },
            alignItems: "center",
            gap: 2,
            mb: 4,
            transition: "all 0.3s ease-in-out",
            '&:hover': {
              transform: "scale(1.02)",
            },
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt="Story Visual"
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: "40%" },
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          />
          <Typography
            sx={{
              flex: 1,
              fontSize: "1.1rem",
              lineHeight: "1.6",
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChapterOne;
