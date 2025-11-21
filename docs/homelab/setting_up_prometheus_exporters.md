# Setting Up Prometheus Node Explorer

## 1. Download the node explorer

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.10.2/node_exporter-1.10.2.linux-amd64.tar.gz
```

## 2. Untar the node explorer

```bash
tar node_exporter-1.10.2.linux-amd64.tar.gz
```

## 3. Run the node explorer

```bash
cd node_exporter-1.10.2.linux-amd64/
nohup ./node_exporter &
```

## 4. Check the metrics endpoint

```bash
curl http://<vm-ip>:9100/metrics
```

# Setting Up Prometheus Nginx Exporter

## 1. Add stub_status to the default nginx conf file

```bash
server {
    listen 80 default_server;

    server_name _;

    # Stub status
    location /stub_status {
        stub_status;
        allow 127.0.0.1;
        deny all;
    }

    return 301 https://$host$request_uri;
}
```

## 2. Download the nginx exporter

```bash
wget https://github.com/nginx/nginx-prometheus-exporter/releases/download/v1.5.1/nginx-prometheus-exporter_1.5.1_linux_amd64.tar.gz
```

## 3. Install the nginx exporter

```bash
tar axf nginx-prometheus-exporter_1.5.1_linux_amd64.tar.gz
cp nginx-prometheus-exporter /usr/local/bin
```

## 4. Run the nginx exporter in the background

```bash
nohup nginx-prometheus-exporter   -nginx.scrape-uri http://127.0.0.1/stub_status > nginx_exporter.log 2>&1 &
```
