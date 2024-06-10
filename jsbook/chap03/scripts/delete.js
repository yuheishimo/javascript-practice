let data = ['Python', 'PHP', 'JavaScript'];
console.log(delete data[0]);
//true（削除成功）
console.log(data);
//なし, 'PHP', 'JavaScript'
console.log(data.length);
//3
//削除された要素は空のまま維持

let langs = { primary: 'Japanese', secondary: 'English' };
console.log(delete langs.secondary);
//true
console.log(langs);
//primary: 'Japanese'
console.log(delete langs.hoge);
//true
//存在しないプロパティ

let member = { name: '山田太郎', sex: 'male', language: langs };
console.log(delete member.language);
//true
console.log(member);
//name: '山田太郎', sex: 'male'
console.log(langs);
//primary: 'Japanese'

let title = 'Vue.js本格入門';
console.log(delete title);
//false

author = '鈴木次郎';
console.log(delete author);
//true
//let/varなどなしに宣言された変更だけ削除可能