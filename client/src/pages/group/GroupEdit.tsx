import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../styles/scss/pages/group/groupCreate.scss';

import MissionAddModal from '../../components/common/modal/MissionAddModal';
import InterestedList from '../../components/common/InterestedList';
import Dday from '../../components/common/Dday';

export default function GroupEdit() {
    const [addModalSwitch, setAddModalSwitch] = useState(false);

    const [selectedArr, setSelectedArr] = useState<string[]>([]);

    const [input, setInput] = useState({
        gName: '',
        gDesc: '',
        gDday: '',
        gCategory: '',
        gCoverImg: '',
        gMaxMem: 1,
        mTitle: [],
        mContent: [],
        mLevel: 1,
    });

    const {
        gName,
        gDesc,
        gDday,
        gCategory,
        gCoverImg,
        gMaxMem,
        mTitle,
        mContent,
        mLevel,
    } = input;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    const groupEditHandler = () => {
        console.log(input);
    };

    return (
        <div className="section group-create-contianer title5">
            <div className="title2">모임 수정하기</div>
            <div className="group-create-content group-create-title">
                <div className="title-wrapper">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="filled-basic"
                            label="모임명"
                            variant="filled"
                            onChange={onChange}
                            name="gName"
                        />
                        {/* <TextField
                            id="standard-basic"
                            label="모임명"
                            variant="standard"
                        /> */}
                    </Box>
                </div>
                <div className="group-create-img">
                    <div className="group-img-title">대표 이미지</div>
                    <Button
                        style={{
                            backgroundColor: '#ed8d8d',
                            fontSize: '1rem',
                        }}
                        variant="contained"
                    >
                        추가
                    </Button>
                </div>
            </div>
            <div className="group-create-content">
                <div>분야</div>
                <InterestedList
                    selectedArr={selectedArr}
                    setSelectedArr={setSelectedArr}
                    num={1}
                />
            </div>
            <div className="group-create-content description-container">
                <div>모임 설명</div>
                <textarea
                    className="description"
                    placeholder="500자 이내로 입력하세요."
                    onChange={onChange}
                    name="gDesc"
                ></textarea>
            </div>

            <div className="group-create-content">
                <div>제한 인원</div>
                <input
                    defaultValue={1}
                    className="limit-number"
                    type="number"
                    onChange={onChange}
                    name="gMaxMem"
                />
                <div className="max-number">최대 00명</div>
            </div>
            <div className="group-create-content">
                <div className="dday-title">마감일</div>
                <Dday />
            </div>
            <div className="group-create-content mission-wrapper">
                <div>Mission</div>
                <div className="mission-container">
                    <div onClick={missionAddHandler}>
                        <img src="/asset/icons/plus.svg" />
                    </div>
                    <div>팀원들과 어떤 것을 하고 싶나요 ?</div>
                    {/* [추후] 미션 추가되면 리스트 형식으로 추가 */}
                </div>
            </div>

            {addModalSwitch ? (
                <MissionAddModal
                    addModalSwitch={addModalSwitch}
                    setAddModalSwitch={setAddModalSwitch}
                    action={'미션수정'}
                />
            ) : null}
            <Link to="/group/home/1">
                <button className="btn-fixed" onClick={groupEditHandler}>
                    모임 수정완료 !
                </button>
            </Link>
        </div>
    );
}
