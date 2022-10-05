```
monit -c /opt/monsta/etc/monit.cfg start all
monit -c /opt/monsta/etc/monit.cfg restart all
monit -c /opt/monsta/etc/monit.cfg stop all
monit -c /opt/monsta/etc/monit.cfg status

tail -100 /var/log/monsta/monkerneld.log
```

