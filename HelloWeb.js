/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.5.0
 */
Bridge.assembly("HelloWeb", function ($asm, globals) {
    "use strict";

    Bridge.define("HelloWeb.App", {
        main: function Main () {
            // Create a new HTML Button
            var button = document.createElement("button");

            var table = document.createElement("div");
            var list = document.createElement("ul");

            // Set the Button text
            button.innerHTML = "Click Me";
            // Add a Click event handler
            button.onclick = function (ev) {
                HelloWeb.App.FillStratagemsList(list, table);
            };
            // Add the button to the document body
            document.body.appendChild(button);
            document.body.appendChild(list);
            document.body.appendChild(table);
        },
        statics: {
            fields: {
                OnLoad: null
            },
            methods: {
                FillStratagemsList: function (list, block) {
                    var $t;
                    var stratagems = new HelloWeb.Storage.StartegiumStarage().QueryStratagemList();
                    $t = Bridge.getEnumerator(stratagems);
                    try {
                        while ($t.moveNext()) {
                            var stratagem = { v : $t.Current };
                            var li = document.createElement("li");
                            li.textContent = stratagem.v.Title;
                            list.appendChild(li);
                            li.onclick = (function ($me, stratagem) {
                                return function (ev) {
                                    block.innerHTML = new HelloWeb.Storage.TextStorage().StartagemHtml(stratagem.v.Id);
                                };
                            })(this, stratagem);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}
            }
        }
    });

    Bridge.define("HelloWeb.Storage.StartegiumStarage", {
        methods: {
            QueryStratagemList: function () {
                var $t;
                var data = new (System.Collections.Generic.List$1(HelloWeb.Storage.StratagemData)).ctor();
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 1, $t.Title = "1. Обмануть Императора, чтобы он переплыл море", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 2, $t.Title = "2. Осадить Вэй, чтобы спасти Чжао", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 3, $t.Title = "3. Убить чужим ножом", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 4, $t.Title = "4. В покое ожидать утомленного врага", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 5, $t.Title = "5. Грабить во время пожара", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 6, $t.Title = "6. На востоке поднимать шум, на западе нападать", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 7, $t.Title = "7. Извлечь нечто из ничего", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 8, $t.Title = "8. Для вида чинить деревянные мостки, втайне выступить в Чэньцан", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 9, $t.Title = "9. Наблюдать за огнём с противоположного берега", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 10, $t.Title = "10. Скрывать за улыбкой кинжал", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 11, $t.Title = "11. Сливовое дерево засыхает вместо персикового", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 12, $t.Title = "12. Увести овцу легкой рукой", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 13, $t.Title = "13. Бить по траве, чтобы вспугнуть змею", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 14, $t.Title = "14. Позаимствовать труп, чтобы вернуть душу", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 15, $t.Title = "15. Сманить тигра с горы на равнину", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 16, $t.Title = "16. Если хочешь что-нибудь поймать, сначала отпусти", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 17, $t.Title = "17. Бросить кирпич, чтобы получить яшму", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 18, $t.Title = "18. Чтобы обезвредить разбойничью шайку, сначала надо поймать главаря", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 19, $t.Title = "19. Тайно подкладывать хворост под котел другого", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 20, $t.Title = "20. Ловить рыбу в мутной воде", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 21, $t.Title = "21. Цикада сбрасывает свою золотую кожицу", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 22, $t.Title = "22. Закрыть дверь и поймать вора", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 23, $t.Title = "23. Объединиться с дальним врагом, чтобы побить ближнего", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 24, $t.Title = "24. Объявив, что только собираешься пройти сквозь государство Го, захватить его", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 25, $t.Title = "25. Украсть балки и заменить их гнилыми подпорками", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 26, $t.Title = "26. Скрыть акацию и указать на тутовое дерево", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 27, $t.Title = "27. Делать безумные жесты, не теряя равновесия", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 28, $t.Title = "28. Заманить на крышу и убрать лестницу", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 29, $t.Title = "29. Украсить сухие деревья искусственными цветами", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 30, $t.Title = "30. Превратить роль гостя в роль хозяина", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 31, $t.Title = "31. Стратагема красотки", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 32, $t.Title = "32. Стратагема открытых городских ворот", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 33, $t.Title = "33. Стратагема сеяния раздора", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 34, $t.Title = "34. Стратагема самострела", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 35, $t.Title = "35. Стратагема «цепи»", $t));
                data.add(($t = new HelloWeb.Storage.StratagemData(), $t.Id = 36, $t.Title = "36. Бегство (при полной безнадёжности)", $t));
                return data;
            }
        }
    });

    Bridge.define("HelloWeb.Storage.StratagemData", {
        fields: {
            Id: 0,
            Title: null
        }
    });

    Bridge.define("HelloWeb.Storage.TextStorage", {
        methods: {
            StartagemHtml: function (stratagemId) {
                var request = new XMLHttpRequest();
                var file = "stratagem" + (System.Int32.format(stratagemId, "00") || "") + ".txt";
                request.open("GET", (System.String.format("https://oygan.github.io/strategium/startagem_notes/", null) || "") + (file || ""), false);
                request.overrideMimeType("text/html; charset=windows-1251");
                request.send();
                return request.responseText;

            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJIZWxsb1dlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQXBwLmNzIiwiU3RvcmFnZS9TdGFydGVnaXVtU3RhcmFnZS5jcyIsIlN0b3JhZ2UvVGV4dFN0b3JhZ2UuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O1lBY1lBLGFBQWFBOztZQUViQSxZQUFZQTtZQUNaQSxXQUFXQTs7O1lBR1hBOztZQUVBQSxpQkFBaUJBLFVBQUNBO2dCQUFTQSxnQ0FBbUJBLE1BQU1BOzs7WUFFcERBLDBCQUEwQkE7WUFDMUJBLDBCQUEwQkE7WUFDMUJBLDBCQUEwQkE7Ozs7Ozs7OENBR1NBLE1BQXVCQTs7b0JBRTFEQSxpQkFBaUNBLElBQUlBO29CQUNyQ0EsMEJBQW9DQTs7Ozs0QkFFaENBLFNBQVNBOzRCQUNUQSxpQkFBaUJBOzRCQUNqQkEsaUJBQWlCQTs0QkFDakJBLGFBQWFBO2lEQUFDQTtvQ0FFVkEsa0JBQWtCQSxJQUFJQSw2Q0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7OztnQkMvQjFEQSxXQUEyQkEsS0FBSUE7Z0JBQy9CQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUtiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7cUNDM0NpQkE7Z0JBRXhCQSxjQUFjQSxJQUFJQTtnQkFDbEJBLFdBQWNBLGVBQWNBO2dCQUM1QkEsb0JBQW9CQSw2RkFBc0VBO2dCQUMxRkE7Z0JBQ0FBO2dCQUNBQSxPQUFPQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgTmV3dG9uc29mdC5Kc29uO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBIZWxsb1dlYi5TdG9yYWdlO1xyXG5cclxubmFtZXNwYWNlIEhlbGxvV2ViXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBBcHBcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgSFRNTCBCdXR0b25cclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRhYmxlID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbmV3IEhUTUxVTGlzdEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgQnV0dG9uIHRleHRcclxuICAgICAgICAgICAgYnV0dG9uLklubmVySFRNTCA9IFwiQ2xpY2sgTWVcIjtcclxuICAgICAgICAgICAgLy8gQWRkIGEgQ2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgICAgICBidXR0b24uT25DbGljayA9IChldikgPT4geyBGaWxsU3RyYXRhZ2Vtc0xpc3QobGlzdCwgdGFibGUpOyB9O1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGJ1dHRvbiB0byB0aGUgZG9jdW1lbnQgYm9keVxyXG4gICAgICAgICAgICBEb2N1bWVudC5Cb2R5LkFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBGaWxsU3RyYXRhZ2Vtc0xpc3QoSFRNTFVMaXN0RWxlbWVudCBsaXN0LCBIVE1MRGl2RWxlbWVudCBibG9jaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8U3RyYXRhZ2VtRGF0YT4gc3RyYXRhZ2VtcyA9IG5ldyBTdGFydGVnaXVtU3RhcmFnZSgpLlF1ZXJ5U3RyYXRhZ2VtTGlzdCgpO1xyXG4gICAgICAgICAgICBmb3JlYWNoIChTdHJhdGFnZW1EYXRhIHN0cmF0YWdlbSBpbiBzdHJhdGFnZW1zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBuZXcgSFRNTExJRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgbGkuVGV4dENvbnRlbnQgPSBzdHJhdGFnZW0uVGl0bGU7XHJcbiAgICAgICAgICAgICAgICBsaXN0LkFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICAgICAgICAgIGxpLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suSW5uZXJIVE1MID0gbmV3IFRleHRTdG9yYWdlKCkuU3RhcnRhZ2VtSHRtbChzdHJhdGFnZW0uSWQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBBY3Rpb248U3RyYXRhZ2VtRGF0YT4gT25Mb2FkIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxufSIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIEhlbGxvV2ViLlN0b3JhZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFN0YXJ0ZWdpdW1TdGFyYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpc3Q8U3RyYXRhZ2VtRGF0YT4gUXVlcnlTdHJhdGFnZW1MaXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8U3RyYXRhZ2VtRGF0YT4gZGF0YSA9IG5ldyBMaXN0PFN0cmF0YWdlbURhdGE+KCk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkge0lkID0gMSwgVGl0bGUgPSBcIjEuINCe0LHQvNCw0L3Rg9GC0Ywg0JjQvNC/0LXRgNCw0YLQvtGA0LAsINGH0YLQvtCx0Ysg0L7QvSDQv9C10YDQtdC/0LvRi9C7INC80L7RgNC1XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMiwgVGl0bGUgPSBcIjIuINCe0YHQsNC00LjRgtGMINCS0Y3QuSwg0YfRgtC+0LHRiyDRgdC/0LDRgdGC0Lgg0KfQttCw0L5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzLCBUaXRsZSA9IFwiMy4g0KPQsdC40YLRjCDRh9GD0LbQuNC8INC90L7QttC+0LxcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSA0LCBUaXRsZSA9IFwiNC4g0JIg0L/QvtC60L7QtSDQvtC20LjQtNCw0YLRjCDRg9GC0L7QvNC70LXQvdC90L7Qs9C+INCy0YDQsNCz0LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSA1LCBUaXRsZSA9IFwiNS4g0JPRgNCw0LHQuNGC0Ywg0LLQviDQstGA0LXQvNGPINC/0L7QttCw0YDQsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDYsIFRpdGxlID0gXCI2LiDQndCwINCy0L7RgdGC0L7QutC1INC/0L7QtNC90LjQvNCw0YLRjCDRiNGD0LwsINC90LAg0LfQsNC/0LDQtNC1INC90LDQv9Cw0LTQsNGC0YxcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSA3LCBUaXRsZSA9IFwiNy4g0JjQt9Cy0LvQtdGH0Ywg0L3QtdGH0YLQviDQuNC3INC90LjRh9C10LPQvlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDgsIFRpdGxlID0gXCI4LiDQlNC70Y8g0LLQuNC00LAg0YfQuNC90LjRgtGMINC00LXRgNC10LLRj9C90L3Ri9C1INC80L7RgdGC0LrQuCwg0LLRgtCw0LnQvdC1INCy0YvRgdGC0YPQv9C40YLRjCDQsiDQp9GN0L3RjNGG0LDQvVwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDksIFRpdGxlID0gXCI5LiDQndCw0LHQu9GO0LTQsNGC0Ywg0LfQsCDQvtCz0L3RkdC8INGBINC/0YDQvtGC0LjQstC+0L/QvtC70L7QttC90L7Qs9C+INCx0LXRgNC10LPQsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDEwLCBUaXRsZSA9IFwiMTAuINCh0LrRgNGL0LLQsNGC0Ywg0LfQsCDRg9C70YvQsdC60L7QuSDQutC40L3QttCw0LtcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxMSwgVGl0bGUgPSBcIjExLiDQodC70LjQstC+0LLQvtC1INC00LXRgNC10LLQviDQt9Cw0YHRi9GF0LDQtdGCINCy0LzQtdGB0YLQviDQv9C10YDRgdC40LrQvtCy0L7Qs9C+XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTIsIFRpdGxlID0gXCIxMi4g0KPQstC10YHRgtC4INC+0LLRhtGDINC70LXQs9C60L7QuSDRgNGD0LrQvtC5XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTMsIFRpdGxlID0gXCIxMy4g0JHQuNGC0Ywg0L/QviDRgtGA0LDQstC1LCDRh9GC0L7QsdGLINCy0YHQv9GD0LPQvdGD0YLRjCDQt9C80LXRjlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDE0LCBUaXRsZSA9IFwiMTQuINCf0L7Qt9Cw0LjQvNGB0YLQstC+0LLQsNGC0Ywg0YLRgNGD0L8sINGH0YLQvtCx0Ysg0LLQtdGA0L3Rg9GC0Ywg0LTRg9GI0YNcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxNSwgVGl0bGUgPSBcIjE1LiDQodC80LDQvdC40YLRjCDRgtC40LPRgNCwINGBINCz0L7RgNGLINC90LAg0YDQsNCy0L3QuNC90YNcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxNiwgVGl0bGUgPSBcIjE2LiDQldGB0LvQuCDRhdC+0YfQtdGI0Ywg0YfRgtC+LdC90LjQsdGD0LTRjCDQv9C+0LnQvNCw0YLRjCwg0YHQvdCw0YfQsNC70LAg0L7RgtC/0YPRgdGC0LhcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxNywgVGl0bGUgPSBcIjE3LiDQkdGA0L7RgdC40YLRjCDQutC40YDQv9C40YcsINGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDRj9GI0LzRg1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDE4LCBUaXRsZSA9IFwiMTguINCn0YLQvtCx0Ysg0L7QsdC10LfQstGA0LXQtNC40YLRjCDRgNCw0LfQsdC+0LnQvdC40YfRjNGOINGI0LDQudC60YMsINGB0L3QsNGH0LDQu9CwINC90LDQtNC+INC/0L7QudC80LDRgtGMINCz0LvQsNCy0LDRgNGPXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTksIFRpdGxlID0gXCIxOS4g0KLQsNC50L3QviDQv9C+0LTQutC70LDQtNGL0LLQsNGC0Ywg0YXQstC+0YDQvtGB0YIg0L/QvtC0INC60L7RgtC10Lsg0LTRgNGD0LPQvtCz0L5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyMCwgVGl0bGUgPSBcIjIwLiDQm9C+0LLQuNGC0Ywg0YDRi9Cx0YMg0LIg0LzRg9GC0L3QvtC5INCy0L7QtNC1XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjEsIFRpdGxlID0gXCIyMS4g0KbQuNC60LDQtNCwINGB0LHRgNCw0YHRi9Cy0LDQtdGCINGB0LLQvtGOINC30L7Qu9C+0YLRg9GOINC60L7QttC40YbRg1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDIyLCBUaXRsZSA9IFwiMjIuINCX0LDQutGA0YvRgtGMINC00LLQtdGA0Ywg0Lgg0L/QvtC50LzQsNGC0Ywg0LLQvtGA0LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyMywgVGl0bGUgPSBcIjIzLiDQntCx0YrQtdC00LjQvdC40YLRjNGB0Y8g0YEg0LTQsNC70YzQvdC40Lwg0LLRgNCw0LPQvtC8LCDRh9GC0L7QsdGLINC/0L7QsdC40YLRjCDQsdC70LjQttC90LXQs9C+XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJZCA9IDI0LFxyXG4gICAgICAgICAgICAgICAgVGl0bGUgPSBcIjI0LiDQntCx0YrRj9Cy0LjQsiwg0YfRgtC+INGC0L7Qu9GM0LrQviDRgdC+0LHQuNGA0LDQtdGI0YzRgdGPINC/0YDQvtC50YLQuCDRgdC60LLQvtC30Ywg0LPQvtGB0YPQtNCw0YDRgdGC0LLQviDQk9C+LCDQt9Cw0YXQstCw0YLQuNGC0Ywg0LXQs9C+XCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDI1LCBUaXRsZSA9IFwiMjUuINCj0LrRgNCw0YHRgtGMINCx0LDQu9C60Lgg0Lgg0LfQsNC80LXQvdC40YLRjCDQuNGFINCz0L3QuNC70YvQvNC4INC/0L7QtNC/0L7RgNC60LDQvNC4XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjYsIFRpdGxlID0gXCIyNi4g0KHQutGA0YvRgtGMINCw0LrQsNGG0LjRjiDQuCDRg9C60LDQt9Cw0YLRjCDQvdCwINGC0YPRgtC+0LLQvtC1INC00LXRgNC10LLQvlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDI3LCBUaXRsZSA9IFwiMjcuINCU0LXQu9Cw0YLRjCDQsdC10LfRg9C80L3Ri9C1INC20LXRgdGC0YssINC90LUg0YLQtdGA0Y/RjyDRgNCw0LLQvdC+0LLQtdGB0LjRj1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDI4LCBUaXRsZSA9IFwiMjguINCX0LDQvNCw0L3QuNGC0Ywg0L3QsCDQutGA0YvRiNGDINC4INGD0LHRgNCw0YLRjCDQu9C10YHRgtC90LjRhtGDXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjksIFRpdGxlID0gXCIyOS4g0KPQutGA0LDRgdC40YLRjCDRgdGD0YXQuNC1INC00LXRgNC10LLRjNGPINC40YHQutGD0YHRgdGC0LLQtdC90L3Ri9C80Lgg0YbQstC10YLQsNC80LhcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzMCwgVGl0bGUgPSBcIjMwLiDQn9GA0LXQstGA0LDRgtC40YLRjCDRgNC+0LvRjCDQs9C+0YHRgtGPINCyINGA0L7Qu9GMINGF0L7Qt9GP0LjQvdCwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzEsIFRpdGxlID0gXCIzMS4g0KHRgtGA0LDRgtCw0LPQtdC80LAg0LrRgNCw0YHQvtGC0LrQuFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDMyLCBUaXRsZSA9IFwiMzIuINCh0YLRgNCw0YLQsNCz0LXQvNCwINC+0YLQutGA0YvRgtGL0YUg0LPQvtGA0L7QtNGB0LrQuNGFINCy0L7RgNC+0YJcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzMywgVGl0bGUgPSBcIjMzLiDQodGC0YDQsNGC0LDQs9C10LzQsCDRgdC10Y/QvdC40Y8g0YDQsNC30LTQvtGA0LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzNCwgVGl0bGUgPSBcIjM0LiDQodGC0YDQsNGC0LDQs9C10LzQsCDRgdCw0LzQvtGB0YLRgNC10LvQsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDM1LCBUaXRsZSA9IFwiMzUuINCh0YLRgNCw0YLQsNCz0LXQvNCwIMKr0YbQtdC/0LjCu1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDM2LCBUaXRsZSA9IFwiMzYuINCR0LXQs9GB0YLQstC+ICjQv9GA0Lgg0L/QvtC70L3QvtC5INCx0LXQt9C90LDQtNGR0LbQvdC+0YHRgtC4KVwifSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGFzcyBTdHJhdGFnZW1EYXRhXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGludCBJZCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBUaXRsZSB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcblxyXG5uYW1lc3BhY2UgSGVsbG9XZWIuU3RvcmFnZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgVGV4dFN0b3JhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0YXJ0YWdlbUh0bWwoaW50IHN0cmF0YWdlbUlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgc3RyaW5nIGZpbGUgPSBcInN0cmF0YWdlbVwiICsgc3RyYXRhZ2VtSWQuVG9TdHJpbmcoXCIwMFwiKSArIFwiLnR4dFwiO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lk9wZW4oXCJHRVRcIiwgc3RyaW5nLkZvcm1hdChcImh0dHBzOi8vb3lnYW4uZ2l0aHViLmlvL3N0cmF0ZWdpdW0vc3RhcnRhZ2VtX25vdGVzL1wiKSsgZmlsZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lk92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9d2luZG93cy0xMjUxXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNlbmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QuUmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
