var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "70212",
        "ok": "70212",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9720",
        "ok": "9720",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "percentiles1": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "percentiles2": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1911",
        "ok": "1911",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3243",
        "ok": "3243",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42428,
        "percentage": 60
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 19426,
        "percentage": 28
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8358,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1595.727",
        "ok": "1595.727",
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
        "total": "70212",
        "ok": "70212",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9720",
        "ok": "9720",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "percentiles1": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "percentiles2": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1911",
        "ok": "1911",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3243",
        "ok": "3243",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42428,
        "percentage": 60
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 19426,
        "percentage": 28
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8358,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1595.727",
        "ok": "1595.727",
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
