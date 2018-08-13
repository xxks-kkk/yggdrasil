function doSomething()
{
        local retTmp=$(mktemp)
        local lock="/tmp/do.lock"
        touch $lock
        (
                docker run -t ferrishu3886/yggdrasil_env /bin/sh -c "git clone https://github.com/xxks-kkk/yggdrasil.git; cd yggdrasil; make verify"            

                echo $? > $retTmp
                rm -f $lock;
        )&
        while [ -f $lock ]; do
                sleep 0.1
                printf "Please wait... %s \r" $f
                let "t=10#$(date +%N) / 100000000 % 4"
                case $t in
                      0) f="/";;
                      1) f="-";;
                      2) f="\\";;
                      3) f="|";;
                esac
        done
        echo

        local retcode=$(cat $retTmp)
        rm -f $retTmp
        return $retcode
}


doSomething
