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

	getClock(hour, min) {
		const hrdeg = 30 * hour;
		const mindeg = .5 * min;
	
		return 360 - (hrdeg + mindeg)
	}
	
	getClockAngle(hours, minutes) {
		// using 12-hour OR 24-hour clock notation
		hours = hours % 12;
		
		var hourMinPart = 0.5 * minutes, // 30 degrees per 60 minutes => 1/2 degree per 1 minute => 0.5 * minute
			hourHourPart = 30 * hours, // 30 degrees per 1 hour => 30 * hour
			minAngle = 6 * minutes, // 360 degrees per 60 minutes => 6 degrees per 1 minute => 6 * minute
			totalAngle = Math.abs(hourMinPart + hourHourPart - minAngle); // absolute difference
		
		console.log(totalAngle)
		// subtract the total angle from 360 to get the portion w/ 12
		return 360 - totalAngle;
	}
	
}

export default new Utils()
