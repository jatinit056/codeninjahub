import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLanguageBySlug, programmingLanguages } from '@/lib/languagesData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Code2, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Building2,
  TrendingUp,
  FileCode2,
  Layers,
  Swords
} from 'lucide-react';

// Generate static params for all languages (for static generation)
export async function generateStaticParams() {
  return programmingLanguages.map((lang) => ({
    slug: lang.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const language = getLanguageBySlug(slug);
  
  if (!language) {
    return {
      title: 'Language Not Found',
      description: 'The programming language you are looking for does not exist.',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return {
    title: `${language.name} Programming Language - Complete Guide ${new Date().getFullYear()}`,
    description: `Learn ${language.name} programming language. ${language.description} Features, use cases, code examples, and best practices.`,
    keywords: [
      `${language.name.toLowerCase()} programming`,
      `${language.name.toLowerCase()} tutorial`,
      `learn ${language.name.toLowerCase()}`,
      `${language.name.toLowerCase()} guide`,
      `${language.name.toLowerCase()} features`,
      `${language.name.toLowerCase()} use cases`,
      ...language.useCases.map(uc => uc.toLowerCase())
    ],
    openGraph: {
      title: `${language.name} Programming Language - Complete Guide`,
      description: language.description,
      type: 'article',
      url: `${baseUrl}/languages/${language.slug}`,
      siteName: 'CodeNinjaHub',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${language.name} Programming Language Guide`,
      description: language.description,
    },
    alternates: {
      canonical: `${baseUrl}/languages/${language.slug}`,
    },
  };
}

export default async function LanguagePage({ params }) {
  const { slug } = await params;
  const language = getLanguageBySlug(slug);

  if (!language) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${language.name} Programming Language - Complete Guide`,
    description: language.description,
    author: {
      '@type': 'Organization',
      name: 'CodeNinjaHub'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CodeNinjaHub',
      url: baseUrl
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/languages/${language.slug}`
    },
    about: {
      '@type': 'ComputerLanguage',
      name: language.name,
      dateCreated: `${language.yearCreated}-01-01`,
      creator: {
        '@type': 'Person',
        name: language.creator
      },
      description: language.description
    }
  };

  // Software Application Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: language.name,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    description: language.longDescription,
    softwareVersion: language.latestVersion,
    dateCreated: `${language.yearCreated}-01-01`,
    creator: {
      '@type': 'Person',
      name: language.creator
    },
    featureList: language.features,
    keywords: language.useCases.join(', ')
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Languages',
        item: `${baseUrl}/#languages`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: language.name,
        item: `${baseUrl}/languages/${language.slug}`
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${language.name} used for?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${language.name} is commonly used for ${language.useCases.join(', ')}.`
        }
      },
      {
        '@type': 'Question',
        name: `When was ${language.name} created?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${language.name} was created in ${language.yearCreated} by ${language.creator}.`
        }
      },
      {
        '@type': 'Question',
        name: `What are the main features of ${language.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Key features of ${language.name} include: ${language.features.join(', ')}.`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/#languages" className="text-gray-400 hover:text-orange-400 transition-colors">
              Languages
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white font-medium">{language.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Languages
            </Link>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{language.icon}</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                      {language.name}
                    </h1>
                    <p className="text-xl text-orange-400 font-medium mt-1">
                      {language.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {language.longDescription}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-gray-800/50 text-gray-200 border-gray-700 py-2 px-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Created {language.yearCreated}
                  </Badge>
                  <Badge className="bg-gray-800/50 text-gray-200 border-gray-700 py-2 px-4">
                    <User className="h-4 w-4 mr-2" />
                    {language.creator}
                  </Badge>
                  <Badge className="bg-gray-800/50 text-gray-200 border-gray-700 py-2 px-4">
                    <FileCode2 className="h-4 w-4 mr-2" />
                    {language.fileExtension}
                  </Badge>
                  <Badge className="bg-gray-800/50 text-gray-200 border-gray-700 py-2 px-4">
                    <Layers className="h-4 w-4 mr-2" />
                    v{language.latestVersion}
                  </Badge>
                </div>
              </div>

              {/* Popularity Card */}
              <Card className="w-full lg:w-80 bg-gray-900/80 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Popularity Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">TIOBE Index</span>
                      <span className="text-2xl font-bold text-white">#{language.popularity.tiobeRank}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">GitHub</span>
                      <span className="text-2xl font-bold text-white">#{language.popularity.githubRank}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Stack Overflow</span>
                      <span className="text-2xl font-bold text-white">#{language.popularity.stackOverflowRank}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-start bg-gray-900/80 p-1 mb-8">
                <TabsTrigger value="overview" className="flex-1 sm:flex-none">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="features" className="flex-1 sm:flex-none">
                  Features
                </TabsTrigger>
                <TabsTrigger value="code" className="flex-1 sm:flex-none">
                  Code Example
                </TabsTrigger>
                <TabsTrigger value="proscons" className="flex-1 sm:flex-none">
                  Pros & Cons
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Use Cases */}
                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Zap className="h-5 w-5 text-amber-400" />
                        Popular Use Cases
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {language.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Companies */}
                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Building2 className="h-5 w-5 text-orange-500" />
                        Companies Using {language.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {language.companies.map((company, idx) => (
                          <Badge 
                            key={idx}
                            className="bg-gray-800 text-gray-200 border-gray-700 py-2 px-4 text-sm"
                          >
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Paradigms & Typing */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Programming Paradigms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {language.paradigm.map((p, idx) => (
                          <Badge 
                            key={idx}
                            style={{ backgroundColor: `${language.color}20`, color: language.color, borderColor: `${language.color}40` }}
                            className="border py-1 px-3"
                          >
                            {p}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Type System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-semibold text-gray-200">
                        {language.typing}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="features">
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Key Features of {language.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {language.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg"
                        >
                          <CheckCircle2 
                            className="h-6 w-6 flex-shrink-0 mt-0.5" 
                            style={{ color: language.color }}
                          />
                          <span className="text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code">
                <Card className="bg-gray-900/80 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Code2 className="h-5 w-5" style={{ color: language.color }} />
                      {language.name} Code Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-950 p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm text-gray-300 whitespace-pre">
                        {language.codeExample}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="proscons">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="h-5 w-5" />
                        Advantages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {language.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/80 border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-400">
                        <XCircle className="h-5 w-5" />
                        Considerations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {language.cons.map((con, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Languages */}
        <section className="py-12 px-4 border-t border-orange-500/20">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Languages</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {programmingLanguages
                .filter(l => l.slug !== language.slug)
                .map((lang) => (
                  <Link key={lang.id} href={`/languages/${lang.slug}`}>
                    <Card className="bg-gray-900/80 border-gray-800 hover:border-orange-500/50 transition-all">
                      <CardContent className="p-4 flex items-center gap-4">
                        <span className="text-3xl">{lang.icon}</span>
                        <div>
                          <h3 className="text-white font-semibold">{lang.name}</h3>
                          <p className="text-gray-400 text-sm">{lang.tagline}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-orange-500/20 py-8 px-4">
          <div className="container mx-auto text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeNinjaHub. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
