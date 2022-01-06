import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-4xl mx-auto p-4 font-nunito font-bold bg-[#E8EEF3] h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
