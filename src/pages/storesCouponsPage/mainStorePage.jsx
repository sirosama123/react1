import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import './stores.css'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Mail from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { FaLocationArrow } from 'react-icons/fa';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function MainStorePage() {
    return (
        <Grid container >
            <Grid item lg={1}>

            </Grid>
            <Grid item lg={10}>
                <div className="banner"></div>
                <Grid container spacing={2}>
                    <Grid lg={8}>
                        <div>
                            <div className="storeNameHeading">
                                Noon UAE store's Coupons and Promo Codes
                            </div>

                        </div>
                    </Grid>
                    <Grid lg={4}>
                        <div>
                            <div className="shopNow">
                                <div style={{ height: '30px' }}></div>
                                <img src="https://www.businesslist.pk/img/pk/b/1653645324-40-dekhlo-pk.jpg" height='70px' width='70px' alt="" srcset="" />
                                <div style={{ height: '20px' }}></div>
                                <div className="offer">
                                    5% - 10% Exclusive Coupon
                                </div>
                                <div style={{ height: '20px' }}></div>
                                <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: '#DB4444', paddingX: '50px' }}>Shop Now</Button>
                                <div style={{ height: '30px' }}></div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="contact">
                                <div className="boldHeadings">
                                    Receive exclusive offers to your mailbox
                                </div>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
                                >
                                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                                        <Mail />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Email"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                                <div className="boldHeadings">
                                    Or Through SMS Message
                                </div>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
                                >
                                   
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Email"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <Button type="button" sx={{ p: '10px' ,backgroundColor:'red' }} aria-label="search">
                                    <FaLocationArrow />
                                    </Button>
                                </Paper>
                                <PhoneInput
/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={1}>

            </Grid>
        </Grid>
    )
} 