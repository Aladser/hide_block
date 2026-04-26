```
// системное сообщение об ошибке
let system_msg_container = document.querySelector('#system-message-container');

// скрыть системные сообщения в течение 3 секунд
if (system_msg_container) {
    hideSlowlyDOMBlock(system_msg_container, 3);
}
```
