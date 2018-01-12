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
                this._wantStratgemButton = document.createElement("button");
                this._stratgemDiv = document.createElement("div");
                this._stratgemList = document.createElement("ul");

                this._wantStratgemButton.innerHTML = "Стратагемы";

                document.body.appendChild(this._wantStratgemButton);
                document.body.appendChild(this._stratgemList);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJIZWxsb1dlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQXBwLmNzIiwiU3RvcmFnZS9TdGFydGVnaXVtU3RhcmFnZS5jcyIsIlN0b3JhZ2UvVGV4dFN0b3JhZ2UuY3MiLCJTdHJhdGFnZW1QcmVzZW50ZXIuY3MiLCJTdHJhdGFnZW1WaWV3LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O1lBYVlBLGdCQUFnQ0EsSUFBSUE7WUFDcENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNOQUEsV0FBMkJBLEtBQUlBO2dCQUMvQkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFLYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsU0FBU0EsVUFBSUE7Z0JBQ2JBLFNBQVNBLFVBQUlBO2dCQUNiQSxTQUFTQSxVQUFJQTtnQkFDYkEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7O3FDQzNDaUJBO2dCQUV4QkEsY0FBY0EsSUFBSUE7Z0JBQ2xCQSxXQUFjQSxlQUFjQTtnQkFDNUJBLG9CQUFvQkEsNkZBQXNFQTtnQkFDMUZBO2dCQUNBQTtnQkFDQUEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNGUEEsYUFBUUEsSUFBSUE7Z0JBQ1pBLDZDQUFnQkE7OztnQkFLaEJBLGlCQUFpQ0EsSUFBSUE7Z0JBQ3JDQTtnQkFDQUEsdURBQTBCQTs7eUNBR0FBOztnQkFHMUJBLG9CQUFvQkEsSUFBSUEsNkNBQTRCQTtnQkFDcERBO2dCQUNBQSx1REFBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNaMUJBLDJCQUFzQkE7Z0JBQ3RCQSxvQkFBZUE7Z0JBQ2ZBLHFCQUFnQkE7O2dCQUVoQkE7O2dCQUVBQSwwQkFBMEJBO2dCQUMxQkEsMEJBQTBCQTtnQkFDMUJBLDBCQUEwQkE7O2dCQUUxQkEsbUNBQThCQSwrQkFBQ0E7b0JBQVNBOzs7OztpQ0FHdEJBO2dCQUVsQkEsbUJBQWNBOzs7Z0JBS2RBOzsyQ0FHNEJBOztnQkFFNUJBOztnQkFFQUEsMEJBQW9DQTs7Ozt3QkFFaENBLFNBQVNBO3dCQUNUQSxpQkFBaUJBO3dCQUNqQkEsK0JBQTBCQTt3QkFDMUJBLGFBQWFBO2lFQUFDQTtnQ0FFVkEsaUVBQThCQTs7Ozs7Ozs7OzJDQUtWQTtnQkFFNUJBLDhCQUF5QkE7OztnQkFLekJBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIEhlbGxvV2ViLlN0b3JhZ2U7XHJcblxyXG5uYW1lc3BhY2UgSGVsbG9XZWJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElTdHJhdGFnZW1QcmVzZW50ZXIgcHJlc2VudGVyID0gbmV3IFN0cmF0YWdlbVByZXNlbnRlcigpO1xyXG4gICAgICAgICAgICBwcmVzZW50ZXIuU2hvd1ZpZXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgSGVsbG9XZWIuU3RvcmFnZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3RhcnRlZ2l1bVN0YXJhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlzdDxTdHJhdGFnZW1EYXRhPiBRdWVyeVN0cmF0YWdlbUxpc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGlzdDxTdHJhdGFnZW1EYXRhPiBkYXRhID0gbmV3IExpc3Q8U3RyYXRhZ2VtRGF0YT4oKTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7SWQgPSAxLCBUaXRsZSA9IFwiMS4g0J7QsdC80LDQvdGD0YLRjCDQmNC80L/QtdGA0LDRgtC+0YDQsCwg0YfRgtC+0LHRiyDQvtC9INC/0LXRgNC10L/Qu9GL0Lsg0LzQvtGA0LVcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyLCBUaXRsZSA9IFwiMi4g0J7RgdCw0LTQuNGC0Ywg0JLRjdC5LCDRh9GC0L7QsdGLINGB0L/QsNGB0YLQuCDQp9C20LDQvlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDMsIFRpdGxlID0gXCIzLiDQo9Cx0LjRgtGMINGH0YPQttC40Lwg0L3QvtC20L7QvFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDQsIFRpdGxlID0gXCI0LiDQkiDQv9C+0LrQvtC1INC+0LbQuNC00LDRgtGMINGD0YLQvtC80LvQtdC90L3QvtCz0L4g0LLRgNCw0LPQsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDUsIFRpdGxlID0gXCI1LiDQk9GA0LDQsdC40YLRjCDQstC+INCy0YDQtdC80Y8g0L/QvtC20LDRgNCwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gNiwgVGl0bGUgPSBcIjYuINCd0LAg0LLQvtGB0YLQvtC60LUg0L/QvtC00L3QuNC80LDRgtGMINGI0YPQvCwg0L3QsCDQt9Cw0L/QsNC00LUg0L3QsNC/0LDQtNCw0YLRjFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDcsIFRpdGxlID0gXCI3LiDQmNC30LLQu9C10YfRjCDQvdC10YfRgtC+INC40Lcg0L3QuNGH0LXQs9C+XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gOCwgVGl0bGUgPSBcIjguINCU0LvRjyDQstC40LTQsCDRh9C40L3QuNGC0Ywg0LTQtdGA0LXQstGP0L3QvdGL0LUg0LzQvtGB0YLQutC4LCDQstGC0LDQudC90LUg0LLRi9GB0YLRg9C/0LjRgtGMINCyINCn0Y3QvdGM0YbQsNC9XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gOSwgVGl0bGUgPSBcIjkuINCd0LDQsdC70Y7QtNCw0YLRjCDQt9CwINC+0LPQvdGR0Lwg0YEg0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtCz0L4g0LHQtdGA0LXQs9CwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTAsIFRpdGxlID0gXCIxMC4g0KHQutGA0YvQstCw0YLRjCDQt9CwINGD0LvRi9Cx0LrQvtC5INC60LjQvdC20LDQu1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDExLCBUaXRsZSA9IFwiMTEuINCh0LvQuNCy0L7QstC+0LUg0LTQtdGA0LXQstC+INC30LDRgdGL0YXQsNC10YIg0LLQvNC10YHRgtC+INC/0LXRgNGB0LjQutC+0LLQvtCz0L5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxMiwgVGl0bGUgPSBcIjEyLiDQo9Cy0LXRgdGC0Lgg0L7QstGG0YMg0LvQtdCz0LrQvtC5INGA0YPQutC+0LlcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxMywgVGl0bGUgPSBcIjEzLiDQkdC40YLRjCDQv9C+INGC0YDQsNCy0LUsINGH0YLQvtCx0Ysg0LLRgdC/0YPQs9C90YPRgtGMINC30LzQtdGOXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTQsIFRpdGxlID0gXCIxNC4g0J/QvtC30LDQuNC80YHRgtCy0L7QstCw0YLRjCDRgtGA0YPQvywg0YfRgtC+0LHRiyDQstC10YDQvdGD0YLRjCDQtNGD0YjRg1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDE1LCBUaXRsZSA9IFwiMTUuINCh0LzQsNC90LjRgtGMINGC0LjQs9GA0LAg0YEg0LPQvtGA0Ysg0L3QsCDRgNCw0LLQvdC40L3Rg1wifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDE2LCBUaXRsZSA9IFwiMTYuINCV0YHQu9C4INGF0L7Rh9C10YjRjCDRh9GC0L4t0L3QuNCx0YPQtNGMINC/0L7QudC80LDRgtGMLCDRgdC90LDRh9Cw0LvQsCDQvtGC0L/Rg9GB0YLQuFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDE3LCBUaXRsZSA9IFwiMTcuINCR0YDQvtGB0LjRgtGMINC60LjRgNC/0LjRhywg0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINGP0YjQvNGDXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMTgsIFRpdGxlID0gXCIxOC4g0KfRgtC+0LHRiyDQvtCx0LXQt9Cy0YDQtdC00LjRgtGMINGA0LDQt9Cx0L7QudC90LjRh9GM0Y4g0YjQsNC50LrRgywg0YHQvdCw0YfQsNC70LAg0L3QsNC00L4g0L/QvtC50LzQsNGC0Ywg0LPQu9Cw0LLQsNGA0Y9cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAxOSwgVGl0bGUgPSBcIjE5LiDQotCw0LnQvdC+INC/0L7QtNC60LvQsNC00YvQstCw0YLRjCDRhdCy0L7RgNC+0YHRgiDQv9C+0LQg0LrQvtGC0LXQuyDQtNGA0YPQs9C+0LPQvlwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDIwLCBUaXRsZSA9IFwiMjAuINCb0L7QstC40YLRjCDRgNGL0LHRgyDQsiDQvNGD0YLQvdC+0Lkg0LLQvtC00LVcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyMSwgVGl0bGUgPSBcIjIxLiDQptC40LrQsNC00LAg0YHQsdGA0LDRgdGL0LLQsNC10YIg0YHQstC+0Y4g0LfQvtC70L7RgtGD0Y4g0LrQvtC20LjRhtGDXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjIsIFRpdGxlID0gXCIyMi4g0JfQsNC60YDRi9GC0Ywg0LTQstC10YDRjCDQuCDQv9C+0LnQvNCw0YLRjCDQstC+0YDQsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDIzLCBUaXRsZSA9IFwiMjMuINCe0LHRitC10LTQuNC90LjRgtGM0YHRjyDRgSDQtNCw0LvRjNC90LjQvCDQstGA0LDQs9C+0LwsINGH0YLQvtCx0Ysg0L/QvtCx0LjRgtGMINCx0LvQuNC20L3QtdCz0L5cIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIElkID0gMjQsXHJcbiAgICAgICAgICAgICAgICBUaXRsZSA9IFwiMjQuINCe0LHRitGP0LLQuNCyLCDRh9GC0L4g0YLQvtC70YzQutC+INGB0L7QsdC40YDQsNC10YjRjNGB0Y8g0L/RgNC+0LnRgtC4INGB0LrQstC+0LfRjCDQs9C+0YHRg9C00LDRgNGB0YLQstC+INCT0L4sINC30LDRhdCy0LDRgtC40YLRjCDQtdCz0L5cIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjUsIFRpdGxlID0gXCIyNS4g0KPQutGA0LDRgdGC0Ywg0LHQsNC70LrQuCDQuCDQt9Cw0LzQtdC90LjRgtGMINC40YUg0LPQvdC40LvRi9C80Lgg0L/QvtC00L/QvtGA0LrQsNC80LhcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyNiwgVGl0bGUgPSBcIjI2LiDQodC60YDRi9GC0Ywg0LDQutCw0YbQuNGOINC4INGD0LrQsNC30LDRgtGMINC90LAg0YLRg9GC0L7QstC+0LUg0LTQtdGA0LXQstC+XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjcsIFRpdGxlID0gXCIyNy4g0JTQtdC70LDRgtGMINCx0LXQt9GD0LzQvdGL0LUg0LbQtdGB0YLRiywg0L3QtSDRgtC10YDRj9GPINGA0LDQstC90L7QstC10YHQuNGPXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMjgsIFRpdGxlID0gXCIyOC4g0JfQsNC80LDQvdC40YLRjCDQvdCwINC60YDRi9GI0YMg0Lgg0YPQsdGA0LDRgtGMINC70LXRgdGC0L3QuNGG0YNcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAyOSwgVGl0bGUgPSBcIjI5LiDQo9C60YDQsNGB0LjRgtGMINGB0YPRhdC40LUg0LTQtdGA0LXQstGM0Y8g0LjRgdC60YPRgdGB0YLQstC10L3QvdGL0LzQuCDRhtCy0LXRgtCw0LzQuFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDMwLCBUaXRsZSA9IFwiMzAuINCf0YDQtdCy0YDQsNGC0LjRgtGMINGA0L7Qu9GMINCz0L7RgdGC0Y8g0LIg0YDQvtC70Ywg0YXQvtC30Y/QuNC90LBcIn0pO1xyXG4gICAgICAgICAgICBkYXRhLkFkZChuZXcgU3RyYXRhZ2VtRGF0YSgpIHsgSWQgPSAzMSwgVGl0bGUgPSBcIjMxLiDQodGC0YDQsNGC0LDQs9C10LzQsCDQutGA0LDRgdC+0YLQutC4XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzIsIFRpdGxlID0gXCIzMi4g0KHRgtGA0LDRgtCw0LPQtdC80LAg0L7RgtC60YDRi9GC0YvRhSDQs9C+0YDQvtC00YHQutC40YUg0LLQvtGA0L7RglwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDMzLCBUaXRsZSA9IFwiMzMuINCh0YLRgNCw0YLQsNCz0LXQvNCwINGB0LXRj9C90LjRjyDRgNCw0LfQtNC+0YDQsFwifSk7XHJcbiAgICAgICAgICAgIGRhdGEuQWRkKG5ldyBTdHJhdGFnZW1EYXRhKCkgeyBJZCA9IDM0LCBUaXRsZSA9IFwiMzQuINCh0YLRgNCw0YLQsNCz0LXQvNCwINGB0LDQvNC+0YHRgtGA0LXQu9CwXCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzUsIFRpdGxlID0gXCIzNS4g0KHRgtGA0LDRgtCw0LPQtdC80LAgwqvRhtC10L/QuMK7XCJ9KTtcclxuICAgICAgICAgICAgZGF0YS5BZGQobmV3IFN0cmF0YWdlbURhdGEoKSB7IElkID0gMzYsIFRpdGxlID0gXCIzNi4g0JHQtdCz0YHRgtCy0L4gKNC/0YDQuCDQv9C+0LvQvdC+0Lkg0LHQtdC30L3QsNC00ZHQttC90L7RgdGC0LgpXCJ9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsYXNzIFN0cmF0YWdlbURhdGFcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgaW50IElkIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRpdGxlIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5IdG1sNTtcclxuXHJcbm5hbWVzcGFjZSBIZWxsb1dlYi5TdG9yYWdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0U3RvcmFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3RhcnRhZ2VtSHRtbChpbnQgc3RyYXRhZ2VtSWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBzdHJpbmcgZmlsZSA9IFwic3RyYXRhZ2VtXCIgKyBzdHJhdGFnZW1JZC5Ub1N0cmluZyhcIjAwXCIpICsgXCIudHh0XCI7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuT3BlbihcIkdFVFwiLCBzdHJpbmcuRm9ybWF0KFwiaHR0cHM6Ly9veWdhbi5naXRodWIuaW8vc3RyYXRlZ2l1bS9zdGFydGFnZW1fbm90ZXMvXCIpKyBmaWxlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuT3ZlcnJpZGVNaW1lVHlwZShcInRleHQvaHRtbDsgY2hhcnNldD13aW5kb3dzLTEyNTFcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU2VuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdC5SZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBIZWxsb1dlYi5TdG9yYWdlO1xyXG5cclxubmFtZXNwYWNlIEhlbGxvV2ViXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTdHJhdGFnZW1QcmVzZW50ZXIgOiBJU3RyYXRhZ2VtUHJlc2VudGVyLCBJU3RyYXRhZ2VtVmlld0V2ZW50c1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgSVN0cmF0YWdlbVZpZXcgX3ZpZXc7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNob3dWaWV3KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF92aWV3ID0gbmV3IFN0cmF0YWdlbVZpZXcoKTtcclxuICAgICAgICAgICAgX3ZpZXcuU2V0RXZlbnRzKHRoaXMgYXMgSVN0cmF0YWdlbVZpZXdFdmVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgV2FudHNTdHJhdGFnZW1NZW51KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8U3RyYXRhZ2VtRGF0YT4gc3RyYXRhZ2VtcyA9IG5ldyBTdGFydGVnaXVtU3RhcmFnZSgpLlF1ZXJ5U3RyYXRhZ2VtTGlzdCgpO1xyXG4gICAgICAgICAgICBfdmlldy5DbGVhclN0cmF0YWdlbVRleHQoKTtcclxuICAgICAgICAgICAgX3ZpZXcuVXBkYXRlU3RyYXRhZ2VtTWVudShzdHJhdGFnZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFdhbnRTdHJhdGFnZW1UZXh0KGludCBzdHJhdGFnZW1JZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc3RyYXRhZ2VtVGV4dCA9IG5ldyBUZXh0U3RvcmFnZSgpLlN0YXJ0YWdlbUh0bWwoc3RyYXRhZ2VtSWQpO1xyXG4gICAgICAgICAgICBfdmlldy5DbGVhclN0cmF0YWdlbU1lbnUoKTtcclxuICAgICAgICAgICAgX3ZpZXcuVXBkYXRlU3RyYXRhZ2VtVGV4dChzdHJhdGFnZW1UZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU3RyYXRhZ2VtVmlld0V2ZW50c1xyXG4gICAge1xyXG4gICAgICAgIHZvaWQgV2FudHNTdHJhdGFnZW1NZW51KCk7XHJcbiAgICAgICAgdm9pZCBXYW50U3RyYXRhZ2VtVGV4dChpbnQgc3RyYXRhZ2VtSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVN0cmF0YWdlbVZpZXdcclxuICAgIHtcclxuICAgICAgICB2b2lkIFNldEV2ZW50cyhJU3RyYXRhZ2VtVmlld0V2ZW50cyBzdHJhdGFnZW1QcmVzZW50ZXIpO1xyXG4gICAgICAgIHZvaWQgQ2xlYXJTdHJhdGFnZW1NZW51KCk7XHJcbiAgICAgICAgdm9pZCBVcGRhdGVTdHJhdGFnZW1NZW51KExpc3Q8U3RyYXRhZ2VtRGF0YT4gc3RyYXRhZ2Vtcyk7XHJcbiAgICAgICAgdm9pZCBVcGRhdGVTdHJhdGFnZW1UZXh0KHN0cmluZyBzdHJhdGFnZW1UZXh0KTtcclxuICAgICAgICB2b2lkIENsZWFyU3RyYXRhZ2VtVGV4dCgpO1xyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgSGVsbG9XZWIuU3RvcmFnZTtcclxuXHJcbm5hbWVzcGFjZSBIZWxsb1dlYlxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3RyYXRhZ2VtVmlldyA6IElTdHJhdGFnZW1WaWV3XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBJU3RyYXRhZ2VtVmlld0V2ZW50cyBfdmlld0V2ZW50cztcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IEhUTUxCdXR0b25FbGVtZW50IF93YW50U3RyYXRnZW1CdXR0b247XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBIVE1MRGl2RWxlbWVudCBfc3RyYXRnZW1EaXY7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBIVE1MVUxpc3RFbGVtZW50IF9zdHJhdGdlbUxpc3Q7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTdHJhdGFnZW1WaWV3KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF93YW50U3RyYXRnZW1CdXR0b24gPSBuZXcgSFRNTEJ1dHRvbkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgX3N0cmF0Z2VtRGl2ID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIF9zdHJhdGdlbUxpc3QgPSBuZXcgSFRNTFVMaXN0RWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgX3dhbnRTdHJhdGdlbUJ1dHRvbi5Jbm5lckhUTUwgPSBcItCh0YLRgNCw0YLQsNCz0LXQvNGLXCI7XHJcblxyXG4gICAgICAgICAgICBEb2N1bWVudC5Cb2R5LkFwcGVuZENoaWxkKF93YW50U3RyYXRnZW1CdXR0b24pO1xyXG4gICAgICAgICAgICBEb2N1bWVudC5Cb2R5LkFwcGVuZENoaWxkKF9zdHJhdGdlbUxpc3QpO1xyXG4gICAgICAgICAgICBEb2N1bWVudC5Cb2R5LkFwcGVuZENoaWxkKF9zdHJhdGdlbURpdik7XHJcblxyXG4gICAgICAgICAgICBfd2FudFN0cmF0Z2VtQnV0dG9uLk9uQ2xpY2sgPSAoZXYpID0+IHsgX3ZpZXdFdmVudHMuV2FudHNTdHJhdGFnZW1NZW51KCk7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRFdmVudHMoSVN0cmF0YWdlbVZpZXdFdmVudHMgdmlld0V2ZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF92aWV3RXZlbnRzID0gdmlld0V2ZW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyU3RyYXRhZ2VtTWVudSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc3RyYXRnZW1MaXN0LklubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBVcGRhdGVTdHJhdGFnZW1NZW51KExpc3Q8U3RyYXRhZ2VtRGF0YT4gc3RyYXRhZ2VtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zdHJhdGdlbUxpc3QuSW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKFN0cmF0YWdlbURhdGEgc3RyYXRhZ2VtIGluIHN0cmF0YWdlbXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaSA9IG5ldyBIVE1MTElFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBsaS5UZXh0Q29udGVudCA9IHN0cmF0YWdlbS5UaXRsZTtcclxuICAgICAgICAgICAgICAgIF9zdHJhdGdlbUxpc3QuQXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICAgICAgbGkuT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfdmlld0V2ZW50cy5XYW50U3RyYXRhZ2VtVGV4dChzdHJhdGFnZW0uSWQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlU3RyYXRhZ2VtVGV4dChzdHJpbmcgc3RyYXRhZ2VtVGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zdHJhdGdlbURpdi5Jbm5lckhUTUwgPSBzdHJhdGFnZW1UZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXJTdHJhdGFnZW1UZXh0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zdHJhdGdlbURpdi5Jbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdCn0K
