import React from 'react';

function ProjectCard({ title, description, imgUrl, link, linkStatus, target }) {
    return (
        <div className='flex flex-col justify-between bg-dark-grey rounded-[30px] max-w-[350px] p-5 mb-5 md:flex-row-reverse md:p-6 md:justify-end md:h-[275px] xl:h-[300px]'>
            <div className='mb-4 md:self-center md:w-[70%]'>
                <h3 className='text-2xl mb-2 md:text-3xl'>
                    {title}
                </h3>
                <div className='text-light-grey font-light text-xl 2xl:text-2xl'>
                    {description}
                    <div className='mt-2'>
                        <a href={link}
                            target={target}
                            className={linkStatus}>
                            <div className='mr-2'>GitHub</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={` size-5 `}>
                                    <path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z">
                                    </path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-auto h-[200px] rounded-[15px] md:mr-10 md:w-[30%] md:h-auto overflow-clip'>
                <img className='' src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default ProjectCard;