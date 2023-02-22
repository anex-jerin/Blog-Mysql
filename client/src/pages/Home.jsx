import { Link } from 'react-router-dom';
const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus aut aliquam omnis eius repellendus vel fugiat esse repellat adipisci velit minus ex porro molestiae voluptates optio, doloremque magni quam.',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rem officiis. Nesciunt sequi, quam magni dolorem hic eveniet eligendi molestias, inventore vitae nam, dolorum aperiam laudantium ullam cumque modi distinctio?
    Numquam ut magnam non quo quae ea placeat cupiditate. Nisi, nihil maxime minima laboriosam ut non libero sint! Minus modi suscipit optio magnam eveniet reiciendis in similique sit cum? Magni.`,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus aut aliquam omnis eius repellendus vel fugiat esse repellat adipisci velit minus ex porro molestiae voluptates optio, doloremque magni quam.',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rem officiis. Nesciunt sequi, quam magni dolorem hic eveniet eligendi molestias, inventore vitae nam, dolorum aperiam laudantium ullam cumque modi distinctio?
    Numquam ut magnam non quo quae ea placeat cupiditate. Nisi, nihil maxime minima laboriosam ut non libero sint! Minus modi suscipit optio magnam eveniet reiciendis in similique sit cum? Magni.`,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus aut aliquam omnis eius repellendus vel fugiat esse repellat adipisci velit minus ex porro molestiae voluptates optio, doloremque magni quam.',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rem officiis. Nesciunt sequi, quam magni dolorem hic eveniet eligendi molestias, inventore vitae nam, dolorum aperiam laudantium ullam cumque modi distinctio?
    Numquam ut magnam non quo quae ea placeat cupiditate. Nisi, nihil maxime minima laboriosam ut non libero sint! Minus modi suscipit optio magnam eveniet reiciendis in similique sit cum? Magni.`,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus aut aliquam omnis eius repellendus vel fugiat esse repellat adipisci velit minus ex porro molestiae voluptates optio, doloremque magni quam.',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rem officiis. Nesciunt sequi, quam magni dolorem hic eveniet eligendi molestias, inventore vitae nam, dolorum aperiam laudantium ullam cumque modi distinctio?
    Numquam ut magnam non quo quae ea placeat cupiditate. Nisi, nihil maxime minima laboriosam ut non libero sint! Minus modi suscipit optio magnam eveniet reiciendis in similique sit cum? Magni.`,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus aut aliquam omnis eius repellendus vel fugiat esse repellat adipisci velit minus ex porro molestiae voluptates optio, doloremque magni quam.',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rem officiis. Nesciunt sequi, quam magni dolorem hic eveniet eligendi molestias, inventore vitae nam, dolorum aperiam laudantium ullam cumque modi distinctio?
    Numquam ut magnam non quo quae ea placeat cupiditate. Nisi, nihil maxime minima laboriosam ut non libero sint! Minus modi suscipit optio magnam eveniet reiciendis in similique sit cum? Magni.`,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus aut aliquam omnis eius repellendus vel fugiat esse repellat adipisci velit minus ex porro molestiae voluptates optio, doloremque magni quam.',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, rem officiis. Nesciunt sequi, quam magni dolorem hic eveniet eligendi molestias, inventore vitae nam, dolorum aperiam laudantium ullam cumque modi distinctio?
    Numquam ut magnam non quo quae ea placeat cupiditate. Nisi, nihil maxime minima laboriosam ut non libero sint! Minus modi suscipit optio magnam eveniet reiciendis in similique sit cum? Magni.`,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
  ];
  return (
    <div className='h-container'>
      <div className='posts'>
        <h1>Posts</h1>
        {posts.map((post) => {
          return (
            <Link to={`/post/${post.id}`}>
              <div key={post.id} className='post'>
                <img src={post.img} width='100px' alt='' />
                <div className='content'>
                  <h2>{post.title}</h2>
                  <p>{post.desc}</p>
                  <div>
                    <button>Read more</button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
