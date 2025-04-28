import React from 'react'

const Footer = () => {


    const year = new Date(Date.now()).getFullYear()

    return (
        <footer className='flex mt-auto items-center justify-center pt-5 text-[#809EA1]'>&copy; {year} Yashpratap Shah</footer>
    )
}

export default Footer