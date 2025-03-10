'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from "./page.module.css";
import moment from 'moment';

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
            location.href = '/tasks';
            alert("created task\n" + JSON.stringify(data))
        }
    };

    return (
        <div className={styles.pageCenter}>
            <div className={styles.createFormContainer}>
                <h1>Aufgabe erstellen</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('title', { required: true })} placeholder="Titel" />
                    <textarea {...register('description')} placeholder="Beschreibung" />
                    <input type="datetime-local" value={moment().format("YYYY-MM-DDTHH:mm")} {...register('dueDate', { required: true })} />
                    <input {...register('tags')} placeholder="Tags (getrennt durch Komma Space Simekoleon)" />
                    <button type="submit" disabled={loading}>
                        {loading ? <div><Image src="bouncing-circles.svg" alt="" width={20} height={20} /><span>wird erstellt</span></div> : <div><Image src="card.svg" alt="" width={20} height={20} /><span>neue Aufgabe erstellen</span></div>
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}
