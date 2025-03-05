import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import moment from 'moment';

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: number;
    tags: string[];
    done: boolean;
}

const app: FastifyInstance = Fastify();
const tasks: Task[] = [{
    id: 0,
    title: "Test0",
    description: "string",
    dueDate: 1746205163,
    tags: ["tag1", "tag2"],
    done: false
}, {
    id: 1,
    title: "Test1",
    description: "description description description description description description description description description description description description description ",
    dueDate: 1746305163,
    tags: [],
    done: true
}, {
    id: 2,
    title: "Test2",
    description: "string",
    dueDate: 1743301163,
    tags: ["tag1"],
    done: false
}];

// Tags von String, in dem sie durch ","," " oder ";" getrennt werden mit dem regex in ein Array parsen und randleerzeichen entfernen
const parseTags = (tags: string | string[]): string[] => {
    if (typeof tags === 'string') {
        return tags.split(/[\s,;]+/).map(tag => tag.trim()).filter(tag => tag.length > 0);
    }
    return [];
};

// task erstellen
app.post('/create', (request: FastifyRequest, reply: FastifyReply) => {
    const { title, description = '', dueDate, tags = '' } = request.body as {
        title: string;
        description?: string;
        dueDate: string;
        tags?: string | string[];
    };
    if (!title || !dueDate) {
        return reply.status(400).send({ error: 'Title and dueDate are required' });
    }

    const timestamp = moment(dueDate, moment.ISO_8601, true).unix();
    if (!moment(dueDate, moment.ISO_8601, true).isValid()) {
        return reply.status(400).send({ error: 'Invalid date. provide iso 8601' });
    }

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;

    const newTask: Task = {
        id: newId,
        title,
        description,
        dueDate: timestamp,
        tags: parseTags(tags),
        done: false,
    };
    tasks.push(newTask);
    reply.status(201).send(newTask);
});

// status setzen
app.patch('/:id/set', (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const { done } = request.body as { done: boolean };
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return reply.status(404).send({ error: 'Task not found' });

    task.done = done === true;
    reply.send(task);
});

// task editieren
app.put('/:id/edit', (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return reply.status(404).send({ error: 'Task not found' });

    const { title, description, dueDate, tags } = request.body as Partial<Task>;
    if (title) task.title = title;
    if (description) task.description = description;
    if (dueDate) {
        const timestamp = moment(dueDate, moment.ISO_8601, true).unix();
        if (!moment(dueDate, moment.ISO_8601, true).isValid()) {
            return reply.status(400).send({ error: 'Invalid date!' });
        }
        task.dueDate = timestamp;
    }
    if (tags) task.tags = parseTags(tags);

    reply.send(task);
});

// task löschen
app.delete('/:id/delete', (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) return reply.status(404).send({ error: 'Task not found' });

    tasks.splice(index, 1);
    reply.status(204).send();
});

// alle tasks zurückgeben
app.get('/list', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send(tasks);
});

// task anhand der id zurückgeben
app.get('/:id', (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return reply.status(404).send({ error: 'Task not found' });
    reply.send(task);
});


app.listen({ port: 3000 }, () => {
    console.log('Server running on port 3000');
});
