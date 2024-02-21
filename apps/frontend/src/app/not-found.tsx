import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>没有找到相关数据</h2>
      <Link href="/">返回主页</Link>
    </div>
  )
}
