import React, { useContext, useRef } from 'react'
import '../Styles/testSelector.css'
import { observer } from 'mobx-react-lite'
import { Context } from '..';
const TestSelector = observer(({setLevel, setTopic}) => {
    const {test} = useContext(Context);
    const levelSelectRef = useRef(null);
    const topicSelectRef = useRef(null);

    const onClick = () => {
        setLevel(levelSelectRef.current.value.split('-')[0])
        setTopic(topicSelectRef.current.value);
    }
    
  return (
    <div className="block_select_level">
            <div className="select_level-container _container">
                <div className="block_drop-down_menu">
                    
                    <div className="drop-down_english-level drop-down_menu margin-safety">
                        <div className="block_drop-down_menu-title">
                            Select your English level
                        </div>
                        <div className="select_level-menu-arrow">
                            <select ref={levelSelectRef} className="select_level-menu" name="" id="">
                                {test.levelS?.map(level => 
                                    <option key={level.id} value={level.name}>{level.name}</option>    
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="drop-down_english-level drop-down_menu">
                        <div className="block_drop-down_menu-title">
                            Select topic
                        </div>
                        <div className="select_level-menu-arrow">
                            <select ref={topicSelectRef} className="select_level-menu" name="" id="">
                                {test.topicS.map(topic => 
                                        <option key={topic.id} value={topic.name}>{topic.name}</option>    
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                
                <a onClick={onClick} className="block_select-level_link">
                    <div className="select-level_button blue_button-little" >
                        Next
                    </div>
                </a>
            </div>
        </div>
  )
});

export default TestSelector