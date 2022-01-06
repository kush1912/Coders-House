import React from 'react'

import { Button } from '../../../components/shared/Button/Button'

export const StepUserName = ({onClickedNext}) => {
    return (
        <div>
            UserName
            <Button text="Next" onClick={onClickedNext}/>
        </div>
    )
}
