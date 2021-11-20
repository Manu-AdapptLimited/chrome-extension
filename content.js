console.log("first extension go");


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('.bAHScQgzLTvwiV2QXvzpa').then((elm) => {
    console.log('Element is ready');
    let virtualEditScroller = document.querySelectorAll('*[id^="virtualEditScroller"]');
    let htmlString = `hello this is the test for adding span in <div> text in div tag</div>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    <p>wqefrqwerqtwre qt qwretwert</p>
    `
    var htmlParser = new DOMParser().parseFromString(htmlString, "text/html");

    $(htmlParser.querySelectorAll("div")).each(function () {
        var $this = $(this);
        $this.html($this.text().replace(/\b(\w+)\b/g, `<span class="hasTooltip"> $1 </span>`));
    });

    virtualEditScroller[0].innerHTML = htmlParser.getElementsByTagName('html')[0].innerHTML;

    const textHolder = document.createElement("div");
    textHolder.setAttribute("class", "text-holder-poc");
    document.body.appendChild(textHolder);
    $('.hasTooltip').hover(
        function (e) {
            console.log("hovered", $(this).text(), e);
            if (e.type === "mouseenter") {
                showToolTip($(this), $(this).text());
                // $(this).append(tootTipBubble);
                const input = document.querySelector(".input-field-for-test");
                input.addEventListener('input', function (event) {
                    input.setAttribute("value", event.target.value);
                    textHolder.innerText = event.target.value;
                });
                const saveBtn = document.querySelector(".save-button");
                const text = document.querySelector(".text-holder-poc");
                saveBtn.addEventListener("click", (eve) => {
                    console.log("clicked", text.innerText);
                    e.target.innerHTML = text.innerText;
                    $(this).removeClass("hasTooltip");
                    $(".tooltip-bubble").css("opacity","0");
                    $(".tooltip-bubble").remove();
                })

            } else if (e.type === "mouseleave") {
                $(".tooltip-bubble").remove();
            }
        }
    );

    alert('element is ready')
});

function showToolTip(element, text) {
    var tootTipBubble = document.createElement('span');
    tootTipBubble.setAttribute('class', 'tooltip-bubble');
    tootTipBubble.innerHTML = `
        <div class="selection_bubble">
         <button class="first-suggestion">Current word:${text}</button>
         <input class="input-field-for-test" type="text"/>
         <button class="save-button">Save</button>
         <button class="dismiss-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg> Dismiss</button>
       </div>
    `;
    element.append(tootTipBubble);
}