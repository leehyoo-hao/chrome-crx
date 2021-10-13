/*global chrome*/
chrome.runtime.onInstalled.addListener(
    function() {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
            chrome.declarativeContent.onPageChanged.addRules(
                [
                    {
                        //运行插件允许的url规则
                        conditions: [
                            new chrome.declarativeContent.PageStateMatcher({ pageUrl: { hostEquals: 'www.baidu.com'} }),

                        ],
                        actions: [
                            new window.chrome.declarativeContent.ShowPageAction(),
                        ]
                    }
                ]
            )
        })
    }
);