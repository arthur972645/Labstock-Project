import './Carrosel.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade } from 'swiper/modules';
import {CarouselContainer, SlideImage} from './Carrosel.js'

const Carrosel = () => {

  const data = [
    {id: '1', image: 'https://api-blog.sistemafiea.com.br/wp-content/uploads/2024/07/sesi_robocamb-2.jpg'},
    {id: '2', image: 'https://api-blog.sistemafiea.com.br/wp-content/uploads/2024/07/robocamb-3-1021x1024.jpeg'},
    {id: '3', image: 'https://api-blog.sistemafiea.com.br/wp-content/uploads/2024/06/paperben-7-Copia.jpeg'},
  ]

  return(
    <CarouselContainer>
      
      <Swiper
        modules={EffectFade}
        effect='fade'
        slidesPerView={1}
        pagination = {{clickable: true}}
        navigation
      >
      {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <SlideImage src={item.image} alt="Slider" className='slide-item' />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}
export default Carrosel