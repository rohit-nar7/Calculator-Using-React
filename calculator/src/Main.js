// @ts-nocheck
import React, { useState } from 'react'
import'bootstrap/dist/css/bootstrap.css';



export default function Main() {


    const [inputvalue, changeInput] = useState('')
    function display (value) {

        changeInput(inputvalue + value)
    }

    function calculate() {

        var ans = eval(inputvalue)
        changeInput(ans)
    }





  return (
    <div className='row justify-content-center'>

        <div className='col-md-5'>

        <h1>React Calculator</h1>

        <table className='table ' >
            <tr>
                <td colSpan={3}><input type="text" value={inputvalue}/></td>
                <td><button onClick={() => changeInput('')}>Clear</button></td>
            </tr>

            <tr>
            <td><button onClick={() => display('1')}>1</button></td>
            <td><button onClick={() =>display('2')}>2</button></td>
            <td><button onClick={() =>display('3')}>3</button></td>
            <td><button onClick={() =>display('/')}>/</button></td>
            </tr>

            <tr>
            <td><button onClick={() =>display('4')}>4</button></td>
            <td><button onClick={() =>display('5')}>5</button></td>
            <td> <button onClick={() =>display('6')}>6</button></td>
            <td><button onClick={() =>display('*')}>*</button></td>
            </tr>

            <tr>
            <td><button onClick={() =>display('7')}>7</button></td>
            <td><button onClick={() =>display('8')}>8</button></td>
            <td><button onClick={() =>display('9')}>9</button></td>
            <td><button onClick={() =>display('-')}>-</button></td>
            </tr>

            <tr>
            <td> <button onClick={() =>display('.')}>.</button></td>
            <td> <button onClick={() =>display('0')}>0</button></td>
            <td> <button onClick={() =>calculate()}>=</button></td>
            <td> <button onClick={() =>display('+')}>+</button></td>
            </tr>



        </table>




        </div>


    </div>
  )
}
