let switcherOne = true;
let switcherTwo = true;
let switcherThree = true;
let usd = '$';
let eur = 'e';
let rub = 'r';
let gbp = 'g';
let currency = usd;

$(document).ready(function() {
  $.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.percent.hour;
			hour += '';
			let day = resp.changes.percent.day;
			day += '';
			let week = resp.changes.percent.week;
			week += '';
			let month = resp.changes.percent.month;
			month += '';
			$('#hour').text(resp.changes.percent.hour);
			$('#day').text(resp.changes.percent.day);
			$('#week').text(resp.changes.percent.week);
			$('#month').text(resp.changes.percent.month);
			$('#hour-litecoin').text(resp.changes.percent.hour);
			$('#day-litecoin').text(resp.changes.percent.day);
			$('#week-litecoin').text(resp.changes.percent.week);
			$('#month-litecoin').text(resp.changes.percent.month);
			$('#hour-bitcoin').text(resp.changes.percent.hour);
			$('#day-bitcoin').text(resp.changes.percent.day);
			$('#week-bitcoin').text(resp.changes.percent.week);
			$('#month-bitcoin').text(resp.changes.percent.month);

			if (hour[0] === '-') {
				$('#hour').css('color', '#c80e24');
				$('#hour-litecoin').css('color', '#c80e24');
				$('#hour-bitcoin').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day').css('color', '#c80e24');
				$('#day-litecoin').css('color', '#c80e24');
				$('#day-bitcoin').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week').css('color', '#c80e24');
				$('#week-litecoin').css('color', '#c80e24');
				$('#week-bitcoin').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month').css('color', '#c80e24');
				$('#month-litecoin').css('color', '#c80e24');
				$('#month-bitcoin').css('color', '#c80e24');
			}
			$('#hour').append(currency);
			$('#day').append(currency);
			$('#week').append(currency);
			$('#month').append(currency);
			$('#hour-litecoin').append(currency);
			$('#day-litecoin').append(currency);
			$('#week-litecoin').append(currency);
			$('#month-litecoin').append(currency);
			$('#hour-bitcoin').append(currency);
			$('#day-bitcoin').append(currency);
			$('#week-bitcoin').append(currency);
			$('#month-bitcoin').append(currency);
		},
		error: function() {
			console.log('=(');
		}
	});

  })


$('#percent-line-one').on('click', function() {
	if (switcherOne) {
		$('#circle-one').css('left', '10px');
		$('#percent-line-one').css('background-color', '#b1b2b2');
		switcherOne = false;

		$.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.price.hour;
			hour += '';
			let day = resp.changes.price.day;
			day += '';
			let week = resp.changes.price.week;
			week += '';
			let month = resp.changes.price.month;
			month += '';

			$('#hour').text(resp.changes.price.hour);
			$('#day').text(resp.changes.price.day);
			$('#week').text(resp.changes.price.week);
			$('#month').text(resp.changes.price.month);
			$('#hour').append('%');
			$('#day').append('%');
			$('#week').append('%');
			$('#month').append('%');

			if (hour[0] === '-') {
				$('#hour').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month').css('color', '#c80e24');
			}
		},
		error: function() {
			console.log('=(');
		}
	});
	} else {
		$('#circle-one').css('left', '0');
		$('#percent-line-one').css('background-color', '#389cce');
		switcherOne = true;

		$.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.percent.hour;
			hour += '';
			let day = resp.changes.percent.day;
			day += '';
			let week = resp.changes.percent.week;
			week += '';
			let month = resp.changes.percent.month;
			month += '';

			$('#hour').text(resp.changes.percent.hour);
			$('#day').text(resp.changes.percent.day);
			$('#week').text(resp.changes.percent.week);
			$('#month').text(resp.changes.percent.month);
			$('#hour').append(currency);
			$('#day').append(currency);
			$('#week').append(currency);
			$('#month').append(currency);

			if (hour[0] === '-') {
				$('#hour').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month').css('color', '#c80e24');
			}
		},
		error: function() {
			console.log('=(');
		}
	});
	}
	
})

$('#percent-line-two').on('click', function() {
	if (switcherTwo) {
		$('#circle-two').css('left', '10px');
		$('#percent-line-two').css('background-color', '#b1b2b2');
		switcherTwo = false;

		$.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.price.hour;
			hour += '';
			let day = resp.changes.price.day;
			day += '';
			let week = resp.changes.price.week;
			week += '';
			let month = resp.changes.price.month;
			month += '';

			$('#hour-litecoin').text(resp.changes.price.hour);
			$('#day-litecoin').text(resp.changes.price.day);
			$('#week-litecoin').text(resp.changes.price.week);
			$('#month-litecoin').text(resp.changes.price.month);
			$('#hour-litecoin').append('%');
			$('#day-litecoin').append('%');
			$('#week-litecoin').append('%');
			$('#month-litecoin').append('%');

			if (hour[0] === '-') {
				$('#hour-litecoin').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day-litecoin').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week-litecoin').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month-litecoin').css('color', '#c80e24');
			}
		},
		error: function() {
			console.log('=(');
		}
	});
	} else {
		$('#circle-two').css('left', '0');
		$('#percent-line-two').css('background-color', '#389cce');
		switcherTwo = true;

		$.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.percent.hour;
			hour += '';
			let day = resp.changes.percent.day;
			day += '';
			let week = resp.changes.percent.week;
			week += '';
			let month = resp.changes.percent.month;
			month += '';

			$('#hour-litecoin').text(resp.changes.percent.hour);
			$('#day-litecoin').text(resp.changes.percent.day);
			$('#week-litecoin').text(resp.changes.percent.week);
			$('#month-litecoin').text(resp.changes.percent.month);
			$('#hour-litecoin').append(currency);
			$('#day-litecoin').append(currency);
			$('#week-litecoin').append(currency);
			$('#month-litecoin').append(currency);

			if (hour[0] === '-') {
				$('#hour-litecoin').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day-litecoin').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week-litecoin').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month-litecoin').css('color', '#c80e24');
			}
		},
		error: function() {
			console.log('=(');
		}
	});
	}
	
})


$('#percent-line-three').on('click', function() {
	if (switcherThree) {
		$('#circle-three').css('left', '10px');
		$('#percent-line-three').css('background-color', '#b1b2b2');
		switcherThree = false;

		$.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.price.hour;
			hour += '';
			let day = resp.changes.price.day;
			day += '';
			let week = resp.changes.price.week;
			week += '';
			let month = resp.changes.price.month;
			month += '';

			$('#hour-bitcoin').text(resp.changes.price.hour);
			$('#day-bitcoin').text(resp.changes.price.day);
			$('#week-bitcoin').text(resp.changes.price.week);
			$('#month-bitcoin').text(resp.changes.price.month);
			$('#hour-bitcoin').append('%');
			$('#day-bitcoin').append('%');
			$('#week-bitcoin').append('%');
			$('#month-bitcoin').append('%');

			if (hour[0] === '-') {
				$('#hour-bitcoin').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day-bitcoin').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week-bitcoin').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month-bitcoin').css('color', '#c80e24');
			}
		},
		error: function() {
			console.log('=(');
		}
	});
	} else {
		$('#circle-three').css('left', '0');
		$('#percent-line-three').css('background-color', '#389cce');
		switcherThree = true;

		$.ajax({
		url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		type: "GET",
		success: function(resp) {
			let hour = resp.changes.percent.hour;
			hour += '';
			let day = resp.changes.percent.day;
			day += '';
			let week = resp.changes.percent.week;
			week += '';
			let month = resp.changes.percent.month;
			month += '';

			$('#hour-bitcoin').text(resp.changes.percent.hour);
			$('#day-bitcoin').text(resp.changes.percent.day);
			$('#week-bitcoin').text(resp.changes.percent.week);
			$('#month-bitcoin').text(resp.changes.percent.month);
			$('#hour-bitcoin').append(currency);
			$('#day-bitcoin').append(currency);
			$('#week-bitcoin').append(currency);
			$('#month-bitcoin').append(currency);

			if (hour[0] === '-') {
				$('#hour-bitcoin').css('color', '#c80e24');
			}
			if (day[0] === '-') {
				$('#day-bitcoin').css('color', '#c80e24');
			}
			if (week[0] === '-') {
				$('#week-bitcoin').css('color', '#c80e24');
			}
			if (month[0] === '-') {
				$('#month-bitcoin').css('color', '#c80e24');
			}
		},
		error: function() {
			console.log('=(');
		}
	});
	}
	
})

$('#eur').on('click', function() {
	$('#selected-currency').text($('#eur').text());
	$('#usr').css('display', 'block');
	currency = eur;
})
$('#rub').on('click', function() {
	$('#selected-currency').text($('#rub').text());
	$('#usr').css('display', 'block');
	currency = rub;
})
$('#gbp').on('click', function() {
	$('#selected-currency').text($('#gbp').text());
	$('#usr').css('display', 'block');
	currency = gbp;
})
$('#usr').on('click', function() {
	$('#selected-currency').text($('#usr').text());
	currency = usr;
})