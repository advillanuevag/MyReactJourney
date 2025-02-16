export default function CoreConcept({ image, title, description }){ /*Here we use Destructuring JS feature
  to set the CORE_CONCEPTS values as Props for the CoreConcept Component. */
  return(
    <li>
      <img src={image} alt={title}/> 
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}