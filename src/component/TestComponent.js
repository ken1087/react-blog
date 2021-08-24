const TestComponent = (props) => {

    let componentTitle = props.title;
  
    return (
      <div>
        <div>안녕</div>
        <div>난 { componentTitle }야</div>
        <div>반가워</div>
      </div>
    )
}

export default TestComponent;