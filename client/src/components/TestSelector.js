import React, { useContext, useRef } from 'react';
import '../Styles/testSelector.css';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import CustomAutoComplete from './Form/CustomAutoComplete';
import { ProfileConstants } from './Profile/Constants';
const TestSelector = observer(({ form }) => {
  const { test } = useContext(Context);
  const levelSelectRef = useRef(null);
  const topicSelectRef = useRef(null);
  return (
    <div className="block_select_level">
      <div className="select_level-container _container">
        <div className="block_drop-down_menu">
          <div className="drop-down_english-level drop-down_menu margin-safety">
            <CustomAutoComplete
              form={form}
              placeholder="B1-Intermediate"
              name="currLevel"
              isMultiple={false}
              nameField="Select your English level"
              data={ProfileConstants.ENGLISH_LEVEL}
              defaultValue={ProfileConstants.ENGLISH_LEVEL[0]}
              // rules={{
              //   required: {
              //     value: true,
              //     message: 'English level is required',
              //   },
              // }}
            />
            {/* <div className="block_drop-down_menu-title">
              Select your English level
            </div>
            <div className="select_level-menu-arrow">
              <select
                ref={levelSelectRef}
                className="select_level-menu"
                name=""
                id=""
              >
                {test.levelS?.map((level) => (
                  <option key={level.id} value={level.name}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
          <div className="drop-down_english-level drop-down_menu">
            <CustomAutoComplete
              form={form}
              placeholder="B1-Intermediate"
              name="currTopic"
              isMultiple={false}
              defaultValue={ProfileConstants.TOPIC[0]}
              nameField="Select topic"
              data={ProfileConstants.TOPIC}
            />
            {/* <div className="block_drop-down_menu-title">Select topic</div>
            <div className="select_level-menu-arrow">
              <select
                ref={topicSelectRef}
                className="select_level-menu"
                name=""
                id=""
              >
                {test.topicS.map((topic) => (
                  <option key={topic.id} value={topic.name}>
                    {topic.name}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
        </div>

        {/* <a onClick={onClick} className="block_select-level_link">
          <div className="select-level_button blue_button-little">Next</div>
        </a> */}
      </div>
    </div>
  );
});

export default TestSelector;
