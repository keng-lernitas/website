import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "../../lib/utils";

interface TableProps {
  data: any;
  columns: any;
  className?: string;
  hiddenColumns?: string[];
}

const LeftBorder = () => {
  return (
    <svg
      viewBox="0 0 5 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute -left-1/2 top-0 h-full w-full  overflow-visible text-[#d1b692]"
    >
      <path
        d="M1.07031 1.31506C1.07031 5.0953 1.16818 8.74611 1.9546 12.285C2.77459 15.975 2.79108 19.521 2.79108 23.4461C2.79108 26.2887 5.23487 31.2776 3.12567 33.9141C2.30412 34.941 2.79108 37.6111 2.79108 38.9569C2.79108 40.4694 2.36089 44.9864 2.36089 43.4739"
        stroke="currentColor"
        vectorEffect="non-scaling-stroke"
        className="stroke-[2] sm:stroke-[3] md:stroke-[4] lg:stroke-[5] xl:stroke-[6]"
        stroke-linecap="round"
      />
    </svg>
  );
};

const BottomBorder = () => {
  return (
    <svg
      viewBox="0 0 500 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute -bottom-1/2 left-0 h-full w-full overflow-visible text-[#d1b692]"
    >
      <path
        d="M1.36084 2.04373C6.17637 2.04373 10.7742 1.61354 15.5572 1.61354C20.9132 1.61354 26.2569 2.36694 31.7133 2.47393C36.383 2.56549 40.9687 2.90412 45.6467 2.90412C50.701 2.90412 55.7108 4.1018 60.7273 4.19469C70.0838 4.36796 79.4839 4.19713 88.7854 3.7645C108.084 2.86687 127.518 3.7645 146.861 3.7645C160.853 3.7645 174.816 3.33431 188.829 3.33431C203.901 3.33431 219.065 3.76303 234.095 2.92802C241.902 2.4943 249.563 2.16279 257.421 2.04373C261.135 1.98746 264.782 1.18335 268.51 1.18335C272.496 1.18335 276.376 1.65695 280.34 2.04373C292.514 3.23142 304.716 3.33431 316.955 3.33431C332.808 3.33431 348.672 4.00679 364.562 3.35821C377.955 2.81158 391.51 3.33431 404.905 3.33431C411.661 3.33431 418.415 2.90412 425.196 2.90412C429.371 2.90412 433.411 3.33431 437.576 3.33431C447.12 3.33431 456.663 3.33431 466.207 3.33431C472.951 3.33431 479.432 4.19469 486.187 4.19469C490.371 4.19469 494.735 4.64373 498.663 3.33431"
        vectorEffect="non-scaling-stroke"
        className="stroke-[2] sm:stroke-[3] md:stroke-[4] lg:stroke-[5] xl:stroke-[6]"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
};

const TopBorder = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 504 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute -top-1/2 left-0 h-full w-full overflow-visible text-[#d1b692]",
        className,
      )}
    >
      <path
        d="M502.093 5.60566C497.95 5.14528 493.648 4.31508 489.379 4.31508C484.233 4.31508 479.29 4.98791 474.226 5.17546C470.108 5.32799 465.843 6.00292 461.631 5.58176C454.833 4.90193 447.868 5.29815 441.102 4.41068C437.773 3.97411 434.229 4.31508 430.872 4.31508C426.187 4.31508 421.635 3.7122 416.963 3.4786C409.463 3.10361 401.865 3.4547 394.354 3.4547C386.299 3.4547 378.25 3.74559 370.239 4.33898C364.141 4.79073 358.326 6.46604 352.171 6.46604C349.182 6.46604 346.477 7.06786 343.544 7.30253C339.721 7.60836 335.76 7.32642 331.928 7.32642C325.491 7.32642 319.054 7.32642 312.617 7.32642C303.097 7.32642 293.279 6.52689 283.986 5.19936C282.677 5.01242 281.219 5.17546 279.899 5.17546C277.506 5.17546 275.22 4.31508 272.801 4.31508C268.204 4.31508 263.607 4.31508 259.011 4.31508C254 4.31508 248.989 4.31508 243.978 4.31508C238.747 4.31508 232.689 5.13578 227.535 4.21948C223.445 3.49228 219.078 3.88489 214.916 3.88489C209.407 3.88489 203.886 3.99082 198.378 3.88489C185.822 3.64343 173.14 3.4547 160.521 3.4547C155.377 3.4547 150.568 3.78321 145.488 4.29118C139.892 4.85078 133.968 4.31508 128.352 4.31508C116.283 4.31508 104.213 4.31508 92.144 4.31508C86.6232 4.31508 81.1024 4.31508 75.5816 4.31508C70.783 4.31508 66.3489 3.74736 61.6004 3.4308C58.7365 3.23987 56.1018 2.59431 53.1877 2.59431C51.1602 2.59431 47.9561 2.62912 45.994 2.06852C42.8655 1.17468 38.8024 1.73393 35.5499 1.73393C32.1823 1.73393 28.1776 1.49349 25.3448 3.4547C22.9562 5.10828 19.6629 4.74527 16.8365 4.74527C14.2554 4.74527 11.6742 4.74527 9.09305 4.74527C6.87352 4.74527 3.69019 4.22026 1.77979 5.17546"
        vectorEffect="non-scaling-stroke"
        className="stroke-[2] sm:stroke-[3] md:stroke-[4] lg:stroke-[5] xl:stroke-[6]"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
};

const RightBorder = () => {
  return (
    <svg
      viewBox="0 0 4 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute  -right-1/2 top-0 h-full w-full  overflow-visible text-[#d1b692]"
    >
      <path
        d="M1.6631 43.3343C1.6631 41.2621 1.23291 39.2339 1.23291 37.0965C1.23291 35.4269 1.6631 34.231 1.6631 32.5795C1.6631 30.9588 2.52349 30.077 2.52349 28.4927C2.52349 26.8436 2.52349 25.1945 2.52349 23.5454C2.52349 16.0785 2.09329 8.95829 2.09329 1.60565"
        stroke="currentColor"
        vectorEffect="non-scaling-stroke"
        className="stroke-[2] sm:stroke-[3] md:stroke-[4] lg:stroke-[5] xl:stroke-[6]"
        stroke-linecap="round"
      />
    </svg>
  );
};

const Frown = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 28 32"
      fill="none"
      className={cn("overflow-visible", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2.53326C1.74306 3.36921 2.1272 5.83961 2.44806 6.96264C2.77494 8.10669 2.91656 9.00122 2.91656 10.1995"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M17.8656 1C18.7866 1.20466 20.1655 7.5028 20.1655 8.66622"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M2.9165 28.2151C2.9165 25.5225 6.44446 23.3668 8.19768 21.6136C10.7198 19.0915 13.8913 19.3989 17.2907 19.3989C20.9032 19.3989 22.2099 22.9506 24.1477 25.319C24.647 25.9293 25.4589 27.5141 25.83 28.2151C26.2488 29.0063 25.8145 30.4646 26.6818 30.8983"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

const Table = ({ data, columns, className }: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {},
  });

  return (
    <div className={cn("w-full", className)}>
      <table className="w-full">
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-center font-ScribbleChild text-[2.8dvw] leading-[100%] tracking-widest  text-keng-text lg:text-3xl"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-2 pb-4 pt-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, i) => (
                <td
                  key={cell.id}
                  className={cn(
                    i === row.getVisibleCells().length - 1 && "px-[2%] py-0",
                    i !== row.getVisibleCells().length - 1 && "px-[2%] py-[2%]",
                    "relative  text-right font-ScribbleHand text-[2.4dvw] leading-[100%] tracking-widest text-keng-text [text-shadow:_#936d41_1px_1px_2px] lg:text-2xl lg:leading-[100%] ",
                  )}
                >
                  {i !== 0 && <LeftBorder />}

                  <TopBorder />

                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

          {table.getRowModel().rows.length === 0 && (
            <tr>
              <td
                colSpan={999}
                className="py-[4%] text-center font-ScribbleChild"
              >
                <TopBorder className="left-0 top-[-50%] translate-y-1/2" />

                <Frown className="mx-auto w-[5%] text-keng-text" />
                <p className=" mt-[1%] text-[2dvw] tracking-wider text-keng-text lg:text-base">
                  adrez nt fund
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
