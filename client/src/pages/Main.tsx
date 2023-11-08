import React, { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import Content from '../components/main/Content';

export default function Main() {
    // 1. 사용자 명언 정보 가져오기
    // 1-1. 명언 변수
    const [phraseCtt, setPhraseCtt] = useState<string | null>(null);

    // 1-2. 명언 지정 논리연산자
    //  데이터 가져와서 phrase null이 아니면 true로(자기 작성 모드) : Quotes 컨텐츠 가림
    //  null 이라면 false로 (명언 모드) : Quotes 컨텐츠 보임
    const [phraseModeSelf, setPhraseModeSelf] = useState<boolean>(false);

    // const getUserData = async () => {
    //     await axios
    //         // .get('http://localhost:8888/api/user/mypage', {
    //         .get(`${process.env.REACT_APP_DB_HOST}/user/mypage`, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             const { phrase } = res.data;

    //             if (phrase) {
    //                 setPhraseModeSelf(true);
    //                 setPhraseCtt(phrase);
    //             }
    //         });
    // };

    // useEffect(() => {
    //     if (myCookie.get('isUser')) {
    //         getUserData();
    //         console.log('!!!!!!!!!!!!!!');
    //     }
    // }, []);

    // 2. 회원가입 url에서 user 정보 가져오기
    const curPath: string = window.location.href;
    const urlParams: any = new URLSearchParams(curPath);

    const uToken: string = urlParams.get('token');

    // 3. 쿠키 굽기
    let myCookie = new Cookies();
    if (uToken) {
        myCookie.set('isUser', uToken);
    }

    console.log('isUser', myCookie.get('isUser'));
    const cookies = new Cookies();

    return (
        <div className="section">
            {/* <MainImg /> */}
            <Content
            // phraseCtt={phraseCtt}
            // setPhraseCtt={setPhraseCtt}
            // phraseModeSelf={phraseModeSelf}
            // setPhraseModeSelf={setPhraseModeSelf}
            />
        </div>
    );
}
