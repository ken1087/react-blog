const ListComponent = () => {
    let list = ['안녕', '디지몬', '네 꿈을 꾸면서', '잠이 들래'];

    let returnElement = [];
    
    list.forEach(e => {
      returnElement.push(<div key={list.indexOf(e)}>{e}</div>)
    });

    return(
      <div>
        { returnElement }
      </div>
    )
}

export default ListComponent;