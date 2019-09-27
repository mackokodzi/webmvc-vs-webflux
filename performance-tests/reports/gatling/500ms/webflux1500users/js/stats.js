var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "51166",
        "ok": "51166",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1233",
        "ok": "1233",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "591",
        "ok": "591",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles1": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "percentiles2": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "percentiles3": {
        "total": "724",
        "ok": "724",
        "ko": "-"
    },
    "percentiles4": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50738,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 427,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1764.345",
        "ok": "1764.345",
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
        "total": "51166",
        "ok": "51166",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1233",
        "ok": "1233",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "591",
        "ok": "591",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles1": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "percentiles2": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "percentiles3": {
        "total": "724",
        "ok": "724",
        "ko": "-"
    },
    "percentiles4": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50738,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 427,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1764.345",
        "ok": "1764.345",
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
