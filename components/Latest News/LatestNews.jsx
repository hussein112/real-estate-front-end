const LatestNews = () => {
  return (
    <section id="latest-news">
        <h2 class="section-title center">Latest News</h2>
        <div class="container cards d-flex flex-wrap align-items-center">
            <div class="card m-2">
                <img src="http://127.0.0.1:8000/storage/post/nbON6O9owuBjIR2Vj9zqWGhvDLkQX8PzjKZJX40y.jpg" class="card-img-top" alt="Blog Post" loading="lazy" />
                <div class="card-body">
                    <header class="card-head">
                        <a href="http://127.0.0.1:8000/posts/post/227" class="card-title">Image 101</a>
                    </header>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque ab aperiam velit rem, nostrum necessitatibus deserunt esse, temporibus labore nulla.</p>
                    <div class="links d-flex justify-content-between align-items-center flex-wrap">
                        <a href="http://127.0.0.1:8000/posts/post/227" class="card-link btn btn-primary">
                            Continue Reading
                        </a>
                        <a href="http://127.0.0.1:8000/posts/s/date/2023-06-17%2012:51:02" class="date">
                            2023-06-17
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestNews
