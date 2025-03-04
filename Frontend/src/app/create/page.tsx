'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface TaskForm {
    title: string;
    description: string;
    dueDate: string;
    tags: string;
}

export default function TaskForm() {
    const { register, handleSubmit, reset } = useForm<TaskForm>();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data: TaskForm) => {
        setLoading(true);
        console.log(JSON.stringify(data))
        try {
            const response = await fetch('http://localhost/test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                reset();
                router.refresh();
            } else {
                console.error('Error creating task');
            }
        } catch (error) {
            console.error('Request failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title', { required: true })} placeholder="Title" />
            <textarea {...register('description')} placeholder="Description" />
            <input type="datetime-local" {...register('dueDate', { required: true })} />
            <input {...register('tags')} placeholder="Tags (comma, space, semicolon)" />
            <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Task'}
            </button>
        </form>
    );
}
