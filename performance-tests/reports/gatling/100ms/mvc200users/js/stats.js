var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18547",
        "ok": "17947",
        "ko": "600"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "103",
        "ko": "88"
    },
    "maxResponseTime": {
        "total": "4247",
        "ok": "975",
        "ko": "4247"
    },
    "meanResponseTime": {
        "total": "216",
        "ok": "195",
        "ko": "843"
    },
    "standardDeviation": {
        "total": "193",
        "ok": "96",
        "ko": "681"
    },
    "percentiles1": {
        "total": "157",
        "ok": "155",
        "ko": "488"
    },
    "percentiles2": {
        "total": "257",
        "ok": "245",
        "ko": "1563"
    },
    "percentiles3": {
        "total": "411",
        "ok": "377",
        "ko": "1920"
    },
    "percentiles4": {
        "total": "1298",
        "ok": "544",
        "ko": "2623"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17944,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 600,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "883.19",
        "ok": "854.619",
        "ko": "28.571"
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
        "total": "18547",
        "ok": "17947",
        "ko": "600"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "103",
        "ko": "88"
    },
    "maxResponseTime": {
        "total": "4247",
        "ok": "975",
        "ko": "4247"
    },
    "meanResponseTime": {
        "total": "216",
        "ok": "195",
        "ko": "843"
    },
    "standardDeviation": {
        "total": "193",
        "ok": "96",
        "ko": "681"
    },
    "percentiles1": {
        "total": "157",
        "ok": "155",
        "ko": "488"
    },
    "percentiles2": {
        "total": "257",
        "ok": "245",
        "ko": "1563"
    },
    "percentiles3": {
        "total": "411",
        "ok": "377",
        "ko": "1920"
    },
    "percentiles4": {
        "total": "1298",
        "ok": "544",
        "ko": "2623"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17944,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 600,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "883.19",
        "ok": "854.619",
        "ko": "28.571"
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
