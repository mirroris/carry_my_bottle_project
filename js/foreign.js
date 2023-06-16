var valueofAnswerTab ={
    11:[2.1,5.1,2.1,5.1,10.1,2.1,2.1,2.1],
    12:[10.1,10.1,10.1,2.1,2.1,2.1,5.1,2.1],
    13:[5.1,2.1,5.1,2.1,2.1,10.1,10.1,5.1],
    14:[2.1,2.1,2.1,10.1,5.1,5.1,2.1,10.1],
    21:[0.001,3.001,0.001,0.001,3.001,0.001,0.001,0.001],
    22:[0.001,0.001,3.001,3.001,0.001,3.001,0.001,0.001],
    23:[3.001,0.001,0.001,0.001,0.001,0.001,3.001,3.001],
    31:[5.0001,5.0001,10.0001,5.0001,2.0001,2.0001,2.0001,10.0001],
    32:[2.0001,10.0001,2.0001,2.0001,5.0001,10.0001,2.0001,2.0001],
    33:[10.0001,2.0001,5.0001,2.0001,2.0001,2.0001,10.0001,5.0001],
    34:[2.0001,2.0001,2.0001,10.0001,10.0001,5.0001,5.0001,2.0001],
    41:[2.01,2.01,2.01,0.01,2.01,0.01,0.01,2.01],
    42:[1.01,1.01,1.01,1.01,1.01,1.01,1.01,1.01],
    43:[0.01,0.01,0.01,2.01,0.01,2.01,2.01,0.01],
    51:[10,10,10,5,5,2,2,2],
    52:[2,2,2,2,2,5,5,10],
    53:[2,2,2,2,2,10,10,5],
    54:[5,5,5,10,10,2,2,2]
};

var score = [0,0,0,0,0,0,0,0];
var chart=[];


function oneofFour(key){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(++num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /**register answer info (answer (n))*/
    //chart.push();
    console.log(key);
    chart.push(key);
    console.log(valueofAnswerTab[key])
    return num;
}

function back(){
    let idname = "question"+num;
    //console.log(idname);
    let question = document.getElementById(idname);
    question.style.display = "none";
    let nextidname = "question"+(--num);
    //console.log(nextidname);
    let nextquestion = document.getElementById(nextidname);
    nextquestion.style.display = "block";
    
    /* delete answer info[answer (--num)] */
    chart.pop();
    console.log(chart);
    return num;
}

function accumulate(){

    let chtype;

    //どの性格かを求める
    console.log(chart);
    for(let i=0; i<5;i++){
        let x = valueofAnswerTab[chart[i]];
        for(let j=0;j<8;j++)score[j] = score[j] + x[j];
        console.log(score);
    }

        let max = 0;
    for(let i=0; i<8; i++){
        if(max<score[i]){
            max=score[i];
            chtype = i;
        }
    }

    let Type={};
    switch(chtype+1){
        case 1:
            Type.color="#E83419"; //テーマカラ-
            Type.info="<div id = 'critical'>フ</div>ットワークが軽く、何事にも意欲的で周囲の人を引っ張っていくリーダー的な性格です。<br>実はアーティスティックな一面も。身体を動かすことが好きで、動きやすくカジュアルなファッションがお似合いです！ファッションに柄のマイバックを取り入れる事で、より一層あなたの魅力が光ります✨";   // 基本情報
            Type.item="マイバッグ";  // アイテム
            Type.img="result1.png";   // キャラ画像
            Type.beans="エコバックって本当にエコなの？"; //豆知識
            Type.beansSub="デンマークの環境食品省環境保護機関は「ライフサイクルアセスメント(LCA)」という環境負荷を総合評価する手法を用いて、1枚のレジ袋を作る上で発生する環境負荷の試算を発表しました。<br>その結果によると、アパレル店でよく用いられるLDPE素材のレジ袋を1回再利用(一度ゴミ袋として利用)することは、<br><br>●エコバッグ(ポリステルバッグ)を35回再使用する<br>●紙袋を43回再利用する<br>●オーガニックコットンバッグ20000回再使用する<br><br>と同程度の環境負荷になります。<br>エコバックは数回使うだけでは意味が無く、何回も繰り返し使うことでどんどんエコになっていきます。<br>使う頻度や耐久性、金額なども踏まえて、自分のマイバックを探してみましょう！<br><div id = 'small'>※参考資料 https://cyql.jp/infographics/lca/</div><br>";
            break;

        case 2:
            Type.color="#004C88"; //テーマカラ-
            Type.info="<div id = 'critical'>何</div>事にも熱心で努力家な性格です。<br>大人数で集まるよりも、1人でコツコツと勉強することが得意なタイプ。街に行って喫茶店で勉強すると捗ります。古着などのレトロな服装を着て、タンブラーを持って優雅に珈琲を注文してみましょう。知的で落ち着いた大人の魅力を醸しだし、同級生に差を付けられること間違いなし!";   // 基本情報
            Type.item="タンブラー";  // アイテム
            Type.img="result2.png";   // キャラ画像
            Type.beans="タンブラー持参で割引になるカフェ"; //豆知識
            Type.beansSub="環境への取り組みとして、タンブラー・マグカップの持参でドリンクを割引してくれるお店が増えてきました。<br>今回は大阪大学の近くにある「タンブラー・マグカップ持参で値引になるお店」をご紹介します！<br>●スターバックスコーヒー(¥22引) <br>  → 大阪大学医学部附属病院店<br>●ローソンMACHI cafè（¥39引）<br>  大阪大学豊中キャンパス店、茨木阪大病院前店<br>●シアトルズベストコーヒー(¥20引) <br>  万博記念公園店<br>●タリーズコーヒー(¥30引)<br>  阪急石橋店、伊丹空港店、ららぽーとＥＸＰＯＣＩＴＹ店<br>●カフェ・ド・クリエ(¥30引)<br>  大阪大学歯学部附属病院店<br>●上島珈琲店(¥50引)<br>  大阪国際空港店<br>素敵なタンブラーを買ってカフェ活してみてはいかがでしょうか？<br><div id = 'small'>※2022/05/03現在の情報です</div>";
            break;

        case 3:
            Type.color="#1A9739"; //テーマカラ-
            Type.info="<div id = 'critical'>ポ</div>ジティブで、周りの人を明るく太陽のような存在です<br>流行のものが好きで、趣味なども常に最先端！セットアップなど韓国風ファッションが似合うかも。レインボーに光るストローを持ってカフェに行けばインスタ映え間違いなし！自ら流行を生み出してみませんか？？";   // 基本情報
            Type.item="マイストロー";  // アイテム
            Type.img="result3.png";   // キャラ画像
            Type.beans="おもしろストロー紹介" //豆知識
            Type.beansSub="周りをあっと言わせる、素敵なストローを2つ紹介します<br><br>●虹色に光る「チタンストロー」<br>チタンは軽くて丈夫な金属です。錆びない上、気になる金属臭もありません。劣化したり割れたりしないため、比較的長持ちしやすいです。また、チタンはアレルギーをほとんど起こさないため、金属に弱い方でも問題ありません。さらに、金属でできているため冷たい飲み物も冷たいままの感触を楽しめます！<br>このカラフルに光るチタンストローは百円ショップでも手に入れることができます。安価で手軽に購入できるので、ちょっとしたプレゼントにもおすすめです<br><br>●自分で巻いて使えるストロー「STROLL_01」<br> このストローは小学生が自由研究から生まれた商品です。１枚のシートを螺旋状に巻いて円筒状にして使用します。飲み終わったらストローをシート状に広げて洗うことができるため衛生的で持ち運びも便利です。シートを適切に巻けば液体が漏れる心配もありません。これまでにはない画期的なストローなので、注目されること間違いなし！<br><div id = 'small'>※参考資料 https://sotokotonews.com/SDGs_news/138</div><br>";
            break;

        case 4:
            Type.color="#970A31"; //テーマカラ-
            Type.info="<div id = 'critical'>我</div>が道を行くマイペースで、些細なことにはとらわれない寛容な心を持っています<br>集団よりも一人行動が好きで、猫のようにふらっとどこかに出かけていきます。基本的にインドアで冬はこたつから離れらません。もこもこした服、ゆるっとした服がよく似合うでしょう。<br>寒い冬に出かけないといけない時は、充電できるカイロを持って外出中もぬくぬくしましょう♨";   // 基本情報
            Type.item="充電式カイロ";  // アイテム
            Type.img="result4.png";   // キャラ画像
            Type.beans="モバイルバッテリー×充電式カイロ"; //豆知識
            Type.beansSub="さまざまな充電式カイロが売られていますが、冬しか使えないのは少し物足りないという方にはモバイルバッテリーの機能も兼ね備えている充電式カイロがおすすめです!<br><br>'mottole MTL-E029'というカイロはスイッチを入れると5秒で暖まり、5～8時間は連続使用できます。1年中活用できるだけでなく、地震による停電などの緊急時でも使用可能です。他のUSB機器への充電もできるため、普段はモバイルバッテリーとして持ち運び、寒い冬にはカイロとして活躍してくれる優れものです!<br>";  // 基本情報
            break;

        case 5:
            Type.color="#00A6D9"; //テーマカラ-
            Type.info="<div id = 'critical'>真</div>面目さと正直さがとりえです。<br>誘われたり頼まれたりすると断れないタイプ。面倒見が良いため、こども・年下にはよく好かれることでしょう。スーツなどのフォーマルなファッションが良く似合います。就活や塾バイトのためにスーツで大学に来ることも。ごはん時にお弁当とマイ箸を取り出せば、好感度は上がるに違いありません。もちろん正しく箸は持ちましょう！"; 
            Type.item="マイ箸";  // アイテム
            Type.img="result5.png";   // キャラ画像
            Type.beans="割り箸とマイ箸、どっちがエコ？？"; //豆知識
            Type.beansSub="「割り箸は間伐材を利用しているから環境に良い」と聞いたことはありませんか？実際環境負荷が少ないのは、割り箸とマイ箸、どっちなのでしょうか？<br><br>これは割り箸の生産国が日本か外国かで異なります。仮想店舗で1年間使用した場合を比較すると、マイ箸は年間[67kg]のCO2、国産の割り箸は[62kg]のCO2を材料調達から廃棄までで排出すると言われています。一方、中国産の割り箸だと年間[15,167kg]ものCO2を排出します。これは材料調達にかかるCO2量が大半を占めるからです。<br><br>マイ箸よりも国産の割り箸を使っていけば問題ありません。しかし外食産業で用いられる割り箸の約98%が外国産で、国産のものはわずか2%程です。毎回、国産の割り箸を手にすることは出来ないでしょう。<br>本当に環境負荷が小さい箸はどっちでしょうか？<div id = 'small'>参考資料「割り箸と洗い箸のライフサイクルCO2比較分析」朝倉・小川 , 2014 , 第9回日本LCA学会研究発表会講演要旨集</div><br>";
            break;

        case 6:
            Type.color="#407936"; //テーマカラ-
            Type.info="<div id = 'critical'>効</div>率的、論理的な知性派です。<br>感情よりも論理性を重視しますが、決断する時は直感的になりがち。ユニクロなどシンプルな服装を着がちですが、柄シャツを選ぶと一気にオシャレの幅が広がるでしょう。<br>パソコンなどの電子機器を使う場面が多いので、複数の機器を充電できて且つ節電にもなる、節電タップがオススメです。<br>お洒落で格好良い理系大学生を目指しませんか？";   // 基本情報
            Type.item="節電タップ";  // アイテム
            Type.img="result6.png";   // キャラ画像
            Type.beans="待機電力のはなし"; //豆知識分
            Type.beansSub="待機電力とは電子機器を使っていなくてもコンセントに繋いでいるだけで消費される電力のことです。待機電力の消費電力量は一世帯あたり年間で228kWと推定され、電気代に換算すると年間約6,156円も無駄にしています。<br><br>待機電力を無くすには電子機器をコンセントから抜く必要がありますが、毎回外すのは面倒ですよね。そこで役に立つのが節電タップ!節電タップは各コンセントの挿し口にON･OFFのスイッチが付いており、使わないときはスイッチを押すだけなので簡単に待機電力分を節約することが出来ます。<br><br>節電タップを使用するだけで、待機電力を約50%も削減できます。節約･節電の為に、通常のたこ足配線はやめて節電タップにしませんか？<br>";
            break;

        case 7:
            Type.color="#FCBD00"; //テーマカラ-
            Type.info="<div id = 'critical'>い</div>つもみんなの盛り上げ役でムードメーカー<br>誰に対しても優しく裏表がない性格なので、周りの人からは厚く信頼されています。体を動かすのが好きで、体育や部活・サークルの時はジャージで登校することも。<br>暑い日に運動した後は、手で持てる扇風機や首から掛ける扇風機で快適に過ごしてみてはいかがでしょうか。";  // 基本情報
            Type.item="扇風機";  // アイテム
            Type.img="result7.png";   // キャラ画像
            Type.beans="効果的な扇風機の使い方"; //豆知識
            Type.beansSub="扇風機の賢い使い方を3つ紹介します。<br><br>①暑い夏はタイマー付きの扇風機で快適に。<br>就寝時間の1/3ずつON･OFFを変えるタイマーをセットします。扇風機を入眠後数時間と起床前数時間だけでも稼働させることで、快適な睡眠に繋がるとともに節電にもなります。<br><br>②部屋の温度を効率的に下げるには。<br>扇風機を窓に向けて置きましょう。部屋の奥の熱い空気を外に素早く出すことが出来るため、効率的に室温を下げることが出来ます<br><br>③就寝中に使用する際<br>壁に向けて扇風機を設置すると、寝ている間に身体が冷えることを防げます。壁に当てることで空気が柔らかくなり心地空気を作り出すことが出来ます。<br>";
            break;
        case 8:
            Type.color="#EC6A04"; //テーマカラ-
            Type.info="<div id = 'critical'>活</div>気に満ちていて情熱的な性格です。新しいことにチャレンジしたり、グループで活動したりすることが好きです。アクティブなので旅行やアウトドアに行くことが多い方です。スマホで動画見たりするのも好きなので、屋外でスマホの充電が切れるなんて耐えられない。そんなあなたには、アウトドアにも欠かせないソーラーモバイルバッテリーがおススメです。これがあればどこにでも出掛けられます！";   // 基本情報
            Type.item="ソーラーモバイルバッテリー";  // アイテム
            Type.img="result8.png";   // キャラ画像
            Type.beans="世界で一番薄いソーラー充電器「YOLK solar paper」"; 
            Type.beansSub="ソーラー式充電器は基本的に普通の充電器よりも大きくて重いのがデメリットで、アウトドアには向いていないことが多いです。そこで今回は日常生活やアウトドアでも使える、世界一薄いと言われるsolar paperという製品をご紹介します!<br><br>ソーラーペーパーは折りたたんだ際に9cm×19cm×1.1cm(厚)になり、重さも各パネル約70gと軽い方です。太陽光下では約2.5時間でスマホを充電することが出来ます。またスマホだけでなくUSBで充電できる全てのデバイスで充電が可能です。懐中電灯や蓄電池、トランシーバーなどアウトドアで必要な道具も全て充電できます。そして、このソーラーペーパーの太陽電子効率は1パネルあたり約23%で、同様の製品と比べても発電効率が良いとされています。<br><br>今後、さらに薄くて軽いソーラーモバイルバッテリーが開発されていくことでしょう。紙みたいに薄い製品が生まれるかもしれません。今後が楽しみです。<br>";
            break;
    }
    console.log(chtype+1);
    //性格に合わせたデータを取得

    //shareボタンの可視化
    let twdata = document.getElementById("hault");
    twdata.style.opacity=1;
    //let textdata = document.getElementById("final");
    
    /*
    let twintro="";
    for(let i = 0; i<50;i++) twintro+=Type.info[i];
    twintro+="...";
*/
    //textdata[0].setAttribute("data-text","あなたに似合うアイテムは..."+Type.item+"!!#阪大キャリボト診断");
    //console.log(textdata[0].href);

    //リザルトに設定
    document.getElementById("question6").style.display="none";
    let result = document.getElementById("resultsheet");
    //リザルトを表示
    result.style.display = "block";
    result.style.backgroundColor=Type.color;

    //動的に結果を作成
    let resultChara = '<div class = "character">'+'<img src='+Type.img+' class="resize">';
    let resultintro = resultChara+"</div><br>"+"<div id = 'top'>あなたにおすすめのエコアイテムは</div><br><div id = 'bold'>「"+Type.item+"」</div>"
   
    let info = '<br><div class = "iteminfo" id = "iteminfo"><div class = "supervisor">'+Type.info+"<br></div></div>";
   
    let beans =  '<div class = "beans"> <div id="top"><br>【'+Type.beans+'】<br></div><div class="beansSub"><div class = "supervisor">'+Type.beansSub+'<br></div></div></div>';
    let twinfo = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="あなたも是非阪大キャリボト診断を！" data-url="https://mirroris.github.io/CRBT/" data-show-count="false">Twitterで共有する</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
    document.getElementById("resultsheet").innerHTML=resultintro+info+beans;
    //color調整
    document.getElementById("critical").style.color=Type.color;

    return;
}


