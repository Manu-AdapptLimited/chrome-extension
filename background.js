console.log("background running");

// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//     console.log(tab);
//     const msg = {
//         txt: "hello"
//     }
//     chrome.tabs.sendMessage(tab.id, msg)
// }


// chrome.runtime.onMessage.addListener(gotMessage);
// function gotMessage(message, sender, sendResponse) {
//     console.log(message.txt, sender, sendResponse);
//     if (message.txt === "hello") {
//         let paragraphs = document.getElementsByTagName("p");
//         for (let ele of paragraphs) {
//             ele.style['background-color'] = "pink";
//         }
//     }

// }


// var MO = MutationObserver || WebKitMutationObserver || MozMutationObserver;
// var observer = new MO(function (mutations) {
//     var _this = this;
//     mutations.forEach(function (mutation) {
//         let htmlString = _this._root.innerHTML || _this._root.textContent;
//         var htmlParser = new DOMParser().parseFromString(htmlString, "text/html");
//         // console.log(htmlParser, "htmlParser");
//     });

// });

// var config = { 
//     characterData: true,
//     subtree: true
// };

// observer.observe(virtualEditScroller[0], config);
// observer._root = virtualEditScroller[0];
// setInterval(function () { }, 250);


// var bubbleDOM = document.createElement('div');
// bubbleDOM.setAttribute('class', 'selection_bubble');
// document.body.appendChild(bubbleDOM);

// // Lets listen to mouseup DOM events.
// document.addEventListener('mouseover', function (e) {
//     var selection = window.getSelection().toString();
//     if (selection.length > 0) {
//         renderBubble(e.clientX, e.clientY, selection);
//     }
//     console.log(e);
// }, false);


// // Close the bubble when we click on the screen.
// // document.addEventListener('mousedown', function (e) {
// //     bubbleDOM.style.visibility = 'hidden';
// // }, false);

// // Move that bubble to the appropriate location.
// function renderBubble(mouseX, mouseY, selection) {
//     bubbleDOM.innerHTML = `
//     <button class="first-suggestion">this</button>
//     <input type="text"/>
//     <button class="dismiss-button">Save</button>
//     <button class="dismiss-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//     </svg> Dismiss</button>
//     `;
//     bubbleDOM.style.top = mouseY + 10 + 'px';
//     bubbleDOM.style.left = mouseX + 10 + 'px';
//     bubbleDOM.style.visibility = 'visible';
// }









// function showBubble(mouseX, mouseY) {
//     bubbleDOM.innerHTML = `
//         <button class="first-suggestion">this</button>
//         <input type="text"/>
//         <button class="dismiss-button">Save</button>
//         <button class="dismiss-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//         <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//         </svg> Dismiss</button>
//         `;
//     bubbleDOM.style.top = mouseY + 15 + 'px';
//     bubbleDOM.style.left = mouseX - 63 + 'px';
//     bubbleDOM.style.visibility = 'visible';
// }

// var bubbleDOM = document.createElement('div');
// bubbleDOM.setAttribute('class', 'selection_bubble');
// document.body.appendChild(bubbleDOM);

// function renderBubble(mouseX, mouseY, e) {
//     if (e.type === "mouseenter") {
//         showBubble(mouseX, mouseY);
//         $(document.querySelector(".selection_bubble")).hover(
//             function (e) {
//                 bubbleDOM.style.visibility = 'visible';
//                 console.log("bubble hover",e.type);
//             }
//         );
//     } else if (e.type === "mouseleave") {
//         console.log("mouseleave");
//         // setTimeout(() => {
//         //     bubbleDOM.style.visibility = 'hidden';
//         // }, 500)
//     }
// }

// waitForElm('.bAHScQgzLTvwiV2QXvzpa').then((elm) => {
//     console.log(elm);
//     if (elm.querySelector('*[id^="virtualEditScroller"]')) {
//         setHover()
//     }
// })

// function setHover() {
//     $('.hover-Class').hover(
//         function (e) {
//             console.log("hovered", $(this).text(), e);
//             renderBubble(e.clientX, e.clientY, e);
//         }
//     );
// }


// var bubbleDOM = document.createElement('span');
// bubbleDOM.setAttribute('class', 'tooltip');
// bubbleDOM.innerHTML = `
//         <button class="first-suggestion">this</button>
//         <input type="text"/>
//         <button class="dismiss-button">Save</button>
//         <button class="dismiss-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//         <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//         </svg> Dismiss</button>
//         `;



//workin code



// waitForElm('.bAHScQgzLTvwiV2QXvzpa').then((elm) => {
//     console.log('Element is ready');
//     let virtualEditScroller = document.querySelectorAll('*[id^="virtualEditScroller"]');
//     let htmlString = `hello <div>this is the test for adding span in text in div tag</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     <div>wqefrqwerqtwre qt qwretwert</div>
//     `
//     var htmlParser = new DOMParser().parseFromString(htmlString, "text/html");
//     $(htmlParser.querySelectorAll("div")).each(function () {
//         var $this = $(this);
//         $this.html($this.text().replace(/\b(\w+)\b/g, `<span class="hasTooltip">
//         $1
//         <span class="tooltip-bubble" >
//        <div class="selection_bubble">
//         <button class="first-suggestion">this</button>
//          <input type="text"/>
//          <button class="dismiss-button">Save</button>
//       <button class="dismiss-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//               <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//               <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//               </svg> Dismiss</button>
//        </div>
//         </span>
//       </span>`));
//     });

//     virtualEditScroller[0].innerHTML = htmlParser.getElementsByTagName('html')[0].innerHTML;
//     alert('element is ready')
// });
