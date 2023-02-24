
CC.data = CC.data || {};
CC.data.googleAuthClientId = "800843789351-uaenl03be56t7l8l8be0ms54n7kc0al4.apps.googleusercontent.com";
CC.data.page = "home";
CC.data.showSignupCTA = false;
CC.data.maxLists = "25";
CC.data.lists = [];
CC.data.progress = {
courses: [],
lists: [],
};
CC.data.saved = {
courses: [],
lists: [],
};
CC.data = CC.data || {};
CC.data.notifications = [];
window.TOUCHSCREEN = false;
window.addEventListener("touchstart", () => {
document.body.classList.add("touch");
window.TOUCHSCREEN = true;
});

window.EXTRACT_URL = "https://us-central1-class-central-prod.cloudfunctions.net/extract";

window.CC.Class.Analytics = new window.Analytics({
url: "",
indexes: {"weekly":"2023_02_19","monthly":"2023_02"},
trackImpressions: true,
globalProps: {"abTests":[],"deviceType":"desktop","page":"home","user":[],"metadata":[],"original_referer":"direct","created":"2023-02-24T21:04:20+00:00","referrer_info":{"referrer":"https:\/\/www.classcentral.com\/university\/harvard","source":null,"term":null,"medium":null},"locationDetails":{"country":{"iso_code":"US","name":"United States"},"city":{"name":null},"location":{"accuracy_radius":1000,"latitude":37.751,"longitude":-97.822,"time_zone":"America\/Chicago"}},"user_agent":{"browser":{"family":"Chrome","major":"109","minor":"0","patch":"0"},"os":{"family":"Mac","major":"10","minor":"15","patch":"7","nickname":""},"device":{"type":"desktop","family":"Apple"}}}
});

CC.track = window.CC.Class.Analytics.track.bind(window.CC.Class.Analytics);
CC.trackGA = window.CC.Class.Analytics.trackGA.bind(window.CC.Class.Analytics);


// track pageview
    CC.track("pageview");

    
var clicky_site_ids = clicky_site_ids || [];
clicky_site_ids.push(100717247);

(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//static.getclicky.com/js';
    ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
})();