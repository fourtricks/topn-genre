import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import LoadingSpinner from './LoadingSpinner';

export const GenrePredictionChart = ({ predictions, loading }) => {
  const [chartData, setChartData] = useState([]);

  // Ensure the chart data updates after mount
  useEffect(() => {
    setChartData(predictions.map((pred) => ({ genre: pred[0], confidence: pred[1] })));
  }, [predictions]);

  return (
    <div className="mt-5 w-full flex items-center justify-center dark:text-gray-200">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col w-full max-w-[375px] sm:max-w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden h-[75vh] sm:h-auto">
          <div className="flex-grow overflow-y-auto p-3 sm:p-0">
            <div className="flex flex-col sm:flex-row">
              {/* Left Side: List of Genres and Confidence */}
              <div className="sm:w-1/3">
                <ul className="space-y-2">
                  {chartData.map((pred, index) => (
                    <li key={index} className="flex justify-between items-center text-sm sm:text-lg">
                      <span className="flex items-center">
                        <span className="text-gray-500 font-semibold pr-2 sm:pr-4" style={{ width: '30px' }}>{index + 1}.</span>
                        <span className="text-base sm:text-xl font-bold capitalize truncate">{pred.genre}</span>
                      </span>
                      <span className="ml-2 sm:ml-4 pr-8 sm:pr-12">{(pred.confidence * 100).toFixed(1)}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Bar Chart */}
              <div className="sm:w-2/3 flex justify-center items-center">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={chartData}
                    layout="horizontal"
                    margin={{ top: 20, bottom: 20, left: 10, right: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="category"
                      dataKey="genre"
                      tick={{ fill: document.documentElement.classList.contains('dark') ? '#D1D5DB' : '#374151' }}
                      tickLine={false}
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      type="number"
                      tick={{ fill: document.documentElement.classList.contains('dark') ? '#D1D5DB' : '#374151' }}
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip
                      formatter={(value) => `${(value * 100).toFixed(1)}%`}
                      contentStyle={{
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#1F2937' : '#FFFFFF',
                        borderColor: document.documentElement.classList.contains('dark') ? '#4B5563' : '#E5E7EB',
                      }}
                      itemStyle={{
                        color: document.documentElement.classList.contains('dark') ? '#D1D5DB' : '#374151',
                      }}
                      labelStyle={{
                        color: document.documentElement.classList.contains('dark') ? '#D1D5DB' : '#374151',
                      }}
                    />
                    <Bar
                      dataKey="confidence"
                      fill="#2563EB"
                      barSize={document.documentElement.clientWidth < 640 ? 10 : 30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
