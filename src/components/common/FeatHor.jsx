import { Button } from "./Button"

export  function FeatHori({ title, text, img }) {
  return (
    <section className="feature-hor">
        <div className='feature-hor-text'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Button btnText='Join Us' onClick={undefined} className='primary-btn' />
        </div>
        <div className='feature-hor-img'>
            <img src={img} alt='Join as Trainer'></img>
        </div>
    </section>
  )
}
