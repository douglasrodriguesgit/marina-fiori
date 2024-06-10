import React from 'react'
import styles from '../Portfolio/Portfolio.module.css'
import {register} from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Swiper from 'swiper'

const SlideSwiper = () => {
  return (
    <div className={styles.container}>

      <Swiper>
        
      </Swiper>
      
    </div>
  )
}

export default SlideSwiper
