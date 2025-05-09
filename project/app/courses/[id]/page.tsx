// app/courses/[id]/page.tsx

interface Params {
  id: string;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  // Ideally fetch from your DB or API
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    // Add as many as needed or fetch dynamically
  ];
}

export default function CoursePage({ params }: { params: Params }) {
  const { id } = params;

  return (
    <div>
      <h1>Course Details for ID: {id}</h1>
      {/* You can fetch course details here using the ID */}
    </div>
  );
}
