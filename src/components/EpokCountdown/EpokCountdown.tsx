import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const GetInitialTime = (initialDate: string) => {
  // Current time in "UTC" timezone
  const now = moment().tz("UTC");

  // Launch date and time in "UTC" timezone
  const d = initialDate;
  const launch = moment.tz(d, "YYYY-MM-DDTHH:mm:ss", "UTC");

  // Calculate the difference
  const difference = launch.diff(now);

  // calculate days, hours, minutes, seconds:
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // add leading zeros:
  const daysTill = days < 10 ? `0${days}` : days.toString();
  const hoursTill = hours < 10 ? `0${hours}` : hours.toString();
  const minutesTill = minutes < 10 ? `0${minutes}` : minutes.toString();
  const secondsTill = seconds < 10 ? `0${seconds}` : seconds.toString();

  return [daysTill, hoursTill, minutesTill, secondsTill];
};

const GetInitialLaunchDate = () => {
  // get current path
  const url = window.location.pathname;

  // Current time in "UTC" timezone
  const now = moment().tz("UTC");

  // Launch date and time in "UTC" timezone
  const d = "2024-04-04T00:00:00";

  const launch = moment.tz(d, "YYYY-MM-DDTHH:mm:ss", "UTC");

  // Calculate the difference
  const difference = launch.diff(now);

  if (difference < 0) {
    // add three seconds to the current time
    var t = new Date();
    t.setSeconds(t.getSeconds() + 4);

    return t.toISOString();
  }

  return d;
};

const EpokCountdown = ({
  countDownComplete,
  setCountDownComplete,
}: {
  countDownComplete?: boolean;
  setCountDownComplete?: (value: boolean) => void;
}) => {
  // this avoids the flicker of the initial time
  const initialDate = GetInitialLaunchDate();
  const [d, h, m, s] = GetInitialTime(initialDate);
  const [days, setDays] = useState(d);
  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);

  const [launchDate, _] = useState(initialDate);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const count = () => {
      // Get current time in "UTC" timezone
      const now = moment.tz("UTC");

      // Parse launchDate as a moment object in "UTC" timezone
      const launch = moment.tz(launchDate, "UTC");

      // Get the difference in milliseconds
      const difference = launch.diff(now);

      // calculate days, hours, minutes, seconds:
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // add leading zeros:
      setDays(days < 10 ? `0${days}` : days.toString());
      setHours(hours < 10 ? `0${hours}` : hours.toString());
      setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
      setSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());

      if (difference < 0) {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        if (setCountDownComplete && !countDownComplete)
          setCountDownComplete(true);
      }
    };

    interval = setInterval(count, 1000);
    count();

    return () => clearInterval(interval);
  });

  return (
    <motion.div className="z-50 flex select-none items-center justify-center gap-x-[0%] font-ScribbleChild text-[4.5vw] font-extrabold leading-none tracking-widest text-[inherit] transition lg:text-5xl  lg:leading-none">
      <span className="tabular-nums">{days}</span>
      <span className="-mt-0.5">:</span>
      <span className="tabular-nums">{hours}</span>
      <span className="-mt-0.5">:</span>
      <span className="tabular-nums">{minutes}</span>
      <span className="-mt-0.5">:</span>
      <span className="tabular-nums">{seconds}</span>
    </motion.div>
  );
};

export default EpokCountdown;
