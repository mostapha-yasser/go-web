import React, { ReactNode } from "react";
import UiProvider from "./UiProvider";

function ContextProvider({ children }: { children: ReactNode }) {
  return (
<div className="w-full overflow-x-hidden">
      
        <UiProvider>
         {children}
        </UiProvider>
    </div>
  );
}

export default ContextProvider;
