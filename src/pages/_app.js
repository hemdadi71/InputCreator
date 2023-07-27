import { store } from '@/Redux/Store'
import '@/styles/globals.css'
import '@/styles/Style.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Provider } from 'react-redux'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  )
}
