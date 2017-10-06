import React from 'react';
import {
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Bar,
    Cell
} from 'recharts';

class Charts extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        const data = [
            {time: '7 am', wait: .4},
            {time: '8 am', wait: 3},
            {time: '9 am', wait: 5},
            {time: '10 am', wait: 5.2},
            {time: '11 am', wait: 4.6},
            {time: 'noon', wait: 4.9},
            {time: '1 pm', wait: 6},
            {time: '2 pm', wait: 4},
            {time: '3 pm', wait: 4.2},
            {time: '4 pm', wait: 3.9},
            {time: '5 pm', wait: 4.8},
            {time: '6 pm', wait: 3},
            {time: '7 pm', wait: 1},
        ];
        return(
            <ResponsiveContainer height='100%' width='100%'>
                <BarChart width={730} height={250} data={data}>
                <XAxis dataKey="time" />
                <YAxis dataKey="wait"/>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                <Bar dataKey="wait" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export default Charts;
