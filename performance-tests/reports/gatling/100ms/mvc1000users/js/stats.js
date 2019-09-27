var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19062",
        "ok": "17740",
        "ko": "1322"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "103",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "33425",
        "ok": "33425",
        "ko": "19682"
    },
    "meanResponseTime": {
        "total": "1103",
        "ok": "1040",
        "ko": "1952"
    },
    "standardDeviation": {
        "total": "1152",
        "ok": "1109",
        "ko": "1366"
    },
    "percentiles1": {
        "total": "951",
        "ok": "902",
        "ko": "1703"
    },
    "percentiles2": {
        "total": "1543",
        "ok": "1503",
        "ko": "2230"
    },
    "percentiles3": {
        "total": "2070",
        "ok": "2015",
        "ko": "3618"
    },
    "percentiles4": {
        "total": "5145",
        "ok": "5089",
        "ko": "7014"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7894,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2821,
        "percentage": 15
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7025,
        "percentage": 37
    },
    "group4": {
        "name": "failed",
        "count": 1322,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "501.632",
        "ok": "466.842",
        "ko": "34.789"
    }
},
contents: {
"req_register-car-te-ceeeb": {
        type: "REQUEST",
        name: "register-car-test",
path: "register-car-test",
pathFormatted: "req_register-car-te-ceeeb",
stats: {
    "name": "register-car-test",
    "numberOfRequests": {
        "total": "19062",
        "ok": "17740",
        "ko": "1322"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "103",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "33425",
        "ok": "33425",
        "ko": "19682"
    },
    "meanResponseTime": {
        "total": "1103",
        "ok": "1040",
        "ko": "1952"
    },
    "standardDeviation": {
        "total": "1152",
        "ok": "1109",
        "ko": "1366"
    },
    "percentiles1": {
        "total": "951",
        "ok": "902",
        "ko": "1703"
    },
    "percentiles2": {
        "total": "1543",
        "ok": "1503",
        "ko": "2230"
    },
    "percentiles3": {
        "total": "2070",
        "ok": "2015",
        "ko": "3618"
    },
    "percentiles4": {
        "total": "5145",
        "ok": "5089",
        "ko": "7014"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7894,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2821,
        "percentage": 15
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7025,
        "percentage": 37
    },
    "group4": {
        "name": "failed",
        "count": 1322,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "501.632",
        "ok": "466.842",
        "ko": "34.789"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
