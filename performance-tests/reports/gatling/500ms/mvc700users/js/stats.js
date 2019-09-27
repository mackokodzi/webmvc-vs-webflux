var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8719",
        "ok": "8719",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1920",
        "ok": "1920",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1681",
        "ok": "1681",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1660",
        "ok": "1660",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1889",
        "ok": "1889",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1901",
        "ok": "1901",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1907",
        "ok": "1907",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 452,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 158,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8109,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "379.087",
        "ok": "379.087",
        "ko": "-"
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
        "total": "8719",
        "ok": "8719",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1920",
        "ok": "1920",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1681",
        "ok": "1681",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1660",
        "ok": "1660",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1889",
        "ok": "1889",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1901",
        "ok": "1901",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1907",
        "ok": "1907",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 452,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 158,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8109,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "379.087",
        "ok": "379.087",
        "ko": "-"
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
