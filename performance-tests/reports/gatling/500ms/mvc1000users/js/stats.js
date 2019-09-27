var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9084",
        "ok": "9084",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2563",
        "ok": "2563",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2353",
        "ok": "2353",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2527",
        "ok": "2527",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2531",
        "ok": "2531",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2539",
        "ok": "2539",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2545",
        "ok": "2545",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 400,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 200,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8484,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "378.5",
        "ok": "378.5",
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
        "total": "9084",
        "ok": "9084",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2563",
        "ok": "2563",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2353",
        "ok": "2353",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2527",
        "ok": "2527",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2531",
        "ok": "2531",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2539",
        "ok": "2539",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2545",
        "ok": "2545",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 400,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 200,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8484,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "378.5",
        "ok": "378.5",
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
