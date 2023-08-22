import loguru
import wget
import os
log = loguru.logger
LOGO = r"https://file.yms.tdrweb.top/img/me.png"

@log.catch(level="ERROR")
def main():
    log.info("启动")
    assert not os.system("npm run build")
    log.success("构建成功")
    os.remove("./public/img/avatar.png")
    wget.download(LOGO,"./public/img/avatar.png")
    log.success("成功替换图片")
    
main()