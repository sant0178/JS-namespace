var SANT0178 = {
    
    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "SANT0178";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", yes);
        div.addEventListener("mouseover", mouseListen);
        div.addEventListener("mouseout", mouseListen);

        function yes(ev) {
            this.style.backgroundColor = "salmon";
            this.style.borderColor = "green";
        }

        function mouseListen(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }
    }
}
