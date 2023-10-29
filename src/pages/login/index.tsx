import styles from "./login.module.scss";

export default function login() {
  return (
    <>
        <div className="grid grid-cols-2 divide-x">
          <div className={"flex justify-center items-center v-screen"}>
            <form>
              <label>
                <input
                  className={styles.form}
                  placeholder="email"
                  type="text"
                />
              </label>
            </form>
            <form>
              <label>
                <input
                  className={styles.form}
                  placeholder="password"
                  type="text"
                />
              </label>
            </form>
          </div>
          <div className={styles.containerForms}>
            <span>another side</span>
          </div>
        </div>
    </>
  );
}
