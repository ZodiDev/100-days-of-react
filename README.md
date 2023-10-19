# 100-days-of-react

## Introduction

I've always aspired to be a developer, but I've felt my skills lag behind others'. Although I've been coding intermittently for several years, my progress hasn't been as swift as I'd hoped. Thus, I embarked on this challenge to push myself and enhance my programming skills.

## Day 1: Blog Project
Date: October 18, 2023

### Today's Learning

Props: Gained an understanding of how props function within React.

### Resources Used

Tailwindcss documentation

Brocode Tutorial on Props [https://www.youtube.com/watch?v=uvEAvxWvwOs]

### Today's Project

Name: Blog

Description: A fundamental blog website

Demo: [Link to the deployed demo, e.g., on Vercel, Netlify, GitHub Pages, etc.]

### Challenges Faced

- Fine-tuning the optimal work environment led to numerous modifications.
- Integrating tailwind with vite.

### What I'd Do Differently

- Prioritize thoroughly reading the documentation and understanding the nuances of implementing features in vite, especially since implementations can vary based on the React library in use.
  
- Strategize more effectively about the construction of the project.
  
- Introduce subtle animations to enhance the dynamic feel.
  
- Aim for a more streamlined approach to adding blog content, avoiding hardcoding, which would warrant dedicating more time to each project.

### Screenshots / GIFs
![image](https://github.com/ZodiDev/100-days-of-react/assets/102633756/62f4e37a-81b7-47bf-96a6-08d205031e05)

### Thoughts & Reflection

I often dive headfirst into tasks without pausing to strategize. It's essential for me to pace myself. This tendency isn't exclusive to coding but manifests in various areas of my life. Today's experience highlighted how this approach can be counterproductive. Nevertheless, I managed to design a respectable website with minimal external assistance. While I take pride in this, I also recognize the potential benefits of occasionally seeking out external resources to broaden my knowledge.


## Day 2: Quiz Project
Date: October 19, 2023

### Today's Learning

- Grasped certain design principles, introducing shadows, highlight effects, and a background.
  
- Learned to leverage ChatGPT more proficiently for both learning and inspiration.
  
- Realized the significance of understanding the core fundamentals of JavaScript.

### Resources Used

Tailwindcss documentation

ChatGPT

W3Schools [https://www.w3schools.com/]

### Today's Project

Name: Quizzes

Description: A quiz featuring 10 random questions where answers can be either right or wrong.

Demo: [Link to the deployed demo, e.g., on Vercel, Netlify, GitHub Pages, etc.]

### Challenges Faced

- Struggled with certain tasks, leading to prolonged completion times.
  
- Faced difficulty conceptualizing a pleasing design for the website.
  
- Found JavaScript challenging, especially since it's been a while since I last used the language.

### What I'd Do Differently

- Strive for more concise code; the current project has excessive lines of code than necessary.
  
- Similar to yesterday, I need to prioritize better project planning and execution. My efforts today were better but still inadequate.
  
- Consider referencing tutorials to simplify the development process.
  
- Spend additional time refining the aesthetics of the website.

### Screenshots / GIFs
![image](https://github.com/ZodiDev/100-days-of-react/assets/102633756/a2bdaa44-0371-4fcb-b350-9488146dfb1b)

### Thoughts & Reflection

While I penned an extensive amount of JavaScript, much of it was rudimentary and repetitive. Had I had more time, I would have explored more efficient coding practices. Despite the challenges, the project was enjoyable and proved to be a significant learning experience. I need to strengthen my foundational knowledge. I appreciated the website's final aesthetics and some of my design choices, but the underlying code certainly requires improvement.

### ChatGPT's Thoughts and Critique

***Code Reusability and Modularity***

The answer options in Question.jsx are replicated four times with slight variations. This repetition calls for a reusable component.

Function calls like selecta, selectb, selectc, and selectd in App.jsx bear strong resemblances. Such logic can be consolidated into a function that accepts parameters.

***Naming and Structure***

Variable names like fourQuestions, question, and answer could be made clearer. Consider renaming to questionsList, answersKey, and choicesForQuestions.

Merging the structure of answers and questions might be beneficial, turning each question into an object holding its choices and the correct answer.

***Scalability***

The current structure might pose challenges if scaling is needed in the future, like adding more answer choices. A more dynamic rendering approach for choices might be helpful.

***User Experience***

Relying on default browser alerts might interrupt user engagement. Using a custom modal or notification system might be more fitting.

***Logic and Data Flow***

In App.jsx, randomly selecting a new question might lead to redundancies if there's a limited question set.

The answer-checking logic is duplicated several times and could benefit from modularization.

***Code Simplicity:***

The useEffect in App.jsx directly calls newQuestion. Streamlining this flow could enhance clarity.

In Question.jsx, the redundant curly braces in onClick, e.g., onClick={() => {{props.selecta()}}}, can be simplified to onClick={() => props.selecta()}.
