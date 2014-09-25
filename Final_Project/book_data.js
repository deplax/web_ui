var id_box = init({
	area_booklist_ul_up : "#list_book_up",
	area_booklist_ul_down : "#list_book_down",
	frm_bookcard : "#frm_bookcard"
});

//여기에서 각 배열을 받아 id를 각각 셀렉팅 해준다.
function init(id_list){
	for(var e in id_list)
		id_list[e] = document.querySelector(id_list[e]);
	return id_list;
}

data_Box = {
	book_data :
	{
		book_main_up : 
		[{
			url_book : "http://play.google.com/store/books/details/%EC%82%AC%EC%9D%B4%ED%86%A0_%EB%8B%A4%EC%B9%B4%EC%8B%9C_%EC%9E%A1%EB%8B%B4%EC%9D%B4_%EB%8A%A5%EB%A0%A5%EC%9D%B4%EB%8B%A4?id=yA2lAgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/yA2lAgAAQBAJ?fife=w340-rw",
			book_name : "잡담이 능력이다",
			writer : "사이토 다카시",
			book_price : "₩9,100"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B0%95%EC%A7%84%EC%A7%84_%EC%95%84%EB%AC%B4%EB%8F%84_%EC%9A%B8%EC%A7%80_%EC%95%8A%EB%8A%94_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%97%86%EB%8B%A4?id=-SQzAAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/-SQzAAAAQBAJ?fife=w340-rw",
			book_name : "아무도 울지 않는 연애는 없다",
			writer : "박진진",
			book_price : "₩6,400"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%BD%94%EC%9D%B4%EC%BC%80%EB%A5%98%EB%85%B8%EC%8A%A4%EC%BC%80_%EC%83%9D%EA%B0%81_%EB%B2%84%EB%A6%AC%EA%B8%B0%EC%97%B0%EC%8A%B5?id=gLCQAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/gLCQAwAAQBAJ?fife=w340-rw",
			book_name : "생각 버리기연습",
			writer : "코이케류노스케",
			book_price : "₩9,600"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC",
			img_book : "https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w340-rw",
			book_name : "어서와 연애는 처음이지?",
			writer : "장해정",
			book_price : "₩980"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%A7%84%EC%A0%95%EC%B2%A0_%EC%97%B4%EC%8B%AC%ED%9E%88_%EC%82%B0%EB%8B%A4%EB%8A%94_%EA%B2%83%EA%B3%BC_%EC%9E%98_%EC%82%B0%EB%8B%A4%EB%8A%94_%EA%B2%83%EC%9D%98_%EC%B0%A8%EC%9D%B4%EB%8A%94_%EB%AD%98%EA%B9%8C?id=kYxO_2Fr_tQC",
			img_book : "https://encrypted.google.com/books/images/frontcover/kYxO_2Fr_tQC?fife=w340-rw",
			book_name : "열심히 산다는 것과 잘 산다는 것의 차이는 뭘까",
			writer : "진정철",
			book_price : "₩1,500"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%8B%A0%EC%A0%95%EA%B7%BC_%EB%A7%88%ED%9D%94_%EB%85%BC%EC%96%B4%EB%A5%BC_%EC%9D%BD%EC%96%B4%EC%95%BC_%ED%95%A0_%EC%8B%9C%EA%B0%84?id=izegIVEr2AcC",
			img_book : "https://encrypted.google.com/books/images/frontcover/izegIVEr2AcC?fife=w340-rw",
			book_name : "마흔,논어를 읽어야 할 시간: 인생의 굽이길에서 공자를 만나다",
			writer : "신정근",
			book_price : "₩12,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%B5%9C%EC%A0%95_30%EC%9D%BC_%EC%95%88%EC%97%90_%EB%82%B4_%EC%82%AC%EB%9E%8C_%EB%A7%8C%EB%93%A4%EA%B8%B0?id=LF9UMl9DALsC",
			img_book : "https://encrypted.google.com/books/images/frontcover/LF9UMl9DALsC?fife=w340-rw",
			book_name : "30일 안에 내 사람 만들기",
			writer : "최정",
			book_price : "₩8,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%8B%A0%EC%A0%95%EC%9D%80_%EB%84%88%EC%97%86%EC%9D%B8_%EC%95%88%EB%8F%BC_2%EA%B6%8C_%EC%99%84%EA%B2%B0?id=MEOnAgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/MEOnAgAAQBAJ?fife=w340-rw",
			book_name : "너없인 안돼 2권 (완결)",
			writer : "신정은",
			book_price : "₩3,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9A%94%ED%95%9C_%EB%B3%BC%ED%94%84%EA%B0%95_%ED%8F%B0_%EA%B4%B4%ED%85%8C_%EC%A0%8A%EC%9D%80_%EB%B2%A0%EB%A5%B4%ED%85%8C%EB%A5%B4%EC%9D%98_%EC%8A%AC%ED%94%94_%ED%95%9C%EA%B8%80%ED%8C%90?id=w5ovsKXL0IQC",
			img_book : "https://encrypted.google.com/books/images/frontcover/w5ovsKXL0IQC?fife=w340-rw",
			book_name : "젊은 베르테르의 슬픔 (한글판)",
			writer : "요한 볼프강 폰 괴테",
			book_price : "₩1,500"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%BC%EC%A7%80_%EC%9C%A1%EC%B2%B4_%EC%A7%84%ED%99%94_2?id=YqG8z5kOrfQC",
			img_book : "https://encrypted.google.com/books/images/frontcover/YqG8z5kOrfQC?fife=w340-rw",
			book_name : "육체 진화 2",
			writer : "일지",
			book_price : "₩3,200"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B0%B1%EC%8A%B9%ED%9B%84_60%EC%96%B5%EB%B6%84%EC%9D%98_1_02%EA%B6%8C?id=ashKCy_h5-kC",
			img_book : "https://encrypted.google.com/books/images/frontcover/ashKCy_h5-kC?fife=w340-rw",
			book_name : "60억분의 1 02권",
			writer : "백승후",
			book_price : "₩3,200"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%84%B1%EC%83%81%EC%98%81_%EB%8D%94_%EA%B2%8C%EC%9D%B4%EB%A8%B8_%ED%8C%90%ED%83%80%EC%A7%80%EC%95%84_2?id=mLS9AgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/mLS9AgAAQBAJ?fife=w340-rw",
			book_name : "더 게이머 판타지아 2",
			writer : "성상영",
			book_price : "₩3,200"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B2%95%EB%A5%9C_%EC%9D%B8%EC%83%9D_%EC%88%98%EC%97%85?id=qavwAQAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/qavwAQAAQBAJ?fife=w340-rw",
			book_name : "인생 수업",
			writer : "법륜",
			book_price : "₩8,450"
		}],

		book_main_down :
		[{
			url_book : "http://play.google.com/store/books/details/%EA%B9%80%EB%82%98%EC%97%B0_%EC%9D%B8%EA%B8%B0_%EC%9E%AC%ED%85%8C%ED%81%AC_%EB%B8%94%EB%A1%9C%EA%B1%B0_%EC%9A%94%EB%8B%88%EB%82%98%EC%9D%98_%EB%8C%80%ED%95%99%EC%83%9D_%EC%9E%AC%ED%85%8C%ED%81%AC?id=qB57CPcb9U0C",
			img_book : "https://encrypted.google.com/books/images/frontcover/qB57CPcb9U0C?fife=w340-rw",
			book_name : "인기 재테크 블로거 요니나의 대학생 재테크",
			writer : "김나연",
			book_price : "₩6,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EA%B3%BC%ED%95%99%EB%8F%99%EC%95%84_%EB%94%94%EC%A7%80%ED%84%B8_%ED%8E%B8%EC%A7%91%EB%B6%80_%EC%B6%9C%ED%87%B4%EA%B7%BC_%ED%95%9C%EB%BC%98%EC%A7%80%EC%8B%9D_%EC%8B%9C%EB%A6%AC%EC%A6%88_by_%EA%B3%BC%ED%95%99%EB%8F%99%EC%95%84_%EC%B2%B4%ED%97%98%ED%8C%90_7?id=ZWoxAAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/ZWoxAAAAQBAJ?fife=w340-rw",
			book_name : "출퇴근 한뼘지식 시리즈 by 과학동아 체험판 7",
			writer : "과학동아 디지털 편집부",
			book_price : "무료"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EC%8B%9C%EB%85%B8_%EC%84%B8%EC%9D%B4%EC%9D%B4%EC%B9%98_10%EC%9D%B8_%EC%9D%B4%ED%95%98_%ED%9A%8C%EC%82%AC%EB%A5%BC_%EA%B2%BD%EC%98%81%ED%95%98%EB%8A%94_%EB%B2%95?id=RTj95frdSz8C",
			img_book : "https://encrypted.google.com/books/images/frontcover/RTj95frdSz8C?fife=w340-rw",
			book_name : "10인 이하 회사를 경영하는 법",
			writer : "이시노 세이이치",
			book_price : "₩6,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EA%B3%BC%ED%95%99%EB%8F%99%EC%95%84%EB%94%94%EC%A7%80%ED%84%B8%ED%8E%B8%EC%A7%91%EB%B6%80_%EC%B6%9C%ED%87%B4%EA%B7%BC_%ED%95%9C%EB%BC%98%EC%A7%80%EC%8B%9D_%EC%8B%9C%EB%A6%AC%EC%A6%88_by_%EA%B3%BC%ED%95%99%EB%8F%99%EC%95%84_%EC%B2%B4%ED%97%98%ED%8C%9010?id=kQkeAgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/kQkeAgAAQBAJ?fife=w340-rw",
			book_name : "출퇴근 한뼘지식 시리즈 by 과학동아 체험판10",
			writer : "과학동아디지털편집부",
			book_price : "무료"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%8B%A0%EB%8F%99%EC%9D%BC_%EC%8A%88%ED%8D%BC%EB%A6%AC%EC%B9%98%EC%9D%98_%EC%8A%B5%EA%B4%80?id=s0v8Jdx1wNYC",
			img_book : "https://encrypted.google.com/books/images/frontcover/s0v8Jdx1wNYC?fife=w340-rw",
			book_name : "슈퍼리치의 습관",
			writer : "신동일",
			book_price : "₩9,100"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EA%B3%B5%EC%9E%90_%EB%85%BC%EC%96%B4_%EB%AA%85%EB%AC%B8_%EA%B0%80%EB%A5%B4%EC%B9%A8?id=zJl_D2J5k6cC",
			img_book : "https://encrypted.google.com/books/images/frontcover/zJl_D2J5k6cC?fife=w340-rw",
			book_name : "논어 명문 가르침",
			writer : "공자",
			book_price : "₩5,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%97%88%EC%84%9C%EC%9C%A4_%EC%8B%A0%EC%B0%AC%EC%98%A5_%EC%96%B8%EB%8B%88%EC%9D%98_%EB%B9%84%EB%B0%80%ED%86%B5%EC%9E%A5?id=3Vs_Tiasao0C",
			img_book : "https://encrypted.google.com/books/images/frontcover/3Vs_Tiasao0C?fife=w340-rw",
			book_name : "언니의 비밀통장",
			writer : "허서윤,신찬옥",
			book_price : "₩10,400"
		}],

		book_family_up :
		[{
			url_book : "http://play.google.com/store/books/details/%ED%99%A9%EA%B7%BC%EA%B8%B0_%EA%B2%8C%EC%9C%BC%EB%A6%84%EB%B1%85%EC%9D%B4_%ED%83%88%EC%B6%9C%ED%95%99%EA%B5%90?id=q9sZBAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/q9sZBAAAQBAJ?fife=w340-rw",
			book_name : "게으름뱅이 탈출학교: 시간의 소중함을 모르는 아이들을 위한 시간관리의 지혜 (어린이 자기계발학교 1)",
			writer : "황근기",
			book_price : "₩6,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EB%AF%BC%EC%8B%9D_%EC%B4%88%EB%93%B1%EA%B3%A0%EB%AF%BC_%ED%83%88%EC%B6%9C%ED%95%99%EA%B5%90?id=3as9BAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/3as9BAAAQBAJ?fife=w340-rw",
			book_name : "초등고민 탈출학교: 초등학생이 가장 고민하는 30가지 심리문제에 답하는 책 (어린이 자기계발학교 5)",
			writer : "이민식",
			book_price : "₩6,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%85%B8%EC%A7%80%EC%98%81_%EC%8B%9C%ED%97%98%EB%B6%88%EC%95%88_%ED%83%88%EC%B6%9C%ED%95%99%EA%B5%90?id=0NsZBAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/0NsZBAAAQBAJ?fife=w340-rw",
			book_name : "시험불안 탈출학교: 실력만큼 성적이 나오지 않는 어린이를 위한 (어린이 자기계발학교 2)",
			writer : "노지영",
			book_price : "₩6,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%8B%A0%EC%9A%A9%EC%A4%80_%EC%9E%90%EB%85%80%EB%A5%BC_%EC%9C%84%ED%95%9C_7%EA%B0%80%EC%A7%80_%EB%B6%80%EC%9D%98_%EB%B2%95%EC%B9%99?id=k2sLBAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/k2sLBAAAQBAJ?fife=w340-rw",
			book_name : "자녀를 위한 7가지 부의 법칙",
			writer : "신용준",
			book_price : "₩8,400"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EC%A4%80%ED%98%B8_%EC%B2%9C%EA%B5%AD_%EA%B0%99%EC%9D%80_%EC%9D%BC%EC%A3%BC%EC%9D%BC%EC%9D%84_%EC%9C%84%ED%95%9C_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EC%84%B8%EB%B9%84%EC%95%BC_%EA%B7%B8%EB%9D%BC%EB%82%98%EB%8B%A4?id=KusUBAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/KusUBAAAQBAJ?fife=w340-rw",
			book_name : "천국 같은 일주일을 위한 바르셀로나•세비야•그라나다",
			writer : "이준호",
			book_price : "₩4,500"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EC%A7%84%EC%95%84_%EC%A4%912%EB%B3%91_%EC%97%84%EB%A7%88%EB%8A%94_%EB%B6%88%EC%95%88%ED%95%98%EA%B3%A0_%EC%95%84%EC%9D%B4%EB%8A%94_%EC%96%B5%EC%9A%B8%ED%95%98%EB%8B%A4?id=YzX2AwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/YzX2AwAAQBAJ?fife=w340-rw",
			book_name : "중2병 엄마는 불안하고, 아이는 억울하다",
			writer : "이진아",
			book_price : "₩11,200"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B8%EC%84%A0%ED%99%94_%EB%AA%85%ED%92%88_%ED%95%A0%EB%A8%B8%EB%8B%88_%EC%9C%A1%EC%95%84?id=I23zAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/I23zAwAAQBAJ?fife=w340-rw",
			book_name : "명품 할머니 육아",
			writer : "인선화",
			book_price : "₩9,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%82%A4%EC%A6%88%ED%82%A4%EC%A6%88_%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%86%8C_%ED%95%98%EB%A3%A8_10%EB%B6%84_%EB%A7%9E%EC%B6%A4%EB%B2%95_%EB%94%B0%EB%9D%BC%EC%93%B0%EA%B8%B0_4%EB%8B%A8%EA%B3%84?id=R74KBAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/R74KBAAAQBAJ?fife=w340-rw",
			book_name : "하루 10분 맞춤법 따라쓰기 4단계",
			writer : "키즈키즈 교육연구소",
			book_price : "₩6,100"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9E%A5%EC%9D%80%EC%88%99_%EA%B5%90%EA%B3%BC%EC%84%9C_%EB%AC%B8%ED%95%99%EA%B8%B0%ED%96%89?id=IGzzAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/IGzzAwAAQBAJ?fife=w340-rw",
			book_name : "교과서 문학기행",
			writer : "장은숙",
			book_price : "₩9,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B0%95%EB%B2%94%EC%9D%B5_1%EB%93%B1_%EC%98%81%EC%9E%AC%EB%93%A4%EC%9D%98_%EC%B0%BD%EC%9D%98%EB%A0%A5_%EB%86%80%EC%9D%B4%ED%84%B0?id=Tm_zAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/Tm_zAwAAQBAJ?fife=w340-rw",
			book_name : "1등 영재들의 창의력 놀이터",
			writer : "박범익",
			book_price : "₩5,900"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%A7%80%EC%95%84%EA%BC%AC_%EC%96%B4%EB%8A%90_%EB%A9%8B%EC%A7%84_%EB%82%A0?id=3G3zAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/3G3zAwAAQBAJ?fife=w340-rw",
			book_name : "어느 멋진 날",
			writer : "지아꼬",
			book_price : "₩9,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%95%88%ED%98%9C%EA%B2%BD_%EC%83%88%ED%99%9C%EC%9A%A9%EC%9D%B4_%EC%B0%B8_%EC%A2%8B%EB%8B%A4?id=dnDzAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/dnDzAwAAQBAJ?fife=w340-rw",
			book_name : "새활용이 참 좋다",
			writer : "안혜경",
			book_price : "₩9,600"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%A0%95%EC%A3%BC%ED%9D%AC_%ED%95%9C_%EA%B6%8C%EC%9C%BC%EB%A1%9C_%EB%81%9D%EB%82%B4%EB%8A%94_%EA%B2%B0%ED%98%BC_%EC%A4%80%EB%B9%84?id=4m_zAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/4m_zAwAAQBAJ?fife=w340-rw",
			book_name : "한 권으로 끝내는 결혼 준비",
			writer : "정주희",
			book_price : "₩6,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%8B%A0%EC%84%B1%EC%9A%B1_%EC%A1%B0%EA%B8%89%ED%95%9C_%EB%B6%80%EB%AA%A8%EA%B0%80_%EC%95%84%EC%9D%B4_%EB%87%8C%EB%A5%BC_%EB%A7%9D%EC%B9%9C%EB%8B%A4?id=lnsUBAAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/lnsUBAAAQBAJ?fife=w340-rw",
			book_name : "조급한 부모가 아이 뇌를 망친다",
			writer : "신성욱",
			book_price : "₩9,000"
		}],

		book_family_down :
		[{
			url_book : "http://play.google.com/store/books/details/%EC%B5%9C%EC%A0%95_30%EC%9D%BC_%EC%95%88%EC%97%90_%EB%82%B4_%EC%82%AC%EB%9E%8C_%EB%A7%8C%EB%93%A4%EA%B8%B0?id=LF9UMl9DALsC",
			img_book : "https://encrypted.google.com/books/images/frontcover/LF9UMl9DALsC?fife=w340-rw",
			book_name : "30일 안에 내 사람 만들기",
			writer : "최정",
			book_price : "₩8,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%A1%B4_%EA%B0%80%ED%8A%B8%EB%A7%A8_%EC%99%B8_%EC%A1%B4_%EA%B0%80%ED%8A%B8%EB%A7%A8_%EC%B5%9C%EC%84%B1%EC%95%A0_%EB%B0%95%EC%82%AC%EC%9D%98_%EB%82%B4_%EC%95%84%EC%9D%B4%EB%A5%BC_%EC%9C%84%ED%95%9C_%EA%B0%90%EC%A0%95_%EC%BD%94%EC%B9%AD?id=tpB99PN2arAC",
			img_book : "https://encrypted.google.com/books/images/frontcover/tpB99PN2arAC?fife=w340-rw",
			book_name : "존 가트맨, 최성애 박사의 내 아이를 위한 감정 코칭",
			writer : "존 가트맨 외",
			book_price : "₩11,840"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%B5%9C%EC%A0%95_%EB%8B%B9%EC%8B%A0%EC%9D%B4_%EC%95%84%EC%A7%81_%ED%98%BC%EC%9E%90%EC%9D%B8_%EC%A7%84%EC%A7%9C_%EC%9D%B4%EC%9C%A0?id=43T4UOCN8eQC",
			img_book : "https://encrypted.google.com/books/images/frontcover/43T4UOCN8eQC?fife=w340-rw",
			book_name : "당신이 아직 혼자인 진짜 이유",
			writer : "최정",
			book_price : "₩6,500"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%81%AC%EB%A6%AC%EC%8A%A4_%EB%9D%BC%EB%B0%98_%EB%A7%88%EC%9D%8C%EC%9D%84_%EC%82%AC%EB%A1%9C%EC%9E%A1%EB%8A%94_%EB%8D%B0%EC%9D%B4%ED%8A%B8_%EC%8B%AC%EB%A6%AC%ED%95%99?id=qs3LRfX_RgQC",
			img_book : "https://encrypted.google.com/books/images/frontcover/qs3LRfX_RgQC?fife=w340-rw",
			book_name : "마음을 사로잡는 데이트 심리학",
			writer : "크리스 라반",
			book_price : "₩3,560"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%8B%A0%EC%98%81%EC%88%98_%EC%A0%84%EA%B5%AD_%EC%97%AC%ED%96%89%EA%B4%80%EA%B4%91_%ED%8F%AC%EC%9D%B8%ED%8A%B8_%EC%A7%80%EB%8F%84?id=JWKeAgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/JWKeAgAAQBAJ?fife=w340-rw",
			book_name : "전국 여행관광 포인트 지도: 전국을 한눈에 !",
			writer : "신영수",
			book_price : "₩5,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%85%B8%EC%98%81%ED%98%9C_%EC%9C%A0%EC%95%84%EC%A2%85%EC%9D%B4%EC%A0%91%EA%B8%B0%EA%B5%90%EC%8B%A4_%EA%B2%A8%EC%9A%B8?id=VhH7aTchu-YC",
			img_book : "https://encrypted.google.com/books/images/frontcover/VhH7aTchu-YC?fife=w340-rw",
			book_name : "유아종이접기교실 - 겨울",
			writer : "노영혜",
			book_price : "₩2,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%94%BC%EC%98%A4%EB%82%98_%EC%9D%B8%EC%96%B4%EA%B3%B5%EC%A3%BC%EA%B0%80_%EB%8B%A4%EB%A5%B8_%EB%82%A8%EC%9E%90%EB%A5%BC_%EB%A7%8C%EB%82%AC%EB%8B%A4%EB%A9%B4?id=5Xmn5KPKDfMC",
			img_book : "https://encrypted.google.com/books/images/frontcover/5Xmn5KPKDfMC?fife=w340-rw",
			book_name : "인어공주가 다른 남자를 만났다면",
			writer : "피오나",
			book_price : "₩7,200"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9B%94%EA%B0%84_%EB%AA%A8%ED%84%B0%EB%B0%94%EC%9D%B4%ED%81%AC_%ED%8E%B8%EC%A7%91%EB%B6%80_%EB%AA%A8%ED%84%B0%EB%B0%94%EC%9D%B4%ED%81%AC_%EC%9E%A1%ED%95%99%EC%83%81%EC%8B%9D?id=SMCsAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/SMCsAwAAQBAJ?fife=w340-rw",
			book_name : "모터바이크 잡학상식",
			writer : "월간 모터바이크 편집부",
			book_price : "₩3,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/SBS_%EC%8A%A4%ED%8E%98%EC%85%9C_%EC%A0%9C%EC%9E%91%ED%8C%80_%EB%A7%A4%EB%A0%A5_DNA?id=A232AHMoHfcC",
			img_book : "https://encrypted.google.com/books/images/frontcover/A232AHMoHfcC?fife=w340-rw",
			book_name : "매력 DNA",
			writer : "SBS 스페셜 제작팀",
			book_price : "₩7,150"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%9E%90_%EB%A7%88%EA%B3%A8%EB%A6%B0_%EA%B3%B5%EB%B6%80%ED%95%98%EB%8A%94_%EC%9C%A0%EB%8C%80%EC%9D%B8?id=YH5U8xjl7OUC",
			img_book : "https://encrypted.google.com/books/images/frontcover/YH5U8xjl7OUC?fife=w340-rw",
			book_name : "공부하는 유대인",
			writer : "힐 마골린",
			book_price : "₩7,800"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%98%A4%ED%83%80_%ED%86%A0%EC%8B%9C%EB%A7%88%EC%82%AC_%EB%82%B4_%EC%95%84%EC%9D%B4%EB%A5%BC_%EC%9C%84%ED%95%9C_%EC%95%84%EB%B9%A0%EC%9D%98_3%EB%B6%84_%EC%9C%A1%EC%95%84?id=65jkAgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/65jkAgAAQBAJ?fife=w340-rw",
			book_name : "내 아이를 위한 아빠의 3분 육아",
			writer : "오타 토시마사",
			book_price : "₩9,600"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B0%95%EC%A4%80%EC%84%B1_%EC%A0%95%EB%A7%90_%EC%89%BD%EA%B2%8C_%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94_%EA%B0%95%EC%95%84%EC%A7%80_%EB%B0%B0%EB%B3%80%ED%9B%88%EB%A0%A8_%EC%A7%81%EC%9E%A5%EC%9D%B8%ED%8E%B8?id=3o9cM0Vi5a0C",
			img_book : "https://encrypted.google.com/books/images/frontcover/3o9cM0Vi5a0C?fife=w340-rw",
			book_name : "정말 쉽게 따라하는 강아지 배변훈련 - 직장인편",
			writer : "박준성",
			book_price : "₩3,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EC%9E%84%EC%88%99_%EC%95%84%EC%9D%B4%EB%8A%94_%EC%BB%A4_%EA%B0%80%EB%8A%94%EB%8D%B0_%EB%B6%80%EB%AA%A8%EB%8A%94_%EB%98%91%EA%B0%99%EC%9D%80_%EB%A7%90%EB%A7%8C_%ED%95%9C%EB%8B%A4?id=vkGnAgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/vkGnAgAAQBAJ?fife=w340-rw",
			book_name : "아이는 커 가는데 부모는 똑같은 말만 한다",
			writer : "이임숙",
			book_price : "₩9,800"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%8F%85%EC%84%A0_%EC%8A%A4%ED%8F%AC%EC%B8%A0%EB%B2%A0%ED%8C%85_%EC%9D%B4%EA%B8%B0%EB%8A%94_%EB%B2%95?id=sdtTAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/sdtTAwAAQBAJ?fife=w340-rw",
			book_name : "스포츠베팅 이기는 법",
			writer : "독선",
			book_price : "₩12,500"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B0%95%EC%A4%80%EC%84%B1_%EC%A0%95%EB%A7%90_%EC%89%BD%EA%B2%8C_%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94_%EA%B0%95%EC%95%84%EC%A7%80_%EB%B0%B0%EB%B3%80%ED%9B%88%EB%A0%A8_%EC%A0%84%EC%97%85%EC%A3%BC%EB%B6%80_%ED%8E%B8?id=QPs6AgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/QPs6AgAAQBAJ?fife=w340-rw",
			book_name : "정말 쉽게 따라하는 강아지 배변훈련 - 전업주부 편",
			writer : "박준성",
			book_price : "₩3,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%97%88%EC%98%81%EB%A6%BC_%ED%81%AC%EA%B2%8C_%EB%90%A0_%EC%95%84%EC%9D%B4%EB%8A%94_%EB%B6%80%EB%AA%A8%EC%9D%98_%EC%8A%B5%EA%B4%80%EC%9D%B4_%EB%8B%A4%EB%A5%B4%EB%8B%A4?id=TqDRUCWTR4kC",
			img_book : "https://encrypted.google.com/books/images/frontcover/TqDRUCWTR4kC?fife=w340-rw",
			book_name : "크게 될 아이는 부모의 습관이 다르다",
			writer : "허영림",
			book_price : "₩9,450"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EC%A0%95%ED%9B%88_%EC%82%AC%EB%9E%8C%EC%9D%84_%EC%9D%BD%EB%8A%94_%EA%B0%84%ED%8C%8C%EC%88%A0?id=-wg7AgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/-wg7AgAAQBAJ?fife=w340-rw",
			book_name : "사람을 읽는 간파술",
			writer : "이정훈",
			book_price : "₩7,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%ED%8C%8C%EB%A9%9C%EB%9D%BC_%EB%93%9C%EB%9F%AC%EC%BB%A4%EB%A7%A8_%ED%94%84%EB%9E%91%EC%8A%A4_%EC%95%84%EC%9D%B4%EC%B2%98%EB%9F%BC?id=g-FCJor2iYgC",
			img_book : "https://encrypted.google.com/books/images/frontcover/g-FCJor2iYgC?fife=w340-rw",
			book_name : "프랑스 아이처럼",
			writer : "파멜라 드러커맨",
			book_price : "₩10,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%82%BC%EC%84%B1%EC%B6%9C%ED%8C%90%EC%82%AC%ED%8E%B8%EC%A7%91%EB%B6%80_%EC%84%B8_%EC%82%B4_%EB%90%98%EA%B8%B0_%EC%A0%84%EC%97%90_%ED%95%98%EB%8A%94_%EB%91%90%EB%87%8C_%EA%B0%9C%EB%B0%9C_207?id=s4yVECq79zIC",
			img_book : "https://encrypted.google.com/books/images/frontcover/s4yVECq79zIC?fife=w340-rw",
			book_name : "세 살 되기 전에 하는 두뇌 개발 207",
			writer : "삼성출판사편집부",
			book_price : "₩2,250"
		},
		{
			url_book : "http://play.google.com/store/books/details/29%EC%BD%98%ED%85%90%EC%B8%A0_%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4_%EC%89%BD%EA%B2%8C_%EB%A7%8C%EB%93%9C%EB%8A%94_%EC%9A%B0%EB%A6%AC_%EC%95%84%EC%9D%B4_%EA%B0%84%EC%8B%9D_%EC%9A%94%EB%A6%AC?id=kE1AAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/kE1AAwAAQBAJ?fife=w340-rw",
			book_name : "쉽게 만드는 우리 아이 간식 요리",
			writer : "29콘텐츠 스튜디오",
			book_price : "₩2,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%B5%9C%EC%A0%95_%EB%AF%B8%EC%B9%9C_%EC%97%B0%EC%95%A0?id=Tgw7AgAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/Tgw7AgAAQBAJ?fife=w340-rw",
			book_name : "미친 연애",
			writer : "최정",
			book_price : "₩8,000"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%82%98%EB%B9%84_%EC%95%85%EB%A7%88%EC%9D%98_%EC%97%B0%EC%95%A0%EC%88%A0?id=DaW6AwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/DaW6AwAAQBAJ?fife=w340-rw",
			book_name : "악마의 연애술: 그를 내 남자로 만드는 긴자의 법칙 133",
			writer : "나비",
			book_price : "₩7,200"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EC%9D%B4%EA%B2%BD%EC%98%81_%EA%B8%B0%EC%A0%81%EC%9D%98_%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8_%EB%8F%84%EC%8B%9C%EB%9D%BD?id=dPqqAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/dPqqAwAAQBAJ?fife=w340-rw",
			book_name : "기적의 다이어트 도시락",
			writer : "이경영",
			book_price : "₩6,900"
		},
		{
			url_book : "http://play.google.com/store/books/details/%EB%B0%95%ED%98%95%EC%95%84_%EB%9C%A8%EA%B0%9C%EC%9F%81%EC%9D%B4%EC%9D%98_%ED%96%89%EB%B3%B5%ED%95%9C_%EC%86%90%EB%9C%A8%EA%B0%9C?id=eICqAwAAQBAJ",
			img_book : "https://encrypted.google.com/books/images/frontcover/eICqAwAAQBAJ?fife=w340-rw",
			book_name : "뜨개쟁이의 행복한 손뜨개",
			writer : "박형아",
			book_price : "₩8,400"
		}]


	}
};

loadData(data_Box.book_data.book_main_up, id_box.frm_bookcard, id_box.area_booklist_ul_up);
loadData(data_Box.book_data.book_main_down, id_box.frm_bookcard, id_box.area_booklist_ul_down);

function loadData(data, frame, target){
	var frm_bookcard_str = "";
	var frm_bookcard_origin = frame.innerText;

	for (var i = 0; i < data.length; i++) {
		var str = frm_bookcard_origin.
		replace(/<%=url_book%>/, data[i].url_book).
		replace(/<%=img_book%>/, data[i].img_book).
		replace(/<%=book_name%>/, data[i].book_name).
		replace(/<%=writer%>/, data[i].writer).
		replace(/<%=book_price%>/, data[i].book_price);
		frm_bookcard_str += str;
	}

	target.innerHTML = frm_bookcard_str;
} 