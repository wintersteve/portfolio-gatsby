import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import competencies from "../data/competencies.json";

const COLORS = ["#3B87F4", "#14CFFF", "#94E368"];
const HEIGHT = 700;
const WIDTH = 700;

const unique = (collection) => [...new Set(collection)];

const data = competencies.flatMap(({ categories, type }) =>
  categories.flatMap(({ skills }) => skills).map((data) => ({ ...data, type }))
);

const types = unique(data.map(({ type }) => type)).map((type) =>
  type.replace(/_/g, "")
);

const max = d3.max(data, ({ value }) => value);
const min = 0;
const extent = [min, max];

function Chart() {
  const ref = useRef();

  const scale = d3
    .scaleLinear()
    .domain(extent)
    .range([75, WIDTH / 2 - 20]);

  const colorScale = d3.scaleOrdinal().domain([]).range(COLORS);

  const angle = (2 * Math.PI) / data.length;

  const generator = d3.arc().padAngle(0.005).cornerRadius(0);

  const paths = data.map((data, index) => ({
    ...data,
    id: `slice-${index}`,
    fill: colorScale(data.type),
    path: generator({
      startAngle: index * angle,
      endAngle: (index + 1) * angle,
      innerRadius: scale(0),
      outerRadius: scale(data.value),
    }),
  }));

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3
      .select(ref.current)
      .attr("height", HEIGHT)
      .attr("width", WIDTH)
      .attr("style", "margin: auto");

    const group = svg
      .append("g")
      .attr("transform", () => `translate(${WIDTH / 2} ${HEIGHT / 2})`);

    const legendsGroup = group
      .append("g")
      .attr("transform", "translate(-22 -12)");

    const legends = legendsGroup
      .selectAll("g")
      .data(types)
      .enter()
      .append("g")
      .attr("transform", (_, index) => `translate(0 ${index * 20})`);

    legends
      .append("rect")
      .attr("fill", colorScale)
      .attr("height", 8)
      .attr("width", 8)
      .attr("x", -12)
      .attr("y", -8);

    legends
      .append("text")
      .attr("fill", "#fff")
      .attr("font-size", 12)
      .attr("font-weight", 600)
      .text((d) => d);

    group
      .selectAll("path")
      .data(paths)
      .enter()
      .append("path")
      .attr("d", (d) => d.path)
      .attr("id", (d) => d.id)
      .attr("fill", (d) => d.fill);

    group
      .selectAll(".valueText")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "valueText")
      .attr("dy", -8)
      .attr("fill", "#fff")
      .attr("font-weight", 700)
      .attr("font-size", 12)
      .append("textPath")
      .attr("xlink:href", (_, index) => `#slice-${index}`)
      .style("text-anchor", "middle")
      .attr("startOffset", "5.5%")
      .text((d) => d.value);

    group
      .selectAll(".titleText")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "titleText")
      .attr("dx", -14)
      .attr("dy", 5)
      .attr("transform", "rotate(5)")
      .attr("font-weight", 700)
      .attr("font-size", 13)
      .attr("fill", "white")
      .append("textPath")
      .attr("xlink:href", (_, index) => `#slice-${index}`)
      .style("text-anchor", "end")
      .attr("startOffset", "100%")
      .text((d) => d.title);
  }, [data]);

  return <svg ref={ref} />;
}

export default Chart;
