## Logs


```sh

~ # /usr/bin/anyka_ipc &
~ # [00:00:00.001|  info|   MEM  ] Memory Pool 1023KB.
....local anyka_config filesize: 5464

....anyka_config filesize: 5464

....danale filesize: 110

uid:uuid: [szjsa682f393a1544949],len:20
uid:auzkey: [IK8ZcGo10bXqrOQ2k9PjnqyqnAdhY2fg],len:32
uid:pid: [k1okbbubwccmdcaq],len:16
auto_day_night->ircut_line_mode: [2]
auto_day_night->driver_id: [6208]
auto_day_night->ircut_a_gpio_id: [80]
auto_day_night->ircut_b_gpio_id: [81]
auto_day_night->day_min: [1200]
auto_day_night->night_max: [800]
version: [1.33.50.69]
language: [USA]
other->mirror: [0]
other->ptzaddr_save: [1]
other->ptz_center: [0]
other->dev_type: [0]
other->ptz_en: [0]
other->qr_osd: [0]
other->voice_music: [3]
device name is null that show to route
device name: [TUYA_IPC]
other->addlv: [0]
other->ledbd_type: [1]
other->fled_level: [1]
other->tipdisable_restart: [1]
enlarge_difference is null that show to route
ptz->pan_direction: [1]
ptz->pan_deg: [355]
ptz->pan_mid: [175]
ptz->titl_direction: [0]
ptz->titl_deg: [70]
ptz->titl_mid: [50]
ptz->sleep_structure: [0]
ptz->sleep_limit_structure: [0]
v2_audio->AudioOutputGian: [13]
v2_audio->AudioInputGian: [17]
reserved memory 28311552/1b00000
[  MEMORY][1980-01-01 02:09:09 660] [ak_mem_dma_pool_activate:380] Get sys reserved memory [0x1b00000] bytes!
[  COMMON][1980-01-01 02:09:09 663] *******************************************************
[  COMMON][1980-01-01 02:09:09 664] 	 v33.50.69_build@Aug 18 2023_01:16:03
[  COMMON][1980-01-01 02:09:09 665] *******************************************************

wled_level=1
led mode:on
[  COMMON][1980-01-01 02:09:09 773] [ak_app_ipc_loop:331] ak_app_ipc_loop start ...
[  COMMON][1980-01-01 02:09:09 793] [lv_ak_app_default_system:438] *** default system config ***
get_property_data Bingo
[     ALL][1980-01-01 02:09:09 796] [start_ipc_app:1402] ipc start!
[      AI][1980-01-01 02:09:09 797] [ak_ai_open:839] ai version: libplat_ai V1.12.00
[      AI][1980-01-01 02:09:09 847] [ak_ai_set_gain:1292] set gain 3
adc get gain: 2
get_property_data Bingo
[      AI][1980-01-01 02:09:09 856] [init_audio_input:177] ai_freame_len 640!
[      AI][1980-01-01 02:09:09 857] [ak_ai_set_frame_length:1192] frame_length = 640
[      AI][1980-01-01 02:09:09 865] [init_audio_input:189] frame_interval 40!
[      AI][1980-01-01 02:09:09 866] [ak_ai_clear_frame_buffer:1237] this function is deprecated and no longer in use
[      AO][1980-01-01 02:09:09 868] [ak_ao_open:617] ao version: libplat_ao V1.12.03
[     VQE][1980-01-01 02:09:09 888] [ak_vqe_inner_open:2059] ak_vqe_inner_open entry...ai_vqe = (nil), ao_vqe = 0x90c034
[    ECHO][1980-01-01 02:09:09 897] ## --AudioFilter Version V1.15.16, Echo--
[    ECHO][1980-01-01 02:09:09 898] ## jitterBuf: 0x90c320
[    ECHO][1980-01-01 02:09:09 900] ## _SD_Echo_Open far_path (0x90a0e8)
[    ECHO][1980-01-01 02:09:09 929] ## Echo: load far_NR (disable)
[    ECHO][1980-01-01 02:09:09 931] ## Echo: load far_Volume
[    ECHO][1980-01-01 02:09:09 932] ## ASLC OPEN OK ena:1, lookAheadLen:48
[     VQE][1980-01-01 02:09:09 969] [ak_vqe_inner_open:2148] ak_vqe_inner_open exit...
[      AO][1980-01-01 02:09:09 970] [play_pcm_thread:284] thread id: 1582
-----dac set source
[      AO][1980-01-01 02:09:10 006] [ak_ao_open:648] leaved...
[      AO][1980-01-01 02:09:10 027] [ak_ao_set_gain:794] set gain 2
[    ECHO][1980-01-01 02:09:10 032] ## Echo: set far_Volume param
[      AO][1980-01-01 02:09:10 044] [ak_ao_set_volume:847] leave...
get_property_data Bingo
[      AO][1980-01-01 02:09:10 050] [ak_ao_clear_frame_buffer:766] this function is deprecated and no longer in use
[  COMMON][1980-01-01 02:09:10 052] [voice_tip_play:198] language =  USA,enbale:1,online:-1
[  COMMON][1980-01-01 02:09:10 053] play mp3=/usr/share/tuya_boot_up.mp3,status=1
[    ADEC][1980-01-01 02:09:10 072] open record file: /usr/share/tuya_boot_up.mp3 OK
other_cfg->voice_music:3****
[      AO][1980-01-01 02:09:10 073] [ak_ao_set_gain:794] set gain 3
[    ADEC][1980-01-01 02:09:10 078] [ak_adec_open:877] adec version: libmpi_adec V1.3.08
[    ADEC][1980-01-01 02:09:10 084] [set_decoder_input:408] decode type=2: MP3
[    ADEC][1980-01-01 02:09:10 085] [set_decoder_input:461] sample_rate=8000, channel_num=1, sample_bits=16
[ SD_ADEC][1980-01-01 02:09:10 087] ## -- AudioCodec Version V1.21.12, type: 2[ SD_ADEC][1980-01-01 02:09:10 088] , mp3 dec[ SD_ADEC][1980-01-01 02:09:10 089]  (V2 32bit)[ SD_ADEC][1980-01-01 02:09:10 090]  --
[ SD_ADEC][1980-01-01 02:09:10 092] ## MP3 dec V2 32bit open ok
[ SD_ADEC][1980-01-01 02:09:10 093] ## len_buf_in=20480, inbufminlen=4096
[ SD_ADEC][1980-01-01 02:09:10 095] ## _SD_Decode_Open OK (0x9128f0)
[ SD_ADEC][1980-01-01 02:09:10 096] ## inbufminlen is set to 128
[    ADEC][1980-01-01 02:09:10 117] [read_record_file:74]
	 thread create success
[    ADEC][1980-01-01 02:09:10 149] [ak_adec_send_stream_end:1242] called, decode free size=18031
[ SD_ADEC][1980-01-01 02:09:10 150] ## SetBufferMode: 1
[    ADEC][1980-01-01 02:09:10 150] [read_record_file:123] read_record_file exit
[      AO][1980-01-01 02:09:11 461] [ak_ao_wait_play_finish:754] this function is deprecated and no longer in use
[    ADEC][1980-01-01 02:09:11 463] [get_frame_then_play:230] get_frame_then_play exit
[      AO][1980-01-01 02:09:11 464] [ak_ao_set_gain:794] set gain 3
[    ADEC][1980-01-01 02:09:11 468] [ak_adec_close:1333] entry
[ SD_ADEC][1980-01-01 02:09:11 469] ## _SD_Buffer_Clear
[ SD_ADEC][1980-01-01 02:09:11 470] ## _SD_Decode_Close 0x9128f0
[    ADEC][1980-01-01 02:09:11 470] [ak_adec_close:1359] dec_ctrl.user_count=0
[      AO][1980-01-01 02:09:11 471] [ak_ao_set_gain:794] set gain 2
[    ADEC][1980-01-01 02:09:11 476] [ak_mp3_player:333] ----- mp3player exit -----
[      VI][1980-01-01 02:09:11 508] [ak_vi_open:388] register device, device id:[0]
[      VI][1980-01-01 02:09:11 509] new device
[      VI][1980-01-01 02:09:11 510] [vi_register_device:269] new dev=0x90d610
ispsdk_lib version:libplat_isp_sdk V7.0.01
open isp dev: /dev/isp-param-0
--- AK_ISP_sdk_init g_isp_fd[0]=11 ---
[      VI][1980-01-01 02:09:11 523] [vi_dev_open:215] vi device open DEV0!
[      VI][1980-01-01 02:09:11 524] [vi_dev_open:228] open sensor dev: /dev/v4l-subdev0
[      VI][1980-01-01 02:09:11 525] [vi_dev_open:238] --- vi_dev_open g_sensor_fdmis2006_cropcap bounds.width:1920, bounds.height:1080
[0]=12 ---
[      VI][1980-01-01 02:09:11 527] [vi_demis2006_cropcap bounds.width:1920, bounds.height:1080
v_open_td_chn:153] vi third chn device open CHN16!
[      VImis2006_s_crop 779, left:0, top:0, width:1920, height:1080
][1980-01-01 02:09:11 528] register vi device ok, dev_count=1
[mis2006_cropcap bounds.width:1920, bounds.height:1080
    VPSS][1980-01-01 02:09:11 540] [isp_open:84] dev:0 already opened!
[    VPSS][1980-01-01 02:09:11 547] [isp.conf]version: 4.1_mp2l_1117, sensor id: 0x2006, style id: 0
[    VPSS][1980-01-01 02:09:11 548] isp subfile 0, modify time: 2022-11-17 16:15:22
[    VPSS][1980-01-01 02:09:11 550] 0731 change ispconf
1117  ��ƫ�

[    VPSS][1980-01-01 02:09:11 551] isp subfile 1, modify time: 2023-8-10 20:19:21
[    VPSS][1980-01-01 02:09:11 552] 1.rgbgamma/contrast/wdr
5.4 exp/rgbgamma
8.22sharp\contrast\blc\weight

[    VPSS][1980-01-01 02:09:11 553] isp subfile 2, modify time: 2021-10-19 18:08:51
[    VPSS][1980-01-01 02:09:11 554] 0731 change ispconf

[    VPSS][19set_interface mipi
80-01-01 02:09:11 555] [check_file:413] check isp cfg: /usr/locaset_pclk_polar pclk edge is falling
l/H3b_mis2006_2023_8_17.conf OK
[    VPSS][1980-01-01 02:09:11 557] [isp_module_init:1529] chipid:0x20160101 !
[    VPSS][1980-01-01 02:09:11 561] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 02:09:11 563] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 02:09:11 564] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 02:09:11 565] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 02:09:11 566] [set_fps:236] set dev:0 fps:25 ok
[      VI][1980-01-01 02:09:11 584] vi_dev_get_sensor_crop 141, ret:0, w:1920, h:1080
[      VI][1980-01-01 02:09:11 585] [init_video:474] get dev res w:[1920]h:[1080]
[      VI][1980-01-01 02:09:11 617] init CROP succeedded! reset to CROP[1920, 1080]
[      VI][1980-01-01 02:09:11 635] [ak_vi_set_chn_attr:1102] success register vi channel[0]
[      VI][1980-01-01 02:09:11 637] [vi_dev_set_chn_res:499] chn id is[0], fd is:[13]
[      VI][1980-01-01 02:09:11 638] [vi_dev_set_chn_res:532] vi_dev_set_chn_res w:1920, h:1080
[      VI][1980-01-01 02:09:11 639] [vi_set_channel_attr:802] set vi channel[0] res w[1920] h[1080]
[      VI][1980-01-01 02:09:11 654] [ak_vi_set_chn_attr:1102] success register vi channel[1]
[      VI][1980-01-01 02:09:11 656] [vi_dev_set_chn_res:499] chn id is[1], fd is:[14]
[      VI][1980-01-01 02:09:11 657] [vi_dev_set_chn_res:532] vi_dev_set_chn_res w:640, h:360
[      VI][1980-01-01 02:09:11 658] [vi_set_channel_attr:802] set vi channel[1] res w[640] h[360]
[      VI][1980-01-01 02:09:11 672] [malloc_capture_buffers:1068] channel[0] alloc n_buffers:0, paddr:2172343232, vaddr:0xb536d3c0, length:3110400
[      VI][1980-01-01 02:09:11 673] [malloc_capture_buffers:1068] channel[0] alloc n_buffers:1, paddr:2175453632, vaddr:0xb56649c0, length:3110400
mis2006_read client:c39e7d00, addr:30
mis2006_read client:c39e7d00, addr:30
mis2006_read client:c39e7d00, addr:30
mis2006_read client:c39e7d00, addr:30
mis2006_sensor_get_parameter_func param:8199 not support
[      VI][1980-01-01 02:09:11 948] [vi_set_capture_on:1173] vi channel [0] is started!
[      VI][1980-01-01 02:09:11 949] [malloc_capture_buffers:1068] channel[1] alloc n_buffers:0, paddr:2178564032, vaddr:0xb595bfc0, length:345600
[      VI][1980-01-01 02:09:11 950] [malloc_capture_buffers:1068] channel[1] alloc n_buffers:1, paddr:2178909632, vaddr:0xb59b05c0, length:345600
[      VI][1980-01-01 02:09:11 952] [vi_set_capture_on:1173] vi channel [1] is started!
[      VI][1980-01-01 02:09:11 958] [ak_vi_enable_chn:1258] set channel [0] capture on
[      VI][1980-01-01 02:09:11 962] [ak_vi_enable_chn:1258] set channel [1] capture on
[     OSD][1980-01-01 02:09:11 985] [osd_thread:819] thread id: 1589
[     OSD][1980-01-01 02:09:11 987] [set_osd_buffer:605] chn=0, ak_osd_get_max_rect OK, max_w: 1024 max_h: 1080
[     DRV][1980-01-01 02:09:12 346] ircut init OK, mode 2 line.
[     OSD][1980-01-01 02:09:12 439] [set_osd_buffer:605] chn=1, ak_osd_get_max_rect OK, max_w: 640 max_h: 360
[    VPSS][1980-01-01 02:09:13 125] [isp_switch:259] switching isp mode -> day
[    VPSS][1980-01-01 02:09:13 130] [isp.conf]version: 4.1_mp2l_1117, sensor id: 0x2006, style id: 0
[    VPSS][1980-01-01 02:09:13 132] isp subfile 0, modify time: 2022-11-17 16:15:22
[    VPSS][1980-01-01 02:09:13 133] 0731 change ispconf
1117  ��ƫ�

[    VPSS][1980-01-01 02:09:13 134] isp subfile 1, modify time: 2023-8-10 20:19:21
[    VPSS][1980-01-01 02:09:13 135] 1.rgbgamma/contrast/wdr
5.4 exp/rgbgamma
8.22sharp\contrast\blc\weight

[    VPSS][1980-01-01 02:09:13 137] isp subfile 2, modify time: 2021-10-19 18:08:51
[    VPSS][1980-01-01 02:09:13 138] 0731 change ispconf

[    VPSS][1980-01-01 02:09:13 140] [check_file:413] check isp cfg: /usr/local/H3b_mis2006_2023_8_17.conf OK
[    VPSS][1980-01-01 02:09:13 145] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 02:09:13 146] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 02:09:13 147] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 02:09:13 149] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 02:09:13 152] [set_fps:236] set dev:0 fps:25 ok
[    VPSS][1980-01-01 02:09:13 158] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 02:09:13 159] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 02:09:13 161] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 02:09:13 162] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 02:09:13 164] [set_fps:236] set dev:0 fps:25 ok
[  COMMON][1980-01-01 02:09:13 219] [lv_service_load_ident_info:374] [dev_ident_info]
,len:17
[  COMMON][1980-01-01 02:09:13 221] [lv_service_load_ident_info:384] get uuid,auzka,pid
[      VI][1980-01-01 02:09:13 223] [ak_set_ps_status:983] ----Day mode
[      VI][1980-01-01 02:09:13 225] [switch_day_or_night_first_init:666] ---####------3------------->>>>>>(switch day_night)cur_status=0
[      VI][1980-01-01 02:09:13 226] [set_video_day_night:559] camera->day_ctrl:2
irswitchday:0
[      VI][1980-01-01 02:09:13 227] [set_video_day_night:565] now set to day
[    VPSS][1980-01-01 02:09:13 229] [change_fps_pthread:492] thread id: 1609
irled_level=1
sh /usr/sbin/ir_led.sh off[    VPSS][1980-01-01 02:09:14 087] [isp_switch:259] switching isp mode -> day
[    VPSS][1980-01-01 02:09:14 094] [isp.conf]version: 4.1_mp2l_1117, sensor id: 0x2006, style id: 0
[    VPSS][1980-01-01 02:09:14 095] isp subfile 0, modify time: 2022-11-17 16:15:22
[    VPSS][1980-01-01 02:09:14 097] 0731 change ispconf
1117  ��ƫ�

[    VPSS][1980-01-01 02:09:14 098] isp subfile 1, modify time: 2023-8-10 20:19:21
[    VPSS][1980-01-01 02:09:14 099] 1.rgbgamma/contrast/wdr
5.4 exp/rgbgamma
8.22sharp\contrast\blc\weight

[    VPSS][1980-01-01 02:09:14 101] isp subfile 2, modify time: 2021-10-19 18:08:51
[    VPSS][1980-01-01 02:09:14 102] 0731 change ispconf

[    VPSS][1980-01-01 02:09:14 104] [check_file:413] check isp cfg: /usr/local/H3b_mis2006_2023_8_17.conf OK
[    VPSS][1980-01-01 02:09:14 109] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 02:09:14 110] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 02:09:14 111] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 02:09:14 113] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 02:09:14 114] [set_fps:236] set dev:0 fps:25 ok
[    VPSS][1980-01-01 02:09:14 120] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 02:09:14 122] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 02:09:14 123] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 02:09:14 126] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 02:09:14 127] [set_fps:236] set dev:0 fps:25 ok
[00:00:04.776|  info|  TUYA  ] TUYA UUid: szjsa682f393a1544949
[00:00:04.776|  info|  TUYA  ] TUYA authkey: IK8ZcGo10bXqrOQ2k9PjnqyqnAdhY2fg
[00:00:04.776|  info|  TUYA  ] TUYA pid: k1okbbubwccmdcaq
[  COMMON][1980-01-01 02:09:14 137] IPC_APP_Init_SDK start
Dbg:SDK Version:< TUYA IOT SDK V:5.3.26 BS:40.00_PT:2.2_LAN:3.4_CAD:1.0.4_CD:1.0.0 >
< BUILD AT:2022_08_15_14_46_03 BY ci_manage FOR ty_ipc_wr_wl_linux_sdk AT arm-anykav500-linux-uclibcgnueabi-gcc-4.9.4 >
IOT DEFS < WIFI_GW:1 DEBUG:1 KV_FILE:1 SHUTDOWN_MODE:1 LITTLE_END:1 TLS_MODE:4 ENABLE_CLOUD_OPERATION:1 OPERATING_SYSTEM:100 ENABLE_SYS_RPC:0 RELIABLE_TRANSFER:0 ENABLE_LAN_ENCRYPTION:1 ENABLE_LAN_LINKAGE:0 ENABLE_LAN_DEV:0 >


[00:00:04.778|  info|  TUYA  ] AK FW Version: 33.50.69
Dbg:channel_enable:1 1 0
Dbg:fps:15
Dbg:gop:60
Dbg:bitrate:1536 kbps
Dbg:video_main_width:1920
Dbg:video_main_height:1080
Dbg:video_freq:90000
Dbg:video_codec:4
Dbg:audio_codec:101
Dbg:audio_sample:8000
Dbg:audio_databits:16
Dbg:audio_channel:0
[01-01 18:12:15 TUYA D][tuya_ws_db.c:450] init fs. Path: /etc/config/
[01-01 18:12:15 TUYA I][kv_storge.c:45] Init Kvs With File:/etc/config/
[01-01 18:12:15 TUYA D][simplekv.c:945] path:/etc/config/
[01-01 18:12:15 TUYA D][simplekv.c:981] get encrypt_key[US�ykR�]
[01-01 18:12:15 TUYA D][simplekv.c:999] normal file exist. bak file not exist
[01-01 18:12:15 TUYA D][simplekv.c:310] size in: 0 and final: 28700 And mag_rec_max: 512
[01-01 18:12:15 TUYA D][simplekv.c:325] create data hd success
[01-01 18:12:15 TUYA D][simplekv.c:1055] read from normal file
[01-01 18:12:15 TUYA D][simplekv.c:765] curr db is V2. No need to upgrade
[01-01 18:12:15 TUYA D][simplekv.c:555] head check success
[01-01 18:12:15 TUYA D][simplekv.c:658] read and check head success
[01-01 18:12:15 TUYA D][simplekv.c:1075] read from normal file success
[01-01 18:12:15 TUYA I][uni_thread.c:228] thread_create name:sys_timer,stackDepth:4096,totalstackDepth:4096,priority:5
[01-01 18:12:15 TUYA D][simplekv.c:1111] init from normal file success.
[01-01 18:12:15 TUYA I][mqc_app.c:350] mqc app init ...
[01-01 18:12:15 TUYA I][uni_thread.c:228] thread_create name:cmmod,stackDepth:4096,totalstackDepth:8192,priority:4
[01-01 18:12:15 TUYA D][mqc_app.c:144] mq_pro:5 cnt:1
[01-01 18:12:15 TUYA D][mqc_app.c:144] mq_pro:31 cnt:2
[01-01 18:12:15 TUYA D][svc_online_log.c:295] svc online log init success
[01-01 18:12:15 TUYA E][log_seq.c:863] open err
Dbg:tuya_ipc_sdk_mqtt_online_proc thre[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
ad start success

[01-01 18:12:15 TUYA I][uni_thread.c:228] t[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
hread_create name:wk_th-0,stackDepth:5120,totalstackDepth:13312,priority:3
[01-01 18:12:15 TUYA D][uni_thread.c:250] Thread:sy[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
s_timer Exec Start. Set to Running Stat
[01-01 18:12:15 TUYA D][uni_thread.c:250] Thread:cmmod Exec Start. Set to Running Stat
[01-01 18:12:15 TUYA D][uni_thread.c:250] Thread:wk_th-0 Exec[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
 Start. Set to Running Stat
Dbg:init ring buffer Channel:0 Enable:1
Dbg:video_bitrate 1536, video_fps 15
Dbg:init ring buffer success. channel:0
Dbg:init ring buffer Channel:1 Enable:1
Dbg:video_bitrate 512, video_fps 15
Dbg:init ring buffer su[atbm_log]:wlan0: deauthenticating from 4a:ab:dd:38:91:2b by local choice (reason=3)
ccess. channel:1
Dbg:init ring buffer Channel:2 Enable:0
Dbg:init ring buffer Channel:3 Enable:0
Dbg:init ring buffer Channel:4 Enable:0
Dbg:init ring buffer Channel:5 Enable:0
Dbg:i[atbm_log]:3DISABLE_KEY:idx(1),key_type(4),if_id(0)
nit ring buffer Channel:6 Enable:0
Dbg:init ring buffer Channel:7 Enable:0
Dbg:init ring buffer Channel:8 Enable:0
Dbg:init ring buffer Channel:9 Enable:1
Dbg:audio_sample 8000, audio_databits 16, audio_fps 25
Dbg:init ring buffer success. channe[atbm_log]:[TX]:[0]:deatuhen[4a:ab:dd:38:91:2b]
l:9
Dbg:init ring buffer Channel:10 Enable:0
Dbg:init ring b[atbm_log]:3DISABLE_KEY:idx(0),key_type(5),if_id(0)
uffer Channel:11 Enable:0
Dbg:init ring buffer Channel:12 Enable:0
Dbg:init ring buffer Channel:13 Enable:0
Dbg:init ring buffer Channel:14 Enable:0
Dbg:init ring buffer Channel:15 Enable:0
WIFI Get MAC 64-68-FB-B4-3C-16
Set Country Code:(null)
WIFI Get MAC 00-00-00-00-00-00
Dbg:tuya ipc sdk start is c[atbm_log]:[STA]:unjoin
omplete

[Application][1980-01-01 02:09:14 313] **********************************************
Exec Cmd:ifconfig wlan0 up
[Application][1980-01-01 02:09:14 325] ** venc version: libmpi_venc V1.0.29 ****venc lib_version: AKV Encoder Lib V3.0.31
[Application][1980-01-01 02:09:14 334] *****************************[atbm_log]:atbm_set_pm:if_id(0) is not assco
*****************
[    VENC][1980-01-01 02:09:14 347] [v[atbm_log]:[STA] Unjoin.
ideo_encode_init:682] main channel net, main_enc_type=2
find name video-encoder uio index 0
[    VENC][1980-01-01 02:09:14 350] [venc_cb_init_reg:302] mapping, start: 0x20020000, len: 0x00010000
[     DRV][1980-01-01 02:09:14 352] Found uio0 mapping for 0x20020000
[    VENC][1980-01-01 02:09:14 355] [v[atbm_log]:wlan0:free authen bss ++
enc_cb_init_reg:322] init venc reg, va: 0xb421e000, pa: 0x20020000, len: 0x00010000
[AKV_VENC][1980-01-01 02:09:14 357] --AKV Encoder Lib V3.0.31--
Exec Cmd:ifconfig wlan0 down
[AKV_VENC][1980-01-01 02:09:14 488] ## AKV_Encoder_Init OK!
[   [atbm_log]:atbm_remove_interface:priv->if_id(0)
 VENC][1980-01-01 02:09:14 522] [ak_venc_open:1301] open count = 1
[    VENC][1980-01-01 02:09:14 537] [ak_venc_open:1348] we don't use config for encode
[AKV_VENC][1980-01-01 02:09:14 578] ## AKV_Encoder_Open OK, handle=0x91e688, stream buf size = 512000
[AKV_VENC][1980-01-01 02:09:14 587] ##	eProfile       = HEVC_MAIN
[AKV_VENC][1980-01-01 02:09:14 600] ##	FrameWidth     = 1920
[AKV_VENC][1980-01-01 02:09:14 612] ##	FrameHeight    = 1080
[AKV_VENC][1980-01-01 02:09:14 614] ##	eRCMode        = VBR
[AKV_VENC][1980-01-01 02:09:14 616] ##	eChromaMode    = CHROMA_4_2_0
[AKV_VENC][1980-01-01 02:09:14 621] ##	TargetBitRate  = 700
[AKV_VENC][1980-01-01 02:09:14 622] ##	MaxBitRate     = 900
[AKV_VENC][1980-01-01 02:09:14 623] ##	EncFrameRate   = 15
[AKV_VENC][1980-01-01 02:09:14 624] ##	InitialSliceQP = 43
[AKV_VENC][1980-01-01 02:09:14 631] ##	MinQP          = 38(38)
[AKV_VENC][1980-01-01 02:09:14 642] ##	MaxQP          = 49(40)
[AKV_VENC][1980-01-01 02:09:14 644] ##	GopLength      = 60
[AKV_VENC][1980-01-01 02:09:14 645] ##	GopNumB        = 0
[AKV_VENC][1980-01-01 02:09:14 651] ##	NumSlices      = 1
[AKV_VENC][1980-01-01 02:09:14 652] ##	SmartMode      = DISABLE
[AKV_VENC][1980-01-01 02:09:14 654] ##	SmartGopLength = 0
[AKV_VENC][1980-01-01 02:09:14 655] ##	SmartQuality   = 0
[AKV_VENC][1980-01-01 02:09:14 656] ##	SmartStaticValue = 550
[AKV_VENC][1980-01-01 02:09:14 662] ##	MaxPictureSize = 0
[AKV_VENC][1980-01-01 02:09:14 681] ##	EncLevel       = 50
[AKV_VENC][1980-01-01 02:09:14 682] ##	QuantTableLevel = DEFAULT
[AKV_VENC][1980-01-01 02:09:14 694] ## AKV: L2 Cache Enabled.
[    VENC][1980-01-01 02:09:14 695] [ak_venc_open:1363] Video encoder open success
[    VENC][1980-01-01 02:09:14 697] [ak_venc_open:1373]
	params: w=1920, h=1080, qpmin=38, qpmax=49,bps=700, gop=60, fps=15, profile=33554433
Exec Cmd:iwconfig wlan0 mode Managed
Exec Cmd:ifconfig wlan0 up
[atbm_log]:atbm_setup_mac:addr(60dc81899812)
[atbm_log]:3 !!! atbm_vif_setup_params: enabling priv
[atbm_log]:[STA] Interface ID:0 of type:2 added
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:br0_netdev_open()-1199: dev_get_by_name(br0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[    VENC][1980-01-01 02:09:15 034] [ak_venc_open:1417] exit....[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)

[AKV_VENC][1980-01-01 02:09:15 036] ## MinIQP must be greater than or equal to MinQP, it will be set to MinQP!!
[AKV_VENC][1980-01-01 02:09:15 046] ## AKV_Encoder_Adjust_IFrameSize OK, han[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
dle=0x91e688, MinIQP = 38, MaxIQP = 45, MinFrameSize = 40, MaxFrameSize = 120
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[Application][1980-01-01 02:09:15 078] **********************************************
[Application][1980-01-01 02:09:15 085] ** venc version: libmpi_venc V1.0.29 ****venc lib_version: AKV Encoder Lib V3.0.31
[Application][1980-01-01 02:09:15 087] **********************************************
WIFI Set Mode 2
[    VENC][1980-01-01 02:09:15 094] [video_encode_init:724] sub channel net, sub_enc_type=0
[    VENC][1980-01-01 02:09:15 099] [ak_venc_open:1301] open count = 2
[    VENC][1980-01-01 02:09:15 106] [ak_venc_open:1348] we don't use config for encode
[AKV_VENC][1980-01-01 02:09:15 145] ## AKV_Encoder_Open OK, handle=0x967318, stream buf size = 86400
[AKV_VENC][1980-01-01 02:09:15 163] ##	eProfile       = AVC_MAIN
[AKV_VENC][1980-01-01 02:09:15 165] ##	FrameWidth     = 640
[AKV_VENC][1980-01-01 02:09:15 166] ##	FrameHeight    = 360
[AKV_VENC][1980-01-01 02:09:15 167] ##	eRCMode        = VBR
[AKV_VENC][1980-01-01 02:09:15 180] ##	eChromaMode    = CHROMA_4_2_0
[AKV_VENC][1980-01-01 02:09:15 190] ##	TargetBitRate  = 600
[AKV_VENC][1980-01-01 02:09:15 192] ##	MaxBitRate     = 800
[AKV_VENC][1980-01-01 02:09:15 193] ##	EncFrameRate   = 15
[AKV_VENC][1980-01-01 02:09:15 194] ##	InitialSliceQP = 37
[AKV_VENC][1980-01-01 02:09:15 196] ##	MinQP          = 30(30)
[AKV_VENC][1980-01-01 02:09:15 197] ##	MaxQP          = 45(40)
[AKV_VENC][1980-01-01 02:09:15 198] ##	GopLength      = 60
[AKV_VENC][1980-01-01 02:09:15 200] ##	GopNumB        = 0
[AKV_VENC][1980-01-01 02:09:15 201] ##	NumSlices      = 1
[AKV_VENC][1980-01-01 02:09:15 210] ##	SmartMode      = DISABLE
[AKV_VENC][1980-01-01 02:09:15 220] ##	SmartGopLength = 0
[AKV_VENC][1980-01-01 02:09:15 221] ##	SmartQuality   = 0
[AKV_VENC][1980-01-01 02:09:15 222] ##	SmartStaticValue = 550
[AKV_VENC][1980-01-01 02:09:15 222] ##	MaxPictureSize = 0
[AKV_VENC][1980-01-01 02:09:15 223] ##	EncLevel       = 50
[AKV_VENC][1980-01-01 02:09:15 224] ##	QuantTableLevel = DEFAULT
[atbm_log]:atbm_hw_scan:if_id(0)
[AKV_VENC][1980-01-01 02:09:15 304] ## AKV: L2 Cache Enabled.
[    VENC][1980-01-01 02:09:15 305] [ak_venc_open:1363][atbm_log]:atbm_hw_scan:scan, delay suspend
 Video encoder open success
[    VENC][1980-01-01 02:09:15 3[atbm_log]:scan start band(0),(14)
06] [ak_venc_open:1373]
	params: w=640, h=360, qpmin=30, qpmax=45,bps=600, gop=60, fps=15, profile=16777293
[    VENC][1980-01-01 02:09:15 519] [ak_venc_open:1417] exit....
[AKV_VENC][1980-01-01 02:09:15 523] ## MinFrameSize must be greater than or equal to 1/5 of MaxFrameSize, MinFrameSize will be adjusted to 1/5 of MaxFrameSize!!
[AKV_VENC][1980-01-01 02:09:15 533] ## AKV_Encoder_Adjust_IFrameSize OK, handle=0x967318, MinIQP = 36, MaxIQP = 43, MinFrameSize = 12, MaxFrameSize = 60
[    VENC][1980-01-01 02:09:15 576] [ak_venc_open:1301] open count = 3
[    VENC][1980-01-01 02:09:15 604] [ak_venc_open:1348] we don't use config for encode
[AKV_VENC][1980-01-01 02:09:15 615] ## Adjust jpeg MinQP to 1, MaxQP to 100
[AKV_VENC][1980-01-01 02:09:15 620] ## AKV_Encoder_Open OK, handle=0x96c0e8, stream buf size = 86400
[AKV_VENC][1980-01-01 02:09:15 624] ##	eProfile       = JPEG
[AKV_VENC][1980-01-01 02:09:15 633] ##	FrameWidth     = 640
[AKV_VENC][1980-01-01 02:09:15 649] ##	FrameHeight    = 360
[AKV_VENC][1980-01-01 02:09:15 650] ##	eRCMode        = VBR
[AKV_VENC][1980-01-01 02:09:15 652] ##	eChromaMode    = CHROMA_4_2_0
[AKV_VENC][1980-01-01 02:09:15 653] ##	TargetBitRate  = 600
[AKV_VENC][1980-01-01 02:09:15 655] ##	MaxBitRate     = 800
[AKV_VENC][1980-01-01 02:09:15 656] ##	EncFrameRate   = 15
[AKV_VENC][1980-01-01 02:09:15 657] ##	InitialSliceQP = 37
[AKV_VENC][1980-01-01 02:09:15 659] ##	MinQP          = 30
[AKV_VENC][1980-01-01 02:09:15 660] ##	MaxQP          = 45
[AKV_VENC][1980-01-01 02:09:15 683] ##	GopLength      = 60
[AKV_VENC][1980-01-01 02:09:15 685] ##	GopNumB        = 0
[AKV_VENC][1980-01-01 02:09:15 686] ##	NumSlices      = 1
[AKV_VENC][1980-01-01 02:09:15 687] ##	SmartMode      = DISABLE
[AKV_VENC][1980-01-01 02:09:15 689] ##	SmartGopLength = 0
[AKV_VENC][1980-01-01 02:09:15 690] ##	SmartQuality   = 0
[AKV_VENC][1980-01-01 02:09:15 691] ##	SmartStaticValue = 550
[AKV_VENC][1980-01-01 02:09:15 693] ##	MaxPictureSize = 0
[AKV_VENC][1980-01-01 02:09:15 694] ##	EncLevel       = 50
[AKV_VENC][1980-01-01 02:09:15 705] ##	QuantTableLevel = DEFAULT
[AKV_VENC][1980-01-01 02:09:15 706] ## AKV: L2 Cache Disabled.
[    VENC][1980-01-01 02:09:15 708] [ak_venc_open:1363] Video encoder open success
[    VENC][1980-01-01 02:09:15 709] [ak_venc_open:1373]
	params: w=640, h=360, qpmin=30, qpmax=45,bps=600, gop=60, fps=15, profile=67108864
[    VENC][1980-01-01 02:09:15 906] [ak_venc_open:1417] exit....
[      AI][1980-01-01 02:09:15 910] [ak_ai_print_filter_info:816] filter version: AudioFilter Version V1.15.16
[    AENC][1980-01-01 02:09:15 911] [ak_aenc_print_codec_info:1077] AudioCodec version: AudioCodec Version V1.21.12
[00:00:06.552|debug2|  TUYA  ] Enter Audio Encode
[    AENC][1980-01-01 02:09:15 913] [ak_aenc_open:1099] aenc version: libmpi_aenc V1.2.02
[00:00:06.554|debug2|  TUYA  ] Enter Audio Encode
[APP_VIDEO][1980-01-01 02:09:15 916] [app_video_vi_stream_th:1026] [main_ch]ch=0....video get stream wait... !!!!!![    AENC][1980-01-01 02:09:15 932] [ak_aenc_open:1099] aenc version: libmpi_aenc V1.2.02
[    AENC][1980-01-01 02:09:15 938] [frame_buffer_init:476] index=5, pcm_frame_len=640
[    AENC][1980-01-01 02:09:15 939] [aenc_rb_init:169] init rb_size=6400 ring buffer OK
[ SD_AENC][1980-01-01 02:09:15 946] ## -- AudioCodec Version V1.21.12, type: 17[    AENC][1980-01-01 02:09:15 947] [start_encode_ctrl:982] ######--read_len =640
[    AENC][1980-01-01 02:09:15 950] [start_encode_ctrl:986] --------------- ai_handle_id =0
[ SD_AENC][1980-01-01 02:09:15 959] , g711 enc[ SD_AENC][1980-01-01 02:09:15 960]  --
[ SD_AENC][1980-01-01 02:09:15 963] ## _SD_Encode_Open OK (0x99f220)
[      AI][1980-01-01 02:09:16 032] [capture_pcm_thread:539] thread id: 1653
[     VQE][1980-01-01 02:09:16 041] [ak_vqe_inner_open:2059] ak_vqe_inner_open entry...ai_vqe = 0x909fec, ao_vqe = (nil)
[    ECHO][1980-01-01 02:09:16 048] ## --AudioFilter Version V1.15.16, Echo--
[    ECHO][1980-01-01 02:09:16 049] ## jitterBuf: 0x99c1c8
[    ECHO][1980-01-01 02:09:16 051] ## _SD_Echo_Open near_path (0x99f4e8)
[    ECHO][1980-01-01 02:09:16 086] ## Echo: load NR (enable)
[    ECHO][1980-01-01 02:09:16 088] ## Echo: load near_Volume
[    ECHO][1980-01-01 02:09:16 090] ## ASLC OPEN OK ena:1, lookAheadLen:48
[    ECHO][1980-01-01 02:09:16 090] ## Echo: set VAD param (disable)
[    ECHO][1980-01-01 02:09:16 155] ## Echo: load AEC (disable)
[     VQE][1980-01-01 02:09:16 156] [loopback_start:1304] aec_enable =0, user->ai_open=1
 [     VQE][1980-01-01 02:09:16 157] [ak_vqe_inner_open:2148] ak_vqe_inner_open exit...
[     VQE][1980-01-01 02:09:16 160] [ak_vqe_inner_set_ai_jitterbuf_upperBound:3371] osal_vqe_get_dac entry...
[    ECHO][1980-01-01 02:09:16 161] ## Echo: set near_JitterBuf param
[     VQE][1980-01-01 02:09:16 165] [ak_vqe_inner_set_ai_jitterbuf_upperBound:3392] exit...
[    AENC][1980-01-01 02:09:16 164] [ak_aenc_stream_mode_request_stream:1314] init group_index=5, user=0x99c4c8, req_nr=0, ref=1
[    AENC][1980-01-01 02:09:16 172] [frame_buffer_init:476] index=1, pcm_frame_len=640
[    AENC][1980-01-01 02:09:16 173] [ak_aenc_stream_mode_request_stream:1314] init group_index=1, user=0x99c4b0, req_nr=0, ref=1
[    AENC][1980-01-01 02:09:16 174] [audio_encode_thread:946] thread id: 1655
[    AENC][1980-01-01 02:09:16 176] [read_pcm_thread:912] thread id: 1654
[    AENC][1980-01-01 02:09:16 177] [read_pcm_thread:916] sleep...
[    AENC][1980-01-01 02:09:16 179] [read_pcm_thread:922] aenc_stream_ctrl.read_flag=1
[atbm_log]:hw_priv->scan.status 0
[atbm_log]:atbm_scan_work:end(0)
 Reach Max Record
WIFI Scan AP Begin
index:0 bssid:78-8D-AF-0F-34-A4 RSSI:61 SSID:Rosete
index:1 bssid:4E-58-30-A5-7D-96 RSSI:64 SSID:coolkid
index:2 bssid:9C-57-BC-18-F3-23 RSSI:46 SSID:81eef6
index:3 bssid:9C-57-BC-18-F3-26 RSSI:53 SSID:FinImp
index:4 bssid:0C-AC-8A-6F-09-ED RSSI:81 SSID:coolkid
index:5 bssid:C4-F1-74-8A-38-67 RSSI:81 SSID:ESCOBAR
index:6 bssid:C0-6F-98-07-03-26 RSSI:74 SSID:NIN
index:7 bssid:64-66-24-F8-A9-06 RSSI:83 SSID:BELL426
index:8 bssid:AC-84-C9-F5-D3-46 RSSI:73 SSID:Winon
index:9 bssid:4A-AB-DD-38-91-2B RSSI:88 SSID:starship
index:10 bssid:F6-E2-C6-1B-9E-95 RSSI:61 SSID:raghavgupta.ca
index:11 bssid:0C-AC-8A-A3-E8-6B RSSI:42 SSID:GEGAGEDIGEDAGEDAGO!?
index:12 bssid:60-F4-19-D7-24-06 RSSI:60 SSID:emma
index:13 bssid:60-F4-19-D7-24-0F RSSI:60 SSID:emm
index:14 bssid:E8-D3-EB-A5-51-86 RSSI:60 SSID:Pringle
index:15 bssid:78-8D-AF-1E-2B-D0 RSSI:53 SSID:BELL902
index:16 bssid:7A-8D-AF-1E-2B-D3 RSSI:54 SSID:
index:17 bssid:78-8D-AF-18-BC-E0 RSSI:66 SSID:BELL350
index:18 bssid:F4-E2-C6-6B-9E-95 RSSI:59 SSID:
index:19 bssid:9C-57-BC-B5-2F-C9 RSSI:46 [atbm_log]:wlan0:free authen bss ++
SSID:
WIFI Scan AP End
Exec Cmd:ifconfig wlan0 up
Exec Cm[atbm_log]:atbm_remove_interface:priv->if_id(0)
d:ifconfig wlan0 down
Exec Cmd:iwconfig wlan0 mode Master
Error for wireless request "Set Mode" (8B06) :
    SET failed on device wlan0 ; Invalid argument.
Exec Cmd:ifconfig wlan0 up
[atbm_log]:atbm_setup_mac:addr(60dc81899812)
[atbm_log]:3 !!! atbm_vif_setup_params: enabling priv
[atbm_log]:[STA] Interface ID:0 of type:2 added
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:br0_netdev_open()-1199: dev_get_by_name(br0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
WIFI Set Mode 3
Exec Cmd:iwconfig wlan0 channel 6
Error for wireless request "Set Frequency" (8B04) :
    SET failed on device wlan0 ; Device or resource busy.
WIFI Set Channel:6
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:atbm_hw_scan:if_id(0)
[atbm_log]:atbm_hw_scan:scan, delay suspend
[atbm_log]:scan start band(0),(14)
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support


```



## MORE LOGS
```sh
gethostbyname_r error: Unknown host
[12-10 09:42:30 TUYA E][uni_network.c:360] fail to gethostbyname 101

[12-10 09:42:30 TUYA E][mqtt_client.c:1409] resolve mqtt host Fail:m1-us.iotbing.com
[      VI][2024-12-10 09:42:29 639] read_AD:401, day_leve: 1200, night_level:800,-----level:1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Get Conn AP RSSI:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-10 09:42:31 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=101
[12-10 09:42:31 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v1/dns_query (-7)
[12-10 09:42:31 TUYA E][uni_network.c:78] custom dns fail.m1-us.iotbing.com
[12-10 09:42:31 TUYA E][mqtt_client.c:1409] resolve mqtt host Fail:m1-us.iotbing.com
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
sendto: Network is unreachable
sendto: Network is unreachable
sendto: Network is unreachable
sendto: Network is unreachable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Get Conn AP RSSI:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
gethostbyname_r error: Unknown host
[12-10 09:42:32 TUYA E][uni_network.c:360] fail to gethostbyname 101

[12-10 09:42:32 TUYA E][mqtt_client.c:1409] resolve mqtt host Fail:m1-us.iotbing.com
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Get Conn AP RSSI:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][2024-12-10 09:42:32 752] read_AD:357, day_leve: 1200, night_level:800,-----level:1
[12-10 09:42:33 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=101
[12-10 09:42:33 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v1/dns_query (-7)
[12-10 09:42:33 TUYA E][uni_network.c:78] custom dns fail.m1-us.iotbing.com
[12-10 09:42:33 TUYA E][mqtt_client.c:1409] resolve mqtt host Fail:m1-us.iotbing.com
killall: check_network_status.sh: no process killed
system: Success
killall: check_network_status.sh: no process killed
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Get Conn AP RSSI:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
gethostbyname_r error: Unknown host
[12-10 09:42:34 TUYA E][uni_network.c:360] fail to gethostbyname 101

[12-10 09:42:34 TUYA E][mqtt_client.c:1409] resolve mqtt host Fail:m1-us.iotbing.com
BusyBox v1.30.1 (2022-09-01 10:16:12 UTC) multi-call binary.

Usage: ping [OPTIONS] HOST
sh: =: argument expected
ping: sendto: Network is unreachable
sh: =: argument expected
ping: sendto: Network is unreachable
DNS is unreachable
!!!GDNS_time_count 2,time_count：1,T:9
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Get Conn AP RSSI:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-10 09:42:35 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=101
[12-10 09:42:35 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v1/dns_query (-7)
[12-10 09:42:35 TUYA E][uni_network.c:78] custom dns fail.m1-us.iotbing.com
[12-10 09:42:35 TUYA E][mqtt_client.c:1409] resolve [atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
mqtt host Fail:m1-us.iotbing.com
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-10 09:42:35 TUYA E][log_seq.c:152] ret:-1027
```


## Logs

```sh
Qrtips_Proc Finish
Exec Cmd:ifconfig wlan0 up
Exec Cmd:ifconfig wlan0 down
[atbm_log]:atbm_remove_interface:priv->if_id(0)
Exec Cmd:iwconfig wlan0 mode Managed
[atbm_log]:[wlan0] change to [2]
[atbm_log]:[wlan0] has been disabled
Exec Cmd:ifconfig wlan0 up
[atbm_log]:atbm_setup_mac:addr(60dc81899812)
[atbm_log]:3 !!! atbm_vif_setup_params: enabling priv
[atbm_log]:[STA] Interface ID:0 of type:2 added
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:br0_netdev_open()-1199: dev_get_by_name(br0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
WIFI Set Mode 2
[01-01 18:16:14 TUYA E][wifi_netcfg_frame_transporter.c:431] timer is not run,wait
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Exec Cmd:ifconfig wlan0 up
Exec Cmd:ifconfig wlan0 down
[atbm_log]:wlan0:free authen bss ++
[atbm_log]:atbm_remove_interface:priv->if_id(0)
Exec Cmd:iwconfig wlan0 mode Managed
Exec Cmd:ifconfig wlan0 up
[atbm_log]:atbm_setup_mac:addr(60dc81899812)
[atbm_log]:3 !!! atbm_vif_setup_params: enabling priv
[atbm_log]:[STA] Interface ID:0 of type:2 added
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:br0_netdev_open()-1199: dev_get_by_name(br0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
WIFI Set Mode 2
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
-[tuya_adapter_wifi_station_connect]-----#######--------------->>>>>>>>>>
curr event:2
[  COMMON][1980-01-01 00:05:23 671] [voice_tip_play:198] language =  USA,enbale:1,online:-1
[00:04:05.507|  warn|        ] "tuya_ipc_system_control_demo.c:541" Condition ( "strlen(mp3_location) != 0" ) Failed.
curr event:3
[  COMMON][1980-01-01 00:05:24 682] [voice_tip_play:198] language =  USA,enbale:1,online:-1
[00:04:06.518|  warn|        ] "tuya_ipc_system_control_demo.c:541" Condition ( "strlen(mp3_location) != 0" ) Failed.
wled_level=1
led mode:blink
blink_type=
sh: doubleblink: unknown operand
blink--------
wled_level=1
led mode:bledblink
blink_type=
sh: doubleblink: unknown operand
blink--------
get wifi info ...
[00:04:06.829|  warn|  TUYA  ] hwl_wf_station_connect...

[00:04:06.829|  warn|  TUYA  ]  sh /usr/sbin/lv_wifi_connect.sh "starship" "mypassword"  &

[00:04:06.868|  warn|  TUYA  ] wif connect.end..

[  THREAD][1980-01-01 00:05:25 035] pthread_create:Wait_net_thread create
-[tuya_adapter_wifi_station_connect],return OPRT_COM_ERROR
[01-01 18:16:16 TUYA E][tuya_devos_netlink.c:309] wf connect err:-1, ssid:starship
[01-01 18:16:16 TUYA E][log_seq.c:459] ret:-1027
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
****************************common_wait_net*********************[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
********41
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
show device name:null to route
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:atbm_hw_scan:if_id(0)
[atbm_log]:atbm_hw_scan:scan, delay suspend
[atbm_log]:scan start band(0),(14)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:17 TUYA E][tuya_devos_activate.c:517] network unavailable
****************************common_wait_net*****************************42
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:hw_priv->scan.status 0
[atbm_log]:atbm_scan_work:end(0)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:18 TUYA E][tuya_devos_activate.c:517] network unavailable
****************************common_wait_net*****************************43
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Create file success!

/ # [atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:19 TUYA E][tuya_devos_activate.c:517] network unavailable
****************************common_wait_net*****************************44
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Successfully initialized wpa_supplicant
rfkill: Cannot open RFKILL control device
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
route: SIOCDELRT: No such process
[atbm_log]:atbm_hw_scan:if_id(0)
[atbm_log]:atbm_hw_scan:scan, delay suspend
[atbm_log]:scan start band(0),(14)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
****************************common_wait_net*********************[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
********45
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:20 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
****************************common_wait_net*****************************46
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:21 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:hw_priv->scan.status 0
[atbm_log]:atbm_scan_work:end(0)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:wlan0:free authen bss ++
[atbm_log]:authen:(b6:70:41:e6:ee:7b),ssid(starship)
[atbm_log]:[STA] Join DTIM: 1, interval: 100
[atbm_log]:atbm_set_pm:if_id(0) is not assco
[atbm_log]:wlan0: authenticated
[atbm_log]:work:flush sta[b6:70:41:e6:ee:7b]
[atbm_log]:wlan0:free authen bss ++
[atbm_log]:wlan0:free authen bss --
[atbm_log]:sta has been insert(0)
[atbm_log]:flush sta(1):
[atbm_log]:wlan0: associated
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:[b6:70:41:e6:ee:7b]:20M channel
[atbm_log]:atbm_bss_info_changed:chatype(1),channelNumber(11)
[atbm_log]:atbm_set_pm:set_self_ps,if(0),pmmode(0)
[atbm_log]:[wlan0] Waiting Txq Ready[1]
[atbm_log]:[wlan0]:[8e88] deliver slow
[atbm_log]:[wlan0]:dtim changed [0]->[2]
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:[wlan0]:[8e88] deliver slow
[atbm_log]:3SET_KEY:idx(0),if_id(0)
[atbm_log]:3SET_KEY:idx(1),if_id(0)
[atbm_log]:ieee80211_recalc_ps:work busy
[atbm_log]:KEK[86][77][113][7]
[atbm_log]:KCK[229][116][180][215]
****************************common_wait_net*****************************47
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:22 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
udhcpc: started, v1.30.1[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
udhcpc: sending discover[atbm_log]:dhcp work(1)

[atbm_log]:[wlan0]:[8] deliver slow
[atbm_log]:dhcp done
udhcpc: sending select for 192.168.200.63[atbm_log]:dhcp work(1)

[atbm_log]:[wlan0]:[8] deliver slow
[atbm_log]:dhcp done
udhcpc: lease of 192.168.200.63 obtained, lease time 43200
[atbm_log]:connecting done
deleting routes
route: SIOCDELRT: No such process
adding dns 1.1.1.1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:23 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
killall: check_network_status.sh: no process killed
system: Success
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
killall: check_network_status.sh: no process killed
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:24 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ieee80211_process_addba_request:mac[b6:70:41:e6:ee:7b],tid[0]
network is ok!
wifi connection success
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
net_state:1
****************************common_wait_net****OK*************[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
************
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
--[wait_net]---exit!!
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Net status change to:6,wifi_mode:2

Dbg:mqtt is offline

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:26 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=111
[01-01 18:16:26 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v2/url_config (-7)
[01-01 18:16:26 TUYA E][iot_httpc.c:1530] fail to get cloud url -[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
2050
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:26 TUYA E][log_seq.c:152] ret:-1027
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:27 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=111
[01-01 18:16:27 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v2/url_config (-7)
[01-01 18:16:27 TUYA E][iot_httpc.c:1530] fail to get cloud url -2050
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:28 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=111
[01-01 18:16:28 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v2/url_config (-7)
[01-01 18:16:28 TUYA E][iot_httpc.c:1530] fail to get cloud url -2050
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:29 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=111
[01-01 18:16:29 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v2/url_config (-7)
[01-01 18:16:29 TUYA E][iot_httpc.c:1530] fail to get cloud url -2050
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:16:30 TUYA E][httpc.c:551] tcp connect failed h2.iot-dns.com:443 errno=111
[01-01 18:16:30 TUYA E][http_inf.c:51] Open session failed: https://h2.iot-dns.com/v2/url_config (-7)
[01-01 18:16:30 TUYA E][iot_httpc.c:1530] fail to get cloud url -2050
```



# Full pair logs over wifi:

```sh
WIFI Get Curr Channel:1
Exec Cmd:iwconfig wlan0 channel 6
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI Set Channel:6
WIFI Get Curr Channel:1
Exec Cmd:iwconfig wlan0 channel 11
WIFI Get Curr Channel:6
WIFI Set Channel:11
Exec Cmd:iwconfig wlan0 channel 1
WIFI Get Curr Channel:11
WIFI Get Curr Channel:11
WIFI Set Channel:1
Exec Cmd:iwconfig wlan0 channel 6
WIFI Get Curr Channel:1
WIFI Set Channel:6
WIFI Get Curr Channel:6
Exec Cmd:iwconfig wlan0 channel 11
WIFI Get Curr Channel:6
WIFI Set Channel:11
Exec Cmd:iwconfig wlan0 channel 1
WIFI Get Curr Channel:11
WIFI Set Channel:1
Exec Cmd:iwconfig wlan0 channel 11
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
WIFI Set Channel:11
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[tuya_adapter_wifi_sniffer_set]----exit--!
Disable Qrcode
Sniffer Proc Finish
[      VI][1980-01-01 14:01:24 028] [ak_set_ps_status:983] ----Day mode
[      VI][1980-01-01 14:01:24 030] [switch_day_or_night_first_init:666] ---####------3------------->>>>>>(switch day_night)cur_status=0
[      VI][1980-01-01 14:01:24 032] [set_video_day_night:559] camera->day_ctrl:2
irswitchday:0
[      VI][1980-01-01 14:01:24 036] [set_video_day_night:565] now set to day
irled_level=1
sh /usr/sbin/ir_led.sh off[    VPSS][1980-01-01 14:01:25 027] [isp_switch:259] switching isp mode -> day
[    VPSS][1980-01-01 14:01:25 034] [isp.conf]version: 4.1_mp2l_1117, sensor id: 0x2006, style id: 0
[    VPSS][1980-01-01 14:01:25 035] isp subfile 0, modify time: 2022-11-17 16:15:22
[    VPSS][1980-01-01 14:01:25 039] 0731 change ispconf
1117  ��ƫ�

[    VPSS][1980-01-01 14:01:25 041] isp subfile 1, modify time: 2023-8-10 20:19:21
[    VPSS][1980-01-01 14:01:25 042] 1.rgbgamma/contrast/wdr
5.4 exp/rgbgamma
8.22sharp\contrast\blc\weight

[    VPSS][1980-01-01 14:01:25 044] isp subfile 2, modify time: 2021-10-19 18:08:51
[    VPSS][1980-01-01 14:01:25 045] 0731 change ispconf

[    VPSS][1980-01-01 14:01:25 047] [check_file:413] check isp cfg: /usr/local/H3b_mis2006_2023_8_17.conf OK
[    VPSS][1980-01-01 14:01:25 052] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 14:01:25 055] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 14:01:25 058] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 14:01:25 060] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 14:01:25 062] [set_fps:236] set dev:0 fps:25 ok
[    VPSS][1980-01-01 14:01:25 069] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 14:01:25 071] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 14:01:25 072] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 14:01:25 074] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 14:01:25 076] [set_fps:236] set dev:0 fps:25 ok
[    ADEC][1980-01-01 14:01:25 095] [qr_get_frame_then_play:145] qr tips warkup ....!
Qrcode Proc Finish
Disable Sniffer
Disable qrtips
[      AO][1980-01-01 14:01:26 652] [ak_ao_wait_play_finish:754] this function is deprecated and no longer in use
[    ADEC][1980-01-01 14:01:26 656] [qr_get_frame_then_play:174] qr_get_frame_then_play exit
[      AO][1980-01-01 14:01:26 658] [ak_ao_set_gain:794] set gain 3
[    ADEC][1980-01-01 14:01:26 669] [ak_adec_close:1333] entry
[ SD_ADEC][1980-01-01 14:01:26 671] ## _SD_Buffer_Clear
[ SD_ADEC][1980-01-01 14:01:26 674] ## _SD_Decode_Close 0x11d7410
[    ADEC][1980-01-01 14:01:26 676] [ak_adec_close:1359] dec_ctrl.user_count=0
[      AO][1980-01-01 14:01:26 677] [ak_ao_set_gain:794] set gain 2
[    ADEC][1980-01-01 14:01:26 688] [ak_mp3_player:333] ----- mp3player exit -----
Qrtips_Proc Finish
Exec Cmd:ifconfig wlan0 up
Exec Cmd:ifconfig wlan0 down
[atbm_log]:atbm_remove_interface:priv->if_id(0)
Exec Cmd:iwconfig wlan0 mode Managed
[atbm_log]:[wlan0] change to [2]
[atbm_log]:[wlan0] has been disabled
Exec Cmd:ifconfig wlan0 up
[atbm_log]:atbm_setup_mac:addr(60dc81899812)
[atbm_log]:3 !!! atbm_vif_setup_params: enabling priv
[atbm_log]:[STA] Interface ID:0 of type:2 added
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:br0_netdev_open()-1199: dev_get_by_name(br0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
WIFI Set Mode 2
[01-01 18:14:52 TUYA E][wifi_netcfg_frame_transporter.c:431] timer is not run,wait
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Exec Cmd:ifconfig wlan0 up
Exec Cmd:ifconfig wlan0 down
[atbm_log]:wlan0:free authen bss ++
[atbm_log]:atbm_remove_interface:priv->if_id(0)
Exec Cmd:iwconfig wlan0 mode Managed
Exec Cmd:ifconfig wlan0 up
[atbm_log]:atbm_setup_mac:addr(60dc81899812)
[atbm_log]:3 !!! atbm_vif_setup_params: enabling priv
[atbm_log]:[STA] Interface ID:0 of type:2 added
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:br0_netdev_open()-1199: dev_get_by_name(br0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
WIFI Set Mode 2
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
-[tuya_adapter_wifi_station_connect]-----#######--------------->>>>>>>>>>
curr event:2
[  COMMON][1980-01-01 14:01:27 406] [voice_tip_play:198] language =  USA,enbale:1,online:-1
[00:02:43.169|  warn|        ] "tuya_ipc_system_control_demo.c:541" Condition ( "strlen(mp3_location) != 0" ) Failed.
curr event:3
[  COMMON][1980-01-01 14:01:28 414] [voice_tip_play:198] language =  USA,enbale:1,online:-1
[00:02:44.176|  warn|        ] "tuya_ipc_system_control_demo.c:541" Condition ( "strlen(mp3_location) != 0" ) Failed.
wled_level=1
led mode:blink
blink_type=
sh: doubleblink: unknown operand
blink--------
wled_level=1
led mode:bledblink
blink_type=
sh: doubleblink: unknown operand
blink--------
get wifi info ...
[00:02:44.488|  warn|  TUYA  ] hwl_wf_station_connect...

[00:02:44.488|  warn|  TUYA  ]  sh /usr/sbin/lv_wifi_connect.sh "starship" "mypassword"  &

[00:02:44.526|  warn|  TUYA  ] wif connect.end..

[  THREAD][1980-01-01 14:01:28 767] pthread_create:Wait_net_thread create
-[tuya_adapter_wifi_station_connect],return OPRT_COM_ERROR
[01-01 18:14:53 TUYA E][tuya_devos_netlink.c:309] wf connect err:-1, ssid:starship
[01-01 18:14:53 TUYA E][log_seq.c:459] ret:-1027
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
****************************common_wait_net*********************[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
********41
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
show device name:null to route
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:atbm_hw_scan:if_id(0)
[atbm_log]:atbm_hw_scan:scan, delay suspend
[atbm_log]:scan start band(0),(14)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:14:54 TUYA E][tuya_devos_activate.c:517] network unavailable
****************************common_wait_net*****************************42
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:hw_priv->scan.status 0
[atbm_log]:atbm_scan_work:end(0)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:14:56 TUYA E][tuya_devos_activate.c:517] network unavailable
****************************common_wait_net*****************************43
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Create file success!
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
****************************common_wait_net*********************[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
********44
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Successfully initialized wpa_supplicant
[01-01 18:14:57 TUYA E][tuya_devos_activate.c:517] network unavailable
rfkill: Cannot open RFKILL control device
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
route: SIOCDELRT: No such process
[atbm_log]:atbm_hw_scan:if_id(0)
[atbm_log]:atbm_hw_scan:scan, delay suspend
[atbm_log]:scan start band(0),(14)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
****************************common_wait_net*****************************45
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:14:58 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
****************************common_wait_net*****************************46
[atbm_log]:hw_priv->scan.status 0
[atbm_log]:atbm_scan_work:end(0)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:14:59 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:wlan0:free authen bss ++
[atbm_log]:authen:(96:c2:06:d9:f9:69),ssid(starship)
[atbm_log]:[STA] Join DTIM: 1, interval: 100
[atbm_log]:atbm_set_pm:if_id(0) is not assco
[atbm_log]:wlan0: authenticated
[atbm_log]:work:flush sta[96:c2:06:d9:f9:69]
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:wlan0:free authen bss ++
[atbm_log]:wlan0:free authen bss --
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:sta has been insert(0)
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:flush sta(1):
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:wlan0: associated
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:atbm_set_uapsd_param:uapsdFlags(0)
[atbm_log]:[96:c2:06:d9:f9:69]:20M channel
[atbm_log]:atbm_bss_info_changed:chatype(1),channelNumber(11)
[atbm_log]:atbm_set_pm:set_self_ps,if(0),pmmode(0)
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:[wlan0] Waiting Txq Ready[1]
[atbm_log]:[wlan0]:[8e88] deliver slow
[atbm_log]:[wlan0]:dtim changed [0]->[2]
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:[wlan0]:[8e88] deliver slow
[atbm_log]:3SET_KEY:idx(0),if_id(0)
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
****************************common_wait_net*****************************47
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[01-01 18:15:00 TUYA E][tuya_devos_activate.c:517] network unava[atbm_log]:[RX]:need sw decrypted?
ilable
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:[RX]:need sw decrypted?
[atbm_log]:3SET_KEY:idx(1),if_id(0)
[atbm_log]:ieee80211_recalc_ps:work busy
[atbm_log]:KEK[13][227][147][15]
[atbm_log]:KCK[132][69][17][43]
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
udhcpc: started, v1.30.1
udhcpc: sending discover[atbm_log]:dhcp work(1)

[atbm_log]:[wlan0]:[8] deliver slow
[atbm_log]:dhcp done
udhcpc: sending select for 192.168.200.63[atbm_log]:dhcp work(1)

udhcpc: sending select for 192.168.200.63[atbm_log]:dhcp work(1)

[atbm_log]:[wlan0]:[8] deliver slow
[atbm_log]:dhcp done
[atbm_log]:dhcp done[atbm_log]:[wlan0]:[8] deliver slow
udhcpc: lease of 192.168.200.63 obtained, lease time 43200
[atbm_log]:connecting done
deleting routes
route: SIOCDELRT: No such process
adding dns 1.1.1.1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
killall: check_network_status.sh: no process killed[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support

system: Success
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:15:01 TUYA E][tuya_devos_activate.c:517] network unavailable
killall: check_network_status.sh: no process killed
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[01-01 18:15:02 TUYA E][tuya_devos_activate.c:517] network unavailable
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ieee80211_process_addba_request:mac[96:c2:06:d9:f9:69],tid[0]
net_state:1
****************************common_wait_net****OK*************************
network is ok!
wifi connection success
--[wait_net]---exit!!
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Net status change to:6,wifi_mode:2

Dbg:mqtt is offline

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Net status change to:1,wifi_mode:2

Dbg:mqtt is offline

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Net status change to:3,wifi_mode:2

Dbg:mqtt is offline

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Net status change to:11,wifi_mode:2

curr event:4
[  COMMON][1980-01-01 14:01:46 349] [voice_tip_play:198] language =  USA,enbale:1,online:-1
[00:03:02.111|  warn|        ] "tuya_ipc_system_control_demo.c:541" Condition ( "strlen(mp3_location) != 0" ) Failed.
mqtt subscribe ack 5
90 03 00 02 00
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
led_onoff /usr/sbin/led.sh 1
[      VI][1980-01-01 14:01:46 455] [ak_set_ps_status:983] ----Day mode
[      VI][1980-01-01 14:01:46 464] [switch_day_or_night_first_init:666] ---####------3------------->>>>>>(switch day_night)cur_status=0
[      VI][1980-01-01 14:01:46 470] [set_video_day_night:559] camera->day_ctrl:2
irswitchday:0
[      VI][1980-01-01 14:01:46 478] [set_video_day_night:565] now set to day
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
wled_level=1
led mode:off
irled_level=1
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
sh /usr/sbin/ir_led.sh off[12-11 00:08:17 TUYA E][svc_online_log_db.c:25] ret:-6
wled_level=1
led mode:on
Dbg:tuya_ipc_sdk_mqtt_online_proc is start run

[APP_VIDEO][1980-01-01 14:01:47 031] [app_video_vi_stream_th:1029] [main_ch]video get stream wakeup... !!!!!!pstSrcChn->oid :0,ret=0
Dbg:Init P2P With Max Users:4
[AKV_VENC][1980-01-01 14:01:47 064] ## max nalu size = 3528, type: I, stream 0x1177050
wled_level=1
led mode:bledoff
bled_onoff /usr/sbin/led.sh 1
wled_level=1
led mode:bledon
led_onoff /usr/sbin/led.sh 0
wled_level=1
led mode:off
[    VPSS][1980-01-01 14:01:48 405] [isp_switch:259] switching isp mode -> day
[    VPSS][1980-01-01 14:01:48 455] [isp.conf]version: 4.1_mp2l_1117, sensor id: 0x2006, style id: 0
[    VPSS][1980-01-01 14:01:48 478] isp subfile 0, modify time: 2022-11-17 16:15:22
[    VPSS][1980-01-01 14:01:48 480] 0731 change ispconf


[    VPSS][1980-01-01 14:01:48 489] isp subfile 1, modify time: 2023-8-10 20:19:21
[    VPSS][1980-01-01 14:01:48 491] 1.rgbgamma/contrast/wdr
5.4 exp/rgbgamma
8.22sharp\contrast\blc\weight

[    VPSS][1980-01-01 14:01:48 499] isp subfile 2, modify time: 2021-10-19 18:08:51
[    VPSS][1980-01-01 14:01:48 501] 0731 change ispconf

[    VPSS][1980-01-01 14:01:48 518] [check_file:413] check isp cfg: /usr/local/H3b_mis2006_2023_8_17.conf OK
[    VPSS][1980-01-01 14:01:48 560] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 14:01:48 570] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 14:01:48 582] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 14:01:48 585] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 14:01:48 587] [set_fps:236] set dev:0 fps:25 ok
[    VPSS][1980-01-01 14:01:48 637] [check_fps_para:468] hight light:
	frame_rate=25 max_exp_time=1124 low_light_gain=12
[    VPSS][1980-01-01 14:01:48 641] [check_fps_para:473] low light:
	frame_rate=15 max_exp_time=1983 light_gain=4
[    VPSS][1980-01-01 14:01:48 643] [init_fps_info:600] hight light fps: 25
[    VPSS][1980-01-01 14:01:48 644] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 14:01:48 662] [set_fps:236] set dev:0 fps:25 ok
[00:03:04.516|debug2|  TUYA  ] APP Request "bool_led_enable"=0.
get_property_data Bingo
led_onoff /usr/sbin/led.sh 0
wled_level=1
led mode:bledoff
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
wled_level=1
led mode:off
WIFI[0] Get IP:192.168.200.63
wled_level=1
led mode:bledoff
Dbg:mqtt is online

wled_level=1
led mode:bledoff
wled_level=1
led mode:bledoff
[00:03:06.010|debug2|  TUYA  ] APP Request "bool_led_enable"=0.
get_property_data Bingo
[12-11 00:08:20 TUYA E][tuya_ipc_stream_storage.c:1879] storage not inited
[12-11 00:08:20 TUYA E][tuya_ipc_cloud_storage.c:2662] cloud storage not inited
[12-11 00:08:20 TUYA E][tuya_ipc_p2p.c:6329] The Transfer Module not Inited

[00:03:06.021|debug2|  TUYA  ] APP Request "bool_rotate180"=0.
get_property_data Bingo
[00:03:06.029|debug2|  TUYA  ] APP Request "bool_osd_time"=1.
get_property_data Bingo
osd open[     OSD][1980-01-01 14:01:50 418] [osd_thread:858] thread tid: 586 exit
service_video_osd_clock_enable = 1
[00:03:06.182|debug2|  TUYA  ] APP Request "enum_night_mode"=0.
get_property_data Bingo
[     OSD][1980-01-01 14:01:50 431] [osd_thread:819] thread id: 3449
[     OSD][1980-01-01 14:01:50 436] [set_osd_buffer:605] chn=0, ak_osd_get_max_rect OK, max_w: 1024 max_h: 1080
[      VI][1980-01-01 14:01:50 454] [ak_set_ps_status:1006] ------auto mode
hw_ps_ctrl.h_lv = 1200
hw_ps_ctrl.h_lv = 800
[00:03:06.226|debug2|  TUYA  ] APP Request "bool_alarm_enable"=0.
[      VI][1980-01-01 14:01:50 466] [photosensitive_switch_th:689] Thread start, id: 3450
[      VI][1980-01-01 14:01:50 470] read_AD:72, day_leve: 1200, night_level:800,-----level:1
get_property_data Bingo
get_property_data Bingo
[00:03:06.277|  warn|        ] "ak_mt_start.c:1300" Condition ( "(((void *)0) != mrd_handle && ((void *)0) != mt_ctrl.mt_handle)" ) Failed.
[00:03:06.277|debug2|  TUYA  ] APP Request "bool_sd_record_enable"=0.
get_property_data Bingo
[00:03:06.358|debug2|  TUYA  ] APP Request "enum_sd_record_mode"=0.
get_property_data Bingo
get_property_data Bingo
#### APP disabled motion_trace ####
lv_ipc_get_property_string:
[00:03:06.423|  info|  TUYA  ] Get Property "str_patrol_time"=.
s_H 0 s_M 0 e_H 0 e_M 0 ptz_contrl.Pstarttime 0 ptz_contrl.Pendtime 0 starttime  endtime
patrol_switch 0
get_property_data Bingo
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][1980-01-01 14:01:50 996] read_AD:73, day_leve: 1200, night_level:800,-----level:1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Net status change to:7,wifi_mode:2

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[     OSD][1980-01-01 14:01:51 455] [set_osd_buffer:605] chn=1, ak_osd_get_max_rect OK, max_w: 640 max_h: 360
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][1980-01-01 14:01:51 506] read_AD:68, day_leve: 1200, night_level:800,-----level:1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][1980-01-01 14:01:52 041] read_AD:70, day_leve: 1200, night_level:800,-----level:1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
P2P API Version: 244.3.4.7
212225 (null) INFO:2633964: tuya p2p rtc sdk version: 0xf4030407, Aug 15 2022 14:47:34
tuya liteos uv
[  THREAD][1980-01-01 14:01:52 403] get patrol_mode 0
[  THREAD][1980-01-01 14:01:52 432] patrol_mode 0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
get_property_data Bingo
get_property_data Bingo
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[      VI][1980-01-01 14:01:52 551] read_AD:71, day_leve:[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
 1200, night_level:800,-----level:1
patrol_tmode 0
get_property_data Bingo
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[     OSD][1980-01-01 14:01:52 888] [get_font_data_from_file:102] fp:0x11d6630 byte:32
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
patrol_tmode 0
get onvif_switch 0
onvif_switch 0
get_property_data Bingo
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[      VO][1980-01-01 14:01:53 004] [ak_rtsp_exit:258] onvif_stop aleary stop!!!
[00:03:08.788|debug2|  TUYA  ] APP Request "bool_onvif_pwchanged"=0.
get_property_data Bin[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
go
[AKV_VENC][1980-01-01 14:01:53 035] ## max nalu size = 3572, type: I, stream 0x1177050
[      VI][1980-01-01 14:01:53 060] read_AD:70, day_leve: 1200, night_level:800,-----level:1
[      VI][1980-01-01 14:01:53 061] prev_state=-1, ir_val=1
[      VI][1980-01-01 14:01:53 062] [set_video_day_night:559] camera->day_ctrl:2
irswitchday:0
[      VI][1980-01-01 14:01:53 063] [set_video_day_night:588] now set to night
get awb_stat_info printf--------------
r_gain:550
g_gain:256
b_gain:430
r_offset:0
g_offset:0
b_offset:0
[    VPSS][1980-01-01 14:01:53 067] [isp_switch:259] switching isp mode -> night
get_property_data Bingo
[00:03:08.887|debug2|  TUYA  ] APP Request "enum_flicker_status"=0.
1IPC_APP_set_anti_flicker_state:50
[    VPSS][1980-01-01 14:01:53 127] [isp_set_force_anti_flicker_flag:2958] force_flag=0
[    VPSS][1980-01-01 14:01:53 142] [isp.conf]version: 4.1_mp2l_1117, sensor id: 0x2006, style id: 0
[    VPSS][1980-01-01 14:01:53 143] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 14:01:53 153] [set_fps:236] set dev:0 fps:25 ok
[    VPSS][1980-01-01 14:01:53 157] isp subfile 0, modify time: 2022-11-17 16:15:22
[    VPSS][1980-01-01 14:01:53 158] 0731 change ispconf
1117  ��ƫ�

[    VPSS][1980-01-01 14:01:53 161] isp subfile 1, modify time: 2023-8-10 20:19:21
[    VPSS][1980-01-01 14:01:53 166] [isp_set_sensor_fps:2633] set sensor fps: 25
[    VPSS][1980-01-01 14:01:53 167] 1.rgbgamma/contrast/wdr
5.4 exp/rgbgamma
8.22sharp\contrast\blc\weight

[    VPSS][1980-01-01 14:01:53 175] isp subfile 2, modify time: 2021-10-19 18:08:51
[    VPSS][1980-01-01 14:01:53 192] 0731 change ispconf

[    VPSS][1980-01-01 14:01:53 204] [set_fps:236] set dev:0 fps:25 ok
[    VPSS][1980-01-01 14:01:53 194] [check_file:413] check isp cfg: /usr/local/H3b_mis2006_2023_8_17.conf OK
2IPC_APP_set_anti_flicker_state:60
[    VPSS][1980-01-01 14:01:53 240] [check_fps_para:468] hight light:
	frame_rate=10 max_exp_time=2810 low_light_gain=10
get_property_data Bingo
[    VPSS][1980-01-01 14:01:53 256] [check_fps_para:473] low light:
	frame_rate=10 max_exp_time=2810 light_gain=10
[    VPSS][1980-01-01 14:01:53 259] [init_fps_info:600] hight light fps: 10
[    VPSS][1980-01-01 14:01:53 261] [isp_set_sensor_fps:2633] set sensor fps: 10
[    VPSS][1980-01-01 14:01:53 271] [set_fps:236] set dev:0 fps:10 ok
[    VPSS][1980-01-01 14:01:53 288] [set_contrast:1157] auto ygain selected, not support contrast set!
[    VPSS][1980-01-01 14:01:53 305] [check_fps_para:468] hight light:
	frame_rate=10 max_exp_time=2810 low_light_gain=10
[AKV_VENC][1980-01-01 14:01:53 315] ## max nalu size = 12823, type: P, stream 0x1177050
[APP_VIDEO][1980-01-01 14:01:53 375] [app_video_vi_stream_th:1026] [sub_ch]ch=1....video get stream wait... !!!!!![APP_VIDEO][1980-01-01 14:01:53 377] [app_video_vi_stream_th:1029] [sub_ch]video get stream wakeup... !!!!!![    VPSS][1980-01-01 14:01:53 322] [check_fps_para:473] low light:
	frame_rate=10 max_exp_time=2810 light_gain=10
[  COMMON][1980-01-01 14:01:53 376] IPC_APP_Init_SDK end
[    VPSS][1980-01-01 14:01:53 382] [init_fps_info:600] hight light fps: 10
Dbg:Get Server Time
Dbg:Get Server Time Success: 1733890103 -14400
[    VPSS][2024-12-11 00:08:23 000] [isp_set_sensor_fps:2633] set sensor fps: 10
[AKV_VENC][2024-12-11 00:08:23 004] ## max nalu size = 498, type: I, stream 0x118fd30
[    VPSS][2024-12-11 00:08:23 011] [set_fps:236] set dev:0 fps:10 ok
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
irled_level=1
[Application][2024-12-11 00:08:23 418] *** start to init mrd module.***
########MRD Lib V1.0.09########
########MT Lib V1.0.09########
[00:03:09.566|  warn|        ] "platform_ptz.c:446" Condition ( "fd > 0" ) Failed.
[00:03:09.567|  warn|        ] "platform_ptz.c:446" Condition ( "fd > 0" ) Failed.
sh /usr/sbin/ir_led.sh onset vpss_isp_mwb_attr printf--------------
r_gain:550
g_gain:256
b_gain:430
r_offset:0
g_offset:0
b_offset:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[     OSD][2024-12-11 00:08:23 814] [ak_osd_LoadBitmap:516] success init
Dbg:Get Server Time
Dbg:Get Server Time Success: 1733890104 -14400
MAINCHN0 iomap c2e83000 82e83000 size:25600
MAINCHN1 iomap c2e97000 82e97000 size:25600
MAINCHN2 iomap c2eab000 82eab000 size:25600
SUBCHN0 iomap c2ebf000 82ebf000 size:5760
SUBCHN1 iomap c2ec4000 82ec4000 size:5760
[  MEMORY][2024-12-11 00:08:24 098] Pool[0]:Free node node=[0x1135620], start_offset:[0xa4cbc0], end_offset:[0xeb5000], length=[0x468440]
[  MEMORY][2024-12-11 00:08:24 099] Pool[0]:total free dma memory [0x468440]
[  MEMORY][2024-12-11 00:08:24 099] Pool[1]:Free node node=[0x1135638], start_offset:[0x7dbe60], end_offset:[0xbce000], length=[0x3f21a0]
[  MEMORY][2024-12-11 00:08:24 099] Pool[1]:total free dma memory [0x3f21a0]
[Application][2024-12-11 00:08:24 100] dma pool vi free 4621376, venc free 4137376
Dbg:Get Server Time
Dbg:Get Server Time Success: 1733890104 -14400
SUBCHN2 iomap c2ec9000 82ec9000 size:5760
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[AKV_VENC][2024-12-11 00:08:24 260] ## max nalu size = 1144, typ[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
e: P, stream 0x118fd30
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-11 00:08:25 TUYA E][tuya_ipc_p2p.c:5185] p2p v3 init ok
[12-11 00:08:25 TUYA E][tuya_ipc_streamer.c:1451] tstream init start
[12-11 00:08:25 TUYA E][tuya_ipc_encrypt.c:178] read local cloud encrypt key fails ..-6
214717 (null) INFO:2633964: try listen
[      VI][2024-12-11 00:08:25 298] read_AD:71, day_leve: 1200, night_level:800,-----level:1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:Get Server Time
Dbg:Get Server Time Success: 1733890106 -14400
Dbg:Get Server Time
Dbg:Get Server Time Success: 1733890107 -14400
[  THREAD][2024-12-11 00:08:27 019] localtime: Year[2024] Month[12] date[11] hour[0] minute[8] second[27]
[      VI][2024-12-11 00:08:27 044] [__change_loc:1064] ps_status is night
[AKV_VENC][2024-12-11 00:08:27 081] ## max nalu size = 1356, type: P, stream 0x118fd30
[  THREAD][2024-12-11 00:08:27 083] uptime[216460], uptime_2[216460],resettime[518400000]
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[AKV_VENC][2024-12-11 00:08:27 280] ## max nalu size = 1906, type: P, stream 0x118fd30
killall: check_network_status.sh: no process killed
system: Success
killall: check_network_status.sh: no process killed
[AKV_VENC][2024-12-11 00:08:27 680] ## max nalu size = 2410, type: P, stream 0x118fd30
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-11 00:08:28 TUYA E][tuya_ipc_streamer.c:1519] tstream init done
Dbg:Init Stream_Storage SD:/mnt/
Init tuya_ipc_ss_init
Dbg:local storage init result is 0

[IPC_APP_report_sd_status_changed]:status: 5
[12-11 00:08:28 TUYA E][tuya_ipc_stream_storage.c:1879] storage not inited
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][2024-12-11 00:08:29 239] read_AD:66, day_leve: 1200, night_level:800,-----level:1
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-11 00:08:30 TUYA E][iot_httpc.c:805] errorCode:ORDER_NOT_EXISTED
[12-11 00:08:30 TUYA E][iot_httpc.c:1187] Post Data Return Fail.-4369
[12-11 00:08:30 TUYA E][tuya_ipc_ai_detect_storage.c:464] fail to get ai detect config ret -4369
[12-11 00:08:30 TUYA E][tuya_ipc_ai_detect_storage.c:1550] update cloud storage config fail
Dbg:ai detect result is 0

[12-11 00:08:30 TUYA E][tuya_ipc_cloud_storage.c:364] iot_wd_common_read fails md5_encrypt_key -6
[12-11 00:08:30 TUYA E][tuya_ipc_cloud_storage.c:449] read key_key file failed.

[12-11 00:08:30 TUYA E][tuya_ipc_cloud_storage.c:938] iot_wd_common_read fails storage_restriction -6
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[12-11 00:08:31 TUYA E][tuya_svc_upgrade.c:436] result null
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
220726 (null) INFO:2633964: process signaling offer
220740 (null) WARN:2633964: channel 4 first write
220749 (null) INFO:2736044: system has ipv4(yes), has ipv6(no)
[12-11 00:08:31 TUYA E][tuya_upnp_module_mg.c:575] modify status is not done or upnp item number is 0

220751 (null) INFO:2737812: upnp alloc local failed, ret = -1
watcher add 21, nfds 1
watcher add 42, nfds 2
220770 (null) INFO:2652640: ice 1 state change: CANDIDATE -> CHECK
220788 (null) INFO:2633964: process signaling candid[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
ate
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ieee80211_process_addba_request:mac[96:c2:06:d9:f9:69],tid[1]
220897 (null) INFO:2633964: process signaling candidate
220899 (null) INFO:2633964: process signaling candidate
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][2024-12-11 00:08:32 388] read_AD:71, day_leve: 1200, night_level:800,-----level:1
Dbg:cloud storage init result is 0

[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:105 not find
read int exc: cat /tmp/tuya.cfgs/tuya_wdr_onoff
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
cat: can't open '/tmp/tuya.cfgs/tuya_wdr_onoff': No such file or directory
readstr: andint:0
curr watermark_on_off:0
[12-[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:107 not find
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:124 not find
read int exc: cat /tmp/tuya.cfgs/alarm_zone_on_off
cat: can't open '/tmp/tuya.cfgs/alarm_zone_on_off': No such file or directory
readstr: andint:0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
curr alarm_on_off:0
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:168 not find
[IPC_APP_get_alarm_zone_draw][584] alarm zone[]
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[0]:169 not find
[  THREAD][2024-12-11 00:08:32 608] IPC_APP_get_sd_storage,total_mb:0,use_mb:0,free_mb:0
[00:03:17.886|  info|  TUYA  ] Get SD total:0 used:0 empty:0

[12-11 00:08:32 TUYA E][mqtt_client.c:1778] can't find free mqmde
[12-11 00:08:32 TUYA E][mqc_app.c:890] mqc_pub_async err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:2318] mqtt async send err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:3524] dp_report err:-1
[12-11 00:08:32 TUYA E][mqtt_client.c:1778] can't find free mqmde
[12-11 00:08:32 TUYA E][mqc_app.c:890] mqc_pub_async err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:2318] mqtt async send err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:3524] dp_report err:-1
[12-11 00:08:32 TUYA E][mqtt_client.c:1778] can't find free mqmde
[12-11 00:08:32 TUYA E][mqc_app.c:890] mqc_pub_async err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:2318] mqtt async send err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:3524] dp_report err:-1
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:138 not find
current power mode:1
[12-[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:146 not find
current battery percent:80
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:145 not find
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:174 not find
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:179 not find
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:161 not find
[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:159 not find
222014 (null) INFO:2633964: got repeated offer, drop
222029 (null) INFO:2633964: process control retransmit_signaling
222034 (null) INFO:2633964: process signaling candidate
222075 (null) INFO:2633964: process signaling candidate
222076 (null) INFO:2633964: process signaling candidate
get mac,buf:`܁wlan0     Link encap:Ethernet  HWaddr 60:DC:81:89:98:12
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
,mac:60-DC-81-89-98-12get mac,buf:`܁wlan0     Link encap:Ethernet  HWaddr 60:DC:81:89:98:12
,mac:60-DC-81-89-98-12[12-11 00:08:32 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:238 not find
222286 (null) INFO:2652640: ice 1 state change: CHECK -> CONNECTED
222286 (null) INFO:2633964: rtc session 00010001 on ice status: 1, cost: 1557
222286 (null) INFO:2633964: rtc 00010001 transport update 1: 1 -1 -1, 100 0 0
222288 (null) INFO:2633964: rtc session 00010001 state change: P2P_CONNECT -> DTLS_SRTP_KEY_NEGO
222289 (null) INFO:2633964: rtc session 00010001 state change: DTLS_SRTP_KEY_NEGO -> STREAM
222289 (null) INFO:2633964: add new rtc session 00010001, session id NRDA6JbRN0B5Aa0oN2i3PVRjRjhEDpVZGgjMzKnM, connect session , status 0
222320 (null) INFO:2633964: listen result 00010001
222321 (null) WARN:2633964: channel 4 first send
222322 (null) INFO:2633964: rtc 00010001 transport update 2: 2 -1 -1, 100 0 0
222323 (null) INFO:2633964: rtc 00010001 on ice d[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
ata, cost: 1594
222323 (null) WARN:2633964: channel 0 get first data
222341 (null) INFO:2633964: try listen
222376 (null) WARN:2633964: channel 0 first write
222380 (null) WARN:2633964: channel 0 first send
get ip,ip:192.168.200.63
TUYA_DP_ONVIF_IPADDR_new
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:p2p rev event cb=[4]
Dbg:set clarity:1
Dbg:set clarity:1 OK
get ip,ip:192.168.200.63
[12-11 00:08:33 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:235 not find
[12-11 00:08:33 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:236 not find
[12-11 00:08:33 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:240 not find
[12-11 00:08:33 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:188 not find
[12-11 00:08:33 TUYA E][smart_frame.c:564] devid:(null) dparr[[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
0]:247 not find
[12-11 00:08:33 TUYA E][smart_frame.c:564] devid:(null) dparr[0]:160 not find
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:p2p rev event cb=[0]
Dbg:chn[0] video start
222606 (null) WARN:2633964: channel 1 first write
222614 (null) WARN:2633964: channel 1 first send
[12-11 00:08:33 TUYA E][tuya_ipc_p2p.c:2091] param error or audio not start
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
222737 (null) WARN:2633964: channel 1 get first data[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support

[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
223296 (null) INFO:2633964: got repeated offer, drop
223300 (null) INFO:2633964: process control retransmit_signaling
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-11 00:08:34 TUYA E][app_agent.c:1474] close socket,errno:-100 errno:0
223440 (null) INFO:2633964: process signaling candidate
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
Dbg:p2p rev event cb=[1]
Dbg:chn[0] video stop
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[12-11 00:08:34 TUYA E][tuya_ipc_p2p.c:2091] param error or audio not start
223596 (null) INFO:2633964: process signaling candidate
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
223697 (null) INFO:2633964: process signaling candidate
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[12-11 00:08:34 TUYA E][cloud_operation.c:509] errorCode:CAMERA_STORAGE_ORDER_NOT_EXISTED
[12-11 00:08:34 TUYA E][tuya_ipc_cloud_storage.c:1681] check cloud storage count failed, op_ret = -1
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
Get Conn AP RSSI:85
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
WIFI[0] Get IP:192.168.200.63
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
224083 (null) INFO:2633964: process signaling disconnect
224093 (null) INFO:2633964: rtc 00010001 closed by remote or local, local:0 remote:1
224093 (null) INFO:2633964: rtc session 00010001 state change: STREAM -> FAILED
[12-11 00:08:34 TUYA E][app_agent.c:1937] lan no client
[12-11 00:08:34 TUYA E][tuya_ipc_p2p.c:3464] session[65537] was close by client ret[-13]
[12-11 00:08:34 TUYA E][tuya_ipc_p2p.c:3592] session[65537] read cmd failed [-1]
224104 (null) tbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[0m INFO:2633964: rtc session 00010001 close
224104 (null) INFO:2633964: rtc session 00010001 close [atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
over
[12-11 00:08:34 TUYA E][tuya_ipc_p2p.c:2522] speaker not s[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
tart
[12-11 00:08:34 TUYA E][tuya_ipc_p2p.c:3425] session[65537] is try to releasing
224142 (null) INFO:2633964: process control close
224143 (null) INFO:2633964: rtc session 00010001 failed ready to close
224143 (null) INFO:2633964: destroy rtc session 00010001
watcher remove 21, nfds 1
watcher remove 42, nfds 0
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
Dbg:tuya_ipc_sdk_mqtt_online_proc is end run

[atbm_log]:ioctl:cmd[SIOCGIWNWID][0x8b03] not support
[atbm_log]:ioctl:cmd[SIOCGIWNICKN][0x8b1d] not support
[atbm_log]:ioctl:cmd[SIOCGIWSENS][0x8b09] not support
[      VI][2024-12-11 00:08:35 578] read_AD:69, day_leve: 1200, night_level:800,-----level:1
```



```sh
sort_rev_data: 0x00d7 0x0082 0x016f 0x0172 0x0164 0x010e
sort_rev_data: 0x0097 0x0083 0x0141 0x015a 0x0141 0x0170
sort_rev_data: 0x00e4 0x0084 0x0170 0x0141 0x015a 0x0162
sort_rev_data: 0x00a1 0x0085 0x0163 0x0168 0x015f 0x0164
sort_rev_data: 0x00fb 0x0086 0x0148 0x0179 0x0173 0x0174
sort_rev_data: 0x00aa 0x0087 0x0161 0x0172 0x0173 0x0168
sort_rev_data: 0x00d2 0x0088 0x0169 0x0170 0x0100 0x0100
```


```sh
-[tuya_adapter_wifi_station_connect]-----#######--------------->>>>>>>>>>
curr event:2
[00:01:02.623|  warn|        ] "tuya_ipc_system_control_demo.c:601" Condition ( "0 != access("/tmp/silence_reboot_flag", 0)" ) Failed.
curr event:3
[00:01:03.628|  warn|        ] "tuya_ipc_system_control_demo.c:601" Condition ( "0 != access("/tmp/silence_reboot_flag", 0)" ) Failed.
get wifi info ...
[00:01:03.628|  warn|  TUYA  ] hwl_wf_station_connect...

[00:01:03.629|  warn|  TUYA  ]  sh /usr/sbin/lv_wifi_connect.sh "starship" "mypassword"  &

[00:01:03.667|  warn|  TUYA  ] wif connect.end..


mqtt_client

---------------------------------------------------------------------------------

[12-11 09:10:53 TUYA E][mqtt_client.c:1409] resolve mqtt host Fail:m2.tuyaus.com
route: SIOCDELRT: No such process
connect wifi station......
starship
mypassword
check security, curval: open
[check security] ok, val: open
>>>>>>>>chaojun security=open ssid=starship password=
security=open ssid=starship password=mypassword
Successfully initialized wpa_supplicant
wlan0: Unsupported driver 'wext'
wlan0: CTRL-EVENT-DSCP-POLICY clear_all
/usr/sbin/tuya_wifi_connect.sh open starship mypassword
```