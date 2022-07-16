import React from 'react';

export default function Setting({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 19 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.7639 10.9792C16.8046 10.6667 16.8249 10.3438 16.8249 10C16.8249 9.66667 16.8046 9.33333 16.7537 9.02083L18.8189 7.375C19.002 7.22917 19.0529 6.94792 18.941 6.73958L16.9877 3.28125C16.8656 3.05208 16.6113 2.97917 16.3874 3.05208L13.956 4.05208C13.4473 3.65625 12.9081 3.32292 12.3079 3.07292L11.9416 0.427083C11.9009 0.177083 11.6975 0 11.4533 0H7.54669C7.30253 0 7.10923 0.177083 7.06854 0.427083L6.70229 3.07292C6.10206 3.32292 5.55269 3.66667 5.05419 4.05208L2.62272 3.05208C2.39891 2.96875 2.14457 3.05208 2.02249 3.28125L0.0793535 6.73958C-0.0427283 6.95833 -0.00203446 7.22917 0.201435 7.375L2.26665 9.02083C2.21579 9.33333 2.17509 9.67708 2.17509 10C2.17509 10.3229 2.19544 10.6667 2.24631 10.9792L0.181088 12.625C-0.00203444 12.7708 -0.0529017 13.0521 0.0590066 13.2604L2.01232 16.7188C2.1344 16.9479 2.38873 17.0208 2.61255 16.9479L5.04401 15.9479C5.55269 16.3437 6.09188 16.6771 6.69212 16.9271L7.05836 19.5729C7.10923 19.8229 7.30253 20 7.54669 20H11.4533C11.6975 20 11.9009 19.8229 11.9315 19.5729L12.2977 16.9271C12.8979 16.6771 13.4473 16.3437 13.9458 15.9479L16.3773 16.9479C16.6011 17.0312 16.8554 16.9479 16.9775 16.7188L18.9308 13.2604C19.0529 13.0312 19.002 12.7708 18.8087 12.625L16.7639 10.9792ZM9.5 13.75C7.48565 13.75 5.83755 12.0625 5.83755 10C5.83755 7.9375 7.48565 6.25 9.5 6.25C11.5143 6.25 13.1625 7.9375 13.1625 10C13.1625 12.0625 11.5143 13.75 9.5 13.75Z'
        fill={fill}
      />
    </svg>
  );
}

Setting.defaultProps = {
  width: '14px',
  height: '14px',
  fill: '#A6A8A3',
};
