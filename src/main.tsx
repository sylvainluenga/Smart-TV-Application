import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './index.css'


export const queryClient = new QueryClient({
  queryCache: new QueryCache()
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
