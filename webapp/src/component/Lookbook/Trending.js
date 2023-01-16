import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import {
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import * as S from './style';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import TrendingItem from './TrendingItem';

const Trending = () => {
    const [list, setList] = useState([
        {
            seq: '',
            id: '',
            content: '',
            logtime: '',
            styleFile: '',
            originalFileName: [],
            storedFileName: [],
        },
    ]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/lookbook/getStyleList')
            .then(res => setList(res.data))
            .catch(error => console.log(error));
    }, []);

    //네이버
    // function getItems(nextGroupKey, count) {
    //     const nextItems = [];

    //     for (let i = 0; i < count; ++i) {
    //       const num = nextGroupKey * count + i;
    //       nextItems.push(`<div class="item">
    //     <div class="thumbnail">
    //         <img src="https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg" alt="egjs" />
    //     </div>
    //     <div class="info">egjs ${num}</div>
    //   </div>`);
    //     }
    //     return nextItems;
    //   }
    //   const ig = new MasonryInfiniteGrid(".container", {
    //     gap: 5,
    //   });


    const [itemLength,setItemLength] = useState(12) // 처음에 가져올 아이템 갯수

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    
    const handleScroll = () => {
        var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        const innerHeight = window.innerHeight;

        const scrollHeight = document.body.scrollHeight;
        // console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변

        if (heightBottom >= scrollHeight - 80) {
            // console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));

            setItemLength(itemLength => itemLength + 8)
        }
    };

    return (
        <>
            <Social />
            <div>태그</div>

            {/* <MasonryInfiniteGrid
                className='products'
               
                gap={25}
                threshold={1000}
                onRequestAppend={(e) => {
                    const nextGroupKey = (+e.groupKey! || 0) + 1;
              
                    setItems([
                      ...items,
                      ...getItems(nextGroupKey, 10),    
                    ]);
                  }}
                > */}

            <Container fixed>
                <S.TrGridContainer>
                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 0 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 1 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 2 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 3 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                </S.TrGridContainer>
            </Container>
            {/* </MasonryInfiniteGrid> */}
        </>
    );
};

export default Trending;
