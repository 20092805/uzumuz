import React, { useEffect, useState, Fragment } from "react";
import './App.css'

const App = () => {
    const [state, setState] = useState(0)
    const [msg, setMsg] = useState("")
    useEffect(() => {

        setMsg(`event - ${state}`)
    }, [state])
    const data = [
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },

        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        },
        {
            name: 'Ozbekiston',
            lastname: 'Toshkent',
            age: '2500',
            phone: '902786923',
            addres: 'Ozbekiston',
            rangi: 'qora'

        }
    ]
    return (
        <>
            <div className="App">
                { /*<span>{msg}</span>
                <span>{state}</span>
                <button onClick={() => setState(state + 10)}>
                    {state === 10 ? "end" : "start"}
                </button>
                <button onClick={() => setState(state <= 0 ? 0 : state - 1)}>
                    {state === 20 ? "end" : "start"}
                </button>
    <button onClick={() => setState(0)}>restart</button>*/}

                <table border={1} className="table">
                    <thead>
                        <tr>
                            <th>N%</th>
                            <th>name</th>
                            <th>lastname</th>
                            <th>age</th>
                            <th>phone</th>
                            <th>addres</th>
                            <th>narx</th>
                            <th>rangi</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {data.map((item, index) => {
                            return (
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{item.name}</th>
                                    <th>{item.lastname}</th>
                                    <th>{item.age}</th>
                                    <th>{item.phone}</th>
                                    <th>{item.addres}</th>
                                    <th>{item.narx}</th>
                                    <th>{item.rangi}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </>
    )

}

export default App

/**
 *  <div>
                            <span>o'quvchining ismi</span> - {item.name} -
                            <span>lastname</span> - {item.lastname} -
                            <span>yosh</span> - {item.age}-
                            <span>phone</span> - {item.phone}-
                            <span>addres</span> - {item.addres}
                        </div>
 */