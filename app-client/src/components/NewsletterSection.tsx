function NewsletterSection() {
  return (
    <div className='newsletter-section my-8 md:mt-20 lg:mt-0 sm:w-[450px] md:w-3/5 lg:w-[25%]'>
      <h2 className='text--dark text-base font-semibold poppins mb-2'>
        NewsLetter
      </h2>
      <span className='text--colors_secondary text-[12px]'>
        Join our newsletter, and get a weekly update of our awesome new products
        and bonus offers
      </span>
      <form action='#' className='newsletter-form mt-4 flex'>
        <input
          className='custom--input text-black px-4 py-2 w-[75%] border-b outline-none'
          type='text'
        />
        <button
          type='submit'
          className='bg-blue-500 px-4 py-2 text-[12px] font-semibold text--colors_default-invert w-[25%] poppins'
        >
          Join in
        </button>
      </form>
    </div>
  );
}

export default NewsletterSection;
