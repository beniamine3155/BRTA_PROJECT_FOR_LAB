import React from 'react';
import Banner from '../Banner/Banner';
import NoticeBoard from '../Cards/NoticeBoard';
import StuffCard from '../Cards/StuffCard';
import InfoCard from '../Cards/InfoCard';

const Home = () => {
    // Dummy data for notices
    const notices = [
        { id: 1, title: 'Notice 1', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 2, title: 'Notice 2', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 3, title: 'Notice 3', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    ];

    const stuffs = [
        { id: 1, title: 'Beniamine Nahid', designation: "Genaral Secretary, UK" },
        { id: 2, title: 'Humayan Esti', designation: "Senior Leader, UK" },
        { id: 3, title: 'Abir', designation: "Senior Leader, UK" },
    ];

    return (
        <div className="max-w-[1640px] mx-auto center-screen">
            <Banner></Banner>

            {/* Info section */}
            <div className='flex justify-center'>
                <div className="grid lg:grid-cols-4 lg:gap-5 lg:p-10 gap-1 ">
                    {/* Left side (big) */}
                    <div className="lg:col-span-3">
                        {/* Pass the notices array to the Map component */}
                        <NoticeBoard notices={notices} />
                        <div className='flex justify-between'>
                            <div className='grid lg:grid-cols-3 w-full lg:gap-3 lg:my-5 my-2'>
                            <InfoCard></InfoCard>
                            </div>
                        </div>
                    </div>
                    {/* Right side (small) */}
                    <div className="">
                        {stuffs.map((stuff) => (
                            <StuffCard stuffs={stuff}></StuffCard>
                        ))}
                    </div>
                </div>
            </div>
            {/* End info section */}

        </div>
    );
};

export default Home;
