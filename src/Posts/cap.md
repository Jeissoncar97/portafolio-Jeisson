---
title: Cap Writeup
date: 2024-01-01
difficulty: Easy
os: Linux
---

# Cap - Writeup 🧢

## 🔍 Reconocimiento

Como siempre, comenzamos con un escaneo usando **nmap**:

```bash
nmap -sC -sV 10.10.10.10

Esto nos revela los puertos abiertos y servicios activos.

🌐 Enumeración

Encontramos un servicio web corriendo en el puerto 80, así que lo analizamos:

Revisamos el código fuente
Probamos rutas ocultas
Usamos herramientas como gobuster
gobuster dir -u http://10.10.10.10 -w /usr/share/wordlists/dirb/common.txt
⚠️ Explotación

Se identifica una vulnerabilidad interesante relacionada con archivos .pcap.

Esto permite acceder a tráfico capturado, donde encontramos credenciales:

username: admin
password: password123
🛠️ Acceso

Con estas credenciales, logramos acceso al sistema.

ssh admin@10.10.10.10
🏁 Conclusión
Máquina ideal para principiantes
Enseña conceptos básicos de análisis de tráfico
Buen ejercicio de enumeración
📊 Información
Dificultad: Easy
Sistema Operativo: Linux
Rating: ⭐⭐☆☆☆