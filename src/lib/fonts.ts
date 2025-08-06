
import localFont from 'next/font/local';

export const clashDisplay = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  preload: true,
});