import React from 'react'

import { Button } from '../../../components/shared/Button/Button'

export const StepOtp = ({onClickedNext}) => {
    return (
        <div>
            OTP
            <Button text="Next" onClick={onClickedNext}/>
        </div>
    )
}
