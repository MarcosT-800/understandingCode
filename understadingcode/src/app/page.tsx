import Image from 'next/image'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
    <div className='flex flex-1'>
      <aside className='w-72 bg-zinc-900 p-6' >
        <div className="flex itens-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
        </div>
        <nav className="space-y-5">
          <a href="#" className='flex itens-center gap-2 text-xs font-semibold text-zinc-100'>
            Home
          </a>

          <a href="#" className='flex itens-center gap-2 text-xs font-semibold text-zinc-100'>
            Home
          </a>

          <a href="#" className='flex itens-center gap-2 text-xs font-semibold text-zinc-100'>
            Home
          </a>
        </nav>

        <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Curso A</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Curso A</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Curso A</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Curso A</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Curso A</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Curso A</a>

        </nav>
       
      </aside>
      <main className='flex-1 p-6'>
        <div className="flex flex-itens flex-col gap-4">

      <h1 className="font-bold text-3xl mt-10">Welcome to Community</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/80 group rounded flex itens-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/exemplo2.jpg" width={90} height={120} alt='capa do curso'/>
        <strong>Nome</strong>
        </div>

        <div className="bg-white/80 group rounded flex itens-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/exemplo2.jpg" width={90} height={120} alt='capa do curso'/>
        <strong>Nome</strong>
        </div>

        <div className="bg-white/80 group rounded flex itens-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/exemplo2.jpg" width={90} height={120} alt='capa do curso'/>
        <strong>Nome</strong>
        </div>

        <div className="bg-white/80 group rounded flex itens-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/exemplo2.jpg" width={90} height={120} alt='capa do curso'/>
        <strong>Nome</strong>
        </div>
      </div>
        </div>

        <h2 className="font-semibold text-2xl mt-10">Cursos em destaques</h2>

        <div className="grid grid-cols-5 gap-4 mt-4">
          <a href="#" className="bg-red-800 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/exemplo2.jpg" className="w-full" width={120} height={120} alt='capa do curso'/>
            <strong className="font-normal">Nome</strong>
            <span className="text-xs text-zinc-400">Descrição</span>
          </a>

          <a href="#" className="bg-green-800 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/exemplo2.jpg" className="w-full" width={120} height={120} alt='capa do curso'/>
            <strong className="font-normal">Nome</strong>
            <span className="text-xs text-zinc-400">Descrição</span>
          </a>

          <a href="#" className="bg-blue-800 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/exemplo2.jpg" className="w-full" width={120} height={120} alt='capa do curso'/>
            <strong className="font-normal">Nome</strong>
            <span className="text-xs text-zinc-400">Descrição</span>
          </a>

          <a href="#" className="bg-purple-800 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/exemplo2.jpg" className="w-full" width={120} height={120} alt='capa do curso'/>
            <strong className="font-normal">Nome</strong>
            <span className="text-xs text-zinc-400">Descrição</span>
          </a>

          <a href="#" className="bg-pink-800 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/exemplo2.jpg" className="w-full" width={120} height={120} alt='capa do curso'/>
            <strong className="font-normal">Nome</strong>
            <span className="text-xs text-zinc-400">Descrição</span>
          </a>
        </div>


      </main>
    </div>
      <Footer/>
 </div>
  )
}
