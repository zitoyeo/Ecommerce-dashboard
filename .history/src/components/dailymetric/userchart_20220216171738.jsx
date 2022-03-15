import React from 'react'
import { Line } from 'react-chartjs-2'

const UserChart = () => {
  return (
    <Line
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }}
    />
  )
}

export default UserChart;