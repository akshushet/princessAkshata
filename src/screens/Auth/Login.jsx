import { Box, TextField, Button, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [name, setName] = useState('');
  const [cuteness, setCuteness] = useState(0);
  const [shaking, setShaking] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim().toLowerCase() === 'akshata shet' && cuteness === 100) {
      navigate('/homeLovePage');
      toast.success("You've successfully entered princess", {
        position: 'bottom-center',
        autoClose: 3000
      });
    } else {
      setShaking(true);
      toast.error("Wrong Answer Cutiepie !!!", {
        position: 'bottom-center',
      });
      setTimeout(() => setShaking(false), 700);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fce4ec',
      }}
    >
      <Box
        sx={{
          width: '350px',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }}
      >
        {/* <Typography variant="h4" sx={{ marginBottom: '20px', color: '#ff4081' }}>
          Cute Login Page
        </Typography> */}

        <TextField
          fullWidth
          variant="outlined"
          label="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />

        <Typography sx={{ marginBottom: '10px', color: '#757575' }}>
          You need to be a cute pie to enter
        </Typography>
        <Slider
          value={cuteness}
          onChange={(e, value) => setCuteness(value)}
          step={10}
          marks={[
            { value: 0, label: '😐' },
            { value: 25, label: '😊' },
            { value: 50, label: '😍' },
            { value: 75, label: '😍' },
            { value: 100, label: '😍' },
          ]}
          min={0}
          max={100}
          sx={{ marginBottom: '20px' }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            padding: '10px 0',
            fontWeight: 'bold',
            fontSize: '16px',
            animation: shaking ? 'shake 0.5s' : 'none',
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
