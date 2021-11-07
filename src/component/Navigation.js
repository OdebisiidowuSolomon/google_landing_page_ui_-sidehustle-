import React from "react";
import { AppsOutlined, Menu } from "@material-ui/icons";
import Option from "./Option";
import { Avatar } from "@material-ui/core";

export default function Navigation() {
  return (
    <>
      <div className="Navigation">
        <div className="navigation__left">
          <div className="navigation__bar hoverBtn">
            <Menu />
          </div>
          <div className="navigation__options">
            <Option name="ALL" active="active" />
            <Option name="IMAGES" />
          </div>
        </div>
        <div className="navigation__right">
          <div className="navigation__app hoverBtn">
            <AppsOutlined />
          </div>
          <div className="navigation__avatar hoverBtn">
            <Avatar />
          </div>
        </div>
      </div>
      <div className="Navigation_desktop">
        <div className="Navigation__desktop__options">
          <span className="Navigation__desktop__option">
            <Option name="Gmail" />
          </span>
          <span className="Navigation__desktop__option">
            <Option name="Images" />
          </span>
          <span className="Navigation__desktop__option">
            <AppsOutlined />
          </span>
          <span className="Navigation__desktop__option">
            <Avatar />
          </span>
        </div>
      </div>
    </>
  );
}
