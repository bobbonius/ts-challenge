import { Alert, AlertVariant } from "@ticketswap/solar"

export const Error = ({ children }) => (
  <Alert
    variant={AlertVariant.error}
  >
    {children}
  </Alert>
)