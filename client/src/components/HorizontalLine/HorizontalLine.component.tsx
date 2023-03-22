import React, { FC } from "react";
import { classNames } from "utils/functions";

interface Props {
  className: string;
}

const HorizontalLine: FC<Props> = ({ className }) => (
  <hr className={classNames("border-border-color", className)} />
);

export default HorizontalLine;
