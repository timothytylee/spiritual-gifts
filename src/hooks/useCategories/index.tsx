import { useMemo } from "react";

export type CategoryName =
  | "Wisdom 智慧"
  | "Administration 管理"
  | "Apostleship 使徒"
  | "Craftsmanship 工藝"
  | "Creative Communication 創意交流"
  | "Discernment 辨別"
  | "Encouragement 鼓勵"
  | "Evangelism 傳福音"
  | "Faith 信心"
  | "Giving 奉獻"
  | "Helps 幫助"
  | "Hospitality 好客"
  | "Intercession 代禱"
  | "Knowledge 知識"
  | "Leadership 領導"
  | "Mercy 憐憫"
  | "Prophecy 預言"
  | "Shepherding 牧養"
  | "Teaching 教導";

export interface Category {
  name: CategoryName;
  description: JSX.Element;
  shortName: string;
}

const Verse = ({ verse }: { verse: string }) => (
  <a
    href={`https://www.biblegateway.com/passage/?search=${verse}&version=NASB`}
    rel="noreferrer noopener"
    target="_blank"
  >
    {verse}
  </a>
);

const useCategories = (): Category[] =>
  useMemo<Category[]>(
    () =>
      (
        [
          {
            name: "Wisdom 智慧",
            description: (
              <div>
                <p>
                  The spiritual capability to apply spiritual knowledge
                  effectively. (<Verse verse="1 Corinthians 12:8" />)
                  這有效地應用精神知識的精神能力。
                </p>
                <p>
                  Distinctives: A person with this gift enjoys skillfully
                  applying biblical knowledge to a variety of life situations.
                  They seem to have more common sense than the average person.
                  獨特的：有這個禮物的人巧妙地享受
                  將聖經知識應用於各種生活狀況。 他們似乎比普通人更常識。
                </p>
                <p>
                  Cautions: For God's knowledge to go out, it must first come
                  in. Don't sit on your Bible knowledge as though you "have
                  enough." This gift of wisdom has greater impact as your
                  knowledge of God's Word grows and as you become more involved
                  in other people's lives. 注意：為了上帝的知識去
                  出來，它必須首先進來。不要坐在你的聖經知識上
                  好像您“有夠”。這種智慧的恩賜有更大的
                  隨著您對上帝聖言的了解的影響，隨著您的發展
                  更多參與別人的生活。
                </p>
              </div>
            ),
          },
          {
            name: "Administration 管理",
            description: (
              <div>
                <p>
                  The spiritual capability to understand what makes an
                  organization function, and the special ability to plan and
                  execute procedures that increase the church's organizational
                  effectiveness. (<Verse verse="1 Corinthians 12:28" />) 這
                  精神能力了解是什麼使組織 功能以及計劃和執行的特殊能力
                  增加教會組織的程序 效力。
                </p>
                <p>
                  Distinctives: A person with this gift understands the
                  practical steps that need to be taken in order to realize a
                  given objective. Gifted administrators are committed to
                  effectiveness and efficiency. They can look at a situation and
                  bring order to chaos, keeping the overall picture in mind.
                  Administrators are needed who can "steward" the resources of
                  the local church. These resources include money, buildings,
                  staff, and volunteers. Though a person with this gift is
                  mostly behind the scenes, they enable the "up front"
                  ministries and gifts to be more efficient and effective.
                  獨特的：有這份恩賜的人了解 為了實現一個需要採取的實用步驟
                  給定目標。有天賦的管理員致力於
                  有效性和效率。他們可以看一下情況
                  將命令帶到混亂，請記住整體情況。 需要管理員可以“管家”
                  當地教會。這些資源包括金錢，建築物，
                  員工和志願者。雖然有這個恩賜的人是 它們大多在幕後，使“前面”
                  部委和恩賜更有效。
                </p>
                <p>
                  Cautions: If you have this gift, be careful that you don't
                  stifle the activity of the Holy Spirit in your own life. Good
                  administrators are willing to make a course change if the
                  leadership calls for a shift in plans. This requires a
                  submissive spirit to leadership. There is a danger among
                  administrative people to "use" others to reach a goal. Don't
                  merely strive for the ends; appreciate what God wants to do
                  through the means. Remember that all people are in a process.
                  注意：如果您有這個恩賜，請注意不要
                  扼殺聖靈在你自己的生活中的活動。好的
                  管理人員願意改變課程，如果 領導層要求改變計劃。這需要一個
                  順從的精神對領導力。中間有危險
                  行政人員“使用”其他人實現目標。不
                  只是為了努力而努力；欣賞上帝想要做的
                  通過手段。請記住，所有人都在過程中。
                </p>
              </div>
            ),
          },
          {
            name: "Apostleship 使徒",
            description: (
              <div>
                <p>
                  The spiritual capability to start churches and oversee their
                  development. (<Verse verse="1 Corinthians 12:28" />;{" "}
                  <Verse verse="Ephesians 4:11" />) 精神能力
                  開始教堂並監督他們的發展。
                </p>
                <p>
                  Distinctives: Likened to modern day missionaries, a person
                  with this gift has a heart to preach the gospel to people in a
                  different cultural setting who haven't heard the Gospel. They
                  have a desire to go across cultures and may enjoy starting new
                  churches. "Cross-cultural" work can include inner city or
                  international ministries. The authority of the apostle is
                  based on the Word and the body of believers that sends them
                  out. 獨特的：比作現代傳教士 有這個禮物的人有一顆言傳福音
                  在不同文化環境中的人們沒有聽到
                  福音。他們渴望遍及文化，可能會喜歡
                  開始新教堂。“跨文化”工作可以包括內心 城市或國際部。使徒的權威
                  基於寄給他們的聖言和信徒的身體 出去。
                </p>
                <p>
                  Cautions: You may desire to cut a new path before you are
                  ready to move away from your present ministry efforts. Make
                  certain that there are appropriate provisions for the people
                  that God has entrusted you in your present ministry. 警告：
                  您可能希望在準備移動之前剪一條新路 遠離您目前的事工努力。確定
                  上帝有適當的規定 將您委託給您現在的事工。
                </p>
              </div>
            ),
          },
          {
            name: "Craftsmanship 工藝",
            description: (
              <div>
                <p>
                  The spiritual capability to enhance ministry through the
                  creative construction of necessary tools for ministry. (
                  <Verse verse="Exodus 31" />) 精神能力
                  通過創造性的結構來增強事工的必要工具。
                </p>
                <p>
                  Distinctives: A person with this gift is a hands-on person. He
                  or she may be a builder, architect, designer; someone who
                  enhances ministry by his other unique skills. The gift can be
                  expressed in carpentry, metalworking, and other constructive
                  skills. 獨特的人：有這個恩賜的人是一次實踐
                  人。他或她可能是建築商，建築師，設計師；
                  通過他的其他獨特技能來增強事工的人。這
                  禮物可以用木工，金屬加工和其他 建設性技能。
                </p>
                <p>
                  Cautions: If you have this gift, don't belittle your
                  contribution as insignificant or not spiritual because it's so
                  tangible. Don't separate your opportunities to personally
                  minister to people from the ministry project that you're
                  working on. 注意：如果您有這個恩賜，請不要貶低
                  您的貢獻無關緊要，或者不是精神上的，因為
                  這是如此的切實。不要分開您的機會 親自向事工項目中的人員部長
                  您正在努力。
                </p>
              </div>
            ),
          },
          {
            name: "Creative Communication 創意交流",
            description: (
              <div>
                <p>
                  The spiritual capability to communicate God's truth through a
                  variety of art forms. (The Holy Spirit's expression is in
                  various forms in the Bible - poetry, song, narrative, parable,
                  metaphor, etc.)
                  傳達上帝的精神能力通過各種藝術形式的真理。（聖靈的表達在聖經中以各種形式
                  - 詩歌，歌曲， 敘事，寓言，隱喻等）
                </p>
                <p>
                  Distinctives: A person with this gift is very creative and
                  imaginative. This person is able to communicate truths in
                  unique ways from a variety of angles. They tend to be visual
                  thinkers. Areas of ministry include programming, sound,
                  lighting, video, drama, music, etc. Public announcements of
                  events may be an application, with the ability to design
                  attractive and catchy flyers to attract more people to events.
                  獨特的：有這個禮物的人非常有創造力，想像力。這個人能夠在獨特的方式從各種角度。他們傾向於視覺思想家。事工領域包括編程，聲音，照明，視頻，戲劇，音樂等事件可能是一個應用程序，具有設計能力有吸引力和吸引人的傳單，以吸引更多人參加活動。
                </p>
                <p>
                  Cautions: Be careful not to be artsy for art's sake. Use your
                  gift to promote God and his kingdom, not yourself. Creative
                  communicators stray when they try to create and do things that
                  enamor people with the art form and the artist rather than the
                  message.
                  注意事項：請注意不要為了藝術而成為藝術。用你的禮物來促進上帝和他的王國，而不是你自己。創造性傳播者試圖創建和做以藝術形式和藝術家迷戀的事物而不是消息。
                </p>
                <p>
                  Creative communicators need to be flexible and willing to
                  submit to the wishes of the people around them. Sometimes they
                  aren't team players. This is an area that God will address.
                  The fact that you have visible talents where others don't does
                  not mean you should have full say in music, drama, or other
                  artistic areas.
                  創意溝通者需要靈活，並且願意屈服於周圍的人們的意願。有時他們不是團隊球員。這是上帝將解決。您有明顯才能的事實其他並不意味著您應該在音樂中充滿意見，戲劇或其他藝術領域。
                </p>
              </div>
            ),
          },
          {
            name: "Discernment 辨別",
            description: (
              <div>
                <p>
                  The spiritual capability to distinguish between truth and
                  error, and to identify deception in character and in
                  relationships. (
                  <Verse verse="1 Corinthians 12:10" />, "distinguishing between
                  spirits.")
                  區分的精神能力真相和錯誤，並確定角色和中的欺騙關係。
                </p>
                <p>
                  Distinctives: Discernment is a keen sense of insight that
                  enables someone to recognize potential or actual problems in
                  relationships, imbalance in teachings, the presence of demonic
                  activity, or misuse of scripture. Discernment must be based on
                  knowing Biblical truth. Once this person knows the truth, they
                  can clearly pick out problems or important steps that need to
                  be taken.
                </p>
                <p>
                  Cautions: Many of us have known people that are very
                  discerning and perhaps gifted, but what they do with that
                  discernment is far from God's will. They have great insight,
                  but then take on the role of the Holy Spirit to expose and
                  correct problems in the other person's life on their own time
                  schedule. If you have this gift, learn to use it skillfully by
                  seeking help from others who are gifted in wisdom, counseling,
                  and shepherding.
                </p>
              </div>
            ),
          },
          {
            name: "Encouragement",
            description: (
              <div>
                <p>
                  The spiritual capability to reassure, strengthen, and affirm
                  those who are discouraged or wavering in their faith. (
                  <Verse verse="Romans 12:8" />)
                </p>
                <p>
                  Distinctives: A person with this gift urges others to apply
                  the truth in their lives; it is not just a gift of
                  friendliness and back-slapping. This person is able to get
                  alongside wavering or discouraged people and effectively
                  challenge them to be all they can be spiritually. When you are
                  around these people, you feel like keeping on track and
                  continuing to fight the good fight.
                </p>
                <p>
                  This person tends to be very positive, full of faith,
                  reassuring to the unstable. They also tend to be
                  results-oriented, concerned with consistency of practice with
                  profession, very practical and pragmatic ("What works?"). They
                  tend to be expressive and are often viewed as an "emoter" by
                  other people. Encouragers understand the importance of
                  emotions, but are concerned with knowing and doing God's will
                  as well.
                </p>
                <p>
                  Cautions: If you have this gift, you may tend to make things
                  too simple. For example, when someone is hurting, quoting{" "}
                  <Verse verse="Romans 8:28" />
                  ("and we know that God causes all things to work together for
                  good to those who love God, to those who are called according
                  to His purpose") is too simple. This is a great truth but
                  encouragement in a person's walk at that moment may not be
                  what's needed. The individual may simply need your company.
                </p>
                <p>
                  Your optimism can make others feel as if you haven't really
                  connected; it makes them wonder if you really understand. Take
                  time to learn about what they're going through before helping
                  to build them up.
                </p>
              </div>
            ),
          },
          {
            name: "Evangelism",
            description: (
              <div>
                <p>
                  The spiritual capability to effectively communicate the
                  message of Christ to non-Christians so they can respond in
                  faith and move toward discipleship. (
                  <Verse verse="Ephesians 4:11" />)
                </p>
                <p>
                  Distinctives: A person with this gift has a strong desire to
                  turn conversations to spiritual matters and has an instinctive
                  ability to do this. The evangelist's desire to share the
                  Gospel with non-believers is often greater than being involved
                  with the grounding and discipleship of believers.
                </p>
                <p>
                  All Christians are called to witness to non-believers (
                  <Verse verse="1 Peter 3:15" />
                  ). The non-gifted "witnesser" will probably see fewer results
                  and be less "at home" sharing the Gospel than a gifted
                  evangelist.
                </p>
                <p>
                  Cautions: Avoid stereotypes (as with all the gifts) as to the
                  environment or ministry in which this would be used. Most
                  people won't be knocking on doors or using cold-medium
                  evangelism. Don't be satisfied with just one approach. Be
                  willing to read about evangelism and talk with other
                  Christians about their approach so that God can develop your
                  gift, using it in a variety of ways. Be careful that a
                  critical spirit doesn't emerge because other believers aren't
                  speaking to three to five people per week - that is gift
                  projection. You can be hard on others when you don't see them
                  expressing themselves with the same intensity in the areas
                  that you've been gifted.
                </p>
              </div>
            ),
          },
          {
            name: "Faith",
            description: (
              <div>
                <p>
                  The spiritual capability to trust God's will and act on it
                  with unwavering belief in His ability. (
                  <Verse verse="1 Corinthians 12:9" />)
                </p>
                <p>
                  Distinctives: This gift is often expressed in a strong prayer
                  life. A person with this gift lives in constant awareness of
                  the reality of the supernatural as well as the natural. This
                  person is certain that God will bring to pass what He promises
                  and is therefore reliable during trials. He or she can also
                  help others see God working in trials.
                </p>
                <p>
                  Cautions: Remember that faith is active. It isn't only God's
                  work; we must be willing to obey His commands. God works
                  through people in reaching the lost and in helping Christians
                  grow. If you have this gift, you might look and critique your
                  group, asking, "Why doesn't our group have the vitality I read
                  about in <Verse verse="Acts 2" />? Is it because the Spirit is
                  different or absent?" Recognize that God is at work in all
                  churches and that human action does matter.
                </p>
              </div>
            ),
          },
          {
            name: "Giving",
            description: (
              <div>
                <p>
                  The spiritual capability to contribute money and material
                  resources to the work of the Lord with cheerfulness and
                  liberality. (<Verse verse="Romans 12:8" />)
                </p>
                <p>
                  Distinctives: God has given the person with this gift the
                  ability to give well beyond normal levels, either through
                  wealth or faith. God has often blessed this person with
                  financial ability through increased income or other means in
                  order to build up the Kingdom of God. Serving others this way
                  causes a sense of joy, a sense of confidence in leadership and
                  a desire to encourage that ministry in others and do it with
                  liberality. All Christians are called to give, but some are
                  compelled to give much more. The gifted giver is often asking,
                  "How can I free up the most amount of resources to maximize
                  their potential for kingdom use?" Often gifted givers try to
                  help others to see success in their own financial stewardship.
                </p>
                <p>
                  Cautions: If you have this gift, you might not see it as a
                  spiritual ministry. Since all Christians are called to give,
                  you may believe that you're only doing a perfunctory, mandated
                  service. Or you may think that giving money is too tangible to
                  be a spiritual gift. Realize that financial resources are
                  necessary in ministry to bring the lost to Christ. Be careful
                  that you don't inadvertently use resources for "personal
                  agenda" giving within the church. Allow the leadership to
                  dispense those resources as it sees fit. Be a generous giver
                  and stimulate others to give.
                </p>
              </div>
            ),
          },
          {
            name: "Helps",
            description: (
              <div>
                <p>
                  The spiritual ability to attach spiritual value to the
                  accomplishment of practical and necessary tasks which support
                  the body of Christ. (<Verse verse="Romans 12:7" />;{" "}
                  <Verse verse="1 Corinthians 12:28" />)
                </p>
                <p>
                  Distinctives: A person with this gift sees the spiritual value
                  of and finds God's purposes in the practical aspects of
                  ministry and living. Someone with this gift might help to
                  maintain a facility or assist a teacher with some household
                  task to free him or her up for study.
                </p>
                <p>
                  The gift of helps is a tangible expression of what the
                  non-believing world rejects - helping others for the sheer
                  satisfaction of helping. A person with this gift edifies the
                  body of Christ by supporting others in their pursuit of
                  ministry. Like our Helper, the Holy Spirit, gifted helpers
                  derive enjoyment out of serving others.
                </p>
                <p>
                  Cautions: If you have this gift, you may often need help from
                  the leadership to see clearly what will be most supportive for
                  the church. You may also struggle with false humility. Because
                  the effects are less dramatic and tangible, the tendency is to
                  undermine the spiritual significance of your gift. The
                  challenge is to think through your acts of service beyond
                  their functional end. (For example, an individual helping
                  clean walls and painting in a home to get ready for Home
                  Church.)
                </p>
              </div>
            ),
          },
          {
            name: "Hospitality",
            description: (
              <div>
                <p>
                  The spiritual capability to personally care for people by
                  providing fellowship, food, or shelter. (
                  <Verse verse="1 Peter 4:9" />)
                </p>
                <p>
                  Distinctives: A person with this gift enjoys providing a
                  caring, warm atmosphere for those whom God is calling to the
                  church. They have an ability to connect with people; they
                  provide environments where people feel welcome. This person
                  tends to gravitate toward those who are standing off to the
                  side, looking confused. A good host loves to have people to
                  their home and is more preoccupied with the comfort of others
                  than the image of their home. This gift is especially needed
                  in a large church. One of the more frequent questions asked by
                  newer people is, "Can a church this size care for me
                  personally?"
                </p>
                <p>
                  People with the gift of hospitality can have incredible impact
                  on children. As someone with this gift opens up their house
                  for others, their children see the value of fellowship and
                  using material blessings as a stewardship for the Lord's work.
                  Of course this doesn't mean that they never get time alone
                  with their family at home.
                </p>
                <p>
                  Cautions: If you have this gift, the challenge is to serve
                  without complaint. Struggles with materialism can suppress the
                  expression of this gift. It can be difficult and tiresome at
                  times. Regularly reflect on the contribution you are making to
                  the work of Christ.
                </p>
              </div>
            ),
          },
          {
            name: "Intercession",
            description: (
              <div>
                <p>
                  The divine enablement to consistently pray on behalf of and
                  for others, seeing frequent and specific results. (
                  <Verse verse="Romans 8:26-27" />;{" "}
                  <Verse verse="John 17:9-26" />)
                </p>
                <p>
                  Distinctives: A person with this gift feels compelled to
                  earnestly pray on behalf of someone or a cause. They have a
                  daily awareness of spiritual battles being waged and are
                  convinced God moves in direct response to prayer. They pray in
                  response to the leading of the Spirit.
                </p>
                <p>
                  Cautions: This person should avoid feeling his/her gifts is
                  not valued and should avoid using prayer as an escape from
                  fulfilling responsibilities. They will need to avoid a
                  “holier-than-thou” attitude sometimes caused by extended time
                  of prayer and spiritual intimacy with God.
                </p>
              </div>
            ),
          },
          {
            name: "Knowledge",
            description: (
              <div>
                <p>
                  The divine empowerment to accumulate and analyze information
                  effectively. (<Verse verse="1 Corinthians 12:8" />)
                </p>
                <p>
                  Distinctives: A person with this gift enjoys studying, doing
                  research, and digging for nuggets of truth. They like to
                  assess and accumulate information, facts, and data. They are
                  great helpers for teachers and Word-oriented programs. "Word
                  of Knowledge" indicates that they can communicate that truth
                  as well, even if not through a teaching or prophetic gift.
                </p>
                <p>
                  Cautions: If you have this gift, watch for a tendency to be
                  reclusive. You will have to balance time alone studying with
                  pursuit of close relationships.
                </p>
              </div>
            ),
          },
          {
            name: "Leadership",
            description: (
              <div>
                <p>
                  The spiritual capability to instill vision, to motivate, and
                  to direct people to accomplish the work of the ministry. (
                  <Verse verse="Romans 12:8" />)
                </p>
                <p>
                  Distinctives: A person with this gift is a "goal setter" in
                  the church. They often sense the direction in which God wants
                  to move the body of Christ. They can then motivate people to
                  move in that direction. Gifted leaders think about and
                  communicate the potential they see in other people. This gift
                  is needed in any effective ministry.
                </p>
                <p>
                  Cautions: Realize that good relationships give leaders
                  credibility. People need to have the sense that you have their
                  best interest at heart, that you walk with God and that the
                  vision you have is not of your own concoction. This gift will
                  be proven over time; there needs to be proven faithfulness
                  here. Leaders need the ability to keep moving in the face of
                  put-downs and doubt. Because this is a very visible gift with
                  lots of feedback being given, you'll have to be keenly aware
                  of your motivations for service. You will be tested in this
                  area through success as well as failure. God will want to help
                  you become consistent and diligent in either situation,
                  relying on Him. There may be a strong tendency to draw people
                  to you rather than to God. Remember that all have a sphere of
                  influence and you can take a leadership position without this
                  gift.
                </p>
              </div>
            ),
          },
          {
            name: "Mercy",
            description: (
              <div>
                <p>
                  The spiritual capability to minister cheerfully and
                  appropriately to people who are suffering. (
                  <Verse verse="Romans 12:8" />)
                </p>
                <p>
                  Distinctives: A person with this gift enjoys serving alongside
                  hurting people. They have a strong desire to remove the pain
                  or discomfort in the lives of others while at the same time
                  remaining strong in their own faith. If this gift isn't
                  exhibited in the body, we're missing a key part of the heart
                  of God.
                </p>
                <p>
                  This is different than compassion (a heart for hurting
                  people). Mercy requires coming alongside people on a regular
                  basis, feeling that pain and directing it toward godly action
                  to alleviate that pain. They often work well alongside a
                  prophet whom God has used to expose sin and pain in someone's
                  life. The person with mercy comes next to that person,
                  empathizing deeply with the pain, but offering God's solution
                  for healing.
                </p>
                <p>
                  Cautions: If you have this gift, you probably have a strong
                  emotional component to your relational skills. Often though,
                  when your emotional skills are strong, it is less natural to
                  offer direction and truth based on God's word.
                </p>
                <p>
                  You may fail to recognize the benefits that difficult times
                  can bring to a person's life. For example, you may overlook
                  how God is using a situation to bring about repentance or
                  restitution. If you act too quickly you may short-circuit what
                  God is trying to do.
                </p>
                <p>
                  Be careful you don't become so overwhelmed with others'
                  problems that you don't take care of your own personal
                  obligations.
                </p>
              </div>
            ),
          },
          {
            name: "Prophecy",
            description: (
              <div>
                <p>
                  The spiritual capability to proclaim God's truth with power
                  and clarity in a timely and culturally sensitive fashion for
                  correction, repentance, or edification. (
                  <Verse verse="Romans 12:6" />;{" "}
                  <Verse verse="1 Corinthians 12:10, 28" />;{" "}
                  <Verse verse="Ephesians 4:11" />)
                </p>
                <p>
                  Distinctives: A person with this gift has an amazing ability
                  to understand biblical truth, to apply it to the events and
                  nuances of culture, and to expose the culture in its
                  deception. They may seem like they aren't really compassionate
                  - "they just say the truth and let the chips fall where they
                  may." When they are effective, others often feel uncomfortable
                  because God convicts them through the person with this gift.
                  They are discerning, expressive, desire time alone (to get
                  clarity), opinionated, and authoritative. They often see and
                  articulate what many are oblivious to, or see only dimly.
                  Those with the gift of prophecy express themselves in many
                  ways: speaking publicly, sharing in Home Church, or
                  communicating one-on-one.
                </p>
                <p>
                  Cautions: Beware of lacking compassion. Your commitment to
                  speak the truth may be so strong that you forget to say it
                  with love (
                  <Verse verse="Ephesians 4:15" />,{" "}
                  <Verse verse="1 Corinthians 13" />,{" "}
                  <Verse verse="Romans 12:9ff" />, <Verse verse="1 Peter 4:8" />
                  ). You can discourage people if you're not careful.
                  Nonetheless, remember that the purpose of your gift is to
                  console, encourage, exhort (
                  <Verse verse="1 Corinthians 14:3" />
                  ), even if others may become uncomfortable. Also beware of
                  pride and thinking you're the only one who sees things the way
                  they really are.
                </p>
              </div>
            ),
          },
          {
            name: "Shepherding",
            description: (
              <div>
                <p>
                  The spiritual capability to guide, care for, and nurture
                  individuals or groups in the body of Christ as they grow in
                  faith. (<Verse verse="Ephesians 4:11" />)
                </p>
                <p>
                  Distinctives: A person with this gift provides oversight. They
                  have a natural tendency to nurture people and give them
                  direction. Shepherds are willing to provide the long-term care
                  needed to help others work through issues in their lives. They
                  like to spend time with people, feeding, protecting and
                  disciplining in love. They gravitate towards building
                  discipleship relationships. Gifted shepherds are a good
                  balance for the gifted administrator or leader.
                </p>
                <p>
                  Cautions: If you have this gift, don't use your oversight and
                  concern to shield people from real-life experiences. Also, be
                  careful to not view people as projects. Shepherds often have a
                  clear vision for someone's growth. Don't impose your concerns
                  and vision on someone else. Allow room for the Holy Spirit to
                  convict and move them. The process remains between them and
                  God. Remember that it is God that causes the growth; don't
                  take responsibility for their problems.
                </p>
              </div>
            ),
          },
          {
            name: "Teaching",
            description: (
              <div>
                <p>
                  The spiritual capability to understand, clearly explain, and
                  apply the Word of God to the lives of listeners. (
                  <Verse verse="Romans 12:7" />;{" "}
                  <Verse verse="1 Corinthians 12:28" />;{" "}
                  <Verse verse="Ephesians 4:11" />)
                </p>
                <p>
                  Distinctives: Teachers have a real thirst for knowledge and
                  have an insatiable desire to share that knowledge. A person
                  with this gift can develop the ability to understand and
                  fashion the message in a learner-oriented manner. They tend to
                  be self-disciplined and prefer to teach groups rather than
                  individuals.
                </p>
                <p>
                  Cautions: Teachers often study and learn much more than can
                  actually be conveyed in a single teaching. The teaching itself
                  must convey the most important truths and be practical. You
                  may tend to be too profound or detail- oriented. Make certain
                  that you keep the teaching focused enough for the audience to
                  hear it and digest its application. It is also common for a
                  teacher to struggle with pride because she or he often has
                  more knowledge than others do. Be careful not to become upset
                  with people who are not as excited about a truth as you are.
                  Most importantly, make certain that you are as interested in
                  people as you are in facts.
                </p>
                <p>
                  If you find out that this may be where you are gifted, realize
                  that doesn't qualify you to present at Central Teaching or
                  even Home Church tomorrow. A teaching gift takes time to
                  develop. Choose a ministry that you are interested in, get
                  involved, and pray for opportunities for your gifting to be
                  used.
                </p>
                <p>
                  Watch out for self-promotion. You may hear yourself think,
                  "They ought to put me up to teach!" You may feel anger or
                  resentment that you haven't been asked to teach yet or teach
                  often enough.
                </p>
              </div>
            ),
          },
        ] as { name: CategoryName; description: JSX.Element }[]
      )
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((category, index) => ({
          ...category,
          shortName: index.toString(),
        })),
    []
  );

export default useCategories;
