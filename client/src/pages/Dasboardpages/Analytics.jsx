import React from 'react'
// component
import ClickChart from '../../components/Dashboard/Analytics/ClickChart'
import Infobox from '../../components/Dashboard/Analytics/Infobox';
const Analytics = () => {
  const chartData = [
    { time: "12:00 am", clicks: 0 },
    { time: "01:00 am", clicks: 0 },
    { time: "02:00 am", clicks: 0 },
    { time: "03:00 am", clicks: 0 },
    { time: "04:00 am", clicks: 0 },
    { time: "05:00 am", clicks: 3 },
    { time: "06:00 am", clicks: 2 },
    { time: "07:00 pm", clicks: 1 },
  ];
  return (
    <div>
        <h3 className='text-xl font-medium'>Analytics</h3>
        <div className='w-full h-full'>
            {/* data */}
            <div className='border border-gray-300 rounded-lg mt-12 h-[70vh] py-6 '>
              <h2 className='text-2xl px-6 font-semibold'>3 <span className='text-xs text-gray-700 font-light'>Clicks</span></h2>
              <div className='mt-8 h-[55vh] px-2'>
                <ClickChart data={chartData} />
              </div>
            </div>
            {/* other info */}
            <div className='mt-4 px-2 flex gap-4 flex-wrap'>
              <Infobox />
            </div>
        </div>
    </div>
  )
}

export default Analytics