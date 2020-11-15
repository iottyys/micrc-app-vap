
import React, {Component} from "react";
import LoadingConfig from "../config/LoadingConfig";

export function rootContainer(container: Component) {
  return React.createElement(LoadingConfig, {container})
}
