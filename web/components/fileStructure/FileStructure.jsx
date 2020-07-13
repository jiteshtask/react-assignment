import React from 'react'
const FileStructure = props => {


    return (
        <div className="folder_wrapper">
          <div className="folder_inner">
            {props.parentFolder.map((f,i) =>  
            <div className="folder">
            <img src="../../assets/images/folder.svg"/>
              <span className="folder_name" onClick={()=>{
                  props.handlePage(page => 2);
                  props.handleIndex(i);
                  }}>{`Folder Name`+ (i+1)} </span>
            </div>)}
            <div className="add_folder" onClick ={props.addFolder}>
              +
            </div>
          </div>
        </div>
      );
}

export default FileStructure;