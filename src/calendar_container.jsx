import PropTypes from "prop-types";
import React from "react";

export default function CalendarContainer({
  className,
  children,
  onPressStart = null
}) {
  return (
    <div
      className={className}
      onTouchStart={onPressStart}
      onMouseDown={onPressStart}
    >
      <div className="react-datepicker__triangle" />
      {children}
    </div>
  );
}

CalendarContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onPressStart: PropTypes.func
};
