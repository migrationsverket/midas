"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3967],{

/***/ 64653
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ $896ba0a80a8f4d36$export$85fd5fdf27bacc79)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39892);
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93321);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89592);
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



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useDeepMemo */ .k)(options !== null && options !== void 0 ? options : {}, $896ba0a80a8f4d36$var$isEqual);
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    return (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new (0, _internationalized_date__WEBPACK_IMPORTED_MODULE_1__/* .DateFormatter */ .p)(locale, options), [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}



//# sourceMappingURL=useDateFormatter.module.js.map


/***/ },

/***/ 89592
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ $5a387cc49350e6db$export$722debc0e56fea39)
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
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}



//# sourceMappingURL=useDeepMemo.module.js.map


/***/ },

/***/ 93321
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $fb18d541ea1ad717$export$ad991b66133851cf)
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
 */ let $fb18d541ea1ad717$var$formatterCache = new Map();
class $fb18d541ea1ad717$export$ad991b66133851cf {
    /** Formats a date as a string according to the locale and format options passed to the constructor. */ format(value) {
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
        if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        // Safari uses a different name for the Ethiopic (Amete Alem) calendar.
        // https://bugs.webkit.org/show_bug.cgi?id=241564
        if (resolvedOptions.calendar === 'ethiopic-amete-alem') resolvedOptions.calendar = 'ethioaa';
        return resolvedOptions;
    }
    constructor(locale, options = {}){
        this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
        this.options = options;
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
const $fb18d541ea1ad717$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
    if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
    if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
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



//# sourceMappingURL=DateFormatter.module.js.map


/***/ },

/***/ 94763
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ $64244302c3013299$export$dd0bbc9b26defe37)
});

// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/CalendarDate.mjs
var CalendarDate = __webpack_require__(99451);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/GregorianCalendar.mjs
var GregorianCalendar = __webpack_require__(55845);
;// ./node_modules/@internationalized/date/dist/BuddhistCalendar.mjs



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


const $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
class $8d73d47422ca7302$export$42d20a78301dee44 extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        let gregorianDate = super.fromJulianDay(jd);
        let year = (0, GregorianCalendar/* getExtendedYear */.LA)(gregorianDate.era, gregorianDate.year);
        return new (0, CalendarDate/* CalendarDate */.ng)(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'buddhist';
    }
}
function $8d73d47422ca7302$var$toGregorian(date) {
    let [era, year] = (0, GregorianCalendar/* fromExtendedYear */.f5)(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
    return new (0, CalendarDate/* CalendarDate */.ng)(era, year, date.month, date.day);
}



//# sourceMappingURL=BuddhistCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/EthiopicCalendar.mjs


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

const $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
const $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
    return epoch // difference from Julian epoch to 1,1,1
     + 365 * year // number of days from years
     + Math.floor(year / 4) // extra day of leap year
     + 30 * (month - 1 // number of days from months (1 based)
    ) + day - 1 // number of days for present month (1 based)
    ;
}
function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
    return [
        year,
        month,
        day
    ];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
class $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        let era = 'AM';
        if (year <= 0) {
            era = 'AA';
            year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        }
        return new (0, CalendarDate/* CalendarDate */.ng)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
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
class $b956b2d7a6cf451f$export$d72e0c37005a4914 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
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
class $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
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
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
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



//# sourceMappingURL=EthiopicCalendar.module.js.map

// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/utils.mjs
var utils = __webpack_require__(31384);
;// ./node_modules/@internationalized/date/dist/HebrewCalendar.mjs



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


const $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
const $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $7c5f6fbf42389787$var$MONTH_DAYS = 29;
const $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
const $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
    return (0, utils/* mod */.z)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if ((0, utils/* mod */.z)(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
    let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
    let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
    let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
    return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
    return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
    let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
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
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $7c5f6fbf42389787$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $7c5f6fbf42389787$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
        let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $7c5f6fbf42389787$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $7c5f6fbf42389787$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new (0, CalendarDate/* CalendarDate */.ng)(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
        return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $7c5f6fbf42389787$var$getDaysInYear(date.year);
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
            if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}



//# sourceMappingURL=HebrewCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/IndianCalendar.mjs



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
const $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
class $82c358003bdda0a8$export$39f31c639fa15726 extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - (0, GregorianCalendar/* gregorianToJulianDay */.rG)(date.era, date.year, 1, 1);
        let leapMonth;
        if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = (0, GregorianCalendar/* isLeapYear */.U_)(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = (0, GregorianCalendar/* isLeapYear */.U_)(date.year) ? 31 : 30;
            yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
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
        let extendedYear = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
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
        if (date.month === 1 && (0, GregorianCalendar/* isLeapYear */.U_)(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
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



//# sourceMappingURL=IndianCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/IslamicCalendar.mjs


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

const $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
const $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new (0, CalendarDate/* CalendarDate */.ng)(calendar, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
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
class $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args), this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $f2f3e0e3a817edbd$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
let $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
    let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
    let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
    return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
class $f2f3e0e3a817edbd$export$5baab4758c231076 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
        let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
        let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
                let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new (0, CalendarDate/* CalendarDate */.ng)(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
    }
    constructor(){
        super(), this.identifier = 'islamic-umalqura';
        if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)).buffer);
        if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
            $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++){
                $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
            }
        }
    }
}



//# sourceMappingURL=IslamicCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/JapaneseCalendar.mjs



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


const $62225008020f0a13$var$ERA_START_DATES = [
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
const $62225008020f0a13$var$ERA_END_DATES = [
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
const $62225008020f0a13$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $62225008020f0a13$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
    const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
    let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new (0, CalendarDate/* CalendarDate */.ng)(date.year + eraAddend, date.month, date.day);
}
class $62225008020f0a13$export$b746ab2b60cdffbf extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
        return new (0, CalendarDate/* CalendarDate */.ng)(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $62225008020f0a13$var$toGregorian(date);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
        if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
            date.era = $62225008020f0a13$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
        }
        // Constrain in case we went before the first supported era.
        this.constrainDate(date);
    }
    constrainDate(date) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let end = $62225008020f0a13$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
            date.year = Math.max(1, Math.min(maxYear, date.year));
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
        }
        if (date.year === 1 && idx >= 0) {
            let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
            date.month = Math.max(startMonth, date.month);
            if (date.month === startMonth) date.day = Math.max(startDay, date.day);
        }
    }
    getEras() {
        return $62225008020f0a13$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let cur = $62225008020f0a13$var$ERA_START_DATES[era];
        let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
        if (next == null) // 9999 gregorian is the maximum year allowed.
        return 9999 - cur[0] + 1;
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args), this.identifier = 'japanese';
    }
}
function $62225008020f0a13$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        return $62225008020f0a13$var$ERA_START_DATES[idx];
    }
}



//# sourceMappingURL=JapaneseCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/PersianCalendar.mjs



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


const $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948320;
// Number of days from the start of the year to the start of each month.
const $f3ed2e4472ae7e25$var$MONTH_START = [
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
class $f3ed2e4472ae7e25$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let daysSinceEpoch = jd - $f3ed2e4472ae7e25$var$PERSIAN_EPOCH;
        let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
        let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
        let dayOfYear = daysSinceEpoch - farvardin1;
        let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
        let day = dayOfYear - $f3ed2e4472ae7e25$var$MONTH_START[month] + 1;
        return new (0, CalendarDate/* CalendarDate */.ng)(this, year, month + 1, day);
    }
    toJulianDay(date) {
        let jd = $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
        jd += $f3ed2e4472ae7e25$var$MONTH_START[date.month - 1];
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



//# sourceMappingURL=PersianCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/TaiwanCalendar.mjs



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


const $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
    let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    if (y > 0) return [
        'minguo',
        y
    ];
    else return [
        'before_minguo',
        1 - y
    ];
}
class $5f31bd6f0c8940b2$export$65e01080afcb0799 extends (0, GregorianCalendar/* GregorianCalendar */.FG) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let extendedYear = (0, GregorianCalendar/* getExtendedYear */.LA)(date.era, date.year);
        let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan(extendedYear);
        return new (0, CalendarDate/* CalendarDate */.ng)(this, era, year, date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
        date.era = era;
        date.year = year;
    }
    isInverseEra(date) {
        return date.era === 'before_minguo';
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getYearsInEra(date) {
        return date.era === 'before_minguo' ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    }
    constructor(...args){
        super(...args), this.identifier = 'roc' // Republic of China
        ;
    }
}
function $5f31bd6f0c8940b2$var$toGregorian(date) {
    let [era, year] = (0, GregorianCalendar/* fromExtendedYear */.f5)($5f31bd6f0c8940b2$var$gregorianYear(date));
    return new (0, CalendarDate/* CalendarDate */.ng)(era, year, date.month, date.day);
}



//# sourceMappingURL=TaiwanCalendar.module.js.map

;// ./node_modules/@internationalized/date/dist/createCalendar.mjs










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








function $64244302c3013299$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new (0, $8d73d47422ca7302$export$42d20a78301dee44)();
        case 'ethiopic':
            return new (0, $b956b2d7a6cf451f$export$26ba6eab5e20cd7d)();
        case 'ethioaa':
            return new (0, $b956b2d7a6cf451f$export$d72e0c37005a4914)();
        case 'coptic':
            return new (0, $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1)();
        case 'hebrew':
            return new (0, $7c5f6fbf42389787$export$ca405048b8fb5af)();
        case 'indian':
            return new (0, $82c358003bdda0a8$export$39f31c639fa15726)();
        case 'islamic-civil':
            return new (0, $f2f3e0e3a817edbd$export$2066795aadd37bfc)();
        case 'islamic-tbla':
            return new (0, $f2f3e0e3a817edbd$export$37f0887f2f9d22f7)();
        case 'islamic-umalqura':
            return new (0, $f2f3e0e3a817edbd$export$5baab4758c231076)();
        case 'japanese':
            return new (0, $62225008020f0a13$export$b746ab2b60cdffbf)();
        case 'persian':
            return new (0, $f3ed2e4472ae7e25$export$37fccdbfd14c5939)();
        case 'roc':
            return new (0, $5f31bd6f0c8940b2$export$65e01080afcb0799)();
        case 'gregory':
        default:
            return new (0, GregorianCalendar/* GregorianCalendar */.FG)();
    }
}



//# sourceMappingURL=createCalendar.module.js.map


/***/ }

}]);