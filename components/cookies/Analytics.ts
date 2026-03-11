export function loadAnalytics() {
  const consent = localStorage.getItem("cookie-consent")

  if (!consent) return

  const settings = JSON.parse(consent)

  if (!settings.analytics) return

  const script = document.createElement("script")
  script.src = "https://www.googletagmanager.com/gtag/js?id=XXXX"
  script.async = true

  document.head.appendChild(script)
}