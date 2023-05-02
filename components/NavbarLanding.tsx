import { ThemeCodeSelect } from '@components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function NavbarLanding() {
	const [userName, setUserName] = useState('tincho');
	const userLogin = true;

	useEffect(() => {
		setUserName(
			userName
				.split('')
				.sort((a, b) => (Math.random() > 0.5 ? -1 : 1))
				.join('')
		);
		// console.log(userName);
	}, []);

	return (
		<div className='navbar justify-center fixed  z-10 bg-neutral text-neutral-content'>
			<div className='bg-neutral max-w-7xl w-full'>
				<div className='flex-1'>
					<a className='btn btn-ghost normal-case text-xl'>
						Code Runner {'</>'}
					</a>
				</div>
				<span className='px-2'>Themes 🔥</span>
				<ThemeCodeSelect />
				<div className='flex-none bg-neutral text-neutral-content'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<a
								className='underline'
								href='https://twitter.com'
								target='_blank'
							>
								Tweet
							</a>
						</li>
						<li>
							<a className='' href='https://twitter.com' target='_blank'>
								top 75
							</a>
						</li>
						<li tabIndex={0}>
							<a>
								News
								<svg
									className='fill-current'
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
								>
									<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
								</svg>
							</a>
							<ul className='bg-base-100 text-neutral p-2'>
								<li>
									<a>News 1</a>
								</li>
								<li>
									<a>News 2</a>
								</li>
							</ul>
						</li>
						{!!userLogin && (
							<div className='menu menu-horizontal rounded-box'>
								<li tabIndex={0} className=''>
									<span className='w-16 rounded-full'>
										<img
											loading='lazy'
											alt='asd'
											src={`https://api.multiavatar.com/${userName}.svg`}
										/>
									</span>
									<ul className='bg-base-100 text-neutral  -translate-x-[50%] p-2 shadow rounded-box w-36'>
										<li>
											<a className='justify-between'>Profile</a>
										</li>
										<li>
											<a>Settings</a>
										</li>
										<li>
											<a>Logout</a>
										</li>
									</ul>
								</li>
							</div>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
export default NavbarLanding;