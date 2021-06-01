const express = require('express');
const cors = require('cors');

const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(cors());

app.use(express.json());

const projects = [];

//Middleware => Interceptor de requisições que interrompe totalmente a requisição ou altera dados dela.
function logRequests(request, response, next)
{
    const { method, url } = request;
    
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    
    console.log(logLabel);

    return next(); //Próximo middleware, necessário isso para dar continuidade no fluxo da aplicação.
}

function validateProjectId(request, response, next)
{
    const { id } = request.params;

    if(!validate(id)) {
        return response.status(400).json({ error : "Invalid project ID."});
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId); //Using the middleware only in routes that has this type of semmantic

app.get('/projects', /*logRequests, adicionando o middleware somente nessa rota*/ (request, response) => {
    const { title } = request.query;

    const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuidv4(), title, owner };

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0)
    {
        return response.status(404).json({ error : 'Project not found.'});
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {

    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0)
    {
        return response.status(404).json({ error : 'Project not found.'});
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚀 Back-end started!');
});