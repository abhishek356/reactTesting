
 const Application = () => {
    return (
      <>
        {/* <h1>Job application form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <span title="close">X</span>
        <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
        <div data-testid="custom-element">Custom HTML element</div> */}
        <form>
        <h1>Job application form</h1>
        <h2>Section 1</h2>
          {/* <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Fullname"
              value="Vishwas"
              onChange={() => {}}
            /> 
          </div>*/}
          <div>
            <label htmlFor="name">name</label>
            <input type = 'text' id='name' placeholder="Enter full name"
            value = 'This is the default value'/>
          </div>
          <img src ='https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0'
           alt = 'an image'/>
          <div>
            <label htmlFor="job-location">name</label>
            <select id="job-location" name="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" id="terms"  name= 'terms'/> I agree to the terms and
              conditions
            </label>
          </div>
          <button disabled>Submit</button>
        </form>
      </>
    )
  }

  export default Application