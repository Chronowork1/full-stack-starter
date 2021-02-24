import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Api from '../Api';

function SectionsList() {
  const [sections, setSections] = useState([]);

  useEffect(function() {
    Api.sections.index().then(response => setSections(response.data));
  }, []);

  //Pass in section data in onDelete
  function onDelete(section){
    if(window.confirm(`Are you sure you wish to delete ${section.name}?`)){
      //We'll execute code to delete the section
      //Delete the api section with this id
      Api.sections.delete(section.id).then(function(){
        const newSections = sections.filter(s=>
          //We're filtering the sections list, keeping every section that does not
          //match the one we're deleting
          s.id !== section.id
        )
        setSections(newSections)
      })
    }
  }

  return (
    <main className="container">
      <h1>Sections List</h1>
      <Link className="btn btn-primary" to="/sections/new">New</Link>
      <ul>
        {sections.map(s => (
          <li>
            <p><Link to={`/sections/${s.id}/edit`}>{s.name}, {s.slug}, {s.position}</Link></p>
            <p><button onClick={()=> onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default SectionsList;