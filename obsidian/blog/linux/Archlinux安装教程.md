Arch Linux 是一种通用操作系统，它是基于 x86-64 架构的一类GNU/Linux 发行版。
Arch Linux 采用滚动升级模式，尽全力为用户提供最新的稳定版软件。初始安装完成的 Arch Linux只是一个基本系统，随后用户可以根据自己的喜好安装需要的软件并配置成符合自己理想的个性化系统。[^1]
下面开始安装教程
## 准备安装镜像

### 下载安装镜像
你可以在[Arch Linux - Downloads](https://archlinux.org/download/)获取`Archlinux`最新的系统安装镜像，它们的后缀名一般为`iso`
（图片）
### 准备安装介质
通常，我们推荐使用U盘作为安装介质，你可以使用烧录工具将ISO镜像文件烧录至U盘，或者在你的U盘上部署`Ventoy`。
### 启动安装
请重启电脑（或开机），在加载过程中使用进入Menu boot的快捷键，并选择包含安装镜像的设备。
如果其正常启动，可能会显示如下界面：
（图片）
请回车，并等待其加载完成，当加载完成后会出现如下界面：
（图片）
## 安装
### 验证引导模式
要验证系统目前的引导模式，请用下列命令行出 [efivars](https://wiki.archlinuxcn.org/wiki/Unified_Extensible_Firmware_Interface#UEFI_%E5%8F%98%E9%87%8F "Unified Extensible Firmware Interface") 目录：
```shell
ls /sys/firmware/efi/efivars
```
如果命令结果显示了目录且没有报告错误，则系统是以 UEFI 模式引导。如果目录不存在，则系统可能是以[BIOS](https://zh.wikipedia.org/wiki/BIOS "zhwp:BIOS")模式引导。如果系统没有以您想要的模式引导启动，请您参考自己的计算机或主板说明书。
### 连接互联网
你可以使用如下命令检测是否已经连接至网络：`ping www.ymsblog.top`
如果你的设备使用有线网络，那么大功率会成功。如果使用WLAN网络，请使用[iwd](https://wiki.archlinuxcn.org/wiki/Iwd#iwctl)
### 配置时区
```shell
timedatectl set-timezone Asia/Shanghai # 设置上海时区
systemctl restart systemd-timesyncd # 重启时间服务
timedatectl # 查看设备时间
```
如果互联网已经连接，那么上面代码便会同步你的计算机时间，并设置为上海时区。
### 创建硬盘分区
你可以使用`lsblk`查看你计算机目前的硬盘情况
（图片）
请使用`parted [设备名称]`来管理该磁盘，默认情况下设备名称应该为`/dev/sda`
(图片)
如果你的设备使用BIOS引导，那么请使用`mklabel msdos`来创建MBR分区表；如果使用UEFI引导，请使用`mklabel gpt`来创建GPT分区表。需要注意的是，如果你的计算机曾经安装过系统，那么这一步并不是必须的，该操作会覆盖你硬盘的原始记录。
随后，配置硬盘分区，对于GPT与MBR分区，它们的操作是不同的。
#### GPT分区
```shell
(parted) mkpart ESP fat32 1M 513M
(parted) set 1 boot on
(parted) mkpart primary ext4 513M 100%
```
其中，第一行设置了UEFI引导分区，其大小为512MB，第二行设置了`/boot`为启动目录，第三行将剩余硬盘空间分配给`/`目录
#### MBR分区
```shell
(parted) mkpart primary ext4 1M 100%
(parted) set 1 boot on
```
当配置完成后，你可以使用`quit`退出，请再次使用`lsblk`查看修改是否生效
（图片）
### 格式化分区
你可以使用`mkfs.ext4`来格式化`ext4`分区
例如：
```shell
mkfs.ext4 /dev/sda2
```
如果使用MBR分区，那么使用下列命令格式化EFI系统分区：
```shell
mkfs.fat -F 32 /dev/sda1
```
(图片)
### 挂载分区
请将根磁盘卷挂载到`\mnt`，如果你完全遵循本教程，可以使用下面指令：
```shell
mount /dev/sda2 /mnt
```
如果使用了GPL分区，请将EFI系统分区挂载至`/mnt/boot`，例如：
```shell
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
```
### 配置包管理源
如果你的所在地为*中国大陆*，那么请使用如下指令，它将会配置速度最快的源：
```shell
reflector -p https -c China --delay 3 --completion-percent 95 --sort score --save /etc/pacman.d/mirrorlist
```
### 安装包
使用`pacstrap`脚本，安装`base`、`base-devel`、`linux`、`linux-firmware`以及其他需要安装的包：
```shell
pacstrap -K /mnt base linux linux-firmware base-devel nano vim man-db man-pages texinfo zsh python iwd
```
该指令执行可能需要较长时间
## 系统配置
### 生产fstab
使用下面指令生产fstab文件：
```shell
genfstab -U /mnt >> /mnt/etc/fstab
```
**强烈建议**在执行完以上命令后，检查一下生成的 `/mnt/etc/fstab` 文件是否正确。
### chroot到新系统
通过以下命令 [chroot](https://wiki.archlinuxcn.org/wiki/Change_root "Change root") 到新安装的系统：
```shell
arch-chroot /mnt
```
### 设置时区
```shell
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime # 设置上海时区
hwclock --systohc
```
如果互联网已经连接，那么上面代码便会同步你的计算机时间，并设置为上海时区。
### 区域与本地化
使用你喜爱的编辑器编辑`/etc/locale.gen`，将需要的区域前的“#”取消掉。
例如：取消掉`en_US.UTF-8 UTF-8`与`zh_CN.UTF-8 UTF-8`
随后执行`locale-gen`
随后编辑`/etc/locale.conf`，添加`LANG=en_US.UTF-8`
#### 更换字体（可选）
```shell
pacman -S terminus-font -y 
setfont ter-v16b
```
### 配置网络
创建`/etc/hostname`文件，内容为你的主机名
### 修改密码
你需要设置一个密码来登录root
```shell
passwd root
```
需要注意的是输入密码是不会在终端显示的
### 配置引导
```shell
pacman -Syu grub efibootmgr -y
```
#### 使用GPL分区表
```shell
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```
如果你的系统架构为32位，请将tdrget设置为`i386-efi`
#### 使用MBR分区表
```shell
grub-install --target=i386-pc /dev/sda
```
需要注意的是无论你系统架构是什么，target都必须为`i386-pc`
随后使用`grub-mkconfig -o /boot/grub/grub.cfg`配置文档
### 重启电脑
使用ctrl+d退出chroot
使用`reboot`命令重启计算机以进行下一步配置


[^1]: [Arch Linux - Arch Linux 中文维基 (archlinuxcn.org)](https://wiki.archlinuxcn.org/wiki/Arch_Linux)
