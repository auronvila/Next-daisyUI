import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import CustomSwitch from '@/app/components/CustomSwitch';

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Hello Next & daisyUI</h1>
        <Link className="button bg-purple-400 p-4 rounded-2xl mt-4" href={'/users'}>Click to go to the users page</Link>
        <ProductCard/>
        <CustomSwitch/>
      </main>
  )
}
