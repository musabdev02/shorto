import React, { useEffect, useState } from 'react'
const apiUrl = import.meta.env.VITE_API_URL;
import { useAlert } from '../../contexts/Alert';
// component
import ClickChart from '../../components/Dashboard/Analytics/ClickChart'
import Infobox from '../../components/Dashboard/Analytics/Infobox';
// helper
import { addPrefix } from '../../helper';
const Analytics = () => {
  const { showAlert } = useAlert();
  const [chartData, setChartData] = useState([]);
  const [totalClicks, setTotalClicks] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const handleRequest = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/user/url/`, {
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
        }else{
          showAlert(`Error: ${data?.message}`, "error")
        }
        setLoading(false);
      } catch (error) {
        setLoading(false)
        showAlert(`Error: ${error.message}`, "error")
      }
    };

    const generateChartData = (history) => {
      const clickMap = new Map();
    
      history.forEach(({ timestamp }) => {
        const date = new Date(timestamp);
        const hour = date.getHours();
        
        const hourLabel = new Date(0, 0, 0, hour).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
    
        if (!clickMap.has(hourLabel)) {
          clickMap.set(hourLabel, 0);
        }
        clickMap.set(hourLabel, clickMap.get(hourLabel) + 1);
      });
    
      
      const result = Array.from(clickMap.entries()).map(([time, clicks]) => ({
        time,
        clicks
      }));
    
      
      return result.sort((a, b) =>
        new Date(`1970-01-01 ${a.time}`) - new Date(`1970-01-01 ${b.time}`)
      );
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
                <h2 className='text-2xl px-6 font-semibold'>{addPrefix(totalClicks)} <span className='text-xs text-gray-700 font-light'>Clicks</span></h2>
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