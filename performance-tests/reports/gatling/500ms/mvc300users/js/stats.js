var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8102",
        "ok": "8102",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "924",
        "ok": "924",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "752",
        "ok": "752",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles1": {
        "total": "647",
        "ok": "647",
        "ko": "-"
    },
    "percentiles2": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles3": {
        "total": "908",
        "ok": "908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "915",
        "ok": "915",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4175,
        "percentage": 52
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3927,
        "percentage": 48
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "385.81",
        "ok": "385.81",
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
        "total": "8102",
        "ok": "8102",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "924",
        "ok": "924",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "752",
        "ok": "752",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles1": {
        "total": "647",
        "ok": "647",
        "ko": "-"
    },
    "percentiles2": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles3": {
        "total": "908",
        "ok": "908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "915",
        "ok": "915",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4175,
        "percentage": 52
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3927,
        "percentage": 48
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "385.81",
        "ok": "385.81",
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
