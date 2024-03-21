import React, { useEffect, useState } from "react";
import { Header, KengButton } from "../components";
import { createColumnHelper } from "@tanstack/react-table";

import glori_data from "../static/glori_lyst.json";
import { Table } from "../components/Table";

import { toast } from "sonner";

const columnHelper = createColumnHelper();

// "rank": 1
// "total_received_amount": "323662054.8",
// "total_sent_amount": "291295849.3",
// "Airdrop burned": "291,295,849",
// "Airdrop Points": "291,295,849",
// "Excess burned": "0",
// "Purchase points": "0",
// "Total Points": "291,295,849",
// "scaling": "7,038",
// "scaling Values": "7,038",
// "Normalised to 1": "7383",
// "percentage": "3.02%"

const columns = [
  columnHelper.accessor("rank", {
    header: () => "renk",
    cell: (cell) => {
      let value = cell.getValue();

      return <span className="block w-full text-center">{value}</span>;
    },
  }),
  columnHelper.accessor("recipient_address", {
    header: () => "adrez",
    cell: (cell) => {
      let value: string = cell.getValue();

      // only show first 6 and last 4 characters
      value = value.slice(0, 8) + "..." + value.slice(-4);

      const copyAndToast = () => {
        navigator.clipboard.writeText(cell.getValue());
        toast.custom((t) => (
          <div className="relative w-full overflow-clip">
            <svg
              viewBox="0 0 278 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              vectorEffect="non-scaling-stroke"
            >
              <g filter="url(#filter0_i_508_112)">
                <path
                  d="M3.80276 5.95872C3.36593 4.53905 2.25347 3.03531 2.01545 1.54713C3.34406 1.68821 5.12484 2.07029 5.87787 2.69782C7.62625 4.15481 15.117 2.94037 17.1159 2.94037C22.9133 2.94037 28.7302 2.42392 34.4983 1.94324C39.0355 1.56514 43.4889 1.48509 48.054 1.48509H73.171C76.7191 1.48509 80.2395 1.97019 83.7083 1.97019C87.6851 1.97019 91.4058 2.94037 95.3505 2.94037C113.716 2.94037 131.773 1.48509 150.139 1.48509H173.693H183.88C187.419 1.48509 192.378 1.21654 195.765 2.21273C199.937 3.43977 204.691 2.94037 208.997 2.94037C213.766 2.94037 218.573 2.45528 223.388 2.45528C227.918 2.45528 232.201 1.48509 236.755 1.48509H249.125H268.394H275.32C276.982 1.48509 275.727 5.85995 275.589 6.82111C275.205 9.50978 275.713 12.356 275.562 15.0677C275.439 17.2969 274.233 19.598 274.107 21.859C273.864 26.228 273.622 30.6993 273.622 35.199C273.622 37.5315 273.493 39.9038 273.622 42.2329C273.737 44.3071 275.077 46.4655 275.077 48.5391C275.077 50.863 275.562 53.1797 275.562 55.5729C275.562 57.6068 275.077 59.4376 275.077 61.394C275.077 65.5735 275.956 70.9029 275.05 74.9766C274.59 77.0459 274.591 79.0761 274.592 81.2455L274.592 81.5254C274.592 82.9772 275.327 86.3763 273.514 86.3763H226.46C213.836 86.3763 201.285 86.8614 188.65 86.8614C184.408 86.8614 180.175 87.3465 175.903 87.3465C171.547 87.3465 167.252 86.8614 162.913 86.8614C155.48 86.8614 148.128 86.3763 140.707 86.3763C135.341 86.3763 130.06 85.8912 124.672 85.8912C118.955 85.8912 113.394 84.921 107.72 84.921H85.6217C80.4089 84.921 75.0421 84.5479 69.8831 85.2983C56.9274 87.1828 43.4557 86.3763 30.375 86.3763C24.4346 86.3763 18.5368 86.7021 12.6422 86.8614C11.2529 86.8989 4.57068 87.791 3.53326 86.7536C2.3055 85.5258 2.94037 81.9007 2.94037 80.3126V71.6079V58.726C2.94037 53.3497 3.91056 47.8176 3.91056 42.5024C3.91056 36.9641 5.85093 32.3006 5.85093 26.7099V19.703C5.85093 17.2094 4.88074 15.0426 4.88074 12.6422C4.88074 11.4191 4.38497 10.5459 4.01835 9.35437C3.68247 8.26275 4.13928 7.05242 3.80276 5.95872Z"
                  fill="#A07F4F"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <path
                d="M1.97019 1C1.97019 2.66488 3.31231 4.36479 3.80276 5.95872C4.13928 7.05242 3.68247 8.26275 4.01835 9.35437C4.38497 10.5459 4.88074 11.4191 4.88074 12.6422C4.88074 15.0426 5.85093 17.2094 5.85093 19.703C5.85093 22.0386 5.85093 24.3743 5.85093 26.7099C5.85093 32.3006 3.91056 36.9641 3.91056 42.5024C3.91056 47.8176 2.94037 53.3497 2.94037 58.726C2.94037 63.02 2.94037 67.3139 2.94037 71.6079C2.94037 74.5095 2.94037 77.4111 2.94037 80.3126C2.94037 81.9007 2.3055 85.5258 3.53326 86.7536C4.57068 87.791 11.2529 86.8989 12.6422 86.8614C18.5368 86.7021 24.4346 86.3763 30.375 86.3763C43.4557 86.3763 56.9274 87.1828 69.8831 85.2983C75.0421 84.5479 80.4089 84.921 85.6217 84.921C92.9879 84.921 100.354 84.921 107.72 84.921C113.394 84.921 118.955 85.8912 124.672 85.8912C130.06 85.8912 135.341 86.3763 140.707 86.3763C148.128 86.3763 155.48 86.8614 162.913 86.8614C167.252 86.8614 171.547 87.3465 175.903 87.3465C180.175 87.3465 184.408 86.8614 188.65 86.8614C201.285 86.8614 213.836 86.3763 226.46 86.3763C242.145 86.3763 257.83 86.3763 273.514 86.3763C275.327 86.3763 274.592 82.9772 274.592 81.5254C274.592 79.2502 274.571 77.1346 275.05 74.9766C275.956 70.9029 275.077 65.5735 275.077 61.394C275.077 59.4376 275.562 57.6067 275.562 55.5729C275.562 53.1797 275.077 50.863 275.077 48.5391C275.077 46.4655 273.737 44.3071 273.622 42.2329C273.493 39.9038 273.622 37.5315 273.622 35.199C273.622 30.6993 273.864 26.228 274.107 21.859C274.233 19.598 275.439 17.2969 275.562 15.0677C275.713 12.356 275.205 9.50978 275.589 6.82111C275.727 5.85995 276.982 1.48509 275.32 1.48509C273.011 1.48509 270.702 1.48509 268.394 1.48509C261.971 1.48509 255.548 1.48509 249.125 1.48509C245.002 1.48509 240.878 1.48509 236.755 1.48509C232.201 1.48509 227.918 2.45528 223.388 2.45528C218.573 2.45528 213.766 2.94037 208.997 2.94037C204.691 2.94037 199.937 3.43977 195.765 2.21273C192.378 1.21654 187.42 1.48509 183.88 1.48509C180.484 1.48509 177.089 1.48509 173.693 1.48509C165.842 1.48509 157.99 1.48509 150.139 1.48509C131.773 1.48509 113.716 2.94037 95.3505 2.94037C91.4058 2.94037 87.685 1.97019 83.7083 1.97019C80.2396 1.97019 76.7191 1.48509 73.171 1.48509C64.7987 1.48509 56.4263 1.48509 48.054 1.48509C43.4889 1.48509 39.0355 1.56514 34.4983 1.94324C28.7302 2.42392 22.9133 2.94037 17.1159 2.94037C15.117 2.94037 7.62625 4.15481 5.87787 2.69782C4.90386 1.88615 2.21041 1.48509 1 1.48509"
                stroke="#010400"
                stroke-width="2"
                stroke-linecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <defs>
                <filter
                  id="filter0_i_508_112"
                  x="0"
                  y="0"
                  width="277.173"
                  height="88.3465"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="3" dy="4" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.819608 0 0 0 0 0.713726 0 0 0 0 0.572549 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_508_112"
                  />
                </filter>
              </defs>
            </svg>

            <button
              className="absolute right-2 top-2 z-50 "
              onClick={() => toast.dismiss(t)}
            >
              <svg
                viewBox="0 0 14 18"
                className="size-4 text-red-800/80 hover:text-red-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6828 1.31836C11.6828 2.53829 10.0811 4.76892 9.25736 5.68419C7.9381 7.15003 6.97435 9.27618 5.86171 10.9124C4.811 12.4576 2.46606 14.2845 2.46606 16.3562"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1.01074 2.28857C1.06559 2.72738 3.28494 4.95869 3.7057 5.19913C4.51808 5.66334 4.41879 6.59973 5.16098 7.1395C6.13136 7.84523 7.22218 8.71561 8.07153 9.56496C9.46702 10.9604 10.9527 14.0509 12.653 14.901"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <div className="relative p-4">
              <p className="text-center font-ScribbleChild text-sm text-keng-text md:text-left md:text-base">
                cupyd adrez
              </p>
              <p className="whitespace-nowrap text-center font-ScribbleChild text-xs text-keng-text text-keng-text/70 md:text-left">
                {cell.getValue()}
              </p>
            </div>
          </div>
        ));
      };

      return (
        <button
          className="w-full text-right [text-shadow:inherit] hover:brightness-150"
          onClick={copyAndToast}
        >
          {value}
        </button>
      );
    },
  }),
  columnHelper.accessor("Total Points", {
    header: () => "ponts",
  }),
  columnHelper.accessor("percentage", {
    header: () => "riword",

    cell: (cell) => {
      let value: string = cell.getValue();

      return (
        <div className="flex h-full w-full items-center justify-center gap-x-[3%]">
          <img
            className="aspect-square w-[16%]"
            src="/images/zorksees_coin.png"
            alt="zorksees coin"
          />
          <div className="relative">{value}</div>
        </div>
      );
    },
  }),
];

const searchAddress = (address: string) => {
  // search glori_data by address

  if (address === undefined) return null;

  return glori_data.filter((item) => {
    return item.recipient_address.toLowerCase() === address.toLowerCase();
  });
};

const DrawnBorder = () => {
  return (
    <>
      <svg
        viewBox="0 0 504 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute -top-1/2 h-full w-full  overflow-visible text-[hsl(33,40%,65%)]  peer-focus-visible:text-keng-text"
      >
        <path
          d="M502.093 5.60566C497.95 5.14528 493.648 4.31508 489.379 4.31508C484.233 4.31508 479.29 4.98791 474.226 5.17546C470.108 5.32799 465.843 6.00292 461.631 5.58176C454.833 4.90193 447.868 5.29815 441.102 4.41068C437.773 3.97411 434.229 4.31508 430.872 4.31508C426.187 4.31508 421.635 3.7122 416.963 3.4786C409.463 3.10361 401.865 3.4547 394.354 3.4547C386.299 3.4547 378.25 3.74559 370.239 4.33898C364.141 4.79073 358.326 6.46604 352.171 6.46604C349.182 6.46604 346.477 7.06786 343.544 7.30253C339.721 7.60836 335.76 7.32642 331.928 7.32642C325.491 7.32642 319.054 7.32642 312.617 7.32642C303.097 7.32642 293.279 6.52689 283.986 5.19936C282.677 5.01242 281.219 5.17546 279.899 5.17546C277.506 5.17546 275.22 4.31508 272.801 4.31508C268.204 4.31508 263.607 4.31508 259.011 4.31508C254 4.31508 248.989 4.31508 243.978 4.31508C238.747 4.31508 232.689 5.13578 227.535 4.21948C223.445 3.49228 219.078 3.88489 214.916 3.88489C209.407 3.88489 203.886 3.99082 198.378 3.88489C185.822 3.64343 173.14 3.4547 160.521 3.4547C155.377 3.4547 150.568 3.78321 145.488 4.29118C139.892 4.85078 133.968 4.31508 128.352 4.31508C116.283 4.31508 104.213 4.31508 92.144 4.31508C86.6232 4.31508 81.1024 4.31508 75.5816 4.31508C70.783 4.31508 66.3489 3.74736 61.6004 3.4308C58.7365 3.23987 56.1018 2.59431 53.1877 2.59431C51.1602 2.59431 47.9561 2.62912 45.994 2.06852C42.8655 1.17468 38.8024 1.73393 35.5499 1.73393C32.1823 1.73393 28.1776 1.49349 25.3448 3.4547C22.9562 5.10828 19.6629 4.74527 16.8365 4.74527C14.2554 4.74527 11.6742 4.74527 9.09305 4.74527C6.87352 4.74527 3.69019 4.22026 1.77979 5.17546"
          vectorEffect="non-scaling-stroke"
          stroke="currentColor"
          className="stroke-[3] md:stroke-[4]"
          stroke-linecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 4 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 top-0 h-full  overflow-visible text-[hsl(33,40%,65%)]  peer-focus-visible:text-keng-text"
      >
        <path
          d="M1.6631 43.3343C1.6631 41.2621 1.23291 39.2339 1.23291 37.0965C1.23291 35.4269 1.6631 34.231 1.6631 32.5795C1.6631 30.9588 2.52349 30.077 2.52349 28.4927C2.52349 26.8436 2.52349 25.1945 2.52349 23.5454C2.52349 16.0785 2.09329 8.95829 2.09329 1.60565"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
          className="stroke-[3] md:stroke-[4]"
          stroke-linecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 500 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute -bottom-1/2 h-full w-full overflow-visible text-[hsl(33,40%,65%)]  peer-focus-visible:text-keng-text"
      >
        <path
          d="M1.36084 2.04373C6.17637 2.04373 10.7742 1.61354 15.5572 1.61354C20.9132 1.61354 26.2569 2.36694 31.7133 2.47393C36.383 2.56549 40.9687 2.90412 45.6467 2.90412C50.701 2.90412 55.7108 4.1018 60.7273 4.19469C70.0838 4.36796 79.4839 4.19713 88.7854 3.7645C108.084 2.86687 127.518 3.7645 146.861 3.7645C160.853 3.7645 174.816 3.33431 188.829 3.33431C203.901 3.33431 219.065 3.76303 234.095 2.92802C241.902 2.4943 249.563 2.16279 257.421 2.04373C261.135 1.98746 264.782 1.18335 268.51 1.18335C272.496 1.18335 276.376 1.65695 280.34 2.04373C292.514 3.23142 304.716 3.33431 316.955 3.33431C332.808 3.33431 348.672 4.00679 364.562 3.35821C377.955 2.81158 391.51 3.33431 404.905 3.33431C411.661 3.33431 418.415 2.90412 425.196 2.90412C429.371 2.90412 433.411 3.33431 437.576 3.33431C447.12 3.33431 456.663 3.33431 466.207 3.33431C472.951 3.33431 479.432 4.19469 486.187 4.19469C490.371 4.19469 494.735 4.64373 498.663 3.33431"
          vectorEffect="non-scaling-stroke"
          stroke="currentColor"
          className="stroke-[3] md:stroke-[4]"
          stroke-linecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 5 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 top-0 h-full  overflow-visible text-[hsl(33,40%,65%)]  peer-focus-visible:text-keng-text"
      >
        <path
          d="M1.07031 1.31506C1.07031 5.0953 1.16818 8.74611 1.9546 12.285C2.77459 15.975 2.79108 19.521 2.79108 23.4461C2.79108 26.2887 5.23487 31.2776 3.12567 33.9141C2.30412 34.941 2.79108 37.6111 2.79108 38.9569C2.79108 40.4694 2.36089 44.9864 2.36089 43.4739"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
          className="stroke-[3] md:stroke-[4]"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};

const GloriLyst = () => {
  // get search param from url
  const params = new URLSearchParams(window.location.search);
  const searchParam = params.get("search") || "";

  const [search, setSearch] = useState(searchParam || "");

  const first_20 = glori_data.slice(0, 20);

  const table_data = search === "" ? first_20 : searchAddress(search);

  // set search param to url

  useEffect(() => {
    const url = new URL(window.location.href);
    if (search === "") {
      url.searchParams.delete("search");
      window.history.pushState({}, "", url.toString());
    } else {
      url.searchParams.set("search", search);
      window.history.pushState({}, "", url.toString());
    }
  }, [search]);

  return (
    <div className="mx-auto min-h-[100dvh] max-w-5xl">
      <div className="relative h-full">
        <Header />
        <img
          src="/images/glori_lyst_background.webp"
          className=" pointer-events-none z-0 ml-[2.5%] mt-[17%] aspect-[3693/6495] w-full scale-[118%] transform-gpu select-none"
        />

        <div className="absolute right-[-3%] top-[30%] z-50 flex w-[31%] -translate-x-1/2 items-center">
          <KengButton type="epok1" className="flex-1" />
          <KengButton type="epok2" className="flex-1" />
        </div>

        <h1 className="absolute left-1/2 top-[35%] translate-x-[-50%] text-center font-ScribbleChild text-[4.5dvw] leading-none tracking-wider text-keng-text lg:text-5xl lg:leading-none">
          glori lyst epok 1
        </h1>

        <div className="absolute left-1/2 top-[39.5%] w-[77%] translate-x-[-52%] ">
          <div className="mb-[4%] flex justify-end ">
            <div className="relative  focus-within:w-full md:focus-within:w-[55%]">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="sorch adrez"
                className="peer w-full   overflow-y-visible bg-[#715637]/70 px-2 py-2 pl-8 font-ScribbleChild text-[1.4dvw] text-keng-text/80 shadow-lg placeholder:text-[#c9a982]/90 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-transparent lg:text-sm"
              ></input>

              <div className=" pointer-events-none absolute left-2.5 top-0 flex h-full items-center text-[#c9a982] peer-focus-visible:text-keng-text ">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path
                    d="M10.042 17.4053C9.88924 16.1831 8.57344 15.3343 8.57344 13.9786C8.57344 12.5047 7.68004 11.5183 7.59439 10.0624C7.4351 7.35443 6.89015 6.35036 9.17175 4.29692C11.7356 1.9895 20.9533 1.21258 22.8784 4.67766C24.036 6.76139 25.0823 9.1032 25.2172 11.531C25.2734 12.5415 25.7067 13.7189 25.7067 14.9576C25.7067 16.8626 25.3144 16.3048 24.347 17.514C21.5895 20.9609 12.9644 22.271 10.5315 17.4053"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2.69897 25.2376C3.58699 25.2376 5.5472 22.3931 6.09844 21.5662C7.05868 20.1259 8.4959 19.3891 10.0418 18.8738"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <DrawnBorder />
            </div>
          </div>
          <Table data={table_data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default GloriLyst;
