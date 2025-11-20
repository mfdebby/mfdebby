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
