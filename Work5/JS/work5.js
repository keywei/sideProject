// export
import { speaker, categoryMenuItems, soccer, basketball, category } from '../database.js';

window.onload = function() {
    // 完成品後要提出來
    ensp(soccer)
    ensp(basketball)
    var nber = [soccer.length, basketball.length, 2, 3, 4, 5, 6];


    var categoryMenuItemsActive = document.getElementsByClassName("categoryMenuItems");
    var categoryMenuItemsActiveLength = categoryMenuItemsActive[0].getElementsByTagName("div").length
        // 選單鈕觸發變色
    for (var i = 0; i < categoryMenuItemsActiveLength; i++) {
        (function(x) {
            categoryMenuItemsActive[0].getElementsByTagName("div")[x].addEventListener("click", function() {
                for (var i = 0; i < categoryMenuItemsActiveLength; i++) {
                    categoryMenuItemsActive[0].getElementsByTagName("div")[i].style.backgroundColor = "rgb(40, 38, 38)";
                    categoryMenuItemsActive[0].getElementsByTagName("div")[i].style.color = "rgb(138, 133, 133)";
                }
                this.style.backgroundColor = "rgb(50, 166, 222)";
                this.style.color = "white";

                addcategoryMenuItem(categoryMenuItems[x]);
            })
        })(i);

    }
    // console.log(cc[0].getElementsByTagName("div")[0])

    // var bb = document.getElementsByClassName("oddsTableCurrentGameTime");
    // bb[1].removeChild(bb[1].lastChild);
    // console.log(bb[0].lastChild)
    //     console.log(bb[0].childNodes[4].removeChild);


    // 瘦身 註解
    // 因flex塞空值會不佔空間造成跑版，迴圈放入&ensp
    function ensp(database) {
        if (Array.isArray(database)) {
            database.forEach(function(value) {
                if (typeof value == "object") {
                    for (var i in value) {
                        if (Array.isArray(value[i])) {
                            value[i].forEach(function(val, index) {
                                if (val == "") {
                                    value[i][index] = "&ensp;"

                                }
                            })
                        }
                    }
                }
            })

        } else if (typeof database == "object") {
            for (var i in database) {
                if (Array.isArray(database[i])) {
                    database[i].forEach(function(val, index) {
                        if (val == "") {
                            database[i][index] = "&ensp;"

                        }
                    })
                } else if (database[i] == "") {
                    database[i] = "&ensp;"
                }
            }
        }

    }

    var all = nber.reduce(function(total, value) {
        return total + value;
    })
    nber.unshift(all);

    var addCategory = document.getElementById("category");
    var categoryLiItem = document.getElementsByName("category");
    var categoryMenuItem = document.getElementsByClassName("categoryMenuItem")[0];
    var mainHeadCarousel = document.getElementsByClassName("mainHeadCarousel")[0];
    var mainHeadCarouselItem = document.getElementsByClassName("mainHeadCarouselItem")[0];
    var mainHeadCarouselItemText = document.createTextNode(speaker);
    var mainHeadCarouselItemDiv = document.createElement("div");
    mainHeadCarouselItemDiv.appendChild(mainHeadCarouselItemText);
    mainHeadCarouselItem.appendChild(mainHeadCarouselItemDiv);
    var mainHeadCarouselItemWidth = mainHeadCarouselItem.offsetWidth;

    // 跑馬燈
    var timeOver;
    if (mainHeadCarouselItemWidth > mainHeadCarousel.scrollLeft) {
        Carousel();
    }

    function Carousel() {
        if (mainHeadCarouselItemWidth > mainHeadCarousel.scrollLeft) {
            mainHeadCarousel.scrollLeft += 1
            timeOver = setTimeout(Carousel, 15);

        } else {
            mainHeadCarousel.scrollLeft = 0;
            setTimeout(Carousel, 50);
        }
    }
    mainHeadCarousel.addEventListener("mouseout", Carousel);
    mainHeadCarousel.addEventListener("mouseover", function() {
        clearTimeout(timeOver);
    });

    categoryList(category);



    function categoryList(x) {
        x.map(function(value, index) {
            var categoryLabel = document.createElement("label");
            var categoryInput = document.createElement("input");
            var categorySpan = document.createElement("span");
            var categoryText = document.createTextNode(value[0]);
            var categoryTextNum = document.createTextNode(nber[index]);
            // var ifmee = document.getElementById("ifme");

            categorySpan.appendChild(categoryTextNum);
            categoryInput.type = "checkbox";
            categoryInput.name = "category";
            categoryInput.id = "category" + index;
            categoryInput.value = value[0];
            // 分離、有需要的參數 瘦身
            // 球類選項觸發渲染畫面
            categoryInput.onclick = (function(event) {
                var oddsTableHeadGameTitle = document.getElementsByClassName("oddsTableHeadGameTitle")[0];

                if (event.target.id == "category0" && categoryLiItem[0].checked == true) {
                    oddsTableHeadGameTitle.innerHTML = "";
                    for (let x = 1; x < categoryLiItem.length; x++) {
                        categoryLiItem[x].checked = true;
                        switch (categoryLiItem[x].value) {
                            case "足球":
                                addTitleSoccer();

                                if (category[x][1].length >= 2) {
                                    for (let y = 0; y < category[x][1].length; y++) {

                                        oddsTableTeam(category[x][1][y]);

                                    }
                                } else {
                                    oddsTableTeam(category[x][1][0]);
                                }
                                break;
                            case "籃球":
                                addTitleBasketball();
                                if (category[x][1].length >= 2) {
                                    for (let y = 0; y < category[x][1].length; y++) {

                                        oddsTableTeamBasketball(category[x][1][y]);

                                    }
                                } else {
                                    oddsTableTeamBasketball(category[x][1][0]);
                                }
                                break;
                        }


                    }
                    // 去除time空值背景色
                    // var GameTime = document.getElementsByClassName("oddsTableCurrentGameTime");
                    // for (let i = 0; i < GameTime.length; i++) {
                    // console.log(GameTime[i].getElementsByTagName("div")[3])
                    // if (GameTime[i].getElementsByTagName("div")[3] != "" || GameTime[i].getElementsByTagName("div")[3] != "undefined") {
                    // console.log(GameTime[i].getElementsByTagName("div")[3])
                    // return true;
                    // } else {
                    // GameTime[i].getElementsByTagName("div")[3].style.visibility = "hidden";

                    // }
                    // if (GameTime[i].getElementsByTagName("div")[3]) {
                    //     console.log("no")
                    // } else
                    //     console.log(GameTime[i].getElementsByTagName("div")[3].innerText)



                    // console.log(b)
                    // console.log(oddsTableCurrentGameTime[i]);
                    // }
                    // var el = document.getElementById("abc");
                    // el.onclick = function() {
                    //     console.log(ifmee.style.display)
                    //     if (ifmee.style.display == "") {
                    //         ifmee.style.display = "none"
                    //     } else {
                    //         ifmee.style.display = ""
                    //         ifmee.style.zIndex = "1"
                    //         oddsTableHeadGameTitle.style.display = "none"
                    //     }
                    // }
                    // console.log(el)
                } else {
                    if (event.target.id == "category0" && categoryLiItem[0].checked == false) {
                        oddsTableHeadGameTitle.innerHTML = "";
                        addTitleSoccer();


                        for (let x = 1; x < categoryLiItem.length; x++) {
                            categoryLiItem[x].checked = false;
                            categoryLiItem[1].checked = true;
                        }
                        for (let y = 0; y < category[1][1].length; y++) {
                            oddsTableTeam(category[1][1][y]);

                        }


                    } else {
                        oddsTableHeadGameTitle.innerHTML = "";
                        for (let x = 0; x < categoryLiItem.length; x++) {
                            if (categoryLiItem[x].id == event.target.id) {
                                categoryLiItem[x].checked = true;
                                switch (event.target.value) {
                                    case "足球":
                                        addTitleSoccer();
                                        if (category[x][1].length >= 2) {
                                            for (let y = 0; y < category[x][1].length; y++) {
                                                oddsTableTeam(category[x][1][y]);
                                            }
                                        } else {
                                            oddsTableTeam(category[x][1][0]);
                                        }
                                        break;
                                    case "籃球":
                                        addTitleBasketball();
                                        if (category[x][1].length >= 2) {
                                            for (let y = 0; y < category[x][1].length; y++) {

                                                oddsTableTeamBasketball(category[x][1][y]);

                                            }
                                        } else {
                                            oddsTableTeamBasketball(category[x][1][0]);
                                        }
                                        break;
                                }

                            } else {
                                categoryLiItem[0].checked = false;
                                categoryLiItem[x].checked = false;
                            }

                        }
                    }
                }
            })

            categoryLabel.appendChild(categoryInput);
            categoryLabel.appendChild(categoryText);
            categoryLabel.appendChild(categorySpan);
            addCategory.appendChild(categoryLabel);

        })
    }
    // 體育菜單場次亂數產生
    function addcategoryMenuItem(Items) {
        categoryMenuItem.innerHTML = "";
        var MathRandom = Math.floor(Math.random() * 200).toString();
        categoryMenuItem.innerHTML = `
        <div><img src="images/sport.svg" alt="">足球 <span>LIVE</span> <span>${MathRandom}</span></div>
        `;
        Items.map(function(value) {
            var categoryMenuItemDiv = document.createElement("div");
            var categoryMenuItemText = document.createTextNode(value);
            var categoryMenuItemSpan = document.createElement("span");
            var MathRandom = Math.floor(Math.random() * 200).toString();
            var categoryMenuItemNum = document.createTextNode(MathRandom);
            categoryMenuItemDiv.appendChild(categoryMenuItemText);
            categoryMenuItemSpan.appendChild(categoryMenuItemNum);
            categoryMenuItemDiv.appendChild(categoryMenuItemSpan);
            categoryMenuItem.appendChild(categoryMenuItemDiv);
        })
    }
    addcategoryMenuItem(categoryMenuItems[0]);

    // 體育菜單子選項加入按鈕


    // var cc = document.getElementById("ccc")
    // cc.addEventListener("click", adbu)

    // function adbu() {
    //     var addfavorite = document.querySelectorAll("img[src='images/star_white.svg']");
    //     console.log(addfavorite)
    //     for (var i = 0; 0 < addfavorite.length; i++) {
    //         addfavorite[i].addEventListener("click", function() {
    //             console.log("123");
    //         });

    //     }
    // }

    // function bb() {
    //     console.log("OK")
    // }









    // 足球大標題
    function addTitleSoccer() {
        var oddsTableHeadGameTitle = document.getElementsByClassName("oddsTableHeadGameTitle")[0];
        var title =
            `<div class="oddsTableHeadGame">
           
        <div class="oddsTableHeadStatus">
          <span>足球</span> <span>滾球</span>
        </div>
        <div class="oddsTableSingle">獨贏盤</div>
        <div class="oddsTableScore"></div>
        <div class="oddsTableSpread">
            <div>全場</div>
            <div>讓球</div>
        </div>
        <div class="oddsTableScore"></div>
        <div class="oddsTableOverUnder">大/小</div>
        <div class="oddsTableSingle">獨贏盤</div>
        <div class="oddsTableScore"></div>
        <div class="oddsTableSpread">
            <div>上半場</div>
            <div>讓球</div>
        </div>
        <div class="oddsTableScore"></div>
        <div class="oddsTableOverUnder">大/小</div>
        <div class="oddsTableStar"></div>
            </div>`
        oddsTableHeadGameTitle.innerHTML += title;
    }
    // 籃球大標題
    function addTitleBasketball() {
        var oddsTableHeadGameTitle = document.getElementsByClassName("oddsTableHeadGameTitle")[0];
        var title =
            `<div class="oddsTableHeadGame">
            <div class="oddsTableHeadGameBasketball">
                    <div class="oddsTableHeadStatusBasketball"><span>籃球</span> <span>滾球</span></div>
                    <div class="oddsTableSingleBasketball">獨贏盤</div>
                    <div class="oddsTableSpreadScoreBasketball"></div>
                    <div class="oddsTableSpreadBasketball"> 讓球</div>
                    <div class="oddsTableOverUnderScoreBasketball"></div>
                    <div class="oddsTableOverUnderBasketball">大/小</div>
                    <div class="oddsTableTeamScoreBasketball"></div>
                    <div class="oddsTableTeamBasketball">球隊 大/小</div>
                    <div class="oddsTableTeamBasketballEnsp"></div>
                    <div class="oddsTableTeamBasketballEnsp"><div>
                    <div class="oddsTableTeamBasketballEnsp"><div>
            </div>
            </div>
        `;
        var titleItem = `<div class="oddsTableTeamBasketballItem">
                        <div>顯示</div>
                        <div>半場</div>
                        <div>單節</div>
                    </div>`;
        oddsTableHeadGameTitle.innerHTML += title;
        oddsTableHeadGameTitle.innerHTML += titleItem
    }

    var oddsTableHeadGameTitle = document.getElementsByClassName("oddsTableHeadGameTitle")[0];
    // 足球表

    function oddsTableTeam(x) {
        var gameTable =
            `<div class="oddsTableScoreKind">
        <div class="oddsTableTeam">
        <div>${x.gameHead}</div>
        <div><img src="images/star_white.svg" alt=""></div>
        </div>
        <div class="oddsTableCurrentGame">
        <div class="oddsTableCurrentGameTime">
            <div>${x.time[0]}</div>
            <div>${x.time[1]}</div>
            <div>${x.time[2]}</div>
            <div>${x.time[3]}</div>
        </div>
        <div class="oddsTableCurrentTeams">
            <div>${x.team[0]}</div>
            <div>${x.team[1]}</div>
            <div>${x.team[2]}<span onclick="Modal('#staticBackdropSoccer');">${x.modal}&gt;</span></div>
        </div>
        <div class="oddsTableSingle">
            <div>${x.single[0]}</div>
            <div>${x.single[1]}</div>
            <div>${x.single[2]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${x.spreadScore[0]}</div>
            <div>${x.spreadScore[1]}</div>
            <div>${x.spreadScore[2]}</div>
        </div>
        <div class="oddsTableSpread">
            <div>${x.spread[0]}</div>
            <div>${x.spread[1]}</div>
            <div>${x.spread[2]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${x.overUnderScore[0]}</div>
            <div>${x.overUnderScore[1]}</div>
            <div>${x.overUnderScore[2]}</div>
        </div>
        <div class="oddsTableOverUnder">
        <div>${x.overUnder[0]}</div>
        <div>${x.overUnder[1]}</div>
        <div>${x.overUnder[2]}</div>
        </div>
        <div class="oddsTableSingle">
            <div>${x.secondHalfSingle[0]}</div>
            <div>${x.secondHalfSingle[1]}</div>
            <div>${x.secondHalfSingle[2]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${x.secondHalfSpreadScore[0]}</div>
            <div>${x.secondHalfSpreadScore[1]}</div>
            <div>${x.secondHalfSpreadScore[2]}</div>
       </div>
        <div class="oddsTableSpread">
            <div>${x.secondHalfSpread[0]}</div>
            <div>${x.secondHalfSpread[1]}</div>
            <div>${x.secondHalfSpread[2]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${x.secondHalfOverUnderScore[0]}</div>
            <div>${x.secondHalfOverUnderScore[1]}</div>
            <div>${x.secondHalfOverUnderScore[2]}</div>
       </div>
        <div class="oddsTableOverUnder">
            <div>${x.secondHalfOverUnder[0]}</div>
            <div>${x.secondHalfOverUnder[1]}</div>
            <div>${x.secondHalfOverUnder[2]}</div>
        </div>
        <div class="oddsTableStar">
            <div><img src="images/star_white.svg" alt="" width="15px" height="15px"></div>
            <div>&ensp;</div>
            <div>&ensp;</div>
        </div>

    </div>
    <div class="oddsTableCurrentGame">
                    <div class="oddsTableCurrentGameTime">
                    </div>
                    <div class="oddsTableCurrentTeams">
                    <div>${x.team[0]}</div>
                    <div>${x.team[1]}</div>
                    </div>
                    <div class="oddsTableSingle">
                        <div>${x.downSingle[0]}</div>
                        <div>${x.downSingle[1]}</div>
                    </div>
                    <div class="oddsTableScore">
                        <div>${x.downSpreadScore[0]}</div>
                        <div>${x.downSpreadScore[1]}</div>
                    </div>
                    <div class="oddsTableSpread">
                        <div>${x.downSpread[0]}</div>
                        <div>${x.downSpread[1]}</div>
                    </div>
                    <div class="oddsTableScore">
                        <div>${x.downOverUnderScore[0]}</div>
                        <div>${x.downOverUnderScore[1]}</div>
                    </div>
                    <div class="oddsTableOverUnder">
                        <div>${x.downOverUnder[0]}</div>
                        <div>${x.downOverUnder[1]}</div>
                    </div>
                    <div class="oddsTableSingle">
                        <div>${x.downSecondHalfSingle[0]}</div>
                        <div>${x.downSecondHalfSingle[1]}</div>
                    </div>
                    <div class="oddsTableScore">
                    <div>${x.downSecondHalfSpreadScore[0]}</div>
                    <div>${x.downSecondHalfSpreadScore[1]}</div>
                    </div>
                    <div class="oddsTableSpread">
                        <div>${x.downSecondHalfSpread[0]}</div>
                        <div>${x.downSecondHalfSpread[1]}</div>
                    </div>
                    <div class="oddsTableScore">
                        <div>${x.downSecondHalfOverUnderScore[0]}</div>
                        <div>${x.downSecondHalfOverUnderScore[1]}</div>
                    </div>
                    <div class="oddsTableOverUnder">
                        <div>${x.downSecondHalfOverUnder[0]}</div>
                        <div>${x.downSecondHalfOverUnder[1]}</div>
                    </div>
                    <div class="oddsTableStar">
                        <div><img src="images/star_white.svg" alt="" width="15px" height="15px"></div>
                        <div></div>
                    </div>

        </div>
        </div>`;
        oddsTableHeadGameTitle.innerHTML += gameTable;



    }
    // 籃球表
    function oddsTableTeamBasketball(x) {

        var gameTable = `
        <div class="oddsTableScoreKind">
    <div class="oddsTableTeam">
        <div>${x.gameHead}</div>
        <div><img src="images/star_white.svg" alt=""></div>
    </div>
    <div class="oddsTableCurrentGameBasketball">
        <div class="oddsTableCurrentGameTimeBasketball">
            <div>${x.time[0]}</div>
            <div>${x.time[1]}</div>
            <div>${x.time[2]}</div>
        </div>
        <div class="oddsTableCurrentTeamsBasketball">
            <div>${x.team[0]}</div>
            <div>${x.team[1]}<span onclick="Modal('#staticBackdrop');">${x.modal}&gt;</span></div>
        </div>
        <div class="oddsTableSingleBasketball">
            <div>${x.single[0]}</div>
            <div>${x.single[1]}</div>
        </div>
        <div class="oddsTableSpreadScoreBasketball">
            <div>${x.spreadScore[0]}</div>
            <div>${x.spreadScore[1]}</div>
        </div>
        <div class="oddsTableSpreadBasketball">
            <div>${x.spread[0]}</div>
            <div>${x.spread[1]}</div>
        </div>
        <div class="oddsTableOverUnderScoreBasketball">
            <div><span>${x.overUnderScore[0][0]}</span><span>${x.overUnderScore[0][1]}</span></div>
            <div><span>${x.overUnderScore[1][0]}</span><span>${x.overUnderScore[1][1]}</span></div>
        </div>
        <div class="oddsTableOverUnderBasketball">
            <div>${x.overUnder[0]}</div>
            <div>${x.overUnder[1]}</div>
        </div>
        <div class="oddsTableTeamoverUnderScoreBasketball">
            <div>${x.TeamOverUnderScore[0]}</div>
            <div>${x.TeamOverUnderScore[1]}</div>
        </div>
        <div class="oddsTableTeamoverUnderBasketball">
            <div>${x.TeamOverUnder[0]}</div>
            <div>${x.TeamOverUnder[1]}</div>
        </div>
        <div class="oddsTableStarBasketball">
            <div><img src="images/star_white.svg" alt="" width="15px" height="15px"></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="oddsTableCurrentGameBasketball">
        <div class="oddsTableCurrentGameTimeBasketball">
            <div>${x.twotime[0]}</div>
            <div>${x.twotime[1]}</div>
            <div>${x.twotime[2]}</div>
        </div>
        <div class="oddsTableCurrentTeamsBasketball">
            <div>${x.twoteam[0]}</div>
            <div>${x.twoteam[1]}<span onclick="Modal('#staticBackdrop');">${x.twomodal}&gt;</span></div>
        </div>
        <div class="oddsTableSingleBasketball">
            <div>${x.twosingle[0]}</div>
            <div>${x.twosingle[1]}</div>
        </div>
        <div class="oddsTableSpreadScoreBasketball">
            <div>${x.twospreadScore[0]}</div>
            <div>${x.twospreadScore[1]}</div>
        </div>
        <div class="oddsTableSpreadBasketball">
            <div>${x.twospread[0]}</div>
            <div>${x.twospread[1]}</div>
        </div>
        <div class="oddsTableOverUnderScoreBasketball">
            <div><span>${x.twooverUnderScore[0][0]}</span><span>${x.twooverUnderScore[0][1]}</span></div>
            <div><span>${x.twooverUnderScore[1][0]}</span><span>${x.twooverUnderScore[1][1]}</span></div>
        </div>
        <div class="oddsTableOverUnderBasketball">
            <div>${x.twooverUnder[0]}</div>
            <div>${x.twooverUnder[1]}</div>
        </div>
        <div class="oddsTableTeamoverUnderScoreBasketball">
            <div>${x.twoTeamOverUnderScore[0]}</div>
            <div>${x.twoTeamOverUnderScore[1]}</div>
        </div>
        <div class="oddsTableTeamoverUnderBasketball">
            <div>${x.twoTeamOverUnder[0]}</div>
            <div>${x.twoTeamOverUnder[1]}</div>
        </div>
        <div class="oddsTableStarBasketball">
            <div><img src="images/star_white.svg" alt="" width="15px" height="15px"></div>
            <div></div>
            <div></div>
        </div>
    </div>
    </div>`;
        oddsTableHeadGameTitle.innerHTML += gameTable;
    }

    // 場次動態時間模擬
    // function getTime() {
    //     var gameTime = document.getElementsByClassName("oddsTableCurrentGameTime")
    //     for (var i = 0; i < gameTime.length; i++) {
    //         console.log(gameTime[i].getElementsByTagName("div")[2]);
    //     }

    // }
    // var timestamp = parseInt(new Date().getTime() / 1000);
    // console.log(timestamp)
    // var dateStr = '2015-03-05 17:59:00.0';
    // dateStr = dateStr.substring(0, 19);
    // dateStr = dateStr.replace(/-/g, '/');
    // var timeTamp1 = new Date(dateStr).getTime();
    // console.log(timeTamp1)

    // var tt = document.getElementById("ccc");
    // tt.addEventListener("click", c);

    var ay = [];
    // abc.addEventListener("click", abb);

    function abb() {
        var ee = document.querySelectorAll("img[src='images/star_white.svg']")
        for (var i = 0; i < ee.length; i++) {
            (function(x) {
                ee[x].addEventListener('click', function() {
                    ay.push((ee[x].parentNode.parentNode.parentNode).innerHTML)
                    console.log(ay[0]);
                })

            })(i);
        }
    }
    var showAllFav = document.getElementsByClassName("favAllStar")[0];
    showAllFav.addEventListener("click", favAllStar);

    function favAllStar() {
        oddsTableHeadGameTitle.innerHTML = "";

        ay.forEach(function(val, index) {
            // console.log(val)
            // oddsTableHeadGameTitle.innerHTML += `<div>123</div>`;
            // console.log(oddsTableHeadGameTitle)
            oddsTableHeadGameTitle.insertAdjacentHTML("beforeend", `${val}`)
        })


    }




}

// modal的關閉觸發鈕
var close_btn = document.getElementById("close");
close_btn.addEventListener("click", function() {
    $('#staticBackdrop').modal('hide');
    $('#close').hide();
})
close_btn.addEventListener("click", function() {
    $('#staticBackdropSoccer').modal('hide');
    $('#close').hide();
})





// export
// 球頭調整
// modal 關閉鈕 修復 查abloute為什麼不能用
// 可以下次任務貼在skype群組視窗