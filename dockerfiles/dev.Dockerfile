FROM local/c7-systemd

COPY ../opt/monsta /opt/monsta
COPY ../var/monsta /var/monsta
COPY ../services /etc/systemd/system/

RUN systemctl enable monstadb.service && \
    systemctl enable monrouter.service && \
    systemctl enable monkerneld.service && \
    systemctl enable monagentx.service

CMD ["/usr/sbin/init"]