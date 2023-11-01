//=== 모임장 그룹 사이드바 ===

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';
import MissionCancelModal from './modal/MissionCancelModal';
import ChoiceModal from './modal/ChoiceModal';
import WarningModal from './modal/WarningModal';

export default function SideBarGroupLeader({
    warningModalSwitch,
    setWarningModalSwitch,
    warningModalSwitchHandler,
    menu,
    setMenu,
}: any) {
    interface MissionType {
        id: number;
        name: string;
        selected: boolean;
    }

    const missionList: MissionType[] = [
        {
            id: 1,
            name: '알고리즘',
            selected: true,
        },
        {
            id: 2,
            name: '블로깅',
            selected: false,
        },
        {
            id: 3,
            name: '모각코',
            selected: false,
        },
    ];

    const [missionCancelModalSwitch, setMissionCancelModalSwitch] =
        useState(false);

    // 멤버 선택하는 공통 모달
    const [choiceModalSwitch, setChoiceModalSwitch] = useState(false);

    const choiceModalSwitchHandler = (menu: string) => {
        setMenu(menu);
        setChoiceModalSwitch(!choiceModalSwitch);
    };

    const missionCancelModalHandler = () => {
        setMissionCancelModalSwitch(true);
    };

    return (
        <div>
            <ul className="title4 leader-menu">
                <li className="leader-edit">초대하기</li>
                {/* 링크가 복사되었습니다 ! */}

                {/* [추후] id 추가 */}
                <Link to="/group/edit/1">
                    <li className="leader-edit">모임 수정</li>
                </Link>
                <br />

                <li
                    onClick={missionCancelModalHandler}
                    className="title5 leader-warning"
                >
                    미션완료 취소
                </li>

                <li
                    onClick={() =>
                        choiceModalSwitchHandler('모임장 권한 넘기기')
                    }
                    className="title5 leader-warning"
                >
                    모임장 권한 넘기기
                </li>

                <li
                    onClick={() => choiceModalSwitchHandler('강제 퇴장')}
                    className="title5 leader-warning"
                >
                    강제 퇴장시키기
                </li>

                <li
                    onClick={() => warningModalSwitchHandler('모임 삭제')}
                    className="title5 leader-warning"
                >
                    모임 삭제
                </li>
            </ul>

            {missionCancelModalSwitch ? (
                <MissionCancelModal
                    missionCancelModalSwitch={missionCancelModalSwitch}
                    setMissionCancelModalSwitch={setMissionCancelModalSwitch}
                />
            ) : null}

            {warningModalSwitch ? (
                <WarningModal
                    missionCancelModalSwitch={missionCancelModalSwitch}
                    setMissionCancelModalSwitch={setMissionCancelModalSwitch}
                />
            ) : null}

            {/* 멤버 선택하는 공통 모달 */}
            <ChoiceModal
                choiceModalSwitch={choiceModalSwitch}
                setChoiceModalSwitch={setChoiceModalSwitch}
                choiceModalSwitchHandler={choiceModalSwitchHandler}
                action={menu}
            />

            {/* 경고 공통 모달 */}
            <WarningModal
                warningModalSwitch={warningModalSwitch}
                setWarningModalSwitch={setWarningModalSwitch}
                warningModalSwitchHandler={warningModalSwitchHandler}
                action={menu}
            />
        </div>
    );
}