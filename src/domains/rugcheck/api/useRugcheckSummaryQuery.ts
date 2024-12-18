import { useQuery } from '@tanstack/react-query'
import { rugcheckApi } from './rugcheck'

export const useRugcheckSummaryQuery = () =>
  useQuery({
    queryKey: ['rugcheckSummary'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.rugcheck.xyz/v1/tokens/AemSWemq719nNvkZPWAPDzRzpPJ3C49vkYaLiFNmpump/report/summary'
      )
      const json =
        (await response.json()) as rugcheckApi['rugcheck_api.TokenCheck']
      return json
    },
  })
