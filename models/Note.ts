export interface Note {
  id: number;
  title: string;
  content: string;
  writer: string;
  categoryId: number;
}

export interface NoteCardProps {
  note: Note;
  onEdit?: (note: Note) => void;
  onDelete?: (id: number) => void;
}
