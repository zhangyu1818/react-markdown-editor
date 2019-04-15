import React from 'react';

const undoSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="undo"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z" />
  </svg>
);
const redoSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="redo"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z" />
  </svg>
);
const boldSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="bold"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238zm366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z" />
  </svg>
);
const italicSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="italic"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
  </svg>
);
const strikethroughSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="strikethrough"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c.2 2.3.4 4.2.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 0 0-8-7.9z" />
  </svg>
);
const underlineSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="underline"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z" />
  </svg>
);

const highlightSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="highlight"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z" />
  </svg>
);
const horizontalRuleSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="horizontal-rule"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
  </svg>
);
const quoteSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="horizontal-rule"
    width="0.8em"
    height="0.8em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M788.288069 458.634582c-3.442402 99.842962-20.061918 175.8521-49.92097 228.090858-29.827329 52.204989-76.305897 91.499947-139.435703 117.915573l75.743078 120.500445c104.442724-47.073108 180.749644-116.493178 228.948389-208.292953 36.744879-68.857251 55.085596-180.185802 55.085596-333.957001L958.70846 98.858542 626.473683 98.858542l0 359.77604L788.288069 458.634582zM254.647189 458.634582c-3.442402 99.842962-20.061918 175.8521-49.92097 228.089835-29.827329 52.206012-76.305897 91.50097-139.435703 117.916597l75.743078 120.500445C245.476319 878.06835 321.782216 808.647257 369.981984 716.848505c36.744879-68.857251 55.085596-180.185802 55.085596-333.957001L425.06758 98.858542 92.832803 98.858542l0 359.77604L254.647189 458.634582z" />
  </svg>
);
const unorderedListSvg = (
  <svg
    viewBox="0 0 1024 1024"
    data-icon="unordered-list"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z" />
  </svg>
);
const orderedListSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="ordered-list"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z" />
  </svg>
);
const incompleteTaskListSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="incomplete-task-list"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
  </svg>
);
const completeTaskListSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="complete-task-list"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z" />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
  </svg>
);
const codeSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="code"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
  </svg>
);
const tableSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="table"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z" />
  </svg>
);
const linkSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="link"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
  </svg>
);
const imageSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="image"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z" />
  </svg>
);
const unWatchSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="eye-invisible"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z" />
    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z" />
  </svg>
);
const watchSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="eye"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
  </svg>
);
const themeSvg = (
  <svg
    viewBox="64 64 896 896"
    data-icon="theme"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z" />
  </svg>
);
const formulaSvg = (
  <svg
    viewBox="0 0 1024 1024"
    data-icon="formula"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M594.707692 63.015385c-15.753846-11.815385-37.415385-17.723077-63.015384-17.723077-5.907692 0-11.815385 0-17.723077 1.96923-68.923077 9.846154-114.215385 74.830769-141.784616 133.907693-11.815385 27.569231-23.630769 57.107692-33.476923 86.646154-5.907692 13.784615-9.846154 27.569231-15.753846 41.353846 0 1.969231-7.876923 29.538462-9.846154 29.538461h-70.892307c-9.846154 0-17.723077 7.876923-17.723077 17.723077s7.876923 17.723077 17.723077 17.723077h61.046153l-35.446153 147.692308C236.307692 683.323077 191.015385 870.4 179.2 903.876923c-11.815385 33.476923-27.569231 51.2-49.230769 51.2-3.938462 0-7.876923 0-9.846154-1.969231-1.969231-1.969231-3.938462-3.938462-3.938462-7.876923 0-1.969231 1.969231-7.876923 5.907693-13.784615 3.938462-5.907692 5.907692-13.784615 5.907692-19.692308 0-13.784615-3.938462-23.630769-13.784615-31.507692-7.876923-7.876923-17.723077-11.815385-29.538462-11.815385s-21.661538 3.938462-31.507692 11.815385c-9.846154 7.876923-13.784615 19.692308-13.784616 33.476923 0 19.692308 7.876923 35.446154 23.63077 49.230769 15.753846 13.784615 35.446154 19.692308 61.046153 19.692308 41.353846 0 80.738462-19.692308 108.307693-51.2 17.723077-19.692308 29.538462-43.323077 41.353846-68.923077 35.446154-76.8 53.169231-161.476923 72.861538-242.215385 19.692308-82.707692 39.384615-165.415385 57.107693-250.092307H472.615385c9.846154 0 17.723077-7.876923 17.723077-17.723077s-7.876923-17.723077-17.723077-17.723077h-61.046154c33.476923-129.969231 72.861538-218.584615 80.738461-232.369231 13.784615-21.661538 27.569231-33.476923 41.353846-33.476923 5.907692 0 9.846154 1.969231 11.815385 3.938461 1.969231 3.938462 1.969231 5.907692 1.969231 7.876924 0 1.969231-1.969231 5.907692-5.907692 13.784615-3.938462 7.876923-5.907692 15.753846-5.907693 23.630769 0 11.815385 3.938462 19.692308 11.815385 27.569231 7.876923 7.876923 17.723077 11.815385 29.538461 11.815385s21.661538-3.938462 29.538462-11.815385c7.876923-7.876923 11.815385-19.692308 11.815385-33.476923 1.969231-21.661538-5.907692-37.415385-23.63077-49.230769z m313.107693 393.846153c25.6 0 74.830769-19.692308 74.830769-86.646153 0-64.984615-47.261538-68.923077-61.046154-68.923077-29.538462 0-57.107692 21.661538-82.707692 64.984615-25.6 45.292308-53.169231 92.553846-53.169231 92.553846-5.907692-31.507692-11.815385-57.107692-13.784615-68.923077-5.907692-27.569231-37.415385-86.646154-102.4-86.646154-64.984615 0-124.061538 37.415385-124.061539 37.415385-11.815385 7.876923-17.723077 19.692308-17.723077 33.476923 0 21.661538 17.723077 39.384615 39.384616 39.384616 5.907692 0 11.815385-1.969231 17.723076-3.938462 0 0 49.230769-27.569231 59.076924 0 3.938462 7.876923 5.907692 17.723077 7.876923 27.569231 11.815385 43.323077 23.630769 92.553846 33.476923 137.846154l-43.323077 61.046153s-47.261538-17.723077-72.861539-17.723076-74.830769 19.692308-74.830769 86.646153 47.261538 68.923077 61.046154 68.923077c29.538462 0 57.107692-21.661538 82.707692-64.984615 25.6-45.292308 53.169231-92.553846 53.169231-92.553846 7.876923 39.384615 15.753846 72.861538 19.692308 86.646154 15.753846 45.292308 53.169231 72.861538 104.36923 72.861538 0 0 51.2 0 112.246154-33.476923 13.784615-5.907692 25.6-19.692308 25.6-37.415385 0-21.661538-17.723077-39.384615-39.384615-39.384615-5.907692 0-11.815385 1.969231-17.723077 3.938462 0 0-43.323077 23.630769-57.107692 5.907692-9.846154-19.692308-19.692308-47.261538-25.6-78.769231-5.907692-29.538462-13.784615-63.015385-19.692308-96.492308l43.323077-63.015384c-1.969231 1.969231 47.261538 19.692308 70.892308 19.692307z" />{' '}
  </svg>
);
export default {
  undo: undoSvg,
  redo: redoSvg,
  bold: boldSvg,
  italic: italicSvg,
  strikethrough: strikethroughSvg,
  underline: underlineSvg,
  highlight: highlightSvg,
  horizontalRule: horizontalRuleSvg,
  quote: quoteSvg,
  unorderedList: unorderedListSvg,
  orderedList: orderedListSvg,
  incompleteTaskList: incompleteTaskListSvg,
  completeTaskList: completeTaskListSvg,
  code: codeSvg,
  table: tableSvg,
  link: linkSvg,
  image: imageSvg,
  theme: themeSvg,
  unWatch: unWatchSvg,
  watch: watchSvg,
  formula: formulaSvg,
};
