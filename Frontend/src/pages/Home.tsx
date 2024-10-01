//src /pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { db, auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

interface Todo {
  id: string;
  subject: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const updatedTodos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      } as Todo));
      setTodos(updatedTodos);
    });
    return unsubscribe;
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      await addDoc(collection(db, "todos"), {
        subject: newTodo,
        completed: false,
      });
      setNewTodo("");
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    await updateDoc(doc(db, "todos", id), { completed: !completed });
  };

  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout} disabled={isLoggingOut}>
        {isLoggingOut ? 'Logging out...' : 'Logout'}
      </button>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.subject}
            </span>
            <button onClick={() => toggleTodo(todo.id, todo.completed)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => navigate(`/todos/${todo.id}`)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;