import { useRugcheckSummaryQuery } from './api/useRugcheckSummaryQuery'
import styles from './rugcheck-status.module.scss'

export const RugcheckStatus = () => {
  const { data, isLoading } = useRugcheckSummaryQuery()

  return (
    <a
      target="_blank"
      href="https://rugcheck.xyz/tokens/AemSWemq719nNvkZPWAPDzRzpPJ3C49vkYaLiFNmpump"
      className={styles.link_wrapper}
    >
      <div className={styles.content_container}>
        <div className={styles.content_header}>
          <h4>Risk Analysis</h4>
          <p>{isLoading ? '...' : data?.score}</p>
        </div>
        {/** rugcheck has weird rating mapping based on score above.
         * TODO: make it sync with the actual score above
         */}
        <div className={styles.status_container}>
          {isLoading ? '...' : 'Good'}
        </div>
      </div>
    </a>
  )
}
