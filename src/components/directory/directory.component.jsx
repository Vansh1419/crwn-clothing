import CategoryItem from '../category-item/category-item.component'
import './directory.component.style.scss'
const Directory = (props) => {
    console.log(props.categories);
    return (<div className="categories__container">
        {
            props.categories.map((category) => {
                return (
                    <CategoryItem key={category.id} category={category} />
                    // <div>hello</div>
                )
            })
        }
    </div>)
}
export default Directory