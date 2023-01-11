// Nextjs에서 pages안에의 내용은 
// 주소를 따라가기에 소문자로 작성한다
// 컴포넌트로 사용하는 이름규칙은 대문자
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';

const FirstPost = () => {
    return (  
        <Layout>
            <h1>First Post</h1>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
            <img src="/images/profile.jpg" alt="Your Name" />
            <Image
                src="/images/profile.jpg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
        </Layout>
    );
}
 
export default FirstPost;