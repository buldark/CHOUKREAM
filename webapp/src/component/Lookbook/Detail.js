import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Detail = () => {
    const [commentOpen, setCommentOpen] = useState(false)
   
    //게시물 뿌리기
    const [list, setList] = useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:8080/lookbook/getStyleList')
             .then(res => setList(res.data))
             .catch(error => console.log(error))
             console.log("list",list) 
    }, []) 
    //댓글 뿌리기

    

    return (
        <div>            
            <Social />
            <br/>
            <Container fixed>
                
                {
                    list.map((item, index) => {
                        return (
                            <div>
                            <Card key={item.seq}>
                                <CardHeader
                                    avatar={ <Avatar> 프로필</Avatar> }
                                    title={item.id}
                                    subheader={item.logtime}
                                />
                                {item.seq}
                                <CardMedia 
                                    component="img"
                                    height="500"
                                    image={'../storage/'+item.storedFileName[0]}  //여러장보이게해야함
                                    alt=""
                                />
                                <CardContent>
                                    {item.content}
                                </CardContent>
                                <CardActions >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton onClick={()=>{setCommentOpen(true)}}>
                                        <ChatBubbleOutlineIcon />
                                        <Link to ='/lookbook/styleComment'></Link>
                                    </IconButton> 
                                                          
                                </CardActions>

            
                               

                                <CardContent>       
                                    <Typography variant="body2" color="text.secondary" >
                                    <S.TrTypoDiv>
                                    <Chip
                                        avatar={<Avatar alt="" src="" />}
                                        label=  ''                             
                                    /> 
                                    댓글 불러올 곳
                                    </S.TrTypoDiv>                      
                                    </Typography>     
                                                
                                </CardContent> 
                           

                            </Card>
                        </div>
                        )
                    })
                }
                
            </Container>
        </div>
    );
};

export default Detail;