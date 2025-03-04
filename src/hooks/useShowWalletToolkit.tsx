import { useMemo } from "react"
import { useLocation, useMatch } from "react-router-dom"

const useShowWalletConnector = () => {
  const { pathname } = useLocation()

  const isCanvas = useMatch("/canvas/*")

  const showWalletConnector = useMemo(
    () => pathname.startsWith("/developer-nft") || pathname.startsWith("/bridge") || pathname.startsWith("/sessions") || isCanvas,
    [pathname],
  )

  return showWalletConnector || true
}

export default useShowWalletConnector
