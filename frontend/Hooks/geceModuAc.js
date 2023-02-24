import React, { useState } from "react";
import useLocalStorageKullan from "./localStorageKullan";

function useGeceModuAc() {
  if (!window.localStorage.geceMode)
    window.localStorage.setItem("geceMode", JSON.stringify(false));

  const deger = JSON.parse(window.localStorage.getItem("geceMode"));

  const { key } = useLocalStorageKullan(deger);
  const [geceModeAcık, setGeceModeAcık] = useState(key);

  return { geceModeAcık, setGeceModeAcık };
}

export default useGeceModuAc;
