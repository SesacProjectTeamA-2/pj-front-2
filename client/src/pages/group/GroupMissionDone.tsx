import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/group/groupMissionDone.scss';

import GroupContent from '../../components/group/content/GroupContentList';
import GroupHeader from '../../components/group/content/GroupHeader';

export default function GroupMissionDone() {
    const missionArr = ['알고리즘', '블로깅', '모각코'];

    return (
        <div className="section section-group">
            <GroupHeader title={'완료된 미션'} groupName={'코딩학당'} />
            <div className="noti-container">
                <div className="noti-header mission-done-header">
                    <div>No.</div>
                    <div>시작</div>
                    <div>종료</div>
                    <div>기간</div>
                    <div>완료된 미션</div>
                </div>
                <div className="noti-content mission-done-content">
                    <ul>
                        {/* START */}
                        <li>
                            <div>1</div>
                            <div>2023.10.20</div>
                            <div>2023.10.29</div>
                            <div>10일</div>
                            <div className="mission-done-list">
                                <button>알고리즘</button>
                                <button>블로깅</button>
                                <button>모각코</button>
                            </div>
                        </li>
                        {/* END */}

                        <li>
                            <div>1</div>
                            <div>2023.10.20</div>
                            <div>2023.10.29</div>
                            <div>10일</div>
                            <div className="mission-done-list">
                                <button>알고리즘</button>
                                <button>블로깅</button>
                                <button>모각코</button>
                            </div>
                        </li>

                        <li>
                            <div>1</div>
                            <div>2023.10.20</div>
                            <div>2023.10.29</div>
                            <div>10일</div>
                            <div className="mission-done-list">
                                <button>알고리즘</button>
                                <button>블로깅</button>
                                <button>모각코</button>
                            </div>
                        </li>

                        <li>
                            <div>1</div>
                            <div>2023.10.20</div>
                            <div>2023.10.29</div>
                            <div>10일</div>
                            <div className="mission-done-list">
                                <button>알고리즘</button>
                                <button>블로깅</button>
                                <button>모각코</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <Link to="/group/board/post/1">
                    <img src="/asset/icons/plus.svg" className="plus-fixed" />
                </Link>
            </div>
        </div>
    );
}
