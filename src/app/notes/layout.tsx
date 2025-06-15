export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {children}
    </div>
  );
}