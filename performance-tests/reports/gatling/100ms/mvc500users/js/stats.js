var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20615",
        "ok": "19472",
        "ko": "1143"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "182"
    },
    "maxResponseTime": {
        "total": "9772",
        "ok": "1681",
        "ko": "9772"
    },
    "meanResponseTime": {
        "total": "488",
        "ok": "437",
        "ko": "1364"
    },
    "standardDeviation": {
        "total": "394",
        "ok": "240",
        "ko": "1004"
    },
    "percentiles1": {
        "total": "434",
        "ok": "412",
        "ko": "965"
    },
    "percentiles2": {
        "total": "620",
        "ok": "592",
        "ko": "1841"
    },
    "percentiles3": {
        "total": "989",
        "ok": "883",
        "ko": "2594"
    },
    "percentiles4": {
        "total": "2142",
        "ok": "1133",
        "ko": "4585"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18022,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1310,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 140,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 1143,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "824.6",
        "ok": "778.88",
        "ko": "45.72"
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
        "total": "20615",
        "ok": "19472",
        "ko": "1143"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "182"
    },
    "maxResponseTime": {
        "total": "9772",
        "ok": "1681",
        "ko": "9772"
    },
    "meanResponseTime": {
        "total": "488",
        "ok": "437",
        "ko": "1364"
    },
    "standardDeviation": {
        "total": "394",
        "ok": "240",
        "ko": "1004"
    },
    "percentiles1": {
        "total": "433",
        "ok": "412",
        "ko": "965"
    },
    "percentiles2": {
        "total": "620",
        "ok": "592",
        "ko": "1841"
    },
    "percentiles3": {
        "total": "989",
        "ok": "883",
        "ko": "2594"
    },
    "percentiles4": {
        "total": "2142",
        "ok": "1133",
        "ko": "4585"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18022,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1310,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 140,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 1143,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "824.6",
        "ok": "778.88",
        "ko": "45.72"
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
