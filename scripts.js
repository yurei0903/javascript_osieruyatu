const button = document.getElementById('botan1');
function randamu(){return new Promise((resolve, reject) => {
    // ここに非同期処理を記述)

    setTimeout(() => {
        if (Math.random() < 0.50) {
            reject(new Error('失敗しました！'));
        } else {
            resolve('成功しました！');
        }
},1000);       });}
// クリックイベントを追加
button.addEventListener('click', ()=> {
    randamu().then(result => {
        alert(result);// ここに処理が完了した後のコードを記述
    }).catch(error => {
        alert(error);// ここにエラーが発生した場合のコードを記述 console.error(error);にすると、コンソールにエラーが表示されます
    });
    alert('1秒以上たった後に消したら結果が表示されます'); 
});
const button2 = document.getElementById('botan2');
const data = document.getElementById('kakutoko');
const kakikomu=document.getElementById('hyojibasho');

function bainisuru(data){return new Promise((resolve, reject) => {//値を倍にする関数
    // ここに非同期処理を記述
    
    setTimeout(() => {
        if(data === '') {
            reject(new Error('入力が空です！'));
        } else if(Number(data).isNaN) {
            reject(new Error('数値じゃないです！'));
            
        }
        else{
            
            
            resolve(data*2)
        }
},Math.random()*3000);       });}//実行するタイミングをランダムにしている
button2.addEventListener('click', () => {
    const inputData = data.value;
    bainisuru(inputData).then(result => {
        kakikomu.innerHTML=`入力値の2倍は: ${result}<br>`; // ここに1回目の処理が完了した後のコードを記述
        return bainisuru(result); // さらにPromiseを返す
    }).then(result => {
        kakikomu.innerHTML+=`さらに2倍した結果は: ${result}<br>`; // ここに2回目の処理が完了した後のコードを記述
        return bainisuru(result); // さらにPromiseを返す

    }).then(result =>{
        kakikomu.innerHTML+=`最終的な結果は: ${result}<br>`; // ここに3回目の処理が完了した後のコードを記述
    }).catch(error => {
        alert(error); // ここにエラーが発生した場合のコードを記述 console.error(error);にすると、コンソールにエラーが表示されます
    });
});
const button3 = document.getElementById('botan3');
const data2 = document.getElementById('kakutoko2');
const kakikomu2=document.getElementById('hyojibasho2');
function bainisuru2(data, callback) { 
        setTimeout(() => {
            if(data === '') {
                callback('入力が空です！');
            } else if(Number(data).isNaN) {
                callback('数値じゃないです！');
                
            }
            else{
                
                callback(data*2); // コールバック関数を呼び出す
            }
        }, Math.random()*3000); // 1秒後に実行される非同期処理
}
button3.addEventListener('click', () => {
    const inputData = data2.value;
    bainisuru2(inputData,(result) => {
        if(Number(result).isNaN) {
            kakikomu2.innerHTML=result+`<br>`; // 数値じゃない場合の処理
            return; // 処理を終了
        }else{
        kakikomu2.innerHTML=`入力値の2倍は: ${result}<br>`; // ここに1回目の処理が完了した後のコードを記述
        }
        bainisuru2(result, (result) => {
            kakikomu2.innerHTML+=`さらに2倍した結果は: ${result}<br>`; // ここに2回目の処理が完了した後のコードを記述
            bainisuru2(result, (result) => {
                kakikomu2.innerHTML+=`最終的な結果は: ${result}<br>`; // ここに3回目の処理が完了した後のコードを記述
            });
        });
    });
    alert('1秒以上たった後に消したら結果が表示されます');
});
    