import __env from '../env';
export default function run() {
	if (__env.mocha) return;
	setTimeout(() => {
		console.log('run');
		mocha.run();
	});
}
