"use client";
import React from 'react';
import { Note, NoteCardProps } from '../../models/Note';

const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {note.title}
        </h3>
        <div className="flex gap-2 ml-2">
          {onEdit && (
            <button
              onClick={() => onEdit(note)}
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(note.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
        {note.content}
      </p>
      
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>By: {note.writer}</span>
        <span>Category: {note.categoryId}</span>
      </div>
    </div>
  );
};

export default NoteCard;
