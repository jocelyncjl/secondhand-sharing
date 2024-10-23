import TalkingPersons from '../images/persons.jpg';

export function Persons() {
    return (
        <div className='relative w-full'>
            <div className='max-w-2xl mx-auto'>
                <img className='w-full' src={TalkingPersons} alt='Talking persons'/>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Left person's dialogue */}
                    <path d="M15,30 C5,25 3,14 2,10" stroke="black" strokeWidth="0.5" fill="none"/>
                    <rect x="0" y="5" width="30" height="10" rx="2" ry="2" fill="#f0f0f0"/>
                    <text x="2" y="11" fontSize="2" fill="black">Where did you get that?</text>

                    {/* Right person's dialogue */}
                    <path d="M78,30 C88,25 90,14 91,10" stroke="black" strokeWidth="0.5" fill="none"/>
                    <rect x="70" y="5" width="30" height="10" rx="2" ry="2" fill="#f0f0f0"/>
                    <text x="72" y="7" fontSize="2" fill="black">
                        <tspan x="72" dy="4">ThriftShare! Check it out!</tspan>
                    </text>
                </svg>
            </div>
        </div>
    )
}
