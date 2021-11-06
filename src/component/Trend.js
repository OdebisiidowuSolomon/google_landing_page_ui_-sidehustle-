import { Button } from "@material-ui/core";
import { TrendingUp } from "@material-ui/icons";
import React from "react";

export default function Trend() {
  const trendArr = [
    "Cryptocurrency",
    "Blockchain",
    "Sidehustle 4.0",
    "Web 3.0",
    "Artificial Intelligence",
    "Internet Of Things",
    "Typescript",
    "React Vr",
    "Robotics",
  ];

  const displayTrends = () =>
    trendArr.map((trend) => (
      <div className="trend__trend" key={trend}>
        <div className="trend__left">
          <TrendingUp />
        </div>
        <div className="trend__right">
          <Button>{trend}</Button>
        </div>
      </div>
    ));

  return (
    <div className="trend__container">
      <div className="trend__title">Trending Searches</div>

      <div className="trend__trends">{displayTrends()}</div>
    </div>
  );
}
