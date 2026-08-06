// ═══════════════════════════════════════════════════
// DATA — HIRAGANA
// ═══════════════════════════════════════════════════
const HIRAGANA=[
  {char:'あ',romaji:'a'},{char:'い',romaji:'i'},{char:'う',romaji:'u'},{char:'え',romaji:'e'},{char:'お',romaji:'o'},
  {char:'か',romaji:'ka'},{char:'き',romaji:'ki'},{char:'く',romaji:'ku'},{char:'け',romaji:'ke'},{char:'こ',romaji:'ko'},
  {char:'さ',romaji:'sa'},{char:'し',romaji:'shi'},{char:'す',romaji:'su'},{char:'せ',romaji:'se'},{char:'そ',romaji:'so'},
  {char:'た',romaji:'ta'},{char:'ち',romaji:'chi'},{char:'つ',romaji:'tsu'},{char:'て',romaji:'te'},{char:'と',romaji:'to'},
  {char:'な',romaji:'na'},{char:'に',romaji:'ni'},{char:'ぬ',romaji:'nu'},{char:'ね',romaji:'ne'},{char:'の',romaji:'no'},
  {char:'は',romaji:'ha'},{char:'ひ',romaji:'hi'},{char:'ふ',romaji:'fu'},{char:'へ',romaji:'he'},{char:'ほ',romaji:'ho'},
  {char:'ま',romaji:'ma'},{char:'み',romaji:'mi'},{char:'む',romaji:'mu'},{char:'め',romaji:'me'},{char:'も',romaji:'mo'},
  {char:'や',romaji:'ya'},{char:'ゆ',romaji:'yu'},{char:'よ',romaji:'yo'},
  {char:'ら',romaji:'ra'},{char:'り',romaji:'ri'},{char:'る',romaji:'ru'},{char:'れ',romaji:'re'},{char:'ろ',romaji:'ro'},
  {char:'わ',romaji:'wa'},{char:'を',romaji:'wo'},{char:'ん',romaji:'n'},
  {char:'が',romaji:'ga'},{char:'ぎ',romaji:'gi'},{char:'ぐ',romaji:'gu'},{char:'げ',romaji:'ge'},{char:'ご',romaji:'go'},
  {char:'ざ',romaji:'za'},{char:'じ',romaji:'ji'},{char:'ず',romaji:'zu'},{char:'ぜ',romaji:'ze'},{char:'ぞ',romaji:'zo'},
  {char:'だ',romaji:'da'},{char:'で',romaji:'de'},{char:'ど',romaji:'do'},
  {char:'ば',romaji:'ba'},{char:'び',romaji:'bi'},{char:'ぶ',romaji:'bu'},{char:'べ',romaji:'be'},{char:'ぼ',romaji:'bo'},
  {char:'ぱ',romaji:'pa'},{char:'ぴ',romaji:'pi'},{char:'ぷ',romaji:'pu'},{char:'ぺ',romaji:'pe'},{char:'ぽ',romaji:'po'},
];
// ═══════════════════════════════════════════════════
// DATA — KATAKANA
// ═══════════════════════════════════════════════════
const KATAKANA=[
  {char:'ア',romaji:'a'},{char:'イ',romaji:'i'},{char:'ウ',romaji:'u'},{char:'エ',romaji:'e'},{char:'オ',romaji:'o'},
  {char:'カ',romaji:'ka'},{char:'キ',romaji:'ki'},{char:'ク',romaji:'ku'},{char:'ケ',romaji:'ke'},{char:'コ',romaji:'ko'},
  {char:'サ',romaji:'sa'},{char:'シ',romaji:'shi'},{char:'ス',romaji:'su'},{char:'セ',romaji:'se'},{char:'ソ',romaji:'so'},
  {char:'タ',romaji:'ta'},{char:'チ',romaji:'chi'},{char:'ツ',romaji:'tsu'},{char:'テ',romaji:'te'},{char:'ト',romaji:'to'},
  {char:'ナ',romaji:'na'},{char:'ニ',romaji:'ni'},{char:'ヌ',romaji:'nu'},{char:'ネ',romaji:'ne'},{char:'ノ',romaji:'no'},
  {char:'ハ',romaji:'ha'},{char:'ヒ',romaji:'hi'},{char:'フ',romaji:'fu'},{char:'ヘ',romaji:'he'},{char:'ホ',romaji:'ho'},
  {char:'マ',romaji:'ma'},{char:'ミ',romaji:'mi'},{char:'ム',romaji:'mu'},{char:'メ',romaji:'me'},{char:'モ',romaji:'mo'},
  {char:'ヤ',romaji:'ya'},{char:'ユ',romaji:'yu'},{char:'ヨ',romaji:'yo'},
  {char:'ラ',romaji:'ra'},{char:'リ',romaji:'ri'},{char:'ル',romaji:'ru'},{char:'レ',romaji:'re'},{char:'ロ',romaji:'ro'},
  {char:'ワ',romaji:'wa'},{char:'ヲ',romaji:'wo'},{char:'ン',romaji:'n'},
  {char:'ガ',romaji:'ga'},{char:'ギ',romaji:'gi'},{char:'グ',romaji:'gu'},{char:'ゲ',romaji:'ge'},{char:'ゴ',romaji:'go'},
  {char:'ザ',romaji:'za'},{char:'ジ',romaji:'ji'},{char:'ズ',romaji:'zu'},{char:'ゼ',romaji:'ze'},{char:'ゾ',romaji:'zo'},
  {char:'ダ',romaji:'da'},{char:'デ',romaji:'de'},{char:'ド',romaji:'do'},
  {char:'バ',romaji:'ba'},{char:'ビ',romaji:'bi'},{char:'ブ',romaji:'bu'},{char:'ベ',romaji:'be'},{char:'ボ',romaji:'bo'},
  {char:'パ',romaji:'pa'},{char:'ピ',romaji:'pi'},{char:'プ',romaji:'pu'},{char:'ペ',romaji:'pe'},{char:'ポ',romaji:'po'},
];
// ═══════════════════════════════════════════════════
// DATA — KANJI
// ═══════════════════════════════════════════════════
const KANJI=[
  {char:'一',romaji:'ichi',meaning:'one'},{char:'二',romaji:'ni',meaning:'two'},{char:'三',romaji:'san',meaning:'three'},
  {char:'四',romaji:'shi',meaning:'four'},{char:'五',romaji:'go',meaning:'five'},{char:'六',romaji:'roku',meaning:'six'},
  {char:'七',romaji:'shichi',meaning:'seven'},{char:'八',romaji:'hachi',meaning:'eight'},{char:'九',romaji:'ku',meaning:'nine'},
  {char:'十',romaji:'juu',meaning:'ten'},{char:'百',romaji:'hyaku',meaning:'hundred'},{char:'千',romaji:'sen',meaning:'thousand'},
  {char:'万',romaji:'man',meaning:'ten-thousand'},{char:'日',romaji:'nichi',meaning:'sun / day'},{char:'月',romaji:'tsuki',meaning:'moon / month'},
  {char:'火',romaji:'hi',meaning:'fire'},{char:'水',romaji:'mizu',meaning:'water'},{char:'木',romaji:'ki',meaning:'tree / wood'},
  {char:'金',romaji:'kin',meaning:'gold / money'},{char:'土',romaji:'tsuchi',meaning:'earth / soil'},{char:'山',romaji:'yama',meaning:'mountain'},
  {char:'川',romaji:'kawa',meaning:'river'},{char:'田',romaji:'ta',meaning:'rice field'},{char:'人',romaji:'hito',meaning:'person'},
  {char:'口',romaji:'kuchi',meaning:'mouth'},
  {char:'手',romaji:'te',meaning:'hand'},{char:'足',romaji:'ashi',meaning:'foot / leg'},{char:'目',romaji:'me',meaning:'eye'},
  {char:'耳',romaji:'mimi',meaning:'ear'},{char:'上',romaji:'ue',meaning:'up / above'},{char:'下',romaji:'shita',meaning:'down / below'},
  {char:'左',romaji:'hidari',meaning:'left'},{char:'右',romaji:'migi',meaning:'right'},{char:'中',romaji:'naka',meaning:'middle'},
  {char:'大',romaji:'dai',meaning:'big / large'},{char:'小',romaji:'shou',meaning:'small'},{char:'年',romaji:'nen',meaning:'year'},
  {char:'男',romaji:'otoko',meaning:'man / male'},{char:'女',romaji:'onna',meaning:'woman / female'},{char:'子',romaji:'ko',meaning:'child'},
  {char:'学',romaji:'gaku',meaning:'study'},{char:'生',romaji:'sei',meaning:'life / birth'},{char:'先',romaji:'sen',meaning:'before / ahead'},
  {char:'校',romaji:'kou',meaning:'school'},{char:'国',romaji:'kuni',meaning:'country'},
  {char:'東',romaji:'higashi',meaning:'east'},{char:'西',romaji:'nishi',meaning:'west'},{char:'南',romaji:'minami',meaning:'south'},
  {char:'北',romaji:'kita',meaning:'north'},{char:'語',romaji:'go',meaning:'language'},{char:'話',romaji:'hanashi',meaning:'talk / speech'},
  {char:'食',romaji:'shoku',meaning:'eat / food'},{char:'飲',romaji:'in',meaning:'drink'},{char:'見',romaji:'mi',meaning:'see / look'},
  {char:'聞',romaji:'kiku',meaning:'hear / listen'},{char:'読',romaji:'yomu',meaning:'read'},{char:'書',romaji:'kaku',meaning:'write'},
  {char:'来',romaji:'kuru',meaning:'come'},{char:'行',romaji:'iku',meaning:'go'},{char:'時',romaji:'toki',meaning:'time / hour'},
  {char:'間',romaji:'aida',meaning:'interval'},{char:'電',romaji:'den',meaning:'electricity'},{char:'車',romaji:'kuruma',meaning:'car / vehicle'},
  {char:'気',romaji:'ki',meaning:'spirit'},{char:'心',romaji:'kokoro',meaning:'heart / mind'},
];
// ═══════════════════════════════════════════════════
// DATA — WORDS
// ═══════════════════════════════════════════════════
const WORDS=[
  {word:'食べる',reading:'たべる',romaji:'taberu',meaning:'to eat',hint:'A daily action involving food',level:1,sentence:'毎日、ご飯を食べる。',sentenceEn:'I eat rice every day.'},
  {word:'飲む',reading:'のむ',romaji:'nomu',meaning:'to drink',hint:'What you do with water or tea',level:1,sentence:'コーヒーを飲む。',sentenceEn:'I drink coffee.'},
  {word:'見る',reading:'みる',romaji:'miru',meaning:'to see / watch',hint:'Used for movies, TV, or scenery',level:1,sentence:'映画を見る。',sentenceEn:'I watch a movie.'},
  {word:'聞く',reading:'きく',romaji:'kiku',meaning:'to listen / hear',hint:'Used for music, questions, or news',level:1,sentence:'音楽を聞く。',sentenceEn:'I listen to music.'},
  {word:'話す',reading:'はなす',romaji:'hanasu',meaning:'to speak / talk',hint:'What you do in conversation',level:1,sentence:'日本語を話す。',sentenceEn:'I speak Japanese.'},
  {word:'行く',reading:'いく',romaji:'iku',meaning:'to go',hint:'Movement away from the speaker',level:1,sentence:'学校に行く。',sentenceEn:'I go to school.'},
  {word:'来る',reading:'くる',romaji:'kuru',meaning:'to come',hint:'Movement toward the speaker',level:1,sentence:'友達が来る。',sentenceEn:'My friend comes over.'},
  {word:'買う',reading:'かう',romaji:'kau',meaning:'to buy',hint:'You do this at a store or shop',level:1,sentence:'スーパーで野菜を買う。',sentenceEn:'I buy vegetables at the supermarket.'},
  {word:'好き',reading:'すき',romaji:'suki',meaning:'to like / fond of',hint:'Expresses a positive feeling toward something',level:1,sentence:'猫が好きです。',sentenceEn:'I like cats.'},
  {word:'大きい',reading:'おおきい',romaji:'ookii',meaning:'big / large',hint:'Opposite of 小さい',level:1,sentence:'あの山は大きい。',sentenceEn:'That mountain is big.'},
  {word:'小さい',reading:'ちいさい',romaji:'chiisai',meaning:'small / little',hint:'Opposite of 大きい',level:1,sentence:'この部屋は小さい。',sentenceEn:'This room is small.'},
  {word:'高い',reading:'たかい',romaji:'takai',meaning:'expensive / tall',hint:'Applies to prices AND height',level:1,sentence:'このバッグは高い。',sentenceEn:'This bag is expensive.'},
  {word:'安い',reading:'やすい',romaji:'yasui',meaning:'cheap / inexpensive',hint:'Opposite of 高い for prices',level:1,sentence:'このお店は安い。',sentenceEn:'This store is cheap.'},
  {word:'新しい',reading:'あたらしい',romaji:'atarashii',meaning:'new',hint:'Opposite of 古い',level:1,sentence:'新しい車を買った。',sentenceEn:'I bought a new car.'},
  {word:'古い',reading:'ふるい',romaji:'furui',meaning:'old / ancient',hint:'Used for objects, not people',level:1,sentence:'古い本がある。',sentenceEn:'There is an old book.'},
  {word:'学校',reading:'がっこう',romaji:'gakkou',meaning:'school',hint:'Where students go to study',level:1,sentence:'学校は9時に始まる。',sentenceEn:"School starts at 9 o'clock."},
  {word:'電車',reading:'でんしゃ',romaji:'densha',meaning:'train',hint:'Common Japanese public transport',level:1,sentence:'電車で駅に行く。',sentenceEn:'I go to the station by train.'},
  {word:'本',reading:'ほん',romaji:'hon',meaning:'book',hint:'You read this — also means "origin"',level:1,sentence:'図書館で本を読む。',sentenceEn:'I read a book at the library.'},
  {word:'友達',reading:'ともだち',romaji:'tomodachi',meaning:'friend',hint:'Someone you are close to',level:1,sentence:'友達と公園で遊ぶ。',sentenceEn:'I play in the park with a friend.'},
  {word:'水',reading:'みず',romaji:'mizu',meaning:'water',hint:'The most essential liquid',level:1,sentence:'水を飲む。',sentenceEn:'I drink water.'},
  {word:'覚える',reading:'おぼえる',romaji:'oboeru',meaning:'to remember / memorize',hint:'What you do when studying vocabulary',level:2,sentence:'新しい単語を覚える。',sentenceEn:'I memorize new vocabulary words.'},
  {word:'忘れる',reading:'わすれる',romaji:'wasureru',meaning:'to forget',hint:'Opposite of 覚える',level:2,sentence:'宿題を忘れた。',sentenceEn:'I forgot my homework.'},
  {word:'働く',reading:'はたらく',romaji:'hataraku',meaning:'to work',hint:'What adults do at a job',level:2,sentence:'毎日、会社で働く。',sentenceEn:'I work at the company every day.'},
  {word:'休む',reading:'やすむ',romaji:'yasumu',meaning:'to rest / take a day off',hint:'What you do when tired or sick',level:2,sentence:'今日は会社を休む。',sentenceEn:'I take the day off from work today.'},
  {word:'始める',reading:'はじめる',romaji:'hajimeru',meaning:'to begin / start',hint:'The first action in a sequence',level:2,sentence:'授業を始める。',sentenceEn:'I start the class.'},
  {word:'終わる',reading:'おわる',romaji:'owaru',meaning:'to end / finish',hint:'Opposite of 始める',level:2,sentence:'映画が終わる。',sentenceEn:'The movie ends.'},
  {word:'旅行',reading:'りょこう',romaji:'ryokou',meaning:'travel / trip',hint:'Going somewhere for leisure',level:2,sentence:'来月、日本へ旅行する。',sentenceEn:'I will travel to Japan next month.'},
  {word:'料理',reading:'りょうり',romaji:'ryouri',meaning:'cooking / cuisine',hint:'The activity of preparing food',level:2,sentence:'毎朝、料理をする。',sentenceEn:'I cook every morning.'},
  {word:'家族',reading:'かぞく',romaji:'kazoku',meaning:'family',hint:'Parents, siblings, relatives together',level:2,sentence:'家族と一緒に食事する。',sentenceEn:'I have a meal with my family.'},
  {word:'天気',reading:'てんき',romaji:'tenki',meaning:'weather',hint:'Is it sunny? Rainy? Cloudy?',level:2,sentence:'今日の天気は晴れです。',sentenceEn:"Today's weather is sunny."},
  {word:'病院',reading:'びょういん',romaji:'byouin',meaning:'hospital',hint:'You go here when sick or injured',level:2,sentence:'病院で先生に会う。',sentenceEn:'I see a doctor at the hospital.'},
  {word:'電話',reading:'でんわ',romaji:'denwa',meaning:'telephone / phone call',hint:'You use this to talk at a distance',level:2,sentence:'友達に電話する。',sentenceEn:'I call my friend on the phone.'},
  {word:'映画',reading:'えいが',romaji:'eiga',meaning:'movie / film',hint:'You watch this at a cinema',level:2,sentence:'週末に映画を見る。',sentenceEn:'I watch a movie on the weekend.'},
  {word:'音楽',reading:'おんがく',romaji:'ongaku',meaning:'music',hint:'Sounds arranged in a pleasing way',level:2,sentence:'毎晩、音楽を聞く。',sentenceEn:'I listen to music every evening.'},
  {word:'勉強',reading:'べんきょう',romaji:'benkyou',meaning:'study / studying',hint:'The act of learning academic content',level:2,sentence:'毎日、日本語を勉強する。',sentenceEn:'I study Japanese every day.'},
  {word:'練習',reading:'れんしゅう',romaji:'renshuu',meaning:'practice / training',hint:'Repeating something to improve skill',level:2,sentence:'毎日ピアノを練習する。',sentenceEn:'I practice piano every day.'},
  {word:'試験',reading:'しけん',romaji:'shiken',meaning:'exam / test',hint:'An evaluation of your knowledge',level:2,sentence:'明日、試験がある。',sentenceEn:'There is an exam tomorrow.'},
  {word:'趣味',reading:'しゅみ',romaji:'shumi',meaning:'hobby / interest',hint:'Something you do for fun in free time',level:2,sentence:'私の趣味は読書です。',sentenceEn:'My hobby is reading.'},
  {word:'運動',reading:'うんどう',romaji:'undou',meaning:'exercise / sports',hint:'Physical activity for health or fitness',level:2,sentence:'毎朝、公園で運動する。',sentenceEn:'I exercise in the park every morning.'},
  {word:'駅',reading:'えき',romaji:'eki',meaning:'station (train/subway)',hint:'Where trains stop and passengers board',level:2,sentence:'駅で友達を待つ。',sentenceEn:'I wait for my friend at the station.'},
  {word:'経験',reading:'けいけん',romaji:'keiken',meaning:'experience',hint:'What you gain by doing something over time',level:3,sentence:'仕事の経験が大切だ。',sentenceEn:'Work experience is important.'},
  {word:'意味',reading:'いみ',romaji:'imi',meaning:'meaning / significance',hint:'What a word or action conveys',level:3,sentence:'この言葉の意味を教えてください。',sentenceEn:'Please tell me the meaning of this word.'},
  {word:'理由',reading:'りゆう',romaji:'riyuu',meaning:'reason / cause',hint:'The explanation behind a decision',level:3,sentence:'会社を辞めた理由を話す。',sentenceEn:'I explain the reason I quit the company.'},
  {word:'約束',reading:'やくそく',romaji:'yakusoku',meaning:'promise / appointment',hint:'An agreement made between people',level:3,sentence:'友達との約束を守る。',sentenceEn:'I keep my promise to my friend.'},
  {word:'問題',reading:'もんだい',romaji:'mondai',meaning:'problem / issue',hint:'Something that needs to be solved',level:3,sentence:'この問題はむずかしい。',sentenceEn:'This problem is difficult.'},
  {word:'感情',reading:'かんじょう',romaji:'kanjou',meaning:'emotion / feeling',hint:'An inner state like joy, anger, or sadness',level:3,sentence:'感情を言葉で表す。',sentenceEn:'I express my feelings in words.'},
  {word:'関係',reading:'かんけい',romaji:'kankei',meaning:'relationship / connection',hint:'The link between people or things',level:3,sentence:'二人の関係は深い。',sentenceEn:'The relationship between the two is deep.'},
  {word:'機会',reading:'きかい',romaji:'kikai',meaning:'opportunity / chance',hint:'A favorable moment for action',level:3,sentence:'この機会を逃したくない。',sentenceEn:"I don't want to miss this opportunity."},
  {word:'努力',reading:'どりょく',romaji:'doryoku',meaning:'effort / hard work',hint:'Sustained energy toward a goal',level:3,sentence:'努力すれば夢は叶う。',sentenceEn:'If you work hard, dreams come true.'},
  {word:'成功',reading:'せいこう',romaji:'seikou',meaning:'success',hint:'Achieving what you set out to do',level:3,sentence:'彼のプロジェクトは成功した。',sentenceEn:'His project was a success.'},
  {word:'失敗',reading:'しっぱい',romaji:'shippai',meaning:'failure / mistake',hint:'Opposite of 成功',level:3,sentence:'失敗から学ぶことが大切だ。',sentenceEn:'It is important to learn from failure.'},
  {word:'危険',reading:'きけん',romaji:'kiken',meaning:'danger / risk',hint:'Opposite of 安全',level:3,sentence:'あの道は危険だ。',sentenceEn:'That road is dangerous.'},
  {word:'安全',reading:'あんぜん',romaji:'anzen',meaning:'safety / safe',hint:'Opposite of 危険',level:3,sentence:'安全な場所に逃げる。',sentenceEn:'I escape to a safe place.'},
  {word:'文化',reading:'ぶんか',romaji:'bunka',meaning:'culture',hint:'The customs, arts, and values of a society',level:3,sentence:'日本の文化はとても面白い。',sentenceEn:'Japanese culture is very interesting.'},
  {word:'伝統',reading:'でんとう',romaji:'dentou',meaning:'tradition',hint:'Customs passed down through generations',level:3,sentence:'日本の伝統を守りたい。',sentenceEn:'I want to preserve Japanese traditions.'},
  {word:'社会',reading:'しゃかい',romaji:'shakai',meaning:'society',hint:'The community of people living together',level:3,sentence:'社会のルールを守る。',sentenceEn:'I follow the rules of society.'},
  {word:'自然',reading:'しぜん',romaji:'shizen',meaning:'nature',hint:'Mountains, rivers, forests, the outdoors',level:3,sentence:'自然の中で休む。',sentenceEn:'I rest in nature.'},
  {word:'記念',reading:'きねん',romaji:'kinen',meaning:'commemoration / memory',hint:'Marking a special occasion or anniversary',level:3,sentence:'記念写真を撮る。',sentenceEn:'I take a commemorative photo.'},
  {word:'将来',reading:'しょうらい',romaji:'shouurai',meaning:'future / prospects',hint:'What lies ahead for a person',level:3,sentence:'将来は医者になりたい。',sentenceEn:'In the future, I want to become a doctor.'},
  {word:'気持ち',reading:'きもち',romaji:'kimochi',meaning:'feeling / mood',hint:'Your emotional or physical sensation right now',level:3,sentence:'今日は気持ちがいい。',sentenceEn:'I feel good today.'},
];

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
const LEVELS=[
  {name:'Beginner',    label:'Level 1',xpNeeded:0},
  {name:'Elementary',  label:'Level 2',xpNeeded:50},
  {name:'Intermediate',label:'Level 3',xpNeeded:150},
  {name:'Advanced',    label:'Level 4',xpNeeded:300},
  {name:'Master',      label:'Level 5',xpNeeded:500},
];
let state={mode:'hiragana',difficulty:1,questionCount:10,xp:0,totalQuizzes:0,bestScore:null,currentStreak:0,deck:[],currentIndex:0,score:0,missedCards:[],quizEnded:false};

function save(){try{localStorage.setItem('jpfc3',JSON.stringify({xp:state.xp,totalQuizzes:state.totalQuizzes,bestScore:state.bestScore,currentStreak:state.currentStreak,mode:state.mode,difficulty:state.difficulty,questionCount:state.questionCount}));}catch(e){}}
function load(){try{const d=JSON.parse(localStorage.getItem('jpfc3')||'{}');if(d.xp!==undefined)state.xp=d.xp;if(d.totalQuizzes!==undefined)state.totalQuizzes=d.totalQuizzes;if(d.bestScore!==undefined)state.bestScore=d.bestScore;if(d.currentStreak!==undefined)state.currentStreak=d.currentStreak;if(d.mode)state.mode=d.mode;if(d.difficulty)state.difficulty=d.difficulty;if(d.questionCount)state.questionCount=d.questionCount;}catch(e){}}

function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function getCurrentLevel(){let lv=0;for(let i=LEVELS.length-1;i>=0;i--){if(state.xp>=LEVELS[i].xpNeeded){lv=i;break;}}return lv;}

function getDeck(){
  if(state.mode==='words'){return shuffle(WORDS.filter(w=>w.level<=state.difficulty)).slice(0,state.questionCount);}
  let pool=state.mode==='hiragana'?HIRAGANA:state.mode==='katakana'?KATAKANA:KANJI;
  if(state.difficulty===1)pool=pool.slice(0,Math.min(25,pool.length));
  else if(state.difficulty===2)pool=pool.slice(0,Math.min(46,pool.length));
  return shuffle(pool).slice(0,state.questionCount);
}

let fullPool=[];
function getChoices(card){
  if(state.mode==='words'){const w=shuffle(fullPool.filter(x=>x.word!==card.word&&x.meaning!==card.meaning));return shuffle([card,w[0],w[1]]);}
  const w=shuffle(fullPool.filter(x=>x.char!==card.char));
  return shuffle([card,w[0],w[1]]);
}

function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}

function renderHome(){
  document.querySelectorAll('.mode-btn').forEach(b=>b.classList.toggle('selected',b.dataset.mode===state.mode));
  const isW=state.mode==='words';
  const dl=isW?['N5 Basic','N5 + N4','N5 – N3']:['Basic','Mixed','All chars'];
  ['diff-badge-1','diff-badge-2','diff-badge-3'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=dl[i];});
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.toggle('selected',Number(b.dataset.diff)===state.difficulty));
  document.querySelectorAll('.count-btn').forEach(b=>b.classList.toggle('selected',Number(b.dataset.count)===state.questionCount));
  const lv=getCurrentLevel();
  document.getElementById('home-level-name').textContent=LEVELS[lv].name;
  document.getElementById('home-level-num').textContent=LEVELS[lv].label;
  document.getElementById('stat-total-quizzes').textContent=state.totalQuizzes;
  document.getElementById('stat-best-score').textContent=state.bestScore!==null?state.bestScore+'%':'—';
  document.getElementById('stat-streak').textContent=state.currentStreak;
}

function startQuiz(){
  fullPool=state.mode==='hiragana'?HIRAGANA:state.mode==='katakana'?KATAKANA:state.mode==='kanji'?KANJI:WORDS;
  state.deck=getDeck();state.currentIndex=0;state.score=0;state.missedCards=[];state.quizEnded=false;
  showScreen('screen-quiz');renderQuestion();
}

function renderQuestion(){
  const card=state.deck[state.currentIndex];
  const total=state.deck.length;
  const isW=state.mode==='words';
  document.getElementById('quiz-meta').textContent=`Question ${state.currentIndex+1} of ${total}`;
  document.getElementById('live-score').textContent=state.score;
  document.getElementById('progress-fill').style.width=((state.currentIndex/total)*100)+'%';
  const badges={hiragana:'Hiragana',katakana:'Katakana',kanji:'Kanji',words:'Vocabulary'};
  document.getElementById('card-type-badge').textContent=badges[state.mode]||state.mode;
  const charEl=document.getElementById('card-character');
  charEl.classList.add('flip-out');
  setTimeout(()=>{
    charEl.textContent=isW?card.word:card.char;
    charEl.classList.toggle('word-mode',isW);
    charEl.classList.remove('flip-out');
    charEl.classList.add('flip-in');
    setTimeout(()=>charEl.classList.remove('flip-in'),400);
  },180);
  document.getElementById('card-reading').textContent=isW?`${card.reading}  /${card.romaji}/`:'';
  document.getElementById('card-hint').textContent=isW?'What is the English meaning?':state.mode==='kanji'?'What is the reading / meaning?':'What is the romaji reading?';
  const hintBtn=document.getElementById('btn-hint');
  const hintReveal=document.getElementById('hint-reveal');
  hintBtn.classList.toggle('visible',isW);
  hintBtn.textContent='💡 Show Hint';
  hintReveal.textContent='';
  document.getElementById('sentence-block').classList.remove('show');
  document.getElementById('choices-grid').classList.toggle('word-choices',isW);
  const choices=getChoices(card);
  choices.forEach((ch,i)=>{
    const btn=document.getElementById('choice-'+i);
    btn.className='choice-btn';btn.disabled=false;
    document.getElementById('cjp-'+i).textContent='';
    const romEl=document.getElementById('crom-'+i);
    if(isW){romEl.textContent=ch.meaning;btn.dataset.correct=(ch.word===card.word)?'1':'0';}
    else if(state.mode==='kanji'){romEl.textContent=ch.romaji+' · '+ch.meaning;btn.dataset.correct=(ch.char===card.char)?'1':'0';}
    else{romEl.textContent=ch.romaji;btn.dataset.correct=(ch.char===card.char)?'1':'0';}
  });
  document.getElementById('feedback').className='feedback';
  document.getElementById('btn-next').classList.remove('show');
}

function handleChoice(btn){
  if(btn.disabled)return;
  document.querySelectorAll('.choice-btn').forEach(b=>b.disabled=true);
  const isCorrect=btn.dataset.correct==='1';
  const card=state.deck[state.currentIndex];
  if(isCorrect){btn.classList.add('correct');state.score++;showFeedback(true,card);}
  else{btn.classList.add('wrong');document.querySelectorAll('.choice-btn').forEach(b=>{if(b.dataset.correct==='1')b.classList.add('correct');});state.missedCards.push(card);showFeedback(false,card);}
  document.getElementById('live-score').textContent=state.score;
  document.getElementById('btn-next').classList.add('show');
}

function showFeedback(correct,card){
  const fb=document.getElementById('feedback');
  const isW=state.mode==='words';
  if(correct){
    fb.className='feedback correct-fb show';
    document.getElementById('fb-icon').textContent='✓';
    document.getElementById('fb-main').textContent='Correct!';
    document.getElementById('fb-answer').textContent=isW?`${card.word} = ${card.meaning}`:'';
  }else{
    fb.className='feedback wrong-fb show';
    document.getElementById('fb-icon').textContent='✗';
    document.getElementById('fb-main').textContent='Incorrect';
    if(isW)document.getElementById('fb-answer').textContent=`Answer: ${card.word} (${card.reading}) = ${card.meaning}`;
    else if(state.mode==='kanji')document.getElementById('fb-answer').textContent=`Answer: ${card.char} = ${card.romaji} · ${card.meaning}`;
    else document.getElementById('fb-answer').textContent=`Answer: ${card.char} = ${card.romaji}`;
  }
  if(isW){
    document.getElementById('sentence-jp').textContent=card.sentence;
    document.getElementById('sentence-en').textContent=card.sentenceEn;
    document.getElementById('sentence-block').classList.add('show');
    document.getElementById('hint-reveal').textContent='';
    document.getElementById('btn-hint').textContent='💡 Show Hint';
  }
}

function nextQuestion(){
  state.currentIndex++;
  if(state.currentIndex>=state.deck.length||state.quizEnded)endQuiz();
  else renderQuestion();
}

function endQuiz(force=false){
  state.quizEnded=true;
  const answered=force?state.currentIndex:state.deck.length;
  const correct=state.score;
  const pct=answered>0?Math.round((correct/answered)*100):0;
  const xpGain=correct*3+(pct>=80?10:0);
  const prevLv=getCurrentLevel();
  state.xp+=xpGain;
  const newLv=getCurrentLevel();
  state.totalQuizzes++;
  if(state.bestScore===null||pct>state.bestScore)state.bestScore=pct;
  if(pct>=70)state.currentStreak++;else state.currentStreak=0;
  save();
  showScreen('screen-results');
  let jp='🎌',title='',sub='';
  if(pct===100){jp='完璧';title='Perfect!';sub='Flawless score — excellent work!';}
  else if(pct>=80){jp='優秀';title='Excellent!';sub='Great performance. Keep it up!';}
  else if(pct>=60){jp='良い';title='Good Job!';sub='Solid effort. Review your misses.';}
  else if(pct>=40){jp='頑張';title='Keep Going!';sub='Practice the missed items.';}
  else{jp='練習';title='Keep Practicing';sub='Review the basics and try again!';}
  document.getElementById('result-jp').textContent=jp;
  document.getElementById('result-title').textContent=title;
  document.getElementById('result-sub').textContent=sub;
  document.getElementById('res-correct').textContent=correct;
  document.getElementById('res-wrong').textContent=answered-correct;
  document.getElementById('res-total').textContent=answered;
  document.getElementById('score-pct').textContent=pct+'%';
  setTimeout(()=>{document.getElementById('score-ring-fill').style.strokeDashoffset=326.7-(pct/100)*326.7;},100);
  document.getElementById('result-grade').innerHTML=`You got <strong>${correct} of ${answered}</strong> correct, earning <strong>+${xpGain} XP</strong>.`;
  const lvBanner=document.getElementById('level-up-banner');
  if(newLv>prevLv){lvBanner.classList.add('show');document.getElementById('level-up-text').textContent=`⭐ Level Up! You are now ${LEVELS[newLv].name}`;document.getElementById('level-up-sub').textContent=`${LEVELS[newLv].label} unlocked — harder content awaits!`;}
  else lvBanner.classList.remove('show');
  const missedSec=document.getElementById('missed-section');
  const missedList=document.getElementById('missed-list');
  missedList.innerHTML='';
  if(state.missedCards.length>0){
    missedSec.style.display='';
    state.missedCards.slice(0,12).forEach(card=>{
      const div=document.createElement('div');div.className='missed-item';
      if(state.mode==='words')div.innerHTML=`<span class="missed-char">${card.word}</span><div class="missed-info"><strong>${card.reading}</strong> /${card.romaji}/<br>${card.meaning}</div>`;
      else div.innerHTML=`<span class="missed-char">${card.char}</span><div class="missed-info"><strong>${card.romaji}</strong>${card.meaning?'<br>'+card.meaning:''}</div>`;
      missedList.appendChild(div);
    });
  }else missedSec.style.display='none';
}

// ═══════════════════════════════════════════════════
// TTS
// ═══════════════════════════════════════════════════
const tts=(()=>{
  if(!('speechSynthesis' in window))return{speak:()=>{}};
  let voice=null;
  function pick(){const v=speechSynthesis.getVoices();const jp=v.filter(x=>x.lang.startsWith('ja'));voice=jp.find(x=>/female|kyoko|haruka|mizuki|hana|f0|woman/i.test(x.name))||jp[0]||null;}
  pick();speechSynthesis.addEventListener('voiceschanged',pick);
  function speak(text){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.rate=0.88;u.pitch=1.1;if(voice)u.voice=voice;speechSynthesis.speak(u);}
  return{speak};
})();

// ═══════════════════════════════════════════════════
// EVENTS
// ═══════════════════════════════════════════════════
document.querySelectorAll('.mode-btn').forEach(btn=>{btn.addEventListener('click',()=>{state.mode=btn.dataset.mode;renderHome();save();});});
document.querySelectorAll('.diff-btn').forEach(btn=>{btn.addEventListener('click',()=>{state.difficulty=Number(btn.dataset.diff);renderHome();save();});});
document.querySelectorAll('.count-btn').forEach(btn=>{btn.addEventListener('click',()=>{state.questionCount=Number(btn.dataset.count);renderHome();save();});});
document.getElementById('btn-start').addEventListener('click',startQuiz);
document.getElementById('btn-hint').addEventListener('click',()=>{
  const card=state.deck[state.currentIndex];if(!card)return;
  const rev=document.getElementById('hint-reveal');const btn=document.getElementById('btn-hint');
  if(rev.textContent){rev.textContent='';btn.textContent='💡 Show Hint';}
  else{rev.textContent=card.hint;btn.textContent='Hide Hint';}
});
document.querySelectorAll('.choice-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=state.deck[state.currentIndex];
    if(card)tts.speak(state.mode==='words'?card.word:card.char);
    handleChoice(btn);
  });
});
document.getElementById('btn-next').addEventListener('click',nextQuestion);
document.getElementById('btn-end-quiz').addEventListener('click',()=>{if(confirm('End the quiz early and see results?'))endQuiz(true);});
document.getElementById('btn-retry').addEventListener('click',startQuiz);
document.getElementById('btn-home').addEventListener('click',()=>{renderHome();showScreen('screen-home');});

// INIT
load();renderHome();
