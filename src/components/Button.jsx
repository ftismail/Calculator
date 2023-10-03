import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';
const classBtn = (btn)=>{
    const classes = {
        '=':'equals',
        'x':'opt',
        '+':'opt',
        '-':'opt',
        '/':'opt',
    }
    
    return classes[btn] === undefined ? 'btn' : `${classes[btn]} btn`
}






const Button = ({value}) => {
    const {calc,setCalc} = useContext(CalcContext)
    ////////////////cuma func////////////////
    const comaClick=()=>{
        setCalc({
            ...calc,
            num:!calc.num.toString().includes('.')?calc.num + value:calc.num
        })
    }
    ///////////////////C func////////////////
    const cClick=()=>{
        setCalc({
            ...calc,
            num:0,
            res:0,
        })
    }
    /////////////////other values////////////////
    const otherNums = ()=>{
        const numberString = value.toString()
        let numberValue;

        if (numberString === '0' && calc.num === 0) {
            numberValue = 0
        }
        else{
            numberValue = Number(calc.num + numberString)
            console.log(numberValue)
        }

        setCalc({
            ...calc,
            num:numberValue,
        })
    }

    ///////////////sign funv////////////

    const signClick = ()=>{
        setCalc({
            sign:value,
            res:!calc.res && calc.num ? calc.num : calc.res,
            num:0
        })
    }

    //////////////equal func //////////

    const equalClick = ()=>{
        if (calc.num && calc.res) {
            const calcule = (a,b,sign)=>{
                const result={
                    '+':(a,b)=>a+b,
                    '-':(a,b)=>a-b,
                    'x':(a,b)=>a*b,
                    '/':(a,b)=>a/b,
                }
                return result[sign](a,b)
            }
            setCalc({
                res:calcule(calc.res,calc.num,calc.sign),
                num:0,
                sign:''
               })
        }
    }
    /////////percent func////////////////

    const percentClick = ()=>{
        setCalc({
            num:calc.num/100,
            res:calc.res/100,
            sign:''
        })
    }

    ///////////plusMine//////////////
    const plusMiClick = ()=>{
        setCalc({
            sign:'',
            num:calc.num?calc.num*-1:0,
            res:calc.res?calc.res*-1:0
        })
    }



    const handellClick = ()=>{
        const result = {
            '.':comaClick,
            'C':cClick,
            '/':signClick,
            'x':signClick,
            '+':signClick,
            '-':signClick,
            '=':equalClick,
            '%':percentClick,
            '+-':plusMiClick
        }
        if (result[value]) {
            return result[value]()
        }
        else{
            return otherNums()
        }
       
    }
    return (
        <button onClick={handellClick} className= {classBtn(value)} > {value} </button>
    );
}

export default Button;
