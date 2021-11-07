import PropTypes from "prop-types";
import React from "react";
import s from "./notification.css";

const Notification = ({ message }) => (
  <p className={s.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
