import routes from '@/config/routes'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import { NextPageWithLayout } from '@/types'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Seo
        title="ProSkills39 - Pro Skills For Your Success"
        description="Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó."
        url={routes.home}
      />
      
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
