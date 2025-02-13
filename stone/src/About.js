import chair from './assets/chair.jpg'

const About = () => {
  return (
    <div>
      <div className='about'>
        <h2 className='about-me'>About me</h2>
        <img className='aboutImage' src={chair} alt='chair drawing' />
      </div>
      <div>
        <p className='p1'>&clubs; a freelance frontend developer<br />
          (currently working on learning backend too)</p>
        <p className='p2'>&hearts; a poet</p>
        <p className='p3'>&diams; a part-time worker</p>
      </div>
    </div>
  )
}

export default About;