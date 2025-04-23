import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BloodChemBarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data = [
      { chemical: "Hemoglobin", A: 13.5, B: 14.2 },
      { chemical: "Glucose", A: 90, B: 85 },
      { chemical: "Sodium", A: 140, B: 138 },
      { chemical: "Potassium", A: 4.2, B: 4.5 },
      { chemical: "Calcium", A: 9.5, B: 9.3 },
      { chemical: "Chloride", A: 101, B: 103 }
    ];

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous renders

    const width = 800;
    const height = 400;
    const margin = { top: 40, right: 20, bottom: 60, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const chart = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand()
      .domain(data.map(d => d.chemical))
      .range([0, chartWidth])
      .paddingInner(0.2);

    const x1 = d3.scaleBand()
      .domain(["A", "B"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.A, d.B))! * 1.1])
      .range([chartHeight, 0]);

    const color = d3.scaleOrdinal()
      .domain(["A", "B"])
      .range(["#1f77b4", "#ff7f0e"]);

    chart.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${x0(d.chemical)},0)`)
      .selectAll("rect")
      .data(d => ["A", "B"].map(key => ({ key, value: d[key as "A" | "B"] })))
      .join("rect")
      .attr("x", d => x1(d.key)!)
      .attr("y", d => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", d => chartHeight - y(d.value))
      .attr("fill", d => color(d.key)!);

    // X Axis
    chart.append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x0))
      .selectAll("text")
      .attr("transform", "rotate(-30)")
      .style("text-anchor", "end");

    // Y Axis
    chart.append("g")
      .call(d3.axisLeft(y));

    // Axis Labels
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .text("Chemical");

    svg.append("text")
      .attr("x", -height / 2)
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .text("Quantity");

    // Legend
    const legend = svg.append("g")
      .attr("transform", `translate(${chartWidth + 70}, ${margin.top})`);

    ["A+", "B+"].forEach((label, i) => {
      const g = legend.append("g").attr("transform", `translate(0, ${i * 20})`);
      g.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color(["A", "B"][i])!);
      g.append("text")
        .attr("x", 20)
        .attr("y", 12)
        .text(label);
    });

  }, []);

  return (
    <div>
      <h2>Blood Chemical Quantities (A+ vs B+)</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BloodChemBarChart;