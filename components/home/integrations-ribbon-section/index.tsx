import styles from "./styles.module.css"

const apps = [
  ["WhatsApp Business", "whatsapp-icon"],
  ["Gmail", "gmail"],
  ["HubSpot", "hubspot"],
  ["Google Sheets", "google-sheets"],
  ["Microsoft Teams", "microsoft-teams"],
  ["Slack", "slack-icon"],
  ["Shopify", "shopify"],
  ["Google Drive", "google-drive"],
  ["Google Calendar", "google-calendar"],
  ["Notion", "notion-icon"],
  ["Airtable", "airtable-icon"],
  ["Trello", "trello"],
  ["Asana", "asana-icon"],
  ["Zendesk", "zendesk-icon"],
  ["Salesforce", "salesforce"],
  ["WooCommerce", "woocommerce-icon"],
  ["Telegram", "telegram"],
  ["Discord", "discord-icon"],
]

export function Index() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 id="integrations-title" className={styles.heading}>
          Connected to the{" "}
          <span className={styles.headingAccent}>tools you already use.</span>
        </h2>
      </header>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              className={styles.list}
              aria-label={
                duplicate ? undefined : "Example apps for integration"
              }
              aria-hidden={duplicate || undefined}
            >
              {apps.map(([name, icon]) => (
                <li className={styles.chip} key={name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/integration-logos/${icon}.svg`}
                    width={28}
                    height={28}
                    alt={name}
                  />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
