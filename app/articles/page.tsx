import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk']">
      {/* Brutalist Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-6 py-8">
          <Link href="/" className="text-4xl font-black text-black uppercase tracking-tight hover:text-[#EC4899] font-['Archivo'] cursor-pointer">
            {siteConfig.name}
          </Link>
          <p className="text-base text-gray-700 mt-3 font-normal">节日音乐资讯与推荐</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Page Title - Stark Typography */}
        <div className="mb-16 border-4 border-black p-10 bg-[#FDF2F8]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-4 h-4 bg-[#EC4899]"></div>
            <span className="text-sm font-mono text-gray-600 uppercase">// ARTICLES</span>
          </div>
          <h1 className="text-6xl font-black text-[#831843] uppercase font-['Archivo']">
            文章列表
          </h1>
        </div>
        
        {/* Category Navigation - Visible Grid */}
        <div className="mb-16 border-4 border-black bg-black p-8">
          <div className="text-sm font-mono text-gray-400 mb-6 uppercase">快速导航</div>
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <a
                key={category}
                href={`#${category}`}
                className="px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-wider border-2 border-white hover:bg-[#06B6D4] hover:text-white hover:border-[#06B6D4] cursor-pointer"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Articles by Category - Asymmetric Layout */}
        <div className="space-y-20">
          {categories.map((category, catIndex) => {
            const categoryArticles = articles.filter(a => a.category === category)
            return (
              <section key={category} id={category} className="scroll-mt-8">
                {/* Category Header */}
                <div className="flex items-center gap-6 mb-10">
                  <span className="text-6xl font-black text-[#EC4899] font-mono">
                    {String(catIndex + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-4xl font-black text-black uppercase font-['Archivo']">
                      {category}
                    </h2>
                    <div className="w-24 h-1 bg-[#EC4899] mt-3"></div>
                  </div>
                </div>

                {/* Articles Grid - Brutalist Cards */}
                <div className="grid grid-cols-1 gap-0 border-4 border-black">
                  {categoryArticles.map((article, index) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="border-b-4 last:border-b-0 border-black p-8 bg-white hover:bg-[#FDF2F8] cursor-pointer group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-2xl font-black text-[#EC4899] font-mono">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-mono text-gray-500 uppercase">
                              {article.date}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#EC4899] uppercase tracking-tight font-['Archivo']">
                            {article.title}
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed">
                            {article.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-black group-hover:translate-x-2 transition-transform">
                          <span className="text-sm font-bold uppercase">阅读</span>
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Back to Top - Brutalist Button */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-wider border-4 border-black hover:bg-[#EC4899] hover:border-[#EC4899] cursor-pointer"
          >
            ↑ 返回顶部
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black mt-20 py-12 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-mono uppercase text-white tracking-widest">
            {siteConfig.name} © 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
