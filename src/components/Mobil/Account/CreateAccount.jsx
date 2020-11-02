import React from "react";

const CreateAccount = ({
  account,

  // ================

  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
}) => {
  return (
    <>
      <div className="container--account--mobile">
        <h1 onClick={account}>Załóz konto</h1>
        <img
          src={process.env.PUBLIC_URL + "/img/parzenica.svg"}
          alt="parzenica"
        />
        <div className="login--field">
          <label htmlFor="">
            <p>Email</p>
          </label>
          <input
            type="text"
            name=""
            id=""
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>

          {/* =============== */}

          <label>
            <p>Hasło</p>
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>

          {/* =============== */}

          <label>
            <p>Powtórz hasło</p>
          </label>
          <input
            type="password"
            id="repeat_password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
        </div>
        <div className="buttons--field">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Zaloguj się</button>
              <p>
                Jeśli nie masz konta
                <span onClick={() => setHasAccount(!hasAccount)}>
                  załóz konto
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Załóz konto</button>
              <p>
                Jeśli masz konto
                <span onClick={() => setHasAccount(!hasAccount)}>
                  zaloguj się
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
