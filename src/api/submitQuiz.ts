import { z } from 'zod';
import { createEndpoint } from 'zitejs/backend';
import { zite } from 'zitejs/db';
import { Email } from 'zitejs/email';

interface ResultEmail {
  subject: string;
  body: string;
}

import { z } from 'zod';
import { createEndpoint } from 'zitejs/backend';
import { zite } from 'zitejs/db';
import { Email } from 'zitejs/email';

interface ResultEmail {
  subject: string;
  body: string;
}

const resultEmails: Record<string, ResultEmail> = {
  A: {
    subject: "Your Five Feminine Powers™ Quiz result today: Sacred Listening™",
    body: `Hello powerful woman,

We live in a culture that rewards the woman who stays constantly available, the one who answers, handles, and produces without stopping.

Right now, your body is giving you a clear signal:
"I need quiet. Stop needing me for a moment."

If you're catching yourself thinking, "What's wrong with me? I have too much to do to stop" know this: your body is telling the truth.

Quiet isn't empty space. It's where your hidden intelligence lives. When you override the request for stillness, the signal doesn't disappear. It turns into fatigue, irritation, or feeling touched out.

---

## Your Body's Power Today: Sacred Listening

The feminine authority that trusts her inner voice over all the outside noise in the room.

---

## Your Micro-Somatic Tool: The 2-Minute Pause

• **EMPTY:** Step away from all input. No podcasts, no scrolling, no texts.
• **ASK:** Bring one open question to your body: "What do I need to know right now?"
• **RECEIVE:** Don't force an answer. Let it arrive as a thought, a sensation, or clarity later today.

---

## Your Neurofeminine Rewire

Catch the next moment you reflexively reach outside yourself for an answer: Google, a friend, AI. Take one breath before you act. Give your body's guidance the first word.

*Use the outer world as your tool, not your truth.*

---

## Your Power Treasure: Hidden Intelligence

When you make room to hear yourself, this is often what shows up:
• The solution to something you've been circling for weeks
• The realization that a relationship or commitment doesn't actually feel good
• A desire you've been quietly talking yourself out of
• The idea that arrives while driving, showering, or doing nothing at all

This is Sacred Listening.

---

## Power Practice This Week

Leave one thing unfinished today. On purpose. Use that white space to let your body rest.

To your Sacred Listening,  
Amna

---

**Want to live more deeply into this?**  
This email is the practice. Inside the Nanorah Research Circle, we go underneath it.

We explore the biology, science, history, and wisdom behind this research and the Five Powers framework, why women learned to override these signals in the first place, and what changes when we begin listening again.

Join us live each week + access the research and recordings:  
https://amnamazin.substack.com

And share this quiz (https://ihqc7qqxus.zite.so) with a woman you love. Our powers multiply in the collective.

P.S. Remember, this isn't a permanent personality test. Bookmark the quiz link and retake it whenever you feel off. Your body will ask for a different power depending on where you are in your cycle, week, or life.`,
  },
  B: {
    subject: "Your Five Feminine Powers™ Quiz result today: Playful Creativity",
    body: `Hello powerful woman,

We live in a world that treats play like something you grow out of. Children play. Adults get serious. Responsible women get things done.

Can you imagine a woman walking into a conference room laughing uncontrollably, changing the agenda because she had a better idea, saying "Wait, this sounds way more fun"? Blasphemy.

And yet, how exactly are we supposed to create without play?

Right now, your body is asking for a little more freedom: freedom from the plan, from knowing exactly how everything turns out. If you're trying to know something from A to Z before you begin, you may be in resistance with the very power trying to come through you.

---

## Your Body's Power Today: Playful Creativity

Playful Creativity is the feminine power of possibility, curiosity, and creation without needing to control the outcome. It's one of our most undervalued powers because we focus on the finished thing. Almost nothing begins there. It begins in the messy middle. There's one day of birth, one day of death, and almost everything in between is transition.

If you feel restless, scattered, bored with the plan, or suddenly interested in something completely unrelated, you may be in your Play Power, and it's time to get curious.

**When Playful Creativity Gets Blocked**  
It can feel like:
• Restlessness or overwhelm
• Perfectionism and self-judgment
• Too many ideas, starting and stopping
• Feeling uninspired
• Doing anything except what you're "supposed" to be doing

Tightening the reins here only foreshadows more burnout later.

---

## Power Ritual: Choose Your Joy

Tomorrow morning, before the world starts telling you what it needs from you, choose joy first. One minute or thirty, it doesn't matter. Put on a song and dance badly. Scribble. Sing. Move furniture. Make something you'll never show anyone. Drink your coffee somewhere beautiful.

Try filling in the blank: *I give myself permission to __________.*

Then do it. This is one of the most productive things you can do for your body all day, because now your juices are flowing and you've created the container for whatever awaits you.

---

## Power Tool: Enthusiasm

The word enthusiasm comes from the Greek *entheos*, "the divine within." Let it guide your decisions. What feels alive? What has energy? Follow that. Just don't make anything permanent yet. Explore first, commit later.

If resistance or judgment comes up, get curious about it: has that thought ever created fulfillment or joy? Let what happens give you the information for the next right step.

---

## Neurofeminine Rewire™

**NOTICE → INTERRUPT WITH INQUIRY → CHOOSE DIFFERENTLY**

Notice the moment reality stops following the script and frustration shows up: the flat tire, the interruption, the late meeting, the wrong turn. Your mind says this wasn't supposed to happen, we're behind, we don't have time for this.

Before forcing everything back onto the plan, get curious: could this be an opportunity to play? What becomes possible because this didn't go the way you planned?

Then choose differently. The tire is flat? Notice what's around you that you weren't planning to see. The chapter got interrupted? Maybe the interruption becomes the deep conversation.

You're teaching your body something new: *I don't need to control the outcome to trust the process.*

---

## Your Power Treasure: Connection

This is what you're making room for:
• A mistake that becomes the perfect solution
• A wrong turn that becomes the best part of the day
• An unexpected kitchen dance party that reorganizes the whole house's energy
• A random conversation that introduces you to the person or idea you could never have planned for
• A ridiculous idea that turns out to be brilliant
• The return of your laughter

Play is how we create and how we connect: to ourselves, to each other, to possibilities we couldn't have imagined. We do something, life responds, we respond back. That's co-creation.

So if life feels like one giant messy middle, stick with it. Your creativity lives inside it.

To your Playful Creativity,  
Amna

---

Remember, this isn't a permanent personality test. Bookmark the quiz link and retake it whenever you feel off. Your body will ask for a different power depending on where you are in your cycle, week, or life.

And share this quiz (https://ihqc7qqxus.zite.so) with a woman you love. Our powers multiply in the collective.

**Want to live more deeply into this?**  
This email is the practice. Inside the Nanorah Research Circle, we go underneath it, exploring the biology, science, history, and wisdom behind this research and the Five Powers framework, why women learned to override these signals in the first place, and what changes when we begin listening again.

Join us live each week and access the research and recordings:  
https://amnamazin.substack.com`,
  },
  C: {
    subject: "Your Five Feminine Powers™ Quiz result today: Magnetic Manifestation",
    body: `Hello powerful woman,

One of the biggest mindset shifts of my life came from an egg. I remember hearing Kate Northrup talk about what she calls Egg Wisdom: the egg attracts.

I remember thinking: wait, my power isn't in the chase? Because I'd spent so much of my life believing the opposite: the harder I work, the more deserving I become of receiving what I want.

But what if we could lead with attraction? What if what's meant for us moves toward us too, and our job is to become deeply available for what we desire while taking aligned action toward it?

---

## Your Body's Power Today: Magnetic Manifestation

Magnetic Manifestation is the feminine power to attract what you desire through aligned action. You still send the email, pitch the idea, launch the thing, speak your truth. But there are two different engines you can do all of that from.

One says: *I have to make this happen, or it will disappear.* The other says: *I know what I want, I trust what's mine can meet me, and I'm going to show up fully for it.*

Same woman, sometimes the same amount of work, completely different power source.

We've glorified depletion for so long that exhaustion feels like proof we're doing something right. But what if winning could feel good? Easy, even?

There's a way to work hard that feels regenerative: you can launch something and feel energized by it, take a bold risk and feel your whole body say yes, more of this. That's Magnetic Manifestation.

**When Magnetic Manifestation Gets Blocked**  
It can feel like:
• Approval-seeking or overgiving
• Perfectionism and self-doubt
• Overperforming, comparing, chasing
• Stress and depletion
• Believing nothing happens unless you're forcing it

These are signs your engine shifted from attraction to control.

---

## Power Ritual: Bold Momentum

Every morning this week, stand in front of the mirror and name what you desire. Look yourself in the eyes and say: *I want this, and it is mine.*

Then get ready like you mean it. Wear the lipstick, choose the outfit that makes you stand taller, take up a little more space than usual. This isn't performing confidence, it's giving your body a daily experience of the woman who is no longer hiding from what she wants.

Practice being 5% bolder than usual.

---

## Power Tool: The Magnet

Pay attention to what scares you because you want it. There's a difference between fear that says *this is wrong for me* and fear that shows up because something matters enough that stepping toward it means becoming more visible or honest about what you actually desire.

Ask: *If I knew I couldn't embarrass myself, fail, or be rejected, what would I want to do?*

Notice what comes up: the person you want to contact, the opportunity you want to ask for, the thing you keep saying you'll do eventually. That's where your magnet is pointing. Take the next honest step toward it.

---

## Neurofeminine Rewire™

**NOTICE → INTERRUPT WITH TRUST → CHOOSE DIFFERENTLY**

Chasing can look responsible: sending another email because no one replied, over-delivering so someone recognizes your value, saying yes because you're afraid the opportunity won't come again. Underneath it: *if I stop pushing, this might disappear.*

Before automatically doing more, ask: *Am I acting from desire or desperation? Would I still make this move if I had nothing to prove?*

Sometimes the answer will still be to send the email or go all in. Beautiful. Magnetic Manifestation chooses a regenerative engine.

Then take the action without using your body as collateral. Pitch without begging for approval. Work hard without needing exhaustion to prove you worked hard enough.

You're teaching your body something new: *achieving can feel easy.*

---

## Your Power Treasure: Receiving

This is what becomes possible when your energy is no longer occupied with chasing:
• Noticing the person who wants to help, the collaboration that makes things easier
• The invitation you might have overlooked
• Becoming available for what many women are conditioned to struggle receiving: money, attention, affection, support, recognition, opportunity

I want my work to feel different: to work hard on something I desire and feel more alive because of it, instead of swinging between full acceleration and burnout.

This will feel strange at first. As my mentor Barbara Huson reminds me: lean into the resistance. Once you stop worshipping overwork, people will misunderstand you. That's part of the practice. Can you trust what feels alive in your body even if no one else understands it?

That's why the egg stayed with me: a woman who can move toward her desires trusting she doesn't have to control every step of their arrival.

To your Magnetic Manifestation,  
Amna

---

Remember, this isn't a permanent personality test. Bookmark the quiz link and retake it whenever you feel off. Your body will ask for a different power depending on where you are in your cycle, week, or life.

And share this quiz (https://ihqc7qqxus.zite.so) with a woman you love. Our powers multiply in the collective.

**Want to live more deeply into this?**  
This email is the practice. Inside the Nanorah Research Circle, we go underneath it, exploring the biology, science, history, and wisdom behind this research and the Five Powers framework, why women learned to override these signals in the first place, and what changes when we begin listening again.

Join us live each week and access the research and recordings:  
https://amnamazin.substack.com`,
  },
  D: {
    subject: "Your Five Feminine Powers™ Quiz result today: Regal Discernment",
    body: `Hello powerful woman,

A friend once asked if I wanted to watch her pet python eat a live rat. My entire body clenched. Absolutely not. Later she said something I never forgot: *you need to tap into your python more.*

I realized that when I imagined the python and the rat, I was completely identified with the terrified rat. The snake was simply being exactly what it was.

Women's power is lovely when it nurtures, gives, and makes everyone feel safe. The woman who says, *no, that doesn't work for me, I'm not available*, changes something. The moment a woman truly chooses, the room often gets a little less comfortable.

Is she the snake? And is comfort really the right measure of alignment?

---

## Your Body's Power Today: Regal Discernment

To be in this feminine power is to speak your truth unapologetically. Discernment means knowing what to honor, when to act, when to rest, and trusting your inner authority even when it challenges what someone else wants from you.

This is the Queen within you saying: *I see what no longer serves, and I choose differently.*

Right now your tolerance may be getting lower. You may be more aware of where your time is going, more sensitive to the person who takes too much. And because women are trained to believe kindness means endless flexibility, we misread this clarity as being difficult or selfish.

**When Regal Discernment Gets Blocked**  
It can feel like:
• Snappy, resentful, or withdrawn
• Irritated by things you normally tolerate
• Saying yes and immediately regretting it
• Feeling responsible for everything
• Wanting everyone to leave you alone because you've taken on too much

Resentment is some of your greatest sacred intel right now. Sometimes we resent someone for asking too much, when really we resent ourselves for continuing to say yes. You may be crossing your own boundary on their behalf.

---

## Power Ritual: Automatic No

For the next few days, make every new request an automatic no until it becomes a ridiculously clear heck yes.

Dinner invitation? *Let me think about it.*  
New project? *Let me check my calendar.*

This gives your body time to vote before you answer. When the answer is no, let it be no. No is a full sentence.

---

## Power Tool: Truth Detector

Your truth detector is strong right now. Use it for the bigger decisions.

Ask:  
• **Does my body soften and feel lighter, or tighten and feel heavier?** Lighter may be a yes.  
• **If nobody were disappointed, what would I choose?** Follow that.  
• **What serves the highest good, even if it creates temporary discomfort?** Lead with that.

Self-care is community care. Your clean no gives someone accurate information, and gives them room to adjust, ask someone else, or discover a capacity they didn't need to access while you were carrying it.

---

## Neurofeminine Rewire™

**NOTICE → INTERRUPT WITH TRUTH → CHOOSE DIFFERENTLY**

Overfunctioning looks incredibly loving: offering before anyone asks, saying yes while your body is contracting, taking responsibility for someone else's disappointment.

Generosity says *I choose to give*. Overfunctioning says *I must give*.

Before stepping in, ask: *Did anyone actually ask me to carry this? Am I doing this from love or from guilt? Is this a heck yes?*

Then let your answer change your behavior: say no, say not now, delegate it, let someone be disappointed if that's what honesty requires.

You're teaching your body something new: *I can handle the discomfort of honoring my truth.*

---

## Your Power Treasure: Open Spaces

This is what you get to receive:
• A calendar that reflects both inhales and exhales
• Relationships without resentment
• More energy because you're no longer carrying what was never yours
• Room for the ideas and opportunities that couldn't get through while everything else took up space

Every clean no reclaims capacity, and capacity changes everything. This is why Regal Discernment ripples through all your other powers: your Sacred Listening gets more quiet to hear in, your Playful Creativity gets room to create, your Magnetic Manifestation gets more energy behind what you actually desire.

Your no is the most honest form of love available. The people in your life deserve the truth of your yes, and you deserve relationships that respect your truth.

To your Regal Discernment,  
Amna

---

Remember, this isn't a permanent personality test. Bookmark the quiz link and retake it whenever you feel off. Your body will ask for a different power depending on where you are in your cycle, week, or life.

And share this quiz (https://ihqc7qqxus.zite.so) with a woman you love. Our powers multiply in the collective.

**Want to live more deeply into this?**  
This email is the practice. Inside the Nanorah Research Circle, we go underneath it, exploring the biology, science, history, and wisdom behind this research and the Five Powers framework, why women learned to override these signals in the first place, and what changes when we begin listening again.

Join us live each week and access the research and recordings:  
https://amnamazin.substack.com`,
  },
  E: {
    subject: "Your Five Feminine Powers™ Quiz result today: Emotional Alchemy",
    body: `Hello powerful woman,

Most mornings I wake before the sun and watch the darkness slowly transform into light. Nature doesn't panic because it got dark. But somewhere along the way, humans decided life should mostly feel light: happy, productive, certain.

When the darkness comes (anger, grief, rage, fear, or a joy so big it cracks us open) we try to get out of it as fast as possible. We fix it, numb it, scroll, stay busy.

What if the darkness is part of the path?

---

## Your Body's Power Today: Emotional Alchemy

Emotional Alchemy is the feminine power to feel deeply, stay rooted, and transform emotional truth into wisdom and aligned action.

This is your cave power. Something may be asking you to go deeper right now: an emotion following you around, a grief you thought you were over, or joy that wants to be celebrated fully.

Your emotions are sacred intel. Feeling angry doesn't mean send the text. Feeling afraid doesn't mean don't go. The feeling is information. Your job is to let it speak before deciding what to do with it.

**When Emotional Alchemy Gets Blocked**  
It can feel like:
• Irritable, anxious, or numb
• Ashamed of how strongly something is affecting you
• Reacting before you understand what you're reacting to
• Staying busy because slowing down might mean feeling too much
• Judging yourself for being "too emotional"

The block usually comes from what happens when we suppress it, perform over it, or react from its peak before hearing what it's trying to tell us. There's no bridge over the hard stuff, only a tunnel through it.

---

## Power Ritual: Cave Time

Protect one pocket of time this week (ten minutes is enough) for the cave. Close the door, put the phone away, and ask: *What is actually here?*

Let whatever is there be there. Cry, write, stomp, shake, put your hand over your heart, scream into a pillow, laugh until your stomach hurts. Give the emotion somewhere safe to exist.

If you want company, choose your Cave Sisters carefully: the woman who can witness you without immediately fixing you.

---

## Power Tool: Feel Without Judgment

**EXPRESS → EXPLORE → PAUSE → INTEGRATE**

• **Express:** Let it move. Cry, shake, write the thing you'd never send, say the truth out loud in a room by yourself.  
• **Explore:** Once there's a little room, ask what this feeling is trying to tell you, what's underneath it, what it's protecting. Notice the difference between asking "what is this telling me" and "how do I get rid of this." One listens, the other is already trying to escape.  
• **Pause:** Let silence do some of the work. Sit, walk, sleep on it. Let your body metabolize what just moved through.  
• **Integrate:** Ask what you know now that you couldn't see before you let yourself feel this. Maybe there's an action. Maybe there's nothing to do yet. That's okay too.

---

## Neurofeminine Rewire™

Emotional bypassing looks completely normal: staying busy, researching the feeling instead of feeling it, telling yourself someone else has it worse. Underneath it is simply: *I don't want to feel this.* Of course you don't, some feelings hurt, that doesn't make them wrong.

Before escaping or fixing, put a hand somewhere on your body and ask: *Where does this live, what does it feel like, can I let this exist without making it mean anything about me?*

You're teaching your body something new: *I can feel deeply without abandoning myself or being controlled by the feeling.*

---

## Your Power Treasure: Soul's Gold

Alchemy was never about pretending the material wasn't there. It's about transformation.

• Anger may reveal the boundary you've been afraid to name
• Jealousy may reveal a desire you've been ashamed to admit
• Grief may reveal how deeply you loved
• Resentment may reveal where your yes stopped being honest
• Joy may reveal exactly what deserves more space in your life

When something is already here, you have the power to meet it consciously and discover what becomes available on the other side of feeling it.

We learn to see inside the darkness.

To your Emotional Alchemy,  
Amna

---

Remember, this isn't a permanent personality test. Bookmark the quiz link and retake it whenever you feel off. Your body will ask for a different power depending on where you are in your cycle, week, or life.

And share this quiz (https://ihqc7qqxus.zite.so) with a woman you love. Our powers multiply in the collective.

**Want to live more deeply into this?**  
This email is the practice. Inside the Nanorah Research Circle, we go underneath it, exploring the biology, science, history, and wisdom behind this research and the Five Powers framework, why women learned to override these signals in the first place, and what changes when we begin listening again.

Join us live each week and access the research and recordings:  
https://amnamazin.substack.com`,
  },
  F: {
    subject: "Your Five Feminine Powers™ Quiz result today: Power Reset",
    body: `Hello powerful woman,

There's a specific kind of tired where even good advice starts to feel like one more thing you have to do. Get quiet. Play. Follow your desire. Set the boundary. Feel your feelings. And your entire body says: *absolutely not, I do not have the bandwidth for one more thing.*

If that's where you are, I want you to know something important: Power Reset is what happens when your body has been carrying so much that all five powers start speaking at once.

Sacred Listening says *please leave me alone*. Playful Creativity says *can we do literally anything else*. Magnetic Manifestation says *I just want something to feel good*. Regal Discernment says *cancel everything*. Emotional Alchemy says *I might cry, or scream, or feel nothing at all*.

Suddenly everything is noise. All five powers are competing for bandwidth.

---

## Your Body's Power Today: Power Reset

Before you listen, create, attract, discern, or alchemize anything, your body needs less. Less input, less decision-making, less stimulation, less "one more thing."

You can have energy and still be overloaded. You can love your children and still not want one more person touching you. That's capacity.

**When You're in Power Reset**  
It can feel like:
• Mental fog and low decision tolerance
• Everything feeling equally urgent and equally impossible
• Bouncing between tasks without finishing anything
• Wanting everyone to stop needing you
• Self-care itself feeling like one more assignment to fail at

If taking care of yourself has become another thing you're failing to do correctly, we're not turning healing into another performance.

---

## Power Ritual: Radical Reduction

For the next 24 hours, take something off. Remove.

Cancel one thing. Delay one thing. Delegate one thing. Lower the standard on one thing. Order dinner. Leave the laundry. Ask for help.

Your needs are allowed to alter the plan, because rest is not something you earn after successfully meeting everyone else's needs.

---

## Power Tool: Self-First Filter

When everything feels important, run each demand through this:
• Does this actually need to happen?
• Does it need to happen today?
• Does it need to happen by me?
• Does it need to happen this well?

Then ask what would make this easier with the capacity you actually have today. If a major decision can wait, let it wait.

---

## Neurofeminine Rewire™

For many women, overload makes us try harder: *just get through today, I'll rest after this week.* Our own needs keep moving to the bottom of a list that never ends.

Before automatically saying yes or pushing through, ask: *What do I actually have to give today? What am I carrying that someone else could carry?*

Then put yourself back in the circle: remove the thing, ask for help, let someone be mildly inconvenienced, choose enough.

You're teaching your body something new: *my capacity belongs in the decision.*

---

## Your Power Treasure: Restored Capacity

The treasure is capacity itself, because when it returns, your powers become distinguishable again.

Sacred Listening sounds like "I need quiet because there's something I want to hear." Playful Creativity becomes "ooh, what if." Regal Discernment becomes "no, that isn't right for me."

The signal returns because the bandwidth returns. And with bandwidth, choice returns.

So if you do nothing else after reading this, take one thing off, and let that be enough for today.

To your restored capacity,  
Amna

---

Remember, this isn't a permanent personality test. Bookmark the quiz link and retake it whenever you feel off. Your body will ask for a different power depending on where you are in your cycle, week, or life. Your needs change. Your energy changes. Your sensitivity changes. The power asking to lead changes. That is your power.

And share this quiz (https://ihqc7qqxus.zite.so) with a woman you love. Sometimes the most loving thing we can do for another woman is remind her that she belongs inside the circle she keeps caring for too.

**Want to live more deeply into this?**  
This email is the practice. Inside the Nanorah Research Circle, we go underneath it, exploring the biology, science, history, and wisdom behind this research and the Five Powers framework, why women learned to override these signals in the first place, and what changes when we begin listening again.

Join us live each week and access the research and recordings:  
https://amnamazin.substack.com`,
  },
};

const resultLabelMap: Record<string, string> = {
  A: 'Sacred Listening\u2122',
  B: 'Playful Creativity\u2122',
  C: 'Magnetic Manifestation\u2122',
  D: 'Regal Discernment\u2122',
  E: 'Emotional Alchemy\u2122',
  F: 'Power Reset',
};

const ageGroupLabelMap: Record<string, string> = {
  tween: 'Tween (9\u201312)',
  teen: 'Teen (13\u201317)',
  woman: 'Woman (18+)',
};

export default createEndpoint({
  description: 'Saves a quiz submission and sends the personalized result email',
  inputSchema: z.object({
    name: z.string(),
    email: z.string().email(),
    resultId: z.enum(['A', 'B', 'C', 'D', 'E', 'F']),
    ageGroup: z.string(),
    energyContext: z.string(),
    q1Power: z.string(),
    q2Power: z.string(),
    q3Power: z.string(),
    q4Power: z.string(),
    q5Power: z.string(),
    q6Power: z.string(),
    sacredListeningScore: z.number(),
    playfulCreativityScore: z.number(),
    magneticManifestationScore: z.number(),
    regalDiscernmentScore: z.number(),
    emotionalAlchemyScore: z.number(),
    powerResetScore: z.number(),
  }),
  outputSchema: z.object({
    success: z.boolean(),
  }),
  execute: async ({ input }) => {
    await zite.quizSubmissions.create({
      record: {
        email: input.email,
        name: input.name,
        result: resultLabelMap[input.resultId],
        ageGroup: ageGroupLabelMap[input.ageGroup] ?? input.ageGroup,
        energyContext: input.energyContext,
        q1Power: input.q1Power,
        q2Power: input.q2Power,
        q3Power: input.q3Power,
        q4Power: input.q4Power,
        q5Power: input.q5Power,
        q6Power: input.q6Power,
        sacredListeningScore: input.sacredListeningScore,
        playfulCreativityScore: input.playfulCreativityScore,
        magneticManifestationScore: input.magneticManifestationScore,
        regalDiscernmentScore: input.regalDiscernmentScore,
        emotionalAlchemyScore: input.emotionalAlchemyScore,
        powerResetScore: input.powerResetScore,
      },
    });

    const data = resultEmails[input.resultId];

    await Email.send({
      to: input.email,
      subject: data.subject,
      body: [
        { type: 'text', content: data.body },
      ],
    });

    return { success: true };
  },
});
