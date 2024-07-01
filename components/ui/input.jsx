import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "yez hxa iqm nkq upv giv lkq wle okp cti rui ubv wmx jbw ueb ygz elq xfd jig tfr rgy ujq elp ucu jps cba",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
