import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from  'react-icons/bs'
import {useRouter} from 'next/router'
import {useStateContext} from "../context/StateContext"
import {SchoolPride} from "../lib/utils"

const Success = () => {
  const {setcartItems, setTotalPrice, settotalQuantities} = useStateContext()
  const [order, setOrder] = useState()

  useEffect(() => {
    localStorage.clear()
    setcartItems([])
    setTotalPrice(0)
    settotalQuantities(0)
    SchoolPride()
  }, [])
  

  return (
    <div className='success-wrappre'> 
        <div className="success">
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank You For Your Order!!</h2>
            <p className='email-msg'>check your email inbox for the recepit.</p>
            <p className='description'>
              If You have any Questions , please email
              <a href="mailto:shubhamchavan@live.com" className='email'>shubhamchavan@live.com</a>
            </p>
            <Link href='/'>
              <button type='button'width ="300px" className='btn'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success