import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";
import ChapterOne from "./components/Stories/ChapterOne";

const Story = () => {
  
  return (
    <Box
    >
      <ChapterOne />
    </Box>
  );
};

export default Story;
