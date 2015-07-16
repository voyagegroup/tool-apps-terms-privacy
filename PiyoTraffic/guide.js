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
