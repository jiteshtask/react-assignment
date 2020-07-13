import React, { useState } from 'react';
import FileStructure from './FileStructure';
import ChildFileStructure from './ChildFileStructure';

const Index = () => {
    const [page , handlePage] = useState(1);
    const [parentFolder , handleParentFolder] = useState(["new"]);

    const [childFolder , handleChildFolder] = useState([]);

    const [index, handleIndex] = useState();

    const [mainFolderArray, handleMainFolderArray] = useState([]);

    const addChildFolder =() =>{ 
        handleChildFolder(childFolder => [...childFolder, "new"]);
    }

    const addParentFolder =() =>{
        handleParentFolder(parentFolder => [...parentFolder, "new"]);
    }

    const addMainArray =() =>{
        if(childFolder.length>0){
            mainFolderArray[index] = childFolder;
            handleMainFolderArray(mainFolderArray => [...mainFolderArray]);
        }

        handleChildFolder(childFolder => []);
    }

  if(page===1){
    return (
        <FileStructure
         handlePage={handlePage}
         parentFolder={parentFolder}
         addFolder={addParentFolder}
         handleIndex= {handleIndex}
         />
)
  }
  else if(page ===2){
      return(
        <ChildFileStructure 
        handlePage={handlePage}
        childFolder={mainFolderArray[index] ?mainFolderArray[index] : childFolder}
        addFolder={addChildFolder}
        addMainArray={addMainArray}/>
      )
  }

    

}

export default Index;