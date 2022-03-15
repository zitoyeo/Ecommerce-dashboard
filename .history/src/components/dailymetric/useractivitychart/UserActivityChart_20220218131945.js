import React from 'react'
import {Bar} from 'react-chartjs-2'


const UserActivityChart =() => {
    return (
        <div>
            <Bar
                data={
                    {
                        labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", " Sun"]
                    }
                }
            
            
            
            />



        </div>
    )
}

export default UserActivityChart;
