import './global.scss'
import { Me } from './shared/components/me'
import { StarsOverlay } from './shared/components/stars-overlay/stars-overlay'
import styles from './app.module.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RugcheckStatus } from './domains/rugcheck/rugcheck-status'
import { FluxbeamPrice } from './domains/fluxbeam/fluxbeam-price'
import { DexList } from './shared/components/dex-list/dex-list'
import { SocialsList } from './shared/components/socials-list/socials-list'
import { About } from './shared/components/about/about'

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
