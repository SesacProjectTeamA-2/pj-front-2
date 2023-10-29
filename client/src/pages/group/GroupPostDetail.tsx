import React from 'react';

import '../../styles/scss/pages/group/groupPostDetail.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import GroupContentFooter from '../../components/group/content/GroupContentFooter';

export default function GroupPostDetail() {
    return (
        <div className="section section-group">
            <GroupHeader
                // [ 추후 ] 넘버링 id 추가
                // title={`미션 1. ${missionArr[0]}`}
                title={'공지사항'}
                groupName={'코딩학당'}
            />

            <div className="post-detail-container">
                <div className="post-detail-header-container">
                    <div className="post-detail-header">
                        <div className="post-detail-profile">
                            <img
                                className="profile-img"
                                src="/asset/images/sqr2.svg"
                                alt="profile"
                            />
                            <div className="title4">달려라하니</div>
                        </div>
                        <div className="date">2023-10-30 22:09</div>
                    </div>
                    <div className="writer-menu">
                        <div>수정</div>
                        <div>삭제</div>
                    </div>
                </div>

                <div className="post-detail-content-container">
                    <div className="post-detail-content">
                        내용입니당ㅇㄴㅁ러ㅏㅣㅇ너링너리ㅏ어나러ㅏ이너리ㅏㄴ어라ㅣㅇㄴㄹㅇ너리ㅏㅇ너라ㅣㅓㅇ니ㅓ링너ㅣㅏ런아ㅣㅓ리ㅏㅇ너ㅏㅓ린ㄹ노ㅓㅏㅗㄹ아너ㅗ러ㅏㅇ노라ㅣㄴ어리너아ㅣㄹ
                    </div>

                    {/* 댓글 수, 반응 수 */}
                    <GroupContentFooter />

                    {/* [질문, 추후] 이거 왜 안먹을까요...! ㅠㅠ  */}
                    <div className="comment-create">
                        <textarea className="comment-textarea"></textarea>
                        <button className="btn-md">등록</button>
                    </div>

                    <div className="comment-list">
                        <ul>
                            {/* START */}
                            <li>
                                <div className="comment-header">
                                    <div className="comment-profile">
                                        <img
                                            className="comment-img"
                                            src="/asset/images/sqr2.svg"
                                            alt="profile"
                                        />
                                        <div className="title5">달려라하니</div>
                                    </div>
                                    <div className="date">2023-10-30 22:09</div>
                                </div>
                                <div>댓글입니다 !!!!!!!!!!!!!!!</div>
                            </li>
                            {/* END */}
                            <li>
                                <div className="comment-header">
                                    <div className="comment-profile">
                                        <img
                                            className="comment-img"
                                            src="/asset/images/sqr2.svg"
                                            alt="profile"
                                        />
                                        <div className="title5">달려라하니</div>
                                    </div>
                                    <div className="date">2023-10-30 22:09</div>
                                </div>
                                <div>댓글입니다 !!!!!!!!!!!!!!!</div>
                            </li>

                            <li>
                                <div className="comment-header">
                                    <div className="comment-profile">
                                        <img
                                            className="comment-img"
                                            src="/asset/images/sqr2.svg"
                                            alt="profile"
                                        />
                                        <div className="title5">달려라하니</div>
                                    </div>
                                    <div className="date">2023-10-30 22:09</div>
                                </div>
                                <div>댓글입니다 !!!!!!!!!!!!!!!</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}