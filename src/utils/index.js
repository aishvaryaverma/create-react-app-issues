class Utils {
	limitTextString(text, limit = 17) {
		// String = 'Pasta with tomato and spinach'
		// acc: 0  / acc + cur.length = 5  / newTitle = ['Pasta']
		// acc: 5  / acc + cur.length = 9  / newTitle = ['Pasta', 'with']
		// acc: 9  / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
		// acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
		// acc: 18 / acc + cur.length = 25 / newTitle = ['Pasta', 'with', 'tomato']

		const newText = [];
		if (text.length > limit) {
			text.split(' ').reduce((acc, cur) => {
				if (acc + cur.length <= limit) newText.push(cur);
				return acc + cur.length;
			}, 0);
			return `${newText.join(' ')}...`;
		}
		return text;
	}

	timeSince(date) {
		const seconds = Math.floor((new Date() - new Date(date).getTime()) / 1000);
		let interval = seconds / 31536000;
		if (interval > 1) {
			return Math.floor(interval) + ' years';
		}
		interval = seconds / 2592000;
		if (interval > 1) {
			return Math.floor(interval) + ' months';
		}
		interval = seconds / 86400;
		if (interval > 1) {
			return Math.floor(interval) + ' days';
		}
		interval = seconds / 3600;
		if (interval > 1) {
			return Math.floor(interval) + ' hours';
		}
		interval = seconds / 60;
		if (interval > 1) {
			return Math.floor(interval) + ' minutes';
		}
		return Math.floor(seconds) + ' seconds';
	}
}

export default new Utils()
