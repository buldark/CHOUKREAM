import React, { useCallback, useEffect, useState } from 'react';
import * as O from './styles/OrderTypeStyle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useSearchParams } from 'react-router-dom/dist';

const BuyBid = ({ clickedBtn }) => {
    const [price, setPrice] = useState();
    const [priceInput, setPriceInput] = useState();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.get('size');

    //숫자만 입력, 세자리 마다 콤마 추가
    const inputPriceFormat = str => {
        const comma = str => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        };
        const uncomma = str => {
            str = String(str);
            return str.replace(/[^\d]+/g, '');
        };
        setPriceInput(comma(uncomma(str)));
        return comma(uncomma(str));
    };

    //payForm 페이지로 이동
    const onPayForm = () => {
        navigate(`/pay/payForm?size=${size}`)
    };

    return (
        <O.Bid>
            <O.Text>
                {clickedBtn === '구매입찰' ? '구매 희망가' : '즉시 구매가'}
            </O.Text>
            <O.PriceInput
                type="text"
                value={price || ''}
                onChange={e => setPrice(inputPriceFormat(e.target.value))}
                placeholder="희망가 입력"
            />
            <O.Text style={{ marginBottom: '30px' }}>
                총 결제금액은 다음 화면에서 계산됩니다.
            </O.Text>
            {/* <O.Text style={{ width: '100%', paddingBottom: "20px"}}>입찰 마감기한</O.Text> */}
            {priceInput ? (
                <O.BuyBtn onClick={onPayForm}>구매 계속</O.BuyBtn>
            ) : (
                <O.BuyBtn
                    style={{ backgroundColor: '#ebebeb', cursor: 'default' }}
                    disabled
                >
                    구매 계속
                </O.BuyBtn>
            )}
        </O.Bid>
    );
};

export default BuyBid;
