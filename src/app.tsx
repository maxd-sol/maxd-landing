import './global.scss'
import { Me } from './components/me'
import { StarsOverlay } from './components/stars-overlay/stars-overlay'
import styles from './app.module.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RugcheckStatus } from './domains/rugcheck/rugcheck-status'
import { FluxbeamPrice } from './domains/fluxbeam/fluxbeam-price'
import { DexList } from './components/dex-list/dex-list'
import { SocialsList } from './components/socials-list/socials-list'
import { About } from './components/about/about'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <div className={styles.stats_wrapper}>
          <Me />
          <div className={styles.stats_block}>
            <RugcheckStatus />
            <FluxbeamPrice />
            <DexList />
            <SocialsList />
          </div>
        </div>
        <About />
      </div>
      <StarsOverlay />
    </QueryClientProvider>
  )
}

export default App
