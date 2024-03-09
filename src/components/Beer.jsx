import React, { useState } from 'react';
import beerData from '../Data/Beer';

// import * as React from 'react';
import { Link } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';






export default function Beer() {
    const [expanded, setExpanded] = React.useState(false);


    const data = beerData;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [filteredData, setFilteredData] = useState(beerData);
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterData(event.target.value);
    };

    const filterData = (searchTerm) => {
        const filtered = beerData.filter((beer) =>
            beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };


    return (
        <div className='main-Box mt-2'>
            <div className='mb-3'>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button class="btn btn-primary" type="submit">
                        Search
                    </button>
                </form>
            </div>

            <div className='card-data container'>
                {filteredData.map(beer => (
                    <div className='card-body mb-5 card-demo'>
                        <div class="card shadow-sm card-content">
                            <img className='mt-2 Beer-Img' src={beer.image_url} alt={beer.name} />
                            <div class="card-body">
                                <h3>{beer.name}</h3>
                                <p class="card-text">{beer.description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn">View More</button>
                                    </div>
                                    <small class="text-body-secondary">{beer.first_brewed}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
