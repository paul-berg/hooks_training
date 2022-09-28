import userEvent from "@testing-library/user-event";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true)
    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}
                >
                    +
                </button>
                <button
                    onClick={() => setVisible(false)}
                >
                    hide
                </button>
                {/* <ClassCounter value={value}/> */}
                {/* <HookCounter value={value}/> */}
                <Notification />
            </div>
        )
    } else {
        return <button
            onClick={() => setVisible(true)}
        >
            show
        </button>
    }
}

// const HookCounter = ({ value }) => {
//     useEffect(() => {
//         console.log('useEffect()')
//         return () => console.log('clear')
//     }, [value]);

//     return <p>{value}</p>
// }

//mount
// const HookCounter = ({ value }) => {
//     useEffect(() => {console.log('~ compDidMount')}, [])
//         return <p>{value}</p>
//     }
//update
// const HookCounter = ({ value }) => {
//     useEffect(() => console.log('~ compDidMount'), [])
//     useEffect(() => console.log('~ compDidUpdate'))
//     return <p>{value}</p>
// }
//unmount
// const HookCounter = ({ value }) => {
//     useEffect(() => () => console.log('~ compWillUnmount'), [])
//     return <p>{value}</p>
// }
//создать соообщение и удалить его in 2 sec
const Notification = () => {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 5000)
        return () => clearInterval(timeout)
    }, [])

    return <div>
        {visible && <p>Hello</p>}
    </div>

    
}
class ClassCounter extends Component {
    componentDidMount() {
        console.log('class: mount')
    }
    componentDidUpdate(props) {
        console.log('class: update')
    }
    componentWillUnmount() {
        console.log('class: unmount')
    }
    render() {
        return <p>{this.props.value}</p>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);