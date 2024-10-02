interface LogoProps {
  className?: string;
}

const TimeLogo = ({ className }: LogoProps) => {
  return (
    <svg viewBox="0 0 97 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_2607_62458)">
        <mask id="mask0_2607_62458" maskUnits="userSpaceOnUse" x="0" y="0" width="97" height="30">
          <path d="M96.836 0H0V30H96.836V0Z" />
        </mask>
        <g mask="url(#mask0_2607_62458)">
          <path d="M46.231 0.308594C46.231 0.308594 45.1489 0.331253 44.5218 0.320653C44.4958 0.583839 44.1936 2.96876 43.9336 4.88722C43.6347 6.66244 41.2657 19.8312 40.4631 23.7732C40.2519 24.9635 39.5987 28.3261 39.537 28.6621C38.7831 28.7521 37.8927 28.8353 37.3111 28.8577C37.2331 28.8603 37.1031 28.8856 37.0414 28.8856V29.5684C37.1128 29.5655 37.4898 29.5944 37.7562 29.583C38.3964 29.5625 40.2129 29.4764 40.5573 29.4764C41.8637 29.4764 42.7345 29.5629 43.9434 29.5869C43.9596 29.5869 44.2911 29.5856 44.4373 29.5671V28.8772C44.3366 28.8772 44.2033 28.8739 44.1253 28.8739C43.7841 28.8847 42.5266 28.7882 41.8897 28.7014C41.9644 28.2504 43.0757 21.4302 43.6087 18.7029C44.6225 13.6548 45.3244 10.077 45.3244 10.077L45.5129 10.5212L53.523 29.6129L54.9853 29.6204C54.9853 29.6204 55.8204 27.553 56.8115 25.2342C56.8375 25.1792 56.909 25.0132 57.0097 24.776C58.0496 22.3681 63.2033 10.1475 63.2033 10.1475C63.2033 10.1475 63.2521 10.3675 63.3333 10.7611C63.824 13.1563 65.4845 21.7883 65.8387 23.871C66.0044 24.9423 66.1604 26.029 66.2514 26.6656C66.3846 27.567 66.4724 28.4492 66.4724 28.7027C66.3099 28.7102 64.6786 28.8577 64.0612 28.8843C63.9735 28.8814 63.8077 28.8895 63.798 28.8912V29.5856C64.019 29.5856 64.2334 29.5953 64.4479 29.5905C65.7087 29.5664 66.9208 29.4676 68.1816 29.4683C69.5984 29.4696 71.8958 29.5934 73.3679 29.6028C73.5336 29.6028 73.8293 29.5882 73.8293 29.5882V28.8866C73.7448 28.886 73.3744 28.8678 73.2379 28.8571C72.5782 28.8054 71.4669 28.7024 71.1842 28.6835C71.1842 28.6835 71.0022 27.6752 70.7617 26.5106C69.7999 21.8517 67.0605 7.69059 66.6413 4.20612C66.4984 3.00847 66.0922 0.319353 66.0922 0.319353L64.4447 0.31884C64.4447 0.31884 63.603 2.73366 62.8361 4.93545C62.313 6.43998 61.6013 8.29741 61.0586 9.72168C58.381 16.7589 55.3785 23.3164 55.3785 23.3164C55.3785 23.3164 48.9964 8.08847 48.6584 7.20784C48.3172 6.3269 46.231 0.308594 46.231 0.308594ZM0.354143 0.31494L0.368116 1.92446L0.34082 5.84405L0.765437 5.83203L0.809858 2.34593C0.809858 2.34593 3.13818 2.32578 3.43931 2.32617L7.78101 2.32806L10.5831 2.34203L10.5876 26.5858L10.5883 28.6798L10.5291 28.6879C10.1561 28.7168 8.72078 28.8046 8.13781 28.8257C8.00718 28.8299 7.92367 28.8332 7.90937 28.8316L7.91197 29.5409C8.01725 29.5461 8.30094 29.5529 8.33831 29.5516C9.71741 29.5338 11.5836 29.4139 12.9068 29.4152C14.2512 29.4158 16.143 29.5464 17.3138 29.5601C17.4298 29.5607 17.5673 29.5494 17.6788 29.5494V28.8842L17.5335 28.8855C17.1605 28.8839 15.0973 28.751 14.8838 28.723C14.8751 28.3977 14.8367 26.8276 14.8367 26.7928L14.8468 2.33943L16.9801 2.33377L22.5462 2.33758L24.404 2.36296C24.4163 2.4957 24.5102 4.26153 24.5086 4.30962C24.5044 4.43798 24.5782 5.75339 24.5752 6.07704L25.0156 6.08224L24.984 2.11781L25.0042 0.334535C23.3684 0.379054 19.1995 0.435076 12.7297 0.431664C7.18115 0.428252 1.83398 0.381783 0.354143 0.31494ZM26.2679 0.321287L26.2747 1.01564C26.4943 1.02757 27.7857 1.14182 28.0996 1.15716C28.3502 1.18784 28.6998 1.21923 28.95 1.24347C28.95 1.46577 28.9539 2.99978 28.9575 3.6052C28.9994 9.34354 28.9637 22.0258 28.9468 26.5131C28.9416 27.8106 28.938 28.6467 28.938 28.6467C28.7797 28.6942 28.4236 28.712 28.0385 28.738C27.7093 28.7605 26.5298 28.8596 26.2666 28.8651V29.5595C26.3757 29.5595 26.5759 29.5826 26.69 29.5816C28.0252 29.5819 29.8817 29.4162 31.2494 29.4172C32.6317 29.4182 34.4775 29.5865 35.5661 29.5868L35.5628 29.5875C35.6571 29.5888 35.8813 29.5641 35.9755 29.5644V28.8703H35.8813C35.839 28.8612 34.4352 28.8021 34.094 28.7666C33.9153 28.7553 33.1419 28.6883 33.1322 28.6627C33.1289 28.649 33.1257 28.4414 33.1257 28.0953C33.1289 27.7668 33.1289 27.2205 33.1289 26.6284C33.1322 22.1022 33.1452 8.65919 33.1484 3.52071C33.1484 2.52762 33.1517 1.72073 33.1517 1.28789C33.4539 1.26878 34.6887 1.13968 35.1306 1.10068C35.1501 1.09877 35.735 1.0651 35.9755 1.05054V0.327006C34.4645 0.326453 32.465 0.444541 30.9904 0.443794C29.4482 0.442852 27.5482 0.321855 26.2679 0.321287ZM96.1978 0.340969C96.1978 0.340969 96.0385 0.341652 95.7428 0.342236C94.7322 0.346591 92.1456 0.365568 89.1203 0.382206C87.2616 0.392994 85.809 0.407909 83.895 0.406967C82.553 0.422695 80.6748 0.474427 79.5147 0.472348C77.6624 0.469326 76.1514 0.35517 75.3293 0.351758C74.9393 0.350035 74.7216 0.364723 74.6144 0.358094C74.6209 0.36794 74.6209 1.04355 74.6209 1.04355C74.6924 1.05603 74.8354 1.07195 74.9686 1.06893C75.4333 1.10019 76.3041 1.17054 76.7461 1.22887C76.8338 1.24495 76.9833 1.26962 77.3992 1.31583C77.396 1.46956 77.4187 3.20923 77.4155 4.25444C77.4155 5.2228 77.4057 26.8289 77.4057 26.8289C77.4057 26.864 77.357 28.5665 77.357 28.7039C76.6226 28.8297 75.2123 28.907 74.7314 28.909H74.5884V29.5962C74.6566 29.5959 74.9718 29.6083 75.1506 29.6083C75.9272 29.6079 77.9289 29.4844 79.9729 29.4831C81.4059 29.4818 82.9819 29.5355 84.5774 29.5582C86.5434 29.5855 88.5321 29.5868 90.3194 29.6122C93.2667 29.6537 95.6551 29.6573 96.4317 29.6583C96.4317 29.6583 96.526 24.1916 96.526 23.751L96.1003 23.7558C96.1003 24.2209 95.9281 25.9525 95.9216 26.0282C95.8663 26.6801 95.8078 27.3632 95.7623 27.6998C95.7623 27.6998 95.5544 27.7164 95.4536 27.7144C94.9694 27.7053 93.4227 27.7615 93.3902 27.7615L86.4914 27.7645L81.6464 27.6832L81.6139 26.3392L81.6106 15.9043C82.475 15.8751 83.7943 15.8293 84.5969 15.8309C85.2793 15.8322 86.8879 15.7938 87.788 15.7958C89.9749 15.7997 91.9181 15.8137 92.0741 15.8182C92.4348 15.8286 93.1042 15.8507 93.3577 15.8663C93.3674 15.9583 93.3967 16.1019 93.3999 16.1425C93.5299 16.9416 93.6014 17.495 93.6891 18.2794C93.7021 18.3499 93.7086 18.4182 93.7184 18.4825H94.2156C94.2156 18.4825 94.2286 18.2021 94.2221 18.0276C94.2123 17.4124 94.1733 16.1854 94.1733 14.8255C94.1701 13.8828 94.2253 12.4416 94.2318 11.7485C94.235 11.561 94.2123 11.4278 94.2123 11.3742L93.7574 11.3829C93.7541 11.5327 93.7184 11.7537 93.7184 11.7537C93.6794 12.2704 93.5332 12.9307 93.4162 13.6274C93.3837 13.7141 93.3609 13.8354 93.3609 13.8354C93.3089 13.8529 91.8824 13.9289 91.7557 13.928C91.7069 13.9276 89.6305 13.9858 89.5947 13.9858L81.6139 13.9559L81.6269 2.44933C81.6269 2.44933 82.6407 2.41355 82.9234 2.41508C84.0738 2.41527 85.9455 2.40481 87.853 2.40747C90.6443 2.41085 93.3544 2.42824 93.3609 2.4322C93.3772 2.44016 94.2026 2.45164 94.2188 2.46584C94.2383 2.48137 95.2717 2.51227 95.5251 2.52043C95.5251 2.52043 95.5446 2.60609 95.5576 2.714C95.6713 3.92722 95.7656 5.36806 95.8078 5.87856L95.8111 6.08295L96.2368 6.08165C96.2368 5.33459 96.1978 3.04672 96.1913 1.59113C96.188 1.12362 96.1978 0.742904 96.1978 0.52629V0.340969Z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2607_62458">
          <rect width="97" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TimeLogo;
