import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Data } from "../Data/Data";

const Graph = props => {
  // console.log(props.array);
  let some = Data;
  if (props.array) {
    some = props.array;
  }
  // console.log(Data);
  console.log(some)
  return (
    <ResponsiveLine
      data={some}
      margin={{ top: 50, right: 340, bottom: 50, left: 75 }}
      xScale={{ type: "point",
      min: "auto",
      max: "auto", }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        // tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "Date",
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        orient: "left",
        // tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "Amount",
        legendOffset: -40,
        legendPosition: "middle"
      }}
      colors={{ scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      onClick={point => props.selectPoint(point)}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default Graph;
