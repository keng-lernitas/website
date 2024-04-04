import React from "react";
import { Countdown } from "..";
import { useReadContract } from "wagmi";
import CONTRACT_ABI from "../../static/2192-abi.json";

const CA2192 = "0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D";
const LERNITAS = ""; // this will be the lernitas deposit wallet

interface ContractReadResult {
  data: bigint | undefined; // Assuming your data should be a string or null
  isLoading: boolean;
}

const BatelBanner = () => {
  // const { data: balanceBigInt, isLoading } = useReadContract({
  //   address: CA2192,
  //   abi: CONTRACT_ABI,
  //   functionName: "balanceOf",
  //   args: [LERNITAS],
  //   query: {
  //     enabled: true,
  //   },
  // }) as ContractReadResult;

  let balanceBigInt = 0n;

  const tokenBalance =
    balanceBigInt !== undefined
      ? Number(BigInt(balanceBigInt) / BigInt(Math.pow(10, 15))) / 1000
      : 0;

  return (
    <div className="absolute left-[57%] top-[7.25%] flex w-[63%] -translate-x-1/2 items-center justify-between gap-x-[1%] p-[1%]">
      <div className="flex-center flex flex-1 flex-col items-center space-y-[3%]">
        <h1 className="font-ScribbleChild text-[3.5vw] leading-none  text-keng-gold-dark lg:text-4xl lg:leading-none">
          batel 1{" "}
          <span className="-ml-[9%] font-ScribbleHand text-[3.5dvw] leading-none lg:text-5xl lg:leading-none">
            /
          </span>
          3
        </h1>
        <p className="font-ScribbleChild text-[1.4dvw] leading-none text-keng-gold-dark lg:text-sm lg:leading-none">
          comin sewn
        </p>
        <Countdown />
      </div>

      <div className="flex flex-1 flex-col space-y-[4.5%] font-ScribbleChild text-keng-gold-dark">
        <div className="">
          <div className="flex items-center justify-between text-[1.9dvw] leading-none lg:text-xl lg:leading-none">
            <img
              src="/images/lernitas-icon.png"
              className="mr-[3%] aspect-square w-[9%] overflow-clip rounded-full border border-keng-gold-dark bg-black md:border-2"
            />

            <div className="flex-1">lernitas:</div>
            <div className="text-keng-gold [text-shadow:_#450a0a_1px_1px_2px]">
              {tokenBalance}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute left-1/2 top-1/2 w-[97%] origin-left -translate-x-1/2 -translate-y-1/2">
              <svg
                viewBox="0 0 984 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[0%] overflow-visible stroke-2 md:stroke-[3] lg:stroke-[4]"
              >
                <path
                  d="M9.87329 17.3905C16.7679 17.3905 22.5452 19.71 29.2027 19.71C39.1108 19.71 49.0188 19.71 58.9269 19.71C77.9413 19.71 96.9557 19.71 115.97 19.71C128.331 19.71 140.725 19.973 153.082 19.71C164.635 19.4642 176.017 18.1637 187.661 18.1637C196.769 18.1637 206.259 17.3905 215.538 17.3905C220.157 17.3905 224.443 16.6173 229.025 16.6173C233.038 16.6173 238.589 16.8532 242.427 15.6723C246.934 14.2857 252.129 16.2244 256.516 14.4696C259.407 13.3131 264.215 14.2978 267.341 14.2978C274.815 14.2978 282.289 14.2978 289.763 14.2978C309.98 14.2978 330.197 14.2978 350.414 14.2978C370.912 14.2978 391.515 13.5246 411.924 13.5246C431.328 13.5246 450.875 11.9783 470.256 11.9783C482.798 11.9783 495.337 11.2051 507.755 11.2051C521.297 11.2051 534.876 11.9783 548.347 11.9783C560.345 11.9783 572.344 11.9783 584.342 11.9783C597.249 11.9783 610.031 13.5246 623.001 13.5246C647.013 13.5246 671.209 14.2978 695.336 14.2978C705.573 14.2978 715.655 13.1221 725.661 12.7515C737.155 12.3258 748.739 12.7515 760.24 12.7515C778.951 12.7515 797.683 13.5246 816.295 13.5246C835.235 13.5246 853.919 11.9783 872.736 11.9783C880.93 11.9783 890.576 11.7978 898.638 10.0453C905.992 8.44656 914.857 9.65875 922.391 9.65875C939.602 9.65875 956.812 9.65875 974.022 9.65875"
                  stroke="#E1C633"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <svg
              viewBox="0 0 1004 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0.973877 51.1954C1.57607 50.0011 2.35689 49.2763 2.74901 48.3802C4.30804 44.8177 5.55638 41.1074 7.27654 37.6295C9.41099 33.3139 13.0135 31.2543 17.9417 31.3741C23.9425 31.5199 30.0234 32.0208 35.9404 31.3003C57.0214 28.7332 77.7794 34.9016 98.794 33.2678C100.546 33.1316 102.319 33.2498 104.473 33.2498C103.879 29.6785 103.331 26.516 102.833 23.3454C102.331 20.1427 102.891 17.2586 106.467 16.4246C110.25 15.5423 112.26 17.8862 113.076 21.2598C113.99 25.0332 114.645 28.8693 115.691 34.0588C142.469 32.7369 169.276 31.4135 196.094 30.0896C196.382 26.4608 196.13 23.0098 197.085 19.936C197.728 17.8652 199.963 15.0579 201.691 14.905C203.444 14.7497 206.215 17.0678 207.165 18.9877C208.637 21.9609 208.942 25.5158 209.736 28.8022C245.843 31.927 281.751 22.4826 318.622 28.6782C318.171 22.908 317.825 17.8125 317.358 12.7283C317.024 9.09183 317.01 5.62711 321.613 4.83475C325.002 4.25129 327.416 6.94969 327.947 11.862C328.502 17.003 328.871 22.1643 329.291 26.9588C345.809 26.9588 362.149 26.9889 378.488 26.9405C383.355 26.926 388.221 26.7041 393.087 26.5538C396.237 26.4564 399.337 26.8994 401.707 23.5411C402.378 22.5909 405.935 23.4247 408.078 23.8752C409.652 24.2062 411.103 25.9229 412.567 25.8684C433.948 25.0726 455.323 24.0825 477.1 23.121C476.578 21.165 475.493 19.3418 475.825 17.8326C476.355 15.425 477.242 12.2718 479.039 11.1618C481.767 9.47591 484.976 11.4914 485.391 14.4395C486.684 23.6093 492.808 23.2953 499.797 23.3407C526.243 23.5126 552.686 24.142 579.13 24.596C580.394 24.6177 581.658 24.5988 583.348 24.5988C582.513 19.9501 581.79 15.6739 580.968 11.417C580.319 8.06046 580.639 4.9233 584.317 3.84894C588.356 2.66931 590.344 5.33711 591.169 8.887C592.198 13.3179 592.822 17.8523 594.04 22.2248C594.393 23.4938 596.174 25.271 597.311 25.2788C622.589 25.4535 647.869 25.4125 673.443 25.4125C673.443 23.1437 673.583 20.2726 673.407 17.4211C673.189 13.8872 673.53 10.4985 677.658 9.87552C682.128 9.20082 683.518 12.5478 683.965 16.227C684.336 19.2819 684.4 22.3744 684.656 26.3173C714.704 25.551 744.762 24.7844 775.104 24.0106C775.172 23.0086 774.864 21.6595 775.394 20.8983C776.671 19.0651 778.22 16.3382 779.886 16.1652C781.571 15.9902 784.728 18.1608 785.13 19.8189C786.149 24.0238 788.477 24.4181 792.073 24.3562C818.842 23.8953 845.614 23.6097 872.385 23.2287C874.946 23.1922 877.503 22.88 880.97 22.6304C879.88 18.6841 878.933 15.1792 877.942 11.6869C876.933 8.13503 876.59 4.50469 880.831 3.12318C885.109 1.72924 886.985 4.83561 888.047 8.41049C889.289 12.5888 890.437 16.7953 891.841 21.7516C901.262 20.9269 911.213 19.3833 921.172 19.3304C939.462 19.2333 957.777 19.6375 976.04 20.617C983.22 21.0021 990.277 23.553 997.413 24.9988C1001.34 25.795 1003.41 28.1568 1003.56 32.0484C1003.72 36.2741 1003.42 40.5208 1003.65 44.7401C1003.92 49.5644 998.143 49.6754 997.371 52.5804C996.028 57.6283 993.808 58.0526 989.304 57.2913C986.144 56.7571 982.679 58.4375 979.356 58.4101C952.913 58.1915 926.47 57.7997 900.028 57.466C898.28 57.444 896.532 57.4631 894.323 57.4631C894.323 60.8795 894.485 63.7962 894.279 66.6864C894.056 69.8082 892.364 72.0231 889.065 72.0091C885.758 71.9952 884.115 69.7326 883.891 66.6308C883.684 63.7512 883.847 60.8447 883.847 58.2301C853.7 58.2301 824.082 58.2301 794.482 58.2301C794.482 61.5262 794.672 64.1209 794.433 66.6752C794.149 69.7176 792.483 72.5142 789.3 71.8675C787.358 71.473 785.241 68.9964 784.381 66.9552C783.36 64.5324 783.606 61.5729 783.284 58.6833C750.86 58.6833 718.793 58.6833 686.305 58.6833C686.66 62.5755 687.13 66.2356 687.28 69.909C687.372 72.1593 687.223 74.4849 686.739 76.6783C686.021 79.932 683.891 81.8987 680.4 81.2625C677.009 80.6447 676.399 78.0456 676.473 74.9644C676.599 69.6533 676.508 64.337 676.508 59.1133C650.754 59.1133 626.332 59.1133 601.46 59.1133C601.698 62.5525 602.044 65.3862 602.052 68.2209C602.061 71.4862 600.731 74.092 597.122 74.321C593.458 74.5535 592.019 72.0504 591.566 68.816C591.166 65.9603 590.841 63.0939 590.482 60.2213C560.011 60.825 530.036 61.4188 499.945 62.015C499.359 65.911 499.266 69.7036 498.125 73.1459C497.139 76.1175 495.48 79.3569 493.126 81.2063C491.549 82.4459 487.715 82.3651 485.823 81.2635C483.006 79.6229 484.069 76.7865 485.557 74.0116C487.368 70.6352 488.342 66.8072 489.949 62.4394C464.868 62.4394 441.285 62.4394 417.349 62.4394C417.876 64.7938 418.485 66.8096 418.753 68.87C419.151 71.9303 418.182 74.511 414.942 75.3063C411.73 76.0947 409.729 74.402 408.613 71.4063C407.464 68.3213 407.021 63.9935 404.778 62.5614C402.34 61.0054 398.185 62.1336 394.778 62.1342C375.467 62.1377 356.156 62.1541 336.845 62.1659C335.104 62.167 333.363 62.1661 331.275 62.1661C331.94 66.2586 332.62 69.7391 333.043 73.2509C333.456 76.6743 332.501 79.6586 328.638 80.1706C324.729 80.6887 323.235 77.9081 322.591 74.5805C321.821 70.6069 321.131 66.6177 320.464 62.9526C285.995 62.9526 251.83 62.9526 217.401 62.9526C217.947 67.3816 219.093 71.9533 214.166 72.9724C207.627 74.3247 207.81 68.0269 206.18 64.7283C176.929 64.7283 147.968 64.7283 118.589 64.7283C118.589 69.4438 118.704 73.3269 118.555 77.1999C118.42 80.7373 117.258 83.939 113.027 83.7723C109.157 83.6198 108.06 80.6067 107.994 77.2141C107.922 73.5038 107.978 69.791 107.978 65.7537C97.8155 66.347 88.1513 67.1024 78.4726 67.4369C57.849 68.1495 37.2576 68.0091 16.9847 63.3352C11.0416 61.965 4.68821 61.2499 1.32519 54.6803C0.973877 53.6705 0.973877 52.6283 0.973877 51.1954Z"
                fill="#040404"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between text-[1.9dvw] leading-none lg:text-xl lg:leading-none">
            <img
              src="/images/zorksees_head.png"
              className="mr-[3%] aspect-square w-[9%] overflow-clip rounded-full border border-keng-gold-dark bg-black md:border-2"
            />

            <div className="flex-1">zorksees:</div>

            <div className="text-keng-gold [text-shadow:_#450a0a_1px_1px_2px]">
              {tokenBalance}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute left-1/2 top-1/2 w-[97%] -translate-x-1/2 -translate-y-1/2">
              <svg
                viewBox="0 0 1009 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[0%] overflow-visible stroke-2 md:stroke-[3] lg:stroke-[4]"
              >
                <path
                  d="M9.44702 22.4411C24.6534 22.4411 40.6715 22.4411 55.7508 22.4411C62.2344 22.4411 68.4345 21.515 74.7354 21.515C83.0708 21.515 90.7675 23.3672 99.225 23.3672C120.07 23.3672 141.891 24.9771 162.301 21.052C183.43 16.9887 207.191 19.6629 228.721 19.6629C255.166 19.6629 281.611 19.6629 308.055 19.6629C323.491 19.6629 339.485 20.7952 354.874 19.6114C367.552 18.6362 380.804 16.8847 393.357 16.8847C406.498 16.8847 420.469 14.1061 433.59 16.1644C439.561 17.101 445.554 16.8847 451.597 16.8847C456.291 16.8847 460.484 18.7368 465.077 18.7368C488.16 18.7368 510.956 19.6629 534.069 19.6629C554.78 19.6629 575.176 15.0325 595.653 15.0325C622.817 15.0325 650.104 14.6 677.354 15.0325C688.197 15.2046 699.095 15.9586 710.024 15.9586C715.906 15.9586 721.788 15.9586 727.671 15.9586C733.327 15.9586 738.375 14.1064 744.031 14.1064C753.19 14.1064 761.88 12.2543 771.093 12.2543C782.224 12.2543 793.354 12.2543 804.484 12.2543C812.487 12.2543 820.392 14.1064 828.304 14.1064C838.886 14.1064 849.467 14.1064 860.048 14.1064C869.772 14.1064 879.496 14.1064 889.22 14.1064C893.078 14.1064 896.937 14.1064 900.796 14.1064C904.768 14.1064 908.624 12.2543 912.577 12.2543C920.334 12.2543 927.471 10.4021 935.523 10.4021C942.064 10.4021 949.439 9.47605 956.36 9.47605C963.527 9.47605 970.756 9.20062 977.917 9.47605C981.481 9.61312 985.292 11.4293 988.773 12.2028C991.998 12.9196 996.095 12.2543 999.423 12.2543"
                  stroke="#E1C633"
                  strokeWidth="4"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <svg
              viewBox="0 0 1031 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full "
            >
              <path
                d="M1032 36.625C1031.34 37.986 1030.55 38.9065 1030.06 39.9697C1028.33 43.7421 1026.93 47.6769 1024.99 51.3333C1023.07 54.9666 1019.81 56.9458 1015.57 56.8294C998.269 56.3533 980.967 55.6959 963.659 55.3714C951.208 55.1379 938.75 55.3259 925.833 55.3259C926.301 58.2703 926.78 61.491 927.332 64.699C927.927 68.1514 927.549 71.3348 923.584 72.1949C919.394 73.1039 917.557 70.2856 916.724 66.6761C916.125 64.0819 915.394 61.4749 915.209 58.8394C914.969 55.427 913.458 54.5043 910.129 54.5387C889.966 54.7469 869.801 54.7425 849.636 54.7982C843.148 54.8162 836.659 54.8011 829.549 54.8011C830.213 57.0141 830.705 58.6871 831.217 60.3537C832.167 63.4428 831.619 66.1368 828.524 67.5117C825.362 68.9162 823.087 67.2446 821.439 64.577C820.916 63.7316 820.25 62.8279 820.146 61.8954C819.488 56.0078 815.988 55.3633 810.771 55.6175C776.494 57.2882 742.201 58.6306 707.914 60.091C707.438 60.1113 706.969 60.2725 705.828 60.5029C706.275 65.9064 706.69 71.3102 707.179 76.7073C707.491 80.1593 707.052 83.3527 702.995 83.9886C698.747 84.6543 696.918 81.7365 696.443 78.104C695.711 72.5138 695.327 66.8781 694.768 60.9671C694.288 60.8765 693.681 60.6534 693.079 60.6641C671.086 61.0541 649.092 61.4132 627.104 61.97C625.255 62.0168 623.098 63.0218 621.682 64.2628C618.915 66.6856 616.627 66.7033 613.708 64.547C612.166 63.4079 609.961 62.4981 608.095 62.567C586.62 63.3604 565.152 64.3616 543.08 65.334C543.577 67.2113 544.08 68.8618 544.445 70.5422C545.163 73.8454 544.439 76.7199 540.963 77.8103C537.682 78.8397 534.932 77.0047 534.426 73.9999C533.005 65.5737 527.647 65.0863 520.513 65.0688C493.19 65.0019 465.867 64.2971 438.544 63.8347C437.233 63.8125 435.922 63.8318 434.011 63.8318C434.816 68.4249 435.503 72.7662 436.355 77.0749C437.07 80.6937 436.857 84.0687 432.725 85.112C428.526 86.1725 426.68 83.2551 425.87 79.661C424.882 75.2799 424.288 70.7939 423.024 66.5005C422.609 65.0911 420.643 63.1381 419.373 63.1284C393.559 62.9312 367.742 62.9805 341.408 62.9805C341.408 65.1211 341.243 68.0387 341.449 70.9299C341.72 74.7275 341.46 78.3842 336.865 78.9127C332.25 79.4437 331.033 75.8408 330.596 72.1393C330.228 69.0213 330.176 65.8659 329.943 62.0514C299.094 62.8439 268.36 63.6334 237.451 64.4274C237.024 67.3473 237.141 70.5051 235.988 73.0981C235.149 74.9854 232.402 77.5075 230.921 77.2605C228.955 76.9327 226.693 74.4705 225.844 72.3985C224.906 70.1084 225.422 67.2229 225.329 65.1392C193.022 65.1392 161.125 65.1392 128.12 65.1392C129.463 69.9419 130.46 73.5365 131.475 77.126C132.507 80.7757 132.783 84.4877 128.397 85.8313C123.985 87.183 122.123 83.9551 121.046 80.3057C119.785 76.0317 118.6 71.7355 117.179 66.7384C107.424 67.5897 97.1982 69.1633 86.9632 69.2269C68.3458 69.3425 49.701 68.9634 31.1126 67.9583C23.5727 67.5505 16.1603 64.9159 8.67069 63.3886C4.88273 62.6162 2.67758 60.381 2.50976 56.5996C2.30327 51.947 1.69304 47.0838 2.77377 42.6842C3.47446 39.8316 8.01149 37.9648 8.82899 35.0878C10.1715 30.363 12.241 30.221 16.6704 30.2458C48.8836 30.4259 81.0998 30.0626 112.432 29.8764C113.843 24.6312 114.956 19.5476 116.62 14.6518C117.691 11.5026 120.329 9.78488 123.779 10.9352C127.44 12.1559 127.419 15.1172 126.807 18.3457C126.106 22.0417 125.686 25.7909 125.156 29.4259C156.258 29.4259 186.668 29.4259 217.241 29.4259C217.241 24.4722 217.513 20.2005 217.156 15.9819C216.865 12.5364 217.464 9.83988 221.047 8.9901C224.557 8.15778 226.929 10.1655 227.915 13.3331C229.488 18.3861 230.686 23.5559 232.111 28.9392C263.771 28.9392 295.705 28.9392 328.239 28.9392C327.928 25.9233 327.481 23.0389 327.372 20.1418C327.261 17.161 327.195 14.1259 327.627 11.1911C328.143 7.69465 330.192 5.23098 334.104 5.80409C337.914 6.36228 338.33 9.24475 338.334 12.5678C338.34 17.8552 338.758 23.1421 339.001 28.3994C364.735 28.3994 389.935 28.3994 415.722 28.3994C415.175 26.8693 415.129 25.7733 414.63 25.4968C409.169 22.4715 406.83 16.8504 409.335 11.2898C410.031 9.74479 412.067 8.05321 413.653 7.87109C415.226 7.69055 417.09 9.19936 418.671 10.2103C419.954 11.0307 421.207 12.0608 422.114 13.2676C423.441 15.0332 424.876 16.9138 425.482 18.9756C426.26 21.625 426.262 24.5025 426.609 27.3679C457.953 26.7426 488.854 26.1262 519.051 25.5239C520.496 19.9085 521.523 14.8985 523.152 10.0926C523.79 8.2079 525.498 6.35801 527.206 5.22859C531.325 2.50523 535.808 5.07191 535.883 10.0038C535.959 14.962 535.9 19.9223 535.9 25.1434C558.819 25.1434 581.38 25.1434 604.353 25.1434C603.838 22.6182 602.695 20.2506 603.114 18.2016C603.574 15.9481 604.998 13.0364 606.848 12.1183C609.766 10.6708 612.2 12.6715 613.33 15.7779C613.387 15.9345 613.453 16.0878 613.512 16.2435C614.662 19.2639 614.995 23.5323 617.185 24.966C619.532 26.5029 623.625 25.4025 626.957 25.4021C646.954 25.3997 666.952 25.3825 686.95 25.3706C688.752 25.3696 690.553 25.3705 692.827 25.3705C692.15 21.2735 691.457 17.7368 691.007 14.1693C690.57 10.6966 691.424 7.59039 695.383 6.96492C699.382 6.33303 701.024 9.09144 701.702 12.5221C702.508 16.6019 703.205 20.7032 703.917 24.6156C739.195 24.6156 774.282 24.6156 809.112 24.6156C809.495 23.6195 809.742 23.3091 809.688 23.0652C808.841 19.226 808.545 15.2667 813.362 14.2133C817.802 13.2424 819.201 16.7297 820.411 20.3034C820.857 21.6212 822.581 23.4628 823.709 23.4537C852.367 23.2209 881.023 22.7744 909.68 22.3539C910.003 22.3492 910.324 22.1936 911.212 21.9586C911.212 18.1601 911.123 14.2015 911.239 10.2491C911.345 6.65985 912.351 3.25754 916.669 3.25449C920.955 3.25146 922.051 6.53452 922.109 10.2002C922.167 13.8428 922.122 17.487 922.122 21.5022C923.877 21.5022 925.301 21.6007 926.708 21.4875C950.16 19.6012 973.641 18.6001 997.088 21.0883C1005.33 21.9628 1013.43 24.1426 1021.6 25.7136C1026.38 26.6348 1029.8 29.1478 1031.64 33.9756C1032 34.75 1032 35.5 1032 36.625Z"
                fill="#040404"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatelBanner;
