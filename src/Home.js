
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     {title: 'Blog 1', author: 'Author 1' id:'1'},
    //     {title: 'Blog 1', author: 'Author 1' id:'1'},
    //     {title: 'Blog 1', author: 'Author 1' id:'1'},
    // ]);

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     // mew blogs
    //     setBlogs(newBlogs);
    // }
    // npx json-server --watch data/db.json --port 8000
    

// let name = 'allan';
//     const handleClick = () => {
//      console.log('hello, guys')

// const [name, setName] = useState('allan');
//     const [age, setAge] = useState(20);
//     const handleClick = (name) => {
// //    use the setName function to change the value
//           setName('kiche', 'okuna');
//           setAge(30);
      
    
    return (  
        <div className="home">
           
            {error && <div> {error} </div>}
                 {/* //conditional templating */}
                 { isPending && <div>Loading...</div>}
            
                { blogs && <BlogList blogs={blogs} title= "All Blogs" />}
                {/* <button onClick={() => setName('dennis')}>Chsnge name</button>
                <p>{ name }</p> */}


                {/* filtering
                <BlogList blogs={blogs.filter((blog) => blog.author === "Kiche" )} title= "Kiche's Blogs" /> */}
            {/* <h2>HomePage</h2> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Here</button> */}
            {/* referencig a click event */}

            {/* <button onClick={() => {
                console.log('clicked');
            }}> Click Me Again</button> */}
            </div>
    );
        }
export default Home;