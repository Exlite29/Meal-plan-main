import React from 'react'

const WEEKS = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
]

const Weeks: React.FC = () => {
    return (
        <div className='flex justify-between gap-4 mt-5'>
            {WEEKS.map((item, i) => (
                <ul key={i} className='flex'>
                    <li className='font-bold text-sm'>{item}</li>
                </ul>))}
        </div>
    )
}

export default Weeks