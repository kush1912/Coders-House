import React from 'react'

import { Button } from '../../../components/shared/Button/Button'


export const StepPhoneEmail = ({onClickedNext}) => {
    return (
        <>
            <div>  
            Phone Email
            <Button text="Next" onClick={onClickedNext}/>
            </div>
        </>
    )
}
