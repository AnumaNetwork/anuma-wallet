import { Wallet } from './wallet';

export const initAnumaFramework = async () => {
  // console.log("Anuma - framework: init");
  await Wallet.initRuntime();
  // console.log("Anuma - framework: ready");
};

