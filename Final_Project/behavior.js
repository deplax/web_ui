document.addEventListener("DOMContentLoaded", function() {
 
    ///////////////////////전역변수 공간 시작//////////////////////////
    var urlList = {
            "menu_data": "http://localhost:8000/menu.json",
            "titleSet": "http://localhost:8000/book_title.json",
            "navSet": "http://localhost:8000/nav.json"
        };
        //urlList의 키를 전역변수로 추가
        //아래의 코드 조차도 동적으로 생성 가능한 구조
    var urlDBList = {
        "book_main": "http://localhost:8000/db_book_main.json",
        "book_family": "http://localhost:8000/db_book_family.json",
        "book_health": "http://localhost:8000/db_book_health.json",
        "book_economy": "http://localhost:8000/db_book_economy.json",
        "book_science" : "null",
        "book_cartoon" : "null",
        "book_noval" : "null",
        "book_child" : "null",
        "book_journey" : "null",
        "book_history" : "null",
        "book_art" : "null인",
        "book_foreign" : "null",
        "book_cook" : "null",
        "book_people" : "null",
        "book_politics" : "null",
        "book_region" : "null",
        "book_tech" : "null"

    };
    var finalLoad_section; //위치 확인자
    var data_Box_new = {}; //데이터를 차곡차곡 받기 위한 빈 전역 변수
    

    //DB를 받아서 카드쉘프와 카드를 나열하는 세션
    var id_box = init({
        "frm_bookShelf": "#frm_bookShelf",
        "frm_bookcard": "#frm_bookcard",
        "frm_dropdownMenu": "#frm_dropdownMenu",
        "article": "#article",
        "menu_dropdown": "#menu_dropdown ul"
    });

    //여기에서 각 배열을 받아 id를 각각 셀렉팅 해준다.
    function init(id_list) {
        for (var e in id_list)
            id_list[e] = document.querySelector(id_list[e]);
        return id_list;
        
        for (var i = 0; i < Object.keys(urlList).length; i++) {
            eval("var " + Object.keys(urlList)[i]);
        }
    }
    ///////////////////////전역변수 공간 끝//////////////////////////



    //DropDown 메뉴 토글 세션
    function toggle() {
        var evt_btn_g = document.querySelector("#btn_g").parentNode;
        var menu_drop = document.querySelector("#menu_dropdown");
        var sel_body = document.querySelector("body");
        sel_body.addEventListener("click", dropdownToggle_dis, false);
        evt_btn_g.addEventListener("click", dropdownToggle, false);

        function dropdownToggle_dis(e) {
            menu_drop.style.display = "none";
        }

        function dropdownToggle(e) {
            if (menu_drop.style.display === "block")
                menu_drop.style.display = "none";
            else
                menu_drop.style.display = "block";
            e.stopPropagation();
        }
    }
    toggle();


    //쉘프를 한개씩만 로드하기 위한 세션
    function oneLoad(menu, boxName, url) {
        function dbLoad(change) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.send(null);
            // readyState 값이 변경될 때마다 이 콜백함수가 불린다.
            request.onreadystatechange = change;
        }
        //DB를 로드해서 JSON형식으로 파싱한다.
        dbLoad(function () {
            if (this.readyState === 4 && this.status === 200) {
                result = this.responseText;
                result = JSON.parse(result);
                menu[boxName] = result;

                //이 디비가 로드될 때 해야할 일 진행 코드 필요
                makeShelf(titleSet, navSet, data_Box_new, boxName);
            }
        })
    }


    //XMLHttpRequest 세션
    function jsonLoad() {
        var cnt = 0;
        var request = new Array;
        //여기는 DB를 불러오는 세션
        function dbLoad(change) {
            for (var i = 0; i < Object.keys(urlList).length; i++) {
                var url = urlList[Object.keys(urlList)[i]];
                request[i] = new XMLHttpRequest();
                request[i].open("GET", url, true);
                request[i].send(null);
                // readyState 값이 변경될 때마다 이 콜백함수가 불린다.
                request[i].onreadystatechange = change;
            }
        }
        //DB를 로드해서 JSON형식으로 파싱한다.
        dbLoad(function (requtest) {
            if (this.readyState === 4 && this.status === 200) {
                result = this.responseText;
                result = JSON.parse(result);
                //이 변수를 나눠서 저장하는 방법이 필요

                for (var i = 0; i < Object.keys(urlList).length; i++) {
                    if (urlList[Object.keys(urlList)[i]] === this.responseURL)
                        eval(Object.keys(urlList)[i] + " = result");
                }

                //이거 뭔가 맘에 안들긴 하는데 다 불러온 다음 호출하려면 카운터플래그가 좋다고 생각.
                cnt++;
                if (cnt === Object.keys(urlList).length)
                    excute();
            }
        })
    }
    jsonLoad();



    //드롭다운 메뉴 생성
    function addDropdown(frame, menu_data, target) {
        var frm_bookcard_str = "";
        var frm_bookcard_origin = frame.innerText;
        for (var i = 0; i < Object.keys(menu_data.dropdownSet).length; i++) {
            var str = frm_bookcard_origin.
            replace(/<%=menu%>/, Object.keys(menu_data.dropdownSet)[i]).
            replace(/<%=menu_str%>/, menu_data.dropdownSet[Object.keys(menu_data.dropdownSet)[i]]);
            frm_bookcard_str += str;
        }
        target.innerHTML = frm_bookcard_str;
    }



    //쉘프를 동적, 순차적으로 만들게 한다.
    function makeShelf(titleSet, navSet, data, section) {
        finalLoad_section = section;
        var frm_bookcard_str = "";
        var frm_bookcard_origin = id_box.frm_bookShelf.innerText;
        var page = "main";
        if (section !== "main")
            page = "other";
        for (var i = 0; i < Object.keys(data[section]).length; i++) {
            var str = frm_bookcard_origin.
            replace(/<%=btn_more_id%>/, "btn_more_" + i).
            replace(/<%=title_main%>/, titleSet[page][i].title_main).
            replace(/<%=title_sub%>/, titleSet[page][i].title_sub).
            replace(/<%=card_section%>/, loadData(data[section]["list_" + (i + 1)]));
            frm_bookcard_str += str;
        }
        id_box.article.innerHTML = frm_bookcard_str;

        //네비게이션 소스 추가해야 함
    }

    //데이터를 카드에 끼움.
    function loadData(data, flag) {
        var frm_bookcard_str = "";
        var frm_bookcard_origin = id_box.frm_bookcard.innerText;

        var start = 0;
        var end = data.length;
        //기본적으로 6개만 가져오지만 더보기를 누를 경우 해당 쉘프 나머지 카드 추가
        if (flag === 1) {
            if (data.length > 6)
                start = 7
        } else {
            if (data.length > 6)
                end = 6;
        }

        for (var i = start; i < end; i++) {
            var str = frm_bookcard_origin.
            replace(/<%=url_book%>/, data[i].url_book).
            replace(/<%=img_book%>/, data[i].img_book).
            replace(/<%=book_name%>/, data[i].book_name).
            replace(/<%=writer%>/, data[i].writer).
            replace(/<%=book_price%>/, data[i].book_price);
            frm_bookcard_str += str;
        }
        return frm_bookcard_str;
    }



    //카드 더보기를 위한 세션
    function appendCard() {
        document.getElementById("article").addEventListener("click", function (e) {
            if (e.target.className === "more_button") {
                var id = e.target.id;
                var num = id.split('_');
                var btn = document.getElementById(id);
                var ul = btn.parentNode.parentNode.parentNode.childNodes[3];
                // 0을 빼서 숫자로 케스팅 해준다.
                var castNum = num[num.length - 1] - 0;
                var dataStr = loadData(data_Box_new[finalLoad_section]["list_" + (castNum + 1)], 1);
                ul.innerHTML += dataStr;
                btn.style.display = "none";
                ul.style.overflow = "visible";
                ul.style.width = "100%";
            }
        });
    }


    //드롭다운에 이벤트 생성
    function dropdownEvent() {
        document.getElementById("menu_dropdown").addEventListener("click", function (e) {
            console.log(e.target.parentNode.id);
            oneLoad(data_Box_new, e.target.parentNode.id, urlDBList["book_" + e.target.parentNode.id]);
        });
    }


    //데이터 다 받고 실행하는 함수
    function excute() {
        addDropdown(id_box.frm_dropdownMenu, menu_data, id_box.menu_dropdown);
        //메인 페이지를 불러올 경우는 1번에 한함으로 지정한다.
        oneLoad(data_Box_new, "main", urlDBList.book_main);
        //makeShelf(titleSet, navSet, data_Box_new, "main");
        appendCard();
        dropdownEvent();
    }
});






//-- 아랫 막음판