import React from 'react'

import { Button } from '../../../components/shared/Button/Button'
export const StepAvatar = ({onClickedNext}) => {
    return (
        <div>
            Avatar
            <Button text="Next" onClick={onClickedNext}/>
        </div>
    )
}
