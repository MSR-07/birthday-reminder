import React from 'react';

const List = ({people}) => {
    return (
       <>
        {people.map((person)=>{
            const{id,name,age,image}=person
            return(
                <div key={id} className='d-flex align-items-center gap-2 mb-2'>
                    <img src={image} alt={name} className='border border-3 border-danger rounded-circle w-25' />
                    <div>
                        <h4 className='m-0'>{name}</h4>
                        <p className='text-muted m-0'>{age}</p>
                    </div>
                </div>
            )

        })}
       </>
    );
}

export default List;
