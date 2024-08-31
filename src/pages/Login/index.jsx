import "./styles.css";

function Login() {
  return (
    <div className="login">
      <section>
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <div className="Forgot">
            <p>Forgot</p>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
