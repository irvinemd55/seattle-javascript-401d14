401 JS -- class 06 OSI model, TCP protocol
===

## OSI Resources
* Skim [OSI model wiki]

## TCP Resources
* Watch [TCP connection walkthrough]
* Skim [TCP wiki]

## Learning Objectives

## Overview
#### OSI Model
The OSI model is a conceptual model for understanding the different systems that play a roles in networking computers. The OSI model is not a protocol or a stantandization, Its just a conceptual framework for helping us talk about networking components and their roles. There are many protocols and services that subscribe to particular sections of the OSI model. However, there are also protocols and services that do not conform to a single section of the OSI model, and instead play more than one role.  

The "TCP/IP stack" that http is built on top of, does not follow the OSI model. It does not have components in the presintation, or session layers.   
  
* **Layer 7** Application  
The application layer conains process to process comunication protocols used by hosts.   
 * `HTTP` - used by the world wide web
 * `IMAP` - used by email clients to retrieve e-mail
 * `POP` - used by email clients to retrieve e-mail
 * `FTP` - used to transfer files bewteen computers
 * `SSH` - used for securly operating a computer over an unsecure network
 * `BitTorrent` - used for peer to perr file transfer
* **Layer 6** Presintation  
The presintation layer is responsible for formating information for the application layer.  
  * string encoding
    * num bytes followed by data  
    * null terminated strings
  * data serialization like `JSON`, `XML`, and `TLV`
  * encription
* **Layer 5** Session   
The session layer is responsible for opening, closing, and  managing end-user applications.  
 * `RPC` - Remote Procedure Call used to run subroutines on another computer
 * `NetBIOS` - allows applicaions on seporate computers to communicate on a local area network
 * `ASP` - AppleTalk Session Layer is used request responses to commands, and to send async messages from a server to a clinet
* **Layer 4** Transport  
The transport layer is responsible for host to host communication services for applications.  
 * `TCP` - the Transmission Control Protocol is one of the main transport protocols of the Internet protocol suite. 
 * `UDP` - the User Datagram Protocol uses a simple connectionless transmission model.
 * `uTP` -
* **Layer 3** Network  
The Network layer is responsible for packet forwarding.  
 * `IPv4/IPv6` - The Internet Protocol is responible for delivering packets from source host to destination host
 * `ICMP` - The Internet Control Message Protocol is used to send messages to network devices like routers.
* **Layer 2** Data Link  
The Data Link layer is responsible for transfering data between adjacent networks.   
 * `Ethernet` - networking computers in local area newtorks
 * `IEEE 802.11` - wireless local area network  (wifi)
 * `PPP` - used to establish connection between two nodes on any network
* **Layer 1** Physical  
The Physical Layer consists of the newtorking hardware.
 * `Bluetooth` - wireless data over short distances
 * `USB` - physical usb port
 * `802.11 Physical Interface` - wifi hardware
 * `Ethernet Physical Interface` - ethernet hardware

# Transmission Control Protocol
* The TCP allows for connection oriented (stateful) transmission. (open connections with two way communication)
* TCP is used by the world wide web, FTP, SSH, E-mail, p2p sharing, and streeming media.
* The TCP protocol is optimized for accurate delivery rather than speed
* TCP segments data into packets and sends them across the network over IP
 * It keeps packets in order
 * It resends packets that get lost
 * It removes duplicate packets
 * It even trys to help maintain network conjestion

<!--links -->
[OSI model wiki]: https://en.wikipedia.org/wiki/OSI_model
[TCP wiki]: https://en.wikipedia.org/wiki/Transmission_Control_Protocol
[TCP connection walkthrough]: https://www.youtube.com/watch?v=F27PLin3TV0
