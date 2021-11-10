import { Category as CategoryType } from '@prezly/sdk';
import React, { FunctionComponent } from 'react';

import { PaginationProps, StoryWithImage } from 'types';

import InfiniteStories from '../InfiniteStories';
import Layout from '../Layout';

import CategoryHeader from './CategoryHeader';

interface Props {
    category: CategoryType;
    pagination: PaginationProps;
    slug: string;
    stories: StoryWithImage[];
}

const Category: FunctionComponent<Props> = ({ category, pagination, slug, stories }) => (
    <Layout
        title={category.display_name}
        description={category.display_description || undefined}
        url={`/category/${slug}`}
    >
        <CategoryHeader category={category} />

        <InfiniteStories initialStories={stories} pagination={pagination} category={category} />
    </Layout>
);

export default Category;
