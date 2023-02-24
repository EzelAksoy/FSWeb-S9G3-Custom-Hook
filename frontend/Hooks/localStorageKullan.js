import React, { useState } from "react";

function useLocalStorageKullan(deger) {
  const [key] = useState(deger);
  localStorage.setItem("geceMode", JSON.stringify(!deger));
  return { key };
}

export default useLocalStorageKullan;
