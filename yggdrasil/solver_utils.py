import math
import json

LEN_LEN = 8

from logger import logger

def write_cmd(stream, command):
    payload = json.dumps(command)
    # hzy: "10" is the base of log
    assert math.log(len(payload), 10) < LEN_LEN, "payload length = {} to large".format(len(payload))
    # hzy: returns the string right justified in a string of length LEN_LEN
    # we do padding using '0'
    payloadLen = str(len(payload)).rjust(LEN_LEN, '0')
    stream.write(payloadLen)
    stream.write(payload)
    logger.info("[%s]::payloadLen: %s" % (__name__, payloadLen))
    logger.info("[%s]::payload: %s" % (__name__, payload))
    # hzy: stream is stdout or stdin in the code, by flushing, we force the buffered information
    # written to the stdout, for example.
    stream.flush()


def read(stream, count):
    # hzy: stream is of type "sys.stdin" in the code. We read "count" bytes and
    # return the bytes we have read
    v = stream.read(count)
    logger.info("[%s]::count: %s" % (__name__, count))
    logger.info("[%s]::v: %s" % (__name__, v))
    return v


def read_cmd(stream):
    # hzy: this method corresponds with "write_method" in terms of
    # how we construct the stream: first write the length and then write
    # the payload. Accordingly, when read, we read the length, and then the payload.
    cmdlen = read(stream, LEN_LEN)
    if not cmdlen:
        return None
    data = read(stream, int(cmdlen))
    try:
        # hzy: try to decode the json data
        # (https://docs.python.org/2/library/json.html)
        return json.loads(data)
    except Exception, e:
        print data
        raise e

