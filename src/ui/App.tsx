import { router } from "@route/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
