import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

interface SkillsChartProps {
  data: any[];
}

export const SkillsChart: React.FC<SkillsChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 5,
          right: 30,
          left: 100,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis 
          dataKey="name" 
          type="category" 
          scale="band" 
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "8px 12px",
          }}
          formatter={(value: number, name: string) => {
            return [`${value}%`, name === "linkedin" ? "LinkedIn" : "Resume"];
          }}
        />
        <Legend />
        <Bar 
          dataKey="linkedin" 
          name="LinkedIn" 
          fill="#0077B5" 
          radius={[0, 4, 4, 0]}
        />
        <Bar 
          dataKey="resume" 
          name="Resume" 
          fill="#4F46E5" 
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};