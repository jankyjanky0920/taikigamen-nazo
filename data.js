const quizzes = [
  {
    id: 1,
    title: "001-約25%",
    thumbnail: "assets/nazo/taikinazo-001-yaku25pa-.jpg",
    hint: "③は「ん」",
    answers: ["みかん", "ミカン", "蜜柑"],
    answerText: "答えは「みかん」でした！",
    answerImage: "assets/answers/taikianswer-001-yaku25pa-.jpg",
    startTime: "2025-10-05T20:00:00", // 出題開始時刻だけ書けばOK！
  },
  {
    id: 2,
    title: "002-ステージ",
    thumbnail: "assets/nazo/taikinazo-002-sute-ji.jpg",
    hint: "二つの紫の塊には、対立する熟語が入るよ",
    answers: ["かしょうたいかい", "歌唱大会"],
    answerText: "答えは「歌唱大会」でした！",
    answerImage: "assets/answers/taikinazo-002-sute-ji.jpg",
    startTime: "2025-10-06T18:00:00"
  }
];

// ✅ ステータス判定（テンプレ適用）
function getCurrentStatus(quiz) {
  const now = new Date();
  const start = new Date(quiz.startTime);

  if (now < start) return "非公開";

  const elapsed = (now - start) / 1000; // 秒
  if (elapsed < 3600) return "出題";          // 1時間未満
  if (elapsed < 86400) return "出題経過";     // 1時間〜24時間
  return "公開";                             // 24時間以降
}

// --- 共通の開発者モード判定関数 ---
function isDevEnabled() {
  return localStorage.getItem("devMode") === "true";
}
