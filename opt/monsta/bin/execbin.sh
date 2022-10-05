#! /bin/bash

export LD_LIBRARY_PATH=/opt/monsta/lib
export LC_ALL=en_US.UTF-8
export JEMALLOC_SYS_WITH_MALLOC_CONF="background_thread:true,narenas:1,tcache:false,dirty_decay_ms:0,muzzy_decay_ms:0,abort_conf:true"

bin=$1
base=$(basename $bin)

shift
$bin "$@" >> /var/log/monsta/$base.log &
echo $! > /var/monsta/run/$base.pid
