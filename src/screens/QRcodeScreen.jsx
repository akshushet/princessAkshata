import React, { useEffect, useRef } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import gsap from 'gsap';

const QRcodeScreen = () => {
    const data = [
        { id: 1, text: "Princess Detected" },
        { id: 2, text: "Best Person in universe Detected" },
        { id: 3, text: "Ghastya Detected" },
        { id: 4, text: "Shetru Detected" },
        { id: 5, text: "Angel Detected" },
        { id: 6, text: "Kokil Kantiya Apsara Detected" },
        { id: 7, text: "Madam Detected" },
        { id: 8, text: "Kaamgaar Detected" },
        { id: 9, text: "Inspirational Person Detected" },
        { id: 10, text: "Hardworking Girl Detected" },
        { id: 11, text: "Most beautiful girl Detected" },
        { id: 12, text: "Funny Girl but unfunny but thinks she is funny Detected" },
        { id: 13, text: "Attiude girl Detected" },
        { id: 14, text: "Small little angry bird Detected" },
        { id: 15, text: "Wifey material Detected" },
        { id: 16, text: "Baby Detected" },
        { id: 17, text: "Akshu Detected" },
        { id: 18, text: "Fairy Detected" },
        { id: 19, text: "Bangara (gold) Detected" },
        { id: 20, text: "Sonu Detected" },
        { id: 21, text: "Hottie Detected" },
        { id: 22, text: "Sangyaoooooo Detected" },
        { id: 23, text: "Most understanding girl Detected" },
        { id: 24, text: "Responsible girl Detected" },
        { id: 25, text: "Universe Detected" },
        { id: 26, text: "Water Baby Detected" },
        { id: 27, text: "Panda Baby Detected" },
        { id: 28, text: "Koala Baby Detected" },
        { id: 29, text: "Cutie Pie Detected" },
        { id: 30, text: "Couch Potato Detected" },
        { id: 31, text: "Sweetheart Detected" },
        { id: 32, text: "Most Talented Girl Detected" },
    ];

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const shuffledData = shuffleArray(data);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'easeOut',
            }
        );
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>

            <Typography variant='h5' sx={{ textAlign: 'center', padding: '2%' }}>Codes for you to scan when you are feeling low or need some boost of motivation</Typography>
            <Grid container spacing={2}>
                {shuffledData.map((item, index) => (
                    <Grid
                        item
                        xs={6}
                        sm={3}
                        key={item.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <Card
                            sx={{
                                padding: 0,
                                textAlign: 'center',
                                boxShadow: 3,
                                backgroundColor: '#FFC1D6',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <CardContent>
                                <QRCodeCanvas value={item?.text} size={150} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default QRcodeScreen;
