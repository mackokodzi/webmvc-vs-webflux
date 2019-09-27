var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8203",
        "ok": "8203",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1026",
        "ok": "1026",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "993",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1010",
        "ok": "1010",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1012",
        "ok": "1012",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 200,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8003,
        "percentage": 98
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
        "total": "372.864",
        "ok": "372.864",
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
        "total": "8203",
        "ok": "8203",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1026",
        "ok": "1026",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "993",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1010",
        "ok": "1010",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1012",
        "ok": "1012",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 200,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8003,
        "percentage": 98
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
        "total": "372.864",
        "ok": "372.864",
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
