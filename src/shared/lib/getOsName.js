import { getIosVersion } from './getIosVersion';

export const getOsName = () => {
  let osName = '';
  const userAgent = navigator.userAgent;

  if (userAgent.match(/Win(dows )?NT 6\.0/)) {
    osName = 'Windows Vista';
  } else if (userAgent.match(/Win(dows )?(NT 5\.1|XP)/)) {
    osName = 'Windows XP';
  } else if (userAgent.indexOf('Windows NT 7.0') != -1 || userAgent.indexOf('Windows NT 6.1') != -1) {
    osName = 'Windows 7';
  } else if (userAgent.indexOf('Windows NT 8.0') != -1 || userAgent.indexOf('Windows NT 6.2') != -1) {
    osName = 'Windows 8';
  } else if (userAgent.indexOf('Windows NT 8.1') != -1 || userAgent.indexOf('Windows NT 6.3') != -1) {
    osName = 'Windows 8.1';
  } else if (userAgent.indexOf('Windows NT 10.0') != -1 || userAgent.indexOf('Windows NT 6.4') != -1) {
    osName = 'Windows 10';
  } else if (userAgent.indexOf('iPad') != -1) {
    osName = 'iPad iOS ' + getIosVersion();
  } else if (userAgent.indexOf('iPhone') != -1) {
    osName = 'iPhone iOS ' + getIosVersion();
  } else if (userAgent.indexOf('iPod') != -1) {
    osName = 'iPod iOS ' + getIosVersion();
  } else if (userAgent.indexOf('Android') != -1) {
    osName = 'Android';
  } else if (userAgent.match(/Win(dows )?NT( 4\.0)?/)) {
    osName = 'Windows NT';
  } else if (userAgent.match(/Mac|PPC/)) {
    osName = 'Mac OS';
  } else if (userAgent.match(/Linux/)) {
    osName = 'Linux';
  } else if (userAgent.match(/(Free|Net|Open)BSD/)) {
    osName = RegExp.$1 + 'BSD';
  } else if (userAgent.match(/SunOS/)) {
    osName = 'Solaris';
  } else {
    osName = null;
  }

  return osName;
};
