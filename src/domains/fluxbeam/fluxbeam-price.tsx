import { useFluxbeamPriceQuery } from './api/useFluxbeamPriceQuery'
import styles from './fluxbeam-price.module.scss'

export const FluxbeamPrice = () => {
  const { data, isLoading } = useFluxbeamPriceQuery()

  return (
    <div className={styles.price_wrapper}>
      <h4>Price:</h4>{' '}
      <p>{isLoading ? '...' : data?.toString().slice(0, 12)}$</p>
    </div>
  )
}
