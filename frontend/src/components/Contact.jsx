import React from 'react'
import { Helmet } from 'react-helmet'
// import ProductCarousel from '../components/ProductCarousel'
import NewsLetter from '../components/NewsLetter'
// import background from '../images/art-bg.png'

const Contact = () => {
	const email = 'ismail@alphaseed.tech'
	// const bg = {
	// 	// display: 'block',
	// 	// height: '400px',
	// 	// minWidth: '100%',
	// 	// width: '100%',
	// 	// maxWidth: '100%',
	// 	// lineHeight: '1',
	// 	// width: '1920px',
	// 	// height: '820px',
	// 	backgroundSize: 'cover',

	// 	backgroundImage: `url(${background})`,
	// }
	return (
		// <div style={{ backgroundImage: `url(${background})` }}>
		<div>
			<Helmet>
				<title>Artemos | Contact</title>
			</Helmet>
			<section className='text-gray-700 body-font relative'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
							Contact Us
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							If you have any query do not hesitate to reachout.
						</p>
					</div>
					<div className='lg:w-1/2 md:w-2/3 mx-auto'>
						<div className='flex flex-wrap -m-2'>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label
										htmlFor='name'
										className='leading-7 text-sm text-gray-600'>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label
										htmlFor='email'
										className='leading-7 text-sm text-gray-600'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-full'>
								<div className='relative'>
									<label
										htmlFor='message'
										className='leading-7 text-sm text-gray-600'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
								</div>
							</div>
							<div className='p-2 w-full'>
								<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Submit
								</button>
							</div>
							<div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
								<a className='text-indigo-500' href={`mailto:${email}`}>
									artemos@alphaseed.tech
								</a>
								<p className='leading-normal my-5'>
									Office 1837, Central Park Tower, DIFC Dubai, United Arab
									Emirates Email : hello@alphaseed.tech Phone : +971 4 572 4697
									DIFC Courts and Smart Dubai launch joint taskforce for world’s
									first Court of the Blockchain DIFC Courts and Smart Dubai
									launch joint taskforce for world’s first Court of the
									Blockchain Technology and Innovation Help Participants with
									#Dubai30x30 Goals at DIFC Fitness Village Technology and
									Innovation Help Participants with #Dubai30x30 Goals at DIFC
									Fitness Village
									<br />
									Saint Cloud, MN 56301
								</p>
								<span className='inline-flex'>
									<a className='text-gray-500' href={'/'}>
										<svg
											fill='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
										</svg>
									</a>
									<a className='ml-4 text-gray-500' href={'/'}>
										<svg
											fill='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
										</svg>
									</a>
									<a className='ml-4 text-gray-500' href={'/'}>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<rect
												width='20'
												height='20'
												x='2'
												y='2'
												rx='5'
												ry='5'></rect>
											<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
										</svg>
									</a>
									<a className='ml-4 text-gray-500' href={'/'}>
										<svg
											fill='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<NewsLetter />
			<section>{/* <ProductCarousel /> */}</section>
		</div>
	)
}

export default Contact
