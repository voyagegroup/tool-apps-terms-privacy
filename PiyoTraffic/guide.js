set_placeholeder_if_needed();

function set_placeholeder_if_needed() {
    var key = "visited";
    var visited = document.cookie.match(key);
    if (!visited) {
        var search_form = document.getElementById("keywords");
        search_form.setAttribute("placeholder", "例)通信量 節約");
        document.cookie = key + "=" + key;
    }
}

function exists_serach_keyword() {
    if (document.getElementById("keywords").value == "") {
        show_required_comment();
        return false;
    }

    return true;
}

function show_required_comment() {
    //TODO: デザインができたら実装
}
