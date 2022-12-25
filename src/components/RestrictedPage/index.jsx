export const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Bem-vindo {user}</p>
          <button onClick={Logout}>Logout</button>
        </>
      ) : (
        <>
          <p> Você não pode acessar essa página </p>
          <button onClick={Login}>Login</button>
        </>
      )}
    </div>
  );
};
