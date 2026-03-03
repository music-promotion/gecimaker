import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk']">
      {/* Brutalist Header - Raw & Stark */}
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-black text-black uppercase tracking-tight font-['Archivo']">
            {siteConfig.name}
          </h1>
          <p className="text-base text-gray-700 mt-3 font-normal">
            {siteConfig.description}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6">
        {/* Hero - Asymmetric Brutalist Layout */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <div className="border-4 border-black p-8 bg-[#FDF2F8]">
              <h2 className="text-6xl md:text-7xl font-black text-[#831843] leading-none mb-6 font-['Archivo']">
                用文字<br />
                谱写<br />
                旋律
              </h2>
              <div className="w-24 h-2 bg-[#EC4899]"></div>
            </div>
            
            <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-[#EC4899] pl-6">
              从灵感闪现到完整作品，探索歌词创作的艺术与技巧。
              每一句歌词都承载着情感，每一个韵脚都是心跳的节奏。
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* CTA Above Fold - Brutalist Button */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#06B6D4] text-white px-8 py-6 text-lg font-bold uppercase tracking-wider border-4 border-black hover:bg-[#0891B2] cursor-pointer text-center"
            >
              开始创作 →
            </a>

            <div className="border-4 border-black p-6 bg-white">
              <div className="text-sm font-mono text-gray-500 mb-2">// FEATURES</div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#EC4899] font-black text-xl">01</span>
                  <span className="text-gray-800">零基础入门教程</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC4899] font-black text-xl">02</span>
                  <span className="text-gray-800">AI 辅助创作技巧</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC4899] font-black text-xl">03</span>
                  <span className="text-gray-800">风格化写作指南</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Categories - Visible Grid Layout */}
        <section className="py-16 border-t-4 border-black">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-[#EC4899]"></div>
            <h3 className="text-3xl font-black uppercase font-['Archivo']">探索分类</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-black">
            {siteConfig.theme.categories.map((category, index) => (
              <Link
                key={category}
                href="/articles"
                className="border-b-4 md:border-r-4 last:border-b-0 md:last:border-r-0 lg:[&:nth-child(3n)]:border-r-0 border-black p-8 bg-white hover:bg-[#FDF2F8] cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-black text-[#EC4899] font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <svg className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-black uppercase tracking-tight">
                  {category}
                </h4>
              </Link>
            ))}
          </div>
        </section>

        {/* Articles CTA - Large Block */}
        <section className="py-16">
          <div className="border-4 border-black bg-black text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC4899] opacity-20 -translate-y-20 translate-x-20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 uppercase font-['Archivo']">
                浏览所有文章
              </h3>
              <p className="text-lg mb-8 max-w-2xl text-gray-300">
                深入了解歌词创作的各个方面，从基础技巧到高级策略，
                我们为你准备了完整的学习路径。
              </p>
              <Link
                href="/articles"
                className="inline-block bg-[#06B6D4] text-white px-10 py-5 text-base font-bold uppercase tracking-wider border-4 border-white hover:bg-[#0891B2] cursor-pointer"
              >
                查看全部 →
              </Link>
            </div>
          </div>
        </section>

        {/* Product Promotion - Stark Contrast */}
        <section className="py-16 border-t-4 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-4 border-black p-10 bg-[#FDF2F8]">
              <div className="text-sm font-mono text-gray-500 mb-4">// AI POWERED</div>
              <h3 className="text-4xl font-black mb-6 text-[#831843] font-['Archivo']">
                让 AI 为你的<br />歌词配上旋律
              </h3>
              <p className="text-base text-gray-800 mb-8 leading-relaxed">
                {siteConfig.targetProduct.description}
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#06B6D4] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider border-4 border-black hover:bg-[#0891B2] cursor-pointer"
              >
                立即体验 →
              </a>
            </div>

            <div className="border-4 border-black p-10 bg-white">
              <blockquote className="text-2xl font-bold text-black leading-tight mb-6 font-['Archivo']">
                "每一首歌都始于一个念头，每一句歌词都承载着情感。"
              </blockquote>
              <div className="w-16 h-1 bg-[#EC4899] mb-6"></div>
              <p className="text-base text-gray-700 leading-relaxed">
                在这里，我们不仅教你如何写歌词，更引导你发现内心的声音。
                从灵感捕捉到韵律编排，从情感表达到意境营造。
              </p>
            </div>
          </div>
        </section>

        {/* Related Sites - Plain List */}
        <section className="py-16 border-t-4 border-black">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-[#06B6D4]"></div>
            <h3 className="text-2xl font-black uppercase font-['Archivo']">相关推荐</h3>
          </div>
          <div className="space-y-0 border-4 border-black">
            {siteConfig.relatedSites.map((site, index) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 border-b-4 last:border-b-0 border-black bg-white hover:bg-[#FDF2F8] cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-[#EC4899] font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-bold text-black">
                    {site.name}
                  </span>
                </div>
                <svg className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
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
