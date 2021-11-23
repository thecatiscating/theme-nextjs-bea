import { NewsroomGallery } from '@prezly/sdk';
import UploadcareImage from '@prezly/uploadcare-image';
import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import styles from './GalleryCard.module.scss';

interface Props {
    className?: string;
    gallery: NewsroomGallery;
}

const GalleryCard: FunctionComponent<Props> = ({ className, gallery }) => {
    const { title, images, uuid } = gallery;

    return (
        <Link href={`/media/album/${uuid}`} passHref>
            <a className={classNames(styles.container, className)}>
                <UploadcareImage
                    className={styles.thumbnail}
                    lazy
                    layout="fill"
                    objectFit="cover"
                    imageDetails={images[0].uploadcare_image}
                />
                <span className={styles.title}>{title}</span>
            </a>
        </Link>
    );
};

export default GalleryCard;