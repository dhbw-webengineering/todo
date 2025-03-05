'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";

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
            const response = await fetch('http://localhost:3001/api/entry/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                reset();
                router.refresh();
            } else {
                console.error('Error creating task');
                alert("Error creating task")
            }
        } catch (error) {
            console.error('Request failed', error);
            alert("Error creating task")
        } finally {
            setLoading(false);
            location.href = '/';
            alert("created task\n" + JSON.stringify(data))
        }
    };

    return (
        <div className={styles.createFormContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', { required: true })} placeholder="Title" />
                <textarea {...register('description')} placeholder="Description" />
                <input type="datetime-local" {...register('dueDate', { required: true })} />
                <input {...register('tags')} placeholder="Tags (getrennt durch Komma Space Simekoleon)" />
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Task'}
                </button>
            </form>
        </div>

    );
}
