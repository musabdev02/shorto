import React, { useEffect, useState } from 'react'
// component
import ClickChart from '../../components/Dashboard/Analytics/ClickChart'
import Infobox from '../../components/Dashboard/Analytics/Infobox';
const Analytics = () => {
  const [chartData, setChartData] = useState([]);
  const [totalClicks, setTotalClicks] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const handleRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/user/url/`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const data = await res.json();
        if (data?.status === "ok" && data?.urls?.length > 0) {
          const allVisits = data.urls.flatMap(link => link.visitHistory);
          setTotalClicks(allVisits);
          setLinks(data.urls)
          const generated = generateChartData(allVisits);
          setChartData(generated);
        };
        setLoading(false);
      } catch (err) {
        setLoading(false)
        console.error(err);
      }
    };

    const generateChartData = (history) => {
      const hours = Array.from({ length: 24 }, (_, i) => {
        const hourLabel = new Date(0, 0, 0, i).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
        return { time: hourLabel, clicks: 0 };
      });

      history.forEach(({ timestamp }) => {
        const date = new Date(timestamp);
        const hour = date.getHours();
        hours[hour].clicks += 1;
      });

      return hours;
    };

    handleRequest();
  }, []);


  return (
    <div>
      {
        loading ?
        <div className='h-[90vh] flex items-center justify-center flex-col gap-1'>
        <img src="/loading.svg" alt="loadingsvg" width={50} />
        <p className='text-zinc-500'>Loading...</p>
        </div>
          :
          <div>
            <h3 className='text-xl font-medium'>Analytics</h3>
            <div className='w-full h-full'>
              {/* data */}
              <div className='border border-gray-300 rounded-lg mt-5 sm:mt-12 h-[70vh] py-6 '>
                <h2 className='text-2xl px-6 font-semibold'>{totalClicks.length} <span className='text-xs text-gray-700 font-light'>Clicks</span></h2>
                <div className='mt-8 h-[55vh] px-2'>
                  <ClickChart data={chartData} />
                </div>
              </div>
              {/* other info */}
              <div className='mt-4 px-2 flex gap-4 flex-wrap'>
                <Infobox links={links} />
              </div>
            </div>
          </div>
      }

    </div>
  )
}

export default Analytics