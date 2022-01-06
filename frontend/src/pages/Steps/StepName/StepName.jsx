import React from 'react'

import { Button } from '../../../components/shared/Button/Button'
export const StepName = ({onClickedNext}) => {
    return (
        <div>
            Name
            <Button text="Next" onClick={onClickedNext}/>
        </div>
    )
}
