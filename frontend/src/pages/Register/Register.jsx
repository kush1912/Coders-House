import React from 'react'
import { useState } from 'react'

import styles from './Register.module.css'
import { StepAvatar } from '../Steps/StepAvatar/StepAvatar'
import { StepUserName } from '../Steps/StepUserName/StepUserName'
import { StepName } from '../Steps/StepName/StepName'
import { StepOtp } from '../Steps/StepOtp/StepOtp'
import { StepPhoneEmail } from '../Steps/StepPhoneEmail/StepPhoneEmail'

const steps ={
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUserName
};

export const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step]

    
    function onClickedNext(){
        console.log('Step++');
        setStep(step+1);
    }

    return (
        <div>
           <Step onClickedNext={onClickedNext}/>
        </div>
    )
}
