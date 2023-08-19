import { redirect } from "next/dist/server/api-utils";
import Bloglist from "./../components/Bloglist";
import { getSession } from "next-auth/react";
export default function Home({ articles,session }) {
  console.log("articles", articles[0]);

const filterdata = articles.slice(4)  
  
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-[30px] font-semibold mt-6">Profile</div>
      {
        session ? <div className="max-w-[1000px] py-6 px-6 rounded-3xl mt-8 create-blog-container mx-auto">
        <div className="text-center mb-6">Create a New Blog</div>
        <div className="flex flex-col space-y-5 mx-auto  max-w-[700px]">
          <input
            type="text"
            name="blogtitle"
            placeholder="Title"
            className=" h-11 rounded-lg blog-fields input"
            id="blogtitle"
          />
          <input
            type="text"
            name="blogdesc"
            placeholder="What's in your mind"
            className=" h-24 rounded-lg blog-fields input"
            id="blogdesc"
          />
          <div className="cursor-pointer bg-[#ff9900] hover:bg-[#ffad33] rounded-xl h-10 w-32 text-white font-medium flex items-center justify-center">
            Add a Demo
          </div>
        </div>
      </div> :null
      }
      
      <div className="mt-12">
        <div className="mb-4 text-[32px] font-medium">List Of All Blogs</div>
        {/* <Bloglist articles={articles} /> */}
        {/* {author,title,description,publishedAt,url,urlToImage} */}
        {filterdata.map((node) => {
          return (
            <div className=" my-6 py-4 px-4" style={{border:"1px solid gray",borderRadius:"30px"}}>
              <div className="flex items-center gap-5">
                <img src={node.urlToImage} className="w-80 h-80 object-cover rounded-[30px]" alt="" />
                <div className="space-y-2">
                  <div className="text-[24px] text-blue-700 ">
                  <span className="text-[22px] text-black opacity-60">Written by</span> {node.author? <span> {node.author}</span> :"Anonymous"}
                  </div>
                  <div className="text-[30px] font-medium">{node.title}</div>
                  <div className="text-[18px] text-black font-semibold opacity-60 ">{node.publishedAt.slice(0,10)}</div>
                  <div className="text-20px font-medium leading-6">{node.description}</div>
                  <a href={node.url} className="text-blue-700 hover:font-semibold" target="blank">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({req}) => {
  const session= await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:"/auth/login",
        permanent:false
      }
    }
  }
  
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f562365939a4e94a85684951acd9b41"
  );

  const data = await response.json();

  const { articles } = data;

  return {
    props: {
      articles,
      session
    },
  };
};
