import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ClickChart = ({ data }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" axisLine={false} tickLine={false} />

          <YAxis domain={[0, "dataMax + 1"]} axisLine={false} tickLine={false} />

          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="clicks" 
            stroke="#007bff" 
            strokeWidth={2} 
            dot={{ r: 5 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClickChart;
