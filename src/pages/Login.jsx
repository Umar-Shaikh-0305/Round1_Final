import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Background from '../components/Background.jsx';
import UmbrellaLogo from '../components/UmbrellaLogo.jsx';
import TerminalButton from '../components/TerminalButton.jsx';
import { useAuth } from '../hooks/useAuth.jsx';
import { ACCOUNTS, GAME_TITLE, GAME_SUBTITLE, ORGANIZATION } from '../config.js';

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null); // { kind: 'ok' | 'error', text }

  if (user && !message) return <Navigate to="/rounds" replace />;

  function submit(e) {
    e.preventDefault();
    if (!username.trim() || !password) {
      setMessage({ kind: 'error', text: 'ENTER USERNAME AND PASSWORD' });
      return;
    }
    if (login(username, password)) {
      setMessage({ kind: 'ok', text: 'ACCESS GRANTED' });
      setTimeout(() => navigate('/rounds', { replace: true }), 900);
    } else {
      setMessage({ kind: 'error', text: 'ACCESS DENIED. INVALID CREDENTIALS' });
    }
  }

  return (
    <Background variant="login" photo="/bg/login.jpg">
      <main className="login">
        <UmbrellaLogo size={96} className="login__logo" />
        <p className="login__org">{ORGANIZATION.toUpperCase()}</p>
        <h1 className="login__title">{GAME_TITLE}</h1>
        <p className="login__subtitle">{GAME_SUBTITLE}</p>
        <p className="login__online">ONLINE COMPETITION</p>
        <p className="login__motto">DECODE · SOLVE · SURVIVE</p>

        <form className="login__panel" onSubmit={submit} noValidate>
          <input
            className="login__input"
            type="text"
            placeholder="Enter Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="login__input login__input--pw">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Enter Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="login__show" onClick={() => setShow((s) => !s)}>
              {show ? 'HIDE' : 'SHOW'}
            </button>
          </div>

          <div className={`banner banner--${message?.kind || 'idle'}`} role="status" aria-live="polite">
            {message?.text || ' '}
          </div>

          <TerminalButton type="submit" variant="primary" className="login__submit">
            ENTER FACILITY
          </TerminalButton>
          {import.meta.env.DEV && (
            <p className="login__hint">
              Demo login: {ACCOUNTS[0].username} / {ACCOUNTS[0].password}
            </p>
          )}
        </form>
      </main>
    </Background>
  );
}
