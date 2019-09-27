var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20350",
        "ok": "20337",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "101",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "251",
        "ok": "251",
        "ko": "113"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "87"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
        "ko": "12"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "83"
    },
    "percentiles2": {
        "total": "119",
        "ok": "119",
        "ko": "87"
    },
    "percentiles3": {
        "total": "165",
        "ok": "166",
        "ko": "113"
    },
    "percentiles4": {
        "total": "207",
        "ok": "207",
        "ko": "113"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20337,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 13,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "969.048",
        "ok": "968.429",
        "ko": "0.619"
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
        "total": "20350",
        "ok": "20337",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "101",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "251",
        "ok": "251",
        "ko": "113"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "87"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
        "ko": "12"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "83"
    },
    "percentiles2": {
        "total": "119",
        "ok": "119",
        "ko": "87"
    },
    "percentiles3": {
        "total": "166",
        "ok": "166",
        "ko": "113"
    },
    "percentiles4": {
        "total": "207",
        "ok": "207",
        "ko": "113"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20337,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 13,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "969.048",
        "ok": "968.429",
        "ko": "0.619"
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
