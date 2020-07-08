import React, { useState, useEffect } from "react";
import { ScrollTo } from "react-scroll-to";
import "./style.scss";
import ControlBtn from "./ControlBtn";
export default function Navigation() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <div className="abs">
      <div
        className="navigation"
        style={{
          opacity: scrollTop >= 0 && scrollTop < 620 ? 0 : 1,
          transition: "0.4s",
        }}
      >
        <ScrollTo>
          {({ scroll }) => (
            <div
              style={{ marginTop: 72, transition: "0.4s" }}
              className={
                scrollTop >= 0 && scrollTop < 620 ? "active1 slow" : "slow"
              }
            >
              <div
                className={
                  scrollTop >= 0 && scrollTop < 620 ? "active2 slow" : "slow"
                }
              >
                <div
                  className="scr"
                  style={{
                    opacity: scrollTop >= 0 && scrollTop < 620 ? 1 : 0.5,
                    width: scrollTop >= 0 && scrollTop < 620 ? 6 : 3,
                    height: scrollTop >= 0 && scrollTop < 620 ? 6 : 3,
                  }}
                  onClick={() => {
                    scroll({ x: 0, y: 0, smooth: true });
                  }}
                >
                  <p
                    style={{
                      opacity: scrollTop >= 0 && scrollTop < 620 ? 1 : 0,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <div
              style={{ marginTop: 72, transition: "0.4s" }}
              className={
                scrollTop >= 620 && scrollTop < 1500 ? "active1 slow" : "slow"
              }
            >
              <div
                className={
                  scrollTop >= 620 && scrollTop < 1500 ? "active2 slow" : "slow"
                }
              >
                <div
                  className="scr"
                  style={{
                    opacity: scrollTop >= 620 && scrollTop < 1500 ? 1 : 0.5,
                    width: scrollTop >= 620 && scrollTop < 1500 ? 6 : 3,
                    height: scrollTop >= 620 && scrollTop < 1500 ? 6 : 3,
                  }}
                  onClick={() => {
                    scroll({ x: 0, y: 749, smooth: true });
                  }}
                >
                  <p
                    style={{
                      opacity: scrollTop >= 620 && scrollTop < 1500 ? 1 : 0,
                    }}
                    className="black_"
                  >
                    ГАЛЕРЕЯ
                  </p>
                </div>
              </div>
            </div>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <div
              style={{ marginTop: 72, transition: "0.4s" }}
              className={
                scrollTop >= 1500 && scrollTop < 2285 ? "active1 slow" : "slow"
              }
            >
              <div
                className={
                  scrollTop >= 1500 && scrollTop < 2285
                    ? "active2 slow"
                    : "slow"
                }
              >
                <div
                  className="scr"
                  style={{
                    opacity: scrollTop >= 1500 && scrollTop < 2285 ? 1 : 0.5,
                    width: scrollTop >= 1500 && scrollTop < 2285 ? 6 : 3,
                    height: scrollTop >= 1500 && scrollTop < 2285 ? 6 : 3,
                  }}
                  onClick={() => {
                    scroll({ x: 0, y: 1506, smooth: true });
                  }}
                >
                  <p
                    style={{
                      opacity: scrollTop >= 1500 && scrollTop < 2285 ? 1 : 0,
                    }}
                  >
                    планировки
                  </p>
                </div>
              </div>
            </div>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <div
              style={{ marginTop: 72, transition: "0.4s" }}
              className={
                scrollTop >= 2285 && scrollTop < 2940 ? "active1 slow" : "slow"
              }
            >
              <div
                className={
                  scrollTop >= 2285 && scrollTop < 2940
                    ? "active2 slow"
                    : "slow"
                }
              >
                <div
                  className="scr"
                  style={{
                    opacity: scrollTop >= 2285 && scrollTop < 2940 ? 1 : 0.5,
                    width: scrollTop >= 2285 && scrollTop < 2940 ? 6 : 3,
                    height: scrollTop >= 2285 && scrollTop < 2940 ? 6 : 3,
                  }}
                  onClick={() => {
                    scroll({ x: 0, y: 2292, smooth: true });
                  }}
                >
                  <p
                    style={{
                      opacity: scrollTop >= 2285 && scrollTop < 2940 ? 1 : 0,
                    }}
                  >
                    {" "}
                    документы
                  </p>
                </div>
              </div>
            </div>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <div
              className={scrollTop > 2940 ? "active1 slow" : "slow"}
              style={{ marginTop: 72 }}
            >
              <div className={scrollTop > 2940 ? "active2 slow" : "slow"}>
                <div
                  className="scr"
                  style={{
                    opacity: scrollTop > 2940 ? 1 : 0.5,
                    width: scrollTop > 2940 ? 6 : 3,
                    height: scrollTop > 2940 ? 6 : 3,
                  }}
                  onClick={() => {
                    scroll({
                      x: 0,
                      y: 2948,
                      smooth: true,
                    });
                  }}
                >
                  <p
                    className="black_"
                    style={{ opacity: scrollTop > 2940 ? 1 : 0 }}
                  >
                    {" "}
                    контакты
                  </p>
                </div>
              </div>
            </div>
          )}
        </ScrollTo>
        <ControlBtn />
      </div>
    </div>
  );
}
