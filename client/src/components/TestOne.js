import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


const TestOne = observer(({test,i}) => {
    useEffect(() => {
        console.log("i =",i)
    },[])
  return (
    <div>
        {(i%2 === 0) 
            ?<div className="block_task-test bmargin">
                <div  className="block_task-test_container">
                    <div className="block_task-test_title">
                        <div className="block_task-test_title-number">{test.id + "."}</div>
                        <div  className="block_task-test_title-text">{test.topic}</div>
                    </div>
                    <div className="block_task-test_level">
                       <span className="block_task-test_level_b-word"> Difficulty:</span>  {test.difficulte}
                    </div>
                </div>
                <Link>
                    <div className="block_task-test-button">
                        Start
                    </div>
                </Link>
            </div>
            :<div className="block_task-test">
                <div  className="block_task-test_container">
                    <div className="block_task-test_title">
                        <div className="block_task-test_title-number">{test.id + "."}</div>
                        <div  className="block_task-test_title-text">{test.topic}</div>
                    </div>
                    <div className="block_task-test_level">
                       <span className="block_task-test_level_b-word"> Difficulty:</span>  {test.difficulte}
                    </div>
                </div>
                <Link>
                    <div className="block_task-test-button">
                        Start
                    </div>
                </Link>
            </div>
        }
        
    </div>
  )
});

export default TestOne