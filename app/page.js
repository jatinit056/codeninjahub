import Link from 'next/link';
import { programmingLanguages } from '@/lib/languagesData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2, TrendingUp, Users, Zap, Swords } from 'lucide-react';

export const metadata = {
  title: 'CodeNinjaHub - Programming Language Guide & Comparison',
  description: 'Explore and compare popular programming languages. Detailed guides for Python, Java, C++ with features, use cases, code examples, and industry adoption.',
  keywords: ['programming languages comparison', 'python guide', 'java tutorial', 'c++ learning', 'coding languages', 'software development'],
  openGraph: {
    title: 'CodeNinjaHub - Programming Language Guide & Comparison',
    description: 'Explore and compare popular programming languages. Detailed guides for Python, Java, C++.',
    type: 'website',
  },
};

export default function HomePage() {
  // JSON-LD Schema for homepage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodeNinjaHub',
    description: 'Comprehensive programming language guide and comparison platform',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/languages/{search_term}`,
      'query-input': 'required name=search_term'
    }
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Programming Languages Collection',
    description: 'A comprehensive collection of programming language guides',
    hasPart: programmingLanguages.map(lang => ({
      '@type': 'Article',
      name: `${lang.name} Programming Language Guide`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/languages/${lang.slug}`,
      description: lang.description
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Header */}
        <header className="border-b border-orange-500/20 backdrop-blur-sm bg-gray-950/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Swords className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold text-white">Code<span className="text-orange-500">Ninja</span>Hub</span>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/#languages" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Languages
                </Link>
                <Link href="/#about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
              Comprehensive Programming Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Programming Languages
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                Python, Java & C++
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore comprehensive guides for the world's most popular programming languages. 
              Compare features, learn best practices, and find the perfect language for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#languages"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-orange-500/25"
              >
                Explore Languages <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-orange-500/20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Code2 className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-gray-400">Languages Covered</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-emerald-500" />
                </div>
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-gray-400">Developers Use</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-pink-500" />
                </div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-400">Industry Relevant</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Updated Content</div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Grid */}
        <section id="languages" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Programming Languages
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Click on any language to explore detailed guides with code examples, use cases, 
                and comparisons to help you make informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingLanguages.map((language) => (
                <Link key={language.id} href={`/languages/${language.slug}`}>
                  <Card className="h-full bg-gray-900/80 border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-4xl">{language.icon}</span>
                        <Badge 
                          style={{ backgroundColor: `${language.color}20`, color: language.color, borderColor: `${language.color}40` }}
                          className="border"
                        >
                          Since {language.yearCreated}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-white">{language.name}</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        {language.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {language.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Top Use Cases</p>
                          <div className="flex flex-wrap gap-1">
                            {language.useCases.slice(0, 3).map((useCase, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">
                                {useCase.split('(')[0].trim()}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">#{language.popularity.tiobeRank}</div>
                              <div className="text-xs text-gray-500">TIOBE</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">#{language.popularity.githubRank}</div>
                              <div className="text-xs text-gray-500">GitHub</div>
                            </div>
                          </div>
                          <span className="text-orange-400 flex items-center gap-1 text-sm font-medium">
                            Learn More <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-900/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">About CodeNinjaHub</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                CodeNinjaHub is your comprehensive resource for understanding programming languages. 
                Whether you're a beginner looking to start your coding journey or an experienced developer 
                exploring new technologies, our detailed guides provide the insights you need.
              </p>
              <p className="text-gray-400">
                Each language guide includes features, use cases, code examples, pros and cons, 
                and real-world company adoption to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-orange-500/20 py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Swords className="h-6 w-6 text-orange-500" />
                  <span className="text-lg font-bold text-white">Code<span className="text-orange-500">Ninja</span>Hub</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Your comprehensive guide to programming languages.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Languages</h3>
                <ul className="space-y-2">
                  {programmingLanguages.map(lang => (
                    <li key={lang.id}>
                      <Link href={`/languages/${lang.slug}`} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                        {lang.name} Guide
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Compare Languages</li>
                  <li>Code Examples</li>
                  <li>Best Practices</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} CodeNinjaHub. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
