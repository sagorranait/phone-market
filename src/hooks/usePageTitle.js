import { useEffect } from "react"

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ?  `${title} - PhoneMarket` : "PhoneMarket";
  }, [title]);  
}

export default usePageTitle