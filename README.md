# Centos 8 Systemd Image

[centos:8 with systemd](https://hub.docker.com/_/centos)

Docker File for systemd base image `base.DockerFile`

```

docker build --rm -t local/c8-systemd -f .\dockerfiles\base.Dockerfile .

```


# Monsta Systemd


```

docker build --rm -t local/c8-systemd-monsta -f .\dockerfiles\dev.Dockerfile .
docker run -ti --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro -p 8888:80 local/c8-systemd-monsta

```
