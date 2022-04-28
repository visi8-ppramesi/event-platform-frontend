import settings from "@/settings";

export const toRelativeTime = function(time){
    let timestamp = time
    if(typeof time == 'object'){
        timestamp = time.getTime()
    }

    const seconds = Math.floor(timestamp / 1000);
    const now = Math.floor(new Date().getTime()) / 1000
    // const oldTimestamp = seconds - now

    const difference = seconds - now
    let output = ``
    let unit
    if (Math.abs(difference) < 60) {
        // Less than a minute has passed:
        output = difference
        unit = 'second'
    } else if (Math.abs(difference) < 3600) {
        // Less than an hour has passed:
        output = Math.floor(difference / 60)
        unit = 'minute'
    } else if (Math.abs(difference) < 86400) {
        // Less than a day has passed:
        output = Math.floor(difference / 3600)
        unit = 'hour'
    } else if (Math.abs(difference) < 2620800) {
        // Less than a month has passed:
        output = Math.floor(difference / 86400)
        unit = 'day'
    } else if (Math.abs(difference) < 31449600) {
        // Less than a year has passed:
        output = Math.floor(difference / 2620800)
        unit = 'month'
    } else {
        // More than a year has passed:
        output = Math.floor(difference / 31449600)
        unit = 'year'
    }

    const formatter = new Intl.RelativeTimeFormat(settings.locale)
    return formatter.format(output, unit)
}