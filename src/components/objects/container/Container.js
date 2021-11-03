import Input from "../../atoms/input/Input";
import Title from "../../atoms/title/Title";
import Cards from "../../molecules/cards/Cards";
import Collage from "../../molecules/collage/Collage";
import Footer from "../../molecules/footer/Footer";


function Container() {
    return (
        <>
            <Cards />
            <Title oneTitle={'INSTAGRAM'} secondTitle={'#ESPUFI'}  /> 
            <Collage />
            <Title oneTitle={'NEWSLETTER'} secondTitle={'SUSCRIBETE'} thirdTitle={'Y enterate de todas las novedades'}/>
            <Input />
            <Footer />
        </>
    );
}

export default Container