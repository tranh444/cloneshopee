import RegisterHeader from '../../components/registerHeader'
import Footer from '../../components/Footer'
interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      <div className='pt-20'>{children}</div>
      <Footer />
    </div>
  )
}
