function Item({item}) {
    return (
        <>
        <input className='list' type='checkbox' value={item} />
            <p className='itm'>{item}</p>
            {/* <button>저장</button>
            <button>삭제</button> */}
            <div className='check-btn'>
              <button>저장</button>
              <button>삭제</button>
            </div>
        </>
    )
}
export default Item;