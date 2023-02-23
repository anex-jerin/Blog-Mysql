const Single = () => {
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
    <div className='s-container'>
      <div className='s-left'>
        <img
          src='https://images.unsplash.com/photo-1542442828-287217bfb87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            alt=''
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 Days ago</p>
          </div>
        </div>
        <div className='content'>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            consequatur. Magni, minus porro obcaecati eligendi vel harum
            possimus expedita optio? Molestias ea ad quidem laudantium odio
            dolore iste fugiat maiores! Delectus incidunt in tenetur quis et
            debitis amet ex adipisci. Quam aut inventore distinctio nemo ipsa
            commodi eum itaque reiciendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, aperiam? Quisquam aperiam, obcaecati asperiores in
            dignissimos quibusdam voluptate maiores vitae. Ea laudantium vitae
            pariatur cupiditate officiis impedit sint voluptas earum. Aliquam
            soluta esse consectetur et tempore est ea officiis? Nulla. Ea
            aperiam facere deleniti minus voluptas laudantium ad, corrupti
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, aperiam? Quisquam aperiam, obcaecati asperiores in
            dignissimos quibusdam voluptate maiores vitae. Ea laudantium vitae
            pariatur cupiditate officiis impedit sint voluptas earum. Aliquam
            soluta esse consectetur et tempore est ea officiis? Nulla. Ea
            aperiam facere deleniti minus voluptas laudantium ad, corrupti
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, aperiam? Quisquam aperiam, obcaecati asperiores in
            dignissimos quibusdam voluptate maiores vitae. Ea laudantium vitae
            pariatur cupiditate officiis impedit sint voluptas earum. Aliquam
            soluta esse consectetur et tempore est ea officiis? Nulla. Ea
            aperiam facere deleniti minus voluptas laudantium ad, corrupti
            aliquam.
          </p>
        </div>
      </div>

      <div className='s-right'>
        <h1>More posts</h1>
        <div className='posts'>
          {posts.map((post) => {
            return (
              <div key={post.id} className='post'>
                <img src={post.img} alt='' />
                <h2>{post.title.slice(0, 50)}</h2>
                <button>Read more</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Single;
