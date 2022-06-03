import React from "react";
import editSvg from '../../assets/img/editSvg.png'
import markIcon from '../../assets/img/mark.png'

import './Tasks.scss'

const Tasks = () => {
    return (
        <div className='tasks'>
            <h2 className='tasks__title'>Frontend
                <img src={editSvg} alt='Edit icon' />
            </h2>
            <div className="tasks__items">
                <div className="tasks__items-row">
                    <div className="checkbox">
                        <input id="check" type="checkbox" />
                        <label htmlFor="check">
                            <img src={markIcon} alt="mark" />
                        </label>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Tasks;