import React,{useState} from 'react'
import ReactMixitup from 'react-mixitup'
import { shuffle, range } from 'lodash'

const Ex = () => {
    const [state, setState] = useState({
        items: [1, 2, 3, 4]
    })
    const shuffle=()=>{
        setState({
            items: shuffle(range(Math.round(Math.random() * 15)))
        })
    }
    return(
        <Fragment>
            <button onClick={shuffle}>Shuffle</button>
            <ReactMixitup
                items={state.items}
                renderCells={items => (
                    <div style={{ background: 'yellow' }}>
                        {items.map(({ key, ref, style }) => (
                            <div key={key} ref={ref} style={{ ...style, background: 'red' }}>
                                {key}
                            </div>
                        ))}
                    </div>
                )}
            />
        </Fragment>
    )
}

class Example extends React.Component {
    state = { items: [1, 2, 3, 4] }

    shuffle = () =>
        this.setState({
            items: shuffle(range(Math.round(Math.random() * 15)))
        })

    render() {
        return (
            <Fragment>
                <button onClick={this.shuffle}>Shuffle</button>
                <ReactMixitup
                    items={this.state.items}
                    renderCells={items => (
                        <div style={{ background: 'yellow' }}>
                            {items.map(({ key, ref, style }) => (
                                <div key={key} ref={ref} style={{ ...style, background: 'red' }}>
                                    {key}
                                </div>
                            ))}
                        </div>
                    )}
                />
            </Fragment>
        )
    }
}