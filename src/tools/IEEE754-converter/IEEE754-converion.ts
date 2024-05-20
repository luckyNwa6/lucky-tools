/*
 * @Author: Zhihui Zhou
 * @Date: 2024-05-20 10:17:38
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-20 11:53:22
 * @Description: 
 */
// console.log(getIee754Value("42024432", false));
/**
 * 转化十六进制的IEEE754标准数据为十进制浮点型数据
 * @param {String} hexString 十六进制字符串
 * @param {Boolean} change 是否高低位互换
 * @param {number} decimalNum 小数位
 */
export function getIee754Value(hexString:string, change = false, decimalNum = 2) {
	if (hexString === "00000000") {
		return '0.00';
	}
	if (change) {
		hexString = hexString.substring(4, 8) + hexString.substring(0, 4);
	}
	let bytes = hexStringToBytes(hexString);
	return bytesToFloat(bytes, decimalNum);
}

/**
 * 字节数组转float
 * 采用IEEE 754标准
 */
function bytesToFloat(bytes:number[], decimalNum:number) {
	//获取 字节数组转化成的16进制字符串
	let binaryStr = bytesToBinaryStr(bytes);
	//符号位S
	let s = parseInt(binaryStr.substring(0, 1));
	//指数位E
	let e = parseInt(binaryStr.substring(1, 9), 2);
	//位数M
	let M = binaryStr.substring(9);
	let m = 0,
		a, b;
	for (let i = 0; i < M.length; i++) {
		a = parseInt(M.charAt(i));
		b = Math.pow(2, i + 1);
		m = m + (a / b);
	}
	let f = ((Math.pow(-1, s)) * (1 + m) * (Math.pow(2, (e - 127))));
	return f.toFixed(decimalNum);
}

/**
 * 将字节数组转换成16进制字符串
 */
function bytesToBinaryStr(bytes:number[]) {
	let binaryStr = "";
	for (let i = 0; i < bytes.length; i++) {
		let str = (bytes[i] & 0xFF).toString(2);
		str = "00000000".substring(str.length) + str;
		binaryStr += str;
	}
	return binaryStr;
}

/**
 * 将十六进制字符串转换为字节数组
 */
function hexStringToBytes(hexString:string) {
	let bytes = [];
	for (let i = 0; i < hexString.length; i += 2) {
		bytes.push(parseInt(hexString.substr(i, 2), 16));
	}
	return bytes;
}

// 将十进制浮点数转换为十六进制字符串
export function decimalToBinaryString(num: number): string {
	const buffer = new ArrayBuffer(4);
	const floatArray = new Float32Array(buffer);
	floatArray[0] = num;
	const uintArray = new Uint32Array(buffer);
	let result = uintArray[0].toString(2);
	while (result.length < 32) {
	  result = '0' + result; // 确保结果是32位的二进制数据
	}
	let hexStr = binaryToHex(result)
	// console.log("输出",hexStr,result)
	return hexStr;
  }

  // 将二进制字符串转换为十六进制字符串
function binaryToHex(binary: string): string {
	const hex = parseInt(binary, 2).toString(16);
	return hex.toUpperCase();
  }