# Centos 7 Systemd Image

[centos:7 with systemd](https://hub.docker.com/_/centos)

Docker File for systemd base image `base.DockerFile`

```
docker build --rm -t local/c7-systemd -f .\dockerfiles\base.Dockerfile .
```


# Monsta Systemd


```
docker build --rm -t local/c7-systemd-monsta -f .\dockerfiles\dev.Dockerfile .
docker run -ti --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro -p 8888:80 local/c7-systemd-monsta
```
