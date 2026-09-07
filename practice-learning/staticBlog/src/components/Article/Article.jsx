function Article({ id, title, author, price, image, onRemove }) {
  // const { title, author } = props;

  return (
    <article className="article-card">
      <header>
        <img src={image} alt="Article Img" />
      </header>
      <main className="article-body">
        <h4 className="article-title" onClick={() => onRemove(id)}>
          {title}
        </h4>
        <p className="article-caption">
          در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما
          حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از
          ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با
          زبانی ساده و مثال‌های عملی پوشش دادیم!
        </p>
      </main>
      <div className="divider"></div>
      <footer className="article-footer flex justify-between">
        <div>
          <div className="author-label flex items-center gap-1">
            <i className="fa-solid fa-user"></i>
            <span> نویسنده: </span>
            <span className="author-name">{author || "تیم سبزلرن"}</span>
          </div>
        </div>
        <div>
          <div className="published-date flex items-center gap-2">
            <i className="fa-solid fa-calendar"></i>
            {price ? (
              <span> {`${price.toLocaleString("fa-ir")} تومان`} </span>
            ) : (
              "رایگان"
            )}
          </div>
        </div>
      </footer>
    </article>
  );
}

export default Article;
