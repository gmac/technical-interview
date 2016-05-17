# The Technical Interview

![](http://f.cl.ly/items/2Y3e3L2T1v2S1i3Y0w42/687474703a2f2f692e696d6775722e636f6d2f6a3774556f5a582e706e67.png)

This document assembles a general overview of technical interview questions. Obviously, this is neither canonical nor verbatim to what you'll get in an actual interview. However, interview questions do tend to be thematic: if you can recognize the underlying theme of a question, that can help you formulate a successful answer. As for the coding questions… well, sometimes there are no alternatives but to think on your feet!

## 1. "I Don't Know"

The primary goal of a technical interview is to assess you, the candidate, as an intelligent and capable problem solver. Your existing knowledge is generally NOT the deciding factor. That said, a simple *"I don't know (…yet!)"* is almost always the correct answer for your areas of inexperience. Interviewers respect this self-recognition of what you don't know, and where you'd like to improve.

The worst thing you can do is try to fake an answer. Providing one bad answer opens the door for a series of related questions that probably won't go in your favor.

## 2. General Questions

### *What made you want to interview with us?*

Interviewing is a lot like dating… this is the old, *"do you actually find me attractive, or are you just looking for a hookup?"* question. Be ready to explain WHY you identify with a prospective employer, and why you'd be interested (or excited!) to work with them.

### *How do you stay current with technology?*

Technology moves quickly, so they want to know how you keep pace. Be ready to list off the sites you read, the newsletters you subscribe to, and the communities you follow and/or participate in. Balance name-dropping with WHY you choose to follow these sources.

### *What do you work on for fun in your free time? Why?*

This question assesses you as an inspired, motivated, and *hungry* individual. They're looking for your personal drive and inherent curiosity. They want to know that you WANT to be great, versus just being good enough to do the job.

### *What are your priorities for a new job opportunity?*

They're asking about your personal values, as in: what makes you tick? Are you looking for challenge, recognition, do-gooding, compensation… what? They generally want to assess your priorities for two reasons: 1. Do your values align with theirs? You should also assess this of them. 2. Given multiple offers, what would sway you into their camp? 

### *Do you have any questions for us?*

This is generally the final question asked by an interview panel, and is your opportunity to turn the table and interview them. TAKE IT. Remember that interviews are two-sided assessments. Be ready with your own arsenal of questions that will inform you about how they work, and how they would fit into your own goals.

HOWEVER – remember that they're listening to your questions, and they're taking notes on what you're asking. Be prepared with poignant questions. The worst thing you can do here is have NO questions, or invent some lame fillers on the spot. The second worst thing you can do is focus on compensation and benefits… save that for an HR discussion *after* the technical interview.


## 3. Describe a scenario… (Experiences)

### *…where you had difficulties working with a colleague.*

This is the "team player" question. We all butt heads at times, so this is about seeing where and why you came to odds, and how you resolved the situation.

### *…when you encountered a problem you couldn't solve.*

Hitting some dead-ends is inevitable, so they want to know where you've hit a wall in the past and how you handled the situation. Did you think on your feet and pivot your approach, or stagnate and give up?

## 4. Problem Solving

### *Why are manhole covers round?*

This stale old Microsoft question embodies the theme behind problem solving questions: they want to understand your general approach to critical thinking and logical reasoning.

### *How many poodles reside in North America?*

These are the old classic "run with it" questions. There ARE NO CORRECT ANSWERS. As an intelligent software engineer, it's your job to just run with directions that quantify the problem:

*"Hmmm… Let's average the number of breeders per state & province, then multiply that by an estimated number of pup-bearing bitches per breeder, multiplied by the average litter size, and then the inception interval. Then we'll need to assume an average lifespan of 15 years per poodle, removing the deceased from the birthrate until we reach a rough population size. However, we should also anticipate the establishment of new breeders over time, thus adding a population growth rate…"*

### *How would you approach…*

**…infinite scrolling with a browser-based scrollbar?** You'll commonly be presented with a technical problem that the interviewers have already encountered and solved within their own domain. Now they want to hear how you'd approach the problem. This is a fantastic question, because it's an opportunity for two-sided assessment: they learn about your thought process, and you learn about both their work and their thinking. You should be as (silently) critical of their solution to the problem as they are towards yours.

### *Design a software application for…*

**…a vending machine; a robot that waits tables; an elevator**. Take a whiteboard marker and start drawing. These are deliberately large application concepts with many moving pieces. The interview panel isn't really looking for a working solution, but for your thought process while breaking down the problem. Vocalize everything that's going through your head, and try to capture as much as possible on the whiteboard.

### *Design a network application for…*

**…the Shazam music service.** This has similar intent to the software application question, but is BIGGER. This is a full-stack question that requires thinking about the problem across multiple clients, servers, databases, networks, and third-party APIs all at once.

## 5. Coding

### *Write/Whiteboard the code for…*

**...a jQuery Deferred (Promise) object**. This is testing the candidate's conceptual understanding of how a common library tool works under the hood (by breaking the tool down into plain code). Advice: ask if you can reference the tool's documentation, rather than going by memory on how the tool works.

When asked to complete this on a whiteboard, the interview panel is reviewing the candidate's attention to syntax outside of a text editor. These two factors together are HARD.

### *Write a function that tests…*

**...if a string contains words from a list of dirty words**. This is a very common style of coding question: the question can be applied to any programming language (Ruby, JavaScript, etc.), and is pretty straight forward for a candidate of any skill level to complete a basic implementation of. However, this question can also scale up to probe the candidate's knowledge of time complexity and Big-O, and challenge the candidate to solve the problem with faster and more efficient solutions, or with additional requirements.

### *Given a test suite, make all tests pass for…*

**...an implementation of the Underscore "debounce" method**. This question assesses the candidate's code competency while also reviewing their comfort within a test suite. This is a very fair way of presenting code challenges, given that the candidate has a defined set of requirements and a clear measure of completion when all tests pass.

### *Show and tell your code…*

This is open forum for the candidate to select a project on their GitHub account, and to talk about what's in it. This is a GREAT question, and puts the candidate in the pilot's seat to either fly high or crash hard. The thing to know:

***Even the best code makes ABSOLUTELY NO SENSE to a fresh pair of eyes at a quick glance (which is all you have time for).***

Given that universal truth, an excellent strategy here is to –ironically– spend as little time looking at code as possible. Use your people skills; they're a lot more engaging. Lead a discussion that:

1. Identifies a technical problem that you needed to solve.
2. Presents your considerations for approaching the problem.
3. Describes your solution for solving the problem.

After leading this discussion, quickly show some code that supports your discussion points. The unfamiliar code still won't mean much to the interview panel, so you'll mostly just be showing them your syntax and commenting styles. If those look good, then you've probably passed with flying colors.

### *Pair program a…*

**…simple statistics service**. This offers a superb one-on-one assessment opportunity for both interview parties. The interviewer gets to watch the interviewee work first hand, while the interviewee gets a tangible feel for the team they're applying to work with. Team personality fits tend to be obviated, and the interviewee tends to feel more collaborative than "on the spot" during the interview.

### *Reproduce and defend…*

**...a simple document layout based on a wireframe.** Front-end candidates will frequently need to demonstrate some HTML/CSS layout skills. However, content formatting and layout strategies are incredibly subjective (ie: choice of tags, content order, positioning methods, etc.), therefore replication of the wireframe alone is not very meaningful. Be prepared to DEFEND your choices, as in… *"these tags have better browser support,"* or *"this positioning method lends itself to responsive flow,"* etc.


## 6. Technology-specifics

### 6.1. The Water Marks

Interview questions are generally designed to span between two major "water marks" that will measure the depth and range of a candidate's knowledge:

- **Low-water mark:** establishes *"Okay, this guy knows at least THIS much."*
- **High-water mark:** establishes *"Holy crap, this guy knows THAT much?!"*

### 6.2. Rails

#### *Name some new features in the latest Rails release.*

Rails is constantly evolving. This question provides a low-water mark for assessing a candidate's basic grasp on the current landscape.

#### *On a scale of 1-10, rate your knowledge of Rails… what differentiates an X from an X-1?*

This is a clever two-part question: first rate yourself, then identify what differentiates your skill level from the level below you. This gives the interview panel your own self-perception, as well as a benchmark to compare your scale against theirs.

#### *What gems do you commonly use? How did you select them?*

This question probes a candidate's exposure within the Ruby universe, and asks how they sift through the noise of mediocre software that's available.


#### *What security measures do you employ within a Rails app?*

Application security measures are a virtually limitless topic, therefore this question allows candidates to set their own high-water mark based on their experience level.

#### *What is your preferred database? Why?*

This is another high-water mark question where candidates may discern the complexities of data storage. Experience will quickly speak for itself.

### 6.3. JavaScript

#### *What libraries do you use besides jQuery?*

Given that jQuery has a robust DSL (domain-specific language), it's remarkable how often a candidate "knows jQuery," yet doesn't really know anything about plain JavaScript. This is a low-water mark for screening jQuery-only experience.

#### *Where does a variable go when not declared with the "var" keyword?*

This is another low-water mark for testing a candidate's exposure to basic JavaScript concepts. Other variations tend to ask what scope and/or closure is.

#### *Solve a scoping problem…*

These questions are painfully silly, yet painfully common. You're given a jumbled mess of contrived JavaScript and asked to follow its flow to the outcome. For example:

```
/* What gets printed into the console? */
var x = 6;
var y = 4;

function a(b) { return y + b; }

x = 2;
y = 5;
var fn = a(x);

function a(b) {
  return function(c) {
    return y + b + c;
  };
}

x = y = 3;
console.log(fn(5));
```

#### *How could I create a JavaScript object with public and private data?*

This is an advanced scoping question that does an all-around better job of probing a candidate's understanding of how scope, closure, and encapsulated data works than silly flow problems.

#### *How could I create a memory leak?*

The underlying question here assesses the candidate's awareness and understanding of how a garbage collector (GC) works. In this case, the candidate is tasked with identifying bad code patterns that thwart the GC. This is a high-water mark question where experience will quickly speak for itself.

#### *Do you generally prefer using callbacks or promises? Why?*

This is another high-water mark question where candidates may discern the complexities of asynchronous behavior. Experience will quickly speak for itself.

### 6.4. HTML/CSS

#### *How are your responsive layout skills?*

Everyone wants it, and apparently there are not enough engineers who really understand responsive layout to go around. This is definitely a current vogue low-water mark.

#### *What is reflow? When is it triggered?*

This question probes a candidate for knowledge of how front-end layout works under the hood. This is an intermediate question, but would still generally be considered a low-water mark.

#### *How could I transform an element multiple times without multiple reflows?*

This is an advanced DOM efficiency and rendering performance question. This level of knowledge is particularly important to bigger shops who are building mature software products with large audiences.

#### *Describe some layout approaches to…*

**…grid columns; clearfix; vertical alignment; dynamic content order**. These are generally perceived as CSS high-water mark questions: impress us with how much of the spec you've read and how many tricks you know. However, tricks and specs don't always equate to mature development experience (it's easy to make stuff work in just Webkit!).

#### *What concessions have you made in the past for…*

**…cross-browser compatibility; accessibility; mobile performance; SEO; analytics**. These are the true high-water marks for front-end engineers: tell us what you know, and how many audiences you have experience with making it work for.

## 7. Bad Questions

While interviewers occupy the perceived seat of power during an interview, this does not necessarily mean they're an infallible tower of knowledge. Poorly conceived and/or surprisingly inept interview questions are actually fairly common, and should serve as a red flag to YOU, the interviewee.

### A Useless Question

The most useless question I've ever been asked during a technical interview involved fitting a variable-sized image into a variable-sized content frame (basically, the CSS "background-size:cover" implementation):

```
"Write a function that accepts a frame width, frame height, and image aspect ratio; and then returns a rectangle for the image that is scaled and centered to fit within the frame."
```

This question was useless for several reasons: first, it was primarily a math problem. I Googled the complete formula in 30 seconds after the interview, which pretty much invalidated the 30 minutes of engineering time spent during the interview. Second, the problem was given without a test suite to validate expectations against. While my implementation worked correctly for landscape and square aspect ratios, it proved faulty for portrait ratios. I hadn't hand-tested enough aspect ratios during the 30 minute session to detect this error. The exercise was received as a failure, although the question had explored very little real technical prowess.

Afterward, I withdrew from their interview process.

### That said…

**Remember that ALL interviews are two-way assessments.** Make sure the interviewers impress YOU as well. You can afford to be selective.
