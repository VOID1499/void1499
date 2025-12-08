
Fuente
https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es


OAuth 2 es una estructura (framework) de autorización que le permite a las aplicaciones obtener acceso limitado a cuentas de usuario en un servicio HTTP, como Facebook, GitHub y DigitalOcean. Delega la autenticación del usuario al servicio que aloja la cuenta del mismo y autoriza a las aplicaciones de terceros el acceso a dicha cuenta de usuario. OAuth 2 proporciona flujos de autorización para aplicaciones web y de escritorio; y dispositivos móviles.

## [Roles de OAuth](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#roles-de-oauth)[](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#roles-de-oauth)

OAuth define cuatro roles:

- Propietario del recurso
- Cliente
- Servidor de recursos
- Servidor de autorización

Detallaremos cada rol en las siguientes subdivisiones.

### [Propietario del recurso: _Usuario_](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#propietario-del-recurso-usuario)[](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#propietario-del-recurso-usuario)

El propietario del recurso es el “usuario” que da la autorización a una aplicación, para acceder a su cuenta. El acceso de la aplicación a la cuenta del usuario se limita al “alcance” de la autorización otorgada (e.g. acceso de lectura o escritura).

### [Servidor de Recursos / Autorización: _API_](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#servidor-de-recursos-autorizacion-api)[](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#servidor-de-recursos-autorizacion-api)

El servidor de recursos aloja las cuentas de usuario protegidas, y el servidor de autorizaciones verifica la identidad del usuario y luego genera tokens de acceso a la aplicación.

Desde el punto de vista del desarrollador de una aplicación, la API del servicio atiende tanto a los roles de recursos como a los de autorización. Nos referiremos a ambos roles combinados, como al rol de servicio o de API.

### [Cliente: _Aplicación_](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#cliente-aplicacion)[](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es#cliente-aplicacion)

El cliente es la _aplicación_ que desea acceder a la cuenta del _usuario_. Antes de que pueda hacerlo, debe ser autorizado por el usuario, y dicha autorización debe ser validada por la API.

![oauth](assets/images/oauth.png)




A continuación se encuentra una explicación más detallada de los pasos en el diagrama:

1. La **aplicación** solicita autorización para acceder a los recursos de servicio del **usuario**.
2. Si el **usuario** autoriza la solicitud, la **aplicación** recibe la autorización.
3. La **aplicación** solicita al **servidor de autorización** (API) un token de acceso, presentando la autenticación de su propia identidad y la autorización otorgada.
4. Si la identidad de la aplicación es autenticada y la autorización es válida, el **servidor de autorización** (API) emite un token de acceso a la aplicación. La autorización finaliza.
5. La **aplicación** solicita el recurso al **servidor de recursos** (API) y presenta el token de acceso para autenticarse.
6. Si el token de acceso es válido, el **servidor de recursos** (API) provee el recurso a la **aplicación**.
