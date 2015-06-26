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

function exists_search_keyword() {
    if (document.getElementById("keywords").value == "") {
        show_required_search_keyword_feedback();
        return false;
    }

    return true;
}

function show_required_search_keyword_feedback() {
    document.getElementById("keywords").classList.add("empty_keywords");

    var errortext_id = "err_txt";
    if (document.getElementById(errortext_id)) {
        return;
    }

    var text = document.createElement("p");
    text.setAttribute("id", errortext_id);
    text.classList.add("err_txt");
    text.appendChild(document.createTextNode("キーワードを入力してください"));
    document.getElementById("searchform").appendChild(text);
}
