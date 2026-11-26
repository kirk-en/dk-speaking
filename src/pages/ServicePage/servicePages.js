import nycImg from '../../assets/photo-grid/cvision-closeup.jpg';
import bostonImg from '../../assets/photo-grid/harvard-gsd-podium.jpg';
import presImg from '../../assets/cvision-stage-tall.jpg';
import studentImg from '../../assets/photo-grid/dennis-photogrid-5.jpg';

export const nyc = {
  path: '/coaching/nyc',
  title: 'Public Speaking Coach in NYC | Dennis Kenney | Ivy Level Speaking',
  description:
    'Prepare for a board meeting, pitch, or speech with Dennis Kenney, NYU Stern professor and executive communication coach. Private coaching online or in person in New York City.',
  serviceName: 'Public Speaking and Executive Communication Coaching in New York City',
  serviceType: 'Public speaking coaching',
  areaServed: 'New York, NY',
  image: nycImg,
  imageRatio: 0.8,
  h1: 'Public Speaking Coach in New York City',
  tagline:
    'What does the room need to decide when you finish speaking? Start there.',
  cta: 'Ask about coaching in NYC',
  intro:
    'New York rewards the speaker who gets to the point. Bring the board presentation, investor pitch, keynote, or team address that is already on your calendar, and we will rehearse it until it is clear, confident, and unmistakably yours. Most sessions are online. In person sessions in Manhattan are available by arrangement.',
  cards: [
    {
      h: 'The board update',
      p: 'Directors have read the deck. They want your judgment, not a tour of the slides. We build an opening that names the decision, then rehearse the questions most likely to come next.',
    },
    {
      h: 'The investor pitch',
      p: 'Investors decide quickly whether you are worth a second meeting. We tighten the story, sharpen the ask, and practice the answer to the question you hope nobody raises.',
    },
    {
      h: 'Remarks to your team',
      p: 'A town hall or offsite talk succeeds when people leave knowing what to do next. We shape a message that is human, direct, and easy to repeat.',
    },
    {
      h: 'The keynote or panel',
      p: 'From conference stages to panels, we work on structure, stories, and presence so you hold attention in a room full of people checking their phones.',
    },
  ],
  example: {
    h: 'Open a board presentation with the decision',
    before: '“Thanks for having me. I’ll walk you through the deck.”',
    after:
      '“I’m asking you to approve the pilot. Here is the question I want us to settle today.”',
    why: 'The second opening tells the board why you are there and what you need from them in under ten seconds. Everything that follows becomes evidence for a decision instead of a tour of slides.',
  },
  stepsTitle: 'How coaching works',
  steps: [
    { b: 'Tell me the moment.', t: 'Who is in the room, the date, and what you need them to decide.' },
    { b: 'Rehearse it live.', t: 'You deliver your opening and key section the way you will on the day.' },
    { b: 'Get focused feedback.', t: 'The few changes that will matter most to this audience.' },
    { b: 'Run it again.', t: 'We rework it in the session so you leave already improved.' },
  ],
  who: 'I am Dennis Kenney, a professor of Strategic Communication at NYU Stern and an executive communication coach at Harvard Business School and Columbia Business School. I spent four years as a branding consultant and on air contributor at Good Morning America, and I work with C suite leaders and Fortune 500 teams on executive presence and high stakes presentations.',
  faqTitle: 'Before you reach out',
  faqs: [
    {
      q: 'Is coaching private?',
      a: 'Yes. Sessions are one on one and confidential. You can share as much or as little of your material as you are comfortable with.',
    },
    {
      q: 'Can I bring an unfinished presentation?',
      a: 'Yes. Many clients get the most value early, while the structure can still change. Bring an outline, a rough deck, or just the goal.',
    },
    {
      q: 'Can we meet in person in New York?',
      a: 'Most coaching is online, which makes it easy to fit around your schedule. In person sessions in Manhattan can be arranged. Share your date and preferred location when you reach out.',
    },
    {
      q: 'How far ahead should I book?',
      a: 'Ideally one to two weeks before the presentation, so there is time for a second rehearsal. Short notice sessions are sometimes possible.',
    },
  ],
  related: [
    { to: '/coaching/presentations', label: 'Executive presentation and pitch coaching' },
    { to: '/speaking', label: 'Workshops and keynotes for organizations' },
  ],
  closingTitle: 'Have a high stakes moment coming up in New York?',
  closingText:
    'Tell me the audience, the date, and the decision you need. We will plan the rehearsal from there.',
};

export const boston = {
  path: '/coaching/boston',
  title: 'Executive Presence Coach in Boston | Dennis Kenney | Ivy Level Speaking',
  description:
    'Explain complex work, handle interruptions, and lead a room with clarity. Executive presence coaching with Dennis Kenney online or in person in the Boston area.',
  serviceName: 'Executive Presence Coaching in the Boston Area',
  serviceType: 'Executive presence coaching',
  areaServed: 'Boston, MA',
  image: bostonImg,
  imageRatio: 0.893,
  h1: 'Executive Presence Coaching in the Boston Area',
  tagline:
    'When you know the subject better than anyone in the room, the hardest part is saying less.',
  cta: 'Discuss a Boston area session',
  intro:
    'Boston runs on expertise: research, medicine, technology, and finance. Expertise is also what makes leaders over explain. I coach technical leaders, researchers, and executives to lead with the recommendation, choose the one piece of evidence that matters, and stay composed when a senior leader interrupts. Sessions are online, with in person meetings in the Boston area arranged at your location.',
  cards: [
    {
      h: 'From expert to executive',
      p: 'A progress report lists what you did. An executive summary asks for a decision. We practice the shift, so leaders hear your recommendation before your methodology.',
    },
    {
      h: 'The first answer after an interruption',
      p: 'When a leader asks “What changes if we wait?”, the strongest answer gives the consequence first and the detail second. We rehearse until that becomes a reflex.',
    },
    {
      h: 'Specialists and generalists in one room',
      p: 'We translate technical terms without dumbing them down, choose a single example that carries the point, and invite the question that moves the meeting forward.',
    },
    {
      h: 'Presence that matches your expertise',
      p: 'Voice, pace, stillness, and eye contact signal authority before your first slide. We refine the delivery so you sound like the person who should be making the call.',
    },
  ],
  example: {
    h: 'Answer the consequence first',
    before:
      '“Well, there are a few factors. The data is still coming in, and the second cohort…”',
    after:
      '“If we wait, we lose the spring launch window. Here is the one number behind that.”',
    why: 'Leaders interrupt because they need to decide. Giving them the consequence first shows you understand the stakes, and it earns you the time to explain the detail.',
  },
  stepsTitle: 'How Boston area sessions work',
  steps: [
    { b: 'Share the context.', t: 'The audience, the date, and the decision you need from them.' },
    { b: 'Rehearse online first.', t: 'Most preparation happens virtually, which saves you travel time.' },
    { b: 'Meet in person if it helps.', t: 'For a dress rehearsal, we can arrange a session at your location.' },
    { b: 'Walk in ready.', t: 'You leave with a clear opening, a tested answer to the hard question, and a plan to practice.' },
  ],
  who: 'I am Dennis Kenney, an executive communication coach at Harvard Business School and the Harvard AI Institute, and the coach for the Loeb Fellowship at the Harvard Graduate School of Design. I teach Strategic Communication at NYU Stern and work with leaders across research, technology, and Fortune 500 companies on presenting complex work with clarity and authority.',
  faqTitle: 'Questions from Boston clients',
  faqs: [
    {
      q: 'Do you coach individuals or teams?',
      a: 'Both. Individual coaching is one on one. For teams, I design workshops on executive presence and presenting complex work, delivered on site or online.',
    },
    {
      q: 'Can we rehearse online before an in person event?',
      a: 'Yes, and that is the most common approach. We do the heavy lifting online, then meet in person for a final run through if it will help.',
    },
    {
      q: 'What should I bring to the first session?',
      a: 'The presentation or talking points if you have them, and a clear sense of who will be in the room and what you need them to decide.',
    },
    {
      q: 'Do you work with researchers and scientists?',
      a: 'Yes. Translating complex research for decision makers is a core part of my work at Harvard Business School and the Harvard AI Institute.',
    },
  ],
  related: [
    { to: '/speaking', label: 'Workshops for your team' },
    { to: '/coaching/academic', label: 'Academic job talk coaching' },
  ],
  closingTitle: 'Presenting to leadership soon?',
  closingText:
    'Tell me the audience, the date, and the decision you need. We will build the rehearsal around it.',
};

export const presentations = {
  path: '/coaching/presentations',
  title: 'Executive Presentation and Pitch Coaching | Dennis Kenney',
  description:
    'Rehearse your board presentation or investor pitch with Dennis Kenney. Build a clear opening, sharpen the ask, and practice answering hard questions, online.',
  serviceName: 'Executive Presentation and Pitch Coaching',
  serviceType: 'Presentation coaching',
  areaServed: 'United States',
  image: presImg,
  imageRatio: 0.911,
  h1: 'Executive Presentation and Pitch Coaching',
  tagline:
    'Bring the deck you have. Tell me what you want the room to do.',
  cta: 'Discuss my presentation',
  intro:
    'We work on the presentation you actually have to give, including the first question you hope nobody asks. Whether it is a board decision, an investor pitch, or a recommendation to your leadership team, you will leave with a sharper ask, a structure that carries it, and the composure to handle pushback. Coaching is online, so you can work with me from anywhere.',
  cards: [
    {
      h: 'A board decision',
      p: 'Success sounds like a clear request and a short list of reasons. We cut what the board does not need and rehearse the questions they will ask.',
    },
    {
      h: 'An investor pitch',
      p: 'Success sounds like a story investors can repeat to their partners. We tighten the narrative, the numbers that matter, and the ask.',
    },
    {
      h: 'An internal recommendation',
      p: 'Success sounds like a decision your leaders can make in the room. We lead with the recommendation and keep the evidence ready, not in the way.',
    },
    {
      h: 'Questions behind the questions',
      p: 'A skeptical question is usually a concern in disguise. We practice answering the concern directly, then returning to the decision.',
    },
  ],
  example: {
    h: 'Give each slide a job',
    before: 'Slide title: “Project overview”',
    after: 'Slide title: “Approve a limited pilot before expanding”',
    why: 'When every slide title states its point, you can say it out loud as the transition. The audience always knows why they are looking at the slide, and you never have to read from it.',
  },
  stepsTitle: 'What happens in a virtual rehearsal',
  steps: [
    { b: 'Share the deck.', t: 'Or describe the presentation first if the material is confidential.' },
    { b: 'Deliver the opening aloud.', t: 'The first ninety seconds decide how the rest is heard.' },
    { b: 'Revise the structure.', t: 'We reorder, cut, and sharpen the ask together.' },
    { b: 'Try it again under pressure.', t: 'With interruptions, cameras off, or the hardest question first.' },
  ],
  who: 'I am Dennis Kenney, a professor of Strategic Communication at NYU Stern and an executive communication coach at Harvard Business School and Columbia Business School. I have worked with C suite leaders and Fortune 500 teams, and I spent four years as a branding consultant and on air contributor at Good Morning America.',
  faqTitle: 'Questions before you book',
  faqs: [
    {
      q: 'Can I bring a rough draft?',
      a: 'Yes. Early drafts are often the best time to work together, because the structure can still change.',
    },
    {
      q: 'What if my materials are confidential?',
      a: 'Sessions are private. You can describe the presentation before sharing any files, and share only what you are comfortable with.',
    },
    {
      q: 'Do we work over screen share?',
      a: 'Yes. You share your slides and present as you would in the meeting, and we work through it together.',
    },
    {
      q: 'How soon before the presentation should we start?',
      a: 'One to two weeks gives time for a second rehearsal. If the date is close, we focus on the opening, the ask, and the toughest question.',
    },
  ],
  related: [
    { to: '/coaching/nyc', label: 'Coaching in New York City' },
    { to: '/coaching/academic', label: 'Preparing a faculty job talk instead?' },
  ],
  closingTitle: 'What is the presentation?',
  closingText:
    'Tell me the audience, the date, and what you need them to do. We will start there.',
};

export const students = {
  path: '/coaching/students',
  title: 'Private Public Speaking and Debate Coaching for Students | Ivy Level Speaking',
  description:
    'Private online coaching with Dennis Kenney for middle school and high school students preparing for speeches, debates, and school or college interviews.',
  serviceName: 'Public Speaking, Debate, and Interview Coaching for Students',
  serviceType: 'Student public speaking coaching',
  areaServed: 'United States',
  image: studentImg,
  imageRatio: 1,
  h1: 'Public Speaking and Interview Coaching for Students',
  tagline:
    'A great interview answer sounds like the student who gave it.',
  cta: 'Ask about student coaching',
  intro:
    'I help middle school and high school students find their own examples, explain an idea clearly, and practice saying it out loud until it feels natural. Whether your student has a speech, a debate tournament, or an admissions interview coming up, coaching keeps their voice at the center. Sessions are private and online.',
  cards: [
    {
      h: 'Speeches and presentations',
      p: 'Students learn to open with a hook, organize their ideas, and speak with eye contact and energy instead of reading from notes.',
    },
    {
      h: 'Debate',
      p: 'We work on choosing a clear claim, supporting it with one strong example, and responding to a challenge with composure. Beginners and experienced competitors both welcome.',
    },
    {
      h: 'School and college interviews',
      p: 'From a middle school student applying to high school to a senior applying to college, we practice real questions and help students tell true stories well.',
    },
    {
      h: 'Confidence that carries over',
      p: 'The skills show up in class participation, group projects, and everyday conversations, not only on the day of the event.',
    },
  ],
  example: {
    h: 'Turn an answer into a story',
    before: 'Question: “Tell me about a time you changed your mind.” Answer: “I don’t really know.”',
    after:
      'Follow up: “What is one thing you used to believe last year that you don’t believe now?”',
    why: 'Students usually have great stories. They just need a better question to find them. Parents can practice this at home: ask, listen for one vivid detail, and follow up on it.',
  },
  stepsTitle: 'What private coaching looks like',
  steps: [
    { b: 'Share the goal.', t: 'Parents tell me the event, the date, and where their student is starting from.' },
    { b: 'First attempt.', t: 'The student practices the speech, argument, or interview answer.' },
    { b: 'One adjustment.', t: 'Focused, encouraging feedback on the change that matters most.' },
    { b: 'Second attempt.', t: 'Students hear the difference immediately, which builds real confidence.' },
  ],
  who: 'I am Dennis Kenney, a professor of Strategic Communication at NYU Stern and a communication coach at Harvard Business School and Columbia Business School. I hold a BFA in Drama from Carnegie Mellon and an MS in Communication from Northwestern, and I bring the same methods I teach graduate students to younger speakers, adjusted for their age and goals.',
  faqTitle: 'Questions parents ask',
  faqs: [
    {
      q: 'Is coaching online?',
      a: 'Yes. Sessions are private and online, so students can work from home around their school schedule.',
    },
    {
      q: 'My student is a complete beginner. Is that okay?',
      a: 'Absolutely. Many students start with no experience. We begin where they are and build from there.',
    },
    {
      q: 'How early should we start before an interview or tournament?',
      a: 'Two to four weeks ahead is ideal, so there is time to practice between sessions. Shorter timelines can still help.',
    },
    {
      q: 'What ages do you work with?',
      a: 'Middle school and high school students, typically ages 11 to 18.',
    },
  ],
  related: [{ to: '/coaching', label: 'Coaching for adults and executives' }],
  closingTitle: 'Does your student have a speech, debate, or interview coming up?',
  closingText:
    'Share the goal, their experience so far, and the event date. I will recommend a plan.',
};

export const servicePages = [nyc, boston, presentations, students];
