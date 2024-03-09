import React, { useState } from 'react';
import beerData from '../Data/Beer';

// import * as React from 'react';
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



const NewCard = styled('Card')`
    height:500px !important
`
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
            <div className='mb-3 from-box'>
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

            <div className='card-data'>
                {filteredData.map(beer => (
                    <div className='mb-5 card-demo'>
                        <Card classname='' sx={{ maxWidth: 345 }}>

                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {beer.name[0]}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={beer.name}
                                subheader={beer.tagline}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={beer.image_url}
                                alt={beer.name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {beer.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>

                            </CardActions>

                        </Card>
                    </div>
                ))}

            </div>
        </div>
    );
}
