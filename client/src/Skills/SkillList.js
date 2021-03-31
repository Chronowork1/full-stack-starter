import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Api from '../Api';

function SkillList() {
  const [skill, setSkill] = useState([]);

  useEffect(function() {
    Api.skills.index().then(response => setSkill(response.data));
  }, []);

  //Pass in skill data in onDelete
  function onDelete(skill){
    if(window.confirm(`Are you sure you wish to delete ${skill.name}?`)){
      //We'll execute code to delete the skill
      //Delete the api skill with this id
      Api.skills.delete(skill.id).then(function(){
        const newSkill = skill.filter(s=>
          //We're filtering the skills list, keeping every skill that does not
          //match the one we're deleting
          s.id !== skill.id
        )
        setSkill(newSkill)
      })
    }
  }

  return (
    <main className="container">
      <h1>Skill List</h1>
      <Link className="btn btn-primary" to="/skill/new">New</Link>
      <ul>
        {skill.map(s => (
          <li>
            <p><Link to={`/skill/${s.id}/edit`}>{s.name}, {s.slug}, {s.position}</Link></p>
            <p><button onClick={()=> onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default SkillList;