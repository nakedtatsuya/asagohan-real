"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("全て入力してください");
    } else {
      setErrorMessage("");
      alert("登録が完了しました！");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>ログイン</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="メールアドレス"
            className={styles.input}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            placeholder="パスワード (半角英数字)"
            className={styles.input}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <button
            type="submit"
            className={styles.button}
            disabled={!isButtonEnabled}
          >
            ログイン
          </button>
        </form>
      </div>

      <div className={styles.footer}>
        <div className={styles.makeAccount}>初めての方はこちら</div>

        <button
          type="submit"
          className={styles.button}
          disabled={!isButtonEnabled}
        >
          新規アカウント登録
        </button>
      </div>
    </>
  );
}
