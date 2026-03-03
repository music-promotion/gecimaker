import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - 黑白极简设计 */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-sm text-gray-500 mt-2 font-light tracking-wide">
            {siteConfig.description}
          </p>
        </div>
      </header>

      {/* Hero Section - 文艺笔触风格 */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* 主标题区域 - 手写笔触感 */}
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 mt-8 leading-tight">
              用文字<br />
              <span className="relative inline-block">
                谱写旋律
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              从灵感闪现到完整作品，探索歌词创作的艺术与技巧
            </p>
            
            {/* CTA - 极简按钮 */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900 hover:shadow-lg"
            >
              开始创作
            </a>
          </div>

          {/* Categories - 网格布局 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 mb-20 border border-gray-200">
            {siteConfig.theme.categories.map((category, index) => (
              <Link
                key={category}
                href="/articles"
                className="bg-white p-8 hover:bg-gray-50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 text-xs text-gray-300 font-mono">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {category}
                </h3>
                <div className="w-8 h-px bg-gray-900 group-hover:w-16 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* 文章入口 - 简约设计 */}
          <div className="text-center mb-20">
            <Link
              href="/articles"
              className="inline-block px-10 py-4 text-sm tracking-widest uppercase border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              浏览所有文章
            </Link>
          </div>

          {/* Product Promotion - 黑白对比 */}
          <div className="bg-gray-900 p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">
                让 AI 为你的歌词配上旋律
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed max-w-2xl font-light">
                {siteConfig.targetProduct.description}
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"
              >
                立即体验 →
              </a>
            </div>
          </div>

          {/* 创作理念 - 文艺段落 */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <blockquote className="text-xl text-gray-700 leading-relaxed font-light italic border-l-2 border-gray-900 pl-6 text-left">
              "每一首歌都始于一个念头，每一句歌词都承载着情感。
              在这里，我们不仅教你如何写歌词，更引导你发现内心的声音。"
            </blockquote>
          </div>

          {/* Related Sites - 极简列表 */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-6">
              相关推荐
            </h3>
            <div className="space-y-4">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-900 transition-colors">
                    <span className="text-base text-gray-900 group-hover:text-gray-600 transition-colors">
                      {site.name}
                    </span>
                    <span className="text-gray-400 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer - 极简页脚 */}
      <footer className="border-t border-gray-200 mt-20 py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400">
            {siteConfig.name} © 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
