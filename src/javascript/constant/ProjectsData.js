const projectsData = new Map();

const derbyshireGroup = {
    id: 'derbyshire-group',
    title: 'Derbyshire Group',
    description:
        'Garage responsive website, with one page per service, and a contact page including a contact form and Google Map. Done in only a couple months while working full time, everything was created from scratch (design, content, features...).',
    descriptionDetailed:
        'While discussing with my mechanic, I found out he needed a new responsive website for his garage. He gave me total freedom to create something that would inform customers about his services. There is one page per service, and a contact page with a contact form and Google Map. At that time, I was working full time at Wilko.com, but I managed to do the website in a couple months.I had help from a back-end developer for all the server bits, and from a front-end developer to guide me to the best practices. Because of that collaboration, we used Jira and Bitbucket to manage the project. It was my first real commercial project.',
    skills: [
        'HTML5',
        'CSS3',
        'ES6',
        'SASS',
        'React',
        'React-router',
        'Webpack',
        'Mobx',
        'Jira',
        'Bitbucket',
        'Fetch',
        'Flow'
    ],
    link: 'https://derbyshire-group.com/'
};

projectsData.set(derbyshireGroup.id, derbyshireGroup);

const dansMaCuisine = {
    id: 'dans-ma-cuisine',
    title: 'Dans ma cuisine',
    description:
        'Personal project to train on latest technologies (React, Mobx, Intl, Lunr...). It is a recipes responsive website, where recipes are sorted by type, but you can also search for a particular recipe or ingredient. The whole website can be translated in French or English.',
    descriptionDetailed:
        "Dans ma cuisine is a personal project, a responsive recipe website, to keep training, helped by an experienced developer. The recipes are sorted by type (starters, mains, desserts...), but you can also search for them by keyword (name of the recipe, ingredient, type like sauce, vegetarian...). All the website can be translated into French or English. In the long term, I hope I'll have enough time to put in there all my recipes, so I can have them with me everywhere I go. More info on Github",
    skills: ['HTML5', 'CSS3', 'ES6', 'SASS', 'React', 'React-router', 'Webpack', 'Mobx', 'Intl', 'Lunr'],
    link: 'https://github.com/micheledh/dans-ma-cuisine'
};

projectsData.set(dansMaCuisine.id, dansMaCuisine);

const smallProjects = {
    id: 'small-projects',
    title: 'Old small projects (blog-redux, Nutella, arcade game)',
    description:
        "Small various projects, done either to train or as interview exercises. Most of them are from the beginning of my training, so not really 'code-wow'. But still, I was proud of them at the time, so they have their place here.",
    descriptionDetailed:
        'The blog-redux project was an interview exercise, to show skills with react and redux. The design was given along with some instructions (posts order, actions on click...).\n' +
        'The Nutella project was a personal project, given by an experienced developer to train me on css. The goal was to build a nutella jar, with a lid moving when being hovered, all thanks to css.\n' +
        'The arcade game was a project within the Front-end Nanodegree. Images and basic code were given, but I had to use Javascript to have the game displayed and to make it followed the rules (win/lose rules, moves allowed or not...).',
    skills: ['HTML5', 'CSS3', 'ES6', 'SASS', 'React', 'Webpack', 'Redux', 'Fetch'],
    link: 'https://github.com/micheledh?tab=repositories'
};

projectsData.set(smallProjects.id, smallProjects);

export default projectsData;
