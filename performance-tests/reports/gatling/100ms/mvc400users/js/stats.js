var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18230",
        "ok": "16896",
        "ko": "1334"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "177"
    },
    "maxResponseTime": {
        "total": "5435",
        "ok": "1155",
        "ko": "5435"
    },
    "meanResponseTime": {
        "total": "444",
        "ok": "389",
        "ko": "1141"
    },
    "standardDeviation": {
        "total": "336",
        "ok": "182",
        "ko": "773"
    },
    "percentiles1": {
        "total": "352",
        "ok": "341",
        "ko": "849"
    },
    "percentiles2": {
        "total": "529",
        "ok": "485",
        "ko": "1575"
    },
    "percentiles3": {
        "total": "893",
        "ok": "757",
        "ko": "2538"
    },
    "percentiles4": {
        "total": "2165",
        "ok": "957",
        "ko": "2789"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16259,
        "percentage": 89
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 637,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1334,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "792.609",
        "ok": "734.609",
        "ko": "58"
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
        "total": "18230",
        "ok": "16896",
        "ko": "1334"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "177"
    },
    "maxResponseTime": {
        "total": "5435",
        "ok": "1155",
        "ko": "5435"
    },
    "meanResponseTime": {
        "total": "444",
        "ok": "389",
        "ko": "1141"
    },
    "standardDeviation": {
        "total": "336",
        "ok": "182",
        "ko": "773"
    },
    "percentiles1": {
        "total": "352",
        "ok": "341",
        "ko": "849"
    },
    "percentiles2": {
        "total": "529",
        "ok": "485",
        "ko": "1575"
    },
    "percentiles3": {
        "total": "893",
        "ok": "757",
        "ko": "2538"
    },
    "percentiles4": {
        "total": "2165",
        "ok": "957",
        "ko": "2789"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16259,
        "percentage": 89
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 637,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1334,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "792.609",
        "ok": "734.609",
        "ko": "58"
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
