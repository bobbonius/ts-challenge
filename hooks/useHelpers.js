import { useDeviceInfo } from "@ticketswap/solar"

export function useHelpers() {
  const truncateString = (string, maxLength, seperator = "...") => {
    const { isMobile } = useDeviceInfo()
    
    if (string.length > maxLength && isMobile()) {
      return string.slice(0, maxLength - seperator.length) + seperator;
    }
    return string;
  };

  return {
    truncateString
  };
}