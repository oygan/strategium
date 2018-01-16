/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.5.0
 */
Bridge.assembly("HelloWeb", function ($asm, globals) {
    "use strict";

    Bridge.define("HelloWeb.App", {
        main: function Main () {
            var presenter = new HelloWeb.StratagemPresenter();
            presenter.HelloWeb$IStratagemPresenter$ShowView();
        }
    });

    Bridge.define("HelloWeb.IStratagemPresenter", {
        $kind: "interface"
    });

    Bridge.define("HelloWeb.IStratagemView", {
        $kind: "interface"
    });

    Bridge.define("HelloWeb.IStratagemViewEvents", {
        $kind: "interface"
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

    Bridge.define("HelloWeb.StratagemPresenter", {
        inherits: [HelloWeb.IStratagemPresenter,HelloWeb.IStratagemViewEvents],
        fields: {
            _view: null
        },
        alias: [
            "ShowView", "HelloWeb$IStratagemPresenter$ShowView",
            "WantsStratagemMenu", "HelloWeb$IStratagemViewEvents$WantsStratagemMenu",
            "WantStratagemText", "HelloWeb$IStratagemViewEvents$WantStratagemText"
        ],
        methods: {
            ShowView: function () {
                this._view = new HelloWeb.StratagemView();
                this._view.HelloWeb$IStratagemView$SetEvents(Bridge.as(this, HelloWeb.IStratagemViewEvents));
            },
            WantsStratagemMenu: function () {
                var stratagems = new HelloWeb.Storage.StartegiumStarage().QueryStratagemList();
                this._view.HelloWeb$IStratagemView$ClearStratagemText();
                this._view.HelloWeb$IStratagemView$UpdateStratagemMenu(stratagems);
            },
            WantStratagemText: function (stratagemId) {

                var stratagemText = new HelloWeb.Storage.TextStorage().StartagemHtml(stratagemId);
                this._view.HelloWeb$IStratagemView$ClearStratagemMenu();
                this._view.HelloWeb$IStratagemView$UpdateStratagemText(stratagemText);
            }
        }
    });

    Bridge.define("HelloWeb.StratagemView", {
        inherits: [HelloWeb.IStratagemView],
        fields: {
            _viewEvents: null,
            _wantStratgemButton: null,
            _stratgemDiv: null,
            _stratgemList: null
        },
        alias: [
            "SetEvents", "HelloWeb$IStratagemView$SetEvents",
            "ClearStratagemMenu", "HelloWeb$IStratagemView$ClearStratagemMenu",
            "UpdateStratagemMenu", "HelloWeb$IStratagemView$UpdateStratagemMenu",
            "UpdateStratagemText", "HelloWeb$IStratagemView$UpdateStratagemText",
            "ClearStratagemText", "HelloWeb$IStratagemView$ClearStratagemText"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                var wantLanguageStratgem = document.createElement("a");
                wantLanguageStratgem.text = "   Язык стратагем";
                wantLanguageStratgem.href = "https://oygan.github.io/strategium/stratagem_language/startagem_language.html";

                this._wantStratgemButton = document.createElement("button");
                this._stratgemDiv = document.createElement("div");
                this._stratgemList = document.createElement("ul");

                this._wantStratgemButton.innerHTML = "Стратагемы";

                document.body.appendChild(this._wantStratgemButton);
                document.body.appendChild(wantLanguageStratgem);


                var div = document.createElement("div");
                div.id = "primary_nav_wrap";
                div.appendChild(this._stratgemList);
                document.body.appendChild(div);

                document.body.appendChild(this._stratgemDiv);

                this._wantStratgemButton.onclick = Bridge.fn.bind(this, function (ev) {
                    this._viewEvents.HelloWeb$IStratagemViewEvents$WantsStratagemMenu();
                });
            }
        },
        methods: {
            SetEvents: function (viewEvents) {
                this._viewEvents = viewEvents;
            },
            ClearStratagemMenu: function () {
                this._stratgemList.innerHTML = "";
            },
            UpdateStratagemMenu: function (stratagems) {
                var $t;
                this._stratgemList.innerHTML = "";

                $t = Bridge.getEnumerator(stratagems);
                try {
                    while ($t.moveNext()) {
                        var stratagem = { v : $t.Current };
                        var li = document.createElement("li");
                        li.textContent = stratagem.v.Title;
                        this._stratgemList.appendChild(li);
                        li.onclick = (function ($me, stratagem) {
                            return Bridge.fn.bind($me, function (ev) {
                                this._viewEvents.HelloWeb$IStratagemViewEvents$WantStratagemText(stratagem.v.Id);
                            });
                        })(this, stratagem);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }},
            UpdateStratagemText: function (stratagemText) {
                this._stratgemDiv.innerHTML = stratagemText;
            },
            ClearStratagemText: function () {
                this._stratgemDiv.innerHTML = "";
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJIZWxsb1dlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQXBwLmNzIiwiU3RvcmFnZS9TdGFydGVnaXVtU3RhcmFnZS5jcyIsIlN0b3JhZ2UvVGV4dFN0b3JhZ2UuY3MiLCJTdHJhdGFnZW1QcmVzZW50ZXIuY3MiLCJTdHJhdGFnZW1WaWV3LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O1lBYVlBLGdCQUFnQ0EsSUFBSUE7WUFDcENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNOQUEsV0FBMkJBLEtBQUlBO2dCQUMvQkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFLYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7O3FDQzNDaUJBO2dCQUV4QkEsY0FBY0EsSUFBSUE7Z0JBQ2xCQSxXQUFjQSxlQUFjQTtnQkFDNUJBLG9CQUFvQkEsNkZBQXNFQTtnQkFDMUZBO2dCQUNBQTtnQkFDQUEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNGUEEsYUFBUUEsSUFBSUE7Z0JBQ1pBLDZDQUFnQkE7OztnQkFLaEJBLGlCQUFpQ0EsSUFBSUE7Z0JBQ3JDQTtnQkFDQUEsdURBQTBCQTs7eUNBR0FBOztnQkFHMUJBLG9CQUFvQkEsSUFBSUEsNkNBQTRCQTtnQkFDcERBO2dCQUNBQSx1REFBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNaMUJBLDJCQUEyQkE7Z0JBQzNCQTtnQkFDQUE7O2dCQUVBQSwyQkFBc0JBO2dCQUN0QkEsb0JBQWVBO2dCQUNmQSxxQkFBZ0JBOztnQkFFaEJBOztnQkFFQUEsMEJBQTBCQTtnQkFDMUJBLDBCQUEwQkE7OztnQkFHMUJBLFVBQVVBO2dCQUNWQTtnQkFDQUEsZ0JBQWdCQTtnQkFDaEJBLDBCQUEwQkE7O2dCQUUxQkEsMEJBQTBCQTs7Z0JBRTFCQSxtQ0FBOEJBLCtCQUFDQTtvQkFBU0E7Ozs7O2lDQUd0QkE7Z0JBRWxCQSxtQkFBY0E7OztnQkFLZEE7OzJDQUc0QkE7O2dCQUU1QkE7O2dCQUVBQSwwQkFBb0NBOzs7O3dCQUVoQ0EsU0FBU0E7d0JBQ1RBLGlCQUFpQkE7d0JBQ2pCQSwrQkFBMEJBO3dCQUMxQkEsYUFBYUE7aUVBQUNBO2dDQUVWQSxpRUFBOEJBOzs7Ozs7Ozs7MkNBS1ZBO2dCQUU1QkEsOEJBQXlCQTs7O2dCQUt6QkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgQnJpZGdlO1xyXG51c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIE5ld3RvbnNvZnQuSnNvbjtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgSGVsbG9XZWIuU3RvcmFnZTtcclxuXHJcbm5hbWVzcGFjZSBIZWxsb1dlYlxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSVN0cmF0YWdlbVByZXNlbnRlciBwcmVzZW50ZXIgPSBuZXcgU3RyYXRhZ2VtUHJlc2VudGVyKCk7XHJcbiAgICAgICAgICAgIHByZXNlbnRlci5TaG93VmlldygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBIZWxsb1dlYi5TdG9yYWdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTdGFydGVnaXVtU3RhcmFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMaXN0PFN0cmF0YWdlbURhdGE+IFF1ZXJ5U3RyYXRhZ2VtTGlzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMaXN0PFN0cmF0YWdlbURhdGE+IGRhdGEgPSBuZXcgTGlzdDxTdHJhdGFnZW1EYXRhPigpO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHtJZCA9IDEsIFRpdGxlID0gXCIxLiDQntCx0LzQsNC90YPRgtGMINCY0LzQv9C10YDQsNGC0L7RgNCwLCDRh9GC0L7QsdGLINC+0L0g0L/QtdGA0LXQv9C70YvQuyDQvNC+0YDQtVwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDIsIFRpdGxlID0gXCIyLiDQntGB0LDQtNC40YLRjCDQktGN0LksINGH0YLQvtCx0Ysg0YHQv9Cw0YHRgtC4INCn0LbQsNC+XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMywgVGl0bGUgPSBcIjMuINCj0LHQuNGC0Ywg0YfRg9C20LjQvCDQvdC+0LbQvtC8XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gNCwgVGl0bGUgPSBcIjQuINCSINC/0L7QutC+0LUg0L7QttC40LTQsNGC0Ywg0YPRgtC+0LzQu9C10L3QvdC+0LPQviDQstGA0LDQs9CwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gNSwgVGl0bGUgPSBcIjUuINCT0YDQsNCx0LjRgtGMINCy0L4g0LLRgNC10LzRjyDQv9C+0LbQsNGA0LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSA2LCBUaXRsZSA9IFwiNi4g0J3QsCDQstC+0YHRgtC+0LrQtSDQv9C+0LTQvdC40LzQsNGC0Ywg0YjRg9C8LCDQvdCwINC30LDQv9Cw0LTQtSDQvdCw0L/QsNC00LDRgtGMXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gNywgVGl0bGUgPSBcIjcuINCY0LfQstC70LXRh9GMINC90LXRh9GC0L4g0LjQtyDQvdC40YfQtdCz0L5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSA4LCBUaXRsZSA9IFwiOC4g0JTQu9GPINCy0LjQtNCwINGH0LjQvdC40YLRjCDQtNC10YDQtdCy0Y/QvdC90YvQtSDQvNC+0YHRgtC60LgsINCy0YLQsNC50L3QtSDQstGL0YHRgtGD0L/QuNGC0Ywg0LIg0KfRjdC90YzRhtCw0L1cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSA5LCBUaXRsZSA9IFwiOS4g0J3QsNCx0LvRjtC00LDRgtGMINC30LAg0L7Qs9C90ZHQvCDRgSDQv9GA0L7RgtC40LLQvtC/0L7Qu9C+0LbQvdC+0LPQviDQsdC10YDQtdCz0LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxMCwgVGl0bGUgPSBcIjEwLiDQodC60YDRi9Cy0LDRgtGMINC30LAg0YPQu9GL0LHQutC+0Lkg0LrQuNC90LbQsNC7XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTEsIFRpdGxlID0gXCIxMS4g0KHQu9C40LLQvtCy0L7QtSDQtNC10YDQtdCy0L4g0LfQsNGB0YvRhdCw0LXRgiDQstC80LXRgdGC0L4g0L/QtdGA0YHQuNC60L7QstC+0LPQvlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDEyLCBUaXRsZSA9IFwiMTIuINCj0LLQtdGB0YLQuCDQvtCy0YbRgyDQu9C10LPQutC+0Lkg0YDRg9C60L7QuVwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDEzLCBUaXRsZSA9IFwiMTMuINCR0LjRgtGMINC/0L4g0YLRgNCw0LLQtSwg0YfRgtC+0LHRiyDQstGB0L/Rg9Cz0L3Rg9GC0Ywg0LfQvNC10Y5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxNCwgVGl0bGUgPSBcIjE0LiDQn9C+0LfQsNC40LzRgdGC0LLQvtCy0LDRgtGMINGC0YDRg9C/LCDRh9GC0L7QsdGLINCy0LXRgNC90YPRgtGMINC00YPRiNGDXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTUsIFRpdGxlID0gXCIxNS4g0KHQvNCw0L3QuNGC0Ywg0YLQuNCz0YDQsCDRgSDQs9C+0YDRiyDQvdCwINGA0LDQstC90LjQvdGDXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTYsIFRpdGxlID0gXCIxNi4g0JXRgdC70Lgg0YXQvtGH0LXRiNGMINGH0YLQvi3QvdC40LHRg9C00Ywg0L/QvtC50LzQsNGC0YwsINGB0L3QsNGH0LDQu9CwINC+0YLQv9GD0YHRgtC4XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTcsIFRpdGxlID0gXCIxNy4g0JHRgNC+0YHQuNGC0Ywg0LrQuNGA0L/QuNGHLCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0Y/RiNC80YNcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxOCwgVGl0bGUgPSBcIjE4LiDQp9GC0L7QsdGLINC+0LHQtdC30LLRgNC10LTQuNGC0Ywg0YDQsNC30LHQvtC50L3QuNGH0YzRjiDRiNCw0LnQutGDLCDRgdC90LDRh9Cw0LvQsCDQvdCw0LTQviDQv9C+0LnQvNCw0YLRjCDQs9C70LDQstCw0YDRj1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDE5LCBUaXRsZSA9IFwiMTkuINCi0LDQudC90L4g0L/QvtC00LrQu9Cw0LTRi9Cy0LDRgtGMINGF0LLQvtGA0L7RgdGCINC/0L7QtCDQutC+0YLQtdC7INC00YDRg9Cz0L7Qs9C+XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjAsIFRpdGxlID0gXCIyMC4g0JvQvtCy0LjRgtGMINGA0YvQsdGDINCyINC80YPRgtC90L7QuSDQstC+0LTQtVwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDIxLCBUaXRsZSA9IFwiMjEuINCm0LjQutCw0LTQsCDRgdCx0YDQsNGB0YvQstCw0LXRgiDRgdCy0L7RjiDQt9C+0LvQvtGC0YPRjiDQutC+0LbQuNGG0YNcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyMiwgVGl0bGUgPSBcIjIyLiDQl9Cw0LrRgNGL0YLRjCDQtNCy0LXRgNGMINC4INC/0L7QudC80LDRgtGMINCy0L7RgNCwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjMsIFRpdGxlID0gXCIyMy4g0J7QsdGK0LXQtNC40L3QuNGC0YzRgdGPINGBINC00LDQu9GM0L3QuNC8INCy0YDQsNCz0L7QvCwg0YfRgtC+0LHRiyDQv9C+0LHQuNGC0Ywg0LHQu9C40LbQvdC10LPQvlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSWQgPSAyNCxcclxuICAgICAgICAgICAgICAgIFRpdGxlID0gXCIyNC4g0J7QsdGK0Y/QstC40LIsINGH0YLQviDRgtC+0LvRjNC60L4g0YHQvtCx0LjRgNCw0LXRiNGM0YHRjyDQv9GA0L7QudGC0Lgg0YHQutCy0L7Qt9GMINCz0L7RgdGD0LTQsNGA0YHRgtCy0L4g0JPQviwg0LfQsNGF0LLQsNGC0LjRgtGMINC10LPQvlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyNSwgVGl0bGUgPSBcIjI1LiDQo9C60YDQsNGB0YLRjCDQsdCw0LvQutC4INC4INC30LDQvNC10L3QuNGC0Ywg0LjRhSDQs9C90LjQu9GL0LzQuCDQv9C+0LTQv9C+0YDQutCw0LzQuFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDI2LCBUaXRsZSA9IFwiMjYuINCh0LrRgNGL0YLRjCDQsNC60LDRhtC40Y4g0Lgg0YPQutCw0LfQsNGC0Ywg0L3QsCDRgtGD0YLQvtCy0L7QtSDQtNC10YDQtdCy0L5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyNywgVGl0bGUgPSBcIjI3LiDQlNC10LvQsNGC0Ywg0LHQtdC30YPQvNC90YvQtSDQttC10YHRgtGLLCDQvdC1INGC0LXRgNGP0Y8g0YDQsNCy0L3QvtCy0LXRgdC40Y9cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyOCwgVGl0bGUgPSBcIjI4LiDQl9Cw0LzQsNC90LjRgtGMINC90LAg0LrRgNGL0YjRgyDQuCDRg9Cx0YDQsNGC0Ywg0LvQtdGB0YLQvdC40YbRg1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDI5LCBUaXRsZSA9IFwiMjkuINCj0LrRgNCw0YHQuNGC0Ywg0YHRg9GF0LjQtSDQtNC10YDQtdCy0YzRjyDQuNGB0LrRg9GB0YHRgtCy0LXQvdC90YvQvNC4INGG0LLQtdGC0LDQvNC4XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzAsIFRpdGxlID0gXCIzMC4g0J/RgNC10LLRgNCw0YLQuNGC0Ywg0YDQvtC70Ywg0LPQvtGB0YLRjyDQsiDRgNC+0LvRjCDRhdC+0LfRj9C40L3QsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDMxLCBUaXRsZSA9IFwiMzEuINCh0YLRgNCw0YLQsNCz0LXQvNCwINC60YDQsNGB0L7RgtC60LhcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzMiwgVGl0bGUgPSBcIjMyLiDQodGC0YDQsNGC0LDQs9C10LzQsCDQvtGC0LrRgNGL0YLRi9GFINCz0L7RgNC+0LTRgdC60LjRhSDQstC+0YDQvtGCXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzMsIFRpdGxlID0gXCIzMy4g0KHRgtGA0LDRgtCw0LPQtdC80LAg0YHQtdGP0L3QuNGPINGA0LDQt9C00L7RgNCwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzQsIFRpdGxlID0gXCIzNC4g0KHRgtGA0LDRgtCw0LPQtdC80LAg0YHQsNC80L7RgdGC0YDQtdC70LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzNSwgVGl0bGUgPSBcIjM1LiDQodGC0YDQsNGC0LDQs9C10LzQsCDCq9GG0LXQv9C4wrtcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzNiwgVGl0bGUgPSBcIjM2LiDQkdC10LPRgdGC0LLQviAo0L/RgNC4INC/0L7Qu9C90L7QuSDQsdC10LfQvdCw0LTRkdC20L3QvtGB0YLQuClcIn0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xhc3MgU3RyYXRhZ2VtRGF0YVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgSWQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVGl0bGUgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgQnJpZGdlLkh0bWw1O1xyXG5cclxubmFtZXNwYWNlIEhlbGxvV2ViLlN0b3JhZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRleHRTdG9yYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTdGFydGFnZW1IdG1sKGludCBzdHJhdGFnZW1JZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHN0cmluZyBmaWxlID0gXCJzdHJhdGFnZW1cIiArIHN0cmF0YWdlbUlkLlRvU3RyaW5nKFwiMDBcIikgKyBcIi50eHRcIjtcclxuICAgICAgICAgICAgcmVxdWVzdC5PcGVuKFwiR0VUXCIsIHN0cmluZy5Gb3JtYXQoXCJodHRwczovL295Z2FuLmdpdGh1Yi5pby9zdHJhdGVnaXVtL3N0YXJ0YWdlbV9ub3Rlcy9cIikrIGZpbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5PdmVycmlkZU1pbWVUeXBlKFwidGV4dC9odG1sOyBjaGFyc2V0PXdpbmRvd3MtMTI1MVwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5TZW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LlJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIEhlbGxvV2ViLlN0b3JhZ2U7XHJcblxyXG5uYW1lc3BhY2UgSGVsbG9XZWJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFN0cmF0YWdlbVByZXNlbnRlciA6IElTdHJhdGFnZW1QcmVzZW50ZXIsIElTdHJhdGFnZW1WaWV3RXZlbnRzXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBJU3RyYXRhZ2VtVmlldyBfdmlldztcclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2hvd1ZpZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3ZpZXcgPSBuZXcgU3RyYXRhZ2VtVmlldygpO1xyXG4gICAgICAgICAgICBfdmlldy5TZXRFdmVudHModGhpcyBhcyBJU3RyYXRhZ2VtVmlld0V2ZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBXYW50c1N0cmF0YWdlbU1lbnUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGlzdDxTdHJhdGFnZW1EYXRhPiBzdHJhdGFnZW1zID0gbmV3IFN0YXJ0ZWdpdW1TdGFyYWdlKCkuUXVlcnlTdHJhdGFnZW1MaXN0KCk7XHJcbiAgICAgICAgICAgIF92aWV3LkNsZWFyU3RyYXRhZ2VtVGV4dCgpO1xyXG4gICAgICAgICAgICBfdmlldy5VcGRhdGVTdHJhdGFnZW1NZW51KHN0cmF0YWdlbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgV2FudFN0cmF0YWdlbVRleHQoaW50IHN0cmF0YWdlbUlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzdHJhdGFnZW1UZXh0ID0gbmV3IFRleHRTdG9yYWdlKCkuU3RhcnRhZ2VtSHRtbChzdHJhdGFnZW1JZCk7XHJcbiAgICAgICAgICAgIF92aWV3LkNsZWFyU3RyYXRhZ2VtTWVudSgpO1xyXG4gICAgICAgICAgICBfdmlldy5VcGRhdGVTdHJhdGFnZW1UZXh0KHN0cmF0YWdlbVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTdHJhdGFnZW1WaWV3RXZlbnRzXHJcbiAgICB7XHJcbiAgICAgICAgdm9pZCBXYW50c1N0cmF0YWdlbU1lbnUoKTtcclxuICAgICAgICB2b2lkIFdhbnRTdHJhdGFnZW1UZXh0KGludCBzdHJhdGFnZW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU3RyYXRhZ2VtVmlld1xyXG4gICAge1xyXG4gICAgICAgIHZvaWQgU2V0RXZlbnRzKElTdHJhdGFnZW1WaWV3RXZlbnRzIHN0cmF0YWdlbVByZXNlbnRlcik7XHJcbiAgICAgICAgdm9pZCBDbGVhclN0cmF0YWdlbU1lbnUoKTtcclxuICAgICAgICB2b2lkIFVwZGF0ZVN0cmF0YWdlbU1lbnUoTGlzdDxTdHJhdGFnZW1EYXRhPiBzdHJhdGFnZW1zKTtcclxuICAgICAgICB2b2lkIFVwZGF0ZVN0cmF0YWdlbVRleHQoc3RyaW5nIHN0cmF0YWdlbVRleHQpO1xyXG4gICAgICAgIHZvaWQgQ2xlYXJTdHJhdGFnZW1UZXh0KCk7XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBIZWxsb1dlYi5TdG9yYWdlO1xyXG5cclxubmFtZXNwYWNlIEhlbGxvV2ViXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTdHJhdGFnZW1WaWV3IDogSVN0cmF0YWdlbVZpZXdcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIElTdHJhdGFnZW1WaWV3RXZlbnRzIF92aWV3RXZlbnRzO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgSFRNTEJ1dHRvbkVsZW1lbnQgX3dhbnRTdHJhdGdlbUJ1dHRvbjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IEhUTUxEaXZFbGVtZW50IF9zdHJhdGdlbURpdjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IEhUTUxVTGlzdEVsZW1lbnQgX3N0cmF0Z2VtTGlzdDtcclxuXHJcbiAgICAgICAgcHVibGljIFN0cmF0YWdlbVZpZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHdhbnRMYW5ndWFnZVN0cmF0Z2VtID0gbmV3IEhUTUxBbmNob3JFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHdhbnRMYW5ndWFnZVN0cmF0Z2VtLlRleHQgPSBcIiAgINCv0LfRi9C6INGB0YLRgNCw0YLQsNCz0LXQvFwiO1xyXG4gICAgICAgICAgICB3YW50TGFuZ3VhZ2VTdHJhdGdlbS5IcmVmID0gXCJodHRwczovL295Z2FuLmdpdGh1Yi5pby9zdHJhdGVnaXVtL3N0cmF0YWdlbV9sYW5ndWFnZS9zdGFydGFnZW1fbGFuZ3VhZ2UuaHRtbFwiO1xyXG5cclxuICAgICAgICAgICAgX3dhbnRTdHJhdGdlbUJ1dHRvbiA9IG5ldyBIVE1MQnV0dG9uRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBfc3RyYXRnZW1EaXYgPSBuZXcgSFRNTERpdkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgX3N0cmF0Z2VtTGlzdCA9IG5ldyBIVE1MVUxpc3RFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBfd2FudFN0cmF0Z2VtQnV0dG9uLklubmVySFRNTCA9IFwi0KHRgtGA0LDRgtCw0LPQtdC80YtcIjtcclxuXHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQoX3dhbnRTdHJhdGdlbUJ1dHRvbik7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQod2FudExhbmd1YWdlU3RyYXRnZW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBkaXYgPSBuZXcgSFRNTERpdkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgZGl2LklkID0gXCJwcmltYXJ5X25hdl93cmFwXCI7XHJcbiAgICAgICAgICAgIGRpdi5BcHBlbmRDaGlsZChfc3RyYXRnZW1MaXN0KTtcclxuICAgICAgICAgICAgRG9jdW1lbnQuQm9keS5BcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAgICAgRG9jdW1lbnQuQm9keS5BcHBlbmRDaGlsZChfc3RyYXRnZW1EaXYpO1xyXG5cclxuICAgICAgICAgICAgX3dhbnRTdHJhdGdlbUJ1dHRvbi5PbkNsaWNrID0gKGV2KSA9PiB7IF92aWV3RXZlbnRzLldhbnRzU3RyYXRhZ2VtTWVudSgpOyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0RXZlbnRzKElTdHJhdGFnZW1WaWV3RXZlbnRzIHZpZXdFdmVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfdmlld0V2ZW50cyA9IHZpZXdFdmVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhclN0cmF0YWdlbU1lbnUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3N0cmF0Z2VtTGlzdC5Jbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlU3RyYXRhZ2VtTWVudShMaXN0PFN0cmF0YWdlbURhdGE+IHN0cmF0YWdlbXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc3RyYXRnZW1MaXN0LklubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoIChTdHJhdGFnZW1EYXRhIHN0cmF0YWdlbSBpbiBzdHJhdGFnZW1zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBuZXcgSFRNTExJRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgbGkuVGV4dENvbnRlbnQgPSBzdHJhdGFnZW0uVGl0bGU7XHJcbiAgICAgICAgICAgICAgICBfc3RyYXRnZW1MaXN0LkFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICAgICAgICAgIGxpLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3ZpZXdFdmVudHMuV2FudFN0cmF0YWdlbVRleHQoc3RyYXRhZ2VtLklkKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFVwZGF0ZVN0cmF0YWdlbVRleHQoc3RyaW5nIHN0cmF0YWdlbVRleHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc3RyYXRnZW1EaXYuSW5uZXJIVE1MID0gc3RyYXRhZ2VtVGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyU3RyYXRhZ2VtVGV4dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc3RyYXRnZW1EaXYuSW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
