import '@/styles/globals.css'
import '@/styles/Style.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
