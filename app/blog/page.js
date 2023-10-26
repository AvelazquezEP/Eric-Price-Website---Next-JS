import Layout, { metadata } from '../layout';
import Main from '../components/utils/main';

// metadata.title = 'Blog';

export default function Blog() {
    return (
        <Layout blog>
            <Main>
                <p>BLOG CONTENT</p>
            </Main>
            {/* <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                <p>BLOG CONTENT</p>
            </main> */}
        </Layout>
    );
}