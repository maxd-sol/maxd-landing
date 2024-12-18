import { useQuery } from '@tanstack/react-query'

export const useFluxbeamPriceQuery = () =>
  useQuery({
    queryKey: ['rugcheckPrice'],
    refetchInterval: 5000,
    queryFn: async () => {
      const response = await (
        await fetch(
          'https://data.fluxbeam.xyz/tokens/AemSWemq719nNvkZPWAPDzRzpPJ3C49vkYaLiFNmpump/price'
        )
      ).text()

      return parseFloat(response)
    },
  })
