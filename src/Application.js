import { Routes, Route, Link } from 'react-router-dom';

function Application() {
  return (
    <div className="grid grid-cols-12 grid-rows-2">
      <h1 className="text-3xl font-bold bg-red-300 col-span-12">
        Hello world!
      </h1>
      <nav className="grid-cols-3 flex flex-rows">
        <article>
          <Link to="/">Home</Link>
        </article>
        <article>
          <Link to="/about">About</Link>
        </article>
      </nav>
      <section className="grid-cols-9">
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="about" element={<p>About</p>} />
        </Routes>
      </section>
    </div>
  );
}

export default Application;
