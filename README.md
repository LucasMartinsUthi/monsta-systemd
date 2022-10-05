# Systemd

(centos:7 with systemd)[https://hub.docker.com/_/centos]

### Docker File for systemd base image `base.DockerFile`

```
docker build --rm -t local/c7-systemd -f .\dockerfiles\base.Dockerfile .
```

### Systemd enabled base container `dev.DockerFile`

```
docker build --rm -t local/c7-systemd-monsta -f .\dockerfiles\dev.Dockerfile .
```

# Run

```
docker run -ti --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro -p 80:80 local/c7-systemd-monsta
```

