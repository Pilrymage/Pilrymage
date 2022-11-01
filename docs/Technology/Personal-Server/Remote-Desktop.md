# 搭建远程个人电脑并用ipad连接使用

ipad本身是面向移动操作的，且如果没有苹果全家桶会缺少软件与服务，虽然可以附加键盘鼠标等外设但个人感觉效率仍不高；可以使用windows server的远程桌面，但是windows的性能需求导致在服务器上体验并不好；这里采用linux系的轻量操作系统使用vnc启动远程桌面，为了提高使用体验使用xrdp服务，使得远程电脑可以使用电脑端与ipad上的mstsc/rdp登录远程桌面，十分便捷。

## 需求
- 2核4G轻量应用服务器（linux系统）。启动桌面以及其他应用对配置有要求，不过流畅度还会受到网速的制约
- ipad2021，做显示屏用
- 蓝牙键盘、蓝牙鼠标，可以直接等同电脑操作
- linux命令行操作基础，遇到桌面服务炸掉可能需要自救，否则还是装windows罢

## 你会得到：
- 一个操作系统为archlinux的远程个人电脑，只要有平板或电脑（windows）就能随时使用

## 关于windows的rdp
远程桌面协定（**R**emote **D**esktop **P**rotocol,**RDP**）用于连接远程电脑，该服务监听3389端口。windows系统可以通过win键+R调出运行，输入mstsc打开远程桌面；linux系统可以安装rdesktop；ipad可以安装rdp client。

支持rdp的服务器系统通过公网ip连接，与通常的电脑一样要求个人账号登录。

## 修改服务器的操作系统
国内服务器商的linux发行版有ubuntu、centos等，但不太会有arch。并非ubuntu等不能装桌面，不过ubuntu的自带桌面消耗巨大，浪费服务器资源多。由于服务器不能用livecd启动，这里选择使用vpstoarch脚本修改系统。

## arch桌面配置
可以参照各种archlinux安装教程，从退出livecd的部分看起。2核4G配置下可以安装KDE桌面简化操作，或者使用awesome wm更为轻便，但因为中文输入法难安装所以我回到了KDE。

## xrdp服务
[这一篇文章]()基于arch KDE，介绍得很完善。如果使用awesome可以将启动项换为``。

