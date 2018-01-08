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

            var table = document.createElement("table");

            // Set the Button text
            button.innerHTML = "Click Me";


            // Add a Click event handler
            button.onclick = function (ev) {
                // Write a message to the Console
                var row = table.insertRow();
                var cell = row.insertCell();
                cell.innerHTML = "Cell " + System.DateTime.format(System.DateTime.getNow());
            };

            // Add the button to the document body
            document.body.appendChild(button);
            document.body.appendChild(table);

            // After building (Ctrl + Shift + B) this project, 
            // browse to the /bin/Debug or /bin/Release folder.

            // A new bridge/ folder has been created and
            // contains your projects JavaScript files. 

            // Open the bridge/index.html file in a browser by
            // Right-Click > Open With..., then choose a
            // web browser from the list

            // This application will then run in a browser.
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJIZWxsb1dlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQXBwLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztZQVlZQSxhQUFhQTs7WUFFYkEsWUFBWUE7OztZQUdaQTs7OztZQUlBQSxpQkFBaUJBLFVBQUNBOztnQkFHZEEsVUFBVUE7Z0JBQ1ZBLFdBQVdBO2dCQUNYQSxpQkFBaUJBLGlDQUFVQTs7OztZQUkvQkEsMEJBQTBCQTtZQUMxQkEsMEJBQTBCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgTmV3dG9uc29mdC5Kc29uO1xyXG51c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgSGVsbG9XZWJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBIVE1MIEJ1dHRvblxyXG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gbmV3IEhUTUxCdXR0b25FbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGFibGUgPSBuZXcgSFRNTFRhYmxlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHRoZSBCdXR0b24gdGV4dFxyXG4gICAgICAgICAgICBidXR0b24uSW5uZXJIVE1MID0gXCJDbGljayBNZVwiO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhIENsaWNrIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICAgICAgYnV0dG9uLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIFdyaXRlIGEgbWVzc2FnZSB0byB0aGUgQ29uc29sZVxyXG4gICAgICAgICAgICAgICAgdmFyIHJvdyA9IHRhYmxlLkluc2VydFJvdygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlbGwgPSByb3cuSW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5Jbm5lckhUTUwgPSBcIkNlbGwgXCIgKyBEYXRlVGltZS5Ob3c7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGJ1dHRvbiB0byB0aGUgZG9jdW1lbnQgYm9keVxyXG4gICAgICAgICAgICBEb2N1bWVudC5Cb2R5LkFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWZ0ZXIgYnVpbGRpbmcgKEN0cmwgKyBTaGlmdCArIEIpIHRoaXMgcHJvamVjdCwgXHJcbiAgICAgICAgICAgIC8vIGJyb3dzZSB0byB0aGUgL2Jpbi9EZWJ1ZyBvciAvYmluL1JlbGVhc2UgZm9sZGVyLlxyXG5cclxuICAgICAgICAgICAgLy8gQSBuZXcgYnJpZGdlLyBmb2xkZXIgaGFzIGJlZW4gY3JlYXRlZCBhbmRcclxuICAgICAgICAgICAgLy8gY29udGFpbnMgeW91ciBwcm9qZWN0cyBKYXZhU2NyaXB0IGZpbGVzLiBcclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gdGhlIGJyaWRnZS9pbmRleC5odG1sIGZpbGUgaW4gYSBicm93c2VyIGJ5XHJcbiAgICAgICAgICAgIC8vIFJpZ2h0LUNsaWNrID4gT3BlbiBXaXRoLi4uLCB0aGVuIGNob29zZSBhXHJcbiAgICAgICAgICAgIC8vIHdlYiBicm93c2VyIGZyb20gdGhlIGxpc3RcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgYXBwbGljYXRpb24gd2lsbCB0aGVuIHJ1biBpbiBhIGJyb3dzZXIuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0KfQo=
