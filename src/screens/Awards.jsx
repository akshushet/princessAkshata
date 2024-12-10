import { Box, Grid, Typography, useMediaQuery, useTheme, Tooltip } from '@mui/material';
import React from 'react';
import Images from '../utils/images'; // Adjust to your actual image import path

const awardsData = [
  { image: Images.beautifulAward, tooltip: "This is for you to make you understand you are the most beautiful person ever in the universe." },
  { image: Images.bestEmloyeeAward, tooltip: "This is to acknowledge your work because you might think rarely anyone does so I have always felt you are the best employee (of course after me :))" },
  { image: Images.charmingAward, tooltip: "This is to tell you how charming and sweet person you are." },
  { image: Images.funnyAward, tooltip: "This is to tell you that you are funny in some way but unfunny but you think you are funny but you are not but sometimes you are (this goes without saying of course after me) because you learnt from me." },
  { image: Images.bestestAward, tooltip: "This is literally to tell you that you are the best can't say anything more that's it the best." },
  { image: Images.hardworkingAward, tooltip: "This is to tell you that you are actually hardworking and a dedicated person trying very hard to make things work." },
  { image: Images.hotAward, tooltip: "This is for you to tell you are the hottest like a fire can't handle the heat." },
  { image: Images.improvedAward, tooltip: "This is to acknowledge and appreciate you that you have actually started working on yourself and improved a lot." },
  { image: Images.talentedAward, tooltip: "This is to tell you how much talented you are and main thing is you learn very fast you are multi talented. Sports, dance etc etc." },
  { image: Images.understandingAward, tooltip: "This is to tell you how much understanding you are and care genuinely." },
];

const Awards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ padding: 2, backgroundColor: '#E6E6FA', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          sx={{
            textAlign: 'center',
            marginBottom: 1,
            fontWeight: '500',
            color: '#4B0082',
          }}
        >
          Awards You Achieved In Your Life
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', marginBottom: 2, color: '#4B0082' }}
        >
          No one might give it to you but you have earned them
        </Typography>
        <Box
          component="img"
          src={Images.awardsBanner}
          sx={{
            width: isMobile ? '100%' : '30em',
            height: isMobile ? 'auto' : 'inherit',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: 3,
          }}
        />
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        {awardsData.map((award, index) => (
          <Grid
            item
            xs={6} // 2 awards per row on mobile
            sm={4} // 3 awards per row on desktop
            key={index}
          >
            <Tooltip title={award.tooltip} arrow>
              <Box
                component="img"
                src={award.image}
                alt={award.tooltip}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer', // Optional: indicate interactivity
                }}
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awards;
