import React from "react";
import ComplexDonut from "react-svg-donuts/dist/complex";

export default function Donut() {
  return (
    <ComplexDonut
      size={200}
      radius={80}
      segments={[
        {
          color: "#FF8A80",
          value: 230,
        },
        {
          color: "#B388FF",
          value: 130,
        },
        {
          color: "#8C9EFF",
          value: 200,
        },
      ]}
      thickness={40}
      startAngle={-90}
    />
  );
}
