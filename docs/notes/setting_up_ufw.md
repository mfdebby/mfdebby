# Setting Up UFW

## 1. Allow SSH

> Allow ssh access first before you enable UFW so you don't get locked out.

```bash
sudo ufw allow OpenSSH
sudo ufw allow 22
```

## 2. Enable UFW

```bash
sudo ufw enable
```

##
