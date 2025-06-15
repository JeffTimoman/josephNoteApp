"use client";
import { Note } from "../../../models/Note";
import NoteCard from "../../../components/notes/Card";

export default function NotesIndex() {
    var notes: Note[] = [
      {
        id: 1,
        title: "Grocery List",
        content: "Buy milk, eggs, bread",
        writer: "Alice",
        categoryId: 1,
      },
      {
        id: 2,
        title: "Meeting Notes",
        content: "Discuss quarterly goals",
        writer: "Bob",
        categoryId: 2,
      },
      {
        id: 3,
        title: "Workout Plan",
        content: "Monday: Chest, Tuesday: Back",
        writer: "Carol",
        categoryId: 3,
      },
      {
        id: 4,
        title: "Book Ideas",
        content: "Sci-fi novel about time loops",
        writer: "Dave",
        categoryId: 4,
      },
      {
        id: 5,
        title: "Travel Checklist",
        content: "Passport, charger, clothes",
        writer: "Eve",
        categoryId: 5,
      },
      {
        id: 6,
        title: "Movie Watchlist",
        content: "Inception, Interstellar, Tenet",
        writer: "Alice",
        categoryId: 1,
      },
      {
        id: 7,
        title: "Recipe: Pancakes",
        content: "Flour, eggs, milk, sugar",
        writer: "Bob",
        categoryId: 1,
      },
      {
        id: 8,
        title: "Project Plan",
        content: "Design, Develop, Test",
        writer: "Carol",
        categoryId: 2,
      },
      {
        id: 9,
        title: "Yoga Routine",
        content: "Sun salutation, Warrior pose",
        writer: "Dave",
        categoryId: 3,
      },
      {
        id: 10,
        title: "Blog Topics",
        content: "AI, Productivity, Health",
        writer: "Eve",
        categoryId: 4,
      },
      {
        id: 11,
        title: "Packing List",
        content: "Shoes, jackets, snacks",
        writer: "Alice",
        categoryId: 5,
      },
      {
        id: 12,
        title: "To-Do Today",
        content: "Email, report, groceries",
        writer: "Bob",
        categoryId: 1,
      },
      {
        id: 13,
        title: "Sprint Planning",
        content: "Backlog grooming",
        writer: "Carol",
        categoryId: 2,
      },
      {
        id: 14,
        title: "Fitness Goals",
        content: "Lose 5kg in 2 months",
        writer: "Dave",
        categoryId: 3,
      },
      {
        id: 15,
        title: "Short Story",
        content: "The girl who paused time",
        writer: "Eve",
        categoryId: 4,
      },
      {
        id: 16,
        title: "Weekend Trip",
        content: "Beach, hiking, campfire",
        writer: "Alice",
        categoryId: 5,
      },
      {
        id: 17,
        title: "Shopping List",
        content: "Fruits, veggies, detergent",
        writer: "Bob",
        categoryId: 1,
      },
      {
        id: 18,
        title: "Team Meeting",
        content: "Discuss roadmap",
        writer: "Carol",
        categoryId: 2,
      },
      {
        id: 19,
        title: "Cardio Plan",
        content: "30 min run every morning",
        writer: "Dave",
        categoryId: 3,
      },
      {
        id: 20,
        title: "Poem Draft",
        content: "The wind whispers to me",
        writer: "Eve",
        categoryId: 4,
      },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-black">Your Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {notes.map((note) => (
                    <NoteCard 
                        key={note.id} 
                        note={note}
                        onEdit={(note) => alert(`Edit note with ID: ${note.id}`)}
                        onDelete={(id) => alert(`Delete note with ID: ${id}`)}
                    />
                ))}
            </div>
        </div>
    );
}
