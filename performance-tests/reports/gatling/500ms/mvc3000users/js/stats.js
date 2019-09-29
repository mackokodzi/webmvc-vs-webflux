var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10883",
        "ok": "10883",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8385",
        "ok": "8385",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6544",
        "ok": "6544",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2212",
        "ok": "2212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7828",
        "ok": "7828",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7931",
        "ok": "7931",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7995",
        "ok": "7995",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8053",
        "ok": "8053",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 201,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 262,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10420,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "362.767",
        "ok": "362.767",
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
        "total": "10883",
        "ok": "10883",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8385",
        "ok": "8385",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6544",
        "ok": "6544",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2212",
        "ok": "2212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7829",
        "ok": "7828",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7931",
        "ok": "7931",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7995",
        "ok": "7995",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8053",
        "ok": "8053",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 201,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 262,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10420,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "362.767",
        "ok": "362.767",
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
