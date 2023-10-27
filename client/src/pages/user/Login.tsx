import React from 'react';
import '../../styles/scss/pages/user/login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="section">
            <h1>안녕하세요!</h1>
            <button>구글</button>
            <button>네이버</button>
            <button>카카오</button>
            <button>
                <Link to="/join">회원 가입</Link>
            </button>
        </div>
    );
}
