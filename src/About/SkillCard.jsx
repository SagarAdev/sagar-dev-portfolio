import React from 'react';

function SkillCard({ imgUrl, title }) {
    return (
        <div className=' flex justify-center items-center flex-col my-2 mx-3 md:px-5'>
            <div>
                <img className='size-[67px] md:size-[75px] 2xl:size-[100px]' src={imgUrl} alt="" />
            </div>
            <p className='text-light-grey font-light'>{title}</p>
        </div>
    )
}

export default SkillCard;