Bridge.assembly("HelloWeb", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,System.Collections.Generic,HelloWeb,HelloWeb.Storage];
    $m($n[2].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FillStratagemsList","is":true,"t":8,"pi":[{"n":"list","pt":HTMLUListElement,"ps":0},{"n":"block","pt":HTMLDivElement,"ps":1}],"sn":"FillStratagemsList","rt":$n[0].Void,"p":[HTMLUListElement,HTMLDivElement]},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"OnLoad","is":true,"t":16,"rt":Function,"g":{"a":2,"n":"get_OnLoad","t":8,"rt":Function,"fg":"OnLoad","is":true},"s":{"a":2,"n":"set_OnLoad","t":8,"p":[Function],"rt":$n[0].Void,"fs":"OnLoad","is":true},"fn":"OnLoad"}]}; });
    $m($n[3].StartegiumStarage, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"QueryStratagemList","t":8,"sn":"QueryStratagemList","rt":$n[1].List$1(HelloWeb.Storage.StratagemData)}]}; });
    $m($n[3].StratagemData, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[0].Int32,"fg":"Id","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Id","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Id"},"fn":"Id"},{"a":2,"n":"Title","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Title","t":8,"rt":$n[0].String,"fg":"Title"},"s":{"a":2,"n":"set_Title","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Title"},"fn":"Title"}]}; });
    $m($n[3].TextStorage, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StartagemHtml","t":8,"pi":[{"n":"stratagemId","pt":$n[0].Int32,"ps":0}],"sn":"StartagemHtml","rt":$n[0].String,"p":[$n[0].Int32]}]}; });
});
