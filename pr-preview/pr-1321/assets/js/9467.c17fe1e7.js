"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9467],{

/***/ 70373
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $12a3c853105e5a70$export$ad991b66133851cf)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $12a3c853105e5a70$var$formatterCache = new Map();
class $12a3c853105e5a70$export$ad991b66133851cf {
    constructor(locale, options = {}){
        this.formatter = $12a3c853105e5a70$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
    /**
   * Formats a date as a string according to the locale and format options passed to the
   * constructor.
   */ format(value) {
        return this.formatter.format(value);
    }
    /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    /** Formats a date range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} \u{2013} ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($12a3c853105e5a70$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $12a3c853105e5a70$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        // Safari uses a different name for the Ethiopic (Amete Alem) calendar.
        // https://bugs.webkit.org/show_bug.cgi?id=241564
        if (resolvedOptions.calendar === 'ethiopic-amete-alem') resolvedOptions.calendar = 'ethioaa';
        return resolvedOptions;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $12a3c853105e5a70$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $12a3c853105e5a70$var$getCachedDateFormatter(locale, options = {}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $12a3c853105e5a70$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $12a3c853105e5a70$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref ?? defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($12a3c853105e5a70$var$formatterCache.has(cacheKey)) return $12a3c853105e5a70$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $12a3c853105e5a70$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $12a3c853105e5a70$var$_hasBuggyHour12Behavior = null;
function $12a3c853105e5a70$var$hasBuggyHour12Behavior() {
    if ($12a3c853105e5a70$var$_hasBuggyHour12Behavior == null) $12a3c853105e5a70$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $12a3c853105e5a70$var$_hasBuggyHour12Behavior;
}
let $12a3c853105e5a70$var$_hasBuggyResolvedHourCycle = null;
function $12a3c853105e5a70$var$hasBuggyResolvedHourCycle() {
    if ($12a3c853105e5a70$var$_hasBuggyResolvedHourCycle == null) $12a3c853105e5a70$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $12a3c853105e5a70$var$_hasBuggyResolvedHourCycle;
}
function $12a3c853105e5a70$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $12a3c853105e5a70$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour').value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour').value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}



//# sourceMappingURL=DateFormatter.mjs.map


/***/ },

/***/ 72175
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ $84102b64e5ca022f$export$dd0bbc9b26defe37)
});

// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/private/CalendarDate.mjs
var CalendarDate = __webpack_require__(16927);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var GregorianCalendar = __webpack_require__(93269);
;// ./node_modules/@internationalized/date/dist/private/calendars/BuddhistCalendar.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $63d4eafd4d826996$var$BUDDHIST_ERA_START = -543;
class $63d4eafd4d826996$export$42d20a78301dee44 extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        let gregorianDate = super.fromJulianDay(jd);
        let year = (0, GregorianCalendar/* getExtendedYear */.LA)(gregorianDate.era, gregorianDate.year);
        return new (0, CalendarDate/* CalendarDate */.ng)(this, year - $63d4eafd4d826996$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($63d4eafd4d826996$var$toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($63d4eafd4d826996$var$toGregorian(date));
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'buddhist';
    }
}
function $63d4eafd4d826996$var$toGregorian(date) {
    let [era, year] = (0, GregorianCalendar/* fromExtendedYear */.f5)(date.year + $63d4eafd4d826996$var$BUDDHIST_ERA_START);
    return new (0, CalendarDate/* CalendarDate */.ng)(era, year, date.month, date.day);
}



//# sourceMappingURL=BuddhistCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/calendars/EthiopicCalendar.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $97cfca9efd59523d$var$ETHIOPIC_EPOCH = 1723856;
const $97cfca9efd59523d$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $97cfca9efd59523d$var$AMETE_MIHRET_DELTA = 5500;
function $97cfca9efd59523d$var$ceToJulianDay(epoch, year, month, day) {
    return epoch + // difference from Julian epoch to 1,1,1
    365 * year + // number of days from years
    Math.floor(year / 4) + // extra day of leap year
    30 * (month - 1) + // number of days from months (1 based)
    day - 1 // number of days for present month (1 based)
    ;
}
function $97cfca9efd59523d$var$julianDayToCE(epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    let month = 1 + Math.floor((jd - $97cfca9efd59523d$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $97cfca9efd59523d$var$ceToJulianDay(epoch, year, month, 1);
    return [
        year,
        month,
        day
    ];
}
function $97cfca9efd59523d$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $97cfca9efd59523d$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return $97cfca9efd59523d$var$getLeapDay(year) + 5;
}
class $97cfca9efd59523d$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $97cfca9efd59523d$var$julianDayToCE($97cfca9efd59523d$var$ETHIOPIC_EPOCH, jd);
        let era = 'AM';
        if (year <= 0) {
            era = 'AA';
            year += $97cfca9efd59523d$var$AMETE_MIHRET_DELTA;
        }
        return new (0, CalendarDate/* CalendarDate */.ng)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $97cfca9efd59523d$var$AMETE_MIHRET_DELTA;
        return $97cfca9efd59523d$var$ceToJulianDay($97cfca9efd59523d$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $97cfca9efd59523d$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $97cfca9efd59523d$var$getLeapDay(date.year);
    }
    getMaximumMonthsInYear() {
        return 13;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra(date) {
        // 9999-12-31 gregorian is 9992-20-02 ethiopic.
        // Round down to 9991 for the last full year.
        // AA 9999-01-01 ethiopic is 4506-09-30 gregorian.
        return date.era === 'AA' ? 9999 : 9991;
    }
    getEras() {
        return [
            'AA',
            'AM'
        ];
    }
    constructor(){
        this.identifier = 'ethiopic';
    }
}
class $97cfca9efd59523d$export$d72e0c37005a4914 extends $97cfca9efd59523d$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $97cfca9efd59523d$var$julianDayToCE($97cfca9efd59523d$var$ETHIOPIC_EPOCH, jd);
        year += $97cfca9efd59523d$var$AMETE_MIHRET_DELTA;
        return new (0, CalendarDate/* CalendarDate */.ng)(this, 'AA', year, month, day);
    }
    getEras() {
        return [
            'AA'
        ];
    }
    getYearsInEra() {
        // 9999-13-04 ethioaa is the maximum date, which is equivalent to 4506-09-29 gregorian.
        return 9999;
    }
    constructor(...args){
        super(...args), this.identifier = 'ethioaa' // also known as 'ethiopic-amete-alem' in ICU
        ;
    }
}
class $97cfca9efd59523d$export$fe6243cbe1a4b7c1 extends $97cfca9efd59523d$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $97cfca9efd59523d$var$julianDayToCE($97cfca9efd59523d$var$COPTIC_EPOCH, jd);
        let era = 'CE';
        if (year <= 0) {
            era = 'BCE';
            year = 1 - year;
        }
        return new (0, CalendarDate/* CalendarDate */.ng)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $97cfca9efd59523d$var$ceToJulianDay($97cfca9efd59523d$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $97cfca9efd59523d$var$getDaysInMonth(year, date.month);
    }
    isInverseEra(date) {
        return date.era === 'BCE';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BCE' ? 'CE' : 'BCE';
            date.year = 1 - date.year;
        }
    }
    getEras() {
        return [
            'BCE',
            'CE'
        ];
    }
    getYearsInEra(date) {
        // 9999-12-30 gregorian is 9716-02-20 coptic.
        // Round down to 9715 for the last full year.
        // BCE 9999-01-01 coptic is BC 9716-06-15 gregorian.
        return date.era === 'BCE' ? 9999 : 9715;
    }
    constructor(...args){
        super(...args), this.identifier = 'coptic';
    }
}



//# sourceMappingURL=EthiopicCalendar.mjs.map

// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/private/utils.mjs
var utils = __webpack_require__(13604);
;// ./node_modules/@internationalized/date/dist/private/calendars/HebrewCalendar.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $f39495b96f9dbac6$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $f39495b96f9dbac6$var$HOUR_PARTS = 1080;
const $f39495b96f9dbac6$var$DAY_PARTS = 24 * $f39495b96f9dbac6$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $f39495b96f9dbac6$var$MONTH_DAYS = 29;
const $f39495b96f9dbac6$var$MONTH_FRACT = 12 * $f39495b96f9dbac6$var$HOUR_PARTS + 793;
const $f39495b96f9dbac6$var$MONTH_PARTS = $f39495b96f9dbac6$var$MONTH_DAYS * $f39495b96f9dbac6$var$DAY_PARTS + $f39495b96f9dbac6$var$MONTH_FRACT;
function $f39495b96f9dbac6$var$isLeapYear(year) {
    return (0, utils/* mod */.z)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $f39495b96f9dbac6$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if ((0, utils/* mod */.z)(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $f39495b96f9dbac6$var$hebrewDelay2(year) {
    let last = $f39495b96f9dbac6$var$hebrewDelay1(year - 1);
    let present = $f39495b96f9dbac6$var$hebrewDelay1(year);
    let next = $f39495b96f9dbac6$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $f39495b96f9dbac6$var$startOfYear(year) {
    return $f39495b96f9dbac6$var$hebrewDelay1(year) + $f39495b96f9dbac6$var$hebrewDelay2(year);
}
function $f39495b96f9dbac6$var$getDaysInYear(year) {
    return $f39495b96f9dbac6$var$startOfYear(year + 1) - $f39495b96f9dbac6$var$startOfYear(year);
}
function $f39495b96f9dbac6$var$getYearType(year) {
    let yearLength = $f39495b96f9dbac6$var$getDaysInYear(year);
    if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
    switch(yearLength){
        case 353:
            return 0; // deficient
        case 354:
            return 1; // normal
        case 355:
            return 2; // complete
    }
}
function $f39495b96f9dbac6$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$f39495b96f9dbac6$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $f39495b96f9dbac6$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $f39495b96f9dbac6$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $f39495b96f9dbac6$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $f39495b96f9dbac6$var$HEBREW_EPOCH;
        let m = d * $f39495b96f9dbac6$var$DAY_PARTS / $f39495b96f9dbac6$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $f39495b96f9dbac6$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $f39495b96f9dbac6$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $f39495b96f9dbac6$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $f39495b96f9dbac6$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new (0, CalendarDate/* CalendarDate */.ng)(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $f39495b96f9dbac6$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $f39495b96f9dbac6$var$getDaysInMonth(date.year, month);
        return jd + date.day + $f39495b96f9dbac6$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $f39495b96f9dbac6$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $f39495b96f9dbac6$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $f39495b96f9dbac6$var$getDaysInYear(date.year);
    }
    getMaximumMonthsInYear() {
        return 13;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra() {
        // 6239 gregorian
        return 9999;
    }
    getEras() {
        return [
            'AM'
        ];
    }
    balanceYearMonth(date, previousDate) {
        // Keep date in the same month when switching between leap years and non leap years
        if (previousDate.year !== date.year) {
            if ($f39495b96f9dbac6$var$isLeapYear(previousDate.year) && !$f39495b96f9dbac6$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$f39495b96f9dbac6$var$isLeapYear(previousDate.year) && $f39495b96f9dbac6$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}



//# sourceMappingURL=HebrewCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/calendars/IndianCalendar.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


// Starts in 78 AD,
const $11fa67a177e45470$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $11fa67a177e45470$var$INDIAN_YEAR_START = 80;
class $11fa67a177e45470$export$39f31c639fa15726 extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $11fa67a177e45470$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - (0, GregorianCalendar/* gregorianToJulianDay */.rG)(date.era, date.year, 1, 1);
        let leapMonth;
        if (yDay < $11fa67a177e45470$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = (0, GregorianCalendar/* isLeapYear */.U_)(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = (0, GregorianCalendar/* isLeapYear */.U_)(date.year) ? 31 : 30;
            yDay -= $11fa67a177e45470$var$INDIAN_YEAR_START;
        }
        let indianMonth;
        let indianDay;
        if (yDay < leapMonth) {
            indianMonth = 1;
            indianDay = yDay + 1;
        } else {
            let mDay = yDay - leapMonth;
            if (mDay < 155) {
                indianMonth = Math.floor(mDay / 31) + 2;
                indianDay = mDay % 31 + 1;
            } else {
                mDay -= 155;
                indianMonth = Math.floor(mDay / 30) + 7;
                indianDay = mDay % 30 + 1;
            }
        }
        return new (0, CalendarDate/* CalendarDate */.ng)(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let extendedYear = date.year + $11fa67a177e45470$var$INDIAN_ERA_START;
        let [era, year] = (0, GregorianCalendar/* fromExtendedYear */.f5)(extendedYear);
        let leapMonth;
        let jd;
        if ((0, GregorianCalendar/* isLeapYear */.U_)(year)) {
            leapMonth = 31;
            jd = (0, GregorianCalendar/* gregorianToJulianDay */.rG)(era, year, 3, 21);
        } else {
            leapMonth = 30;
            jd = (0, GregorianCalendar/* gregorianToJulianDay */.rG)(era, year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && (0, GregorianCalendar/* isLeapYear */.U_)(date.year + $11fa67a177e45470$var$INDIAN_ERA_START)) return 31;
        if (date.month >= 2 && date.month <= 6) return 31;
        return 30;
    }
    getYearsInEra() {
        // 9999-12-31 gregorian is 9920-10-10 indian.
        // Round down to 9919 for the last full year.
        return 9919;
    }
    getEras() {
        return [
            'saka'
        ];
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'indian';
    }
}



//# sourceMappingURL=IndianCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/calendars/IslamicCalendar.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $fd4f9bc1ba0e49a8$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $fd4f9bc1ba0e49a8$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START = 1300;
const $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END = 1600;
const $fd4f9bc1ba0e49a8$var$UMALQURA_START_DAYS = 460322;
function $fd4f9bc1ba0e49a8$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $fd4f9bc1ba0e49a8$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $fd4f9bc1ba0e49a8$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $fd4f9bc1ba0e49a8$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new (0, CalendarDate/* CalendarDate */.ng)(calendar, year, month, day);
}
function $fd4f9bc1ba0e49a8$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $fd4f9bc1ba0e49a8$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $fd4f9bc1ba0e49a8$var$julianDayToIslamic(this, $fd4f9bc1ba0e49a8$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $fd4f9bc1ba0e49a8$var$islamicToJulianDay($fd4f9bc1ba0e49a8$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $fd4f9bc1ba0e49a8$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $fd4f9bc1ba0e49a8$var$isLeapYear(date.year) ? 355 : 354;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra() {
        // 9999 gregorian
        return 9665;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $fd4f9bc1ba0e49a8$export$37f0887f2f9d22f7 extends $fd4f9bc1ba0e49a8$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $fd4f9bc1ba0e49a8$var$julianDayToIslamic(this, $fd4f9bc1ba0e49a8$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $fd4f9bc1ba0e49a8$var$islamicToJulianDay($fd4f9bc1ba0e49a8$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args), this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $fd4f9bc1ba0e49a8$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH;
let $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE;
function $fd4f9bc1ba0e49a8$var$umalquraYearStart(year) {
    return $fd4f9bc1ba0e49a8$var$UMALQURA_START_DAYS + $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START];
}
function $fd4f9bc1ba0e49a8$var$umalquraMonthLength(year, month) {
    let idx = year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if (($fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $fd4f9bc1ba0e49a8$var$umalquraMonthStart(year, month) {
    let day = $fd4f9bc1ba0e49a8$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $fd4f9bc1ba0e49a8$var$umalquraMonthLength(year, i);
    return day;
}
function $fd4f9bc1ba0e49a8$var$umalquraYearLength(year) {
    return $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year + 1 - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START] - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START];
}
class $fd4f9bc1ba0e49a8$export$5baab4758c231076 extends $fd4f9bc1ba0e49a8$export$2066795aadd37bfc {
    constructor(){
        super(), this.identifier = 'islamic-umalqura';
        if (!$fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH) $fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($fd4f9bc1ba0e49a8$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)).buffer);
        if (!$fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE) {
            $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START; year <= $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END; year++){
                $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $fd4f9bc1ba0e49a8$var$umalquraMonthLength(year, i);
            }
        }
    }
    fromJulianDay(jd) {
        let days = jd - $fd4f9bc1ba0e49a8$var$CIVIL_EPOC;
        let startDays = $fd4f9bc1ba0e49a8$var$umalquraYearStart($fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START);
        let endDays = $fd4f9bc1ba0e49a8$var$umalquraYearStart($fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $fd4f9bc1ba0e49a8$var$umalquraYearStart(y) + 1;
                let yearLength = $fd4f9bc1ba0e49a8$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $fd4f9bc1ba0e49a8$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $fd4f9bc1ba0e49a8$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new (0, CalendarDate/* CalendarDate */.ng)(this, y, m, days - $fd4f9bc1ba0e49a8$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START || date.year > $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $fd4f9bc1ba0e49a8$var$CIVIL_EPOC + $fd4f9bc1ba0e49a8$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START || date.year > $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $fd4f9bc1ba0e49a8$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START || date.year > $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $fd4f9bc1ba0e49a8$var$umalquraYearLength(date.year);
    }
}



//# sourceMappingURL=IslamicCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/calendars/JapaneseCalendar.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $34b940b49ba042df$var$ERA_START_DATES = [
    [
        1868,
        9,
        8
    ],
    [
        1912,
        7,
        30
    ],
    [
        1926,
        12,
        25
    ],
    [
        1989,
        1,
        8
    ],
    [
        2019,
        5,
        1
    ]
];
const $34b940b49ba042df$var$ERA_END_DATES = [
    [
        1912,
        7,
        29
    ],
    [
        1926,
        12,
        24
    ],
    [
        1989,
        1,
        7
    ],
    [
        2019,
        4,
        30
    ]
];
const $34b940b49ba042df$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $34b940b49ba042df$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $34b940b49ba042df$var$findEraFromGregorianDate(date) {
    const idx = $34b940b49ba042df$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $34b940b49ba042df$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $34b940b49ba042df$var$toGregorian(date) {
    let eraAddend = $34b940b49ba042df$var$ERA_ADDENDS[$34b940b49ba042df$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new (0, CalendarDate/* CalendarDate */.ng)(date.year + eraAddend, date.month, date.day);
}
class $34b940b49ba042df$export$b746ab2b60cdffbf extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $34b940b49ba042df$var$findEraFromGregorianDate(date);
        return new (0, CalendarDate/* CalendarDate */.ng)(this, $34b940b49ba042df$var$ERA_NAMES[era], date.year - $34b940b49ba042df$var$ERA_ADDENDS[era], date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($34b940b49ba042df$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $34b940b49ba042df$var$toGregorian(date);
        let era = $34b940b49ba042df$var$findEraFromGregorianDate(gregorianDate);
        if ($34b940b49ba042df$var$ERA_NAMES[era] !== date.era) {
            date.era = $34b940b49ba042df$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $34b940b49ba042df$var$ERA_ADDENDS[era];
        }
        // Constrain in case we went before the first supported era.
        this.constrainDate(date);
    }
    constrainDate(date) {
        let idx = $34b940b49ba042df$var$ERA_NAMES.indexOf(date.era);
        let end = $34b940b49ba042df$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $34b940b49ba042df$var$ERA_ADDENDS[idx];
            date.year = Math.max(1, Math.min(maxYear, date.year));
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
        }
        if (date.year === 1 && idx >= 0) {
            let [, startMonth, startDay] = $34b940b49ba042df$var$ERA_START_DATES[idx];
            date.month = Math.max(startMonth, date.month);
            if (date.month === startMonth) date.day = Math.max(startDay, date.day);
        }
    }
    getEras() {
        return $34b940b49ba042df$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $34b940b49ba042df$var$ERA_NAMES.indexOf(date.era);
        let cur = $34b940b49ba042df$var$ERA_START_DATES[era];
        let next = $34b940b49ba042df$var$ERA_START_DATES[era + 1];
        if (next == null) // 9999 gregorian is the maximum year allowed.
        return 9999 - cur[0] + 1;
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($34b940b49ba042df$var$toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = $34b940b49ba042df$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $34b940b49ba042df$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args), this.identifier = 'japanese';
    }
}
function $34b940b49ba042df$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $34b940b49ba042df$var$ERA_NAMES.indexOf(date.era);
        return $34b940b49ba042df$var$ERA_START_DATES[idx];
    }
}



//# sourceMappingURL=JapaneseCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/calendars/PersianCalendar.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $a0cc0739a536c3b1$var$PERSIAN_EPOCH = 1948320;
// Number of days from the start of the year to the start of each month.
const $a0cc0739a536c3b1$var$MONTH_START = [
    0,
    31,
    62,
    93,
    124,
    155,
    186,
    216,
    246,
    276,
    306,
    336 // Esfand
];
class $a0cc0739a536c3b1$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let daysSinceEpoch = jd - $a0cc0739a536c3b1$var$PERSIAN_EPOCH;
        let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
        let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
        let dayOfYear = daysSinceEpoch - farvardin1;
        let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
        let day = dayOfYear - $a0cc0739a536c3b1$var$MONTH_START[month] + 1;
        return new (0, CalendarDate/* CalendarDate */.ng)(this, year, month + 1, day);
    }
    toJulianDay(date) {
        let jd = $a0cc0739a536c3b1$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
        jd += $a0cc0739a536c3b1$var$MONTH_START[date.month - 1];
        jd += date.day;
        return jd;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        let isLeapYear = (0, utils/* mod */.z)(25 * date.year + 11, 33) < 8;
        return isLeapYear ? 30 : 29;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 31;
    }
    getEras() {
        return [
            'AP'
        ];
    }
    getYearsInEra() {
        // 9378-10-10 persian is 9999-12-31 gregorian.
        // Round down to 9377 to set the maximum full year.
        return 9377;
    }
    constructor(){
        this.identifier = 'persian';
    }
}



//# sourceMappingURL=PersianCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/calendars/TaiwanCalendar.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $c009cc5f64923054$var$TAIWAN_ERA_START = 1911;
function $c009cc5f64923054$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $c009cc5f64923054$var$TAIWAN_ERA_START : 1 - date.year + $c009cc5f64923054$var$TAIWAN_ERA_START;
}
function $c009cc5f64923054$var$gregorianToTaiwan(year) {
    let y = year - $c009cc5f64923054$var$TAIWAN_ERA_START;
    if (y > 0) return [
        'minguo',
        y
    ];
    else return [
        'before_minguo',
        1 - y
    ];
}
class $c009cc5f64923054$export$65e01080afcb0799 extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let extendedYear = (0, GregorianCalendar/* getExtendedYear */.LA)(date.era, date.year);
        let [era, year] = $c009cc5f64923054$var$gregorianToTaiwan(extendedYear);
        return new (0, CalendarDate/* CalendarDate */.ng)(this, era, year, date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($c009cc5f64923054$var$toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        let [era, year] = $c009cc5f64923054$var$gregorianToTaiwan($c009cc5f64923054$var$gregorianYear(date));
        date.era = era;
        date.year = year;
    }
    isInverseEra(date) {
        return date.era === 'before_minguo';
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($c009cc5f64923054$var$toGregorian(date));
    }
    getYearsInEra(date) {
        return date.era === 'before_minguo' ? 9999 : 9999 - $c009cc5f64923054$var$TAIWAN_ERA_START;
    }
    constructor(...args){
        super(...args), this.identifier = 'roc' // Republic of China
        ;
    }
}
function $c009cc5f64923054$var$toGregorian(date) {
    let [era, year] = (0, GregorianCalendar/* fromExtendedYear */.f5)($c009cc5f64923054$var$gregorianYear(date));
    return new (0, CalendarDate/* CalendarDate */.ng)(era, year, date.month, date.day);
}



//# sourceMappingURL=TaiwanCalendar.mjs.map

;// ./node_modules/@internationalized/date/dist/private/createCalendar.mjs










/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








function $84102b64e5ca022f$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new (0, $63d4eafd4d826996$export$42d20a78301dee44)();
        case 'ethiopic':
            return new (0, $97cfca9efd59523d$export$26ba6eab5e20cd7d)();
        case 'ethioaa':
            return new (0, $97cfca9efd59523d$export$d72e0c37005a4914)();
        case 'coptic':
            return new (0, $97cfca9efd59523d$export$fe6243cbe1a4b7c1)();
        case 'hebrew':
            return new (0, $f39495b96f9dbac6$export$ca405048b8fb5af)();
        case 'indian':
            return new (0, $11fa67a177e45470$export$39f31c639fa15726)();
        case 'islamic-civil':
            return new (0, $fd4f9bc1ba0e49a8$export$2066795aadd37bfc)();
        case 'islamic-tbla':
            return new (0, $fd4f9bc1ba0e49a8$export$37f0887f2f9d22f7)();
        case 'islamic-umalqura':
            return new (0, $fd4f9bc1ba0e49a8$export$5baab4758c231076)();
        case 'japanese':
            return new (0, $34b940b49ba042df$export$b746ab2b60cdffbf)();
        case 'persian':
            return new (0, $a0cc0739a536c3b1$export$37fccdbfd14c5939)();
        case 'roc':
            return new (0, $c009cc5f64923054$export$65e01080afcb0799)();
        case 'gregory':
        default:
            return new (0, GregorianCalendar/* GregorianCalendar */.FG)();
    }
}



//# sourceMappingURL=createCalendar.mjs.map


/***/ },

/***/ 11653
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ $60f33508b4cd9d3b$export$85fd5fdf27bacc79)
/* harmony export */ });
/* harmony import */ var _utils_useDeepMemo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92160);
/* harmony import */ var _I18nProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78352);
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70373);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $60f33508b4cd9d3b$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, _utils_useDeepMemo_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useDeepMemo */ .k)(options ?? {}, $60f33508b4cd9d3b$var$isEqual);
    let { locale: locale } = (0, _I18nProvider_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLocale */ .Y)();
    return (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new (0, _internationalized_date__WEBPACK_IMPORTED_MODULE_2__/* .DateFormatter */ .p)(locale, options), [
        locale,
        options
    ]);
}
function $60f33508b4cd9d3b$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}



//# sourceMappingURL=useDateFormatter.mjs.map


/***/ },

/***/ 92160
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ $9c268ab73a5d55e5$export$722debc0e56fea39)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rsp-rules/pure-render */ 
function $9c268ab73a5d55e5$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    if (value && lastValue.current && isEqual(value, lastValue.current)) // oxlint-disable-next-line react/react-compiler
    value = lastValue.current;
    // oxlint-disable-next-line react/react-compiler
    lastValue.current = value;
    return value;
}



//# sourceMappingURL=useDeepMemo.mjs.map


/***/ }

}]);