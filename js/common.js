const KEY = "_API_KEY_";

function getCharaList(name, callback) {
    $.ajax({
        type: "GET",
        url: "https://developer-lostark.game.onstove.com/characters/" + getApiKey() + "/siblings",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-type","application/json");
            xhr.setRequestHeader("authorization","bearer " + apiKey);
        },
        success: (res) => {
            console.log(res);
            if(callback) {
                callback.call(this, res);
            }
        }
    });
}

function getApiKey() {
    let apiKey = localStorage.getItem(KEY);
    if(!apiKey) {
        movePage("/setting/apiKeyInit.html");
        return false;
    }
    return apiKey;
}

function setApiKey(apiKey) {
    localStorage.setItem(KEY, apiKey);
}

function movePage(path) {
    location.href = "" + path;
}
