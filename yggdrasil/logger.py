import logging
import subprocess
import os

class LoggerWrapper():

    def __init__(self, name=__name__, path=None):
        self.logger = self.getLogger(name, path)

    def getLogger(self, name=__name__, path=None):
        """
        A simple logger wrapper.
        :param name: name of the logger
        :param path: path to the log file. If specified, a file handler will be added to the looger
        :return: logger instance
        """
        logger = logging.getLogger(name)
        logger.setLevel(logging.DEBUG)
        # see https://docs.python.org/2/library/logging.html#logrecord-attributes
        # for possible LogRecord attributes
        formatter = logging.Formatter('%(asctime)s -  %(message)s')
        if path:
            fh = logging.FileHandler(path)
            fh.setLevel(logging.DEBUG)
            fh.setFormatter(formatter)
            logger.addHandler(fh)
        return logger

    def execute(self, cmd, path):
        popen = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, universal_newlines=True, cwd=path)
        for stdout_line in iter(popen.stdout.readline, ""):
            self.logger.info('got line from subprocess: %r', stdout_line)
        popen.stdout.close()
        return_code = popen.wait()
        return return_code

    def info(self, msg):
        self.logger.info(msg)


TEST_PATH = '/tmp'
LOG_PATH = os.path.join(TEST_PATH, 'yggdrasil.log')
logger = LoggerWrapper(path=LOG_PATH)