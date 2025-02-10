import React from "react";

const Card = () => {
  return (
    <div className="container">
      <h1>hello</h1>
      <div className="card-wrapper d-flex gap-5 justify-content-center align-items-center">
        <div style={{ width: "316px", padding: "16px" }} className="card">
          <div className="card-inner d-flex align-items-center justify-content-between">
            <div className="content">
              <svg
                style={{ marginBottom: "16px" }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#FCFCFC" />
                <path
                  d="M19.3807 22.843L21 17.3103L25.5604 32.8916C25.9813 34.3298 28.0187 34.3298 28.4396 32.8916L30.5388 25.7194C30.6635 25.2932 31.0544 25.0003 31.4985 25.0003H34C34.5523 25.0003 35 24.5526 35 24.0003C35 23.448 34.5523 23.0003 34 23.0003H31.4985C30.1662 23.0003 28.9936 23.8789 28.6193 25.1576L27 30.6903L22.4396 15.1089C22.0187 13.6707 19.9813 13.6707 19.5604 15.1089L17.4612 22.2812C17.3365 22.7074 16.9456 23.0003 16.5015 23.0003H14C13.4477 23.0003 13 23.448 13 24.0003C13 24.5526 13.4477 25.0003 14 25.0003H16.5015C17.8338 25.0003 19.0064 24.1216 19.3807 22.843Z"
                  fill="#1A1D1F"
                />
              </svg>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Earning
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-1-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                128k
              </span>
              <div
                style={{
                  backgroundColor: "rgba(26, 29, 31, 1)",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "none",
                }}
                className="statistic"
              >
                <span style={{ color: "rgba(131, 191, 110, 1)" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="
                  rgba(131, 191, 110, 1)"
                    class="bi bi-arrow-up-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                  37.8%
                  <span style={{ color: "#fff", marginLeft: "10px" }}>
                    this week
                  </span>
                </span>
              </div>
            </div>
            <svg
              width="84"
              height="33"
              viewBox="0 0 84 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 31C2 31 11.6217 13.5 22 13.5C32 13.5 32 20 42 20C52.3783 20 51.6217 2.5 62 2.5C71.5 2.5 82 12 82 12"
                stroke="#83BF6E"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div style={{ width: "316px", padding: "16px" }} className="card">
          <div className="card-inner d-flex align-items-center justify-content-between">
            <div className="content">
              <svg
                style={{ marginBottom: "16px" }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#FCFCFC" />
                <path
                  d="M19.3807 22.843L21 17.3103L25.5604 32.8916C25.9813 34.3298 28.0187 34.3298 28.4396 32.8916L30.5388 25.7194C30.6635 25.2932 31.0544 25.0003 31.4985 25.0003H34C34.5523 25.0003 35 24.5526 35 24.0003C35 23.448 34.5523 23.0003 34 23.0003H31.4985C30.1662 23.0003 28.9936 23.8789 28.6193 25.1576L27 30.6903L22.4396 15.1089C22.0187 13.6707 19.9813 13.6707 19.5604 15.1089L17.4612 22.2812C17.3365 22.7074 16.9456 23.0003 16.5015 23.0003H14C13.4477 23.0003 13 23.448 13 24.0003C13 24.5526 13.4477 25.0003 14 25.0003H16.5015C17.8338 25.0003 19.0064 24.1216 19.3807 22.843Z"
                  fill="#1A1D1F"
                />
              </svg>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Earning
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-1-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                512
              </span>
              <div
                style={{
                  backgroundColor: "rgba(26, 29, 31, 1)",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "none",
                }}
                className="statistic"
              >
                <span style={{ color: "rgba(255, 106, 85, 1)" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="rgba(255, 106, 85, 1)"
                    class="bi bi-arrow-down-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                    />
                  </svg>
                  37.8%
                  <span style={{ color: "#fff", marginLeft: "10px" }}>
                    this week
                  </span>
                </span>
              </div>
            </div>
            <svg
              width="84"
              height="33"
              viewBox="0 0 84 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 31C2 31 11.6217 13.5 22 13.5C32 13.5 32 20 42 20C52.3783 20 51.6217 2.5 62 2.5C71.5 2.5 82 12 82 12"
                stroke="#83BF6E"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div style={{ width: "316px", padding: "16px" }} className="card">
          <div className="card-inner d-flex align-items-center justify-content-between">
            <div className="content">
              <svg
                style={{ marginBottom: "16px" }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#FCFCFC" />
                <path
                  d="M19.3807 22.843L21 17.3103L25.5604 32.8916C25.9813 34.3298 28.0187 34.3298 28.4396 32.8916L30.5388 25.7194C30.6635 25.2932 31.0544 25.0003 31.4985 25.0003H34C34.5523 25.0003 35 24.5526 35 24.0003C35 23.448 34.5523 23.0003 34 23.0003H31.4985C30.1662 23.0003 28.9936 23.8789 28.6193 25.1576L27 30.6903L22.4396 15.1089C22.0187 13.6707 19.9813 13.6707 19.5604 15.1089L17.4612 22.2812C17.3365 22.7074 16.9456 23.0003 16.5015 23.0003H14C13.4477 23.0003 13 23.448 13 24.0003C13 24.5526 13.4477 25.0003 14 25.0003H16.5015C17.8338 25.0003 19.0064 24.1216 19.3807 22.843Z"
                  fill="#1A1D1F"
                />
              </svg>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Earning
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-1-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  marginBottom: "6px",
                }}
              >
                64k
              </span>
              <div
                style={{
                  backgroundColor: "rgba(26, 29, 31, 1)",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "none",
                }}
                className="statistic"
              >
                <span style={{ color: "rgba(131, 191, 110, 1)" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="
                  rgba(131, 191, 110, 1)"
                    class="bi bi-arrow-up-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                  37.8%
                  <span style={{ color: "#fff", marginLeft: "10px" }}>
                    this week
                  </span>
                </span>
              </div>
            </div>
            <svg
              width="84"
              height="33"
              viewBox="0 0 84 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 31C2 31 11.6217 13.5 22 13.5C32 13.5 32 20 42 20C52.3783 20 51.6217 2.5 62 2.5C71.5 2.5 82 12 82 12"
                stroke="#83BF6E"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
