"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // エラーメッセージの状態

    // Check if all fields are filled and passwords match
    useEffect(() => {
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                setIsButtonEnabled(true);
                setErrorMessage(""); // パスワードが一致したらエラーメッセージをクリア
            } else {
                setIsButtonEnabled(false);
                setErrorMessage("パスワードが一致しません"); // パスワードが一致しない場合のエラーメッセージ
            }
        } else {
            setIsButtonEnabled(false);
        }
    }, [username, email, password, confirmPassword]);

    // フォーム送信時の処理
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // ページリロードを防ぐ

        // 入力内容の検証
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage("全てのフィールドを入力してください"); // フィールドが未入力の場合のエラーメッセージ
        } else if (password !== confirmPassword) {
            setErrorMessage("パスワードが一致しません"); // パスワードが一致しない場合のエラーメッセージ
        } else {
            setErrorMessage(""); // 問題なければエラーメッセージをクリア
            // ここに登録処理を追加
            alert("登録が完了しました！");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>新規アカウント登録</h1>
            <div className={styles.icon}>
                <img src="/default_icon.svg" alt="default Icon" />
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ユーザ名"
                    className={styles.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="メールアドレス"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="パスワード (半角英数字)"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="パスワード (再入力)"
                    className={styles.input}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {/* エラーメッセージの表示 */}
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}

                <button
                    type="submit"
                    className={styles.button}
                    disabled={!isButtonEnabled}
                >
                    新規登録
                </button>
            </form>
        </div>
    );
}
