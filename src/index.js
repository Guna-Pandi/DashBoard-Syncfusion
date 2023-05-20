import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Mgo+DSMBaFt+QHJqUE1hXk5Hd0BLVGpAblJ3T2ZQdVt5ZDU7a15RRnVfR1xqSXZXf0VmXXhZdA==;Mgo+DSMBPh8sVXJ1S0R+WVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jTH9adk1nUH9bdH1XQg==;ORg4AjUWIQA/Gnt2VFhiQlRPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtSf0VrXXZedXFVTmQ=;MjExNjI4OEAzMjMxMmUzMjJlMzVrSE1FZFhUL0lWYjIvWE50NGRPVG9kM1NIVllQTW5sQTYreUVOclpKSTJzPQ==;MjExNjI4OUAzMjMxMmUzMjJlMzVOSFg0MzU3ZXlJZkdjNVNKc2laU3h1am1pQkdmb0RLWGE3eUV5aklEeXlFPQ==;NRAiBiAaIQQuGjN/V0d+Xk9BfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Wd0xjUXtXcHFQT2BY;MjExNjI5MUAzMjMxMmUzMjJlMzVjMDFIVTk3R0k3UVo3T2VjZFVVUWhBWnIvbmJhNWllSkhzbSsvUkl2LzhrPQ==;MjExNjI5MkAzMjMxMmUzMjJlMzVGRE9SNVJpd3BJNTNveDRTNnB4d1RVVHR3enFQNFNhYnZxbm9NNWhjeGpnPQ==;Mgo+DSMBMAY9C3t2VFhiQlRPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtSf0VrXXZedXJTQGQ=;MjExNjI5NEAzMjMxMmUzMjJlMzVTMlhCTUdFZHN5RUdtSXk0V3lrR1BXRThrNWJlNGZoOStnUXlHdEs1eUkwPQ==;MjExNjI5NUAzMjMxMmUzMjJlMzVsWWZxd0RKK2JXcTc2VTFPcDBZSi9RRmUvdlF2ZG9RL29STDZLdDAyMm1ZPQ==;MjExNjI5NkAzMjMxMmUzMjJlMzVjMDFIVTk3R0k3UVo3T2VjZFVVUWhBWnIvbmJhNWllSkhzbSsvUkl2LzhrPQ=="
);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
