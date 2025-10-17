# TrueNas Proxmox VM Setup

## 1. Copy the `Download Stable` link in <https://www.truenas.com/download-truenas-community-edition/>

## 2. Create the ISO Image in the local storage

![TrueNas ISO Image](/truenas_iso_image.png)

## 3. Create the VM

![TrueNas VM](/truenas_vm.png)

## 4. Start the VM

## 5. Install

> Just follow the default setup

## 6. Check the web UI

![TrueNas Installed](/truenas_installed.png)

![TrueNas Web UI](/truenas_web_ui.png)

## 7. Go to the VM Hardware tab

![VM Hardware Tab](/truenas_vm_hardware_tab.png)

> Remove the CD/DVD Drive

## 8. SSH to the proxmox node

```bash
# Get the disk id
ls /dev/disk/by-id | grep "<drive-serial>"

# Attach the drive to the VM
qm set <vm-id> -scsi1 /dev/disk/by-id/<disk-id>
```
