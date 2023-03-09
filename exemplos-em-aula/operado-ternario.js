/*isAuthenticated === true = 'https://meusite.com/area-do-usuario'
isAuthenticated === true = 'https://meusite.com/entrar'
*/

const isAuthenticated = true;
const redirectUserAuthenticated = 'https://meusite.com/area-do-usuario';
const redirectUserNotLoggedIn = 'https://meusite.com/entrar'

const redirectTo = isAuthenticated ? redirectUserAuthenticated : redirectUserNotLoggedIn;

alert(redirectTo);