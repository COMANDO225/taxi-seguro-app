import SectionHeader from "../SectionHeader";

import styles from '../../styles/Galleries.module.css'

const GalleryLayout = (props) => {

    const { sectionId, title, children } = props

    return (
        <section className="gallery_section galeria_chofer" id={sectionId}>
            <div className="wrapper">
                <SectionHeader subtitle={title}> </SectionHeader>
                <div className={styles.gallery_body}>
                <div className={styles.gallery_layout}>
                    {children}
                </div>
            </div>
            </div>
        </section>
    );
}

GalleryLayout.defaultProps = {
    title: 'Galeria de choferes'
}

export default GalleryLayout;