const fish_recipes = [
    {
        recipeName: "真鯛と鰹のたたきホイル焼き",
        fishName: "タイ",
        iamge: "01.tiff",
        detail: "つぼ鯛に脂が乗ってるので、味付けはシンプルにしてみました。お好みでポン酢やお醤油をかけて。",
        recipe: "https://cookpad.com/recipe/7328723"
    },
    {
        recipeName: "真鯛のにんにくバジルオリーブオイル焼き",
        fishName: "タイ",
        image: "02.tiff",
        detail: "にんにくの風味が、旬の鯛や野菜のおいしさをより一層引き立てます。ガーリックオイルはバゲットにつけて食べるのもおすすめです。",
        recipe: "https://cookpad.com/recipe/7304573"
    },
    {
        recipeName: "真鯛のお茶漬け",
        fishName: "タイ",
        image: "03.tiff",
        detail: "ごま鯛茶漬けのレシピです。スーパーのお刺身にひと手間加えるだけで、とっても美味しい贅沢なお茶漬けになりますよ。忙しい時でもパパっと作れるのでお勧めです。お酒を飲んだ後のシメにぴったりです。",
        recipe: "https://cookpad.com/recipe/7275177"
    },
    {
        recipeName: "アジのなめろう",
        fishName: "アジ",
        image: "05.tiff",
        detail: "千葉の漁師さんに教わった漁師飯です。青ねぎと生姜のお馴染みなめろうと比べてニンニク効果でワイルド感が増しています。熱々のごはんにもお酒にも合う一品です。",
        recipe: "https://cookpad.com/recipe/7360074"
    },
    {
        recipeName: "真鯛のカルパッチョ",
        fishName: "タイ",
        image: "04.tiff",
        detail: "新鮮な鯛を使ったカルパッチョを作ってみましょう!材料たったの3つでできるカルパッチョソースの作り方と、ソース別のアレンジレシピ7選をご紹介します。鯛のカルパッチョを、ご家庭で優雅に満喫しちゃいましょう。",
        recipe: "https://cookpad.com/recipe/1659425",
    },

];

const hoge = [];
const fuga = [];

$("button").on("click", function () {
    hoge.length = 0;
    fuga.length = 0;


    console.log(fish_recipes[0]);
    console.log(fish_recipes[0].fishName);

    let y = $("#fish-name").val();

    for (let i = 0; i < fish_recipes.length; i++) {
        if (fish_recipes[i].fishName === y) {
            hoge.push(fish_recipes[i]);
        }
    }

    // console.log(hoge);

    for (let i = 0; i < hoge.length; i++) {
        // fuga.push("<div>");
        // fuga.push("<h3>" + hoge[i].recipeName + "</h3>");
        // fuga.push("<h3>" + "魚種名：" + hoge[i].fishName);
        // fuga.push("<p>" + hoge[i].detail + "</p>");
        // fuga.push("</div>");

        fuga.push("<section>" + "<h3>" + hoge[i].recipeName + "</h3>" + "<h3>" + "魚種名：" + hoge[i].fishName + "<p>" + hoge[i].detail + "</p>" + "</section>");

    }

    $(".recipe-item div").addClass("クラス名");

    $(".recipe-item").html(fuga); //cba

});


$(".reset").on("click", function () {
    $("section").remove();
    hoge.length = 0;
    fuga.length = 0;
})