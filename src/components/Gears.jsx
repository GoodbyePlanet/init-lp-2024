import React from 'react';

const Gears = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 857.8 581.3"
      onClick={() => window.open('https://github.com/GoodbyePlanet', '_blank')}
    >
      <style type="text/css">
        {`
				.st0{fill:#FFFFFF;}
				.st1{fill:none;}
				#gears {
						 transform-origin: 20.3% 32.2%;
						 transform: rotate(0deg);
						 animation: gears 3s infinite;
						 animation-timing-function: linear;
				}
				@keyframes gears {
						 0% {transform: rotate(0deg);}
						 100% {transform: rotate(360deg);}
				}
				#sprocket {
						 transform-origin: 64.1% 49.9%;
						 transform: rotate(0deg);
						 animation: sprocket 6s infinite;
						 animation-timing-function: linear;
				}
				@keyframes sprocket {
						 0% {transform: rotate(0deg);}
						 100% {transform: rotate(-360deg);}
				}
        `}
      </style>
      <g id="sprocket">
        <g>
          <path
            className="st0"
            d="M606.5,85.2C493,53.7,375,120.5,343.6,234c-31.4,113.5,35.3,231.4,148.8,262.9
			c113.5,31.4,231.4-35.3,262.9-148.8C786.7,234.5,720,116.6,606.5,85.2z M721,338.5c-4.6,16.6-21.1,26.7-37.7,23.7
			c-32.6,61.4-104.6,94.2-174.3,74.9c-80.6-22.3-127.9-106-105.6-186.6c22.3-80.6,106-127.9,186.6-105.6
			c69.7,19.3,114.5,84.5,110.9,153.9C716.6,304.8,725.6,322,721,338.5z"
          />
          <path
            className="st0"
            d="M691.9,296.8c2.7-64.7-39.4-125.2-104.4-143.2c-75.8-21-154.5,23.6-175.5,99.3
			c-21,75.8,23.6,154.5,99.3,175.5c65,18,132.2-12.3,163.2-69.1c-14-6.9-21.5-22.9-17.2-38.4C661.7,305.4,676.4,295.5,691.9,296.8z
			 M537.5,334c-23.7-6.6-37.6-31.2-31.1-54.9c6.6-23.7,31.2-37.6,54.9-31.1s37.6,31.2,31.1,54.9S561.2,340.5,537.5,334z"
          />
          <path
            className="st0"
            d="M791.8,386c-0.2-0.1-0.4-0.2-0.7-0.3c0-0.1,0-0.1,0.1-0.2c-13.6-4.3-21.5-18.6-17.6-32.4
			c3.9-14.1,18.5-22.4,32.6-18.6c13.5,0.9,25.3-9.2,26.2-22.7c0.9-12.5-7.7-23.5-19.7-25.9c-0.9,0.2-1.9,0.4-2.8,0.5
			c-3.5,0.4-6.9,0.2-10.3-0.8c-10.4-2.9-18-11.7-19.3-22.4c-0.8-7,1.1-14,5.5-19.6c4.4-5.6,10.6-9.1,17.6-10
			c12.8-4.2,19.9-18.1,15.6-31c-4.2-12.9-18.1-19.9-31-15.7c-0.3,0.1-0.5,0.2-0.8,0.3c0-0.1,0-0.1-0.1-0.2c-6,3.1-12.8,3.8-19.3,2
			c-6.9-1.9-12.5-6.3-16-12.5c-3.5-6.2-4.4-13.3-2.5-20.2c1.9-6.8,6.3-12.5,12.4-16c10.2-8.9,11.3-24.4,2.5-34.6
			c-8.2-9.5-22.1-11.2-32.2-4.4c-0.5,0.8-1.1,1.6-1.7,2.4c-6.6,8.5-17.7,12.1-28,9.2c-3.4-0.9-6.5-2.5-9.3-4.7
			c-5.6-4.4-9.1-10.7-10-17.7c-0.8-7,1.1-13.9,5.4-19.5c6.1-12.1,1.2-26.9-10.9-33c-12.1-6.1-26.9-1.3-33,10.8
			c-0.1,0.2-0.2,0.4-0.3,0.5c-0.1,0-0.1,0-0.2-0.1c-4.2,13.7-18.6,21.6-32.5,17.8c-14.1-3.9-22.4-18.5-18.6-32.6
			c0.9-13.5-9.2-25.3-22.7-26.2c-12.5-0.9-23.5,7.7-25.9,19.7c0.2,0.9,0.4,1.9,0.5,2.8c1.8,14.6-8.7,27.8-23.2,29.6
			c-3.5,0.4-6.9,0.2-10.3-0.8c-10.4-2.9-18-11.6-19.3-22.3c-4.3-12.8-18.1-19.9-31-15.6c-12.9,4.2-19.9,18.1-15.7,31
			c0.1,0.2,0.1,0.4,0.2,0.6c-0.1,0-0.1,0.1-0.2,0.1c6.7,12.6,2.1,28.4-10.4,35.5c-6.2,3.5-13.3,4.4-20.2,2.5
			c-6.8-1.9-12.5-6.3-16-12.4c-8.9-10.2-24.4-11.3-34.6-2.5c-9.5,8.2-11.2,22.1-4.4,32.2c0.8,0.5,1.6,1.1,2.4,1.7
			c11.5,9.1,13.6,25.8,4.5,37.3c-6.6,8.5-17.7,12.1-28,9.2c-3.3-0.9-6.4-2.5-9.2-4.6c-12.1-6.1-26.9-1.2-33,10.9
			c-6.1,12.1-1.3,26.9,10.8,33c0.1,0.1,0.2,0.1,0.4,0.2c0,0.1-0.1,0.1-0.1,0.2c13.8,4.1,21.8,18.6,18,32.6
			c-3.9,14.1-18.5,22.4-32.6,18.6c-13.5-0.9-25.3,9.2-26.2,22.7c-0.9,12.5,7.7,23.5,19.7,25.9c0.9-0.2,1.9-0.4,2.8-0.5
			c3.5-0.4,6.9-0.2,10.3,0.8c10.4,2.9,18,11.7,19.3,22.4c1.8,14.5-8.6,27.8-23.1,29.6c-12.8,4.3-19.8,18.1-15.6,31
			c4.2,12.9,18.1,19.9,31,15.7c0.2-0.1,0.4-0.1,0.5-0.2c0,0.1,0.1,0.1,0.1,0.2c6-3.2,12.9-3.9,19.5-2.1c6.9,1.9,12.5,6.3,16,12.5
			c7.2,12.7,2.7,28.9-9.9,36.2c-10.2,8.9-11.3,24.4-2.5,34.6c8.2,9.5,22.1,11.2,32.2,4.4c0.5-0.8,1.1-1.6,1.7-2.4
			c6.6-8.5,17.7-12.1,28-9.2c3.4,0.9,6.5,2.5,9.3,4.7c5.6,4.4,9.1,10.7,10,17.7c0.8,7-1.1,13.9-5.4,19.5c-6.1,12.1-1.2,26.9,10.9,33
			c12.1,6.1,26.9,1.3,33-10.8c0.1-0.2,0.2-0.3,0.2-0.5c0.1,0,0.1,0,0.2,0.1c4.2-13.7,18.6-21.7,32.5-17.8
			c14.1,3.9,22.4,18.5,18.6,32.6c-0.9,13.5,9.2,25.3,22.7,26.2c12.5,0.9,23.5-7.7,25.9-19.7c-0.2-0.9-0.4-1.9-0.5-2.8
			c-0.8-7,1.1-14,5.5-19.6c4.4-5.6,10.7-9.1,17.7-10c3.5-0.4,6.9-0.2,10.3,0.8c10.4,2.9,18,11.6,19.3,22.3
			c4.3,12.8,18.1,19.9,31,15.6c12.9-4.2,19.9-18.1,15.7-31c-0.1-0.3-0.2-0.5-0.3-0.8c0.1,0,0.1,0,0.2-0.1c-3.1-6-3.8-12.8-2-19.3
			c1.9-6.9,6.3-12.5,12.5-16c6.2-3.5,13.3-4.4,20.2-2.5c6.8,1.9,12.5,6.3,16,12.4c8.9,10.2,24.4,11.3,34.6,2.5
			c9.5-8.2,11.2-22.1,4.4-32.2c-0.8-0.5-1.6-1.1-2.4-1.7c-11.5-9.1-13.6-25.8-4.5-37.3c6.6-8.5,17.7-12.1,28-9.2
			c3.3,0.9,6.4,2.5,9.2,4.6c12.1,6.1,26.9,1.2,33-10.9C808.8,407,803.9,392.2,791.8,386z M491,502
			c-116.4-32.2-184.8-153.2-152.6-269.5S491.5,47.7,607.9,80s184.8,153.2,152.6,269.5S607.3,534.3,491,502z"
          />
          <path
            className="st0"
            d="M560.5,250.9c-22.1-6.1-45.1,6.9-51.2,29s6.9,45.1,29,51.2c22.1,6.1,45.1-6.9,51.2-29S582.6,257,560.5,250.9z
			 M542.9,314.7c-13.1-3.6-20.8-17.2-17.1-30.3c3.6-13.1,17.2-20.8,30.3-17.1s20.8,17.2,17.1,30.3
			C569.5,310.6,555.9,318.3,542.9,314.7z"
          />
          <circle className="st0" cx="689.2" cy="329.7" r="24.6" />
          <path
            className="st1"
            d="M625.8,15.4C473.8-26.7,316,62.7,273.9,214.6s47.3,309.8,199.2,351.9C625,608.7,782.9,519.3,825,367.4
			S777.7,57.5,625.8,15.4z M473.6,564.9c-151-41.8-239.8-198.7-198-349.7c41.8-151,198.7-239.8,349.7-198
			c151,41.8,239.8,198.7,198,349.7C781.4,517.9,624.6,606.7,473.6,564.9z"
          />
        </g>
      </g>
      <g id="gears">
        <g>
          <path
            className="st0"
            d="M274.9,102.1c-0.7,0.4-1.3,0.8-2,1.2c-0.1-0.1-0.1-0.2-0.2-0.2c-9.1,9.5-24.1,10.7-34.6,2.4
			c-9.8-7.7-12.5-21.1-7.2-31.8c0.1-0.2,0.2-0.3,0.2-0.5c0.3-0.7,0.7-1.3,1.1-1.9c-0.1,0-0.1-0.1-0.2-0.1c0.3-0.7,0.5-1.5,0.7-2.2
			c3.7-13.1-4-26.7-17.1-30.3c-9.6-2.7-19.9,0.7-26,8.6c-2,2.5-3.4,5.4-4.3,8.5c-0.2,0.8-0.4,1.5-0.5,2.3c-0.1,0-0.2,0-0.3,0
			c0.3,13.1-9.5,24.6-22.8,26.2c-12.4,1.5-23.8-6-27.6-17.4c-0.1-0.2-0.1-0.4-0.2-0.6c-0.2-0.7-0.4-1.4-0.6-2.1
			c-0.1,0-0.2,0.1-0.2,0.1c-0.3-0.7-0.7-1.4-1-2.1c-6.7-11.8-21.7-16-33.5-9.4c-2.9,1.6-5.3,3.7-7.3,6.3l1.9,1.5c0,0,0,0,0,0
			l-1.9-1.5l0,0c-6.1,7.8-6.9,18.5-2,27.2c0.4,0.7,0.8,1.3,1.2,2c-0.1,0.1-0.2,0.1-0.2,0.2c9.5,9.1,10.7,24.1,2.4,34.6
			c-7.7,9.8-21.1,12.5-31.8,7.2c-0.1-0.1-0.3-0.1-0.4-0.2c-0.7-0.4-1.4-0.7-2-1.2c0,0.1-0.1,0.1-0.1,0.2c-0.7-0.3-1.5-0.5-2.2-0.7
			c-9.6-2.7-19.9,0.7-26,8.6l0,0c-2,2.5-3.4,5.4-4.3,8.5c-3.7,13.1,4,26.7,17.1,30.3c0.8,0.2,1.5,0.4,2.3,0.5c0,0.1,0,0.2,0,0.3
			c13.1-0.3,24.6,9.5,26.2,22.8c1.5,12.3-6,23.7-17.3,27.6c-0.2,0.1-0.4,0.1-0.6,0.2c-0.7,0.2-1.4,0.4-2.1,0.6
			c0,0.1,0.1,0.2,0.1,0.2c-0.7,0.3-1.4,0.7-2.1,1c-2.9,1.6-5.3,3.7-7.3,6.3l1.9,1.5c0,0,0,0,0,0l-1.9-1.5l0,0
			c-6.1,7.8-6.9,18.5-2,27.2c3.2,5.7,8.5,9.8,14.8,11.6c6.3,1.8,13,1,18.7-2.3c0.7-0.4,1.3-0.8,2-1.2c0.1,0.1,0.1,0.2,0.2,0.2
			c9.1-9.5,24.1-10.7,34.6-2.4c9.8,7.7,12.5,21.1,7.2,31.8c-0.1,0.2-0.2,0.3-0.2,0.5c-0.3,0.7-0.7,1.3-1.1,1.9
			c0.1,0,0.1,0.1,0.2,0.1c-0.3,0.7-0.5,1.5-0.7,2.2c-3.7,13.1,4,26.7,17.1,30.3c9.6,2.7,19.9-0.7,26-8.6c2-2.5,3.4-5.4,4.3-8.5
			c0.2-0.8,0.4-1.5,0.5-2.3c0.1,0,0.2,0,0.3,0c-0.3-13.1,9.5-24.6,22.8-26.2c12.4-1.5,23.8,6,27.6,17.4c0.1,0.2,0.1,0.4,0.2,0.6
			c0.2,0.7,0.4,1.4,0.6,2.1c0.1,0,0.2-0.1,0.2-0.1c0.3,0.7,0.7,1.4,1,2.1c6.7,11.8,21.7,16,33.5,9.4c2.9-1.6,5.3-3.7,7.3-6.3
			c6.1-7.8,6.9-18.5,2-27.2c-0.4-0.7-0.8-1.3-1.2-2c0.1-0.1,0.2-0.1,0.2-0.2c-9.5-9.1-10.7-24.1-2.4-34.6
			c7.7-9.8,21.1-12.5,31.8-7.2c0.1,0.1,0.3,0.1,0.4,0.2c0.7,0.4,1.4,0.7,2,1.2c0-0.1,0.1-0.1,0.1-0.2c0.7,0.3,1.5,0.5,2.2,0.7
			c9.6,2.7,19.9-0.7,26-8.6c2-2.5,3.4-5.4,4.3-8.5c3.7-13.1-4-26.7-17.1-30.3c-0.8-0.2-1.5-0.4-2.3-0.5c0-0.1,0-0.2,0-0.3
			c-13.1,0.3-24.6-9.5-26.2-22.8c-1.5-12.3,6-23.7,17.3-27.6c0.2-0.1,0.4-0.1,0.6-0.2c0.7-0.2,1.4-0.4,2.1-0.6
			c0-0.1-0.1-0.2-0.1-0.2c0.7-0.3,1.4-0.7,2.1-1c2.9-1.6,5.3-3.7,7.3-6.3c6.1-7.8,6.9-18.5,2-27.2c-3.2-5.7-8.5-9.8-14.8-11.6
			C287.2,98.1,280.6,98.9,274.9,102.1z M248.3,244.9c-31.9,40.9-91.1,48.2-132,16.3s-48.2-91.1-16.3-132s91.1-48.2,132-16.3
			S280.2,204,248.3,244.9z"
          />
          <path
            className="st0"
            d="M103.8,132.1c-30.3,38.8-23.3,95,15.5,125.3s95,23.3,125.3-15.5s23.3-95-15.5-125.3S134,93.3,103.8,132.1z
			 M205.8,211.7c-13.6,17.4-38.9,20.6-56.3,7c-17.4-13.6-20.6-38.9-7-56.3c13.6-17.4,38.9-20.6,56.3-7
			C216.3,169,219.4,194.3,205.8,211.7z M202.3,135.1c-4.4,5.6-12.5,6.6-18.2,2.2c-5.6-4.4-6.6-12.5-2.2-18.2s12.5-6.6,18.2-2.2
			C205.7,121.3,206.7,129.5,202.3,135.1z"
          />
          <path
            className="st0"
            d="M147.3,166.1c-11.6,14.8-8.9,36.3,5.9,47.8c14.8,11.6,36.3,8.9,47.8-5.9c11.6-14.8,8.9-36.3-5.9-47.8
			C180.3,148.6,158.9,151.2,147.3,166.1z M193.5,202.1c-8.3,10.7-23.8,12.6-34.5,4.3c-10.7-8.3-12.6-23.8-4.3-34.5
			c8.3-10.7,23.8-12.6,34.5-4.3C200,176,201.9,191.5,193.5,202.1z"
          />
          <path
            className="st1"
            d="M52.3,91.9c-52.4,67.2-40.4,164.5,26.8,216.9c67.2,52.4,164.5,40.4,216.9-26.8
			c52.4-67.2,40.4-164.5-26.8-216.9C202,12.7,104.7,24.8,52.3,91.9z M292.7,279.5c-51,65.4-145.7,77.1-211,26.1S4.6,159.9,55.6,94.5
			s145.7-77.1,211-26.1S343.7,214.1,292.7,279.5z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Gears;
