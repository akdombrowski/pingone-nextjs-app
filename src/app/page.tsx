import Image from "next/image";
import styles from "./page.module.css";

const envID = "";
const clientID = "";
const scopes = "";
const responseType = "code";
const grantType = "authorization_code";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Get started with PingOne and NextJS</p>
        <div>
          <div style={{ paddingBottom: "1vh" }}>By</div>
          <a
            href="https://apidocs.pingidentity.com/pingone/main/v1/api/#getting-started-with-the-pingone-apis"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/Ping-Logo.svg"
              alt="Ping Identity Logo"
              className={styles.pingLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/PingOne.svg"
          alt="PingOne Logo"
          width={620}
          height={112}
          priority
        />
      </div>

      <div>
        <form>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <label
              htmlFor="envIDInput"
              style={{ flexShrink: "10", paddingRight: ".25rem" }}>
              environment id:
            </label>
            <input
              id="envIDInput"
              type="text"
              style={{ flexGrow: "10", paddingRight: "1rem" }}
            />
            <label
              htmlFor="clientIDInput"
              style={{
                flexShrink: "10",
                paddingLeft: "1rem",
                paddingRight: ".25rem",
              }}>
              client id:
            </label>
            <input
              id="clientIDInput"
              type="text"
              style={{
                flexGrow: "10",
              }}
            />
          </div>
        </form>
        <a
          href="https://apidocs.pingidentity.com/pingone/main/v1/api/#getting-started-with-the-pingone-apis"
          target="_blank"
          rel="noopener noreferrer">
          <h1>Login</h1>
        </a>
      </div>
    </main>
  );
}
