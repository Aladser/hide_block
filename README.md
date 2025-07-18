```
// системное сообщение об ошибке
let systemMessageContainer = document.querySelector('#system-message-container');

// скрыть системные сообщения в течение 3 секунд
if (systemMessageContainer) {
    hideSlowlyDOMBlock(systemMessageContainer, 3);
}
```
