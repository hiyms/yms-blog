import loguru
import wget
import os
log = loguru.logger
LOGO = r"https://file.yms.tdrweb.top/img/me.png"

@log.catch(level="ERROR")
def main():
    log.info("启动")
    os.remove("./public/img/avatar.png")
    wget.download(LOGO,"./public/img/avatar.png")
    log.success("成功替换图片")
    assert os.system("npm install")
    log.success("安装依赖")
    assert os.system("hexo g")
    log.success("成功")
main()