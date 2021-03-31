import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../Api";

function SkillForm() {
  const {id} = useParams();
  const history = useHistory();
  const [skill, setSkill] = useState({
    name: '',
    slug: '',
    position: 0
  });

  //useEffect: Loads the function after 
  //Empty Parameter at the end of useEffect only load once.
  useEffect(function() {
    if(id){
      Api.skill.get(id).then((response)=>{
        setSkill(response.data)
      })
    }
  }, [])

  function onChange(event) {
    const newSkill = {...skill};
    newSkill[event.target.name] = event.target.value;
    setSkill(newSkill);
  }

  async function onSubmit(event) {
    event.preventDefault();
    //If id exist from url path, update id and skill else it will create a new skill
    try {
      if(id){
        await Api.skills.update(id, skill)
      }else{
        await Api.skills.create(skill)
      }
      history.push('/skill');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="container">
      <h1>Skill Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" name="name" value={skill.name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input className="form-control" type="text" name="slug" value={skill.slug} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Position</label>
          <input className="form-control" type="text" name="position" value={skill.position} onChange={onChange} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(skill)}</p>
    </main>
  );
}
export default SkillForm;