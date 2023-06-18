<template>
  <div>
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="100"
      height="100"
    >
      <defs>
        <g id="bg" fill="#f1612c" class="bg">
          <path d="M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0" />
        </g>
        <g id="fg">
          <path
            opacity="0.1"
            d="M85.355,14.645l-70.711,70.71c19.526,19.526,51.185,19.526,70.711,0 C104.882,65.83,104.882,34.171,85.355,14.645z"
          />
          <path
            opacity="0.1"
            d="M50,0v100c27.614,0,50-22.386,50-50S77.614,0,50,0z"
          />
        </g>
        <path
          fill="#2c2c2c"
          id="i-458"
          d="M2,13h6v22H2v-8H0v-6h2V13z M32,21H16V7h-6v34h6V27h16v14h6V7h-6V21z M46,21v-8h-6v22h6v-8h2v-6H46z"
        />
      </defs>
      <use x="0" y="0" class="bg" xlink:href="#bg" />
      <use x="26" y="26" xlink:href="#i-458" />
      <use x="0" y="0" xlink:href="#fg" />
    </svg>
  </div>
</template>