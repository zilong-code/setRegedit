
const ffi = require("ffi-napi");
// const ref = require("ref-napi");
// const refArray = require("ref-array-napi");
const {remote} = require("electron");
const path = require("path");
const child_process = require("child_process");
// console.log(88,ffi,ref,refArray,remote,path);
// /**
//  * 写入注册表信息方法
//  * @param {*} key 修改的格式
//  * @param {*} value 需要修改成的软件名称
//  */
// let writeUserChoice = (key, value = "PhotoEditor") => {
// 	let dllPath = path.join(electron_api.regMainPath, "bin/SetDefaultTool.dll");
// 	console.log(8888, dllPath);
// 	const winDll = ffi.Library(dllPath, {
// 		WriteUserChoice: [ref.types.bool, [refArray(ref.types.uint16), refArray(ref.types.uint16)]],
// 		DeleteUserChoice: [ref.types.bool, [refArray(ref.types.uint16)]],
// 	});
// 	// const keyBuffer = Buffer.from(key)
// 	// const valueBuffer = Buffer.from(value)
// 	// const res = winDll.WriteUserChoice(keyBuffer, valueBuffer)
// 	console.log(key, value), "=======89898";
// 	const keyCodes = new refArray(ref.types.uint16)(256);
// 	for (let i = 0; i < key.length; i++) {
// 		keyCodes[i] = key.charCodeAt(i);
// 	}
// 	console.log("keyCodes", keyCodes);
// 	const valueCodes = new refArray(ref.types.uint16)(256);
// 	for (let i = 0; i < value.length; i++) {
// 		valueCodes[i] = value.charCodeAt(i);
// 	}
// 	console.log("valueCodes", valueCodes);
// 	const res = winDll.WriteUserChoice(keyCodes.buffer, valueCodes.buffer);
// 	console.log(res, "=====res.toString()");
// };

// function regReg(fileName) {
// 	return new Promise((resolve, reject) => {
// 		let regFile = path.join(electron_api.regMainPath, "regFolder/open.reg");
// 		console.log("regFile", regFile);
// 		fs.readFile(regFile, (werr, data) => {
// 			if (werr) {
// 				return reject(werr);
// 			}
// 			let regData = data.toString();
// 			console.log(87777, regData);
// 			if (regData.indexOf("${install}") > -1) {
// 				regData = regData.replaceAll(
// 					"${install}",
// 					path.join(remote.getGlobal("sharedObject").sdkPath, "../").replace(/[\/\\]/g, "\\\\") +
// 						"\\\\"
// 				);
// 				fs.writeFile(regFile, regData, (err) => {
// 					if (err) {
// 						return reject(err);
// 					}
// 					child_process.exec(`regedit /s "${regFile}"`, (err, stdout, stderr) => {
// 						if (err || stderr) {
// 							console.error(err);
// 							resolve(false);
// 						} else {
// 							resolve(true);
// 						}
// 					});
// 				});
// 			} else {
// 				child_process.exec(`regedit /s "${regFile}"`, (err, stdout, stderr) => {
// 					if (err || stderr) {
// 						console.error(err);
// 						resolve(false);
// 					} else {
// 						resolve(true);
// 					}
// 				});
// 			}
// 		});
// 	});
// }
const installWord5 = async () => {
    console.log(9999);
	// let un = await regReg("open.reg");
	// let unee = await regReg("mm.reg");
	// console.log(18888, un, unee);
	// writeUserChoice(".xmind", "xunjie_mindmap");
	// writeUserChoice(".mm", "xunjie_mindmap");
};
exports.installWord5 =installWord5
