import AddCartBtn from './Modal/AddCartBtn';
import TypographyH5 from './Typography/Headings/TypographyH5';
import Paragraph1 from './Typography/Paragraphs/Paragraph1';

const MenuItem = ({ item, button, cardClass }) => {
    console.log("item : ", item);
    cardClass = !!cardClass ? cardClass : "";
    return (
        <div className="col-md-4 px-2 pb-3" >
            <div className={`card text-center ${cardClass}`} >
                <img src={item.image_path} className="card-img-top" alt="Menu" style={{height:"230px", width:"400px"}} />
                <div className="card-body ">
                    <TypographyH5>{item.name}</TypographyH5>
                    <Paragraph1 className="card-text">{item.description}</Paragraph1>
                    {/* <p className="card-text">{item.description}</p> */}
                </div>
                <div className="card-footer bg-transparent border-0">
                    <Paragraph1 className="text-danger mb-3 fw-bold">$ {item.price}</Paragraph1>
                    {button &&
                        <AddCartBtn item={item} />
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuItem;