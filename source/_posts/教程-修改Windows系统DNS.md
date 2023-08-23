---
title: 教程 | 修改Windows系统DNS服务器
date: 2023-08-23 23:03:45
tags:
    - "教程"
    - "Windows系统"
    - "DNS服务器"
categories:
    - "信息技术"
    - "Windows"
---
DNS服务器（Domain Name Server，域名服务器）是进行域名和与之相对应的IP地址进行转换的服务器。
DNS服务器中保存了一张域名和与之相对应的IP地址 的表，以解析消息的域名。 域名是Internet上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位（有时也指地理位置）。域名是由一串用点分隔的名字组成的，通常包含组织名，而且始终包括两到三个字母的后缀，以指明组织的类型或该域所在的国家或地区。
<!-- more -->
## 修改DNS
1. 启动控制面板
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/1.png)
2. 搜索`网络与共享中心` 
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/2.png)
3. 点击`更改适配器设置`
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/3.png)
4. 右键单击你需要修改DNS的连接（一般为`以太网`或者`WLAN`）并点击`属性`
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/4.png)
5. 双击`Internet 协议版本 4`
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/5.png)
{% message color:info %}
    若要修改IPv6 DNS，请选择`Internet 协议版本 6`
{% endmessage %}  
6. 选择`使用下面的DNS服务器地址`
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/6.png)
7. 在`首选DNS服务器`与`备用DNS服务器`中填写你要使用的DNS
![](https://file.yms.tdrweb.top/img/ymsblog/change_dns_win/7.png)
8. 点击`确定`

