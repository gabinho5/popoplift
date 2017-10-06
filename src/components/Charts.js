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
        // const data = [
        //     {time: '7 am', wait: .4},
        //     {time: '8 am', wait: 3},
        //     {time: '9 am', wait: 5},
        //     {time: '10 am', wait: 5.2},
        //     {time: '11 am', wait: 4.6},
        //     {time: 'noon', wait: 4.9},
        //     {time: '1 pm', wait: 6},
        //     {time: '2 pm', wait: 4},
        //     {time: '3 pm', wait: 4.2},
        //     {time: '4 pm', wait: 3.9},
        //     {time: '5 pm', wait: 4.8},
        //     {time: '6 pm', wait: 3},
        //     {time: '7 pm', wait: 1},
        // ];
        const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return(
            // <ResponsiveContainer height='100%' width='100%'>
            //     <BarChart width={730} height={250} data={data}>
            //     <XAxis dataKey="time" />
            //     <YAxis dataKey="wait"/>
            //     {/* <CartesianGrid strokeDasharray="3 3" /> */}
            //     <Tooltip />
            //     <Bar dataKey="wait" fill="#82ca9d" />
            //     </BarChart>
            // </ResponsiveContainer>
            <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="pv" fill="#8884d8">
       		{
          	data.map((entry, index) => {
            	const color = entry.pv > 4000 ? COLORS[0] : COLORS[1];
            	return <Cell fill={color} />;
            })
          }
       </Bar>
      </BarChart>
        );
    }
}

export default Charts;
