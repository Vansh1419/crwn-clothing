import './category-item.component.style.scss'
const CategoryItem = (props) => {
    const { title, imageUrl } = props.category
    return (
        <div className='home__content'>
            <div className="category__container" >
                <div className="background__image" style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                <div className="category__body__container">
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    )
}
export default CategoryItem