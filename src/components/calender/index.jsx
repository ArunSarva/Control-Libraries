import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillBackward,
  AiFillForward,
} from "react-icons/ai";
import "./calender.css";

function Calender(props) {
  const { callback, currentDate, disableCurrentDate } = props;
  const days = moment.weekdaysShort();
  const [startFrom, setStartFrom] = useState([]);
  const [totalDays, setTotalDays] = useState([]);
  const [sundays, setSundays] = useState([]);
  const [saturdays, setSaturdays] = useState([]);
  const [selectDate, setSelectDate] = useState(Number(currentDate.from.date));
  const [selectMonth, setSelectMonth] = useState(
    Number(currentDate.from.month)
  );
  const [selectYear, setSelectYear] = useState(Number(currentDate.from.year));

  function getSundays() {
    const days = new Date(selectYear, selectMonth, 0).getDate();
    const sundays = [
      8 -
        new Date(`${selectMonth}/01/${selectYear}
      `).getDay(),
    ];
    for (let i = sundays[0] + 7; i < days; i += 7) {
      sundays.push(i);
    }
    setSundays(sundays);
  }

  function getSaturdays() {
    const days = new Date(selectYear, selectMonth, 0).getDate();
    const saturdays = [
      7 - new Date(`${selectMonth}/01/${selectYear}`).getDay(),
    ];
    for (let i = saturdays[0] + 7; i < days; i += 7) {
      saturdays.push(i);
    }
    setSaturdays(saturdays);
  }

  useEffect(() => {
    //@ts-ignore
    setStartFrom(
      moment(`${selectYear}${selectMonth}`, "YYYYM")
        .startOf("month")
        .format("d")
    );
    //@ts-ignore
    setTotalDays(new Date(selectYear, selectMonth, 0).getDate());
    getSundays();
    getSaturdays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectMonth, selectYear, currentDate]);

  const updateFromDate = () => {
    setSelectMonth(12);
    setSelectYear(selectYear - 1);
  };

  const updateFromToDate = () => {
    setSelectMonth(1);
    setSelectYear(selectYear + 1);
  };

  const onChevronLeft = () => {
    if (selectMonth === 1) {
      updateFromDate();
    } else if (
      selectYear === new Date().getFullYear() &&
      selectMonth <= new Date().getMonth() + 1
    ) {
      setSelectMonth(selectMonth - 1);
    } else if (
      (selectYear === new Date().getFullYear() - 1 &&
        selectMonth >= new Date().getMonth() + 1 &&
        selectMonth !== new Date().getMonth() + 1) ||
      disableCurrentDate
    ) {
      setSelectMonth(selectMonth - 1);
    } else {
      return null;
    }
  };

  const onChevronYearLeft = () => {
    setSelectYear(selectYear - 1);
  };

  const onChevronYearRight = () => {
    setSelectYear(selectYear + 1);
  };

  const onChevronRight = () => {
    if (selectMonth === 12) {
      updateFromToDate();
    } else if (selectYear && selectMonth) {
      setSelectMonth(selectMonth + 1);
    } else if (selectYear && selectMonth) {
      setSelectMonth(selectMonth + 1);
    } else if (selectYear && selectMonth) {
      setSelectMonth(selectMonth + 1);
    } else if (disableCurrentDate) {
      setSelectMonth(selectMonth + 1);
    } else {
      return null;
    }
  };

  const selectMonthFromCalender = () => {
    switch (selectMonth) {
      case 1:
        return `January-${selectYear}`;
      case 2:
        return `February-${selectYear}`;
      case 3:
        return `March-${selectYear}`;
      case 4:
        return `April-${selectYear}`;
      case 5:
        return `May-${selectYear}`;
      case 6:
        return `June-${selectYear}`;
      case 7:
        return `July-${selectYear}`;
      case 8:
        return `August-${selectYear}`;
      case 9:
        return `September-${selectYear}`;
      case 10:
        return `October-${selectYear}`;
      case 11:
        return `November-${selectYear}`;
      case 12:
        return `December-${selectYear}`;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="calender-holder">
        <div className="from-to-holder">
          <div className="flex-center chevron-holder">
            <div className="leftKey">
              <AiFillCaretLeft
                className={` c-iconleft`}
                data-testid="calender-icon"
                onClick={() => {
                  onChevronLeft();
                }}
              />
            </div>
            <div className="leftKey">
              <AiFillBackward
                className={` c-iconleft`}
                data-testid="calender-icon"
                onClick={() => {
                  onChevronYearLeft();
                }}
              />
            </div>
            {
              <div
                style={{ width: "230px", textAlign: "center" }}
                data-testid="calender-acadimic"
              >
                {selectMonthFromCalender()}
              </div>
            }
            <div className="rightKey">
              <AiFillForward
                className={`c-iconright`}
                data-testid="calender-chevron-right"
                onClick={() => {
                  if (
                    selectMonth !== new Date().getMonth() + 1 ||
                    selectMonth === new Date().getMonth() + 1
                  ) {
                    setSelectDate(1);
                  }
                  onChevronYearRight();
                }}
              />
            </div>
            <div className="rightKey">
              <AiFillCaretRight
                className={`c-iconright`}
                data-testid="calender-chevron-right"
                onClick={() => {
                  if (
                    selectMonth !== new Date().getMonth() + 1 ||
                    selectMonth === new Date().getMonth() + 1
                  ) {
                    setSelectDate(1);
                  }
                  onChevronRight();
                }}
              />
            </div>
          </div>
        </div>
        {
          <div className="flex-center flex-header padding-10">
            {days.map((day) => {
              return (
                <div className="day" key={day}>
                  {day}
                </div>
              );
            })}
          </div>
        }
        <div className="flex-header padding-10">
          {
            //@ts-ignore
            [...Array(Number(startFrom)).keys()].map((data) => {
              return <div className="date" key={data} />;
            })
          }
          {
            //@ts-ignore
            [...Array(Number(totalDays)).keys()].map((data, index) => {
              return (
                <div className="date" key={data}>
                  <div
                    className={`date-inner
                        ${
                          sundays.includes(data + 1) ||
                          saturdays.includes(data + 1)
                            ? "date-corner"
                            : ""
                        } 
                        ${
                          selectDate === data + 1 ? "date-current" : ""
                        }                        
                        `}
                    data-testid={`calender-date-numbers-${index}`}
                    onClick={() => {
                      if (data + 1 <= new Date().getDate()) {
                        setSelectDate(data + 1);
                      } else if (
                        data + 1 > new Date().getDate() &&
                        selectMonth === new Date().getMonth() + 1
                      ) {
                      } else {
                        selectMonth === new Date().getMonth() + 1 &&
                          selectYear !== new Date().getFullYear() &&
                          data + 1 >= new Date().getDate() &&
                          setSelectDate(data + 1);
                      }
                      if (
                        selectMonth === new Date().getMonth() + 1 &&
                        selectYear !== new Date().getFullYear() &&
                        data + 1 >= new Date().getDate()
                      ) {
                        setSelectDate(data + 1);
                      } else {
                        setSelectDate(data + 1);
                      }
                    }}
                  >
                    {data + 1}
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="border-bottom-calender" />
        <div className="controller">
          <div
            className="controller-cancel"
            data-testid="calender-control-cancel"
            onClick={() => {
              callback({
                target: {
                  value: {
                    apply: false,
                    from: null,
                    to: null,
                  },
                },
              });
            }}
          >
            Cancel
          </div>
          <div
            className="controller-apply"
            data-testid="calender-control-apply"
            onClick={() => {
              callback({
                target: {
                  value: {
                    date: `${
                      selectMonth < 10 ? `0${selectMonth}` : `${selectMonth}`
                    }-${selectDate}-${selectYear}`,
                  },
                },
              });
            }}
          >
            Ok
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
