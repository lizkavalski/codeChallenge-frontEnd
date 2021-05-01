# Code Challenge Flash Cards
[![Netlify Status](https://api.netlify.com/api/v1/badges/9f18af1f-d219-46a6-a2b5-86561500db98/deploy-status)](https://app.netlify.com/sites/code-chellenge-flash-card/deploys)

### Summery
Display a random code challenges questions to help someone, who is interviewing for a tech industry, to feel more prepare for a techincal interveiw.

Languages used: JavaScript framework -React 

Tools used :Axios, @material-ui, Google Fonts, and ReactCardFlip

Deployed Site:
[Code Challenge Flash Card](https://code-chellenge-flash-card.netlify.app/)

### Problem Domain:
Create an application that can help people feel more prepare when going into a tech interview, in term of when they are asked a Whiteboard question. A whiteboard question in this case is when the interviewer ask the interviewee a coding problem during the interview process. The interviewee then have to solve the code problem. The point of the interview is to show case the interviewee [problem solving skills and communication](https://skillcrush.com/blog/rock-your-next-whiteboard-test/#:~:text=A%20whiteboard%20interview%20is%20a,and%20go%20over%20your%20solution.).


<p align="center">
<img src="src/assests/intervew.jpg" width=350 height=200> 
</p>

Photo by <a href="https://unsplash.com/@jeswinthomas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeswin Thomas</a> on <a href="https://unsplash.com/s/photos/whiteboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
<br>

### Solution:
Create a flash card game that ask a random code challenge. With using a ‘flash card method’ it can help the user remember their answers quicker by creating a deeper connection with the [neurons in the brain](https://www.petersons.com/blog/why-flashcards-work/).

The card has two sides: a front and back.The front shows the problem, and a visual. Then when a button is clicked ‘flip’ to the back and shows a plausible algorithm, and pseudocode. The challenges are based on [LeetCode](https://leetcode.com/problemset/all/) challenges so the person can test out their code in LeetCode. Also all algorithm and pseudocode are a possible solution, because in code their are many ways to get to the solution.

This is done by the user clicking a button for a random challenge. When the button is clicked it send the api to get random challenge from it server. Then renders a questions to the user. For more information on the backend-end visit [here](https://github.com/lizkavalski/codeChallenges-backend)
