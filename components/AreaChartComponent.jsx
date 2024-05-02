"use client"

import { 
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
 } from "recharts";

const productSales = [
  {
    name: 'Jan',
    product1: 4000,
    product2: 2400,
  },
  {
    name: 'Feb',
    product1: 3000,
    product2: 2210,
  },
  {
    name: 'Mar',
    product1: 2000,
    product2: 2290,
  },
  {
    name: 'Apr',
    product1: 2780,
    product2: 2000,
  },
  {
    name: 'May',
    product1: 1890,
    product2: 2181,
  },
  {
    name: 'Jun',
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart 
      width={500} 
      height={400} 
      data={productSales}
      margin={{right:30}}
      >
        <YAxis/>
        <XAxis/>
        <CartesianGrid/>
        <Tooltip content={<CustomTooltip/>}/>
        <Legend/>
        <Area 
        type="monotone"
        dataKey="product1"
        stroke="hsl(263.4 70% 50.4%)"
        fill="hsl(263.4 70% 50.4%)"
        stackId={1}
        
        />
        <Area 
        type="monotone" 
        dataKey="product2"
        stroke="hsl(0 62.8% 30.6%)"
        fill="hsl(0 62.8% 30.6%)"
        stackId={2}
        />

      </AreaChart>

    </ResponsiveContainer>
    
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm" style={{ color: 'hsl(263.4, 70%, 50.4%)' }}>
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm" style={{ color: 'hsl(0 62.8% 30.6%)' }}>
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
