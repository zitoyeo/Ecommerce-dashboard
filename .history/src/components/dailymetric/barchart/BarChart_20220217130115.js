import React from 'react'
import { Bar } from 'react-chartjs-2'


const BarChart = () => {
    return (
        <div>
            <Bar
            data = {{
               labels : [
                   'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'
               ],
            }}
            height={100}
            width={200}
            />
        </div>
    )
}   

export default BarChart;