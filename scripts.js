const button = document.getElementById('botan1');
function randamu(){return new Promise((resolve, reject) => {
    // ここに非同期処理を記述)

    setTimeout(() => {
        if (Math.random() < 0.50) {
            reject(new Error('失敗しました！'));
        } else {
            resolve('成功しました！');
        }
});       });}
// クリックイベントを追加
button.addEventListener('click', ()=> {
    randamu().then(result => {
        alert(result);// ここに処理が完了した後のコードを記述
    }).catch(error => {
        alert(error);// ここにエラーが発生した場合のコードを記述 console.error(error);にすると、コンソールにエラーが表示されます
    });
});