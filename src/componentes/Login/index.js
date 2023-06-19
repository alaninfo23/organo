import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    // Verificar as credenciais do login
    if (username === 'usuario' && password === 'senha') {
      // Redirecionar para a página após o login bem-sucedido
      window.location.href = '/pagina-de-redirecionamento';
    } else {
      // Exibir mensagem de erro de login
      setLoginError(true);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        <label>Usuário:</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      {loginError && <p>Usuário ou senha inválidos. Tente novamente.</p>}
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
