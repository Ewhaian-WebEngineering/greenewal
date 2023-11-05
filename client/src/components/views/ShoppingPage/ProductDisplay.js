import React from 'react';
import { useState, useEffect } from 'react';

function ProductDisplay() {

    const detailImg_1 = [
        "../img/goods/goods_detail/1-2.png",
        "../img/goods/goods_detail/1-3.png",
        "../img/goods/goods_detail/1-4.png",
        "../img/goods/goods_detail/1-5.png",
        "../img/goods/goods_detail/1-6.png",
        "../img/goods/goods_detail/1-7.png",
    ]

    const detailImg_2 = [
        "../img/goods/goods_detail/2-2.png",
        "../img/goods/goods_detail/2-3.png",
        "../img/goods/goods_detail/2-4.png",
        "../img/goods/goods_detail/2-5.png",
        "../img/goods/goods_detail/2-6.png",
        "../img/goods/goods_detail/2-7.png",
        // "../img/goods/goods_detail/2-8.png",
    ]

    const detailImg_3 = [
        "../img/goods/goods_detail/3-2.png",
        "../img/goods/goods_detail/3-3.png",
        "../img/goods/goods_detail/3-4.png",
        "../img/goods/goods_detail/3-5.png",
        "../img/goods/goods_detail/3-6.png",
        "../img/goods/goods_detail/3-7.png",
        "../img/goods/goods_detail/3-8.png",
        "../img/goods/goods_detail/3-9.png",
    ]

    const detailImg_4 = [
        "../img/goods/goods_detail/4-2.png",
        "../img/goods/goods_detail/4-3.png",
        "../img/goods/goods_detail/4-4.png",
    ]

    const detailImg_5 = [
        "../img/goods/goods_detail/5-2.png",
    ]

    const detailImg_6 = [
        "../img/goods/goods_detail/6-1.png",
    ]


    const detailData = [
        {
            id: 1,
            title: '스티커팩',
            originalPrice: 1500,
            discountedPrice: 1000,
            describe: '버섯이의 우당탕탕 놀이공원 체험기! 노트북, 휴대폰 여기저기에 붙여봐요!',
            img: "../img/goods/goods_detail/1-1.png",
            detailImg: detailImg_1
        },
        {
            id: 2,
            title: '스택컵',
            originalPrice: 9000,
            discountedPrice: 7000,
            describe: '신나는 회전목마가 그려진 컵, 어떤 음료를 담아 마셔도 맛있을 거예요!',
            img: "../img/goods/goods_detail/2-1.png",
            detailImg: detailImg_2

        },
        {
            id: 3,
            title: '말랑비즈인형',
            originalprice: 13000,
            discountedPrice: 10000,
            describe: '스트레스 받을 땐 말랑콩떡 버섯 인형을 꾹꾹 눌러봐요!',
            img: "../img/goods/goods_detail/3-1.png",
            detailImg: detailImg_3
        }, {
            id: 4,
            title: '액정클리너',
            originalprice: 2000,
            discountedPrice: 1500,
            describe: '언제 어디서든 화면이 흐릿하면 이화이언 클리너로 쓱싹!',
            img: "../img/goods/goods_detail/4-1.png",
            detailImg: detailImg_4
        },
        {
            id: 5,
            title: '레고 피규어',
            originalprice: 11000,
            discountedPrice: 9000,
            describe: '초록 후드의 캐릭터, 공구템을 입고 있는 벗들의 모습 같지 않나요?',
            img: "../img/goods/goods_detail/5-1.png",
            detailImg: detailImg_5
        },
        {
            id: 6,
            title: '그립톡',
            originalprice: 4000,
            discountedPrice: 3000,
            describe: '달콤한 바닐라맛의 아이스크림 그립톡, 보기만 해도 놀이동산이 가고 싶어지지 않나요?',
            img: "../img/goods/goods_detail/6-1.png",
            detailImg: detailImg_6
        }
    ];

    return (
        <div className="ProductDisplay_main_contianer">
            <div className="ProductDisplay_main_title">
                2023 배꽃정원
            </div>
            <div className="ProdcutDisplay_inner_container">
                굿즈 1
                굿즈 2
                굿즈 3 ...
            </div >
        </div >)
}
export default ProductDisplay;