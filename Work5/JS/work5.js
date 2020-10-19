// export
// import { speaker, categoryMenuItems, soccer, basketball, category } from '../database.js';
import { datas, categoryMenuItems, speaker, category } from '../config/datas.js';

window.onload = function() {

        var oddsTableHeadGameTitle = document.getElementsByClassName("oddsTableHeadGameTitle")[0]
            // 資料用類別分類
        Array.prototype.groupBy = function(key) {
                return this.reduce(function(result, x) {
                    if (!result[x[key]]) {
                        result[x[key]] = []
                    }
                    result[x[key]].push(x)
                    return result
                }, {})
            }
            // 賠率效果全部
        function changeColor() {
            changeColorInterval = window.setInterval(function() {
                changeColorBoolean = true

                renderStar(categorySelect)
                changeColorTimeout = window.setTimeout(function() {

                    changeColorBoolean = false
                    renderStar(categorySelect)

                }, 5000)
            }, 9000)


        }
        // 賠率效果我的最愛
        function changeColorFavorite() {
            changeColorIntervalFavorite = setInterval(function() {
                changeColorBoolean = true
                renderFavorite()
                changeColorTimeoutFavorite = setTimeout(function() {
                    changeColorBoolean = false
                    renderFavorite()

                }, 5000)
            }, 9000)

        }
        // 動態時間
        window.autoTime = function() {

            setInterval(function() {

                var oddsTableCurrentGameTime = document.getElementsByClassName("oddsTableCurrentGameTime");
                var oddsTableCurrentGameTimeBasketball = document.getElementsByClassName("oddsTableCurrentGameTimeBasketball")
                    // var a = oddsTableCurrentGameTime[0].getElementsByTagName("div")[2].innerText.split(":")
                for (let i = 0; i < oddsTableCurrentGameTime.length; i++) {
                    if (oddsTableCurrentGameTime[i].getElementsByTagName("div")[2] != "&ensp;" &&
                        oddsTableCurrentGameTime[i].getElementsByTagName("div")[2] != undefined) {
                        for (let y = 0; y < datas.length; y++) {
                            if (oddsTableCurrentGameTime[i].getElementsByTagName("div")[2].getAttribute("value") == datas[y].id) {
                                let dataTime = datas[y].time[2].split(":")
                                var upDataTimeSeconds = (parseInt(dataTime[1]) + 1) % 60
                                var upDataTimeMinutes = (parseInt(dataTime[0]) + Math.floor((parseInt(dataTime[1]) + 1) / 60)) % 60
                                oddsTableCurrentGameTime[i].getElementsByTagName("div")[2].innerHTML = (upDataTimeMinutes < 10 ? '0' : '') + upDataTimeMinutes + ":" + (upDataTimeSeconds < 10 ? '0' : '') + upDataTimeSeconds
                                datas[y].time[2] = (upDataTimeMinutes < 10 ? '0' : '') + upDataTimeMinutes + ":" + (upDataTimeSeconds < 10 ? '0' : '') + upDataTimeSeconds
                            }
                        }
                    }
                    // console.log(upDataTimeSeconds)
                    // let dataTimeSeconds = [parseInt(dataTime[0] + 1) + ":" 
                    // console.log(dataTimeSeconds)
                    // console.log(dataTimeSeconds)
                    // let nowMinutes = time.getMinutes() * 60 + time.getSeconds() + dataTimeSeconds
                    // console.log(nowMinutes)
                    // let upDataTimeSeconds = nowMinutes % 60
                    // let upDataTimeMinutes = Math.floor(nowMinutes / 60)
                    // datas[i].time[2] = (upDataTimeMinutes < 10 ? '0' : '') + upDataTimeMinutes + ":" + (upDataTimeSeconds < 10 ? '0' : '') + upDataTimeSeconds

                }
                for (let i = 0; i < oddsTableCurrentGameTimeBasketball.length; i++) {
                    if (oddsTableCurrentGameTimeBasketball[i].getElementsByTagName("div")[2] != "&ensp;" &&
                        oddsTableCurrentGameTimeBasketball[i].getElementsByTagName("div")[2] != undefined) {
                        for (let z = 0; z < datas.length; z++) {
                            if (oddsTableCurrentGameTimeBasketball[i].getElementsByTagName("div")[2].getAttribute("value") == datas[z].id) {
                                let dataTime = datas[z].time[2].split(":")
                                let upDataTimeSeconds = (parseInt(dataTime[1]) + 1) % 60
                                let upDataTimeMinutes = (parseInt(dataTime[0]) + Math.floor(upDataTimeSeconds / 60)) % 60
                                oddsTableCurrentGameTimeBasketball[i].getElementsByTagName("div")[2].innerHTML = (upDataTimeMinutes < 10 ? '0' : '') + upDataTimeMinutes + ":" + (upDataTimeSeconds < 10 ? '0' : '') + upDataTimeSeconds
                                datas[z].time[2] = (upDataTimeMinutes < 10 ? '0' : '') + upDataTimeMinutes + ":" + (upDataTimeSeconds < 10 ? '0' : '') + upDataTimeSeconds
                            }
                        }
                    }

                }
            }, 1000)

        }

        autoTime()


        var timeSortOptionBtn = document.getElementById("timeSortOption")

        window.timeSortSelect = function() {
            timeSortBoolean = timeSortOptionBtn.value == "true" ? true : false
            timeSort()
            renderStar(categorySelect)

        }

        // 時間排序
        window.timeSort = function() {
            if (timeSortBoolean) {
                datas.sort(function(a, b) {
                    return parseInt(a.time[2]) - parseInt(b.time[2])
                })
            } else {
                datas.sort(function(a, b) {
                    return a.id - b.id
                })


            }
        }

        var changeColorInterval
        var changeColorTimeout
        var changeColorIntervalFavorite
        var changeColorTimeoutFavorite
        var changeColorBoolean = false
        var openTime = false
        var openTimeFavorite = false
        var categorySelect = "soccer"
        var timeSortBoolean = false
            // 全部類別渲染頁面    
        const renderStar = function(select) {
            clearTimeout(changeColorTimeoutFavorite)
            clearInterval(changeColorIntervalFavorite)
            if (!openTime) {
                changeColor();
                openTimeFavorite = false;
                openTime = true;
            }
            const oddsTableKind = document.getElementsByClassName("oddsTableKind")[0]
            const favoriteDatas = datas.filter(function(x) { return x.myFavorite })
            oddsTableHeadGameTitle.innerHTML = ""
            let groupByCategory = datas.groupBy("category")
            let selectByCategory = Object.keys(groupByCategory).reduce(function(result, category) {
                if (category == select) {
                    result[category] = groupByCategory[category].groupBy("gameHead")

                }
                return result
            }, {})
            if (select == "all") {
                var groupByCategoryAndgameHead =
                    Object.keys(groupByCategory).reduce(function(result, category) {
                        result[category] = groupByCategory[category].groupBy("gameHead")
                        return result
                    }, {})
            } else { groupByCategoryAndgameHead = selectByCategory }

            let html = ""
            let favAllStar = `<span class="favAll" onclick="isGameAllCategory()">全部</span>
    <span class="favAllStar" onclick="renderFavorite()"><img src="images/star.svg" alt=""><span>${favoriteDatas.length}</span></span>`
            oddsTableKind.innerHTML = favAllStar
            Object.keys(groupByCategoryAndgameHead).forEach(function(category) {
                if (category == "soccer") {
                    addTitleSoccer()
                    html = ""
                    Object.keys(groupByCategoryAndgameHead[category]).forEach(function(gameHead) {
                        html +=
                            `<div class="oddsTableScoreKind">
            <div class="oddsTableTeam">
            <div>${gameHead}</div>
            <div><img src="${isGameAllInFavorite(groupByCategoryAndgameHead[category][gameHead][0].game_id) ? 'images/star.svg' : 'images/star_white.svg'}"
            onclick="switchFavoriteByGameRenderStar('${groupByCategoryAndgameHead[category][gameHead][0].game_id}','${select}')"></div>
            </div>`
                        groupByCategoryAndgameHead[category][gameHead].forEach(function(data) {
                            if (data.id % 2 == 1) {
                                let dataSingle = Math.max.apply(null, data.single.filter(function(x) { return !isNaN(x) }))
                                let dataSpread = Math.max.apply(null, data.spread.filter(function(x) { return !isNaN(x) }))
                                let dataOverUnder = Math.max.apply(null, data.overUnder.filter(function(x) { return !isNaN(x) }))


                                // let dataOverUnder = Math.max.apply(null, data.overUnder.filter(function(x) { return !isNaN(x) }))
                                html +=
                                    `<div class="oddsTableCurrentGame">
        <div class="oddsTableCurrentGameTime">
                <div>${data.time[0]}</div>
                <div>${data.time[1]}</div>
                <div value="${data.id}">${data.time[2]}</div>
                ${data.time[3]!="&ensp;"?"<div>"+data.time[3]+"</div>":''}
        </div>
        <div class="oddsTableCurrentTeams">
                <div>${data.team[0]}</div>
                <div>${data.team[1]}</div>
                <div>${data.team[2]}<span onclick="Modal('#staticBackdropSoccer');">${data.modal}&gt;</span></div>
        </div>
        <div class="oddsTableSingle">
                <div class="${changeColorBoolean?(dataSingle==data.single[0]?'backgroundRed':data.single[0]!="&ensp;"?'backgroundGreen':''):""}">${data.single[0]}</div>
                <div class="${changeColorBoolean?(dataSingle==data.single[1]?'backgroundRed':data.single[1]!="&ensp;"?'backgroundGreen':''):""}">${data.single[1]}</div>
                <div class="${changeColorBoolean?(dataSingle==data.single[2]?'backgroundRed':data.single[2]!="&ensp;"?'backgroundGreen':''):""}">${data.single[2]}</div>
        </div>
        <div class="oddsTableScore">
                <div>${data.spreadScore[0]}</div>
                <div>${data.spreadScore[1]}</div>
                <div>${data.spreadScore[2]}</div>
        </div>
        <div class="oddsTableSpread">
                <div class="${changeColorBoolean?(dataSpread==data.spread[0]?'backgroundRed':data.spread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[0]}</div>
                <div class="${changeColorBoolean?(dataSpread==data.spread[1]?'backgroundRed':data.spread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[1]}</div>
                <div class="${changeColorBoolean?(dataSpread==data.spread[2]?'backgroundRed':data.spread[2]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[2]}</div>
        </div>
        <div class="oddsTableScore">
                <div>${data.overUnderScore[0]}</div>
                <div>${data.overUnderScore[1]}</div>
                <div>${data.overUnderScore[2]}</div>
        </div>
        <div class="oddsTableOverUnder">
            <div class="${changeColorBoolean?(dataOverUnder==data.overUnder[0]?'backgroundRed':data.overUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[0]}</div>
            <div class="${changeColorBoolean?(dataOverUnder==data.overUnder[1]?'backgroundRed':data.overUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[1]}</div>
            <div class="${changeColorBoolean?(dataOverUnder==data.overUnder[2]?'backgroundRed':data.overUnder[2]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[2]}</div>
        </div>
        <div class="oddsTableSingle">
            <div>${data.secondHalfSingle[0]}</div>
            <div>${data.secondHalfSingle[1]}</div>
            <div>${data.secondHalfSingle[2]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${data.secondHalfSpreadScore[0]}</div>
            <div>${data.secondHalfSpreadScore[1]}</div>
            <div>${data.secondHalfSpreadScore[2]}</div>
       </div>
        <div class="oddsTableSpread">
            <div>${data.secondHalfSpread[0]}</div>
            <div>${data.secondHalfSpread[1]}</div>
            <div>${data.secondHalfSpread[2]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${data.secondHalfOverUnderScore[0]}</div>
            <div>${data.secondHalfOverUnderScore[1]}</div>
            <div>${data.secondHalfOverUnderScore[2]}</div>
       </div>
        <div class="oddsTableOverUnder">
            <div>${data.secondHalfOverUnder[0]}</div>
            <div>${data.secondHalfOverUnder[1]}</div>
            <div>${data.secondHalfOverUnder[2]}</div>
        </div>
        <div class="oddsTableStar">
            <div id="${data.id}" onclick="switchFavoriteRenderStar(this.id,'${select}');"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
            <div>&ensp;</div>
            <div>&ensp;</div>
        </div>

    </div>`
                            } else {
                                let dataDownSpread = Math.max.apply(null, data.downSpread.filter(function(x) { return !isNaN(x) }))
                                let dataDownOverUnder = Math.max.apply(null, data.downOverUnder.filter(function(x) { return !isNaN(x) }))
                                html +=
                                    `<div class="oddsTableCurrentGame">
        <div class="oddsTableCurrentGameTime">
        </div>
        <div class="oddsTableCurrentTeams">
            <div>${data.team[0]}</div>
            <div>${data.team[1]}</div>
        </div>
        <div class="oddsTableSingle">
            <div>${data.downSingle[0]}</div>
            <div>${data.downSingle[1]}</div>
          
        </div>
        <div class="oddsTableScore">
            <div>${data.downSpreadScore[0]}</div>
            <div>${data.downSpreadScore[1]}</div>
        </div>
        <div class="oddsTableSpread">
            <div class="${changeColorBoolean?(dataDownSpread==data.downSpread[0]?'backgroundRed':data.downSpread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.downSpread[0]}</div>
            <div class="${changeColorBoolean?(dataDownSpread==data.downSpread[1]?'backgroundRed':data.downSpread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.downSpread[1]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${data.downOverUnderScore[0]}</div>
            <div>${data.downOverUnderScore[1]}</div>
        </div>
        <div class="oddsTableOverUnder">
            <div class="${changeColorBoolean?(dataDownOverUnder==data.downOverUnder[0]?'backgroundRed':data.downOverUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.downOverUnder[0]}</div>
            <div class="${changeColorBoolean?(dataDownOverUnder==data.downOverUnder[1]?'backgroundRed':data.downOverUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.downOverUnder[1]}</div>
        </div>
        <div class="oddsTableSingle">
            <div>${data.downSecondHalfSingle[0]}</div>
            <div>${data.downSecondHalfSingle[1]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${data.downSecondHalfSpreadScore[0]}</div>
            <div>${data.downSecondHalfSpreadScore[1]}</div>
        </div>
        <div class="oddsTableSpread">
            <div>${data.downSecondHalfSpread[0]}</div>
            <div>${data.downSecondHalfSpread[1]}</div>
        </div>
        <div class="oddsTableScore">
            <div>${data.downSecondHalfOverUnderScore[0]}</div>
            <div>${data.downSecondHalfOverUnderScore[1]}</div>
        </div>
        <div class="oddsTableOverUnder">
            <div>${data.downSecondHalfOverUnder[0]}</div>
            <div>${data.downSecondHalfOverUnder[1]}</div>
        </div>
        <div class="oddsTableStar">
        <div id="${data.id}" onclick="switchFavoriteRenderStar(this.id,'${select}');"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
        <div></div>
        </div>
    </div>`
                            }

                            html += "</div>"

                        })

                    })
                    oddsTableHeadGameTitle.innerHTML += html
                } else {

                    html = ""
                    addTitleBasketball()
                    Object.keys(groupByCategoryAndgameHead[category]).forEach(function(gameHead) {
                        html +=
                            `<div class="oddsTableScoreKind">
                        <div class="oddsTableTeam">
                        <div>${gameHead}</div>
                        <div><img src="${isGameAllInFavorite(groupByCategoryAndgameHead[category][gameHead][0].game_id) ? 'images/star.svg' : 'images/star_white.svg'}"
                        onclick="switchFavoriteByGameRenderStar('${groupByCategoryAndgameHead[category][gameHead][0].game_id}','${select}')"></div>                
                        </div>`
                        groupByCategoryAndgameHead[category][gameHead].forEach(function(data) {


                            if (data.id % 2 == 1) {
                                let dataSingle = Math.max.apply(null, data.single.filter(function(x) { return !isNaN(x) }))
                                let dataSpread = Math.max.apply(null, data.spread.filter(function(x) { return !isNaN(x) }))
                                let dataOverUnder = Math.max.apply(null, data.overUnder.filter(function(x) { return !isNaN(x) }))
                                html +=
                                    `<div class="oddsTableCurrentGameBasketball">
            <div class="oddsTableCurrentGameTimeBasketball">
                <div>${data.time[0]}</div>
                <div>${data.time[1]}</div>
                <div  value="${data.id}">${data.time[2]}</div>
            </div>
            <div class="oddsTableCurrentTeamsBasketball">
                <div>${data.team[0]}</div>
                <div>${data.team[1]}<span onclick="Modal('#staticBackdrop');">${data.modal}&gt;</span></div>
            </div>
            <div class="oddsTableSingleBasketball">
                <div  class="${changeColorBoolean?(dataSingle==data.single[0]?'backgroundRed':data.single[0]!="&ensp;"?'backgroundGreen':''):""}">${data.single[0]}</div>
                <div  class="${changeColorBoolean?(dataSingle==data.single[1]?'backgroundRed':data.single[1]!="&ensp;"?'backgroundGreen':''):""}">${data.single[1]}</div>
            </div>
            <div class="oddsTableSpreadScoreBasketball">
                <div>${data.spreadScore[0]}</div>
                <div>${data.spreadScore[1]}</div>
            </div>
            <div class="oddsTableSpreadBasketball">
                <div  class="${changeColorBoolean?(dataSpread==data.spread[0]?'backgroundRed':data.spread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[0]}</div>
                <div  class="${changeColorBoolean?(dataSpread==data.spread[1]?'backgroundRed':data.spread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[1]}</div>
            </div>
            <div class="oddsTableOverUnderScoreBasketball">
                <div><span>${data.overUnderScore[0][0]}</span><span>${data.overUnderScore[0][1]}</span></div>
                <div><span>${data.overUnderScore[1][0]}</span><span>${data.overUnderScore[1][1]}</span></div>
            </div>
            <div class="oddsTableOverUnderBasketball">
                <div  class="${changeColorBoolean?(dataOverUnder==data.overUnder[0]?'backgroundRed':data.overUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[0]}</div>
                <div  class="${changeColorBoolean?(dataOverUnder==data.overUnder[1]?'backgroundRed':data.overUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[1]}</div>
            </div>
            <div class="oddsTableTeamoverUnderScoreBasketball">
                <div>${data.TeamOverUnderScore[0]}</div>
                <div>${data.TeamOverUnderScore[1]}</div>
            </div>
            <div class="oddsTableTeamoverUnderBasketball">
                <div>${data.TeamOverUnder[0]}</div>
                <div>${data.TeamOverUnder[1]}</div>
            </div>
            <div class="oddsTableStarBasketball">
            <div id="${data.id}" onclick="switchFavoriteRenderStar(this.id,'${select}')"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
                <div></div>
                <div></div>
            </div>
        </div>`
                            } else {
                                let dataTwoSpread = Math.max.apply(null, data.twospread.filter(function(x) { return !isNaN(x) }))
                                let dataTwoOverUnder = Math.max.apply(null, data.twooverUnder.filter(function(x) { return !isNaN(x) }))
                                html +=
                                    `<div class="oddsTableCurrentGameBasketball">
            <div class="oddsTableCurrentGameTimeBasketball">
                <div>${data.time[0]}</div>
                <div>${data.time[1]}</div>
                <div  value="${data.id}">${data.time[2]}</div>
            </div>
            <div class="oddsTableCurrentTeamsBasketball">
                <div>${data.twoteam[0]}</div>
                <div>${data.twoteam[1]}<span onclick="Modal('#staticBackdrop');">${data.twomodal}&gt;</span></div>
            </div>
            <div class="oddsTableSingleBasketball">
                <div>${data.twosingle[0]}</div>
                <div>${data.twosingle[1]}</div>
            </div>
            <div class="oddsTableSpreadScoreBasketball">
                <div>${data.twospreadScore[0]}</div>
                <div>${data.twospreadScore[1]}</div>
            </div>
            <div class="oddsTableSpreadBasketball">
                <div  class="${changeColorBoolean?(dataTwoSpread==data.twospread[0]?'backgroundRed':data.twospread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.twospread[0]}</div>
                <div  class="${changeColorBoolean?(dataTwoSpread==data.twospread[1]?'backgroundRed':data.twospread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.twospread[1]}</div>
            </div>
            <div class="oddsTableOverUnderScoreBasketball">
                <div><span>${data.twooverUnderScore[0][0]}</span><span>${data.twooverUnderScore[0][1]}</span></div>
                <div><span>${data.twooverUnderScore[1][0]}</span><span>${data.twooverUnderScore[1][1]}</span></div>
            </div>
            <div class="oddsTableOverUnderBasketball">
                <div  class="${changeColorBoolean?(dataTwoOverUnder==data.twooverUnder[0]?'backgroundRed':data.twooverUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.twooverUnder[0]}</div>
                <div  class="${changeColorBoolean?(dataTwoOverUnder==data.twooverUnder[1]?'backgroundRed':data.twooverUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.twooverUnder[1]}</div>
            </div>
            <div class="oddsTableTeamoverUnderScoreBasketball">
                <div>${data.twoTeamOverUnderScore[0]}</div>
                <div>${data.twoTeamOverUnderScore[1]}</div>
            </div>
            <div class="oddsTableTeamoverUnderBasketball">
                <div>${data.twoTeamOverUnder[0]}</div>
                <div>${data.twoTeamOverUnder[1]}</div>
            </div>
            <div class="oddsTableStarBasketball">
            <div id="${data.id}" onclick="switchFavoriteRenderStar(this.id,'${select}')"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </div>`
                            }
                        })

                    })
                    oddsTableHeadGameTitle.innerHTML += html;
                }
            })
        }

        // 我的最愛頁面渲染
        window.renderFavorite = function() {
                clearInterval(changeColorInterval)
                clearTimeout(changeColorTimeout)
                if (!openTimeFavorite) {
                    openTimeFavorite = true;
                    openTime = false;
                    changeColorFavorite()
                }
                const oddsTableKind = document.getElementsByClassName("oddsTableKind")[0]
                oddsTableHeadGameTitle.innerHTML = ""
                const favoriteDatas = datas.filter(function(x) { return x.myFavorite })
                const groupByCategory = favoriteDatas.groupBy("category")
                var groupByCategoryAndgameHead = Object.keys(groupByCategory).reduce(function(result, category) {
                    result[category] = groupByCategory[category].groupBy("gameHead")
                    return result
                }, {})

                let html = ""
                let favAllStar = `<span class="favAll" onclick="isGameAllCategory()">全部</span>
            <span class="favAllStar" onclick="renderFavorite()"><img src="images/star.svg" alt=""><span>${favoriteDatas.length}</span></span>`
                oddsTableKind.innerHTML = favAllStar
                Object.keys(groupByCategoryAndgameHead).forEach(function(category) {
                    if (category == "soccer") {
                        addTitleSoccer()
                        Object.keys(groupByCategoryAndgameHead[category]).forEach(function(gameHead) {
                            html += `<div class="oddsTableScoreKind">
                                <div class="oddsTableTeam">
                                <div>${gameHead}</div>
                                <div><img src="${isGameAllInFavorite(groupByCategoryAndgameHead[category][gameHead][0].game_id) ? 'images/star.svg' : 'images/star_white.svg'}"
                                onclick="switchFavoriteByGame('${groupByCategoryAndgameHead[category][gameHead][0].game_id}')"></div>
                                </div>
                                `
                            groupByCategoryAndgameHead[category][gameHead].forEach(function(data) {



                                if (data.id % 2 == 1) {
                                    let dataSingle = Math.max.apply(null, data.single.filter(function(x) { return !isNaN(x) }))
                                    let dataSpread = Math.max.apply(null, data.spread.filter(function(x) { return !isNaN(x) }))
                                    let dataOverUnder = Math.max.apply(null, data.overUnder.filter(function(x) { return !isNaN(x) }))
                                    html +=
                                        `<div class="oddsTableCurrentGame">
                <div class="oddsTableCurrentGameTime">
                        <div>${data.time[0]}</div>
                        <div>${data.time[1]}</div>
                        <div value="${data.id}">${data.time[2]}</div>
                        ${data.time[3]!="&ensp;"?"<div>"+data.time[3]+"</div>":''}
                        </div>
                <div class="oddsTableCurrentTeams">
                        <div>${data.team[0]}</div>
                        <div>${data.team[1]}</div>
                        <div>${data.team[2]}<span onclick="Modal('#staticBackdropSoccer');">${data.modal}&gt;</span></div>
                </div>
                <div class="oddsTableSingle">
                        <div class="${changeColorBoolean?(dataSingle==data.single[0]?'backgroundRed':data.single[0]!="&ensp;"?'backgroundGreen':''):""}">${data.single[0]}</div>
                        <div class="${changeColorBoolean?(dataSingle==data.single[1]?'backgroundRed':data.single[1]!="&ensp;"?'backgroundGreen':''):""}">${data.single[1]}</div>
                        <div class="${changeColorBoolean?(dataSingle==data.single[2]?'backgroundRed':data.single[2]!="&ensp;"?'backgroundGreen':''):""}">${data.single[2]}</div>
                        
                </div>
                <div class="oddsTableScore">
                        <div>${data.spreadScore[0]}</div>
                        <div>${data.spreadScore[1]}</div>
                        <div>${data.spreadScore[2]}</div>
                </div>
                <div class="oddsTableSpread">
                        <div class="${changeColorBoolean?(dataSpread==data.spread[0]?'backgroundRed':data.spread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[0]}</div>
                        <div class="${changeColorBoolean?(dataSpread==data.spread[1]?'backgroundRed':data.spread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[1]}</div>
                        <div class="${changeColorBoolean?(dataSpread==data.spread[2]?'backgroundRed':data.spread[2]!="&ensp;"?'backgroundGreen':''):""}">${data.spread[2]}</div>
                       
                </div>
                <div class="oddsTableScore">
                        <div>${data.overUnderScore[0]}</div>
                        <div>${data.overUnderScore[1]}</div>
                        <div>${data.overUnderScore[2]}</div>
                </div>
                <div class="oddsTableOverUnder">
                    <div class="${changeColorBoolean?(dataOverUnder==data.overUnder[0]?'backgroundRed':data.overUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[0]}</div>
                    <div class="${changeColorBoolean?(dataOverUnder==data.overUnder[1]?'backgroundRed':data.overUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[1]}</div>
                    <div class="${changeColorBoolean?(dataOverUnder==data.overUnder[2]?'backgroundRed':data.overUnder[2]!="&ensp;"?'backgroundGreen':''):""}">${data.overUnder[2]}</div>
                </div>
                <div class="oddsTableSingle">
                    <div>${data.secondHalfSingle[0]}</div>
                    <div>${data.secondHalfSingle[1]}</div>
                    <div>${data.secondHalfSingle[2]}</div>
                </div>
                <div class="oddsTableScore">
                    <div>${data.secondHalfSpreadScore[0]}</div>
                    <div>${data.secondHalfSpreadScore[1]}</div>
                    <div>${data.secondHalfSpreadScore[2]}</div>
               </div>
                <div class="oddsTableSpread">
                    <div>${data.secondHalfSpread[0]}</div>
                    <div>${data.secondHalfSpread[1]}</div>
                    <div>${data.secondHalfSpread[2]}</div>
                </div>
                <div class="oddsTableScore">
                    <div>${data.secondHalfOverUnderScore[0]}</div>
                    <div>${data.secondHalfOverUnderScore[1]}</div>
                    <div>${data.secondHalfOverUnderScore[2]}</div>
               </div>
                <div class="oddsTableOverUnder">
                    <div>${data.secondHalfOverUnder[0]}</div>
                    <div>${data.secondHalfOverUnder[1]}</div>
                    <div>${data.secondHalfOverUnder[2]}</div>
                </div>
                <div class="oddsTableStar">
                    <div id="${data.id}" onclick="switchFavorite(this.id);"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
                    <div>&ensp;</div>
                    <div>&ensp;</div>
                </div>
        
            </div>`
                                } else {
                                    let dataDownSpread = Math.max.apply(null, data.downSpread.filter(function(x) { return !isNaN(x) }))
                                    let dataDownOverUnder = Math.max.apply(null, data.downOverUnder.filter(function(x) { return !isNaN(x) }))
                                    html +=
                                        `<div class="oddsTableCurrentGame">
                <div class="oddsTableCurrentGameTime">
                </div>
                <div class="oddsTableCurrentTeams">
                    <div>${data.team[0]}</div>
                    <div>${data.team[1]}</div>
                </div>
                <div class="oddsTableSingle">
                    <div>${data.downSingle[0]}</div>
                    <div>${data.downSingle[1]}</div>
                </div>
                <div class="oddsTableScore">
                    <div>${data.downSpreadScore[0]}</div>
                    <div>${data.downSpreadScore[1]}</div>
                </div>
                <div class="oddsTableSpread">
                    <div class="${changeColorBoolean?(dataDownSpread==data.downSpread[0]?'backgroundRed':data.downSpread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.downSpread[0]}</div>
                    <div class="${changeColorBoolean?(dataDownSpread==data.downSpread[1]?'backgroundRed':data.downSpread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.downSpread[1]}</div>
                </div>
                <div class="oddsTableScore">
                    <div>${data.downOverUnderScore[0]}</div>
                    <div>${data.downOverUnderScore[1]}</div>
                </div>
                <div class="oddsTableOverUnder">
                    <div class="${changeColorBoolean?(dataDownOverUnder==data.downOverUnder[0]?'backgroundRed':data.downOverUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.downOverUnder[0]}</div>
                    <div class="${changeColorBoolean?(dataDownOverUnder==data.downOverUnder[1]?'backgroundRed':data.downOverUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.downOverUnder[1]}</div>
                </div>
                <div class="oddsTableSingle">
                    <div>${data.downSecondHalfSingle[0]}</div>
                    <div>${data.downSecondHalfSingle[1]}</div>
                </div>
                <div class="oddsTableScore">
                    <div>${data.downSecondHalfSpreadScore[0]}</div>
                    <div>${data.downSecondHalfSpreadScore[1]}</div>
                </div>
                <div class="oddsTableSpread">
                    <div>${data.downSecondHalfSpread[0]}</div>
                    <div>${data.downSecondHalfSpread[1]}</div>
                </div>
                <div class="oddsTableScore">
                    <div>${data.downSecondHalfOverUnderScore[0]}</div>
                    <div>${data.downSecondHalfOverUnderScore[1]}</div>
                </div>
                <div class="oddsTableOverUnder">
                    <div>${data.downSecondHalfOverUnder[0]}</div>
                    <div>${data.downSecondHalfOverUnder[1]}</div>
                </div>
                <div class="oddsTableStar">
                <div id="${data.id}" onclick="switchFavorite(this.id);"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
                <div></div>
                </div>
            </div>`
                                }

                                html += "</div>"

                            })

                        })
                        oddsTableHeadGameTitle.innerHTML += html
                    } else {

                        html = ""
                        addTitleBasketball()
                        Object.keys(groupByCategoryAndgameHead[category]).forEach(function(gameHead) {
                            html +=
                                `<div class="oddsTableScoreKind">
                <div class="oddsTableTeam">
                    <div>${gameHead}</div>
                    <div><img src="${isGameAllInFavorite(groupByCategoryAndgameHead[category][gameHead][0].game_id) ? 'images/star.svg' : 'images/star_white.svg'}"
                    onclick="switchFavoriteByGame('${groupByCategoryAndgameHead[category][gameHead][0].game_id}')"></div>                
                    </div>`
                            groupByCategoryAndgameHead[category][gameHead].forEach(function(data) {
                                if (data.id % 2 == 1) {
                                    html +=
                                        `<div class="oddsTableCurrentGameBasketball">
                    <div class="oddsTableCurrentGameTimeBasketball">
                        <div>${data.time[0]}</div>
                        <div>${data.time[1]}</div>
                        <div value="${data.id}">${data.time[2]}</div>
                    </div>
                    <div class="oddsTableCurrentTeamsBasketball">
                        <div>${data.team[0]}</div>
                        <div>${data.team[1]}<span onclick="Modal('#staticBackdrop');">${data.modal}&gt;</span></div>
                    </div>
                    <div class="oddsTableSingleBasketball">
                        <div>${data.single[0]}</div>
                        <div>${data.single[1]}</div>
                    </div>
                    <div class="oddsTableSpreadScoreBasketball">
                        <div>${data.spreadScore[0]}</div>
                        <div>${data.spreadScore[1]}</div>
                    </div>
                    <div class="oddsTableSpreadBasketball">
                        <div>${data.spread[0]}</div>
                        <div>${data.spread[1]}</div>
                    </div>
                    <div class="oddsTableOverUnderScoreBasketball">
                        <div><span>${data.overUnderScore[0][0]}</span><span>${data.overUnderScore[0][1]}</span></div>
                        <div><span>${data.overUnderScore[1][0]}</span><span>${data.overUnderScore[1][1]}</span></div>
                    </div>
                    <div class="oddsTableOverUnderBasketball">
                        <div>${data.overUnder[0]}</div>
                        <div>${data.overUnder[1]}</div>
                    </div>
                    <div class="oddsTableTeamoverUnderScoreBasketball">
                        <div>${data.TeamOverUnderScore[0]}</div>
                        <div>${data.TeamOverUnderScore[1]}</div>
                    </div>
                    <div class="oddsTableTeamoverUnderBasketball">
                        <div>${data.TeamOverUnder[0]}</div>
                        <div>${data.TeamOverUnder[1]}</div>
                    </div>
                    <div class="oddsTableStarBasketball">
                    <div id="${data.id}" onclick="switchFavorite(this.id);"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>`
                                } else {
                                    let dataTwoSpread = Math.max.apply(null, data.twospread.filter(function(x) { return !isNaN(x) }))
                                    let dataTwoOverUnder = Math.max.apply(null, data.twooverUnder.filter(function(x) { return !isNaN(x) }))
                                    html +=
                                        `<div class="oddsTableCurrentGameBasketball">
                    <div class="oddsTableCurrentGameTimeBasketball">
                        <div>${data.time[0]}</div>
                        <div>${data.time[1]}</div>
                        <div value="${data.id}">${data.time[2]}</div>
                    </div>
                    <div class="oddsTableCurrentTeamsBasketball">
                        <div>${data.twoteam[0]}</div>
                        <div>${data.twoteam[1]}<span onclick="Modal('#staticBackdrop');">${data.twomodal}&gt;</span></div>
                    </div>
                    <div class="oddsTableSingleBasketball">
                        <div>${data.twosingle[0]}</div>
                        <div>${data.twosingle[1]}</div>
                    </div>
                    <div class="oddsTableSpreadScoreBasketball">
                        <div>${data.twospreadScore[0]}</div>
                        <div>${data.twospreadScore[1]}</div>
                    </div>
                    <div class="oddsTableSpreadBasketball">
                        <div class="${changeColorBoolean?(dataTwoSpread==data.twospread[0]?'backgroundRed':data.twospread[0]!="&ensp;"?'backgroundGreen':''):""}">${data.twospread[0]}</div>
                        <div class="${changeColorBoolean?(dataTwoSpread==data.twospread[1]?'backgroundRed':data.twospread[1]!="&ensp;"?'backgroundGreen':''):""}">${data.twospread[1]}</div>
                    </div>
                    <div class="oddsTableOverUnderScoreBasketball">
                        <div><span>${data.twooverUnderScore[0][0]}</span><span>${data.twooverUnderScore[0][1]}</span></div>
                        <div><span>${data.twooverUnderScore[1][0]}</span><span>${data.twooverUnderScore[1][1]}</span></div>
                    </div>
                    <div class="oddsTableOverUnderBasketball">
                        <div class="${changeColorBoolean?(dataTwoOverUnder==data.twooverUnder[0]?'backgroundRed':data.twooverUnder[0]!="&ensp;"?'backgroundGreen':''):""}">${data.twooverUnder[0]}</div>
                        <div class="${changeColorBoolean?(dataTwoOverUnder==data.twooverUnder[1]?'backgroundRed':data.twooverUnder[1]!="&ensp;"?'backgroundGreen':''):""}">${data.twooverUnder[1]}</div>
                    </div>
                    <div class="oddsTableTeamoverUnderScoreBasketball">
                        <div>${data.twoTeamOverUnderScore[0]}</div>
                        <div>${data.twoTeamOverUnderScore[1]}</div>
                    </div>
                    <div class="oddsTableTeamoverUnderBasketball">
                        <div>${data.twoTeamOverUnder[0]}</div>
                        <div>${data.twoTeamOverUnder[1]}</div>
                    </div>
                    <div class="oddsTableStarBasketball">
                    <div id="${data.id}" onclick="switchFavorite(this.id);"><img src="${data.myFavorite ?'images/star.svg':'images/star_white.svg'}"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </div>`
                                }
                            })

                        })
                        oddsTableHeadGameTitle.innerHTML += html;
                    }
                })
            }
            // 標題星星判斷(亮不亮燈)
        const isGameAllInFavorite = function(game_id) {
                return datas.filter(function(x) { return x.game_id == game_id })
                    .every(function(x) { return x.myFavorite })

            }
            // 標題星星
        window.switchFavoriteByGame = function(game_id) {
                const val = !isGameAllInFavorite(game_id)
                datas
                    .filter(function(x) { return x.game_id == game_id })
                    .forEach(function(x) { return x.myFavorite = val })
                renderFavorite()
            }
            // 全部頁面星星判斷
        window.switchFavoriteByGameRenderStar = function(game_id, select) {
            const val = !isGameAllInFavorite(game_id)
            datas
                .filter(function(x) { return x.game_id == game_id })
                .forEach(function(x) { return x.myFavorite = val })
            categorySelect = select
            renderStar(select)
        }
        window.switchFavorite = function(id) {
            const data = datas.find(x => x.id == id)
            data.myFavorite = !data.myFavorite
            renderFavorite()
        }
        window.switchFavoriteRenderStar = function(id, select) {
            const data = datas.find(x => x.id == id)
            data.myFavorite = !data.myFavorite
            categorySelect = select
            renderStar(select)

        }

        window.isGameAllCategory = function() {
            var categoryCheckbox = document.querySelectorAll("input[name='category']")
            if (categoryCheckbox[0].id == "category0" && categoryCheckbox[0].checked == true) {

                renderStar("all")
            } else {
                categoryCheckbox.forEach(function(x) {

                    if (x.id == "category1" && x.checked == true) {
                        categorySelect = "soccer"
                        renderStar(categorySelect)


                    } else if (x.id == "category2" && x.checked == true) {
                        categorySelect = "basketball"
                        renderStar(categorySelect)

                    }

                })
            }

        }



        // 完成品後要提出來
        // ensp(soccer)
        // ensp(basketball)
        ensp(datas)
        const categoryLength = datas.groupBy("category")
        console.log(categoryLength)
        var nber = [categoryLength.soccer.length, categoryLength.basketball.length, 2, 3, 4, 5, 6];



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
        Carousel();

        function Carousel() {
            if (mainHeadCarouselItemWidth > mainHeadCarousel.scrollLeft) {
                if (mainHeadCarouselItemWidth - mainHeadCarousel.scrollLeft < mainHeadCarousel.clientWidth) {
                    mainHeadCarousel.scrollLeft = 1
                    clearTimeout(timeOver)
                    timeOver = setTimeout(Carousel, 15)
                } else {
                    mainHeadCarousel.scrollLeft += 1
                    timeOver = setTimeout(Carousel, 15)
                }
            }
        }
        mainHeadCarousel.addEventListener("mouseout", Carousel);
        mainHeadCarousel.addEventListener("mouseover", function() {
            clearTimeout(timeOver);
        });

        categoryList(category);


        // 滾球選單
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

                    if (event.target.id == "category0" && categoryLiItem[0].checked == true) {
                        categorySelect = "all"
                        renderStar(categorySelect)
                        for (let x = 1; x < categoryLiItem.length; x++) {
                            categoryLiItem[x].checked = true;
                        }
                    } else {
                        if (event.target.id == "category0" && categoryLiItem[0].checked == false) {
                            categorySelect = "soccer"
                            renderStar(categorySelect)
                            for (let x = 1; x < categoryLiItem.length; x++) {
                                categoryLiItem[x].checked = false;
                                categoryLiItem[1].checked = true;
                            }
                        } else {
                            for (let x = 0; x < categoryLiItem.length; x++) {
                                if (categoryLiItem[x].id == event.target.id) {
                                    categoryLiItem[x].checked = true;
                                    switch (event.target.value) {
                                        case "足球":
                                            categorySelect = "soccer"
                                            renderStar(categorySelect)

                                            break;
                                        case "籃球":
                                            categorySelect = "basketball"
                                            renderStar(categorySelect)
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


        // window.myFavorite = function(id) {
        //     const data = datas.find(x => x.id == id)
        //     data.myFavorite = !data.myFavorite
        // }


        renderStar("soccer")


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

    }
    // export
    // 球頭調整
    // modal 關閉鈕 修復 查abloute為什麼不能用
    // 可以下次任務貼在skype群組視窗