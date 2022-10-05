FROM local/c7-systemd

COPY ../opt/monsta /opt/monsta
COPY ../var/monsta /var/monsta

RUN yum -y install httpd; yum clean all; systemctl enable httpd.service
EXPOSE 80
CMD ["/usr/sbin/init"]