import Link from 'next/link';
import { Code2, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <Code2 className="h-16 w-16 text-blue-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Language Not Found</h1>
        <p className="text-slate-400 mb-8 max-w-md">
          The programming language you're looking for doesn't exist in our database yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
