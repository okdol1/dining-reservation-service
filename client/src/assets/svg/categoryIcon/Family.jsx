import React from 'react';

export default function Family({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 22'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.3995 6.39491L12.3995 6.39491C12.2758 6.46799 12.1371 6.50461 11.9984 6.50461L12.3995 6.39491ZM12.3995 6.39491C12.6474 6.24827 13.3895 5.78758 14.0702 5.145C14.7486 4.50463 15.3778 3.67265 15.3778 2.78313C15.3778 1.61969 14.4436 0.672168 13.2938 0.672168C12.8045 0.672168 12.3541 0.843852 11.9983 1.1309C11.6424 0.843925 11.1919 0.672168 10.7025 0.672168C9.55267 0.672168 8.61846 1.61969 8.61846 2.78313C8.61846 3.67269 9.24782 4.50473 9.92632 5.14511C10.6072 5.7877 11.3494 6.24837 11.5974 6.39491L12.3995 6.39491ZM11.2102 2.78321C11.2102 2.4862 10.9802 2.24861 10.7025 2.24861C10.4249 2.24861 10.1949 2.48619 10.1948 2.78321H11.2102ZM11.2102 2.78321C11.2102 3.21852 11.5631 3.57143 11.9984 3.57143M11.2102 2.78321L11.9984 3.57143M11.9984 3.57143C12.4337 3.57143 12.7866 3.21852 12.7866 2.78321M11.9984 3.57143L12.7866 2.78321M12.7866 2.78321C12.7866 2.48616 13.0164 2.24861 13.2938 2.24861M12.7866 2.78321L13.2938 2.24861M13.2938 2.24861C13.5714 2.24861 13.8013 2.48619 13.8013 2.78321M13.2938 2.24861L13.8013 2.78321M13.8013 2.78321C13.8013 2.90822 13.7454 3.05962 13.6416 3.22916M13.8013 2.78321L13.6416 3.22916M13.6416 3.22916C13.5384 3.39773 13.391 3.57927 13.2152 3.76334M13.6416 3.22916L13.2152 3.76334M13.2152 3.76334C12.8714 4.12346 12.4232 4.489 11.9982 4.78065M13.2152 3.76334L11.9982 4.78065M11.9982 4.78065C11.5732 4.489 11.1249 4.12344 10.781 3.76331C10.6052 3.57923 10.4578 3.39769 10.3546 3.22913C10.2508 3.05959 10.1948 2.9082 10.1948 2.78322L11.9982 4.78065Z'
        fill={fill}
        stroke='#A6A8A3'
        stroke-width='0.1'
      />
      <path
        d='M16.195 19.4997C16.2726 19.8165 16.316 20.1466 16.3201 20.4861C16.3201 20.4865 16.3201 20.487 16.3201 20.4874L16.195 19.4997ZM16.195 19.4997H22.2604H22.2605H22.2605H22.2605H22.2605H22.2605H22.2605H22.2606H22.2606H22.2606H22.2606H22.2606H22.2606H22.2606H22.2607H22.2607H22.2607H22.2607H22.2607H22.2607H22.2608H22.2608H22.2608H22.2608H22.2608H22.2608H22.2608H22.2609H22.2609H22.2609H22.2609H22.2609H22.2609H22.261H22.261H22.261H22.261H22.261H22.261H22.2611H22.2611H22.2611H22.2611H22.2611H22.2611H22.2611H22.2612H22.2612H22.2612H22.2612H22.2612H22.2612H22.2613H22.2613H22.2613H22.2613H22.2613H22.2613H22.2613H22.2614H22.2614H22.2614H22.2614H22.2614H22.2614H22.2615H22.2615H22.2615H22.2615H22.2615H22.2615H22.2616H22.2616H22.2616H22.2616H22.2616H22.2616H22.2617H22.2617H22.2617H22.2617H22.2617H22.2617H22.2617H22.2618H22.2618H22.2618H22.2618H22.2618H22.2618H22.2619H22.2619H22.2619H22.2619H22.2619C22.6973 19.4997 23.0501 19.1468 23.0501 18.7115L23.0501 18.7111L16.195 19.4997ZM16.5602 13.7561C19.0022 13.7561 21.0346 15.5639 21.4101 17.9232H15.4478C14.9569 17.2694 14.2869 16.7593 13.5118 16.4667C14.2265 15.9798 14.6973 15.1589 14.6973 14.2293C14.6973 14.1953 14.6966 14.1615 14.6953 14.128C15.2706 13.8885 15.9002 13.7561 16.5602 13.7561ZM23.0484 18.6597C23.026 15.7612 21.1187 13.3069 18.5023 12.4789C19.6546 11.8064 20.4309 10.5546 20.4309 9.12423C20.4309 6.9851 18.6947 5.24475 16.5603 5.24475C14.4259 5.24475 12.6896 6.9851 12.6896 9.12423C12.6896 10.5549 13.4664 11.8069 14.6191 12.4794C14.4697 12.5269 14.3227 12.5797 14.1782 12.6374C13.687 11.9636 12.893 11.5245 11.998 11.5245C11.1034 11.5245 10.3098 11.9634 9.81851 12.6366C9.67459 12.5791 9.52817 12.5266 9.37939 12.4793C10.5321 11.8068 11.3088 10.5549 11.3088 9.12416C11.3088 6.98502 9.57261 5.24468 7.43815 5.24468C5.30376 5.24468 3.56756 6.98502 3.56756 9.12416C3.56756 10.5545 4.34396 11.8063 5.49623 12.4789C2.8643 13.3118 0.95 15.7906 0.95 18.7115C0.95 19.1468 1.3029 19.4997 1.73822 19.4997H7.80112C7.71943 19.8331 7.67585 20.1814 7.67585 20.5396C7.67585 20.975 8.02876 21.3279 8.46407 21.3279H15.5304C15.5319 21.3279 15.5336 21.3279 15.5354 21.3279L23.0484 18.6597ZM16.5603 6.82112C17.825 6.82112 18.8544 7.85419 18.8544 9.12423C18.8544 10.3942 17.825 11.4271 16.5603 11.4271C15.2955 11.4271 14.2661 10.3942 14.2661 9.12423C14.266 7.85419 15.2954 6.82112 16.5603 6.82112ZM11.998 13.1009C12.6168 13.1009 13.1209 13.6069 13.1209 14.2293C13.1209 14.8515 12.6168 15.3574 11.998 15.3574C11.3792 15.3574 10.8753 14.8515 10.8753 14.2293C10.8753 13.6068 11.3792 13.1009 11.998 13.1009ZM7.43815 6.82112C8.70295 6.82112 9.73237 7.85419 9.73237 9.12423C9.73237 10.3942 8.70295 11.4271 7.43815 11.4271C6.17342 11.4271 5.144 10.3942 5.144 9.12423C5.144 7.85419 6.17342 6.82112 7.43815 6.82112ZM8.54752 17.9233H2.58846C2.96395 15.5639 4.99614 13.7562 7.43815 13.7562C8.09741 13.7562 8.72628 13.8882 9.30083 14.1271C9.29956 14.161 9.29889 14.1951 9.29889 14.2293C9.29889 15.1589 9.76972 15.9799 10.4844 16.4668C9.70906 16.7595 9.03854 17.2692 8.54752 17.9233ZM9.36519 19.7513C9.70237 18.6048 10.7553 17.7668 11.998 17.7668C13.2407 17.7668 14.2938 18.6047 14.631 19.7513H9.36519Z'
        fill={fill}
        stroke='#A6A8A3'
        stroke-width='0.1'
      />
    </svg>
  );
}

Family.defaultProps = {
  width: '50px',
  height: '50px',
  fill: '#A6A8A3',
};
