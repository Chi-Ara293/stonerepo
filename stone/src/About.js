import chairc from './assets/chairc.jpg'

const About = () => {
  return (
    <div>
      <div className='about'>
        <h2 className='about-me'>About me</h2>
        <div>
          <p className='p1'>a freelance frontend developer<br />
            (currently working on learning backend too)</p>
          <p className='p2'>a poet</p>
          <p className='p3'>a part-time worker</p>
        </div>
        <img className='aboutImage' src={chairc} alt='chair drawing' />
      </div>
    </div>
  )
}

export default About;