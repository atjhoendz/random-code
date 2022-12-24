const crypto = require('crypto');
const util = require('util');
const randomBytes = util.promisify(crypto.randomBytes);

const sha1 = require('crypto-js/sha1');

const generateRandomToken = () => {
	const buffer = Buffer.alloc(256);
	return sha1(buffer).toString();
}

const enc1 = generateRandomToken();
const enc2 = generateRandomToken();
const enc3 = generateRandomToken();
const enc4 = generateRandomToken();

const result = {
	enc1,
	enc2,
	enc3,
	enc4
}

// console.log(result);

const genRandomTokenv2 = () => {
	return randomBytes(256).then((buffer) => {
		return crypto
			.createHash('sha1')
			.update(buffer)
			.digest('hex');
	}).catch((err) => {
		throw err;
	})
}

(async () => {
	const encV2 = await genRandomTokenv2();
	const encV22 = await genRandomTokenv2();
	const encV23 = await genRandomTokenv2();
	const encV24 = await genRandomTokenv2();

	const resultV2 = {
		encV2,
		encV22,
		encV23,
		encV24,
	}

	console.log(resultV2);
})()


