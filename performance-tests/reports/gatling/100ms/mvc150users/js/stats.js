var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "22006",
        "ok": "21907",
        "ko": "99"
    },
    "minResponseTime": {
        "total": "83",
        "ok": "102",
        "ko": "83"
    },
    "maxResponseTime": {
        "total": "394",
        "ok": "394",
        "ko": "165"
    },
    "meanResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "114"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "22"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "112"
    },
    "percentiles2": {
        "total": "145",
        "ok": "145",
        "ko": "131"
    },
    "percentiles3": {
        "total": "231",
        "ok": "231",
        "ko": "152"
    },
    "percentiles4": {
        "total": "332",
        "ok": "333",
        "ko": "164"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21907,
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
        "count": 99,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1047.905",
        "ok": "1043.19",
        "ko": "4.714"
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
        "total": "22006",
        "ok": "21907",
        "ko": "99"
    },
    "minResponseTime": {
        "total": "83",
        "ok": "102",
        "ko": "83"
    },
    "maxResponseTime": {
        "total": "394",
        "ok": "394",
        "ko": "165"
    },
    "meanResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "114"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "22"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "112"
    },
    "percentiles2": {
        "total": "145",
        "ok": "145",
        "ko": "131"
    },
    "percentiles3": {
        "total": "231",
        "ok": "231",
        "ko": "152"
    },
    "percentiles4": {
        "total": "332",
        "ok": "333",
        "ko": "164"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21907,
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
        "count": 99,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1047.905",
        "ok": "1043.19",
        "ko": "4.714"
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
